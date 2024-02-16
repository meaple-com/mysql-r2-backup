import path from 'node:path';

export const tmpFolder = path.resolve(__dirname, '..', 'tmp');

export const friendlyTimestamp = () => new Date().toISOString().replace(/:/g, '-');
