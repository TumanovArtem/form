import React from 'react';


class ObjectOrientedForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: props.userName,
            age: props.age
        }
        this.saveInput = this.saveInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    saveInput(e) {
        const name = e.target.name === "userName2" ? "userName" : "age";
        this.setState({ 
            [name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this);
        alert(`Отправлено на сервер. Имя: ${this.state.userName}. Возраст: ${this.state.age}.`);
    }

    render() {
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <h1>Форма в ООП стиле:</h1>
                <div>
                    <label htmlFor="userName2">
                        Ваше имя: 
                        <input type="text" id="name2" name="userName2" value={this.state.userName} onChange={this.saveInput}/>
                    </label>
                </div>
                <div>
                    <label htmlFor="age2">
                        Ваш возраст:
                        <input type="text" id="age2" name="age2" value={this.state.age} onChange={this.saveInput}/>
                    </label>
                </div>
                <div>
                  <input type="submit" value="Сохранить" />
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