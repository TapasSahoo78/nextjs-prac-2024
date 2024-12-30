// app/layout.js or components/Layout.js
'use client';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/include/Header';
import Footer from './components/include/Footer';
import { useRouter } from 'next/navigation';

export default function Layout({ children }) {
  const router = useRouter();
  const is404 = router.pathname === '/404';

  return (
    <Provider store={store}>
      <html lang="en">
        <head>
          <title>Your App Title</title>
        </head>
        <body>
          {!is404 && <Header />}
          {children}
          {!is404 && <Footer />}
        </body>
      </html>
    </Provider>
  );
}