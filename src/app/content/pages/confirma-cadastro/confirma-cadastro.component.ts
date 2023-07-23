import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-confirma-cadastro',
  templateUrl: './confirma-cadastro.component.html',
  styleUrls: ['./confirma-cadastro.component.css']
})
export class ConfirmaCadastroComponent implements OnInit {

  hasUser: Boolean

  constructor(
    private activatedRoute: ActivatedRoute,
    private appComponent: AppComponent
    ) { }

  ngOnInit() {
    this.hasUser = !!this.activatedRoute.snapshot.data.user;
    this.appComponent.systemTemplate = false;
  }

}
