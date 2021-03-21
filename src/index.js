import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/Main';
import FiltersContext from "./heplers/filtersObject";
import {BrowserRouter} from "react-router-dom";

let value = {
  countryArr: ['', 'us', 'ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co',
    'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp',
    'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs',
    'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua'],
  categoryArr: ['', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'],
  languageArr: ['', 'en', 'ar', 'de', 'es', 'fr', 'he', 'it', 'nl', 'no', 'pt', 'ru', 'se', 'ud', 'zh'],
  sortedByArr: ['', 'relevancy', 'popularity', 'publishedAt']
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <FiltersContext.Provider value={value}>
        <Main/>
      </FiltersContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
