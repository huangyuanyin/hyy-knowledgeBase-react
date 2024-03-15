import { Outlet } from 'react-router-dom'
import './layout.scss'
import Aside from '../../components/Aside'

function Layout() {
  return (
    <section id="container">
      <aside>
        <Aside />
      </aside>
      <section>
        <header>header</header>
        <main>
          <Outlet />
        </main>
      </section>
    </section>
  )
}

export default Layout
