export interface JobOffer {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  salaryRange: {
    min: number;
    max: number;
    currency: string;
  };
  contractType: string[];
  location: string;
  level: "Junior" | "Mid" | "Senior";
  status: "Otwarta" | "Zamknięta" | "Wstrzymana";
  language: string;
  teamSize: string;
  benefits: string[];
  technologies: {
    mustHave: string[];
    niceToHave: string[];
  };
  company: string;
  createdAt: string;
  updatedAt: string;
  candidates: string[];
  numberOfOpenings: number;
  validUntil: string;
  source: string;
}
