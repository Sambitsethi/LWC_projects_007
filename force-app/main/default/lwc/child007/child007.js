import { api, LightningElement } from 'lwc';

export default class Child007 extends LightningElement {
   @api myvar1="hello";
   result;
  @api callforresult(myvar)
   {
this.result=myvar.a+myvar.b;
 
   }
}