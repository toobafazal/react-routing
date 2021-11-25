import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Todo from '../Components/Todo';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Todo />
        </div>
    )
}

export default Home
