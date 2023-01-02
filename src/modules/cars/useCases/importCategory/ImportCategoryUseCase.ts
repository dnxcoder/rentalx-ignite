import fs from "fs";
import { parse as csvParse } from "csv-parse";

class ImportCategoryUseCase {
  execute(file: Express.Multer.File) {
    const stream = fs.createReadStream(file.path);

    const parseFile = csvParse();

    // pipe takes the chunk of the file that was read and put inside of csvParse
    stream.pipe(parseFile);

    parseFile.on("data", async (line) => {
      console.log(line);
    });
  }
}

export { ImportCategoryUseCase };
