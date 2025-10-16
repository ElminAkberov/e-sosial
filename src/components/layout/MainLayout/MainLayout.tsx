import React from 'react';
import styles from './MainLayout.module.scss';

import { Outlet, useLocation } from 'react-router';

import Navbar from '../Navbar';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { HeaderLanding } from '../HeaderLanding';

const MainLayout: React.FC = () => {
    const { pathname } = useLocation();
    return (
        <div className={`sofia-pro  ${styles.container}`}>
            <div className="flex flex-col flex-1">
                {pathname === '/' ? <Header /> : <HeaderLanding />}
                <Navbar />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;
