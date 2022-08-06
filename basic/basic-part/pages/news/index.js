export default function NewsArticleList({ articles }) {
  return (
    <>
      <h1>List of news article</h1>
      {articles.map((article) => (
        <div key={article?.id}>
          <h4>{article.title}</h4>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();
  return {
    props: {
      articles: data,
    },
  };
}
