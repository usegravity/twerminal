import { home, timeline, mentions, post, messages, dm } from './twitter/index.js';
import { help } from './help.js';

export const commands = [
  {
    name: 'home',
    description: 'show timeline of tweets from users you follow',
    flags: [],
    handler: home,
    example: 'twerminal home'
  },
  {
    name: 'timeline',
    description: 'show tweets from your timeline',
    flags: [],
    handler: timeline,
    example: 'twerminal timeline'
  },
  {
    name: 'mentions',
    description: 'show mentions of your account',
    flags: [],
    handler: mentions,
    example: 'twerminal mentions'
  },
  {
    name: 'tweet',
    description: 'send a new tweet',
    flags: [],
    handler: post,
    example: `twerminal tweet 'hello twitter!'`
  },
  {
    name: 'message',
    description: 'send a new direct message',
    flags: [],
    handler: dm,
    example: `twerminal message @kylegawley 'this is the best twitter client ever kyle!'`
  },
  {
    name: 'messages',
    description: 'show your dms',
    flags: [],
    handler: messages,
    example: 'twerminal messages'
  },
  {
    name: 'help',
    description: 'get help using twerminal',
    flags: [],
    handler: help,
    example: 'twerminal help'
  }
]