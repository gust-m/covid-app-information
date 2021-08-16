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
  vaccineModal?: boolean;
  handleCloseModal: () => void;
};

export const Modal = ({
  handleCloseModal,
  visible,
  vaccineModal,
  children,
}: Props): JSX.Element => {
  return (
    <ModalView transparent animationType="slide" visible={visible}>
      <Container>
        <Content>
          <ViewContent>{children}</ViewContent>
          <Button
            onPress={handleCloseModal}
            isVaccineModal={vaccineModal ?? false}
          >
            <ButtonText>Fechar</ButtonText>
          </Button>
        </Content>
      </Container>
    </ModalView>
  );
};

Modal.defaultProps = {
  vaccineModal: false,
};
