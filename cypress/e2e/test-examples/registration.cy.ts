describe('registration', () => {
    
    beforeEach(() => {
        cy.visit('auth/signup')
    })
    
    it('newUser', () => {
        const randomNumber: number = Math.floor(Math.random() * 1000);
        cy.get('#username').type('test'+randomNumber)
        cy.get('#password').type('Heslo123?')
        cy.get("[type='submit']").click()
        cy.log('test'+randomNumber)
        cy.get('.text-slate-700').should('contain', 'test'+randomNumber)
        });
    


});

