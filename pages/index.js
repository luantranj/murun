import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import ArticleCard from '../components/ArticleCard';
import BestArticles from '../components/BestArticles';

export default function Home() {
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

		<div className="recent-articles py-5">
			<div className="container-fluid text-center">
				<div className="row justify-content-center">
					<ArticleCard 
						category="TRAINING"
						catlink="training"
						title="Why Am I Getting Worse At Running? Discover The Root Of Your Problem"
						slug="why-am-i-getting-worse-at-running"
						auimg="dominic.jpg"
						author="Dominic T."
						aulink="dominic"
						minread="08"
					/>

					<ArticleCard 
						category="RUNNING EQUIPMENT"
						catlink="running-equipment"
						title="Training Versus Running Shoes: Solve the Dilemma Once & For All"
						slug="training-versus-running-shoes"
						auimg="dominic.jpg"
						author="Dominic T."
						aulink="dominic"
						minread="09"
					/>

					<ArticleCard 
						category="INJURIES"
						catlink="injuries"
						title="Pain on Top of the Foot after Running – How to Identify and Treat Foot Extensor Tendonitis"
						slug="pain-on-top-of-foot-after-running"
						auimg="dominic.jpg"
						author="Dominic T."
						aulink="dominic"
						minread="09"
					/>

					<ArticleCard 
						category="RUNNING EQUIPMENT"
						catlink="running-equipment"
						title="Best Running Shoes for Achilles Tendonitis: Top 9 Tendon-Friendly Picks"
						slug="best-running-shoes-for-achilles-tendonitis"
						auimg="dominic.jpg"
						author="Dominic T."
						aulink="dominic"
						minread="18"
					/>
				</div> { /* Row of Contents: end */ }
			</div> { /* container: end */ }

			<div className="container-fluid text-center">
				<div className="d-grid col-6 mx-auto">
						<Link href="/blog"><a className="btn btn-outline-primary btn-lg fw-bold border-3">SEE ALL ARTICLES</a></Link>
				</div> { /* button: end */ }
			</div> { /* Show more articles button: end */ }
		</div> { /* Recent Articles: end */ }


		{ /* Best Articles of The Blog */ }
		<BestArticles />
	</>)
}
