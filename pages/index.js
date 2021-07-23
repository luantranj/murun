import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
	return(<>
		<Head>
			<title>Home - Empower Your Run</title>
			<meta name="description" content="Empower Your Run helps you crush all your running goals! Training advice, tips for overcoming running injuries, equipment reviews, and more – all in one place!" />
		</Head>

		{ /* Intro (main image & intro text): start */ }

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

	</>)
}
