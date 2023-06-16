import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms'
import { itemModel } from './product-page.model';
// import {api} from ApiService;
import { ApiService } from '../shared/api.service';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit{
  
  formValue!:FormGroup;
  itemData!:any;
  showAdd!:boolean;
  showUpdate!:boolean;
  
  itemModelObj:itemModel=new itemModel();
  constructor(private formBuilder:FormBuilder, private api:ApiService){}
  ngOnInit(): void {
      this.formValue=this.formBuilder.group({

        name:[''],
        desc:[''],
        
        cost:[''],
      });
      this.getAllItem();
  }
  clickAddItem(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }
  postItemdetails(){
    this.itemModelObj.name=this.formValue.value.name;
    // console.log(this.itemModelObj.name);
    
    this.itemModelObj.desc=this.formValue.value.desc;
    this.itemModelObj.cost=this.formValue.value.cost;
    this.itemModelObj.date=new Date();
    console.log(this.itemModelObj);
    
     console.warn(this.formValue.value);
     
    
    this.api.postItem(this.itemModelObj).subscribe(res=>{
      alert("form adeded succesffulyy");
      let cancel=document.getElementById('cancel');
      cancel?.click();
      this.formValue.reset();
      this.getAllItem();
        },err=>{
          alert("something went wrong");
          
        })

    }
    getAllItem(){
    this.api.getItem().subscribe(res=>{
      this.itemData=res;
    })
  }
  deleteItem(row:any){
    this.api.deleteItem(row.id).subscribe(res=>{
      alert("Employee deleted Successfully");
      this.getAllItem();
    })
  }
  onEdit(row:any){
    
    this.showAdd=false;
    this.showUpdate=true;
    this.itemModelObj.id=row.id;
    this.formValue.controls['name'].setValue(row.name);
    this.formValue.controls['desc'].setValue(row.desc);
    this.formValue.controls['cost'].setValue(row.cost);
    
  }
  updateItemdetails(){

    this.itemModelObj.name=this.formValue.value.name;
   
    
    this.itemModelObj.desc=this.formValue.value.desc;
    this.itemModelObj.cost=this.formValue.value.cost;
    this.itemModelObj.date=new Date();
    this.api.upateItem(this.itemModelObj,this.itemModelObj.id).subscribe(res=>{
      alert("successfully Updated");
       let cancel=document.getElementById('cancel');
      cancel?.click();
      this.formValue.reset();
      this.getAllItem();
    })
  }

  }
  

