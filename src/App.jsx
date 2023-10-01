import { Link } from 'react-router-dom'
import { MyRoutes } from './routes/routes'




function App() {


  return (
    <div>
      <header>

          <h1 className='text-center text-5xl text-[#9F91FE] font-bold mt-8'>
            📽️Películas
          </h1>

      </header>
      <MyRoutes />
    </div>
  )
}

export default App
