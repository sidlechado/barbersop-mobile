import produce from 'immer';

const INITIAL_STATE = {
  id: null,
  name: null,
  price: null,
  description: null,
};

const product = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case '@product/UPDATE_PRODUCT_REQUEST': {
        draft.id = action.payload.id;
        draft.name = action.payload.name;
        draft.price = action.payload.price;
        draft.description = action.payload.description;
        break;
      }
      default:
    }
  });
};

export default product;
