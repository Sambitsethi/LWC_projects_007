import { LightningElement } from 'lwc';
import callmethod from '@salesforce/apex/addproduct.createproduct';

export default class Addproduct extends LightningElement {
    name;
    price;
    products
    setname(event)
    {
        this.name=event.target.value;
    }
    setprice(event)
    {
        this.price=event.target.value;
    }
    alertplz()
    {
        callmethod({
        'name':this.name,
        'price':this.price
        });
        window.location.reload();
    }
}