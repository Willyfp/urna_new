import React from 'react';
import { Modal, ModalProps } from 'react-native';
import { useTheme } from 'styled-components';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import { ButtonClose, ModalView } from './styles';
import ListCandidates from '../../../../components/ListCandidates';

const ModalCandidates = ({ onRequestClose, ...rest }: ModalProps) => {
  const { colors } = useTheme();

  return (
    <Modal {...rest} onRequestClose={onRequestClose} animationType="fade">
      <ModalView>
        <ListCandidates />
        <ButtonClose onPress={onRequestClose}>
          <EvilIcon name="close-o" size={50} color={colors.primary} />
        </ButtonClose>
      </ModalView>
    </Modal>
  );
};

export default ModalCandidates;
