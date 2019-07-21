import { Clip } from 'phonograph';

export const playWithPhonograph = (url, clientID) => {

    const streamURL = url + '?client_id='+ clientID +'.mp3';

  const clip = new Clip({ url: streamURL });

  return clip
    .buffer()
    .then(() => {
      console.log('phonograph.js : playing:', clip);
      return clip.play();
    })
    .catch(e => {
      console.log('phonograph.js : err:', e);
    });
};
