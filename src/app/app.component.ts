import { Component } from '@angular/core';
import { AppService } from './app.service';

import {Treeview} from './treeview.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngtreeassignment';
  treeData:Treeview[]=[]

  constructor(private appService:AppService){
 
    this.getTreeData()

  }

 initialOpenClose(treeIndex:number) {
   if(this.treeData[treeIndex].state.$initial){
   this.treeData[treeIndex].state.$termsrelation.$BT =false
   this.treeData[treeIndex].state.$termsrelation.$NT =false

   }
  this.treeData[treeIndex].state.$initial = !this.treeData[treeIndex].state.$initial
}


termsOpenClose(parentIndex:number, termtype) {

  if(termtype=='BT'){
    
    this.treeData[parentIndex].state.$termsrelation.$BT = !  this.treeData[parentIndex].state.$termsrelation.$BT

  }else if(termtype=='NT'){
    this.treeData[parentIndex].state.$termsrelation.$NT = !this.treeData[parentIndex].state.$termsrelation.$NT

  }
}


getTreeData(){
  this.appService.gettreeData().subscribe((treeDataResponse:Treeview)=>{
        this.treeData.push({...treeDataResponse,state:{ $initial: false,
          $termsrelation: {$BT:false,$NT:false},
          $terms: false}})
  },(err)=>{
    console.log(err);
    
  },()=>{
    console.log(this.treeData);
    
    console.log('completed')
  })
}


}
