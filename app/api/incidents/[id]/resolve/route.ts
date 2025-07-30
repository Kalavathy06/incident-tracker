import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const incident = await prisma.incident.update({
    where: { id },
    data: { resolved: true }
  });

  return NextResponse.json(incident);
}
