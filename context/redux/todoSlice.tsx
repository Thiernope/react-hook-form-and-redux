import {createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {
      todos: [
        {
            id: Math.random(),
            title: 'Work on coding',
            status: false,
          }
      ]
    },
    reducers: {
      createTodo: (state, action) => {
        state.todos = [...state.todos, action.payload]
      },
      deleteTodo: (state, action) => {
       state.todos = state.todos.filter(x => x.id !== action.payload.id)
      },

      updateTodo: (state, action) => {
       const todoToUpdate = state.todos.find(x => x.id === action.payload.id);
       if(todoToUpdate) {
        todoToUpdate.status = !todoToUpdate.status
       }
      }

    }
})


export default todoSlice.reducer;
export const { createTodo, deleteTodo, updateTodo} = todoSlice.actions;