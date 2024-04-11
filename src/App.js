
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Home from './components/Home';
import LoginRoute from './components/LoginRoute';
import ProductsRoute from './components/ProductsRoute';
import CourseCard from './components/CourseCard';
import RegisterRoute from './components/RegisterRoute';
import AboutRoute from './components/AboutRoute';

function App() {
  return (
    <div className='App'>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/courses" component={CourseCard}/>
      <Route exact path="/products" component={ProductsRoute}/>
      
      <Route exact path="/about" component={AboutRoute}/>
      <Route exact path="/login" component={LoginRoute}/>
      
      <Route exact path="/register" component={RegisterRoute}/>
      </Switch>
    </div>
  );
}

export default App;
