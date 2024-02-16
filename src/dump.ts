import { exec as _exec } from 'node:child_process';
import { promisify } from 'node:util';
import path from 'node:path';

import { tmpFolder } from './helpers';

const exec = promisify(_exec);

export const dumpToFile = async (filename: string) => {
  const filePath = path.resolve(tmpFolder, filename);

  console.time(`--> Dumping ${filename}...`);

  const { stderr } = await exec(`mysqldump --host=${process.env.MYSQL_HOST} --port=${process.env.MYSQL_PORT} --user=${process.env.MYSQL_USER} --password=${process.env.MYSQL_PASSWORD} ${process.env.MYSQL_DATABASE} | gzip > ${filePath}`)

  if (stderr) {
    console.error(`Error dumping ${filename}: ${stderr}`);
    process.exit(1);
  }

  console.timeEnd(`--> Dumping ${filename}...`);
};
