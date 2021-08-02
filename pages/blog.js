import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';


export async function getStaticProps() {
	const res = await fetch(process.env.ARTICLES_ENDPOINT);
	const data = await res.json();

	return {
		props: {articles: data},
		revalidate: 60
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
						Welcome to the blog. Here you&apos;ll find lots of pages of running advice on training plans, effective workouts, avoiding - and recovering - from common injuries, honest running equipment reviews, and much more. You can browse the blog based on the category below. Enjoy.
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
								<Link href="/category/training"><a className="text-decoration-none">Training</a></Link>
							</li>

							<li className="list-inline-item fw-bold px-2">·</li>
							
							<li className="list-inline-item">
								<Link href="/category/injuries"><a className="text-decoration-none">Injuries</a></Link>
							</li>

							<li className="list-inline-item fw-bold px-2">·</li>
							
							<li className="list-inline-item">
								<Link href="/category/running-equipment"><a className="text-decoration-none">Running Equipment</a></Link>
							</li>

							<li className="list-inline-item fw-bold px-2">·</li>
							
							<li className="list-inline-item">
								<Link href="/category/frequently-asked-questions"><a className="text-decoration-none">Frequently Asked Questions</a></Link>
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
						<h4 className="fw-bold">TRAINING</h4> 
						<ul className="list-unstyled d-grid gap-3">
							<li><Link href="/running-with-ankle-weights"><a className="text-decoration-none">10 Awesome Benefits of Running with Ankle Weights</a></Link></li>
							<li><Link href="/how-to-start-running-for-beginners"><a className="text-decoration-none">How To Start Running - A Complete Guide For Beginners</a></Link></li>
						</ul>
						<div style={{ height: '25px', clear: 'both' }}></div>
					</div> { /* col: end */ }

					<div className="col-12 col-md-4">
						<h4 className="fw-bold">INJURIES</h4>
						<ul className="list-unstyled d-grid gap-3">
							<li><Link href="/peroneal-tendonitis-running"><a className="text-decoration-none">Peroneal Tendonitis Running - The Best Ways To Manage It</a></Link></li>
							<li><Link href="/achilles-tendon-massage"><a className="text-decoration-none">Achilles Pain Relief: Try This Simple Achilles Tendon Massage</a></Link></li>
							<li><Link href="/plantar-fasciitis-trigger-points"><a className="text-decoration-none">I Fixed My Plantar Fasciitis with a Trigger Point Therapy - Here&apos;s How You Can Do It Too</a></Link></li>
							<li><Link href="/how-to-wrap-foot-for-plantar-fasciitis-with-ace-bandage"><a className="text-decoration-none">How to Wrap Foot for Plantar Fasciitis with Ace Bandage: DIY Instructions</a></Link></li>
							<li><Link href="/how-to-heal-a-bruised-heel"><a className="text-decoration-none">How to Heal a Bruised Heel - What You Need to Know and How to Do It!</a></Link></li>
						</ul>
						<div style={{ height: '25px', clear: 'both' }}></div>
					</div> { /* col: end */ }

					<div className="w-100"></div>
		
					<div className="col-12 col-md-4">
						<h4 className="fw-bold">RUNNING EQUIPMENT</h4>
						<ul className="list-unstyled d-grid gap-3">
							<li><Link href="/best-running-shoes-for-achilles-tendonitis"><a className="text-decoration-none">Best Running Shoes for Achilles Tendonitis: Top 9 Tendon-Friendly Picks</a></Link></li>
							<li><Link href="/essential-oils-for-plantar-fasciitis"><a className="text-decoration-none">How to Use Essential Oils for Your Plantar Fasciitis? Instructions and Buying Guide</a></Link></li>
							<li><Link href="/best-running-shoes-for-peroneal-tendonitis"><a className="text-decoration-none">Best Running Shoes for Peroneal Tendonitis - Top 5 Sneakers for Injury Prevention</a></Link></li>
						</ul>
						<div style={{ height: '25px', clear: 'both' }}></div>
					</div> { /* col: end */ }

					<div className="col-12 col-md-4">
						<h4 className="fw-bold">FREQUENTYLY ASKED QUESTIONS</h4>
						<ul className="list-unstyled d-grid gap-3">
							<li><Link href="/ears-hurt-when-running"><a className="text-decoration-none">Why Do Your Ears Hurt When You Run and How to Stop It</a></Link></li>
							<li><Link href="/does-running-make-you-taller"><a className="text-decoration-none">Does Running Make You Taller or Is It Just a Myth? The Honest Truth!</a></Link></li>
							<li><Link href="/does-running-make-your-legs-bigger"><a className="text-decoration-none">Does Running Make Your Legs Bigger? It depends on you!</a></Link></li>
							<li><Link href="/how-long-does-plantar-fasciitis-last"><a className="text-decoration-none">How Long Does Plantar Fasciitis Last - Educated, Thorough Answer</a></Link></li>
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
						{articles.map(a => (<div key={ a.id } className="d-inline">
							<li>
								<Link href={ "/" + a.slug }><a className="text-decoration-none d-block">{ a.title }</a></Link>
								<div style={{ height: '15px', clear: 'both' }}></div>
								<div className={i = i + 1}></div>	
								<div style={(i % 3 === 0 && i !== 0)? {height: '40px', clear: 'both'}: {}}></div>
							</li>	
						</div>))}
					</ul>
				</div>
			</div> { /* container: end */ }
		</div> { /* All Articles: end */ }
	</>)
}
