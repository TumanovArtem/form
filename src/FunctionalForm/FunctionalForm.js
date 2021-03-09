import React, { useState } from 'react';
import './FunctionalForm.css';

function FunctionalForm(props) {
  const [userName, setUserName] = useState(props.userName);
  const [age, setAge] = useState(props.age);
  
  function saveInput(e) {
    if (e.target.name === "userName") {
      setUserName(e.target.value);
    } else {
      setAge(e.target.value);
    }
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    alert(`Отправлено на сервер. Имя: ${userName}. Возраст: ${age}.`);
  }

  return (
    <form action="" onSubmit={handleSubmit}>
        <h1>Форма в функциональном стиле:</h1>
        <div>
          <label htmlFor="name">
            Ваше имя:
            <input type="text" id="name" name="userName" value={userName} onChange={saveInput} />
          </label>
        </div>
        <div>
          <label htmlFor="age">
            Ваш возраст: 
            <input type="text" id="age" name="age" value={age} onChange={saveInput} />
          </label>
        </div>
        <div>
          <input type="submit" value="Сохранить" />
        </div>
        <div>
            <p>{`Ваше имя: ${userName}`}</p>
            <p>{`Ваш возраст: ${age}`}</p>
        </div>
    </form>
  );
}

export default FunctionalForm;