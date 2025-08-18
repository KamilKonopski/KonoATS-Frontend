export enum Paths {
  // Public
  INDEX = "/",

  // Auth
  LOGIN = "/auth/login",

  // Protected
  DASHBOARD = "/dashboard",
  OFFERS = "/offers",
  CANDIDATES = "/candidates",
  PIPELINE = "/pipeline",
  MAILING = "/mailing",
  STATS = "/stats",
  PROFILE = "/profile",
  SETTINGS = "/settings",
  MY_TASKS = "/my-tasks",

  // Not found
  NOT_FOUND = "*",
}

export const PathTitleMap: Record<Paths, string> = {
  [Paths.DASHBOARD]: "Panel główny",
  [Paths.OFFERS]: "Oferty",
  [Paths.CANDIDATES]: "Kandydaci",
  [Paths.PIPELINE]: "Procesy rekrutacyjne",
  [Paths.MAILING]: "Mailing",
  [Paths.STATS]: "Statystyki",
  [Paths.PROFILE]: "Profil",
  [Paths.SETTINGS]: "Ustawienia",
  [Paths.LOGIN]: "Logowanie",
  [Paths.INDEX]: "Start",
  [Paths.NOT_FOUND]: "Nie znaleziono",
  [Paths.MY_TASKS]: "Moje zadania",
};
