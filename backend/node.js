const fs=require('fs')

const filepath ="./task.json"

const loadTask=()=>{
    try{
        const dataBuffer =fs.readFileSync(filepath);
        const dataJSON =dataBuffer.toString();
         return JSON.parse(dataJSON);
    }catch(error){
        return[];
    }
    

}
const saveTaks=(tasks)=>{
    const dataJSON= JSON.stringify(tasks)
    fs.writeFileSync(filepath,dataJSON);

}

const addTask=(task)=>{
    const tasks =loadTask()
    tasks.push({task});
    saveTaks(tasks);
    console.log("Tasks Added",task);
    

}
// how to  grab the things 
const command=process.argv[2]
const argument=process.argv[3]

if(command==="add"){
   addTask(argument);
}else if(command==="list"){
    listTasks();
}else if(command==="remove"){
    removeTasks(parseInt(argument));
}else {
    console.log("command not found ");
    
}
 
