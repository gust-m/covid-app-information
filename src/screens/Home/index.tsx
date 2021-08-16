import React, { useState, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  Container,
  Header,
  Description,
  Image,
  Text,
  Title,
  VerticalBar,
  Buttons,
  TitleViewText,
  ViewText,
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
          <Text>
            A Covid-19 é uma infecção respiratória aguda causada pelo
            coronavírus SARS-CoV-2, potencialmente grave, de elevada
            transmissibilidade e de distribuição global.
          </Text>
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
        <ViewText>
          - Febre {'\n'}- Tosse seca {'\n'}- Cansaço {'\n'}
        </ViewText>

        <TitleViewText>Sintomas menos comuns:</TitleViewText>
        <ViewText>
          - Dores e desconfortos {'\n'}- Dor de garganta {'\n'}- Diarreia {'\n'}
          - Conjuntivite {'\n'}- Dor de cabeça {'\n'}- Perda de paladar ou
          olfato {'\n'}- Erupção cutânea na pele ou descoloração dos dedos das
          mãos ou dos pés {'\n'}
        </ViewText>

        <TitleViewText>Sintomas graves:</TitleViewText>
        <ViewText>
          - Dificuldade de respirar ou falta de ar {'\n'}- Dor ou pressão no
          peito {'\n'}- Perda de fala ou movimento {'\n'}
        </ViewText>
      </Modal>

      <Modal
        visible={afterEffectsModalOpen}
        handleCloseModal={handleCloseAfterEffectsModal}
      >
        <TitleViewText>Sequelas:</TitleViewText>
        <ViewText>
          - Cansaço excessivo {'\n'}- Fraqueza {'\n'}- Dor muscular {'\n'}-
          Tosse {'\n'}- Perda do olfato/paladar {'\n'}- Queda de cabelo {'\n'}-
          Alteração dos hormônios {'\n'}- Fraqueza das unhas {'\n'}- Perda de
          memória {'\n'}- Confusão mental {'\n'}
        </ViewText>
      </Modal>

      <Modal
        vaccineModal
        visible={vaccineModalOpen}
        handleCloseModal={handleCloseVaccineModal}
      >
        <TitleViewText>Vacinas:</TitleViewText>
        <ViewText>
          - BioNTech, Pfizer {'\n'}- CoronaVac {'\n'}- Johnson & Johnson {'\n'}-
          Oxford, AstraZeneca {'\n'}- Sputnik V {'\n'}
        </ViewText>
      </Modal>

      <Modal
        visible={takeCareModalOpen}
        handleCloseModal={handleCloseTakeCareModalOpenModal}
      >
        <TitleViewText>
          O que você precisa saber.{'\n'}Como prevenir o contágio:
        </TitleViewText>
        <ViewText>
          - Lave as mãos com água e sabão ou sue álcool em gel.{'\n'}- Cubra o
          nariz e boca ao espirrar ou tossir.{'\n'}- Evite aglomerações ese
          estiver doente.{'\n'}- Mantenha os ambientes bem ventilados.{'\n'}-
          Não compartilhe objetos pessoais.{'\n'}
        </ViewText>
      </Modal>
    </SafeAreaView>
  );
};
