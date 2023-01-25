import { surpriseMePrompts } from "../constant";
import FileSaver from "file-saver";
export const getRandomPrompt = (promt) => {
  const randomIndex = Math.floor(Math.random() * promt.length);
  const randomPromt = surpriseMePrompts[randomIndex];

  if (randomPromt === promt) {
    return getRandomPrompt(promt);
  }
  return randomPromt;
};

export const downloadImage = (_id, photo) => {
  FileSaver.saveAs(photo, `download-${_id}.jpeg`);
};
