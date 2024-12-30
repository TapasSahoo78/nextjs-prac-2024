// components/include/Header.js
import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <nav>
                <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
                    <li style={{ margin: '0 15px' }}>
                        <Link href="/">Home</Link>
                    </li>
                    <li style={{ margin: '0 15px' }}>
                        <Link href="/student">Student</Link>
                    </li>
                    <li style={{ margin: '0 15px' }}>
                        <Link href="/teacher">Teacher</Link>
                    </li>
                    <li style={{ margin: '0 15px' }}>
                        <Link href="/class">Class</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;