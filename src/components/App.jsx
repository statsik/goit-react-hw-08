import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import ContactForm from './contactform/ContactForm'
import ContactList from './contactlist/ContactList'
import SearchBox from './searchbox/SearchBox'
import { Suspense, useEffect } from 'react'
import { refreshUser } from '../redux/auth/operations'
//import fetchContacts from '../redux/contacts/operations'
import HomePage from '../pages/homepage/HomePage'
import LoginPage from '../pages/loginpage/LoginPage'
import RestrictedRoute from './RestrictedRoute'
import PrivateRoute from './PrivateRoute'
import RegistrationPage from '../pages/registrationpage/RegistrationPage'
import ContactsPage from '../pages/contactspage/ContactsPage'
import { selectIsRefreshing } from '../redux/auth/selectors'
import { Routes, Route } from 'react-router-dom';
import AppBar from './appbar/AppBar'


function App() { 
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <strong>Refreshing user...</strong>
  ) : (
    <>
        <div>
          <AppBar/>
          <Suspense>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                  redirectTo="/contacts" component={<RegistrationPage />}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
                }
              />
          </Routes>
        </Suspense>
      </div>
    </> 
  )
}

export default App
