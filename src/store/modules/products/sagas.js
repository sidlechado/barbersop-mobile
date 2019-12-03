import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '~/services/api';

// import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProduct({ payload }) {
  try {
    const { id, name, price, description } = payload.data;

    const product = Object.assign({ id, name, price, description });

    yield call(api.put, 'products', product);

    Alert.alert('Sucesso', 'Produto atualizado com sucesso.');
  } catch (e) {
    Alert.alert(
      'Falha na atualização',
      'Houve um erro na atualização do perfil, verifique seus dados.'
    );
  }
}

export default all([
  takeLatest('@product/UPDATE_PRODUCT_REQUEST', updateProduct),
]);
