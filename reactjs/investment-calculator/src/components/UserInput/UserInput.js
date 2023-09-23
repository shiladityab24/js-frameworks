import { useState } from "react";
import classes from "./UserInput.module.css";
const initialUserInput = {
    'current-savings': 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    'duration': 10
}


const UserInput = (props) => {
    const [userInput, setUserInput] = useState(initialUserInput);


    const submitHandler = (event) => {
        event.preventDefault();
        // ...do something
        props.onCalculate(userInput);
    };

    const resetHandler = () => {
        setUserInput(initialUserInput);
    };

    const inputChangeHandler = (input,value) => {
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                [input]: +value,
            };
        });
    };

    return (
                <form onSubmit={submitHandler} className={classes.form}>
                <div className={classes['input-group']}>
                  <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input onChange={(event,value) => inputChangeHandler('current-savings', event.target.value)} type="number" value={userInput['current-savings']} id="current-savings" />
                  </p>
                  <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input onChange={(event,value) => inputChangeHandler('yearly-contribution', event.target.value)} type="number" value={userInput['yearly-contribution']} id="yearly-contribution" />
                  </p>
                </div>
                <div className={classes['input-group']}>
                  <p>
                    <label htmlFor="expected-return">
                      Expected Interest (%, per year)
                    </label>
                    <input onChange={(event,value) => inputChangeHandler('expected-return', event.target.value)} type="number" value={userInput['expected-return']} id="expected-return" />
                  </p>
                  <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input onChange={(event,value) => inputChangeHandler('duration', event.target.value)} type="number" value={userInput['duration']} id="duration" />
                  </p>
                </div>
                <p className={classes.actions}>
                  <button  onClick={resetHandler} type="reset" className={classes.buttonAlt}>
                    Reset
                  </button>
                  <button type="submit" className={classes.button}>
                    Calculate
                  </button>
                </p>
              </form>
            );
};

export default UserInput;