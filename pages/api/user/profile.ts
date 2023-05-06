import { prisma } from "@/prisma/server";

export default async function getCourses(req: any, res: any) {
  const { email } = req.query;
  console.log(email);
  const courses = await prisma.user.findMany({
    where: { email },
  });
  res.json(courses);
}
