import { prisma } from "@/prisma/server";

export default async function getCourses(req: any, res: any) {
  const { email, language } = req.query;
  const courses = await prisma.course.create({
    data: {
      user: {
        connect: { email },
      },
      language,
    },
  });
  res.json(courses);
}
