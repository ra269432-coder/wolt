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

const replacements = {
  '1593113565694-c8c73e04e0e8': '1582213782179-e0d53f98f2ca',
  '1556761175-5973dc0f32d7': '1552664730-d307ca884978',
  '1590650153855-89e435583cb0': '1596701062351-8c2c14d1fdd0',
  '1532629345422-7515f3d16bb0': '1488521787991-ed7bbaae773c',
  '1504439904041-928c1ba18bf0': '1494790108377-be9c29b29330'
};

let filesChanged = 0;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let changed = false;
  
  for (const [oldId, newId] of Object.entries(replacements)) {
    if (content.includes(oldId)) {
      content = content.replaceAll(oldId, newId);
      changed = true;
    }
  }
  
  if (changed) {
    fs.writeFileSync(f, content);
    console.log(`Updated ${f}`);
    filesChanged++;
  }
});

console.log(`Replaced broken IDs in ${filesChanged} files.`);
