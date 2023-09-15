import { FFmpeg } from '@ffmpeg/ffmpeg'
import { toBlobURL } from '@ffmpeg/util'

// import coreURL from '../ffmpeg/ffmpeg-core.js?url'
// import wasmURL from '../ffmpeg/ffmpeg-core.wasm?url'
// import workerURL from '../ffmpeg/ffmpeg-worker.js?url'

let ffmpeg: FFmpeg | null

export async function getFFmpeg() {
  if (ffmpeg) {
    return ffmpeg
  }

  ffmpeg = new FFmpeg()

  const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.2/dist/umd'

  if (!ffmpeg.loaded) {
    await ffmpeg.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
      wasmURL: await toBlobURL(
        `${baseURL}/ffmpeg-core.wasm`,
        'application/wasm',
      ),
    })
  }

  return ffmpeg
}
