import Twit from 'twit';
import npmConf from 'npm-conf';

const conf = npmConf();

export const client = new Twit({

  consumer_key: conf.get('TWITTER_API_KEY'),
  consumer_secret: conf.get('TWITTER_API_SECRET'),
  access_token: conf.get('TWITTER_ACCESS_TOKEN'),
  access_token_secret: conf.get('TWITTER_ACCESS_TOKEN_SECRET')

});