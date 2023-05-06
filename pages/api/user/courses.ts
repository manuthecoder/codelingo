import { prisma } from "@/prisma/server";

export default async function getCourses(req: any, res: any) {
  const { email } = req.query;
  const courses = await prisma.course.findMany({
    where: {
      identifier: email,
    },
  });
  res.json(courses);
}
