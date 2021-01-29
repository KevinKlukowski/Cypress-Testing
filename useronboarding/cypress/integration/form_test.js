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
    const checked = () => cy.get('input[type="checkbox"]');
    

    it('can type a username', () => {
        userInput()
        .should('have.value', '')
        .type('CatPerson99')
        .should('have.value', 'CatPerson99')
    });

    it('can type an email', () => {
        emailInput()
        .should('have.value', '')
        .type('kklukowski@gmail.com')
        .should('have.value', 'kklukowski@gmail.com')
    });

    it('can type a password', () => {
        passInput()
        .should('have.value', '')
        .type('catsarecool37', { delay: 100 })
        .should('have.value', 'catsarecool37')
    });

    it('can accept the terms', () => {
        checked()
        .check()
    });

    it('can submit the form', () => {
        cy.get('#button')
        .click()

    })
})