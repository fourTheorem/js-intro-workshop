/*
  This is a bit of a rare use case, but it happens sometimes...

  What if we have written a promise-based function, but we have to pass it in a context
  that accepts a callback-based function instead?

  We need to "callbackify" our function!

  There is a utility for that called `callbackify` from the `util` package.
*/

import { callbackify } from 'util'
import Innertube from 'youtubei.js' // from npm

// promise-based function that we want to callbackify
async function videoTitleFilter (videoId) {
  const youtube = await new Innertube({ gl: 'US' })
  const details = await youtube.getDetails(videoId)
  return details.title
}

// uses callbackify to get a callbackified version of the original function
const videoTitleFilterCb = callbackify(videoTitleFilter)

// call it using a callback!
videoTitleFilterCb('18y6OjdeR6o', (err, videoTitle) => {
  if (err) {
    console.error(err)
    return
  }

  console.log(videoTitle)
})
