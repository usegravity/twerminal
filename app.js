#!/usr/bin/env node
import { commands } from './command.js';
import { help } from './help.js';
import chalk from 'chalk';

function run(){

  try {

    const args = process.argv.splice(2);
    const command = args[0];
    const params = args.splice(1);

    if (!command){

      console.log('Please enter a command - see below for available commands.');
      return help();
        
    }

    const commandData = commands.find(x => x.name === command);
    if (!commandData) {
      
      console.log('Please enter a valid command - see below for available commands.');
      return help();

    }

    // command ok
    console.log('\n');
    commandData?.handler?.(params); // exec handler


  }
  catch (err){

    console.log(chalk.red(err));
    process.exit();


  }
}

run();