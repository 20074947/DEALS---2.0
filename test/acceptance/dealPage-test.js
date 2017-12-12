var chai = require('chai');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');
var expect = chai.expect;
var until = webdriver.until;
var By = webdriver.By;

var driver;
var mochaTimeOut = 30000;

var pageSelector;
var noDeals;

test.describe('Deal page', function() {
    this.timeout(mochaTimeOut);

    test.it( 'shows the main header', function() {
      /*  driver.findElement(By.tagName('h1')).then( function( element ) {
            element.getText().then(function(text) {
                expect(text).to.equal('Make a Deal');
            });
        }); */
    } );


    test.it( 'accepts deal and displays in list', function() {
      /*  var select = driver.findElement(By.tagName('select'));
        select.then( function( element ) {
            return element.findElements(By.tagName('option'));
        })
            .then(function(elements) {
                elements[1].click();
            } )
            .then(function() {
                return driver.findElement(By.tagName('input'));
            })
            .then(function(element) {
                element.clear();
                return element;
            } )            
            .then(function(element) {
                element.sendKeys('2000');
            } )
            .then(function() {
                return driver.findElement(By.id('submit'));
            })
            .then(function(element) {
                element.submit();
            } ) 
            .then(function() {
                driver.wait(until.elementLocated(By.id('deals')), 20000);
                return driver.findElements(By.tagName('tr'));
            })
            .then( function( deals ) {
                expect(deals.length).to.equal(noDeals + 1) ;
                return deals;
            })
            .then( function( deals ) {
                return deals[noDeals].findElement(By.name('amount'));
            })
            .then(function(element) {
                return element.getText();
            })
            .then(function(text) {
                expect(text).to.equal('2000');
            } ); */
    } );

});


