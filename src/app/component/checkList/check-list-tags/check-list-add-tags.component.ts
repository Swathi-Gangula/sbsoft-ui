import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';

import { CheckListTags} from './check-list-tags.model';
import { CheckListTagsService} from './check-list-tags.service';


@Component({
    templateUrl: './check-list-add-tags.component.html',
    styleUrls: ['./check-list-add-tags.component.css']
})
export class CheckListAddTagsComponent implements OnInit {
  
    tagName: string;
    CheckListAddTagForm: FormGroup  
    dataSource: CheckListTags[];
    ngOnInit() {

    }
    //form Validation Code
    constructor(public router: Router,private formBuilder: FormBuilder,  private _checkListTagsService: CheckListTagsService) {
      
        console.log("dataItem==>")
       
          this.CheckListAddTagForm = this.formBuilder.group({
               
                'tagName': [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(16)])]
               
            });
    }

   
  saveAddTag(value) {
        console.log("custom popup data===>", value);
        this._checkListTagsService.saveTagName(value);
      
       // this.widgets = this._dashboardSettingsService.getCustomWidgetData();
       // console.log(this.widgets);
    }

    cancelModalPopUp() {
     
       // this.router.navigate(['/dashboard-settings']);
    }

    okModalPopUp() {
       
       // this.router.navigate(['/dashboard-settings']);
    }
}