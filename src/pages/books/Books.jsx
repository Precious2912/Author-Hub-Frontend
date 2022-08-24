import React from 'react'
import {Books} from '../../components/books'
import { Footer } from '../../components/footer'
import {Logo} from '../../components/logo'
import {Link} from 'react-router-dom'
import { Button, Stack } from '@chakra-ui/react'

export const BooksPage = () => {

  const removeLocalStorage = (key) => {
      localStorage.removeItem(key)
  }

  const handleLogout = () => {
    removeLocalStorage('author')
    removeLocalStorage('token')
    removeLocalStorage('id')
    removeLocalStorage('authenticated')
    window.location.href = '/login'

  }
  const name = localStorage.getItem('author').toUpperCase()
  const greeting = `${name}`
  return (
    <>
           <div id='nav-container'>
        <Logo name={greeting}/>
        <Stack direction='row' spacing={4} align='center'>
          <Link  to='/dashboard'>
            <Button colorScheme='orange' variant='solid'>
                Dashboard
            </Button>
          </Link>
            <Button colorScheme='orange' variant='solid' onClick={handleLogout}>
                Logout
            </Button>
        </Stack>
    </div>
    <Books />
    <Footer />
    </>
  )
}
