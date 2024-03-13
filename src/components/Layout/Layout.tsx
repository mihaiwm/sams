import React from 'react'
import './Layout.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface ILayout {
    children: React.ReactNode;
  }

function Layout({children}:ILayout) {
  return (
    <>
			<Header/>
				<main className="main">
          <>
            {children}
            <Footer/>
          </>
				</main>
			
    </>
  )
}

export default Layout