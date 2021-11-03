import chalk from 'chalk';
import { commands } from './command.js';

export const help = () => {

  console.log(chalk.bold.cyan('Welcome to the Twerminal 🦉 \n'));
  console.log('Usage: twerminal <command> where <command> is one of:\n');

  commands.forEach(command => {

    console.log(`\t${chalk.bold.green(command.name)}`);
    console.log(`\tdescription: ${command.description}`);

    if (command.flags?.length)
      console.log(`\tflags: ${command.flags.toString()}`)

    console.log(`\texample usage: ${command.example}`)
    console.log('\n');

  })
}