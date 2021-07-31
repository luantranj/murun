import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';


export const getStaticPaths = async() => {
	const res = await fetch(process.env.TOPIC_PAGES_ENDPOINT);
	const data = await res.json();

	const paths = data.map(t => {
		return {
			params: { id: t.slug.toString() }
		}
	});

	return {
		paths,
		fallback: false
	}

}


export async function getStaticProps(context) {
	const id = context.params.id;
	const res = await fetch('https://api.npoint.io/d0c87430d8deae4e27a2/' + id);
	const data = await res.json();

	const articlesRes = await fetch('https://api.npoint.io/944c126d90b2c2eb7edf/articles/');
	const articlesData = await articlesRes.json();

	return {
		props: { topic: data, articles: articlesData },
		revalidate: 60
	}
}


export default function Topic({ topic, articles }) {
	const topicLinks = [
		{
			topic: 'Training',
			slug: 'training'
		},
		{
			topic: 'Injuries',
			slug: 'injuries'
		},
		{
			topic: 'Running Equipment',
			slug: 'running-equipment'
		},
		{
			topic: 'Frequently Asked Questions',
			slug: 'frequently-asked-questions'
		},
	];

	const topics = ['training', 'injuries', 'running-equipment', 'frequently-asked-questions'];
	let i = 0;

	return (<>
		<Head>
			<title>{ topic.meta_title } - Empower Your Run</title>
			<meta name="description" content={ topic.meta_description } />
		</Head>

		{ /* Intro */ }
		<div className="intro bg-primary py-5 fs-5">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-md-8">
						<h1 className="text-light text-center">
							<div className="display-3 fw-bold">{ topic.meta_title }</div>
						</h1>
						<div style={{ height: '30px', clear: 'both' }}></div>
						<p className="text-light">{ topic.intro[0] }</p>
						<p className="text-light">{ topic.intro[1] }</p>
						<p className="text-light">{ topic.intro[2] }</p>
						<p className="text-light">{ topic.intro[3] }</p>
					</div>
				</div>
			</div> { /* container: end */ }
		</div> { /* Intro: end */ }


		{ /* Filter by Topic */ }
		<div className="filter-by-topic">
			<div style={{ height: '60px', clear: 'both' }}></div>
			<div className="container text-center">
				<div className="row justify-content-center">
					<div className="col-11 col-md-12">
						<h2 className="fw-bold">Filter by Topic</h2>
						<div style={{ height: '15px', clear: 'both' }}></div>
						<ul className="list-inline fs-5">
							{topicLinks.map((tl, index) => (<div key={index } className="d-inline">
								<li className="list-inline-item">
								{(topic.slug === tl.slug)? <span className="fw-bold">{ tl.topic } </span>:<Link href={ "/" + tl.slug }><a className="text-decoration-none">{ tl.topic }</a></Link>}
								</li>
								{index !== (topicLinks.length - 1)?<li className="list-inline-item fw-bold px-2 pe-3">·</li>:""}
							</div>))}
						</ul>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div> { /* Filter by Topic: end */ }


		{ /* Most Popular Articles */ }
		<div className="most-popular-articles">
			<div style={{ height: '65px', clear: 'both' }}></div>
			<div className="container text-center">
				<h2 className="fw-bold">Most Popular Articles on { topic.meta_title }</h2>
				<div style={{ height: '15px', clear: 'both' }}></div>

				<div className="row justify-content-center text-center">
					<div className="col-12 col-md-6">
						<ul className="list-unstyled fs-5">
							{articles.map(a => (<div key={ a.slug } className="d-inline">
								{(topics[a.topic] === topic.slug && a.most_popular === 1)? 
									<li>
										<Link href={ "/" + a.slug }><a className="text-decoration-none">{ a.title }</a></Link>
										<div style={{ height: '25px', clear: 'both' }}></div>
									</li>
								:"" 
								}
							</div>))}
						</ul>
					</div> { /* col: end */ }
					<div style={{ height: '25px', clear: 'both' }}></div>
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div> { /* Most Popular Articles: end */ }


		{ /* All Articles */ }
		<div className="all-articles">
			<div className="container text-start justify-content-center">
				<h2 className="fw-bold text-center">See All { topic.meta_title } Articles</h2>
				<div style={{ height: '15px', clear: 'both' }}></div>
				<div className="row justify-content-center">
					<ul className="list-unstyled col-12 col-md-8 fs-5">
						{articles.map(a => (<div key={ a.slug } className="d-inline">
							{(topics[a.topic] === topic.slug)? 
								<li>
									<Link href={ "/" + a.slug }><a className="text-decoration-none">{ a.title }</a></Link>
									<div style={{ height: '15px', clear: 'both' }}></div>
									<div className={i = i + 1}></div>	
									<div style={(i % 3 === 0 && i !== 0)? {height: '40px', clear: 'both'}: {}}></div>
								</li>
							:"" 
							}
						</div>))}
					</ul>
				</div>
			</div> { /* container: end */ }
		</div> { /* All Articles: end */ }
	</>)
}
