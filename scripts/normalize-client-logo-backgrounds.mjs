import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const files = process.argv.slice(2);

async function removeConnectedWhite(filename) {
  const file = path.join("public", "client-logos", filename);
  const { data, info } = await sharp(file)
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const seen = new Uint8Array(width * height);
  const queue = new Int32Array(width * height);
  let head = 0;
  let tail = 0;

  const isBackground = (pixel) => {
    const offset = pixel * channels;
    const red = data[offset];
    const green = data[offset + 1];
    const blue = data[offset + 2];
    return (
      Math.min(red, green, blue) >= 238 &&
      Math.max(red, green, blue) - Math.min(red, green, blue) <= 18
    );
  };
  const enqueue = (pixel) => {
    if (!seen[pixel] && isBackground(pixel)) {
      seen[pixel] = 1;
      queue[tail++] = pixel;
    }
  };

  for (let x = 0; x < width; x += 1) {
    enqueue(x);
    enqueue((height - 1) * width + x);
  }
  for (let y = 0; y < height; y += 1) {
    enqueue(y * width);
    enqueue(y * width + width - 1);
  }

  while (head < tail) {
    const pixel = queue[head++];
    const x = pixel % width;
    const y = Math.floor(pixel / width);
    if (x > 0) enqueue(pixel - 1);
    if (x + 1 < width) enqueue(pixel + 1);
    if (y > 0) enqueue(pixel - width);
    if (y + 1 < height) enqueue(pixel + width);
  }

  const rgba = Buffer.alloc(width * height * 4);
  for (let pixel = 0; pixel < width * height; pixel += 1) {
    const input = pixel * channels;
    const output = pixel * 4;
    rgba[output] = data[input];
    rgba[output + 1] = data[input + 1];
    rgba[output + 2] = data[input + 2];
    rgba[output + 3] = seen[pixel] ? 0 : 255;
  }

  const normalized = await sharp(rgba, {
    raw: { width, height, channels: 4 },
  })
    .trim({ background: { r: 255, g: 255, b: 255, alpha: 0 }, threshold: 2 })
    .png({ compressionLevel: 9, palette: true, quality: 100 })
    .toBuffer();
  const temporaryFile = `${file}.normalized`;
  await sharp(normalized).toFile(temporaryFile);
  fs.renameSync(temporaryFile, file);
}

for (const file of files) {
  await removeConnectedWhite(file);
  const metadata = await sharp(path.join("public", "client-logos", file)).metadata();
  console.log(`${file}: ${metadata.width}x${metadata.height}, alpha=${metadata.hasAlpha}`);
}
