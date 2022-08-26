describe('Alura busca cursos', () =>{

    beforeEach(() => {
        // Acessar o site Alura
        cy.visit('https://www.alura.com.br');
    })

   it('Buscar curso de java', () => {
        // Digitar java no campo de busca
        cy.get('#header-barraBusca-form-campoBusca').type('JavaScript');

        // Clicar no botão para pesquisar
        cy.get('.header-barraBusca-form-submit').click();

        // Validar a consulta realizada
        cy.get('h4.busca-resultado-nome').should('contain', 'Formação JavaScript para Front-end')

    })
})