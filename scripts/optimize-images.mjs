import { existsSync, mkdirSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const input = join(root, 'src', 'assets', 'img', 'Fop1.jpg')
const publicDir = join(root, 'public')

async function main() {
  if (!existsSync(input)) {
    console.warn('[optimize-images] Skipping: src/assets/img/Fop1.jpg not found.')
    process.exit(0)
  }

  if (!existsSync(publicDir)) {
    mkdirSync(publicDir, { recursive: true })
  }

  const base = sharp(input).rotate()

  await base
    .clone()
    .resize(1920, 1080, { fit: 'cover', position: 'attention' })
    .webp({ quality: 82 })
    .toFile(join(publicDir, 'hero-1920.webp'))

  await base
    .clone()
    .resize(1280, 720, { fit: 'cover', position: 'attention' })
    .webp({ quality: 80 })
    .toFile(join(publicDir, 'hero-1280.webp'))

  await base
    .clone()
    .resize(1920, 1080, { fit: 'cover', position: 'attention' })
    .jpeg({ quality: 78, mozjpeg: true })
    .toFile(join(publicDir, 'hero-1920.jpg'))

  await base
    .clone()
    .resize(1200, 630, { fit: 'cover', position: 'attention' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(join(publicDir, 'og.jpg'))

  await base
    .clone()
    .resize(180, 180, { fit: 'cover', position: 'attention' })
    .png()
    .toFile(join(publicDir, 'apple-touch-icon.png'))

  console.log('[optimize-images] Wrote hero WebP/JPEG, og.jpg, and apple-touch-icon.png to public/.')
}

main().catch((err) => {
  console.error('[optimize-images]', err)
  process.exit(1)
})
