/// reference types=cypress/>
/// reference types= cypress-iframe"/>
import 'cypress-iframe'

describe("Frames and child windows",function()
{
    it("Handling child Windows",function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[id="opentab"]').then(function(url_child)
        {
            const prop_url= url_child.prop('href')
            cy.log(prop_url)
            cy.visit(prop_url)
        })
    })
    it("Handling iframe",function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded("[id='courses-iframe']")
        cy.iframe().find('[href*="#/mentorship"]').eq(0).click()
        cy.iframe().find("[class*='pricing-title']").should("have.length","2")
        

        

    })
    
})