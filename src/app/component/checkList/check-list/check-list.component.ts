
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckListTags} from '../check-list-tags/check-list-tags.model';
import { CheckListTagsService} from '../check-list-tags/check-list-tags.service';

import { CheckListAddTagsComponent } from "../check-list-tags/check-list-add-tags.component";
import { CheckListEditTagsComponent } from "../check-list-tags/check-list-edit-tags.component";
@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit {
checkListTags=[];
  
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


}
