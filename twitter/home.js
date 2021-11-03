import { client, tweet } from './index.js';
import { config } from '../config.js';
import { loader } from '../utility.js';

export const home = async () => {

  try {

    loader();

    const { data } = await client.get('statuses/home_timeline', { 
      
      count: config.timeline_length, 
      tweet_mode: 'extended',
    
    });
    
    if (data.length){

      // get a list of tweets with replies
      let ids = '';
      data.filter(x => x.in_reply_to_status_id_str).forEach(x => ids += `${x.in_reply_to_status_id_str},`);
      const originalTweets = await client.get('statuses/lookup', { id: ids, tweet_mode: 'extended' });

      // inject original tweets with replies into timeline
      for (let status of data){

        status.replies = [];

        if (status.in_reply_to_status_id_str){

          const reply = {...status };
          status = originalTweets.data.find(x => x.id_str === status.in_reply_to_status_id_str);
          status.replies = [reply];

        }
 
        tweet(status);

      }
    }
    else {

      console.log('No tweets to display :(')

    }
  }
  catch (err){

    console.log(err);

  }
}