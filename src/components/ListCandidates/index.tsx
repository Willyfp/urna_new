import React, { Fragment } from 'react';
import { ScrollView } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../store/reducers';
import Avatar from '../Avatar';
import Text from '../Text';
import { CandidateCard, ContainerCandidates, ViewInfo } from './styles';

const mapStateToProps = ({ candidates }: RootState) => ({
  candidatesList: candidates.getIn(['candidatesList']),
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const ListCandidates = ({ candidatesList }: PropsFromRedux) => {
  return (
    <ScrollView>
      <ContainerCandidates>
        {candidatesList.map(item => (
          <Fragment key={item.id}>
            <Text fontSize={24} bold margin="20px 0px 10px 10px">
              {item.name}
            </Text>
            {item.candidates.map(candidate => (
              <CandidateCard key={candidate.code}>
                <Avatar uri={candidate.photo} />
                <ViewInfo>
                  <Text bold fontSize={18}>
                    {candidate.name}
                  </Text>
                  <Text bold>Número: {candidate.code}</Text>
                  <Text bold>Partido: {candidate.partido}</Text>
                  <Text bold>Votos: {candidate.votos}</Text>
                </ViewInfo>
              </CandidateCard>
            ))}
          </Fragment>
        ))}
      </ContainerCandidates>
    </ScrollView>
  );
};

export default connector(ListCandidates);
