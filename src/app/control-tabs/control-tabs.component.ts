import { Component, OnInit, AfterViewInit, Input, EventEmitter, Output, ViewChild, ContentChildren, QueryList } from '@angular/core';
import { ThemePalette, MatTabHeaderPosition, MatTabChangeEvent, MatTabGroup, MatTab } from '@angular/material';
import { ControlTabActions } from './control-tabs.model';
import $ from 'jquery';

@Component({
  selector: 'app-control-tabs',
  templateUrl: './control-tabs.component.html',
  styleUrls: ['./control-tabs.component.scss']
})
export class ControlTabsComponent implements OnInit, AfterViewInit {
 /** Duration for the tab animation. Will be normalized to milliseconds if no units are set. */
 @Input()
 animationDuration: string = '500';
 /** Background color of the tab group. */
 @Input()
 backgroundColor: ThemePalette;
 /** Theme color palette for the component. */
 @Input()
 color: ThemePalette = 'primary';
 /** Whether ripples are disabled. */
 @Input()
 disableRipple: boolean;
 /** Whether the tab group should grow to the size of the active tab. */
 @Input()
 dynamicHeight: boolean;
 /** Position of the tab header. */
 @Input()
 headerPosition: MatTabHeaderPosition;
 /** The index of the active tab. */
 @Input()
 selectedIndex: number|null;
 /** Event emitted when the body animation has completed */
 @Output()
 animationDone = new EventEmitter<void>();
 /** Event emitted when focus has changed within a tab group. */
 @Output()
 focusChange = new EventEmitter<MatTabChangeEvent>();
 /** Output to enable support for two-way binding on [(selectedIndex)] */
 @Output()
 selectedIndexChange = new EventEmitter<number>();
 /** Event emitted when the tab selection has changed. */
 @Output()
 selectedTabChange = new EventEmitter<MatTabChangeEvent>();
 /** Whether tabs should be stretched or not */
 @Input()
 stretchedTabs: boolean = false;

 /**
  * This input will set the action items beneath the tabs group. Action items will be defined by ControlTabActions-class.
  * You need to provide an array of ActionItems, even when you just want to add one.
  */
 @Input()
 actionItems: ControlTabActions[] = [];
 /** Event emitted when an action button is clicked. Will return the index of the clicked action */
 @Output()
 actionCalled: EventEmitter<number> = new EventEmitter<number>();

 /** Will hold MatTabGroup instance */
 @ViewChild(MatTabGroup, {static: false}) matTabGroup: MatTabGroup;
  /** Will hold all MatTabs from ngContent */
 @ContentChildren(MatTab) tabsFromNgContent: QueryList<MatTab>;

 /** @ignore empty constructor */
 constructor() { }

 /** Will Handle Click Event of Action Items and will emit the index of the clicked Action */
 onActionCall(index){
   this.actionCalled.emit(index);
 }

 /** @ignore empty onInit */
 ngOnInit() { }

 /** Will put Actionbar next to mat-tab-header and redraws MatTabGroup to show tabs of ngContent */
 ngAfterViewInit() {
   $('mat-tab-group mat-tab-header').after($('#ControlTabsActionContainer'));
   this.matTabGroup._tabs.reset([...this.tabsFromNgContent.toArray()]);
 }

 /** Will handle animationDone event of MatTabGroup and will emit animationDone EventEmitter */
 onAnimationDone() {
   this.animationDone.emit();
 }

 /** Will handle focusChange event of MatTabGroup and will emit focusChange EventEmitter */
 onFocusChange(event: MatTabChangeEvent) {
   this.focusChange.emit(event);
 }

 /** Will handle selectedIndexChange event of MatTabGroup and will emit selectedIndexChange EventEmitter */
 onSelectedIndexChange(event: number) {
   this.selectedIndexChange.emit(event);
 }

 /** Will handle selectedTabChange event of MatTabGroup and will emit selectedTabChange EventEmitter */
 onSelectedTabChange(event: MatTabChangeEvent) {
   this.selectedTabChange.emit(event);
 }

 /** Re-aligns the ink bar to the selected tab element. */
 public realignInkBar() {
   this.matTabGroup.realignInkBar();
 }

}
