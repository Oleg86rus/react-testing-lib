import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import AboutPage from '../pages/AboutPage'
import Users from '../users/Users'
import UserDetailsPage from '../pages/UserDetailsPage'
import ErrorPage from '../pages/ErrorPage'
import HelloWorld from '../pages/HelloWorld'
import UserForTest from '../Components/users/UserForTest'

const AppRouter = () => {
	return (
		<Routes>
			<Route path={'/'} element={<MainPage/>}/>
			<Route path={'/about'} element={<AboutPage/>}/>
			<Route path={'/hello'} element={<HelloWorld/>}/>
			<Route path={'/users'} element={<Users/>}/>
			<Route path={'/users-test'} element={<UserForTest/>}/>
			<Route path={'/users/:id'} element={<UserDetailsPage/>}/>
			<Route path={'/*'} element={<ErrorPage/>}/>
		</Routes>
	)
}

export default AppRouter