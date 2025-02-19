import { readdir } from 'fs/promises';
import { join } from 'path';

async function generatePhotoList() {
  try {
    const photoDir = join(process.cwd(), 'photos');
    const files = await readdir(photoDir);

    const photoArray = files
      .filter(file => file.match(/\.(avif|jpg|jpeg)$/i))
      .map((file) => `/photos/${file}`);

    const output = `export const photos = ${JSON.stringify(photoArray, null, 2)};`;

    console.log(output);
  } catch (error) {
    console.error('Error generating photo list:', error);
    process.exit(1);
  }
}

generatePhotoList();
