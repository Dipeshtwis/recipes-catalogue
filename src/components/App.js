import { Route } from 'react-router-dom';
import Catalogue from '../containers/Catalogue';
import RecipeDetail from '../containers/RecipeDetail';
import Header from './Header';
import Footer from './Footer';

const App = () => (
  <>
    <Header />
    <Route exact path="/">
      <Catalogue />
    </Route>
    <Route exact path="/:id">
      <RecipeDetail />
    </Route>
    <Footer />
  </>
);
export default App;
