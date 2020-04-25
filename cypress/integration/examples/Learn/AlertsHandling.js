/// <reference types= "Cypress"/>

describe("Alert Handling and Popups", function(){
    it("Alert Handling", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //Bypassing alerts
        cy.get('[value="Alert"]').click();
        // bypassing confir pop-up
        cy.get('[value="Confirm"]').click()
        // to check alerts using assertion
        //mocha framework 
        cy.on('window:alert',(str)=>
        {
            expect(str).to.equal("Hello , share this practice page and share your knowledge")
        })
        cy.on('window:confirm',(str)=>
        {
            expect(str).to.equal("Hello , Are you sure you want to confirm?")
        })

    })
    it("Switch tab",function () {
        // Opening a link on the same page without opening in a new tab
        cy.get("#opentab").invoke('removeAttr','target').click()
        
    })

    it("Web tables",function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('tr td:nth-child(2)').each(($el, index, $list) =>{
            const text= $el.text()
            if(text.includes("Python"))
            { 
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
                {
                    const pricetext= price.text()
                    expect(pricetext).to.equal('25')     
                })

            }

        }) 
    })
    it("Hidden elements", function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //cy.get('[class="mouse-hover-content"]').invoke("show")
        cy.contains("Top").click({force:true})
        cy.url().should('include','top')
        cy.contains("Reload").click({force:true})
        //cy.url().should('include','bottom')
    })
    

    
   
})
