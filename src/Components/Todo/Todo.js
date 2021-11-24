import React, { useState } from 'react'
import { Modal, Button, Table, InputGroup, FormControl, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { add_Todo, delete_Todo, update_Todo } from '../../Redux/Action/action';
import './Todo.css'

function Todo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [updateId, setUpdateId] = useState("");
    const [show, setShow] = useState(false)
    const [crudButton, setCrudButton] = useState("")

    const TodoData = useSelector((state) => state.Todos)
    const dispatch = useDispatch();

    const handleClose = () => {
        setShow(false)
    }

    const addTodos = () => {
        const getData = localStorage.getItem('token');
        if (getData) {
            setShow(true)
        } else {
            alert('Please Login First')
        }
        setCrudButton('add')
        setTitle("")
        setDescription("")
    }

    const submitHandler = () => {
        setShow(false)
        if (crudButton === 'add') {
            dispatch(add_Todo({ id: Date.now(), title, description }))
        } else {
            dispatch(update_Todo(updateId, { title, description }))
        }
    }

    const updateTodoHandler = (id, item) => {
        const getData = localStorage.getItem('token');
        if (getData) {
            setShow(true)
            setUpdateId(id)
            setShow(true)
            setTitle(item.title)
            setDescription(item.description)
            setCrudButton('update')
        } else {
            alert('Please Login First')
        }
    }

    const deleteTodoHandler = (id) => {
        const getData = localStorage.getItem('token');
        if (getData) {
            dispatch(delete_Todo({ id }))
        } else {
            alert('Please Login First')
        }
    }

    return (
        <>
            <div className="addButton">
                <Button className="addButton_inner" onClick={addTodos}>Add</Button>
            </div>

            <Table>
                <thead>
                    <tr>
                        <th style={{ textAlign: 'center' }}>No</th>
                        <th style={{ textAlign: 'center' }}>Title</th>
                        <th style={{ textAlign: 'center' }}>Description</th>
                        <th style={{ textAlign: 'center' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {TodoData && TodoData.map((item, i) => (
                        <tr key={i}>
                            <td style={{ paddingTop: '15px', textAlign: 'center' }}>{i + 1}</td>
                            <td style={{ paddingTop: '15px', textAlign: 'center' }}>{item.title}</td>
                            <td style={{ paddingTop: '15px', textAlign: 'center' }}>{item && item.description && item.description.length >= 15 ? item.description.toString().substring(0, 15) + '...' : item.description}</td>
                            <td style={{ textAlign: 'center' }}>
                                <div className="actionButton">
                                    <Button onClick={() => deleteTodoHandler(item.id)} variant="danger">Delete</Button>
                                    <Button onClick={() => updateTodoHandler(item.id, item)} variant="primary">Update</Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>


            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Form onSubmit={submitHandler}>
                    <Modal.Body>
                        <InputGroup className="mb-3">
                            <FormControl
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Title"
                                aria-label="Title"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <FormControl
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Description"
                                aria-label="Description"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button variant="primary" onClick={submitHandler}>
                                {crudButton === 'add' ? 'Add' : 'Update'}
                            </Button>
                        </Modal.Footer>
                    </Modal.Body>
                </Form>
            </Modal>
        </>
    )
}

export default Todo
