import {
    useState,
    useEffect,
    useRef,
    useCallback    
} from 'react';

const Counter = () => {

    const [todos, setTodos] = useState([]);
    const titleRef = useRef(null);
    const descRef = useRef(null);

    const generateId = () => {
        if (todos.length === 0) {
            return 1;
        } else {
            return todos[todos.length - 1].id + 1;
        }
    }

    const handleAddTodo = useCallback(e => {
        let todo = {
            id: generateId(),
            title: titleRef.current.value,
            desc: descRef.current.value
        }

        setTodos([...todos, todo]);
    }, [todos])

    const handleRemoveTodo = useCallback((id) => {
        let newTodos = todos.filter((v) => {
            return v.id !== id;
        })

        setTodos(newTodos)
    }, [todos])

    useEffect(() => {
        console.log(todos);
    }, [todos])

    return (  
        <div>
            <h1 className="mb-5">My Todo List</h1>
            
            <div className="d-flex">
                <ul className="flex-grow-1">
                    {todos.length > 0 ?todos.map((v, i) => (
                        <li key={i}>
                            <h5>
                                <strong>{v.title}</strong> <span onClick={() => handleRemoveTodo(v.id)}>&times;</span>
                            </h5>
                            <p>{v.desc}</p>
                        </li>)) : ""}
                </ul>

                <div>
                    <input type="text" ref={titleRef} placeholder="Title Todo"/> <br/>
                    <input type="text" ref={descRef} placeholder="Description Todo"/> <br/><br/>
                    <button onClick={handleAddTodo}>
                        Add Todo
                    </button>
                </div>
            </div>

            
        </div>
    );
}
 
export default Counter;