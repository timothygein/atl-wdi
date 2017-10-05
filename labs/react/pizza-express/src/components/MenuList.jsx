import React, { Component } from 'react'

import pizzaData from '../pizzaData.js'
import MenuItem from './MenuItem.jsx'
class MenuList extends Component {
    render () {
        const menuItem = pizzaData.map((pizza, index) => {
     return <MenuItem
                key={index}
                image={pizza.image}
                name={pizza.name}
                price={pizza.price}
                description={pizza.description}
                />
            })
    
    return (
        <div className="menu" id="menu">
        <h1>Menu</h1>
        <div className="menu-container">
            {menuItem}
        </div>

    </div>    
    )}}



export default MenuList;