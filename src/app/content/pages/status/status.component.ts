import { Status } from './../../models/Status';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';
import { ToolBarComponent } from '../../template/tool-bar/tool-bar.component';
import { ToolbarService } from '../../template/services/toolbar-service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  statusTableList: StatusTable[] = [...LISTA];
  displayedColumns: string[] = ['name', 'description', 'registerDate', 'alterationDate', 'actions'];
  statusDataSource = new StatusDataSource(this.statusTableList);


  constructor(private toolbarService: ToolbarService) { }

  ngOnInit() {
  }

  editStatus(status: Status, edit: boolean) {
    this.setEditStatus(status, edit);
  }

  deleteStatus(status: Status) {

  }

  updateStatus(status: Status, edit: boolean) {
    this.setEditStatus(status, edit);
    this.toolbarService.add({label: "SALVAR", typeColor: "primary", icon: "save", render: true, executor: this.save});
  }

  setEditStatus(status: Status, edit: boolean) {
    this.statusTableList
      .filter(statusTable => statusTable.status.id === status.id)
      .forEach(statusTable => statusTable.edit = edit);
    this.statusDataSource.setData(this.statusTableList);
  }

  save() {
    console.log('SAVE');

  }
}

interface StatusTable {
  status: Status;
  edit?: boolean;
}

const LISTA: StatusTable[] = [
  {
    status: {
      id: 1,
      name: "Backlog",
      description: "Backlog Status",
      registerDate: new Date()
    }
  },
  {
    status: {
      id: 2,
      name: "Em desenvolvimento",
      description: "Desenvolvimento Status",
      registerDate: new Date()
    }
  },
  {
    status: {
      id: 3,
      name: "Concluído",
      description: "Concluído Status",
      registerDate: new Date(),
      alterationDate: new Date(2021, 1, 4)
    }
  }
]

class StatusDataSource extends DataSource<StatusTable> {
  private _dataStream = new ReplaySubject<StatusTable[]>();

  constructor(initialData: StatusTable[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<StatusTable[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: StatusTable[]) {
    this._dataStream.next(data);
  }
}
