import React, { useState } from 'react';
import './FunctionalForm.css';

function FunctionalForm() {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  
  function saveInput(e) {
    e.preventDefault();
    setUserName(document.functionalForm.userName.value);
    setAge(document.functionalForm.age.value);
  }
  
  return (
    <form action="" name="functionalForm">
        <h1>Форма в функциональном стиле:</h1>
        <div>
          <label htmlFor="name">Ваше имя: </label><input type="text" id="name" name="userName" />
        </div>
        <div>
          <label htmlFor="age">Ваш возраст: </label><input type="text" id="age" name="age"/>
        </div>
        <div>
          <input type="submit" value="Сохранить" onClick={saveInput} />
        </div>
        <div>
            <p>{`Ваше имя: ${userName}`}</p>
            <p>{`Ваш возраст: ${age}`}</p>
        </div>
    </form>
  );
}

export default FunctionalForm;