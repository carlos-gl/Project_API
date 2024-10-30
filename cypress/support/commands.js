// Comando para carregar fixture
Cypress.Commands.add('loadFixture', (fixtureName) => {
  return cy.fixture(fixtureName).then((data) => {
    return data;
  });
});

// Comando para criar um novo produto
Cypress.Commands.add('createProduct', (productData) => {
  return cy.request({
    method: 'POST',
    url: '/products',
    body: productData
  });
});

// Comando para atualizar um carrinho específico
Cypress.Commands.add('updateCart', (cartId, cartData) => {
  return cy.request({
    method: 'PUT',
    url: `/carts/${cartId}`,
    body: cartData
  });
});

// Comando para obter um carrinho por ID
Cypress.Commands.add('getCartById', (cartId) => {
  return cy.request(`/carts/${cartId}`);
});

// Comando para obter um produto por ID
Cypress.Commands.add('getProductById', (productId) => {
  return cy.request(`/products/${productId}`);
});

// Comando para deletar um carrinho específico
Cypress.Commands.add('deleteCart', (cartId) => {
  return cy.request({
    method: 'DELETE',
    url: `/carts/${cartId}`
  });
});

// Comando para deletar um produto específico
Cypress.Commands.add('deleteProduct', (productId) => {
  return cy.request({
    method: 'DELETE',
    url: `/products/${productId}`
  });
});

// Comando para obter todos os carrinhos com parâmetros opcionais
Cypress.Commands.add('getCarts', (options = {}) => {
  return cy.request({
    method: 'GET',
    url: '/carts',
    qs: options
  });
});

// Comando para obter todos os produtos com parâmetros opcionais
Cypress.Commands.add('getProducts', (options = {}) => {
  return cy.request({
    method: 'GET',
    url: '/products',
    qs: options
  });
});
