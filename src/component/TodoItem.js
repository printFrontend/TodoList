import React from "react";
import {MdCheckBox, MdCheckBoxOutlineBlank} from 'react-icons/md'

const TodoItem = ({todo}) => {
  const {id, text, checked} = todo;
  return(
    <div className="TodoItem">
      <div className={`content ${checked ? 'checked' : ''}`}></div>
      {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
      <div>{text}</div>
    </div>
  );
};

export default TodoItem;