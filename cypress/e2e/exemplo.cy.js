describe("Testes da criação, registro e login",()=>{
  it.skip("Teste criação de usuario com sucesso",()=>{
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type("Teste")
    cy.get('#Text1').type("Teste")
    cy.get('#username').type("Teste")
    cy.get('#password').type("Teste")
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should("contain.text","Registration successful")
  })

  it.skip("Teste criação de usuario com erro",()=>{
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type("Teste")
    cy.get('#username').type("Teste")
    cy.get('#password').type("Teste")
    cy.get('.btn-primary').should("be.disabled")
  
  })

   it("Teste criação de usuario com sucesso",()=>{
    let infos = criarUser()
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('#username').type(infos[0])
    cy.get('#password').type(infos[1])
    cy.get('.btn-primary').click()

  })

  it('Delete do user com sucesso',()=>{
    let infos = criarUser()
    cy.login(infos[0], infos[1])
    cy.get('.ng-binding > a').click()
    cy.get('.btn')
    cy.login(infos[0], infos[1])
    cy.get('.ng-binding').should("have.text","Username or password is incorrect")
  })

})


function criarUser(){
  let hora = new Date().getHours().toString()
  let minuto = new Date().getMinutes().toString()
  let seg = new Date().getSeconds().toString()
  let id = hora + minuto + seg + "id"
  let senha = hora + minuto + seg + "senha"
  let infos = [id , senha]

  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
  cy.get('.btn-link').click()
  cy.get('#firstName').type("id")
  cy.get('#Text1').type("id")
  cy.get('#username').type(id)
  cy.get('#password').type(senha)
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should("contain.text","Registration successful")
  return infos
}