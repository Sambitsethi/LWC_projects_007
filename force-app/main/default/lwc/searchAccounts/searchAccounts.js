import { LightningElement,wire,track} from 'lwc';
import { deleteRecord} from 'lightning/uiRecordApi';
import getAccount from '@salesforce/apex/Searchaccounts.getAccount';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import fordelete from '@salesforce/apex/Searchaccounts.fordelete';

export default class SearchAccounts extends LightningElement {
    @track accData;
searchstr;
deleteid;
    gotdata(event)
    {
this.searchstr=event.target.value;
        getAccount({
            'name':this.searchstr

        }).then(result=>{
            this.accData=result;
        }

        ).catch( error=>{
            console.error(error);

        });

       /* const pop=new ShowToastEvent({
            title: 'Searched',
            message: 'already poulated all Accounts',
            variant:"success"
        });
        this.dispatchEvent(pop);
        */

    }
    deleterec(event)
    {
        
       this.deleteid=event.target.value;
fordelete({'Id':deleteRecord(this.deleteid)});
window.location.reload();

    }
    


}