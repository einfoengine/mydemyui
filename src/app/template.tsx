import Footer from '@/components/footer';
import Header from '@/components/header';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.min.css'

const Index = ({children}:{children: any}) => {
  return (
    <>
        <Header/>
        <div className='nt-main-wrap container mx-auto'>
        {React.Children.map(children, (child) => (
          <div key={child.key} className='content'>{child}</div>
        ))}
        </div>
        <Footer/>
        <ToastContainer position='top-center'/>
    </>
  )
}

export default Index