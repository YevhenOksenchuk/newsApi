
function Article({article}) {
  const articleStyle = {
    backgroundImage: `url(${article.urlToImage})`
  }

  return (
    <>
      <li className='article'>
        <div className='avatar' style={articleStyle}></div>
        <a href={article.url} target='_blank' rel='noopener noreferrer'>{article.title}</a>
        <p>{article.author}</p>
      </li>
    </>
  )
}

export default Article;