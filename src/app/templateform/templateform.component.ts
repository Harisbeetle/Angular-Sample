import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css'],
})
export class TemplateformComponent implements OnInit {
  studdetails: any = {
    username: '',
    useremail:'',
    userpassword: '',
    firstname:''
    

    
  };

  constructor() {}

  ngOnInit(): void {}

  addDetails(detailForm: any) {
    console.log(detailForm);
  }
}
