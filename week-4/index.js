const fs = require('fs');
const { Command } = require('commander');
const path=require('path');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

// program.command('count')
//   .description('Count the number of lines in a file')
//   .argument('<file>', 'file to count')
//   .action((file) => {
//     fs.readFile(file, 'utf8', (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         const lines = data.split(' 222').length;
//         console.log(`There are ${lines} lines in ${file}`);
//       }
//     });
//   });

const filepath= path.resolve(__dirname, 'todos.json');

const writefile=

program.command('update-todo')
   .argument('add <todo>')
   .action(addtodo)

program.command('delete-todo')
   .argument('delete <deletetd>')
   .action(deletetodo)
program.command('mark-todo')
  .argument('mark <etd>'mark)
   .action(marktodo)


program.parse();
