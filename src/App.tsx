
import { Outlet } from 'react-router-dom';
import { AppBar } from './components/navigation/Appbar.tsx';

/**
 * Root component of the app
 */
function App() {
  return (
    <>
      <AppBar />
      <div className='outlet-container' >
        <Outlet />
      </div>
    </>
  )
}

export default App
