const { pause } = require("codeceptjs");


Feature('My First API Test');

Scenario('GET all employees', async ({I})=> {
 await I.sendGetRequest('/v1/employees');
  
});

Scenario('GET one employee', async ({I})=> {
  let customer = await I.sendGetRequest('/v1/employee/5');
  console.log(customer);
   
 });

Scenario('Post a new employee', async ({ I }) => {
  let data = await I.sendPostRequest('/v1/create', {"employee_name":"Test_New","employee_salary":340000,"employee_age":46});
  console.log(data);
  await I.seeResponseCodeIsSuccessful();

});

Scenario('Update the record', async ({ I }) => {
  await I.sendPutRequest('/v1/update/4', {"employee_name":"New TestName"});
  await I.seeResponseCodeIsSuccessful();
});

Scenario('Delete the record', async ({ I }) => {
  await I.sendDeleteRequest('/v1/delete/4');
  await I.seeResponseCodeIsSuccessful();
});
