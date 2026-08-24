import fs from 'fs';

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

let filesChanged = 0;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let changed = false;
  
  // Replace the specific Unsplash URL (with any query params) with the Pexels URL
  const regex = /https:\/\/images\.unsplash\.com\/photo-1596701062351-8c2c14d1fdd0[^"']*/g;
  
  if (regex.test(content)) {
    content = content.replace(regex, 'https://images.pexels.com/photos/4063618/pexels-photo-4063618.jpeg?auto=compress&cs=tinysrgb&w=800');
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(f, content);
    console.log(`Updated ${f}`);
    filesChanged++;
  }
});

console.log(`Fixed Disability image in ${filesChanged} files.`);
