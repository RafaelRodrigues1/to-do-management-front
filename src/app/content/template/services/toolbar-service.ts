import { Injectable } from '@angular/core';
import { Subject } from "rxjs/internal/Subject";
import { Observable } from "rxjs/internal/Observable";
import { ActionSubject, ActionButton, ActionType } from '../models/Action';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  private actionSubject = new Subject<ActionSubject>;

  constructor() { }

  add(action: ActionButton) {
    this.actionSubject.next({data: action, action: ActionType.ADD});
  }

  show(labelKey: string) {
    this.actionSubject.next({labelKey, action: ActionType.SHOW});
  }

  hide(labelKey: string) {
    this.actionSubject.next({labelKey, action: ActionType.HIDE});
  }

  disable(labelKey: string) {
    this.actionSubject.next({labelKey, action: ActionType.DISABLE});
  }

  enable(labelKey: string) {
    this.actionSubject.next({labelKey, action: ActionType.ENABLE});
  }

  clear() {
    this.actionSubject.next({action: ActionType.CLEAR});
  }

  listenerSubscribe(): Observable<ActionSubject> {
    return this.actionSubject.asObservable();
  }
}
