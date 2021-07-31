import Head from 'next/head';
import Link from 'next/link';


export default function PrivacyPolicy() {
	return (<>
		<Head>
			<title>Disclaimer - Empower Your Run</title>
			<meta name="description" content="EmpowerYourRun.com participates in various affiliate programs, and I sometimes get a commission through purchases made through my links." />
		</Head>

		{ /* Intro */ }
		<div className="intro bg-primary py-5">
			<div className="container">
				<div className="row justify-content-center text-center">
					<div className="col-12 col-md-8">
						<h1 className="text-light">
							<div className="display-3 fw-bold">Earning Disclaimer</div>
						</h1>
					</div>
				</div>
			</div> { /* container: end */ }
		</div> { /* Intro: end */ }

		{ /* Main content */ }
		<div className="container-md fs-5 mt-5">
			<div className="row justify-content-center px-2">
				<div className="col-12 col-md-9">
					<h2 className="fw-bold">Amazon Associates Program</h2>
					<div style={{ height: '15px', clear: 'both' }}></div>
					<p><Link href="/"><a className="text-decoration-none"> EmpowerYourRun</a></Link> is a participant in the 
					<Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank"> Amazon</a></Link> Services LLC Associates Program,
					an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to 
					<Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank"> Amazon.com.</a></Link></p>

					<p><em>* Amazon and the Amazon logo are trademarks of Amazon.com, Inc., or its affiliates</em></p>

					<div style={{ height: '40px', clear: 'both' }}></div>

					<h2 className="fw-bold">Other Programs</h2>
					<div style={{ height: '15px', clear: 'both' }}></div>
					<p>Additionally, <Link href="/"><a className="text-decoration-none"> EmpowerYourRun</a></Link> participates in various other affiliate programs, 
					and I sometimes get a commission through purchases made through my links.</p>

					<p>My advertising partners include:</p>
					<ul className="d-grid gap-2">
						<li>Google Adsense</li>
						<li>Commission Junction</li>
						<li>Clickbank</li>
						<li>Amazon Associates</li>
					</ul>
				</div> { /* col: end */ }
			</div> { /* row: end */ }	
		</div> { /* Main content: end */ }

	</>)
}
