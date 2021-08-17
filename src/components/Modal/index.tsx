import React, { ReactNode } from 'react';

import {
  ModalView,
  Container,
  Content,
  ViewContent,
  Button,
  ButtonText,
} from './styles';

type Props = {
  children: ReactNode;
  visible: boolean;
  handleCloseModal: () => void;
};

export const Modal = ({
  handleCloseModal,
  visible,
  children,
}: Props): JSX.Element => {
  return (
    <ModalView transparent animationType="slide" visible={visible}>
      <Container>
        <Content
          contentContainerStyle={{
            justifyContent: 'space-between',
            flexGrow: 1,
          }}
        >
          <ViewContent>{children}</ViewContent>
          <Button onPress={handleCloseModal}>
            <ButtonText>Fechar</ButtonText>
          </Button>
        </Content>
      </Container>
    </ModalView>
  );
};
