///reference types = cypress/>

describe("Test Suite 2", function()
{
    it("Test 1",function()
    {
        // checkbox activities
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get("input[type='checkbox']").check('option3').should("be.checked")
        cy.get("input[type='checkbox']").as("checkboxlocator")
        cy.get("@checkboxlocator").uncheck("option1").should("not.be.checked")
        cy.get
    })
    it("Test 2", function() 
    {
        // Dropdown activities - Static dropdown
        cy.get('select').select('Option2').should('have.value','option2')

        //Dynamic Dropdown
        cy.get('#autocomplete').type('Ind') //entering first 3 letter of desired country
        cy.get('.ui-menu-item div').each(($e1, index, $list) => //iterating through all the available option after entering 3 letter
        {
            if($e1.text()==='India')// Checking wether the text fetched is equal to India
            {
                $e1.click() // selecting the desired option
            }
        })

        
    })
})
