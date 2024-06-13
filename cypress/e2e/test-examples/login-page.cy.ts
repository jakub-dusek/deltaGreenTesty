describe('login-page', () => {
    
    beforeEach(() => {
        cy.visit('/')
    })

    it('getLoginPage', () => {
        cy.get('.text-slate-700').should('contain', 'Login')
        cy.get("[type='submit']").should('contain', 'Login')
      });
    
    it('getRegistration', () => {
        cy.get('a > .text-sm').should('contain', 'No account? Create one here.')
        cy.get('a > .text-sm').click()
        cy.get('.text-slate-700').should('contain', 'Sign Up')
      });

    it('getButton', () => {
        //cy.get('.inline-flex').should('contain', 'Login')
        });
      

});