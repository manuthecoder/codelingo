import { prisma } from "@/prisma/server";

export default async function getCourses(req: any, res: any) {
  const { accuracy, level, language, email } = req.query;
  //   Select from the courseProgress table where the email and language and course are the same as the query
  const courseProgress = await prisma.courseProgress.findMany({
    where: {
      AND: [{ language }, { user: { email } }, { level }],
    },
  });

  //   If the courseProgress is empty, create a new courseProgress
  if (courseProgress.length === 0) {
    await prisma.courseProgress.create({
      data: {
        language,
        user: { connect: { email } },
        level,
        accuracy: Number(accuracy),
      },
    });
  } else {
    //   If the courseProgress is not empty, update the courseProgress
    await prisma.courseProgress.update({
      where: {
        id: courseProgress[0].id,
      },
      data: {
        accuracy: Number(accuracy),
      },
    });
  }
  res.json({ message: "success" });
}
