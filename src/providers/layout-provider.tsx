'use client';

import React from 'react';
import Sidebar from './layout-components/sidebar';

function LayoutProvider({children}: {children: React.ReactNode}) {
    return (
        <div className="flex lg:flex-row flex-col gap-5">
            <Sidebar />
            {children}
        </div>
    );
}

export default LayoutProvider;