

 module.exports = {
   'Request info ' : function (client) {
    var data = client.globals;
     client
       .url(client.launch_url + '/request-info')
       .waitForElementPresent('body', 1000)
       .setValue('input[type=text]', [data.name, client.Keys.ENTER])
       .pause(1000)
       .setValue('input[type=email]', [data.email])
       .pause(1000)
       .setValue('select[id=edit-country]', [data.country])
       .pause(1000)
       .click('input[id=edit-submit]')
       .waitForElementPresent('body', 1000)
       .assert.containsText('main', 'Thank you for your interest!')
       .saveScreenshot('./screenshots/search-result.png')
       .pause(1000)
       .end();
   }
 };



 // module.exports = {
 //   'Request info ' : function (client) {
   
 //    var myPageObject = client.page.affirm(); 
 //     var data = client.globals;
 //    client
 //       .url(client.launch_url + '/request-info')
 //       .waitForElementPresent('body', 1000)
 //       .setValue('@name', [data.name, client.Keys.ENTER])
 //       .pause(1000)
 //       .setValue('@email', [data.email])
 //       .pause(1000)
 //       .setValue('@country', [data.country])
 //       .pause(1000)
 //       .click('@submit')
 //       .pause(1000)
 //       .assert.containsText('main', 'Thank you for your interest!')
 //       .saveScreenshot('./screenshots/search-result.png')
 //       .pause(1000)
 //       .end();
 //   }
 // };