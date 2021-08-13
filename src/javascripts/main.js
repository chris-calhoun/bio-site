import '../styles/main.scss';
import Navbar from './navbar/Navbar';
import ViewHelper from './views/ViewHelper';

const init = () => {
  Navbar.showNavbar();
  ViewHelper.showViews();
};

init();
