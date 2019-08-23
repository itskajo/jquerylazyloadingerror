import { Component, OnInit } from '@angular/core';
import { ControlTabActions } from '../control-tabs/control-tabs.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  actionItem: ControlTabActions[] = [{
    icon: '',
    label: 'lazy',
    tooltip: 'Testing the tooltip'
  }];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onActionItemClicked(index) {
    console.log(index);
    this.router.navigateByUrl('/lazy');
  }

}
