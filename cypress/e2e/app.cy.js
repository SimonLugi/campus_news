describe('App Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('Login', () => {
    cy.contains("Login").click()
    cy.url().should("include","/login")
  })
  it('should get routed to /login if it clicks on create', () => {
    cy.contains("Create").click()
    cy.url().should('include', '/login');
  })

})
