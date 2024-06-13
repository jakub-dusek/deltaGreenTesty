describe('new-tasks', () => {
    
    beforeEach(() => {
        cy.visit('/')
    })

    it('login', () => {
        cy.get('.text-slate-700').should('contain', 'Login')
        cy.get('#username').type('test123')
        cy.get('#password').type('test123')
        cy.get("[type='submit']").click() //login
        cy.get('.text-slate-700').should('contain', 'test123')
        cy.get('.inline-flex').click()
        cy.get('.text-slate-700').should('contain', 'New Task')
        cy.get('#title').type('testovaci task')
        cy.get('#description').type('popis testovaciho tasku')
        cy.get('.inline-flex').click()
        cy.get('.p-4 > :nth-child(1) > :nth-child(1)').should('contain', 'testovaci task')
        //cy.get('.text-slate-700').eq(0).should('contain', 'test123')
    })
});