import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ContainerAbout = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100;
  padding-left: 8;
`;

export const Title = styled.Text`
  align-self: center;
  margin-top: 30px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;
