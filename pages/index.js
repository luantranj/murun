import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ArticleCard from '../components/ArticleCard';

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
							<div className="display-2">Empwer Your run</div>
						</h1>
						<p className="lead my-4 text-light">We help you get better at SEO and marketing: detailed tutorials, case studies and opinion pieces from marketing practitioners and industry experts alike</p>
						<a className="btn btn-warning btn-lg">Start</a>
					</div> { /* col for text */ }

					<div className="col-md-5 text-center d-none d-md-block">
						<Image src="/intro-image.jpg" width="600" height="620" alt="Intro image" className="img-fluid" />
					</div> { /* col for image */ }
				</div> { /* row: end */ }
			</div> { /* Container */ }
		</div> { /* Intro: end */ }


		{ /* Recent Article */ }

		<div className="recent-articles py-5">
			<div className="container-fluid text-center">
				<div className="row justify-content-center">
					<ArticleCard 
						category="GADGETS"
						catlink="gadgets"
						title="Best Running Shoes for Flat Feet in 2021"
						slug="best-running-shoes-for-flat-feet"
						auimg="instagram.png"
						author="Dominic T."
						aulink="dominic"
						minread="30"
					/>

					<ArticleCard 
						category="GADGETS"
						catlink="gadgets"
						title="Best Running Shoes for Flat Feet in 2021"
						slug="best-running-shoes-for-flat-feet"
						auimg="instagram.png"
						author="Dominic T."
						aulink="dominic"
						minread="30"
					/>

					<ArticleCard 
						category="GADGETS"
						catlink="gadgets"
						title="Best Running Shoes for Flat Feet in 2021"
						slug="best-running-shoes-for-flat-feet"
						auimg="instagram.png"
						author="Dominic T."
						aulink="dominic"
						minread="30"
					/>
				</div> { /* Row of Contents: end */ }
			</div> { /* container: end */ }

			<div className="container-fluid text-center">
				<div className="d-grid col-6 mx-auto">
						<Link href="/"><a className="btn btn-outline-primary btn-lg fw-bold border-3">SEE ALL ARTICLES</a></Link>
				</div> { /* button: end */ }
			</div> { /* Show more articles button: end */ }
		</div> { /* Recent Articles: end */ }
	</>)
}
