import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

function Home() {
  return (
    <>
      <main>
        <Link to="/menu">
          <button>Sipariş Ver</button>
        </Link>
      </main>
    </>
  )
}

export default Home