import { Component, OnInit } from '@angular/core';
import { ControlTabActions } from 'src/app/control-tabs/control-tabs.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lazy-component',
  templateUrl: './lazy-component.component.html',
  styleUrls: ['./lazy-component.component.scss']
})
export class LazyComponentComponent implements OnInit {

  actionItem: ControlTabActions[] = [{
    icon: '',
    label: 'home',
    tooltip: 'Testing the tooltip'
  }];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onActionItemClicked(index) {
    console.log(index);
    this.router.navigateByUrl('/home');
  }

}
