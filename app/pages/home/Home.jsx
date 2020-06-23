import React from 'react'

import Container from '../../components/container/Container'

import './Home.css'

const Home = () => (
  <Container className="home">
    <div className="description">
      <h1 className="title">Remember Writing</h1>
      <p className="description-detail">
        Are you sick of short tweets and impersonal "shared" posts that are
        reminiscent of the late 90's email forwards? We believe getting back to
        actually writing is the key to enjoying the internet again.
      </p>
    </div>

    <form action="" className="login">
      <div className="form-group">
        <label htmlFor="name">Username</label>
        <input type="text" placeholder="Username" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" />
      </div>
      <button className="btn-login" type="submit">
        Login
      </button>
      <div className="need-sign-up">
        <p>
          Or <span className="register-link">Register</span> now
        </p>
      </div>
      {/* <div className="form-group">
        <label htmlFor="name">Username</label>
        <input type="text" placeholder="Username" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="you@example.com" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Create a password" />
      </div>

      <button type="submit">Sign Up</button> */}
    </form>
  </Container>
)

export default Home
