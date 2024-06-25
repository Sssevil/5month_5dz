
import NavBar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <div>
    <header>
      <NavBar />
    </header>
    <main>
      <Outlet />
    </main>
  </div>
);

export default Layout;
