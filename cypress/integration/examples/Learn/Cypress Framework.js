///reference types=cypress/>
///reference types=cypress-iframe/>
import Homepage from '../page_object/Homepage'
describe("Framework",function(){
    
    before (function()
    {
        cy.fixture("register").then(function(data)
        {
            this.glob_data=data
        })
       // cy.import {"Dynamic_code"} from "support"
    })
    it("Test Hooks-basics",function(){
        const homepage= new Homepage()
        homepage.pageurl()
        homepage.getname().type(this.glob_data.name)
        homepage.type_email().type(this.glob_data.email)
        homepage.get_gender()
        homepage.alias_name()
        cy.get("@namefield").should('have.attr','minlength','2')
        //cy.get("label']").should('have.property'))
        //cy.readFile("cypress/support/Dynamic_code.js")
        homepage.radiobutton().each(($e1, index,$list)=>
        {
           // cy.log($e1.text())
            //console.log($e1.text())
           var text= $e1.text()
           if(text.includes("Entrepreneur"))
           {
               cy.log(text)
               homepage.radio_text().eq(index).should("have.attr",'type','radio').and("be.disabled")
           }
        })
         console.log(this.glob_data.product_name)
         cy.get(":nth-child(2) > .nav-link").click()
         this.glob_data.product_name.forEach(element => 
            {  
                //cy.readFile("/support/Dynamic_code")
                cy.productFunction(element)
            })
        homepage.checkout().click()
        homepage.confirm_checkout().click()
        homepage.country_confirm()
         
     })
     
})
    