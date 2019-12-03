import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Form = styled.ScrollView.attrs({
  contentContainerStyle: { padding: 30 },
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
  align-self: stretch;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;
