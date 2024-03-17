import ReactDOM from 'react-dom/client';
import App from './app/layout/App.tsx';
import './app/layout/styles.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Router, RouterProvider } from 'react-router-dom';
import { router } from './routing/router.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
