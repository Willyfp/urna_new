import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import Button from '../../components/Button';
import { RootState } from '../../store/reducers';
import {
  GetCandidateCreators,
  VoteCreators,
} from '../../store/reducers/candidates';
import { dataButtons } from '../../utils/constants';
import {
  Container,
  PincodeInputStyeld,
  ViewCandidate,
  ViewCode,
  ViewKeyboard,
  ViewSubmits,
} from './styles';
import Avatar from '../../components/Avatar';
import Text from '../../components/Text';

const mapStateToProps = ({ candidates }: RootState) => ({
  step: candidates.getIn(['step']),
  candidate: candidates.getIn(['getCandidate', 'candidate']),
});

const mapDispatchToProps = {
  getCandidate: GetCandidateCreators.getCandidateRequest,
  voteRequest: VoteCreators.voteRequest,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Vote = ({
  step,
  getCandidate,
  voteRequest,
  candidate,
}: PropsFromRedux) => {
  const [code, setCode] = useState('');

  const hasCandidate = !isEmpty(candidate);

  const submit = () => {
    voteRequest(code);
  };

  useEffect(() => {
    const codeLength = step === 0 ? 5 : 2;

    if (code.length === codeLength) {
      getCandidate(code);
    }
  }, [code]);

  return (
    <Container>
      <ViewCode>
        {hasCandidate && (
          <ViewCandidate>
            <Avatar uri={candidate.photo} size={120} />
            <Text color="white" bold fontSize={30}>
              {candidate.name}
            </Text>
            <Text color="white" bold fontSize={20}>
              {candidate.partido}
            </Text>
          </ViewCandidate>
        )}

        <PincodeInputStyeld
          value={code}
          cellSize={50}
          codeLength={step === 0 ? 5 : 2}
          editable={false}
        />
      </ViewCode>
      <ViewKeyboard>
        {dataButtons.map(item => (
          <Button
            key={item.value}
            onPress={() => {
              setCode(code + item.value);
            }}
          >
            {item.value}
          </Button>
        ))}
      </ViewKeyboard>

      <ViewSubmits>
        <Button color="white">Branco</Button>

        <Button color="red" onPress={() => setCode('')}>
          Corrigir
        </Button>

        <Button color="green" onPress={submit}>
          Confirmar
        </Button>
      </ViewSubmits>
    </Container>
  );
};

export default connector(Vote);
