export interface IEditedOffert {
  id: string;
  ofertTitle: string;
  ofertStatus: "Otwarta" | "Zamknięta" | "Wstrzymana";
  candidates: number;
}
