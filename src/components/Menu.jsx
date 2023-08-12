import React from 'react'
import { Data } from '../Helpers/Data' 
import '../styles/Menu.css'

function Menu() {
  return (
    <div id="main-menu">
      <div className="menu-container">
      <h1>Burgerlerimiz</h1>
        <div className="menu-body">
          {Data.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.image} alt="Efso Burger" />
              <h3>{item.name}</h3>
              <p>{item.content}</p>
              <span>{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Menu