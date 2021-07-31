import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import ArticleCard from '../components/ArticleCard';
import BestArticles from '../components/BestArticles';


export async function getStaticProps() {
	const res = await fetch(process.env.ARTICLES_ENDPOINT);
	const data = await res.json();

	return {
		props: {articles: data},
		revalidate: 60
	}
}


export default function Home({ articles }) {
	const topicSlugs = ['training', 'injuries', 'running-equipment', 'frequently-asked-questions'];
	const topics = ['TRAINING', 'INJURIES', 'RUNNING EQUIPMENT', 'FAQs'];
	return(<>
		<Head>
			<title>Home - Empower Your Run</title>
			<meta name="description" content="Empower Your Run helps you crush all your running goals! Training advice, tips for overcoming running injuries, equipment reviews, and more – all in one place!" />
		</Head>

		{ /* Intro (main image & intro text) */ }

		<div className="intro py-5 bg-primary">
			<div className="container-lg">
				<div className="row justify-content-center align-items-center">
					<div className="col-md-5 text-center text-md-start ">
						<h1 className="text-light">
							<div className="display-2">“if you can walk, you can run”</div>
						</h1>
						<p className="lead my-4 text-light">I help you get better at running: detailed tutorials, case studies and opinion pieces from doing extensive research and from personal experience</p>
						<Link href="/how-to-start-running-for-beginners">
							<a className="btn btn-warning btn-lg">Get Started</a>
						</Link>
					</div> { /* col for text */ }

					<div className="col-md-5 text-center d-none d-md-block">
						<Image src="/male-winning-runner.png" width="600" height="753" alt="Intro image" className="img-fluid" />
					</div> { /* col for image */ }
				</div> { /* row: end */ }
			</div> { /* Container */ }
		</div> { /* Intro: end */ }


		{ /* Recent Article */ }

		<div className="recent-articles">
			<div className="container-fluid text-center justify-content-center">
					{articles.map(a => {
						if (a.id <= 3) {
							return (
							<div key={ a.id } className="row justify-content-center border-bottom">
								<ArticleCard 
									category={ topics[a.topic] }
									catlink={ topicSlugs[a.topic] }
									title={ a.title }
									slug={ a.slug }
									auimg={ a.author_avatar }
									author={ a.author_name }
									aulink={ a.author_link }
									minread={ a.min_read}
								/>
							</div>
						)}
					})}
			</div> { /* container: end */ }

			<div className="container-fluid text-center my-5 pb-5">
				<div className="d-grid col-6 mx-auto">
						<Link href="/blog"><a className="btn btn-outline-primary btn-lg fw-bold border-3">SEE ALL ARTICLES</a></Link>
				</div> { /* button: end */ }
			</div> { /* Show more articles button: end */ }
		</div> { /* Recent Articles: end */ }


		{ /* Best Articles of The Blog */ }
		<BestArticles />
	</>)
}
