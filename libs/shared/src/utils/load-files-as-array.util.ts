/* eslint-disable @typescript-eslint/no-var-requires */
import { sync } from "glob";

export const loadFilesAsArray = (pattern: string): any[] => {
  const files = sync(pattern);
  const fileContents = files.map((file) => {
    const f = require(file);
    return Object.values(f)[0];
  });
  return fileContents;
};
