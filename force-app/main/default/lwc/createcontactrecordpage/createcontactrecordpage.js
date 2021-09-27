import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CONTACT_OBJECT from '@salesforce/schema/contact';
import CONTACT_FIRSTNAME from '@salesforce/schema/contact.FirstName';
import CONTACT_LASTNAME from '@salesforce/schema/contact.LastName';
import CONTACT_EMAIL from '@salesforce/schema/contact.Email';
export default class Createcontactrecordpage extends LightningElement {

    objectapi=CONTACT_OBJECT;
    fieldall=[CONTACT_FIRSTNAME,CONTACT_LASTNAME,CONTACT_EMAIL];
    handelsuccess(event)
    {
const toastEventforsuccess=new ShowToastEvent({
    title:" Contact Created",
    message:"Record Id:"+event.detail.id,
    variant:"success"
});
this.dispatchEvent(toastEventforsuccess);

    }
}