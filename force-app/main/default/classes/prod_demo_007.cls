public with sharing class prod_demo_007 {
    public prod_demo_007() {

    }
    @AuraEnabled(cacheable=true)
    public static List<product__c>  getdata()
    {
        List<product__c> listrecord=new List<product__c>();
        listrecord=[select id,prod_price__c,product_name__c from	product__c ]; 
        return listrecord;
    }
}
