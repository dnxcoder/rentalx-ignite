import fs from "fs";

export const deleteFile = async (filePath: string) => {
  try {
    //it verifies if the file exists
    await fs.promises.stat(filePath);
  } catch (error) {
    return;
  }

  // this removes the file if it exists
  await fs.promises.unlink(filePath);
};
