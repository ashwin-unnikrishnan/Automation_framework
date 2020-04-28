/// <reference Types= "Cypress"/>

describe("My Test Suite",function()
{
    it ("My 1st case", function()
    {
        // list all the test cases
       cy.visit("https://www.bigbasket.com/")
       cy.get("#input").type("Ca{enter}")
       cy.wait(3000)
       cy.get(".items:visible").find("div[qa='product']").should("have.length",4)
       //parent-child Chaining
       cy.get('.items').as("prolocator")
       cy.get("@prolocator").find("div[qa='product']").eq(2).contains("Add").click()
       //adding the product to cart
       cy.get('.latest-at-bb > [ng-show="vm.firstTimeUser"] > .row > :nth-child(2) > a').click()
       //granting the access for location
       // traversing through each item searched
       cy.get("@prolocator").find("div[qa='product']").each(($el, index, $list) => {

          const text= $el.find("div[qa='product_name']").text()
          //adding the product cantaining Jasimine handwash
          if(text.includes("Jasmine Handwash"))
          {
            $el.find("button[qa='add']").click()
          }
       })
       cy.wait(2000)
       cy.get("a[title='Bigbasket']").then(function(logotext)
       {
         cy.log(logotext.text()) //printing the text
       })

    })
    
})