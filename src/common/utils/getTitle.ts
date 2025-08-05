import { Paths, PathTitleMap } from "../constants/paths";

export const getTitle = (pathname: string): string => {
  const matchedPath = Object.values(Paths).reduce((bestMatch, path) => {
    if (pathname.startsWith(path) && path.length > bestMatch.length) {
      return path;
    }
    return bestMatch;
  }, "");

  return PathTitleMap[matchedPath as Paths] || "KonoATS";
};
