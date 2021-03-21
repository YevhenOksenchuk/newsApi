import Article from "./Article/Article";

function NewsList({newsList}) {
  return (
    <ul className='articles'>
      {newsList.map(article => <Article key={Math.random()} article={article} />)}
    </ul>
  )
}

export default NewsList;