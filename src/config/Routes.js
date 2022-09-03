import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from '../containers/home/Home';
import { About } from '../containers/about/About';
import { Development } from '../containers/development/Development';
// import Skills from '../containers/skills/Skills';
// import Contact from '../containers/contact/Contact';
import Scroll from '../components/scroll/Scroll';

export default function Routes() {
  return (
    <BrowserRouter>
      <Scroll />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/development/:developId" component={Development} />
        {/* <Route exact path="/skills" component={Skills} />
                <Route exact path="/contact" component={Contact} /> */}
      </Switch>
    </BrowserRouter>
  );
}
