import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';


export async function getStaticProps() {
	const res = await fetch('https://api.npoint.io/944c126d90b2c2eb7edf/articles');
	const data = await res.json();

	return {
		props: {articles: data}
	}
}


export default function Blog({ articles }) {
	let i = 0;

	return (<>
		<Head>
			<title>Blog - Empower Your Run</title>
			<meta name="description" content=">Welcome to the blog. Here you'll find lots of pages of running advice on training plans, effective workouts, avoiding - and recovering - from common injuries, honest running equipment reviews, and much more." />
		</Head>

		{ /* Intro */ }
		<div className="intro bg-primary py-5">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-md-8">
						<h1 className="text-light text-center">
							<div className="display-3 fw-bold">The Blog</div>
						</h1>
						<div style={{ height: '30px', clear: 'both' }}></div>
						<p className="fs-5 text-light">
						Welcome to the blog. Here you'll find lots of pages of running advice on training plans, effective workouts, avoiding - and recovering - from common injuries, honest running equipment reviews, and much more. You can browse the blog based on the category below. Enjoy.
						</p>
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
							<li className="list-inline-item">
								<Link href="/training"><a className="text-decoration-none">Training</a></Link>
							</li>

							<li className="list-inline-item fw-bold px-2">·</li>
							
							<li className="list-inline-item">
								<Link href="/injuries"><a className="text-decoration-none">Injuries</a></Link>
							</li>

							<li className="list-inline-item fw-bold px-2">·</li>
							
							<li className="list-inline-item">
								<Link href="/running-equipment"><a className="text-decoration-none">Running Equipment</a></Link>
							</li>

							<li className="list-inline-item fw-bold px-2">·</li>
							
							<li className="list-inline-item">
								<Link href="/frequently-asked-questions"><a className="text-decoration-none">Frequently Asked Questions</a></Link>
							</li>
						</ul>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div> { /* Filter by Topic: end */ }


		{ /* Most Popular Articles */ }
		<div className="most-popular-articles">
			<div style={{ height: '40px', clear: 'both' }}></div>
			<div className="container text-center">
				<h2 className="fw-bold">Most Popular Articles</h2>
				<div style={{ height: '25px', clear: 'both' }}></div>

				<div className="row justify-content-center text-start fs-5">
					<div className="col-12 col-md-4">
						<h4>TRAINING</h4>
						<ul className="list-unstyled d-grid gap-3">
							<li><Link href="/"><a className="text-decoration-none">Running 5 Miles a Day – My Journey (Plus a Handy Guide For You To Replicate)</a></Link></li>
							<li><Link href="/"><a className="text-decoration-none">Running 5 Miles a Day – My Journey (Plus a Handy Guide For You To Replicate)</a></Link></li>
						</ul>
						<div style={{ height: '25px', clear: 'both' }}></div>
					</div> { /* col: end */ }

					<div className="col-12 col-md-4">
						<h4>INJURIES</h4>
						<ul className="list-unstyled d-grid gap-3">
							<li><Link href="/"><a className="text-decoration-none">Running 5 Miles a Day – My Journey (Plus a Handy Guide For You To Replicate)</a></Link></li>
							<li><Link href="/"><a className="text-decoration-none">Running 5 Miles a Day – My Journey (Plus a Handy Guide For You To Replicate)</a></Link></li>
						</ul>
						<div style={{ height: '25px', clear: 'both' }}></div>
					</div> { /* col: end */ }

					<div className="w-100"></div>
		
					<div className="col-12 col-md-4">
						<h4>RUNNING EQUIPMENT</h4>
						<ul className="list-unstyled d-grid gap-3">
							<li><Link href="/"><a className="text-decoration-none">Running 5 Miles a Day – My Journey (Plus a Handy Guide For You To Replicate)</a></Link></li>
							<li><Link href="/"><a className="text-decoration-none">Running 5 Miles a Day – My Journey (Plus a Handy Guide For You To Replicate)</a></Link></li>
						</ul>
						<div style={{ height: '25px', clear: 'both' }}></div>
					</div> { /* col: end */ }

					<div className="col-12 col-md-4">
						<h4>FREQUENTYLY ASKED QUESTIONS</h4>
						<ul className="list-unstyled d-grid gap-3">
							<li><Link href="/does-running-make-your-legs-bigger"><a className="text-decoration-none">Does Running Make Your Legs Bigger? It depends on you!</a></Link></li>
							<li><Link href="/does-running-make-your-legs-bigger"><a className="text-decoration-none">Does Running Make Your Legs Bigger? It depends on you!</a></Link></li>
						</ul>
						<div style={{ height: '30px', clear: 'both' }}></div>
					</div> { /* col: end */ }
		
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div> { /* Most Popular Articles: end */ }


		{ /* All Articles */ }
		<div className="all-articles">
			<div style={{ height: '15px', clear: 'both' }}></div>
			<div className="container text-start justify-content-center">
				<h2 className="fw-bold text-center">See All Articles</h2>
				<div style={{ height: '15px', clear: 'both' }}></div>
				<div className="row justify-content-center fs-5">
					<ul className="list-unstyled col-12 col-md-8">
						{articles.map(a => (<>
							<li key={ a.id }>
								<Link href={ "/" + a.slug }><a className="text-decoration-none d-block">{ a.title }</a></Link>
								<div style={{ height: '15px', clear: 'both' }}></div>
								<div className={i = i + 1}></div>	
								<div style={(i % 3 === 0 && i !== 0)? {height: '40px', clear: 'both'}: {}}></div>
							</li>	
						</>))}
					</ul>
				</div>
			</div> { /* container: end */ }
		</div> { /* All Articles: end */ }
	</>)
}
