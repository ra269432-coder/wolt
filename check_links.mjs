import fs from 'fs';
import path from 'path';

function getFiles(dir, files = []) {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = `${dir}/${file}`;
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else if (name.endsWith('.tsx') || name.endsWith('.ts')) {
      files.push(name);
    }
  }
  return files;
}

const files = getFiles('./src');
const urls = new Set();
const regex = /https:\/\/images\.unsplash\.com\/[^\s"']+/g;

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const matches = content.match(regex);
  if (matches) {
    matches.forEach(m => urls.add(m));
  }
});

console.log(`Checking ${urls.size} unique Unsplash URLs...`);

const broken = [];
for (const url of urls) {
  try {
    const res = await fetch(url, { method: 'HEAD' });
    if (!res.ok) {
      console.log(`BROKEN: [${res.status}] ${url}`);
      broken.push(url);
    }
  } catch(e) {
    console.log(`ERROR: ${url} - ${e.message}`);
    broken.push(url);
  }
}
console.log('Broken URLs count:', broken.length);
