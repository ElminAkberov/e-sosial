import App from '@/App';
import Home from '@/pages/Home';
import ESosial from '@/pages/ESosial';
import BePartner from '@/pages/BePartner';
import TermsOfUse from '@/pages/TermsOfUse';
import { createBrowserRouter, Navigate } from 'react-router';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/e-sosial', element: <ESosial /> },
            { path: '/istifade-qaydalari', element: <TermsOfUse /> },
            { path: '/partnyor-ol', element: <BePartner /> },
            { path: '*', element: <Navigate to="/" replace /> },
        ],
    },
]);
