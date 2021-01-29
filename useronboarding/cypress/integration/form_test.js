describe('signup page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    });

    it('see if tests work', () => {
        expect(2 + 2).to.equal(4)
    })

    const passInput = () => cy.get('input[name="password"]');
    const emailInput = () => cy.get('input[name="email"]');
    const userInput = () => cy.get('input[name="first_name"]');

    it('can type inputs', () => {
        userInput()
        .should('have.value', '')
        .type('CatPerson99')
        .should('have.value', 'CatPerson99')
    })
})