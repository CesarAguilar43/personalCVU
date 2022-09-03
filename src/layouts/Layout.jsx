import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import '../assets/css/Layout.css';

const Layout = (props) => {
  return (
    <React.Fragment>
      <div className="container-full">
        <Header />
        <main>{props.children}</main>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Layout;
