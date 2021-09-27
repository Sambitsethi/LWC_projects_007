public with sharing class Searchaccounts {
    @AuraEnabled(cacheable=true)
   public static List<Account> getAccount(String name)
   {
       String nam='%'+name+'%';
List<Account> acc=new List<Account>();
acc=[select Id,Name,Phone,AccountNumber,Rating from Account where name like :nam ];
return acc;
   }
   @AuraEnabled
   public static void fordelete(ID myid)
   {
    Account acc=new Account();
       acc=[select id from Account where id= :myid];
      delete acc;
   }

}
