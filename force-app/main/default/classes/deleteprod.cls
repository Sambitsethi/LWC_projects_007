public with sharing class deleteprod {
    public deleteprod() {

    }
    @AuraEnabled
    public static void deleteproduct(ID myid)
    {

        product__c pro1=new product__c();
        pro1=[select id,product_name__c,prod_price__c from product__c where id =:myid];
        delete pro1;
    }
}
