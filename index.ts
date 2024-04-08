


import inquirer from "inquirer";
import chalk from "chalk";

//todos array//

let todos: string[] = ["lichi","lemon","almonds"];


//function
async function addTodo(todos:string[]) {
      ////////////////do-while loop/////////////
do{let ans = await inquirer.prompt([{
    name: "todo",
    type: "list",
    message: "Please select from the following opeartion:",
    choices:[
        "Add a Todo","Delete a Todo","Update a Todo","View your Todo"
    ]
   }]);
      console.log(ans);
     //////////////////////////////operation//////////////////
      //add//
  if(ans.todo === "Add a Todo"){
    let addTodo = await inquirer .prompt([{
        type:"input",
        message:"Enter your Todo:",
        name:"todo"
      }]);
      todos.push(addTodo.todo);
     console.log(chalk.greenBright(todos,"Added To Todo Successfully"));
    }
       //Delete//
   if(ans.todo === "Delete a Todo"){
        let deleteTodo:any  = await inquirer.prompt([{
        type:"list",
        name: "todo",
        message:"Select item to be deleted",    
        choices: todos.map(item=>item)
      }])
       let newtodo = todos.filter(val=>val!== deleteTodo.todo)
      todos = [...newtodo];
      console.log(chalk.greenBright(todos, "Deleted To Todo Successfully"));
    }
          //update//
   if(ans.todo === "Update a Todo"){
      let updateTodo = await inquirer.prompt([{
        type:"list",
        name: "todo",
        message:"Update your Todo:",    
        choices: todos.map(item=>item)
      }])
      let addTodo:any = await inquirer .prompt([{
        type:"input",
        message:"Enter your Todo:",
        name:"todo"
      }]);
       let newtodo = todos.filter(val=>val!==updateTodo.todo)
      todos =[...newtodo,addTodo.todo]
        console.log(chalk.greenBright(todos, "Updated To Todo Successfully"));
    }
  //view//
   if(ans.todo === "View a Todo"){
    console.log(todos);
   }
 } while(true);

} addTodo(todos)