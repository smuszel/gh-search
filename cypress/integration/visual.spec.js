// We can use it to generate screenshots for various app state for different viewports
// Later we can compare the diff between old and new
// This way we avoid resizing manually to check the styles
// https://medium.com/norwich-node-user-group/visual-regression-testing-with-cypress-io-and-cypress-image-snapshot-99c520ccc595

describe('Github search', () => {
    beforeEach(() => {
        cy.visit('localhost:8080');
        // TODO loop through set of viewports 
        cy.viewport(1280, 768)
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
