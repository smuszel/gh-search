describe('Github search', () => {
    beforeEach(() => {
        cy.visit('localhost:8080');
    });

    it('has default view', () => {
        cy.matchImageSnapshot();
    });
});
