// We can use it to generate screenshots for various app state for different viewports
// Later we can compare the diff between old and new
// This way we avoid resizing manually to check the styles

describe('Github search', () => {
    beforeEach(() => {
        cy.visit('localhost:8080');
    });

    it('has default view', () => {
        cy.matchImageSnapshot();
    });

    it('has state for selection of users', () => {
        cy.get('#search').type('sny');
        cy.matchImageSnapshot();
    })

    it('has state for hovering over selection', () => {
        cy.get('#search').type('sny');
        cy.get('.react-autosuggest__suggestions-container').trigger('mouseover');
        cy.matchImageSnapshot();
    })

    it('has state for selected user details', () => {
        cy.get('#search').type('sny');
        cy.get('.react-autosuggest__suggestions-container').click();
        cy.matchImageSnapshot();
    })
});
