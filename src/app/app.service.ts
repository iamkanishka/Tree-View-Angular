import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Treeview} from './treeview.model'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient:HttpClient ) { }


   
  gettreeData(){
   return  this.httpClient .post('https://poc.molecularconnections.com/Tree/getTerm',{level:1});
  }

}
