var TaskList = [
    {Task: 'Finish AP CSP code project', date: new Date('2022-04-08'
    )}, {task: 'finish late work', date: new Date('2022-04-29'
    )}, {task: 'learn more programing', date: new Date('2022-04-07'
    )}
]


function fill(){
    var name = document.getElementById('TaskNameinput').value
    var deadline = document.getElementById('TaskDeadlineinput').value

    addTask(name , deadline)

    display()
}

function addTask(TaskName, Deadline)
{
    TaskList.push({task: TaskName, date: new Date(Deadline)})
    console.log("pressed");
    console.log(TaskList);
}

TaskList.push({Task: "add a item to list", date: new Date("2022-04-15")});

var sortedTasks = TaskList.slice().sort((a,b) => b.date - a.date);

//This section for desplaying an array in HTML was made by Anand(stackOverflow)
//https://stackoverflow.com/questions/31829826/print-javascript-array-in-html

console.log(sortedTasks);