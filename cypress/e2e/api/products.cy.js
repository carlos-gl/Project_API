describe('Products API', () => {
  beforeEach(() => {
    cy.loadFixture('Data').as('payload');
  });

  it('Deve retornar todos os produtos com status 200', () => {
    cy.getProducts().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      expect(response.body.length).to.be.greaterThan(0);
    });
  });

  it('Deve retornar um produto específico com ID válido', () => {
    cy.getProductById(1).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', 1);
      expect(response.body).to.have.property('title');
    });
  });

  it('Deve adicionar um novo produto', function () {
    cy.createProduct(this.payload.product).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('title', this.payload.product.title);
    });
  });

  it('Deve atualizar um produto existente', function () {
    cy.request({
      method: 'PUT',
      url: `/products/1`,
      body: this.payload.product
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('title', this.payload.product.title);
    });
  });

  it('Deve remover um produto existente', () => {
    cy.deleteProduct(1).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
