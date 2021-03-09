import React from 'react';


class ObjectOrientedForm extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            age: ""
        }
        this.saveInput = this.saveInput.bind(this);
    }

    saveInput(e) {
        e.preventDefault();
        this.setState({ 
            userName: document.objectOrientedForm.userName2.value,
            age: document.objectOrientedForm.age2.value
        });
    }

    render() {
        return (
            <form action="" name="objectOrientedForm">
                <h1>Форма в ООП стиле:</h1>
                <div>
                  <label htmlFor="name2">Ваше имя: </label><input type="text" id="name2" name="userName2" />
                </div>
                <div>
                  <label htmlFor="age2">Ваш возраст: </label><input type="text" id="age2" name="age2"/>
                </div>
                <div>
                  <input type="submit" value="Сохранить" onClick={this.saveInput} />
                </div>
                <div>
                    <p>{`Ваше имя: ${this.state.userName}`}</p>
                    <p>{`Ваш возраст: ${this.state.age}`}</p>
                </div>
        </form>
        );
    }
}

export default ObjectOrientedForm;