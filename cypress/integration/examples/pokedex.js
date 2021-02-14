describe('Pokedex', () => {
    it('front page can be opened', () => {
        cy.visit('http://localhost:5000')
        cy.contains('ivysaur')
        cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
    })
    it('Navigating from main page to a particular pokemon'), () => {
        cy.visit('http://localhost:5000/pokemon/ivysaur')
        cy.contains('chlorophyll')
    }
})