import { ActionButton } from './../models/Action';
import { ToolbarService } from './../services/toolbar-service';
import { Component, OnInit } from '@angular/core';
import { ActionButton, ActionType } from '../models/Action';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  actions: Array<ActionButton> = [];

  constructor(private toolbarService: ToolbarService) {
    this.toolbarServiceSubscribe();
  }

  ngOnInit() {

  }

  execute(action: ActionButton) {
    action!.executor();
  }

  add(action: ActionButton) {
    if(action && !this.actions.filter(act => act.label == action.label).length)
      this.actions.push(action);
  }

  renderButton(action: ActionButton, render: boolean) {
    this.actions.filter(act => act.label == action.label).forEach(act => act.render = render);
  }

  enableButton(action: ActionButton, disable: boolean) {
    this.actions.filter(act => act.label == action.label).forEach(act => act.disabled = disable);
  }

  clear() {
    this.actions = [];
  }

  toolbarServiceSubscribe() {
    this.toolbarService.listenerSubscribe().subscribe(actionSubject => {
      if(actionSubject && actionSubject.action) {
        switch(actionSubject.action) {
          case ActionType.ADD:
            this.add(actionSubject.data);
            break;
          case ActionType.SHOW:
            this.renderButton(actionSubject.data, true);
            break;
          case ActionType.HIDE:
            this.renderButton(actionSubject.data, false);
            break;
          case ActionType.ENABLE:
            this.enableButton(actionSubject.data, false);
            break;
          case ActionType.DISABLE:
            this.enableButton(actionSubject.data, true);
            break;
          case ActionType.CLEAR:
            this.clear();
            break;
        }
      }
    });
  }
}
