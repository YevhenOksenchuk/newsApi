import {useContext, useState} from "react";
import FiltersContext from "../../../heplers/filtersObject";
import {Query} from "../../../heplers/query";

function Filter({filter}) {
  const filters = useContext(FiltersContext);
  const [formData, setFormData] = useState({
    sortBy: '',
    lang: '',
    fromDate: '',
    toDate: '',
    category: '',
    country: ''
  });

  const currentDate = new Date(Date.now());
  const maxDate = currentDate.toISOString().split('T')[0];
  currentDate.setDate(currentDate.getDate() - 80)
  const minDate = currentDate.toISOString().split('T')[0];

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let searchString =
      Object
        .entries(formData)
        .filter(val => val[1] != '')
        .map(value => value.join('='))
        .join('&')
        .replace('fromDate', 'from')
        .replace('toDate', 'to');

    if (filter === 'everything') {
      searchString = 'q=news&'.concat(searchString);
    }
    Query(filter, searchString).then(res => console.log(res));
    searchString = '';
  }

  const onChangeData = ({target: {name, value}}) => {
    setFormData(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  if (filter === 'top-headlines') {
    return (
      <form className='filter' onSubmit={onSubmitHandler}>
        <label className='category'>
          Category:
        </label>
        <select
          onChange={onChangeData}
          className="category-by"
          id=""
          name='category'
          value={formData.category}>
          {filters.categoryArr.map((category) => (
            <option key={Math.random()} value={category}>{category}</option>
          ))}
        </select>
        <label className='country'>
          Country:
        </label>
        <select
          className="country-by" id=""
          onChange={onChangeData}
          name='country'
          value={formData.country}>
          {filters.countryArr.map((country) => (
            <option key={Math.random()} value={country}>{country}</option>
          ))}
        </select>
        <button>Search</button>
      </form>
    )
  }

  if (filter === 'everything') {
    return (
      <form className='filter' onSubmit={onSubmitHandler}>
        <label className='sort'>
          Sorted by:
        </label>
        <select
          onChange={onChangeData}
          className='sorted-by'
          id=''
          name='sortBy'
          value={formData.sortBy}>
          {filters.sortedByArr.map((sortedBy) => (
            <option key={Math.random()} value={sortedBy}>{sortedBy}</option>
          ))}
        </select>

        <label className='lang'>
          Language:
        </label>
        <select
          onChange={onChangeData}
          className='language'
          id=''
          name='lang'
          value={formData.lang}>
          {filters.languageArr.map((language) => (
            <option key={Math.random()} value={language}>{language}</option>
          ))}
        </select>

        <label className='dateFrom'>
          From:
        </label>
        <input
          onChange={onChangeData}
          className='date-from'
          type='date'
          name='fromDate'
          value={formData.fromDate}
          min={minDate}
          max={formData.toDate ? formData.toDate : maxDate}
        />

        <label className='dateTo'>
          To:
        </label>
        <input
          onChange={onChangeData}
          className='date-to'
          type='date'
          name='toDate'
          value={formData.toDate}
          min={formData.fromDate ? formData.fromDate : minDate}
          max={maxDate}
        />
        <button>Search</button>
      </form>
    )
  }

}

export default Filter;