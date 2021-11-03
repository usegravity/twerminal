import { client } from './index.js';
import { assert, loader } from '../utility.js';
import chalk from 'chalk';

export const post = async (data) => {

  try {

    assert(data[0], 'Please add text to your tweet message')
    loader('Tweeting...');

    await client.post('statuses/update', { status: data[0] });
    console.log(chalk.green('Tweet sent'));

  }
  catch (err){

    console.log(err);

  }
}