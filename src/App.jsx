import { Outlet } from 'react-router-dom'
import Header from '../src/shared/components/Header/Header'
import './App.module.scss';

function App() {

  return (
    <>
      <Header />
      <main>
        <Outlet />  
      </main>
    </>
  )
}

export default App
