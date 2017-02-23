import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'app works!';

  constructor(private router: Router) {}

  ngOnInit() {
  	console.log(2342340);
  	this.router.navigateByUrl('/feed');
  }
}
