import { createBrowserRouter, redirect } from 'react-router-dom';

// import { supaClient } from '../services/supabase';
import { Root } from './Root';
import { Login } from './Login';
import { Board } from '../components/Board';

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path:'/',
          element: <Board game='ds1'/>,
        },
        {
          path: '/darksouls',
          element: <Board game='ds1'/>,
        },
      ],
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
  