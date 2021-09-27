public with sharing class getcontacts {

    @AuraEnabled(cacheable = true)
   public static List<contact> getcontact()
   {
return [select firstname,Lastname,email from contact];
   }
}
