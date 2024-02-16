import { checkEnv } from "./env-checker";
import { dumpToFile } from './dump';
import { uploadToR2, deleteFile } from './r2';
import { friendlyTimestamp } from './helpers';

/* Main */
console.log(`--> Starting backup process...`);
console.time('--> Backup process completed in');

const timestamp = friendlyTimestamp();
const filename = `backup-mysql-${timestamp}.sql.gz`;

await checkEnv();
await dumpToFile(filename);
await uploadToR2(filename);
await deleteFile(filename);

console.log(`--> Backup process completed.`);
console.timeEnd('--> Backup process completed in');
