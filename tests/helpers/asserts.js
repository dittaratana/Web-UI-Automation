export function shouldContainText(selector, ...args) {
    return cy.get(selector).should("contain", ...args);
}

export function verifyAlertWindow(...args) {
    return cy.on("window:alert", (str) => {
      expect(str).to.equal(...args);
    });
  }