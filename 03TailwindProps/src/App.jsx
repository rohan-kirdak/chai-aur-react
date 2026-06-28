import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import pic1 from './assets/pic1.jpg';
import Card from './components/card.jsx'

import './App.css'

function App() {
  return (
   <>
     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 gap-6">
      <div className="bg-white p-8 rounded-xl shadow-xl ">
        <h1 className="text-4xl font-bold text-blue-400">
          Tailwind CSS Working 🚀
        </h1>
      </div>
      
    
    <Card username="Rohan" btnText="clicked"/>
    <Card username="Ayush" btnText="read more"/>
    </div>
   </>
  );
}

export default App;
