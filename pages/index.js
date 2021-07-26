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


		{ /* Best Articles of The Blog */ }
		<div className="best-articles py-5 mt-5">
			<div className="container p-6">
				<div className="text-center">
					<h2 className="fw-bold">Best of Empower Your Run Blog</h2>
					<p className="lead">These few articles were handpicked from over 50 posts on my blog</p>
				</div>


				<div className="row justify-content-center justify-content-lg-between">
					<div className="col-10 col-md-4 col-lg-3">
						<div style={{ minHeight: '50px', clear: 'both'  }}></div>
						<h5 className="fw-bold">Flat Feet</h5>
						<ul className="list-unstyled d-grid gap-3">
							<li className="position-relative">
								<span style={{ position: 'absolute', top: 2, left: -22  }}><Image src="/star.png" width="16px" height="16px" alt="star" /></span>
								<Link href="/flat-feet-exercises">
									<a className="text-decoration-none">Flat Feet Exercises – The Ultimate Exercises To Fix Flat Feet!</a>
								</Link>
							</li>
							<li><Link href="/flat-feet-exercises"><a className="text-decoration-none">Flat Feet Exercises – The Ultimate Exercises To Fix Flat Feet!</a></Link></li>
							<li><Link href="/flat-feet-exercises"><a className="text-decoration-none">Flat Feet Exercises – The Ultimate Exercises To Fix Flat Feet!</a></Link></li>
							<li><Link href="/flat-feet-exercises"><a className="text-decoration-none">Flat Feet Exercises – The Ultimate Exercises To Fix Flat Feet!</a></Link></li>
						</ul>
					</div>

					<div className="col-10 col-md-4 col-lg-3">
						<div style={{ minHeight: '50px', clear: 'both'  }}></div>
						<h5 className="fw-bold">Flat Feet</h5>
						<ul className="list-unstyled d-grid gap-3">
							<li className="position-relative">
								<span style={{ position: 'absolute', top: 2, left: -22  }}><Image src="/star.png" width="16px" height="16px" alt="star" /></span>
								<Link href="/flat-feet-exercises">
									<a className="text-decoration-none">Flat Feet Exercises – The Ultimate Exercises To Fix Flat Feet!</a>
								</Link>
							</li>
							<li><Link href="/flat-feet-exercises"><a className="text-decoration-none">Flat Feet Exercises – The Ultimate Exercises To Fix Flat Feet!</a></Link></li>
							<li><Link href="/flat-feet-exercises"><a className="text-decoration-none">Flat Feet Exercises – The Ultimate Exercises To Fix Flat Feet!</a></Link></li>
							<li><Link href="/flat-feet-exercises"><a className="text-decoration-none">Flat Feet Exercises – The Ultimate Exercises To Fix Flat Feet!</a></Link></li>
							<li><Link href="/flat-feet-exercises"><a className="text-decoration-none">Flat Feet Exercises – The Ultimate Exercises To Fix Flat Feet!</a></Link></li>
						</ul>
					</div>

					<div className="col-10 col-md-4 col-lg-3">
						<div style={{ minHeight: '50px', clear: 'both'  }}></div>
						<h5 className="fw-bold">Flat Feet</h5>
						<ul className="list-unstyled d-grid gap-4">
							<li><Link href="/flat-feet-exercises"><a className="text-decoration-none">Flat Feet Exercises – The Ultimate Exercises To Fix Flat Feet!</a></Link></li>
							<li className="position-relative">
								<span style={{ position: 'absolute', top: 2, left: -22  }}><Image src="/star.png" width="16px" height="16px" alt="star" /></span>
								<Link href="/flat-feet-exercises">
									<a className="text-decoration-none">Flat Feet Exercises – The Ultimate Exercises To Fix Flat Feet!</a>
								</Link>
							</li>
							<li><Link href="/flat-feet-exercises"><a className="text-decoration-none">Flat Feet Exercises – The Ultimate Exercises To Fix Flat Feet!</a></Link></li>
							<li><Link href="/flat-feet-exercises"><a className="text-decoration-none">Flat Feet Exercises – The Ultimate Exercises To Fix Flat Feet!</a></Link></li>
							<li><Link href="/flat-feet-exercises"><a className="text-decoration-none">Flat Feet Exercises – The Ultimate Exercises To Fix Flat Feet!</a></Link></li>
							<li><Link href="/flat-feet-exercises"><a className="text-decoration-none">Flat Feet Exercises – The Ultimate Exercises To Fix Flat Feet!</a></Link></li>
						</ul>
					</div>

					<div className="w-100"></div>

					<div className="col-10 col-md-4 col-lg-3">
						<div style={{ minHeight: '50px', clear: 'both'  }}></div>
						<h5 className="fw-bold">Flat Feet</h5>
						<ul className="list-unstyled d-grid gap-3">
							<li><Link href="/flat-feet-exercises"><a className="text-decoration-none">Flat Feet Exercises – The Ultimate Exercises To Fix Flat Feet!</a></Link></li>
							<li><Link href="/flat-feet-exercises"><a className="text-decoration-none">Flat Feet Exercises – The Ultimate Exercises To Fix Flat Feet!</a></Link></li>
						</ul>
					</div>

					<div className="col-10 col-md-4 col-lg-3">
						<div style={{ minHeight: '50px', clear: 'both'  }}></div>
						<h5 className="fw-bold">Flat Feet</h5>
						<ul className="list-unstyled d-grid gap-3">
							<li className="position-relative">
								<span style={{ position: 'absolute', top: 2, left: -22  }}><Image src="/star.png" width="16px" height="16px" alt="star" /></span>
								<Link href="/flat-feet-exercises">
									<a className="text-decoration-none">Flat Feet Exercises – The Ultimate Exercises To Fix Flat Feet!</a>
								</Link>
							</li>
							<li><Link href="/flat-feet-exercises"><a className="text-decoration-none">Flat Feet Exercises – The Ultimate Exercises To Fix Flat Feet!</a></Link></li>
							<li><Link href="/flat-feet-exercises"><a className="text-decoration-none">Flat Feet Exercises – The Ultimate Exercises To Fix Flat Feet!</a></Link></li>
							<li><Link href="/flat-feet-exercises"><a className="text-decoration-none">Flat Feet Exercises – The Ultimate Exercises To Fix Flat Feet!</a></Link></li>
						</ul>
					</div>

					<div className="col-10 col-md-4 col-lg-3">
						<div style={{ minHeight: '50px', clear: 'both'  }}></div>
						<h5 className="fw-bold">Flat Feet</h5>
						<ul className="list-unstyled d-grid gap-3">
							<li className="position-relative">
								<span style={{ position: 'absolute', top: 2, left: -22  }}><Image src="/star.png" width="16px" height="16px" alt="star" /></span>
								<Link href="/flat-feet-exercises">
									<a className="text-decoration-none">Flat Feet Exercises – The Ultimate Exercises To Fix Flat Feet!</a>
								</Link>
							</li>
							<li><Link href="/flat-feet-exercises"><a className="text-decoration-none">Flat Feet Exercises – The Ultimate Exercises To Fix Flat Feet!</a></Link></li>
							<li><Link href="/flat-feet-exercises"><a className="text-decoration-none">Flat Feet Exercises – The Ultimate Exercises To Fix Flat Feet!</a></Link></li>
						</ul>
					</div>
	
		

				</div> { /* row: end */ }
			</div> { /* container: end */}
		</div> { /* Best Articles of The Blog: end */ }
	</>)
}
