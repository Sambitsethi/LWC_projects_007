import { LightningElement ,track} from 'lwc';

export default class Paginationparent extends LightningElement {
    @track pagenumber=1; 
    name;
    color;
    height;   
    mydetails=[{name:"",
    height:0.0,
    color:""
    },];
    
    previous(event)
    {
       /* this.mydetails.push({'name':event.detail.name,
            'height':event.detail.height,
            'color':event.detail.color});
            */
           this.name=event.detail.name;
           this.color=event.detail.color;
           this.height=event.detail.height;
    
    


    
if(this.pagenumber>1)
{
    this.pagenumber=this.pagenumber-1;
}
    }
    next()
    {
        this.pagenumber=this.pagenumber+1;
    }
}