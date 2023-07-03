export interface ActionButton {
  label: string;
  typeColor: string;
  icon: string;
  render?: boolean;
  executor?: any;
  disabled?: boolean;
}

export interface ActionSubject {
  data?: ActionButton;
  action: ActionType;
  labelKey?: string;
}

export enum ActionType {
  '', ADD, SHOW, HIDE, DISABLE, ENABLE, CLEAR
}
