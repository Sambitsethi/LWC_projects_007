import { LightningElement, wire } from 'lwc';
import getcontact from '@salesforce/apex/getcontacts.getcontact';
import CONTACT_FIRSTNAME from '@salesforce/schema/contact.FirstName';
import CONTACT_LASTNAME from '@salesforce/schema/contact.LastName';
import CONTACT_EMAIL from '@salesforce/schema/contact.Email';
const COLUMNS=[
{label:'First Name',fieldName:CONTACT_FIRSTNAME.fieldApiName,type:'text'},
{label:'Last Name',fieldName:CONTACT_LASTNAME.fieldApiName,type:'text'},
{label:'Email',fieldName:CONTACT_EMAIL.fieldApiName,type:'text'}
];  

export default class Contactlist extends LightningElement {
    columns=COLUMNS;
    @wire(getcontact)
    contacts;
    get error()
    {
        return (this.contacts.error) ?
        reduceErrors(this.contacts.error) : [];
    }   
}

