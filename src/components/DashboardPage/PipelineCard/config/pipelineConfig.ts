import { CandidateStatus } from "../../../../common/constants/candidateStatus";

export interface PipelineConfigItem {
  id: number;
  label: string;
  color: string;
  statuses: CandidateStatus[];
}

export const pipelineConfig: PipelineConfigItem[] = [
  {
    id: 1,
    label: "Nowi",
    color: "bg-blue-700",
    statuses: [CandidateStatus.NEW],
  },
  {
    id: 2,
    label: "Screening",
    color: "bg-blue-900",
    statuses: [CandidateStatus.SCREENING],
  },
  {
    id: 3,
    label: "Rozmowa/Zadanie",
    color: "bg-blue-400",
    statuses: [CandidateStatus.INTERVIEW, CandidateStatus.TASK],
  },
  {
    id: 4,
    label: "Zatrudnieni",
    color: "bg-green-600",
    statuses: [CandidateStatus.HIRED],
  },
];
