import React, { useState, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  Container,
  Header,
  Description,
  Image,
  TextHeader,
  Title,
  VerticalBar,
  Buttons,
  TitleViewText,
  Text,
} from './styles';

import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';

import healthImg from '../../assets/health.png';

export const Home = (): JSX.Element => {
  const [symptomsModalOpen, setSymptomsModalOpen] = useState(false);
  const [afterEffectsModalOpen, setAfterEffectsModalOpen] = useState(false);
  const [vaccineModalOpen, setVaccineModalOpen] = useState(false);
  const [takeCareModalOpen, setTakeCareModalOpen] = useState(false);

  const handleOpenSymptomsModal = useCallback(() => {
    setSymptomsModalOpen(true);
  }, []);

  const handleCloseSymptomsModal = useCallback(() => {
    setSymptomsModalOpen(false);
  }, []);

  const handleOpenAfterEffectsModal = useCallback(() => {
    setAfterEffectsModalOpen(true);
  }, []);

  const handleCloseAfterEffectsModal = useCallback(() => {
    setAfterEffectsModalOpen(false);
  }, []);

  const handleOpenVaccineModal = useCallback(() => {
    setVaccineModalOpen(true);
  }, []);

  const handleCloseVaccineModal = useCallback(() => {
    setVaccineModalOpen(false);
  }, []);

  const handleOpenTakeCareModalModal = useCallback(() => {
    setTakeCareModalOpen(true);
  }, []);

  const handleCloseTakeCareModalOpenModal = useCallback(() => {
    setTakeCareModalOpen(false);
  }, []);

  return (
    <SafeAreaView>
      <Container>
        <Header>
          <Image source={healthImg} />
          <VerticalBar />
          <Title>INFO COVID-19</Title>
        </Header>
        <Description>
          <TextHeader>
            A Covid-19 é uma infecção respiratória aguda causada pelo
            coronavírus SARS-CoV-2, potencialmente grave, de elevada
            transmissibilidade e de distribuição global.
          </TextHeader>
        </Description>
        <Buttons>
          <Button handleOpenModal={handleOpenSymptomsModal}>SINTOMAS</Button>
          <Button handleOpenModal={handleOpenAfterEffectsModal}>
            SEQUELAS
          </Button>
          <Button handleOpenModal={handleOpenVaccineModal}>VACINAS</Button>
          <Button handleOpenModal={handleOpenTakeCareModalModal}>
            SE CUIDE!
          </Button>
        </Buttons>
      </Container>
      <Modal
        visible={symptomsModalOpen}
        handleCloseModal={handleCloseSymptomsModal}
      >
        <TitleViewText>Sintomas mais comuns:</TitleViewText>
        <Text>- Febre</Text>
        <Text>- Tosse seca</Text>
        <Text>- Cansaço</Text>

        <TitleViewText>Sintomas menos comuns:</TitleViewText>
        <Text>- Dores e desconfortos</Text>
        <Text>- Dor de garganta</Text>
        <Text>- Diarreia</Text>
        <Text>- Conjuntivite</Text>
        <Text>- Dor de cabeça</Text>
        <Text>- Perda de paladar ou olfato</Text>
        <Text>
          - Erupção cutânea na pele ou descoloração dos dedos das mãos ou dos
          pés
        </Text>

        <TitleViewText>Sintomas graves:</TitleViewText>
        <Text>- Dificuldade de respirar ou falta de ar</Text>
        <Text>- Dor ou pressão no peito</Text>
        <Text>- Perda de fala ou movimento</Text>
      </Modal>

      <Modal
        visible={afterEffectsModalOpen}
        handleCloseModal={handleCloseAfterEffectsModal}
      >
        <TitleViewText>Sequelas:</TitleViewText>
        <Text>- Cansaço excessivo</Text>
        <Text>- Fraqueza</Text>
        <Text>- Dor muscular</Text>
        <Text>- Tosse</Text>
        <Text>- Perda do olfato/paladar</Text>
        <Text>- Queda de cabelo</Text>
        <Text>- Alteração dos hormônios</Text>
        <Text>- Fraqueza das unhas</Text>
        <Text>- Perda de memória</Text>
        <Text>- Confusão mental</Text>
      </Modal>

      <Modal
        visible={vaccineModalOpen}
        handleCloseModal={handleCloseVaccineModal}
      >
        <TitleViewText>Vacinas:</TitleViewText>
        <Text>- BioNTech, Pfizer</Text>
        <Text>- CoronaVac</Text>
        <Text>- Johnson & Johnson</Text>
        <Text>- Oxford, AstraZeneca</Text>
        <Text>- Sputnik V</Text>
      </Modal>

      <Modal
        visible={takeCareModalOpen}
        handleCloseModal={handleCloseTakeCareModalOpenModal}
      >
        <TitleViewText>O que você precisa saber e fazer.</TitleViewText>
        <TitleViewText isException>Como prevenir o contágio:</TitleViewText>
        <Text>- Lave as mãos com água e sabão ou sue álcool em gel.</Text>
        <Text>- Cubra o nariz e boca ao espirrar ou tossir.</Text>
        <Text>- Evite aglomerações ese estiver doente.</Text>
        <Text>- Mantenha os ambientes bem ventilados.</Text>
        <Text>- Não compartilhe objetos pessoais.</Text>
      </Modal>
    </SafeAreaView>
  );
};
