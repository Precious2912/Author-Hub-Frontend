import React from 'react'
import {Link} from 'react-router-dom'
import { Login } from '../../components/login'
import { Footer } from '../../components/footer'
import { Logo } from '../../components/logo'
import { Button, Stack } from '@chakra-ui/react'


export const LoginPage = () => {
  const logo = 'OVAT'
  return (
    <>
        <div id='nav-container'>
        <Logo name={logo}/>
        <Stack direction='row' spacing={4} align='center'>
        <Link  to='/'>
            <Button colorScheme='orange' variant='solid'>
                Home
            </Button>
          </Link>
          <Link  to='/register'>
            <Button colorScheme='orange' variant='solid'>
                Register
            </Button>
          </Link>
        </Stack>
    </div>
    <Login />
    <Footer />
    </>
  )
}
