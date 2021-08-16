import styled, { css } from 'styled-components/native';
import { theme } from '../../global/styles/theme';

interface ButtonProps {
  isVaccineModal: boolean;
}

export const ModalView = styled.Modal``;

export const Container = styled.View`
  background: rgba(0, 0, 0, 0.7);

  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 200px 50px;
`;

export const Content = styled.ScrollView`
  background: #fff;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  padding: 15px;
`;

export const ViewContent = styled.View`
  height: 50%;
  display: flex;
  flex-grow: 1;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
  background: #25476d;
  border-radius: 5px;
  align-self: center;
  padding: 10px;
  margin: 10px 0 20px 0;
  height: 40px;
  width: 100px;

  ${props =>
    props.isVaccineModal &&
    css`
      margin-top: 100px;
    `}
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  text-align: center;
  color: #fff;
  font-family: ${theme.fonts.text400};
`;
