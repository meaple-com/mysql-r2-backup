import path from 'node:path';
import fs from 'node:fs/promises';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

import { tmpFolder } from './helpers';

const R2Client = new S3Client({
  region: 'us-east-1',
  endpoint: process.env.R2_ENDPOINT_URL,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY
  },
});

export const uploadToR2 = async (filename: string): Promise<void> => {
  console.time(`--> Uploading ${filename} to R2...`)

  const file = Bun.file(path.resolve(tmpFolder, filename));

  const fileContent = await file.arrayBuffer();

  await R2Client.send(
    new PutObjectCommand({
      Bucket: process.env.R2_BUCKET,
      Key: filename,
      Body: fileContent as unknown as string,
    }),
  )

  console.timeEnd(`--> Uploading ${filename} to R2...`)
}

export const deleteFile = async (filename: string): Promise<void> => {
  console.time(`--> Deleting ${filename}...`);

  await fs.unlink(path.resolve(tmpFolder, filename));

  console.timeEnd(`--> Deleting ${filename}...`);
}
