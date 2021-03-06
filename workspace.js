//Sets up array(list) as an object and sets peramiters / pre-fills list with 3 tasks
var TaskList = [
    {Task: 'Finish AP CSP code project', date: new Date('2022/05/02'
    )}, {task: 'finish late work', date: new Date('2022/05/19'
    )}, {task: 'learn more programing', date: new Date('2022/05/01'
    )}
]

//function is called when "Add to List" button is pressed
//gets text from user inputs for name and date then calls addTask Function and fills in parameters
function fill(){
    var name = document.getElementById('TaskNameinput').value
    var deadline = document.getElementById('TaskDeadlineinput').value

    //Algorithem checks if the inputed date is valid date
    var givendate = JSON.stringify(deadline)
    var currentDate = new Date
    if(givendate.substring(6,8) >= currentDate.getMonth()+1)
    {
        console.log("passed")
        if(givendate.substring(9,11) >= currentDate.getDate() || givendate.substring(6,8) > currentDate.getMonth()+1 )
        {
            addTask(name, deadline)
            console.log("Valid Date Adding")
        }
        else
        {
            alert("invalid date: Given Date has passed")
        }
    }
    else
    {
        alert("invalid date: Given Date has passed")
    }

}

//function gets called by fill() and adds a new task to the list
//function uses TaskName and Deadline as parameters
//Using .sort to sort the list objects by date then parses then desplays the list on screen
function addTask(TaskName, Deadline)
{
    TaskList.push({task: TaskName, date: new Date(Deadline)})
    console.log("pressed");
    console.log(TaskList);

    //re-sorts the list when new task is added to make sure that when displayed the list is in order by deadline
    var sortedTasks = TaskList.slice().sort((b,a) => b.date - a.date);
 
    //This section for desplaying an array in HTML was made by Anand(stackOverflow)
    //https://stackoverflow.com/questions/31829826/print-javascript-array-in-html
    var parsed = "";
        for (i = 0; i < sortedTasks.length; i++) {
            var tasks = sortedTasks[i];
        for (var property in tasks) {
             parsed += property + ": " + tasks[property] + "\n";
        }
    }
    document.getElementById('display').innerHTML = parsed;
    console.log(parsed);
}

var sortedTasks = TaskList.slice().sort((a,b) => b.date - a.date);

console.log(sortedTasks);
