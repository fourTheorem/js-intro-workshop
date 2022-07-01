import { callbackify } from 'util'
import Innertube from 'youtubei.js' // from npm

async function videoTitleFilter (videoId) {
  const youtube = await new Innertube({ gl: 'US' })
  const details = await youtube.getDetails(videoId)
  return details.title
}

const videoTitleFilterCb = callbackify(videoTitleFilter)

videoTitleFilterCb('18y6OjdeR6o', (err, videoTitle) => {
  if (err) {
    console.error(err)
    return
  }

  console.log(videoTitle)
})
