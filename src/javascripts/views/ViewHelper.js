import Home from './Home';
import About from './About';
import Project from './Projects';
import Contact from './Contact';

const showViews = () => {
  Home.showHomePage();
  About.showAboutPage();
  Project.showProjectPage();
  Contact.showContactPage();
};

export default { showViews };
