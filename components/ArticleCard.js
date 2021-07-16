import Link from 'next/link';
import Image from 'next/image';

export default function ArticleCard({ article }) {
    const {title, slug, featuredImage, snippet} = article.fields;

    return (
        <div className="card">
            <div className="featured">
                <Image 
                    src={'https:' + featuredImage.fields.file.url}
                    width={featuredImage.fields.file.details.image.width}
                    height={featuredImage.fields.file.details.image.height}
                />
            </div>
            <div className="info">
                <h4>{ title }</h4>
                <p>{ snippet.content[0].content[0].value }</p>
            </div>
            <div className="action">
                <Link href={"/" + slug}><a>Continue Reading</a></Link>
            </div>
        </div>
    )
}