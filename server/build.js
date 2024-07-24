import { spawn } from 'child_process';
import { mkdirSync } from 'fs';

mkdirSync('out', { recursive: true });

spawn('node', ['server/copy.js'], {
  shell: true,
  stdio: 'inherit',
});

spawn('./node_modules/.bin/rollup', ['-c'], {
  shell: true,
  stdio: 'inherit',
});