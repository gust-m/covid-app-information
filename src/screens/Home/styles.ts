import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled.View`
  height: 100%;
`;

export const Header = styled.View`
  background: #25476d;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 110px;
`;

export const Image = styled.Image`
  width: 74px;
  height: 74px;
`;

export const VerticalBar = styled.Text`
  height: 80%;
  width: 1px;
  background: #fff;
`;

export const Description = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 190px;
  background: #cad3e1;
  padding: 0 45px;
`;

export const Title = styled.Text`
  font-size: 36px;
  color: #fff;

  font-family: ${theme.fonts.title600};
`;

export const Text = styled.Text`
  font-size: 20px;
  color: #fff;
  text-align: center;
  font-family: ${theme.fonts.text400};
`;

export const TitleViewText = styled.Text`
  color: #454545;
  font-size: 18px;
  font-weight: 700;
`;

export const ViewText = styled.Text`
  color: #999999;
  margin-left: 8px;
  line-height: 19px;
`;

export const Buttons = styled.View`
  background: #e5e5e5;

  display: flex;
  flex-grow: 1;
  justify-content: space-around;
  align-items: center;
  padding: 15px 0;
`;
