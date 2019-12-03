import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};

const products = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case '@product/CREATE_PRODUCT_REQUESST': {
        draft.profile = action.payload.user;
        break;
      }
      default:
    }
  });
};

export default products;
