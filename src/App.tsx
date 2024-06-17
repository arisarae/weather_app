import './App.css'
import { RegisterContainer, LoginContainer, HomeContainer, MyContainer } from './containers'
import PublicLayout from './layouts/PublicLayout';
import ProtectLayout from './layouts/ProtectLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ContextProvider from './providers';

function App() {
  const router = createBrowserRouter([
    {
      element: <PublicLayout />,
      children: [
        {
          path: '/',
          element: <HomeContainer />
        },
        {
          path: '/register',
          element: <RegisterContainer />
        },
        {
          path: '/login',
          element: <LoginContainer />
        },
      ]
    },
    {
      path: '*',
      element: <h1>404</h1>
    },
    {
      element: <ProtectLayout />,
      children: [
        {
          path: '/myClocks',
          element: <MyContainer />
        },
      ]
    }
  ])

  return (
    <div className="app">
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </div>
  )
}

export default App
