import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LadingPage } from '../pages/LadingPage'



export const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LadingPage />} />
      </Routes>
    </Router>
  )
}
