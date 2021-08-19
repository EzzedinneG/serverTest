import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ServiceCRUDService } from '../service-crud.service';
import { Router } from '@angular/router';
import { BehaviorSubject, from, Observable } from 'rxjs';

@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.css']
})

export class FormUpdateComponent implements OnInit {

  i:any=0;
  users:Observable<any> ;
  lastUpdate:any;

  userForm: FormGroup;
  constructor(private http:HttpClient,private route :Router, private serviceCRUDService :ServiceCRUDService){
     
    this.userForm = new FormGroup({
      id: new FormControl(null, Validators.required),
      firstName: new FormControl(),
      lasttName: new FormControl(),
      age: new FormControl(),
      country: new FormControl()
    });
    this.lastUpdate=0;
  }
   
  ngOnInit() {
    this.getallUser();
    
  }
  getallUser()
  {
    this.serviceCRUDService.findAllUser()
    .subscribe(data=>
      {console.log(data) ;
        this.users=data;
        
        
      },
      error =>
      {
        console.log(error);
      })
  }
  update(form :any ,id:any)
  {form.id=id;
this.serviceCRUDService.UPDATE(form).subscribe((data)=>
    {
      this.lastUpdate=form.id;
    },error=>
    {
     console.log(error.message)
    }
    )
    
    
  }
  delete(i :any)
  {
      var x = confirm("Are you sure you want to delete???");
      if (x)
        
    {
    
      this.serviceCRUDService.delete(i).subscribe(()=>
      {
        console.log("delete !!!!!!!");
      },error=>
      {
       console.log(error.message)
      }
      )
    } 
      else
      {return false;
      }
  }
}


