import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled.TouchableOpacity`
  width: 230px;
  height: 47px;
  background: #25476d;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 24px;
  font-family: ${theme.fonts.text400};
`;
