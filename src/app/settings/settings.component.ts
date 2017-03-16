import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { MdSnackBar } from '@angular/material';

import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {
  private oneSignalDetector: Subscription;
  private userDeviceSettings: Subscription;
  private localStorageWebPushPlayerKey = 'webpush_player_id';

  oneSignalPlayerId: any = null;
  ready = false;
  checkedColor = 'accent';
  webPushSubscribed = false;
  isWebPushSupported = null;
  settings: any = {
    reminder_type: 1,
    reminder_first_at: '11:00',
    reminder_second_at: '19:00'
  };
  hours = [
    '00:00',
    '01:00',
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00'
  ];

  constructor(private api: ApiService, public snackBar: MdSnackBar) { }

  ngOnInit() {
    this.ready = true;
    this.isWebPushSupported = false;

    this.oneSignalDetector = IntervalObservable.create(100).subscribe(() => {
      let OneSignal = window['OneSignal'] || null;

      if (typeof OneSignal !== 'undefined' && typeof OneSignal === 'function') {
        this.ready = true;
        this.isWebPushSupported = OneSignal.isPushNotificationsSupported();

        OneSignal.isPushNotificationsEnabled().then((isSubscribed) => {
          this.getUserDeviceSettings(isSubscribed);
        });

        this.oneSignalDetector.unsubscribe();
      }
    });
  }

  ngOnDestroy() {
    this.oneSignalDetector.unsubscribe();

    if (this.userDeviceSettings) {
      this.userDeviceSettings.unsubscribe();
    }
  }
  
  getUserDeviceSettings(isSubscribed) {
    let OneSignal = window['OneSignal'] || null;
    let playerId = this.getWebPushPlayerId();

    if (playerId) {
      this.userDeviceSettings = this.api.get('settings/' + playerId).subscribe((res) => {
        this.webPushSubscribed = true;
        this.settings = {
          player_id: res.player_id,
          reminder_type: res.reminder_type,
          reminder_first_at: this.recalculateHourWithUserTimezone(res.reminder_first_at, false),
          reminder_second_at: this.recalculateHourWithUserTimezone(res.reminder_second_at, false),
        };
      });
    }
  }

  changeWebPushSubscription() {
    let OneSignal = window['OneSignal'] || null;

    if (!OneSignal) {
      return;
    }

    if (this.webPushSubscribed) {
      if (!this.getWebPushPlayerId()) {
        OneSignal.push(function() {
          OneSignal.registerForPushNotifications({
            modalPrompt: false
          });
        });

        OneSignal.push(() => {
          OneSignal.getUserId().then((userId) => {
            this.setWebPushPlayerId(userId);
          });
        });
      }

    } else {
      this.removeUserDeviceFromWebPush();
    }

    OneSignal.push(["setSubscription", this.webPushSubscribed]);

    OneSignal.on('notificationPermissionChange', ((permissionChange) => {
      var currentPermission = permissionChange.to;
      
      if (currentPermission === 'denied') {
        this.isWebPushSupported = false;
        this.removeUserDeviceFromWebPush();
      }

      OneSignal.push(["setSubscription", this.webPushSubscribed]);
    }));
  }

  save() {
    let OneSignal = window['OneSignal'] || null;

    if (this.oneSignalPlayerId) {
      this.callApiForSave();
    } else {
      OneSignal.push(() => {
        OneSignal.getUserId().then((userId) => {
          if (userId) {
            this.setWebPushPlayerId(userId);
            this.callApiForSave();
          }
        });
      });
    }
  }

  callApiForSave() {
    let data = Object.assign({}, this.settings);
    data.player_id = this.oneSignalPlayerId;
    data.reminder_first_at = this.recalculateHourWithUserTimezone(data.reminder_first_at, true);
    data.reminder_second_at = this.recalculateHourWithUserTimezone(data.reminder_second_at, true);

    this.api.put('settings', data).subscribe((res) => {
      this.snackBar.open(res.message, null, {
        duration: 1000
      });
    });
  }

  removeUserDeviceFromWebPush() {
    if (!this.getWebPushPlayerId()) {
      return;
    }

    if (this.userDeviceSettings) {
      this.userDeviceSettings.unsubscribe();
    }
    
    this.api.delete('settings/' + this.oneSignalPlayerId).subscribe((res) => {
      this.forgetWebPushPlayerId();
      this.snackBar.open(res.message, null, {
        duration: 1000
      });
    });
  }

  private recalculateHourWithUserTimezone(hour, toUtc) {
    let onlyHour = hour.substring(0, 2);
    let timezoneOffset = (new Date().getTimezoneOffset())/60;

    if (onlyHour.substring(0, 1) === '0') {
      onlyHour = parseInt(onlyHour.substring(1, 2));
    } else {
      onlyHour = parseInt(onlyHour);
    }

    return (toUtc ? onlyHour+timezoneOffset : onlyHour-timezoneOffset) + ':00';
  }

  private getWebPushPlayerId() {
    return localStorage.getItem(this.localStorageWebPushPlayerKey) || null;
  }

  private setWebPushPlayerId(id) {
    if (!id) {
      return;
    }

    localStorage.setItem(this.localStorageWebPushPlayerKey, id);
    this.oneSignalPlayerId = id;
  }

  private forgetWebPushPlayerId() {
    localStorage.removeItem(this.localStorageWebPushPlayerKey);
  }

}
