import React from 'react';
import { Register } from '../../components/register'
import { Footer } from '../../components/footer'
import {Logo} from '../../components/logo'
import {Link} from 'react-router-dom'
import {Button} from "@chakra-ui/react"


export const RegisterPage = () => {
  const logo = 'OVAT'
  return (
    <>
        <div id='nav-container'>
        <Logo name={logo}/>
        <Link  to='/'>
            <Button colorScheme='orange' variant='solid'>
                Home
            </Button>
          </Link>
        </div>
        <Register />
        <Footer />
    </>
  )
}
