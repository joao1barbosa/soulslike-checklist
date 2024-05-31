import { createBrowserRouter, redirect } from 'react-router-dom';

// import { supaClient } from '../services/supabase';
import { Home } from './Home';
import { Login } from './Login';

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/signout',
      action: () => {
        return redirect('/');
      },
    },
  ]);
  