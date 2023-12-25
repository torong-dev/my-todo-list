import React from "react";

const TodoItem = ({ id, title, detail, onDeleteButtonClick }) => {
  return (
    <div className="h-48 p-8 mt-4 mb-4 border-4 border-blue-200 rounded-xl w-96">
      <p className="text-2xl font-semibold">{title}</p>
      <p className="mt-2 text-base">{detail}</p>
      <div className="flex mt-4">
        <button
          onClick={() => onDeleteButtonClick(id)}
          className="w-40 h-12 mr-4 font-semibold border-2 border-red-300 hover:bg-red-700 rounded-xl"
        >
          삭제하기
        </button>
        <button className="w-40 h-12 font-semibold border-2 border-green-300 hover:bg-green-700 rounded-xl">
          완료
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
