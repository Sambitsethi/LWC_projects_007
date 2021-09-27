import { LightningElement, track, wire ,api} from 'lwc';
import { deleteRecord} from 'lightning/uiRecordApi';
import dataall from '@salesforce/apex/prod_demo_007.getdata';
import datadelete from '@salesforce/apex/deleteprod.deleteproduct';

export default class Prod_demo_007 extends LightningElement {
    @track show=false;
    callmymethod()
    {
        
        this.show=(this.show==false)?true:false;
        
    }
    
 recordid ;
@track prodarray;
@wire(dataall)
mymethod({data,error})
{
    if(data)
    {
      
     this.prodarray=data;
    }
    if(error)
    {
      console.error(error);
    }
}

deleteme(event)
{    
   
this.recordid=event.target.value;
datadelete({'id':deleteRecord(this.recordid)});

window.location.reload();
}

}