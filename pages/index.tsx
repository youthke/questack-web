import type { NextPage } from 'next'
import router from 'next/router'
import React from 'react'
import { Button, Container } from 'reactstrap'

const Home: NextPage = () => {
  return (
    <Container className="justify-content-center">
      <h1>Questack</h1>
      <Button onClick={() => {router.push("/signin")}}>
        Sign In
      </Button>
      <Button onClick={() => {router.push("/signup")}}>
        Sign Up
      </Button>
    </Container>
  )
}

export default Home
