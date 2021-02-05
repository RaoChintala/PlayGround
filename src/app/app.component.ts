import { HttpClient } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    pageData;
    formReady: boolean = false;
    displaySubmitdata: boolean = false;
    submitData: any;
    dynamicForm: FormGroup;

    constructor(private httpClient: HttpClient) { }

    ngOnInit(){
      this.getItems()
    }
  
    onSubmit() {
      this.displaySubmitdata = true;
      this.submitData = this.dynamicForm.value;
      console.log(this.dynamicForm)
    }

    getItems() {
      this.httpClient.get('assets/questionnaire.json')
      .pipe(map(data => {
        this.pageData = data;
        this.initiateForm();
      }))
      .subscribe(result => {});
    }

    initiateForm(){
      const controls = {};
      this.pageData.fields.forEach(res => {
        const validationsArray = [];
        res.validations.forEach(val => {
          if (val.name === 'required') {
            validationsArray.push(
              Validators.required
            );
          }
      });
        controls[res.label] = new FormControl('', validationsArray);
      });
      this.dynamicForm = new FormGroup(
        controls
      );
      this.formReady = true;
    }

  }