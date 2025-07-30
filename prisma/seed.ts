import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const cameras = await prisma.camera.createMany({
    data: [
      { name: 'Camera 01', location: 'Vault' },
      { name: 'Camera 02', location: 'Shop Floor A' },
      { name: 'Camera 03', location: 'Entrance' }
    ]
  });

  await prisma.incident.createMany({
    data: [
      {
        type: 'Unauthorised Access',
        tsStart: new Date('2025-07-07T14:35:00'),
        tsEnd: new Date('2025-07-07T14:37:00'),
        thumbnailUrl: '/thumb1.jpg',
        cameraId: 2
      },
      {
        type: 'Gun Threat',
        tsStart: new Date('2025-07-07T14:35:00'),
        tsEnd: new Date('2025-07-07T14:37:00'),
        thumbnailUrl: '/thumb2.jpg',
        cameraId: 2
      },
      {
        type: 'Face Recognised',
        tsStart: new Date('2025-07-07T14:45:00'),
        tsEnd: new Date('2025-07-07T14:47:00'),
        thumbnailUrl: '/thumb3.jpg',
        cameraId: 1
      }
      // Add 10+ more entries similarly
    ]
  });
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
