import { client, tweet } from './index.js';
import { config } from '../config.js';
import { loader } from '../utility.js';

export const timeline = async () => {

  try {

    loader();
    const { data } = await client.get('statuses/user_timeline', { 
      
      count: config.timeline_length,  
      tweet_mode: 'extended'
    
    });

    data.length ? data.map(t => { tweet(t) }) : console.log('No tweets to display :(');

  }
  catch (err){

    console.log(err);

  }
}