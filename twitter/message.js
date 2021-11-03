import { client, tweet } from './index.js';
import { assert, loader } from '../utility.js';
import { config } from '../config.js';
import chalk from 'chalk';

export const messages = async (data) => {

  try {

    loader();
    const { data } = await client.get('direct_messages/events/list', { count: config.messages_length });
    
    // attach user screen names
    if (data.events.length){

      const userIDs = data.events.map(x => x.message_create.sender_id);
      const users = await client.get('users/lookup', { user_id: userIDs.toString() });

      for (let m of data.events){

        m.message_create.user = users?.data?.find(x => x.id_str === m.message_create.sender_id);
        template(m.message_create);

      }
    }
    else {

      console.log('No messages to display :(')

    }
  }
  catch (err){

    console.log(err);

  }
}

export const dm = async (data) => {

  try {

      assert(data[0], 'Please specify a @username');
      assert(data[1], 'Please add text to your tweet message');
      loader();

      // get the user 
      const user = await client.get('users/lookup', { screen_name: data[0].replace('@', '') });
      assert(user.data[0].id_str, 'No user with that username');

      await client.post('direct_messages/events/new', { 

        event: {
          type: 'message_create',
          message_create: {
            target: {
              recipient_id: user.data[0].id_str,
            },
            message_data: {
              text: data[1],
            }
          }
        }
      });

      console.log(chalk.green('Message sent'));
  
  }
  catch (err){

    console.log(err);

  }
}

function template(data){

  console.log(`${data.user.name} ${data.user.screen_name}\n`);
  console.log(data.message_data.text);
  console.log('\n------------\n')

}