import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const ModalView = styled.Modal``;

export const Container = styled.View`
  background: rgba(0, 0, 0, 0.7);
  padding: 150px 40px;
  height: 100%;
`;

export const Content = styled.ScrollView`
  background: #fff;
  border-radius: 5px;
  padding: 0 15px 15px 15px;
`;

export const ViewContent = styled.View`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  background: #25476d;
  border-radius: 5px;
  align-self: center;

  padding: 10px;
  margin: 15px 0 20px 0;
  height: 40px;
  width: 100px;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  text-align: center;
  color: #fff;
  font-family: ${theme.fonts.text400};
`;
