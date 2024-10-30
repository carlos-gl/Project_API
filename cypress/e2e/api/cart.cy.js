describe('Cart API', () => {
  beforeEach(() => {
    cy.loadFixture('Data').as('payload');
  });

  it('Deve retornar todos os carrinhos com status 200', () => {
    cy.getCarts().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      expect(response.body.length).to.be.greaterThan(0);
    });
  });

  it('Deve retornar um carrinho específico com ID válido', () => {
    cy.getCartById(1).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', 1);
      expect(response.body).to.have.property('userId');
      expect(response.body.products).to.be.an('array');
    });
  });

  it('Deve adicionar um novo carrinho', function () {
    cy.request({
      method: 'POST',
      url: '/carts',
      body: this.payload.cart
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('userId', this.payload.cart.userId);
      expect(response.body.products[0]).to.have.property('productId', this.payload.cart.products[0].productId);
    });
  });

  it('Deve retornar erro 400 ao tentar adicionar um carrinho com dados incompletos', () => {
    cy.request({
      method: 'POST',
      url: '/carts',
      body: { userId: 1 },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(400); 
    });
  });

  it('Deve atualizar um carrinho existente', function () {
    cy.updateCart(1, this.payload.cart).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('userId', this.payload.cart.userId);
    });
  });

  it('Deve remover um carrinho existente', () => {
    cy.deleteCart(1).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
