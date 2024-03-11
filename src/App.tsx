import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './pages/Product/Product';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route 
          path="/"
          element={
            <Layout>
              <Product/>
            </Layout>
          }
          >
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
