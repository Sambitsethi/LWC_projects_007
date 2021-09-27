import { LightningElement } from 'lwc';

export default class Parent007 extends LightningElement {
    myvar="good morning!";
    a=10;
    b=20;
    call()
    {
    
       var b2=this.template.querySelector('c-child007');
       b2.callforresult({
           a:this.a,
           b:this.b
       });

    }
}