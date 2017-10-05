import React, { Component } from 'react'

import pizzaData from '../pizzaData.js'
import MenuItem from './MenuItem.jsx'
class MenuList extends Component {
    render () {
        return (
            <div>
                <h1>Menu</h1>
        {
            pizzaData.map((pizza, index) => {
                return <MenuItem
                name={pizza.name}
                price={pizza.price}
                description={pizza.description}
                image={pizza.image} />
            })
        }

        </div>
        )

    }

}



export default MenuList;