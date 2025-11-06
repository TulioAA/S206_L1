describe("Exercício 1 - Testes no site Automation Exercise", () => {
  
  it("1. Deve acessar a página inicial com sucesso", () => {
    cy.visit("https://automationexercise.com");
    cy.get("img[alt='Website for automation practice']").should("be.visible");
  });

  it("2. Deve acessar a página de login", () => {
    cy.visit("https://automationexercise.com/login");
    cy.contains("Login to your account").should("be.visible");
  });

  it("3. Deve falhar ao tentar login com credenciais inválidas", () => {
    cy.visit("https://automationexercise.com/login");
    cy.get('[data-qa="login-email"]').type("fake@email.com");
    cy.get('[data-qa="login-password"]').type("senhaerrada");
    cy.get('[data-qa="login-button"]').click();
    cy.contains("Your email or password is incorrect!").should("be.visible");
  });

  it("4. Deve pesquisar um produto", () => {
    cy.visit("https://automationexercise.com");
    cy.get("#search_product").type("Tshirt");
    cy.get("#submit_search").click();
    cy.contains("Searched Products").should("be.visible");
  });

  it("5. Deve acessar a página de contato", () => {
    cy.visit("https://automationexercise.com/contact_us");
    cy.contains("Get In Touch").should("be.visible");
  });

  it("6. Deve acessar a página de produtos", () => {
    cy.visit("https://automationexercise.com/products");
    cy.contains("All Products").should("be.visible");
  });

});