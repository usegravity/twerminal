import { measure, time } from '../utility.js';
import { config } from '../config.js';
import chalk from 'chalk';

export const tweet = async (data) => {

  console.log(`${chalk.bold.cyan(`${data.user.name} @${data.user.screen_name}`)} ยท ${chalk.dim(time(data.created_at))}\n`);  
  console.log(data.full_text);

  // list photo/images
  if (data.entities?.media?.length){
    data.entities.media.forEach(item => {

      console.log(`\n${config.icon[item.type || '']} ${item.media_url}`)

    });
  }

  console.log(`\n๐ ${data.favorite_count} ๐ ${data.retweet_count}`);

  // show replies
  if (data.replies?.length){

    data.replies.forEach(reply => {

      console.log(`\n    โช๏ธ\t${chalk.bold.cyan(`${reply.user.name} @${reply.user.screen_name}`)} ยท ${chalk.dim(time(data.created_at))}`);
      console.log(`\n\t${reply.full_text}`);

       // list photo/images
      if (reply.entities?.media?.length){
        reply.entities.media.forEach(item => {

          console.log(`\n\t${config.icon[item.type || '']} ${item.media_url}`)

        });
      }

      console.log(`\n\t๐ ${reply.favorite_count} ๐ ${reply.retweet_count}`);

    })
  }

  console.log(chalk.dim('\n------------------------------------------------------------\n'));
  
}