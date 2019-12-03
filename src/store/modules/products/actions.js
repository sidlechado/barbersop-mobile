export const createProductRequest = (name, price, description) => {
  return {
    type: '@product/CREATE_PRODUCT_REQUESST',
    payload: { name, price, description },
  };
};
