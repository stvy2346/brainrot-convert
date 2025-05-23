import { useState } from 'react'
import Header from './components/Header'
import Generator from './components/Generator'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className='min-h-screen bg-black'>
        <div className='w-full md:w-[95%] lg:w-[80%] xl:w-[60%] mx-auto p-5 md:p-8 lg:p-10 flex-grow'> 
          <Header/>
          <Generator/>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
