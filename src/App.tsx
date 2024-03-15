import { HashRouter } from 'react-router-dom'
import GetRoutes from './router'

function App() {
  return (
    <>
      <HashRouter>
        <GetRoutes />
      </HashRouter>
    </>
  )
}

export default App
