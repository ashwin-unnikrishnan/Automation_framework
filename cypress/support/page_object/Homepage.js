class Homepage
{
    pageurl()
    {
        return cy.visit("https://rahulshettyacademy.com/angularpractice/")
        
    }
    getname()
    {
        return cy.get("[name = 'name']:nth-child(2)")
    }
    type_email()
    {
        return cy.get("[name = 'email']")
        
    }
    get_gender()
    {
        return cy.get("select")
    }
    alias_name()
    {
        
        return cy.get("[name = 'name']:nth-child(2)").as("namefield")
    }
    radiobutton()
    {
        return cy.get("label.form-check-label")
    }
    radio_text()
    {
        return cy.get("input.form-check-input")
    }
    checkout()
    {
        return cy.get("a.nav-link.btn.btn-primary")
    }
    confirm_checkout()
    {
        return cy.get("[class='btn btn-success']")
    }
    country_confirm()
    {
            cy.get("[id='country']").type("Ind")
            cy.get('[class="suggestions"]').then(function(country_list)
            {
                const list_country= country_list.text()
              //  cy.log(list_country)
            
            })
            cy.get("[class='suggestions']").each(($e1, index,$list)=>
            {
                cy.log($e1.text())
                if($e1.text().includes("India"))
                { 
                    cy.get("[class='suggestions']").eq(index).wait(2000).click()
                } 
                //cy.log("exited loop")
            })
            
    }
    split()
    {
        cy.get("tr td:nth-child(4) strong").each(($e1, index,$list) =>
         {
           // console.log($e1.text())
            var price= $e1.text().split(" ")
            //console.log(price[1])
            price= price[1].trim()
            sum=Number(sum)+Number(price)
            console.log(sum)
            
         })
    }
}
export default Homepage;