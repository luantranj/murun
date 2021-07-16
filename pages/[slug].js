import { createClient } from "contentful";
import Image from 'next/image';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticPaths() {
    const res = await client.getEntries({ content_type: 'murupost' });

    const paths = res.items.map(item => {
        return {
            params: { slug: item.fields.slug }
        }
    });

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const { items } = await client.getEntries({
        content_type: 'murupost',
        'fields.slug': params.slug
    });

    return {
        props: { article: items[0] }
    }
}

export default function FullArticle({ article }) {
    const {featuredImage, title, readingTime, category, content} = article.fields;
      
    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: function NodeType(node) {
                const { file } = node.data.target.fields;
                return (
                    <Image 
                        src={'https:' + file.url}
                        width={file.details.image.width}
                        height={file.details.image.height}
                    />
                )
            }
        }
    };

    return (<>
        <div className="article-header">
            <Image 
                src={'https:' + featuredImage.fields.file.url}
                width={featuredImage.fields.file.details.image.width}
                height={featuredImage.fields.file.details.image.height}
            />
            <h1>{ title }</h1>
            <p className="info">
                <span>{ readingTime } read</span>
                {category.map(cat => (
                    <Link href={"/" + cat} key={cat}><a>{ cat }</a></Link>                
                ))}
            </p>
        </div>

        <div className="article-body">
            {documentToReactComponents(content, options)}            
        </div>
    </>)
}