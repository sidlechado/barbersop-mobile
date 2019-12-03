import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ContainerAbout = styled.View`
  align-self: center;
  align-items: center;
  justify-content: center;
  width: 200;
  padding-left: 8;
`;

export const Title = styled.Text`
  align-self: center;
  margin-top: 30px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const AboutTextH1 = styled.Text`
  margin-top: 10px;
  align-self: center;
  font-size: 15px;
  font-weight: bold;
  color: #fff;
`;

export const AboutTextH2 = styled.Text`
  max-height: 30px;
  align-self: auto;
  margin-top: 10px;
  font-size: 15px;
  color: #fff;
  text-align: justify;
`;

export const AboutTextH2Expanded = styled.Text`
  flex: 1;
  align-self: auto;
  margin-top: 10px;
  font-size: 15px;
  color: #fff;
  text-align: justify;
`;

export const Bold = styled.Text`
  color: #000;
  font-weight: bold;
`;

export const Separator = styled.View`
  height: 3px;
  background: rgba(255, 255, 255, 0.7);
  margin: 20px 0 30px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;
