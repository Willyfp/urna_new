import styled from 'styled-components/native';

export const CandidateCard = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 15px;
  align-items: center;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.grey};
`;

export const ContainerCandidates = styled.View`
  flex: 1;
`;

export const ViewInfo = styled.View`
  margin-left: 10px;
`;
