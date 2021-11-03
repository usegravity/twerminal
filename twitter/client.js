import Twit from 'twit';
import { config } from '../config.js';

export const client = new Twit({

  consumer_key: config.twitter_api_key,
  consumer_secret: config.twitter_api_secret,
  access_token: config.twitter_access_token,
  access_token_secret: config.twitter_access_token_secret

});