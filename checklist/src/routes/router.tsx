import { createBrowserRouter, redirect } from 'react-router-dom';

// import { supaClient } from '../services/supabase';
import { Root } from './Root';
import { Login } from './Login';

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
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
  