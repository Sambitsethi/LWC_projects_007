import { LightningElement } from 'lwc';
import object from '@salesforce/schema/product__c';
import field1 from '@salesforce/schema/product__c.product_name__c';
import field2 from '@salesforce/schema/product__c.prod_price__c';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class Prodsaveform extends LightningElement {
    objectapiname=object;
    fieldsname=[field1,field2];
    callme(event)   
    {
        const bluenotification=new ShowToastEvent({title:"Product Save",
    variant:"success",
message:event.detail.id});
   this.dispatchEvent(bluenotification);
    }
    
}