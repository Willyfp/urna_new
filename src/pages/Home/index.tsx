import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useTheme } from 'styled-components';
import Button from '../../components/Button';
import { ListCandidatesCreators } from '../../store/reducers/candidates';
import ModalCandidates from './components/ModalCandidates';
import { ContainerHome } from './styles';

const mapDispatchToProps = {
  listCandidatesRequest: ListCandidatesCreators.listCandidatesRequest,
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Home = ({ listCandidatesRequest }: PropsFromRedux) => {
  const [visible, setVisible] = useState<boolean>(false);

  const { colors } = useTheme();

  const { navigate } = useNavigation();

  useEffect(() => {
    listCandidatesRequest();
  }, []);

  return (
    <ContainerHome>
      <Button onPress={() => setVisible(true)}>Mostrar relatório</Button>

      <Button color={colors.secondary} onPress={() => navigate('VoteScreen')}>
        Iniciar votação
      </Button>

      <ModalCandidates
        visible={visible}
        onRequestClose={() => setVisible(false)}
      />
    </ContainerHome>
  );
};

export default connector(Home);
