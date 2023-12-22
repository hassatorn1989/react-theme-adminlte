import { Suspense, lazy, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './page/LoginPage';
import PrivateRoute from './middleware/PrivateRoute';
// import DashboardPage from './page/DashboardPage';
// import UserPage from './page/UserPage';
import PublicRoute from './middleware/PublicRoute';

// const LoginPage = lazy(() => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(import('./page/LoginPage')), 500)
//   })
// })
const DashboardPage = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./page/DashboardPage')), 1000)
  })
});

const UserPage = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./page/UserPage')), 1000)
  })
});

function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<LoginPage />} /> */}
          <Route exact path='/' element={<PublicRoute />}>
            <Route path="/" element={
              <Suspense fallback={<div style={
                {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100vh'
                }
              }>Loading...</div>}>
              <LoginPage />
              </Suspense>
            } />
          </Route>
          <Route exact path='/' element={<PrivateRoute />}>
            <Route path="/dashboard" element={
              <Suspense fallback={<div style={
                {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100vh'
                }
              }>Loading...</div>}> <DashboardPage /> </Suspense>
            } />
            <Route path="/user" element={
              <Suspense fallback={<div style={
                {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100vh'
                }
              }>Loading...</div>}> <UserPage /> </Suspense>
            } />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </>
  )
}

function NoMatch() {
  return (
    <>
      <h1>404</h1>
    </>
  )
}

export default App
