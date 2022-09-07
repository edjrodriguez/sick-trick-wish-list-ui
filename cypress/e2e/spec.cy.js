describe('Sick Trick Wish List', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')

  })

  it('Should load the homepage', () => {
   cy.contains('h1', "Sick Trick Wish List")
  })

  it('Should load 3 trick cards', () => {
    cy.contains('h3', "regular treflip")
    cy.contains('h3', "switch heelflip")
    cy.contains('h3', "regular frontside 50-50, backside 180 out")
   })

   it('Should be able to add a new trick', () => {
    cy.get('input[name="name"]')
      .type('kickflip')
    cy.get('select[name="stance"]')
      .select('Switch')  
    cy.get('select[name="obstacle"]')
      .select('Pool') 

    // cy.get('input[name="link"]')
    //   .type('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
      
    cy.get('button[name="submit"]').click()
    cy.contains('h3', 'kickflip')    
    cy.contains('h3', "Switch")
    cy.contains('h3', "Pool")

    // cy.contains('h3', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')    
   })

})