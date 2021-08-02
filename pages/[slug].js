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
	return (
		<div>
			<h1>{ infoData.title }</h1>	
			<span>{ infoData.author_avatar }</span>
			<span>{ infoData.author_name }</span>
			<span>{ infoData.min_read }</span>
			<span>{ infoData.topic }</span>
			<p>{ infoData.meta_description }</p>
		</div>
	)
}
