public with sharing class addproduct {
    @AuraEnabled
   public static void createproduct(String name,decimal price)
   {
    product__c pro1=new product__c();
    pro1.product_name__c=name;
    pro1.prod_price__c=price;
   insert pro1;
   }
}
