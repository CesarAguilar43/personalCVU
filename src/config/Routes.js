import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/home/Home';
import About from '../containers/about/About';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
            </Switch>
        </BrowserRouter>
    );
}