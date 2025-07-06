#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';

// Check for Volta
exec('volta --version', (error, stdout, stderr) => {
  if (!error) {
    console.log(`Volta detected (version: ${stdout.trim()}). Skipping package manager installation.`);
    return;
  }

  // Volta not found, proceed with installation logic.
  console.log('Volta not found, checking for packageManager field in package.json.');

  const packageJsonPath = path.join(process.cwd(), 'package.json');

  try {
    const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf8');
    const packageJson = JSON.parse(packageJsonContent);

    if (packageJson.packageManager) {
      const packageManager = packageJson.packageManager;
      console.log(`Found packageManager: ${packageManager}`);

      const command = `npm install -g ${packageManager}`;
      console.log(`Running: ${command}`);

      exec(command, (installError, installStdout, installStderr) => {
        if (installError) {
          console.error(`Error installing package manager: ${installError.message}`);
          return;
        }
        if (installStderr) {
          console.log(`Stderr: ${installStderr}`);
        }
        console.log(`Stdout: ${installStdout}`);
        console.log(`Successfully started installation for ${packageManager} globally.`);
      });
    } else {
      console.log('No packageManager field found in package.json');
    }
  } catch (readError) {
    console.error('Error reading or parsing package.json:', readError.message);
  }
});
