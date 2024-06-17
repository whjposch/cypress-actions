before(() => {
  // Before the first test starts
});

beforeEach(() => {
  // Before every test starts
  cy.visit('/');
  cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
});

afterEach(() => {
  // After every test is finished
  // DO NOT USE FOR CLEANUP, use before instead 
});

after(() => {
  // After all tests are finished
});

// TODO: INTERCEPT / wait
describe('Homepage loads correctly', () => {
  describe('Are categories complete', () => {
    it('Enough categories are available', () => {
      cy
        .get('#categories')
        .closest('.row')
        .get('[data-gtm-action="Category"]')
        .should(x => {
          expect(x.length).to.be.at.least(5);
        });
    })
  });

  describe('Are products complete', () => {
    it('Enough products are available', () => {
      cy
        .get('.home-products')
        .should(x => {
          expect(x.length).to.be.at.least(4);
        });
    });
  });
});
