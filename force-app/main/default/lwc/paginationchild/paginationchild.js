import { LightningElement } from 'lwc';

export default class Paginationchild extends LightningElement {
    previous()
    {
this.dispatchEvent(new CustomEvent('handelprevinchild',{detail:{
    'name':"sambit",
    'height':5.5,
    'color':"black"
    
}}
));
    }
    next()
    {
        this.dispatchEvent(new CustomEvent('handelnextinchild'));
    }
}