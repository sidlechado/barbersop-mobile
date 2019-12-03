export const updateProductRequest = data => {
  return {
    type: '@product/UPDATE_PRODUCT_REQUEST',
    payload: { data },
  };
};

export const updateProductSucess = product => {
  return {
    type: '@product/UPDATE_PRODUCT_SUCCESS',
    payload: { product },
  };
};

export const updateProductFailure = () => {
  return {
    type: '@product/UPDATE_PRODUCT_FAILURE',
  };
};
