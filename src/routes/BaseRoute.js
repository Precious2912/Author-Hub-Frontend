import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute' 
import { Home } from '../pages/home';
import {Error} from '../pages/error'
import { RegisterPage } from '../pages/register';
import {LoginPage} from '../pages/login'
import { BooksPage } from '../pages/books'
import { DashboardPage } from '../pages/dashboard';

const BaseRoute = () => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<RegisterPage />}></Route>
            <Route path='/login' element={<LoginPage />}></Route>
            {/* Protected Routes */}
            <Route   path='/dashboard' element={
            <ProtectedRoute>
               <DashboardPage/>
            </ProtectedRoute>
            
            
            }/>
            <Route   path='/dashboard/:id' element={
             <ProtectedRoute>
             <DashboardPage/>
          </ProtectedRoute>
             }
            
            />
            <Route   path='/books' element={
            <ProtectedRoute>
                <BooksPage/>
            </ProtectedRoute>
         
        
             }
            />
            {/* <Route element={<ProtectedRoute />}>
                <Route path='/dashboard' element={<DashboardPage />}></Route>
                <Route path='/dashboard/:id' element={<DashboardPage />}></Route>
                <Route path='/books' element={<BooksPage />}></Route>
            </Route> */}

            {/* Error Route */}
            <Route path='*' element={<Error />}></Route>
           
        </Routes>
    );
};

export default BaseRoute