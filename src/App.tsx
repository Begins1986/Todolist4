import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";

export type FilterType = ('All'| 'Active'| 'Completed')

function App() {
    let [tasks, setTasks]=useState([
        {id:v1(),title:'HTML&CSS',isDone:true},
        {id:v1(),title:'JS',isDone:false},
        {id:v1(),title:'React',isDone:true},
        {id:v1(),title:'Redux',isDone:true},
        {id:v1(),title:'Angular',isDone:false},
        {id:v1(),title:'Vue',isDone:true},
    ])




    const removeTask = (id:string) => {
        setTasks(tasks.filter(t=>t.id!==id))
    }
    // const changeFilter = (value: FilterType) => {
    //     setFilter(value)
    // }
    const addTask = (title: string)=>{
        setTasks([{id: v1(), title, isDone: false},...tasks])
    }

    const changeStatus = (tID:string, checked:boolean) =>{
        setTasks(tasks.map(l=>l.id===tID?{...l,isDone: checked}:l))
    }

    // let [filter, setFilter] = useState<FilterType>('All')
    // let filterTasks = tasks
    // if (filter==='Active'){
    //     filterTasks = tasks.filter(t=>!t.isDone)
    // }
    // if (filter==='Completed'){
    //     filterTasks = tasks.filter(t=>t.isDone)
    // }

    return (
        <div className="App">
           <Todolist title={'What to learn'}
                     tasks={tasks}
                     removeTask={removeTask}
                     // changeFilter={changeFilter}
                     addTask={addTask}
                     changeStatus={changeStatus}
           />
        </div>
    );
}

export default App;
