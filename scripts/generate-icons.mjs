import Jimp from 'jimp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDir = join(__dirname, '..', 'public');

// Colors
const BLUE = 0x2563EBFF;  // #2563eb
const WHITE = 0xFFFFFFFF;

async function generateIcon(size, filename) {
  const image = new Jimp(size, size, BLUE);

  // Load built-in font (largest available)
  const font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);

  // Calculate text position (centered)
  const text = 'P';
  const textWidth = Jimp.measureText(font, text);
  const textHeight = Jimp.measureTextHeight(font, text, size);

  const x = (size - textWidth) / 2;
  const y = (size - textHeight) / 2;

  // Print the letter P
  image.print(font, x, y, text);

  // Add rounded corners by making corner pixels transparent
  const cornerRadius = Math.floor(size * 0.2); // 20% radius

  for (let px = 0; px < size; px++) {
    for (let py = 0; py < size; py++) {
      // Check each corner
      const corners = [
        { cx: cornerRadius, cy: cornerRadius }, // top-left
        { cx: size - cornerRadius, cy: cornerRadius }, // top-right
        { cx: cornerRadius, cy: size - cornerRadius }, // bottom-left
        { cx: size - cornerRadius, cy: size - cornerRadius }, // bottom-right
      ];

      for (const corner of corners) {
        const inCornerBox =
          (px < cornerRadius && py < cornerRadius && corner.cx === cornerRadius && corner.cy === cornerRadius) ||
          (px >= size - cornerRadius && py < cornerRadius && corner.cx === size - cornerRadius && corner.cy === cornerRadius) ||
          (px < cornerRadius && py >= size - cornerRadius && corner.cx === cornerRadius && corner.cy === size - cornerRadius) ||
          (px >= size - cornerRadius && py >= size - cornerRadius && corner.cx === size - cornerRadius && corner.cy === size - cornerRadius);

        if (inCornerBox) {
          const dx = px - corner.cx;
          const dy = py - corner.cy;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist > cornerRadius) {
            image.setPixelColor(0x00000000, px, py); // transparent
          }
        }
      }
    }
  }

  await image.writeAsync(join(publicDir, filename));
  console.log(`Generated ${filename} (${size}x${size})`);
}

async function main() {
  await generateIcon(192, 'pwa-192x192.png');
  await generateIcon(512, 'pwa-512x512.png');
  await generateIcon(180, 'apple-touch-icon.png');
  console.log('All icons generated!');
}

main().catch(console.error);
