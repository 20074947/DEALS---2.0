var chai = require('chai');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');
var expect = chai.expect;
var until = webdriver.until;
var By = webdriver.By;

var driver;
var mochaTimeOut = 30000;

var pageSelector;

test.describe('Deals page', function() {
    this.timeout(mochaTimeOut);

    test.it( 'shows the main header', function() {
    //    driver.findElement(By.tagName('h1')).then( function( element ) {
         //   element.getText().then(function(text) {
           //     expect(text).to.equal('List All Deals');
         //   });
      //  });
    } );

    test.it( 'displays the deals', function() {
       // var donations = driver.findElements(By.tagName('tr'));
      /*  deals
            .then(function( elements ) {
                return elements[0].findElement(By.name('amount'));
            })
            .then(function(element) {
                return element.getText();
            })
            .then(function(text) {
                expect(text).to.equal('1000');
            } );
        // 2nd donation amount should be 1600
        donations
            .then( function( elements ) {
                return elements[1].findElement(By.name('amount'));
            })
            .then(function(element) {
                return element.getText();
            })
            .then(function(text) {
                expect(text).to.equal('1100');
            } ); */          
    } );

});


