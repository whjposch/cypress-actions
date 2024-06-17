function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

beforeEach(() => {
    // Before every test starts
    cy.fixture('categories').then(categories => {
        const category = categories.categories[randomInt(0, categories.categories.length - 1)]
        cy.visit(category);
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
    })
});

describe('Categories page loads correctly', () => {
    describe('Are sub-categories available', () => {
      it('Should have more then one sub-category', () => {
        // cy
        //   .get('#categories')
        //   .closest('.row')
        //   .get('[data-gtm-action="Category"]')
        //   .should(x => {
        //     expect(x.length).to.be.at.least(5);
        //   });
      });
    });

    describe('Are populair products available', () => {
    });
  });
  