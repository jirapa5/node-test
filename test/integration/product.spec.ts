import assert from 'assert';
import app from '../../src/index';
import * as dbService from '../dbService';

describe('Test Products API', () => {
  beforeAll(async () => await dbService.connect());
  afterEach(async () => await dbService.clear());
  afterAll(async () => await dbService.close());

  const productRequest = {
    _id: '1',
    code: '123',
    name: 'Product1',
    price: 100,
    img: 'https://abc.com/images/product.jpg',
    cost: 90,
    stock: 1000,
    description: 'description',
  };

  it('Get base route should return status 404', async done => {
    const response = await app.inject({
      method: 'GET',
      url: '/',
    });

    const expected = JSON.stringify({
      message: 'Route GET:/ not found',
      error: 'Not Found',
      statusCode: 404,
    });

    expect(response.statusCode).toBe(404);
    expect(response.payload).toEqual(expected);
    done();
  });

  it('Post product should return new record with status 200', async done => {
    const response = await app.inject({
      method: 'POST',
      payload: productRequest,
      url: '/api/products',
    });

    const payload = JSON.parse(response.payload);

    expect(response.statusCode).toBe(200);
    expect(payload._id).not.toBeNull();
    done();
  });

  it('Get products should return array of products and status 200', async () => {
    const productCreationResponse = await app.inject({
      method: 'POST',
      payload: productRequest,
      url: '/api/products',
    });
    const product = JSON.parse(productCreationResponse.payload);

    const response = await app.inject({
      method: 'GET',
      url: '/api/products',
    });

    const products = JSON.parse(response.payload);

    expect(response.statusCode).toBe(200);
    expect(products.length > 0).toBeTruthy();
    expect(products).toContainEqual(expect.objectContaining({ _id: product._id }));
  });

  it('Get product should return only one product and status 200', async () => {
    const productCreationResponse = await app.inject({
      method: 'POST',
      payload: productRequest,
      url: '/api/products',
    });
    const createdProduct = JSON.parse(productCreationResponse.payload);

    const response = await app.inject({
      method: 'GET',
      url: `/api/products/${createdProduct._id}`,
    });

    const product = JSON.parse(response.payload);

    expect(response.statusCode).toBe(200);
    expect(product.code).not.toBeNull();
    expect(product.name).not.toBeNull();
    expect(product.img).not.toBeNull();
    expect(product.price).not.toBeNull();
    expect(product.stock).not.toBeNull();
    expect(product.descritpion).not.toBeNull();
  });

  //   it('Get product should return 500', async () => {
  //     // const productCreationResponse = await app.inject({
  //     // 	method: 'POST',
  //     // 	payload: productRequest,
  //     // 	url: '/api/products',
  //     // });
  //     // const createdProduct = JSON.parse(productCreationResponse.payload);
  //     const fakeproduct = 'abc';
  //     const response = await app.inject({
  //       method: 'GET',
  //       url: `/api/products/${fakeproduct}`,
  //     });

  //     // const product = {};
  //     assert.throws(() => {
  //       throw new Error('Internal Server Error');
  //     }, Error);

  //     expect(response.statusCode).toBe(500);
  //     expect(response.body).toEqual(
  //       JSON.stringify({
  //         statusCode: 500,
  //         error: 'Internal Server Error',
  //         message: "Cannot read property 'toJSON' of null",
  //       })
  //     );

  //     // expect(product.code).not.toBeNull();
  //     // expect(product.name).not.toBeNull();
  //     // expect(product.img).not.toBeNull();
  //     // expect(product.price).not.toBeNull();
  //     // expect(product.stock).not.toBeNull();
  //     // expect(product.descritpion).not.toBeNull();
  //   });

  it('Throws an error when called with missing arguments', async () => {
    const fakeproduct = '';
    const response = await app
      .inject({
        method: 'GET',
        url: `/api/products/${fakeproduct}`,
      })
      .then(response => {
        expect(response.statusCode).toEqual(500);
        // expect(response).rejects.toThrow();
      });
    // expect(response).rejects.toThrow();
    // await expect(response).rejects.toThrow;
    // .then(response => {
    // expect(response.statusCode).toEqual(500);
    // expect(JSON.parse(response.body)).toEqual({
    //   statusCode: 500,
    //   error: 'Internal Server Error',
    //   message: "Cannot read property 'toJSON' of null",
    // });
    // });
  });

  it('tests error with async/await', async () => {
    // expect.assertions(1);
    // const fakeproduct = 'abc';
    try {
      await app.inject({
        method: 'GET',
        url: `/api/products/1`,
      });
    } catch (error) {
      expect(error.statusCode).toEqual(500);
      expect(error.message).toEqual("Cannot read property 'toJSON' of null");
    }
  });

  it('Update product should return status 200 and product data', async () => {
    const productCreationResponse = await app.inject({
      method: 'POST',
      payload: productRequest,
      url: '/api/products',
    });
    const createdProduct = JSON.parse(productCreationResponse.payload);
    const newProductName = 'Product1';
    createdProduct.brand = newProductName;

    const response = await app.inject({
      method: 'PUT',
      payload: createdProduct,
      url: `/api/products/${createdProduct._id}`,
    });

    const product = JSON.parse(response.payload);

    expect(response.statusCode).toBe(200);
    expect(product.img).not.toBeNull();
    expect(product.description).not.toBeNull();
    expect(product.price).not.toBeNull();
    expect(product.cost).not.toBeNull();
    expect(product.name).toEqual(newProductName);
  });

  it('Delete product should return status 200', async () => {
    const productCreationResponse = await app.inject({
      method: 'POST',
      payload: productRequest,
      url: '/api/products',
    });
    const createdProduct = JSON.parse(productCreationResponse.payload);

    const response = await app.inject({
      method: 'DELETE',
      url: `/api/products/${createdProduct._id}`,
    });

    expect(response.statusCode).toBe(200);
  });
});
