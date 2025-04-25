import React, { useState } from 'react';
import { useTodo } from '../Context/Todocontext';

function Todoitems({ todo }) {
  const [isEdit, SetisEdit] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  // Make sure to call useTodo() correctly
  const { updatedTodo, deletetodo, todotoggle } = useTodo();

  const editTodo = () => {
    updatedTodo(todo.id, { ...todo, todo: todoMsg });
    SetisEdit(false); // Fixed 'falsed' to 'false'
  };

  const toggleCompleted = () => {
    todotoggle(todo.id);
  };

  return (
    <div
      className={`bg-white rounded-2xl p-4 shadow-lg border transition-all duration-300 ${
        todo.completed ? 'bg-green-100 border-green-300' : 'bg-purple-100 border-purple-300'
      }`}
    >
      <div className="flex items-center gap-4">
        {/* Checkbox */}
        <input
          type="checkbox"
          className="w-5 h-5 accent-purple-500 cursor-pointer"
          checked={todo.completed}
          onChange={toggleCompleted}
        />

        {/* Todo Text Input */}
        <input
          type="text"
          className={`flex-1 bg-transparent text-lg font-medium outline-none rounded-md transition-all duration-200 ${
            isEdit ? 'border border-purple-300 px-2 py-1 bg-white' : 'border-none'
          } ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isEdit}
        />

        {/* Edit / Save Button */}
        <button
          className="w-9 h-9 flex items-center justify-center rounded-full bg-purple-200 hover:bg-purple-300 text-purple-700 transition disabled:opacity-50"
          onClick={() => {
            if (todo.completed) return; // Prevent editing if completed
            if (isEdit) {
              editTodo();
            } else {
              SetisEdit(true); // Toggle edit mode
            }
          }}
          disabled={todo.completed}
          title={isEdit ? 'Save' : 'Edit'}
        >
          {isEdit ? '💾' : '✏️'}
        </button>

        {/* Delete Button */}
        <button
          className="w-9 h-9 flex items-center justify-center rounded-full bg-red-200 hover:bg-red-300 text-red-700 transition"
          onClick={() => deletetodo(todo.id)} // Fixed to use correct function name
          title="Delete"
        >
          ❌
        </button>
      </div>
    </div>
  );
}

export default Todoitems;

