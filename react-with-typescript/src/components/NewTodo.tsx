import React,{useRef} from 'react'

type NewTodoProps ={
    onAddTodo : (todoText: string)=> void;
}


const NewTodo: React.FC<NewTodoProps> = (props)=>{
    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent)=>{
        event.preventDefault();
        const enteredText = textInputRef.current!.value; // typescript에게 괜찮다고 알려줌! 정확히는 명시적으로 값이 들어갈거라고 알려줌 
        props.onAddTodo(enteredText);
        textInputRef.current!.value = '';
    };

    return(<form onSubmit={todoSubmitHandler}>
        <div>
            <label htmlFor='todo-text'>Todo Text</label>
            <input type='text' id='todo-text' ref={textInputRef}/>
        </div>
        <button type='submit'>ADD TODO</button>
    </form>)
}

export default NewTodo;