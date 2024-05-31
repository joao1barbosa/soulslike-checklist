import { createBrowserRouter, redirect } from 'react-router-dom';

import { supaClient } from '../services/supabase';
import { Home } from './Home';

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/logout',
      action: () => {
        return redirect('/');
      },
    },
  ]);
  