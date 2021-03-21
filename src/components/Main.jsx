import {lazy, Suspense, useContext, useEffect, useState} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Header from "./Main/Header/Header";
import {Query} from "../heplers/query";
import Filter from "./Main/Filter/Filter";
import FiltersContext from "../heplers/filtersObject";
// import Pagination from '@material-ui/lab/Pagination';

const NewsList = lazy(() => import('./Main/NewsList/NewsList'));

function Main() {
  const [newsTopList, setNewsTopList] = useState([]);
  const [newsEveryList, setNewsEveryList] = useState([]);
  const [topFiler, setTopFiler] = useState([]);
  const [everyFiler, setEveryFiler] = useState([]);
  // Math.ceil(newsList) / 5
  // newsList.slice()

  const filters = useContext(FiltersContext);

  useEffect(() => {
    Query('top-headlines','country=us').then(result => setNewsTopList(result.articles));
  }, []);

  useEffect(() => {
    Query('everything','q=news').then(result => setNewsEveryList(result.articles));
  }, []);

  useEffect(() => {
    setTopFiler('top-headlines');
  }, []);

  useEffect(() => {
    setEveryFiler('everything');
  }, []);

  return (
    <>
      <Header/>
      <Link to="/everything" className='link'>Everything</Link>
      <Link to="/top-headlines" className='link'>Top headlines</Link>
      <Link to="/" className='link'>Home</Link>
      <Switch>
        <Route exact path="/everything">
          <Filter filter={everyFiler}/>
          <Suspense fallback={<h1>LOADING...</h1>}>
            <NewsList newsList={newsEveryList}/>
          </Suspense>
        </Route>
        <Route path="/top-headlines">
          <Filter filter={topFiler}/>
          <Suspense fallback={<h1>LOADING...</h1>}>
            <NewsList newsList={newsTopList}/>
          </Suspense>
        </Route>
        <Route path="/"></Route>
      </Switch>
      {/*<Filter />
      <Suspense fallback={<h1>LOADING...</h1>}>
        <NewsList newsList={newsList}/>
        <Pagination count={Math.ceil(newsList / 5)} page={}/>
      </Suspense>*/}
    </>
  )
}

export default Main;