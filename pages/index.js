import { createClient } from "contentful";
import ArticleCard from "../components/ArticleCard";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: 'murupost' });

  return {
    props: { articles: res.items },
    revalidate: 60
  }
}

export default function Articles({ articles }) {
  console.log(articles);
  return (
    <div className="article-list">
      {articles.map(article => (
        <ArticleCard key={article.sys.id} article={article} />
      ))}
    </div>
  )
}