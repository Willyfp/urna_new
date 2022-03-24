import styled from 'styled-components/native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

export const Container = styled.View`
  background-color: black;
  flex: 1;
`;

export const ViewCode = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin-bottom: 20px;
  align-items: center;
`;

export const PincodeInputStyeld = styled(SmoothPinCodeInput).attrs(() => ({
  cellStyle: {
    borderColor: 'white',
    borderWidth: 2,
    marginLeft: 10,
    marginRight: 10,
  },
  cellStyleFocused: {
    borderColor: 'white',
    borderWidth: 2,
    marginLeft: 10,
    marginRight: 10,
  },
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
}))``;

export const ViewKeyboard = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ViewSubmits = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const ViewCandidate = styled.View`
  padding: 10px;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
