// Trick to get the intellisense for cypress
/** @type {import('../support/types'))} */
const cyp = cy;

// TODO consider running in prod env
describe('Github search', () => {

    beforeEach(() => {
        cyp.visit('localhost:8080');
    });

    it('has a user search functionality', () => {
        cyp.get('#search').type('sny');
        cyp.get('.react-autosuggest__suggestions-container').should('contain.text', 'snyff');
        cyp.get('.react-autosuggest__suggestions-container').click();
        cyp.get('#user-details-login').should('contain.text', 'snyff');
    })

});
