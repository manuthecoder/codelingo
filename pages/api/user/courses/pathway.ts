import { prisma } from "@/prisma/server";
import { promises as fs } from "fs";
import path from "path";

export default async function getCourses(req: any, res: any) {
  const { email, language } = req.query;

  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), "questionData");
  //Read the json data file data.json
  const fileContents = await fs.readFile(
    `${jsonDirectory}/${language}.json`,
    "utf8"
  );

  res.json({
    questions: JSON.parse(fileContents),
  });
}
