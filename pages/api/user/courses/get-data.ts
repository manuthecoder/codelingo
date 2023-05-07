import { prisma } from "@/prisma/server";

export default async function getCourses(req: any, res: any) {
  const { language, email } = req.query;
  //   Select from the courseProgress table where the email and language and course are the same as the query
  const courseProgress = await prisma.courseProgress.findMany({
    where: {
      AND: [{ language }, { user: { email } }],
    },
  });
  res.json(courseProgress);
}
