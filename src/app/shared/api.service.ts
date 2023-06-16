import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  postItem(data:any){
    return this.http.post<any>('http://localhost:3500/items',data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getItem(){
    return this.http.get<any>('http://localhost:3500/items')
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  upateItem(data:any,id:number){
    return this.http.put<any>('http://localhost:3500/items/'+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteItem(id:number){
    return this.http.delete<any>('http://localhost:3500/items/'+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
