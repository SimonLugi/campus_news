describe('Post Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    it('Redict to post', () => {
        cy.contains("a.posts_link__yeme7","Read More").click()
        cy.url().should("include",`/post/`)
    })
})
