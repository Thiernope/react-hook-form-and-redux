import './App.css'
import FormOne from './component/FormOne'
import FormTwo from './component/FormTwo'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../context/redux/counterSlice';
import { createTodo, deleteTodo, updateTodo } from '../context/redux/todoSlice';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { useCounterContext } from "../context/contextApi/Counter";

type todoData = {
  id: string,
  title: string,
  status: boolean,
 }

import type { RootState } from '../context/redux/store';
function App() {
 const number = useSelector((state: RootState) => state.counterSlice.count);
 const dispatch = useDispatch();
 const n = 5;
 const todos = useSelector((state: RootState) => state.todoSlice.todos)
 const {control, register, handleSubmit, formState: {errors}} = useForm<todoData>();
const { countX, incrementX, decrementX } = useCounterContext();
 const submitTodo = (data: todoData) => {
   const formData = {...data, id: Math.random(), status: false}
   dispatch(createTodo(formData));
 }

  return (
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <div>
        <h1>ContextAPI Counter</h1>
        <p>{countX}</p>
        <button onClick={incrementX}>+</button>
        <button onClick={decrementX}>-</button>
      </div>
      <div>
      <p>COUNT: {number}</p>
      <button onClick={() => dispatch(increment(1))}>Increment</button>
      <button onClick={() => dispatch(decrement(1))}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(n))}>Add {n}</button>

      {
        todos.map((todo) => (
          <div key={todo.id} style={{backgroundColor: 'lightblue'}}>
            <p>{todo.id}</p>
            <p>{todo.title}</p>
            <p>{todo.status? 'Done': 'Not Yet'}</p>
            <button onClick = {() => dispatch(deleteTodo({id: todo.id}))}>Delete</button>
            <button onClick={() => dispatch(updateTodo({id: todo.id}))}>Toggle</button>
          </div>
        ))
      }

      <form onSubmit={handleSubmit(submitTodo)}>
       <label htmlFor='title'>To do name</label>
       <input type='text' id='title' {...register('title', {required: 'Todo title is required'})}/>
       <p style={{color: 'red', fontSize: '10px'}}>{errors.title?.message}</p>
       <button type='submit'>AddTodo</button>
      </form>

      <DevTool control={control}/>

      </div>
      <div style={{backgroundColor: 'white', width: '400px'}}>
      <FormOne/>
      </div>
      <div style={{width: '500px'}}>
      <FormTwo/>
      </div>
    </div>
  )
}   

export default App
