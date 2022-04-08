var TaskList = [
    {Task: 'Finish AP CSP code project', date: new Date('2022-04-08'
    )}, {task: 'finish late work', date: new Date('2022-04-29'
    )}, {task: 'learn more programing', date: new Date('2022-04-07'
    )}
]


var TaskName = document.getElementById("TaskName")
var Deadline = document.getElementById("TaskDeadline")



TaskList.push({Task: "add a item to list", date: new Date("2022-04-15")});


const sortedTasks = TaskList.slice().sort((a,b) => b.date - a.date);

document.getElementById("printlist").innerHTML = JSON.stringify(TaskList, null, 4);

console.log(sortedTasks);