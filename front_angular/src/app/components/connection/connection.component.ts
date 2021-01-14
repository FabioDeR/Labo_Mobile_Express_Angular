import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginForm } from 'src/app/models/forms.model';
import { ApiForumService } from 'src/app/services/api-forum.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {

  fg : FormGroup

  constructor(
    private _builder : FormBuilder,
    private _apiforum : ApiForumService
  ) { }

  ngOnInit(): void {
    this.fg = this._builder.group({
      email : ['', Validators.required],
      password:['', Validators.required]
    })
  }

  onSubmit(){
    const logininfo = new LoginForm()
    const formValues = this.fg.value
    logininfo.email = formValues['email']
    logininfo.password = formValues['password']

    this._apiforum.login(logininfo)
  }

}
