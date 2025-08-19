export interface Candidate {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  cvFile: string;
  appliedOfferId: string;
  preferredSalary: {
    min: number;
    max: number;
    currency: string;
  };
  preferredContract: string;
  status: "Nowy" | "Screening" | "Rozmowa" | "Zadanie" | "Odrzucony" | "Oferta" | "Zatrudniony";
  createdAt: string;
  experienceYears?: number;
  skills?: string[];
  location?: string;
  availableFrom?: string;
  notes?: string;
  language?: string;
  portfolioUrl?: string;
}
