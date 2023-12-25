import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./TodoItem";

export default function MyTodoList() {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [todos, setTodos] = useState([
    { id: uuidv4(), title: "코드카타", detail: "문제: 수박수박수박수박수" },
    { id: uuidv4(), title: "React 공부", detail: "반복되는 컴포넌트 처리하기" },
    { id: uuidv4(), title: "Tailwind CSS 공부", detail: "Borders" },
    { id: uuidv4(), title: "React 스터디", detail: "리액트를 다루는 기술" },
  ]);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDetail = (e) => {
    setDetail(e.target.value);
  };

  const handleAddBtnClick = () => {
    const newTodo = {
      id: uuidv4(),
      title,
      detail,
    };

    if (title.trim().length === 0) {
      return;
    }

    setTodos([...todos, newTodo]);
    setTitle("");
    setDetail("");
  };

  const handleDeleteBtnClick = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleCompleteBtnClick = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );

    setTodos(updatedTodos);
  };

  const handleUndoBtnClick = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: false } : todo
    );

    setTodos(updatedTodos);
  };

  return (
    <>
      <header className="flex justify-between w-full p-4 mb-4 text-2xl border-b border-zinc-600">
        <p>My Todo List</p>
        <p>React</p>
      </header>
      <section>
        <div className="flex justify-between p-8 px-10 space-x-8 font-bold text-black bg-blue-200 rounded-md">
          <p class="flex items-center">
            <span class="mr-4">제목</span>
            <input
              type="text"
              class="text-black font-normal p-2 rounded-xl mr-8"
              value={title}
              onChange={handleChangeTitle}
            />
            <span class="mr-4">내용</span>
            <input
              type="text"
              class="text-black font-normal p-2 rounded-xl"
              value={detail}
              onChange={handleChangeDetail}
            />
          </p>
          <button
            onClick={handleAddBtnClick}
            className="px-12 py-3 ml-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
          >
            추가하기
          </button>
        </div>
        <div className="mt-12">
          <p className="text-2xl font-bold">Working.. 🔥</p>
          <div className="flex flex-wrap justify-around mt-4">
            {todos
              .filter((item) => !item.completed)
              .map((item) => (
                <TodoItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  detail={item.detail}
                  completed={item.completed}
                  onDeleteBtnClick={handleDeleteBtnClick}
                  onCompleteBtnClick={handleCompleteBtnClick}
                />
              ))}
          </div>
        </div>
        <div className="mt-12">
          <p className="text-2xl font-bold">Done..! 🎉</p>
          <div className="flex flex-wrap justify-around mt-4">
            {todos
              .filter((item) => item.completed)
              .map((item) => (
                <TodoItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  detail={item.detail}
                  completed={item.completed}
                  onDeleteBtnClick={handleDeleteBtnClick}
                  onUndoBtnClick={handleUndoBtnClick}
                />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
