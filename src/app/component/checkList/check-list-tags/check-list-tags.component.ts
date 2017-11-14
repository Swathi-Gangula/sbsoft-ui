import { Component, OnInit ,ElementRef,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { CheckListTags} from './check-list-tags.model';
import { CheckListTagsService} from './check-list-tags.service';

import { CheckListAddTagsComponent } from "./check-list-add-tags.component";
import { CheckListEditTagsComponent } from "./check-list-edit-tags.component";
declare let $: any;
@Component({
  selector: 'app-check-list-tags',
  templateUrl: './check-list-tags.component.html',
  styleUrls: ['./check-list-tags.component.css']
})
export class CheckListTagsComponent implements OnInit {
  checkListTags=[];
  msg:string;
  @ViewChild('modal') modal:ElementRef;
  isactivate=[true,false,true,false];
 
  textOnButton = "Deactive";
  
  public status=["Yes","No","Yes","No"];
  statusMessage: string;
  constructor(private router: Router, private _checkListTagsService: CheckListTagsService) { }

  ngOnInit() {
    
    console.log("isactivate in ngInit==>",this.isactivate[0])
    this._checkListTagsService.getCheckListTags()
    .subscribe((rescheckListTags)=> this.checkListTags =rescheckListTags,
               (error)=> {this.statusMessage ='Problem with the service.please try again'}
              );
              console.log("CheckListTags",this.checkListTags)
               var count=this.checkListTags.toString.length;
               console.log("count",count)
  }


AddTag(){
   this.msg="CheckList Saved successfully"
    $(this.modal.nativeElement).modal('show');
     
}

editTag(){
  this.msg="CheckList Updated successfully"
    $(this.modal.nativeElement).modal('show');
}
    ActivateTag(id,data,isactivate){    
    //console.log("data",data);
    
    this.isactivate[id]=isactivate;
    console.log("isactivate",isactivate);
    console.log("isactivate[id]",this.isactivate[id]);
   

    if(this.isactivate[id]==true){
      this.status[id]="Yes";
      this.textOnButton="Activated"
      console.log("data in true",this.status);
    }
    else{
       this.status[id]="No";
       this.textOnButton="Deactivated"
       console.log("data in false",this.status);
    }
    }
 }


