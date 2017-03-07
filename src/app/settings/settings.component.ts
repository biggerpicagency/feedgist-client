import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  checkedColor = 'accent';
  checked = false;
  disabled = false;
  reminder_type = 1;
  reminder_first_at = '11:00';
  reminder_second_at = '19:00';
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
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00'
  ];

  constructor() { }

  ngOnInit() {
  }

}
