type TStatus = 'loading' | 'succeeded' | 'failed' | 'idle';

export type CandidateType = {
  code: string;
  name: string;
  partido: string;
  photo: string;
  votos: number;
};

export type ListType = {
  id: number;
  name: string;
  candidates: CandidateType[];
};

export type CandidatesListType = ListType[];

export type InitialStateCandidatesType = {
  status: TStatus;
  candidatesList: CandidatesListType;
  step: number;
  getCandidate: {
    status: TStatus;
    candidate: CandidateType;
  };
};
