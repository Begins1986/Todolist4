import React, {ChangeEvent,KeyboardEvent, useState} from 'react';
import {FilterType} from "./App";
import {Button} from "./components/Button";

export type PropsType = {
    title: string
    tasks: Array<TasksProps>
    removeTask: (id: string)=>void
    // changeFilter: (value:FilterType)=>void
    addTask: (title:string)=>void
    changeStatus: (id: string, checked:boolean)=>void
}

type TasksProps = {
    id: string
    title: string
    isDone: boolean
}

export const Todolist = (props: PropsType) => {
    let [title, setTitle]= useState<string>('')
    const onChangeInputHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.currentTarget.value)
    }
    const onClickAddTaskHandler = () => {
        props.addTask(title)
        setTitle('')
    }
    const onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>)=> {
        if (e.key==='Enter'){
            onClickAddTaskHandler()
        }
    }
    const onClickChangeFilterHandler=(value:FilterType)=>{
        changeFilter(value)
    }
    const onClickRemoveTaskHandler = (tId:string) => {
        props.removeTask(tId)
    }

    let [filter, setFilter] = useState<FilterType>('All')
    let filterTasks = props.tasks
    if (filter==='Active'){
        filterTasks = props.tasks.filter(t=>!t.isDone)
    }
    if (filter==='Completed'){
        filterTasks = props.tasks.filter(t=>t.isDone)
    }
    const changeFilter = (value: FilterType) => {
        setFilter(value)
    }
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    value={title}
                    onChange={onChangeInputHandler}
                    onKeyPress={onKeyPressHandler}
                />
                {/*<button onClick={onClickAddTaskHandler}>+</button>*/}
                <Button name={'+'} callback={onClickAddTaskHandler}/>
            </div>
            <ul>
                {
                    filterTasks.map((t, index) => {
                        const changeStatusHandler = (event:ChangeEvent<HTMLInputElement>) => {
                            props.changeStatus(t.id, event.currentTarget.checked)

                        }
                        return (
                            <li key={t.id}>
                                <Button name={'-'} callback={() => onClickRemoveTaskHandler(t.id)}/>
                                {/*<button onClick={() => onClickRemoveTaskHandler(t.id)}>-</button>*/}
                                {/*<button onClick={() => props.removeTask(t.id)}>-</button>*/}
                                <input type="checkbox" checked={t.isDone} onChange={changeStatusHandler}/>
                                <span>{t.title}</span>
                            </li>)
                    })
                }
            </ul>
            <div>
                {/*<button onClick={()=>onClickChangeFilterHandler('All')}>All</button>*/}
                {/*<button onClick={()=>onClickChangeFilterHandler('Active')}>Active</button>*/}
                {/*<button onClick={()=>onClickChangeFilterHandler('Completed')}>Completed</button>*/}
                <Button name={'All'} callback={()=>onClickChangeFilterHandler('All')}/>
                <Button name={'Active'} callback={()=>onClickChangeFilterHandler('Active')}/>
                <Button name={'Completed'} callback={()=>onClickChangeFilterHandler('Completed')}/>
            </div>
        </div>
    );
};
