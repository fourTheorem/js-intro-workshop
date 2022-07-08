/*

Can we do the same ourselves without using the utility function by Node.js?

*/

import Innertube from 'youtubei.js' // from npm

async function videoTitleFilter (videoId) {
  const youtube = await new Innertube({ gl: 'US' })
  const details = await youtube.getDetails(videoId)
  return details.title
}

function videoTitleFilterCb (videoId, cb) { // 1. copy the signature of the original function and add a callback at the end
  videoTitleFilter(videoId) // 2. call the original function wich will return a promise
    .then((videoTitle) => cb(null, videoTitle)) // 3. when the promise resolves, we call the callback with the data
    .catch(cb) // 4. if the promise rejects we call the callback with the error
  // note: the above is a shorthand for `.catch(err => cb(err))`
}

videoTitleFilterCb('18y6OjdeR6o', (err, videoTitle) => {
  if (err) {
    console.error(err)
    return
  }

  console.log(videoTitle)
})
