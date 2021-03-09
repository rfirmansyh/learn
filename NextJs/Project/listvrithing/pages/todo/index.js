import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    Row,
    Col,
    ListGroup,
    ListGroupItem,
    Form,
    Button
} from 'react-bootstrap';

import { addTodo, removeTodo } from '../../app/features/Todo/actions';

const Todo = () => {
    const dispatch = useDispatch();
    let todos = useSelector(state => state.todos)

    const titleRef = useRef(null);

    const generateId = () => {
        if (todos.length === 0) {
            return 1;
        } else {
            return todos[todos.length - 1].id + 1;
        }
    }
    const handleAddTodo = () => {
        let todo = {
            id: generateId(),
            desc: titleRef.current.value
        };

        dispatch(addTodo(todo));
    }

    useEffect(() => {
        console.log(todos)
    }, [todos])

    return (  
        <div>
            <h1>Todos Page with Reducers</h1>

            <Row>
                <Col>
                    <ListGroup>
                        {todos.length > 0 ? 
                           todos.map( (v,i) => (
                                <ListGroupItem key={i} className="d-flex justify-content-between align-items-center">
                                    {v.desc} <span onClick={_=> dispatch(removeTodo(v.id))}>&times;</span>
                                </ListGroupItem>
                           )) : "No Todo" }
                    </ListGroup>
                </Col>

                <Col xs="auto">
                    <Form.Control ref={titleRef} type="text" /> <br/>
                    <Button onClick={handleAddTodo}>
                        Add Todo
                    </Button>
                </Col>
            </Row>
        </div>
    );
}
 
export default Todo;