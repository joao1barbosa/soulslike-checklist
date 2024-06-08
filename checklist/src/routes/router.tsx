import { createBrowserRouter, redirect } from 'react-router-dom';
import { Root } from './Root';
import { Login } from './Login';
import { Board } from '../components/Board';

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/demonssouls',
          element: <Board game='ds'/>,
        },
        {
          path:'/',
          element: <Board game='ds1'/>,
        },
        {
          path: '/darksouls2',
          element: <Board game='ds2'/>,
        },
        {
          path: '/bloodborne',
          element: <Board game='bb'/>,
        },
        {
          path: '/darksouls3',
          element: <Board game='ds3'/>,
        },
        {
          path: '/sekiro',
          element: <Board game='sk'/>,
        },
        {
          path: '/eldenring',
          element: <Board game='er'/>,
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
  