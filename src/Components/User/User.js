import React, { useEffect, useState } from 'react'
import { Form, FormControl, InputGroup, Button, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux';

import randomColor from '../../utils/randomColor';
import './User.css'

const User = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [displayUsername, setDisplayUsername] = useState("");

    const userData = useSelector((state) => state.Users)
    // const dispatch = useDispatch()

    const loginHandler = (e) => {
        e.preventDefault();
        const loginData = userData.find((result) => result.username === username)
        if (!username && !password) {
            alert("Please enter value")
        } else if (!loginData) {
            alert("Invalid login credentials")
        } else {
            const token = username.concat(Date.now())
            localStorage.setItem('token', token)
            localStorage.setItem("userDetails", username)
            alert("Login successfully")
            getUsername();
        }
    }

    function getUsername() {
        const getData = localStorage.getItem('userDetails');
        setDisplayUsername(getData);
    }

    useEffect(() => {
        getUsername();
    }, [])

    const logoutHandler = () => {
        setDisplayUsername("");
        localStorage.clear();
    }

    return (
        <>
            <div className="userProfile">
                <div className="loginForm">
                    <Row>
                        <Col lg={4}>
                            <Form onSubmit={(e) => loginHandler(e)}>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        onChange={(e) => setUsername(e.target.value)}
                                        placeholder="Username"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <FormControl
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password"
                                        aria-label="Password"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>

                                <Button type="submit">Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </div>
                <div className={displayUsername ? "displayNameDiv" : null}>
                    <h2 style={{ backgroundColor: `#${randomColor[displayUsername && displayUsername.charAt(0).toUpperCase()]}` }}>{displayUsername && displayUsername.charAt(0)}</h2>
                </div>
                <div className="logout">
                    <Button onClick={logoutHandler}>Logout</Button>
                </div>
            </div>
        </>
    )
}

export default User
