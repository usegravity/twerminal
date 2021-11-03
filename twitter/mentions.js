import { client, tweet } from './index.js';
import { config } from '../config.js';
import { loader } from '../utility.js';

export const mentions = async () => {

  try {

    loader();
    
    const { data } = await client.get('statuses/mentions_timeline', { 
      
      count: config.timeline_length,
      tweet_mode: 'extended',
    
    });

    data.length ? data.map(t => { tweet(t) }) : console.log('No mentions to display :(')

  }
  catch (err){

    console.log(err);

  }
}