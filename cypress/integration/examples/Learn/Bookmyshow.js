/// reference types= cypress/>

describe("Book My Show",function(){
    it("Opening Website",function(){
        cy.visit("https://in.bookmyshow.com/")
        cy.get('#inp_RegionSearch_top').type("kochi{enter}")
    })
    /*it("Alert handle", function(){
        cy.get('.wzrk-alert wiz-show-animate').click()
    })*/
    it("Events list",function(){
        cy.get("[class='card-details lang-eng'").each(($e1, index, $list)=>
        {
            const events = $e1.text();
            console.log(events)
        })
        cy.get('.widget-content h4').each(($e1, index, $list)=>
        {
            const events1 = $e1.text()
            cy.get(".widget-content .lang-eng").eq(index).then(function(venue){
                //console.log(events1)
                console.log(events1,venue.text())
                
            })
            console.log(events1)
        })
    })
})
