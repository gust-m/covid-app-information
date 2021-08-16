import React from 'react';
import { Text, Container } from './styles';

type Props = {
  children: React.ReactNode;
  handleOpenModal: () => void;
};

export const Button = ({ handleOpenModal, children }: Props): JSX.Element => {
  return (
    <Container onPress={handleOpenModal}>
      <Text>{children}</Text>
    </Container>
  );
};
