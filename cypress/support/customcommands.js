Cypress.Commands.add("productFunction",(product_name)=>
{
    cy.get("[class='card-title']").each(($e1, index,$list)=>
    {
        const prod=$e1.text()
        if(prod.includes(product_name))
        cy.get("button.btn.btn-info").eq(index).click()
    })
})