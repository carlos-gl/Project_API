describe('User API', () => {
  beforeEach(() => {
    cy.loadFixture('Data').as('payload');
  });

  it('Deve retornar todos os usuários com status 200', () => {
    cy.request('/users').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      expect(response.body.length).to.be.greaterThan(0);
    });
  });

  it('Deve retornar um usuário específico com ID válido', () => {
    cy.request(`/users/1`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', 1);
      expect(response.body).to.have.property('username');
    });
  });

  it('Deve adicionar um novo usuário', function () {
    cy.request({
      method: 'POST',
      url: '/users',
      body: this.payload.user
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id');
    });
  });

  it('Deve atualizar um usuário existente', function () {
    cy.request({
      method: 'PUT',
      url: `/users/1`,
      body: this.payload.user
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('username', this.payload.user.username);
    });
  });

  it('Deve remover um usuário existente', () => {
    cy.request({
      method: 'DELETE',
      url: `/users/1`
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('Deve retornar erro 404 ao tentar remover um usuário inexistente', () => {
    cy.request({
      method: 'DELETE',
      url: `/users/9999`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404); 
    });
  });
});
