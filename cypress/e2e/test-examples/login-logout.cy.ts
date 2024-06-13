describe('login-logout', () => {
    
    beforeEach(() => {
        cy.visit('/')
    })

    it('login-out', () => {
        cy.get('.text-slate-700').should('contain', 'Login')
        cy.get('#username').type('test123')
        cy.get('#password').type('test123')
        cy.get("[type='submit']").click() //login
        cy.get('.text-slate-700').should('contain', 'test123')
        cy.get("[type='submit']").click() //logout
        cy.get('.text-slate-700').should('contain', 'Login')
        });
    
        it('login-out-failed', () => {
            cy.get('.text-slate-700').should('contain', 'Login')
            cy.get('#username').type('test1234')
            cy.get('#password').type('test123')
            cy.get("[type='submit']").click() //login
            cy.get('.text-red-500').should('contain', 'Incorrect username or password')
            });

        
    });