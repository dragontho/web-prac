import classes from './Input.module.css';


// spread all the props from the parent component into the input
// eg when you use type = 'number' you can add the other params eg max, min
function Input(props) {
    return <div className = {classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input}></input>

    </div>

};

export default Input;