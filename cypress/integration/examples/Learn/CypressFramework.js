///reference types=cypress/>
///reference types=cypress-iframe/>
import Homepage from '../page_object/Homepage'
const homepage= new Homepage()
describe("Framework",function(){
    
    before(() =>
    {
        cy.fixture("register").then(function(data)
        {
            this.glob_data=data
        })
    })
    it("Test Hooks-basics",function(){
        homepage.pageurl()
        homepage.getname().type(this.glob_data.name)
        homepage.type_email().type(this.glob_data.email)
        homepage.get_gender()
        homepage.alias_name()
        cy.get("@namefield").should('have.attr','minlength','2')
        homepage.radiobutton().each(($e1, index,$list)=>
        {
           var text= $e1.text()
           if(text.includes("Entrepreneur"))
           {
               cy.log(text)
               homepage.radio_text().eq(index).should("have.attr",'type','radio').and("be.disabled")
           }
        })
        console.log(this.glob_data.product_name)
        cy.get(":nth-child(2) > .nav-link").click()
        this.glob_data.product_name.forEach(element =>              //searching for product and adding to cart
           {  
               cy.productFunction(element)                          //  Calling custom commands from another js file
           })
       homepage.checkout().click()                                  //clicking checkout after selecting the products
      // homepage.country_confirm()                                 // Entering the country to deliver (need to alter the code)

     })
 
     /*it("Custom commands",function()
     {
        
     })*/
     it("Adding the price in Checkout",function()
     {   var sum=0
         cy.get("tr td:nth-child(4) strong").each(($e1, index,$list) =>
         {
            var price= $e1.text().split(" ")                        //splitting the currency symbol and money to 2 different element
            price= price[1].trim()                                  // Trim() is used to remove any space before or after a word/number
            sum=Number(sum)+Number(price)                           // Converting the variable sum and price from string to integer and adding both
         }).then(function()
         {
             cy.log(sum)
         }) 
         var total =0
         cy.get("h3 strong").then(function(element)
         {
            total = element.text()                                  // getting the total amount shown at the checkout page
            total=total.split(" ")
            total=total[1].trim()
            cy.log(total)
            expect(Number(total)).to.be.equal(sum)                  // checking whether value inside the sum is equal to the total amount shown in the page
         })
         homepage.confirm_checkout().click()                        //Confirming checkout of product or cart page
     })
    it(" XHR Testing",function()
    {
        cy.visit("https://example.cypress.io/commands/network-requests")   // visiting the newtowk request site
        cy.server()                                                        // initializing the server() to enable server related commands
        cy.route(                                                          // Inputing a stub response to see the custom error is shown if failure
        {
            method: 'PUT',
            url: "comments/*",
            status: 404,
            response:{
                error: "What do you desire"
            },
            delay: 500
        }).as('UpdateComment')                                             // Aliasing the command
        cy.get(".network-put").click()                                     // clicking the response button to display the error
    })
     
})
    