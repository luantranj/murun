import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';


export async function getStaticPaths() {
	const res = await fetch(process.env.ARTICLES_ENDPOINT);
	const data = await res.json();

	const paths = data.map(a => {
		return {
			params: { slug: a.slug.toString() }
		}
	});

	return {
		paths,
		fallback: false
	}
}


export async function getStaticProps(context) {
	const slug = context.params.slug;
	

	const mappingRes = await fetch(process.env.ARTICLES_ENDPOINT);
	const mappingData = await mappingRes.json();
	
	const slugMapping = mappingData.map(a => a.slug); 
	const jsonContentMapping = mappingData.map(a => a.content_endpoint);



	const res = await fetch('https://api.npoint.io' + '/' + jsonContentMapping[ slugMapping.indexOf(slug) ]);
	const data = await res.json();


	const infoRes = await fetch(process.env.ARTICLES_ENDPOINT + '/' + slugMapping.indexOf(slug));
	const infoData = await infoRes.json();


	return {
		props: { data, infoData }
	}

}


export default function Article({ infoData, data }) {
	const topicSlugs = ['training', 'injuries', 'running-equipment', 'frequently-asked-questions'];
	const topics = ['TRAINING', 'INJURIES', 'RUNNING EQUIPMENT', 'FAQs'];
	const formattedFeaturedImageLink = infoData.feature_image.split('^'); 

	return (<>
		<Head>
			<title>{ infoData.title }</title>
			<meta name="description" content={ infoData.meta_description } />
		</Head>

		{ /* Article Info */ }
		<div className="artilce-info py-4 bg-primary">
			<div className="container-lg text-center text-light">
				<div className="row justify-content-center">
					<div className="col-md-8">
						<Image className='article-image' src={ formattedFeaturedImageLink[0] } width={ formattedFeaturedImageLink[1] } height={ formattedFeaturedImageLink[2] } alt={ infoData.title } layout='intrinsic' />
						<p className="mt-2"><Link href={ '/category/' +  topicSlugs[infoData.topic] }><a className="text-decoration-none link-light fw-bold">{ topics[infoData.topic] }</a></Link></p>
						<h1 className="fw-bold">{ infoData.title }</h1>	
						<div className="mt-4 mb-md-4">
							<Link href={ infoData.author_link }><a className="text-decoration-none link-light">{ infoData.author_name }</a></Link>
							<span className="px-3">&#9642;</span>
							<span>{ infoData.min_read } min read</span>
						</div>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Info: end */ }


		{ /* Article Content */ }
		<div className="artilce-content mt-4 py-4 fs-5">
			<div className="container-lg ">
				<div className="row justify-content-center">
					<div className="col-md-8 col-lg-6">
						{data.content.map((line, index) =>
							<span key={ index } dangerouslySetInnerHTML={{ __html: line }}></span>
						)}
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
