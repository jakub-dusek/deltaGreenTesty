describe('new-tasks', () => {
    
    beforeEach(() => {
        //cy.intercept('POST', 'https://todos.dev.deltagreen.cz/auth/login', {fixture: 'test2.json'}).as('login');
        cy.visit('/')
        cy.get('.text-slate-700').should('contain', 'Login')
        cy.get('#username').type('test123')
        cy.get('#password').type('test123')
        cy.get("[type='submit']").click() //login
        //cy.intercept('GET', '/tasks/**', {fixture: 'test.json'}).as('events');
    })

    it('login', () => {
        cy.get('.text-slate-700').should('contain', 'test123')
        cy.get('.tabler-icon-pencil').eq(0).click()
        cy.get('#title').type('testovaci uprava 123 title')
        cy.get('#description').type('testovaci uprava 123 description')
        cy.get("[type='submit']").eq(1).click()
        cy.get('.text-slate-700').should('contain', 'testovaci uprava 123 title')
        cy.get('.tabler-icon-check').eq(0).click()
        cy.get('.text-slate-500').should('contain', 'Completed at')
        cy.get('.tabler-icon-trash').click({ multiple: true })//cleaning tasku
    })
    it.only('check-dates', () =>{  
                cy
                //.wait('@events')
                .then(() => {
                    cy.get('.text-xs').eq(2).should('contain', 'Completed at: 09.06.2024 12:51')
                    cy.get('.text-xs').eq(1).should('contain', 'Created at: 09.06.2024 12:10')
    })
})});