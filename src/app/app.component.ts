import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

export interface Enducation {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  educations: Enducation[] = [
    {value: 'mca', viewValue: 'MCA'},
    {value: 'btech', viewValue: 'B.Tech'},
    {value: 'degree', viewValue: 'Degree'}
  ];

  hide = true;
  misMatch: boolean = false;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.registerForm = this.fb.group({
      name:        ['', Validators.required],
      email:       ['', [Validators.required, Validators.email]],
      pass:        ['', Validators.required],
      confirmPass: ['', Validators.required],
      mobile:      ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
      address:     ['', [Validators.required, Validators.minLength(20)]],
      gender :     ['', Validators.required],
      education:   ['', Validators.required],
      dob:         ['', Validators.required],
      game: [''],
      movie: [''],   
    })  
  }

  checkPassword(){
    let password = this.registerForm.value.pass;
    let confirmPassword = this.registerForm.value.confirmPass;

    console.log(password + '<-->' + confirmPassword);
    return password === confirmPassword ? this.misMatch=false : this.misMatch = true;
  }
  
  Name : string;
  Email: string;
  Pass : any;
  Mobile: number;
  Address: string;
  Gender: string;
  DOB: number;
  GAME: string;
  MOVIE: string;
  MCA : string;
  BTECH: string;
  DEGREE: string;
  getOptions(value){
    if(value == 'mca'){
      this.MCA = value;
    }
    if(value == 'btech'){
      this.BTECH = value;
    }
    if(value == 'degree'){
      this.DEGREE = value;
    }
  }
  onSubmit(){
    var formValue = this.registerForm.value;
    this.Name  = formValue.name;
    this.Email = formValue.email;
    this.Pass  = formValue.pass;
    this.Mobile=formValue.mobile;
    this.Address = formValue.address;
    this.Gender  = formValue.gender;
    this.DOB      = formValue.dob;
    this.GAME  = formValue.game;
    this.MOVIE  = formValue.movie;

    console.log(this.Name, this.Email, this.Pass, this.Mobile, this.Address, this.Gender, this.DOB, this.GAME, this.MOVIE)

    if(this.MCA == 'mca'){
      console.log(this.MCA);
    }else if(this.BTECH == 'btech'){
      console.log(this.BTECH);
    }else if(this.DEGREE == 'degree'){
      console.log(this.DEGREE);
    }
  }

}
