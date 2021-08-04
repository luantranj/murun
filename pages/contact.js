import Head from 'next/head';
import Link from 'next/link';

export default function About() {
	return (<>
		<Head>
			<title>Contact - Empower Your Run</title>
			<meta name="description" content="Contact Dominic: You can get in touch with Dominic using the chatbox below. Or you can find Dominic on Twitter." />
		</Head>

		{ /* Intro */ }
		<div className="intro bg-primary py-5">
			<div className="container">
				<div className="row justify-content-center text-center">
					<div className="col-12 col-md-8">
						<h1 className="text-light">
							<div className="display-3 fw-bold">Contact</div>
						</h1>
						<div style={{ height: '30px', clear: 'both' }}></div>
						<p className="fs-5 text-light">
						You can get in touch with me using the chatbox below. 
						Or you can find me on <Link href="https://www.twitter.com/IAmDominicT"><a className="text-decoration-none text-light fw-bold" target="_blank" rel="noreferrer">Twitter</a></Link>.
						</p>
					</div>
				</div>
			</div> { /* container: end */ }
		</div> { /* Intro: end */ }

		{ /* Main content */ }
		<div className="container-md fs-5 mt-5">
			<div className="row justify-content-center px-2">
				<div className="col-12 col-md-9">
					<iframe src="https://9awlmhhepcj.typeform.com/c/Y0iCQpBF" title="Empower Your Run Contact Chatbot" width="100%" height="400" className="bg-secondary"></iframe>
				</div> { /* col: end */ }
			</div> { /* row: end */ }	
		</div> { /* Main content: end */ }

	</>)
}
