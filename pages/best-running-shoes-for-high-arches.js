import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';


export async function getStaticProps() {
	const res = await fetch(process.env.ARTICLES_ENDPOINT);
	const data = await res.json();


	return {
		props: { data }
	}

}


export default function Article({ data }) {
	const postId = 46;
	const infoData = data[postId];

	const topicSlugs = ['training', 'injuries', 'running-equipment', 'frequently-asked-questions'];
	const topics = ['TRAINING', 'INJURIES', 'RUNNING EQUIPMENT', 'FAQs'];
	const formattedFeaturedImageLink = infoData.feature_image.split('^'); 

	return (<>
		<Head>
			<title>{ infoData.title }</title>
			<meta name="description" content={ infoData.meta_description } />
		</Head>

		{ /* Article Info */ }
		<div className="artilce-info py-4 bg-primary">
			<div className="container-lg text-center text-light">
				<div className="row justify-content-center">
					<div className="col-md-8">
						<Image src={ formattedFeaturedImageLink[0] } width={ formattedFeaturedImageLink[1] } height={ formattedFeaturedImageLink[2] } alt={ infoData.title } layout='intrinsic' />
						<p className="mt-5"><Link href={ '/' +  topicSlugs[infoData.topic] }><a className="text-decoration-none link-light fw-bold">{ topics[infoData.topic] }</a></Link></p>
						<h1 className="fw-bold">{ infoData.title }</h1>	
						<div className="mt-4 mb-md-4">
							<Link href={ infoData.author_link }><a className="text-decoration-none link-light">{ infoData.author_name }</a></Link>
							<span className="px-3">&#9642;</span>
							<span>{ infoData.min_read } min read</span>
						</div>
						<p className="mt-3 fst-italic fw-lighter text-white-50">EmpowerYourRun may earn a small commission from affiliate links in this article. <Link href="/disclaimer"><a className="text-decoration-none text-warning text-decoration-underline" target="_blank" rel="noopener noreferrer">Learn more</a></Link></p>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Info: end */ }


		{ /* Article Content */ }
		<div className="artilce-content mt-4 py-4 fs-5">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-lg-10 col-xl-8 col-xxl-7">
						<p>Everyone who suffers from the agonizing pain that <Link href="https://www.verywellhealth.com/high-arched-feet-1337684"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">high arches</a></Link> bring about knows how difficult and exhausting it can be to perform everyday activities.</p>
						<p>Even a regular walk can turn into a sort of a survival mission when you&rsquo;re in pain.</p>
						<p>Not to mention those of you who are physically active, or want to become.</p>
						<p>Running, going to a gym, jogging?</p>
						<p>Man, it sometimes seems as if they are abstract nouns.</p>
						<p>What you need in order for these activities to become a part of your daily routine are the best running shoes for high arches.</p>
						<p>I rated and reviewed the models that work best for alleviating the pain, improving ankle stability, and providing you with more than needed support.</p>
						<p>By the way, check out my article on <Link href="/how-to-fix-high-arches"><a className="text-decoration-none">how to fix high arches</a></Link> for other useful advice about this condition and possible treatment!</p>

						<p>&nbsp;</p>
						<h2 className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>The 9 Best Running Shoes For High Arches</h2>

						{ /* product card */}
						<p>&nbsp;</p>

						<div className="card shadow px-3 bg-body rounded mb-4">
							<div className="d-flex justify-content-center mb-3">
							    <Image
								src="https://m.media-amazon.com/images/I/81FPYUnB7eL._AC_UX575_.jpg" 
								width="575" 
								height="291"
								alt="Brooks Ghost 12 Running Shoe" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="brooks-ghost-12-running-shoe" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/Brooks-Mens-Ghost-Navy-Water/dp/B07L6KV112?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="Brooks Ghost 12 Running Shoe" 
										alt="Brooks Ghost 12 Running Shoe"
									>
									Brooks Ghost 12 Running Shoe
									</a>
								</Link>
							</h2>
							<p>For men who are ready to ditch away the pain without giving up on their regular running activities, the Brooks Ghost 12 running shoe is arguably the best choice.</p>
							<p>It is a widely acclaimed and best-selling model, so I had to try them out and see whether they meet the high expectations.</p>
							<p>I am pleased to report that they earned the highest grade in all departments.</p>
							<p>Brooks made sure to improve everything that this shoe&rsquo;s predecessor, Ghost 11, did not provide.</p>
							<p>For instance, this model features an upgraded modernized look signed as 3D Fit Print.</p>
							<p>While the newly generated breathable mesh looks great on itself, there are as many as fourteen color variants of the shoe for each style and outfit with the attractive rubberish Brooks logo.</p>
							<p>The segmented crash pad enables a smooth heel-to-toe transition, which is crucial for pain relief when you have high arches.</p>
							<p>Paired with BioMoGo DNA and DNA Loft cushioning, this is also one of the most comfortable shoes that I have tried out.</p>
							<p>They simply feel like walking on clouds.</p>
							<p>The only drawback is that these shoes are not water-repellent or waterproof, but this is expected, considering how lightweight they are.</p>
							<p>It does not mean, though, that they are not durable - they will endure a lot of running.</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Excellent support for high arches</li>
											<li className="list-group-item">Nice shock absorption</li>
											<li className="list-group-item">100% breathable</li>
											<li className="list-group-item">Great fit</li>
											<li className="list-group-item">Compatible with most insoles</li>
											<li className="list-group-item">Lightweight</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">The shoe is not waterproof</li>
											<li className="list-group-item">A bit pricey (albeit well worth the price)</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/Brooks-Mens-Ghost-Navy-Water/dp/B07L6KV112?tag=" + infoData.amz_tag }>
									<a className="btn btn-lg btn-warning text-light fw-bold fs-2" target="_blank" rel="nofollow noopener" title="See Price on Amazon" alt="See Price on Amazon">SEE PRICE ON AMAZON</a>
								</Link>
							</div>
						</div> 

						<p>&nbsp;</p>
						{ /* product card: end */}


						{ /* product card */}
						<p>&nbsp;</p>

						<div className="card shadow px-3 bg-body rounded mb-4">
							<div className="d-flex justify-content-center mb-3">
							    <Image
								src="https://m.media-amazon.com/images/I/81Iln2jhfmL._AC_UX575_.jpg" 
								width="575" 
								height="310"
								alt="Nike Air Zoom Pegasus 36 Running Shoes" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="nike-air-zoom-pegasus-36-running-shoes" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/Nike-Pegasus-Womens-Running-White-Thunder/dp/B07H97D1XM?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="Nike Air Zoom Pegasus 36 Running Shoes" 
										alt="Nike Air Zoom Pegasus 36 Running Shoes"
									>
									Nike Air Zoom Pegasus 36 Running Shoes
									</a>
								</Link>
							</h2>
							<p>The best take from the prestigious brand such as Nike certainly deserves a place on my top list.</p>
							<p>It&rsquo;s a fact: It is not as budget-friendly as some other picks, but its combination of durability and performance compensates for that.</p>
							<p>Another feature that has been smartly implemented in the manufacturing of these sneakers is the Nike Flywire, a thread composed of Vectran or nylon that is used in the upper part of the shoe.</p>
							<p>It minimizes the weight of the shoe while maximizing the support that it delivers, and that is precisely what you want of a good running shoe for high arches.</p>
							<p>Also, there is a metallic thread, which adds to the unique and exciting design of this shoe.</p>
							<p>You will really feel a difference when you&rsquo;re running with Pegasus 36, being able to wear them for hours without any discomfort or foot ache that may arise because of high arches.</p>
							<p>Not only are they lightweight, stretchy, and comfortable, but the rubber sole and upper material are waterproof, meaning you can go for a jog even when it&rsquo;s raining.</p>
							<p>Speaking of the sole, it is around 3cm high, which is an adequate height for arch support.</p>
							<p>Do not hesitate - buy yourself a pair of these mesh and rubber sneakers and enjoy the pain-free running experience!</p>
							<p>Lastly, I want to note that the fit is a bit tight, so keep that in mind and perhaps up 1/2 the size.</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Very cushy</li>
											<li className="list-group-item">Nike Flywire technology</li>
											<li className="list-group-item">Easily removable insole</li>
											<li className="list-group-item">Great arch support</li>
											<li className="list-group-item">Waterproof</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">They are a bit squeaky until you wear them a couple of times</li>
											<li className="list-group-item">Not the typical fit (get ½ size larger)</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/Nike-Pegasus-Womens-Running-White-Thunder/dp/B07H97D1XM?tag=" + infoData.amz_tag }>
									<a className="btn btn-lg btn-warning text-light fw-bold fs-2" target="_blank" rel="nofollow noopener" title="See Price on Amazon" alt="See Price on Amazon">SEE PRICE ON AMAZON</a>
								</Link>
							</div>
						</div> 

						<p>&nbsp;</p>
						{ /* product card: end */}


						{ /* product card */}
						<p>&nbsp;</p>

						<div className="card shadow px-3 bg-body rounded mb-4">
							<div className="d-flex justify-content-center mb-3">
							    <Image
								src="https://m.media-amazon.com/images/I/71fT5XVQCgL._AC_UX575_.jpg" 
								width="575" 
								height="266"
								alt="ASICS Gel-Venture 7" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="asics-gel-venture-7" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/ASICS-Gel-Venture-Running-Shoes-Metropolis/dp/B07JHNTWKJ?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="ASICS Gel-Venture 7" 
										alt="ASICS Gel-Venture 7"
									>
									ASICS Gel-Venture 7
									</a>
								</Link>
							</h2>
							<p>Running the trails of the great outdoors, yet you feel like you cannot simply find the right running shoes that rise to the occasion?</p>
							<p>That is about to change, and I know just the right choice for you &ndash; Asics running shoes.</p>
							<p>The Gel-Venture line is tailored to fit the preferences of the moderate trail runners at the shoe is designed to meet the standards.</p>
							<p>A solid, safe &amp; tried budget option, the Asics Gel-Venture running shoes are improved by the GEL technology in order to enhance shock absorption and the Ortholite sock liner for extra cushioning.</p>
							<p>In my humble opinion, the greatest strengths of these shoes are that they are comfortable, well designed, and affordable.</p>
							<p>They provide you with consistency no matter whether you are running on smooth, paved terrain or a more difficult one.</p>
							<p>Implemented to increase the quality of the running shoes, the EVA midsole greatly improves your ability to sustain fatigue as your feet will not feel the full effects of the challenging terrain.</p>
							<p>You&rsquo;ll find these shoes easy to look after, specifically because they employ breathable technologies in order to minimize the development of odors and sweat.</p>
							<p>Those of you that passionately tackle difficult terrains daily in these shoes won&rsquo;t feel the impact either, which is a point for durability!</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Comfortable and mold after your feet</li>
											<li className="list-group-item">Gel and EVA technology</li>
											<li className="list-group-item">Good for outdoor, challenging terrain</li>
											<li className="list-group-item">Great support</li>
											<li className="list-group-item">Budget-friendly</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Can feel a bit “heavy” on your feet compared to some other choices</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/ASICS-Gel-Venture-Running-Shoes-Metropolis/dp/B07JHNTWKJ?tag=" + infoData.amz_tag }>
									<a className="btn btn-lg btn-warning text-light fw-bold fs-2" target="_blank" rel="nofollow noopener" title="See Price on Amazon" alt="See Price on Amazon">SEE PRICE ON AMAZON</a>
								</Link>
							</div>
						</div> 

						<p>&nbsp;</p>
						{ /* product card: end */}


						{ /* product card */}
						<p>&nbsp;</p>

						<div className="card shadow px-3 bg-body rounded mb-4">
							<div className="d-flex justify-content-center mb-3">
							    <Image
								src="https://m.media-amazon.com/images/I/81NhQ9TNF5L._AC_UX575_.jpg" 
								width="575" 
								height="337"
								alt="Salomon X-Mission 3 Trail Running Shoes" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="salomon-x-mission-3-trail-running-shoes" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/Salomon-Womens-X-Mission-Running-Lagoon/dp/B073JZ72LD?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="Salomon X-Mission 3 Trail Running Shoes" 
										alt="Salomon X-Mission 3 Trail Running Shoes"
									>
									Salomon X-Mission 3 Trail Running Shoes
									</a>
								</Link>
							</h2>
							<p>When it comes to selecting the right running shoes in the women&rsquo;s area, there seems to be a trend of bold, attractive designs with little substance behind the scenes to support the extravagant, luxurious designs.</p>
							<p>I was determined to find a shoe that can both look good and be good, which is precisely why I&rsquo;ve selected Salomon X-Mission 3 as my pick.</p>
							<p>The vivid colors and their unique design are aesthetically pleasing to the eye, but that is simply not where all the qualities stop.</p>
							<p>The Salomon X-Mission 3 feels light on the feet but has an impressive grip because they are essentially trail running shoes.</p>
							<p>If blisters or feeling sore is something that is seen as typical after a run, you can say goodbye to that because these are breathable shoes.</p>
							<p>The lacing system isn&rsquo;t traditional and might come as a bit of a shock to those who prefer the classic lacing.</p>
							<p>However, the QuickLace design is fast and painless and provides you with a secure fit in a few simplistic pulls.</p>
							<p>The only downside of these running shoes is that they aren&rsquo;t waterproof, which might mean that you will have to skip a rainy hiking/running day.</p>
							<p>All in all, Salomon X-Mission 3 checks all the boxes that women&rsquo;s running shoes commonly fail to do.</p>
							<p>They are breathable, comfortable, and they provide great support for your feet on a daily basis.</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Tailored EVA midsoles</li>
											<li className="list-group-item">SensiFit with QuickLace to ensure a secure fit</li>
											<li className="list-group-item">Breathable & light</li>
											<li className="list-group-item">Durable with a reliable grip</li>
											<li className="list-group-item">Suitable for trail running</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Not waterproof</li>
											<li className="list-group-item">The laces can damage the tongue if pulled too tightly</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/Salomon-Womens-X-Mission-Running-Lagoon/dp/B073JZ72LD?tag=" + infoData.amz_tag }>
									<a className="btn btn-lg btn-warning text-light fw-bold fs-2" target="_blank" rel="nofollow noopener" title="See Price on Amazon" alt="See Price on Amazon">SEE PRICE ON AMAZON</a>
								</Link>
							</div>
						</div> 

						<p>&nbsp;</p>
						{ /* product card: end */}


						{ /* product card */}
						<p>&nbsp;</p>

						<div className="card shadow px-3 bg-body rounded mb-4">
							<div className="d-flex justify-content-center mb-3">
							    <Image
								src="https://m.media-amazon.com/images/I/61YI3M71uYL._AC_UX575_.jpg" 
								width="575" 
								height="314"
								alt="New Balance Fresh Foam 1080 V9 Running Shoe" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="new-balance-fresh-foam-1080-v9-running-shoe" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/New-Balance-Womens-1080v9-Running/dp/B07B417K38?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="New Balance Fresh Foam 1080 V9 Running Shoe" 
										alt="New Balance Fresh Foam 1080 V9 Running Shoe"
									>
									New Balance Fresh Foam 1080 V9 Running Shoe
									</a>
								</Link>
							</h2>
							<p>I knew that an acclaimed running shoe brand like New Balance surely had to have a high-quality running shoe for high arches that deserved a place on my list.</p>
							<p>However, one of the most common problems that frequently surface when it comes to buying brand running shoes is that they are grossly overpriced and that customers are often left with the feeling that there could&rsquo;ve been more.</p>
							<p>When New Balance 1080v9 showed up on the market with their sleek and eye-catching design and attractive qualities, I knew I had to test them.</p>
							<p>Comparatively, this shoe is far lighter than its predecessor, with visible improvements in the midsole and the outsole area.</p>
							<p>The Fresh Foam that they previously implemented became notorious for its failed attempt to raise to the reputation.</p>
							<p>However, it seems that they have revised it for the V9s.</p>
							<p>What I liked the most about this pair is the fact that they are designed to shine in the long runs, and that is precisely what they do.</p>
							<p>After hours of wearing, they will still be comfortable, and the breathable engineered mesh without any sew-material application ensures that your feet stay dry.</p>
							<p>The rubber sole, 8mm drop, and Ultra Heel are there to support your ankles, which makes these a perfect shoe for high arches.</p>
							<p>Lastly, do I even need to explain why it is favorable that these sneakers feature an Ortholite sock liner? This extra layer of foam is a synonym for comfort.</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Great padding</li>
											<li className="list-group-item">Regular laces</li>
											<li className="list-group-item">Lightweight</li>
											<li className="list-group-item">Excellent for gym workouts</li>
											<li className="list-group-item">Ultra Heel for support</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Limited color options</li>
											<li className="list-group-item">Not the best model if you’re into fast running</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/New-Balance-Womens-1080v9-Running/dp/B07B417K38?tag=" + infoData.amz_tag }>
									<a className="btn btn-lg btn-warning text-light fw-bold fs-2" target="_blank" rel="nofollow noopener" title="See Price on Amazon" alt="See Price on Amazon">SEE PRICE ON AMAZON</a>
								</Link>
							</div>
						</div> 

						<p>&nbsp;</p>
						{ /* product card: end */}


						{ /* product card */}
						<p>&nbsp;</p>

						<div className="card shadow px-3 bg-body rounded mb-4">
							<div className="d-flex justify-content-center mb-3">
							    <Image
								src="https://m.media-amazon.com/images/I/51T1DNlgXtL._AC_UY695_.jpg" 
								width="546" 
								height="235"
								alt="HOKA ONE ONE Clifton 6 Running Shoe" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="hoka-one-one-clifton-6-running-shoe" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/HOKA-ONE-Clifton-Black-Running/dp/B07L5PWVBK?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="HOKA ONE ONE Clifton 6 Running Shoe" 
										alt="HOKA ONE ONE Clifton 6 Running Shoe"
									>
									HOKA ONE ONE Clifton 6 Running Shoe
									</a>
								</Link>
							</h2>
							<p>We&rsquo;ve come to a pair of running shoes that are designed especially for high arches and similar conditions - Hoka One One by Clifton.</p>
							<p>As suggested, this is the 6th version of this shoe, and each time it has been upgraded more and more so that this one offers almost pure perfection.</p>
							<p>They have upgraded the materials in the upper part of the shoe so that they are softer and more lightweight, and they have redesigned the whole fit a bit.</p>
							<p>At times, you can barely tell there is any difference compared to a previous version of a shoe, but here you really feel the improvement, so kudos to Clifton for that.</p>
							<p>Besides the fact that they feel lighter, the midsole EVA foam is upgraded and utilized so that it provides excellent arch support, with a 5mm heel-to-toe drop.</p>
							<p>In that way, you won&rsquo;t feel any pressure while you&rsquo;re running.</p>
							<p>Unlike last year&rsquo;s model, the embroidery reinforcement guarantees durability, and it substitutes the 3D Puff Print technology.</p>
							<p>I liked this one better because you can really see how strong the stitching is.</p>
							<p>Strategically, the outer part of the sole features lightweight yet durable rubber for no-slip and longevity of the shoe.</p>
							<p>A unique thing about Hoka One One 6 is its shape.</p>
							<p>The sneakers are designed in such a way that you may feel as if you&rsquo;re slightly leaned forward when standing still, but when you&rsquo;re running, this feels perfectly natural.</p>
							<p>Once you get used to this shape, you realize that it only helps you with high arches!</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">High-quality, durable mesh</li>
											<li className="list-group-item">Comfortable</li>
											<li className="list-group-item">Lightweight</li>
											<li className="list-group-item">Ergonomic shape</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">It may take a while to get used to the unique shape of the shoe</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/HOKA-ONE-Clifton-Black-Running/dp/B07L5PWVBK?tag=" + infoData.amz_tag }>
									<a className="btn btn-lg btn-warning text-light fw-bold fs-2" target="_blank" rel="nofollow noopener" title="See Price on Amazon" alt="See Price on Amazon">SEE PRICE ON AMAZON</a>
								</Link>
							</div>
						</div> 

						<p>&nbsp;</p>
						{ /* product card: end */}


						{ /* product card */}
						<p>&nbsp;</p>

						<div className="card shadow px-3 bg-body rounded mb-4">
							<div className="d-flex justify-content-center mb-3">
							    <Image
								src="https://m.media-amazon.com/images/I/61CeYJP5IuL._AC_UX575_.jpg" 
								width="575" 
								height="397"
								alt="Saucony Ride ISO" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="saucony-ride-iso" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/Saucony-Ride-Women-White-Blue/dp/B07G4FFYLY?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="Saucony Ride ISO" 
										alt="Saucony Ride ISO"
									>
									Saucony Ride ISO
									</a>
								</Link>
							</h2>
							<p>Whereas there is a vast difference between the previous model that I reviewed and its predecessor, this is not the case with Saucony Ride ISO and their forerunner, Ride 10.</p>
							<p>Similar technologies were implemented in the design, and I&rsquo;ll get to them in a few seconds.</p>
							<p>On the other hand, there is a noticeable difference in the choice of materials that earned one, and not the other, the place on my list.</p>
							<p>Namely, the ISOs feature engineered mesh for a dynamic and lightweight feel, and they are much more lightweight.</p>
							<p>Next, the IsoFit and FormFit technologies ensure a perfect fit of the shoe.</p>
							<p>It aligns with your foot as if it was made for you specifically!</p>
							<p>As for the cushioning, there is the EVERun layer in the upper sole and PWR foam in the midsole that provides soft and high arch-friendly support for your foot.</p>
							<p>It features a regular lace-up closure, though the laces are a bit wider than the regular ones, and they also feel sturdier. Bonus points for that!</p>
							<p>They have a wider toe box than some other models, which can be both a pro and a con.</p>
							<p>I liked it because it reduces the pressure on your foot even more.</p>
							<p>No worries - even though it might feel a bit odd, they are tight enough to provide excellent support.</p>
							<p>Thanks to these running shoes, women no longer have to choose between a low price and functionality, as they are also budget-friendly.</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">8mm drop for smooth transitioning between the steps</li>
											<li className="list-group-item">High-quality laces</li>
											<li className="list-group-item">Flexible</li>
											<li className="list-group-item">Excellent fit</li>
											<li className="list-group-item">Great value for the price</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Made only for road running; search elsewhere if you need a pair for trail running</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/Saucony-Ride-Women-White-Blue/dp/B07G4FFYLY?tag=" + infoData.amz_tag }>
									<a className="btn btn-lg btn-warning text-light fw-bold fs-2" target="_blank" rel="nofollow noopener" title="See Price on Amazon" alt="See Price on Amazon">SEE PRICE ON AMAZON</a>
								</Link>
							</div>
						</div> 

						<p>&nbsp;</p>
						{ /* product card: end */}


						{ /* product card */}
						<p>&nbsp;</p>

						<div className="card shadow px-3 bg-body rounded mb-4">
							<div className="d-flex justify-content-center mb-3">
							    <Image
								src="https://m.media-amazon.com/images/I/71PWrqG78IS._AC_UX575_.jpg" 
								width="575" 
								height="275"
								alt="Brooks Glycerin 17" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="brooks-glycerin-17" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/Brooks-Womens-Glycerin-17-Purple/dp/B07D3YR15Z?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="Brooks Glycerin 17" 
										alt="Brooks Glycerin 17"
									>
									Brooks Glycerin 17
									</a>
								</Link>
							</h2>
							<p>Brooks Women&rsquo;s Glycerin 17 running shoe packs a supreme softness, high-quality cushioning, flexibility, and style.</p>
							<p>Their slogan &ldquo;run happy&rdquo; comes to the surface, especially if you&rsquo;re having a hard time finding the right running shoes for high arches.</p>
							<p>These offer more comfortable cushioning than most with DNA Loft technology without losing responsiveness while you&rsquo;re running.</p>
							<p>Additionally, the DNA Loft smooth transition zone is engineered for the most effortless heel-to-toe transition, which is of considerable importance when you suffer from high arches.</p>
							<p>What I also liked is how padding is implemented in the tongue as well, so that the whole shoe protects and feels incredibly soft.</p>
							<p>However, this also means that the toe box is a bit narrower, so I suggest going for a larger size than usual.</p>
							<p>Moreover, the plush fit with the flexible 3D FitPrint mesh stretches and keeps your feet dry with its sweat-absorbing technology.</p>
							<p>The midsole drop is 10mm, and they weigh only 260g!</p>
							<p>Both of these characteristics prove that Glycerin 17 is an ideal pair of running shoes for high arches, along with the fact that they actively prevent underpronation that often occurs with the rigidity of feet with high arches.</p>
							<p>Sadly, it doesn&rsquo;t have a lot of color options to choose from, but it has some indeed vivid and attractive ones, such as Fiery Coral and Aqua Foam.</p>
							<p>They are compatible with the most types of insoles, but with the existing cushion, you probably won&rsquo;t need any.</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Soft and protective cushioning</li>
											<li className="list-group-item">Modern design</li>
											<li className="list-group-item">Lightweight</li>
											<li className="list-group-item">Easy to wash</li>
											<li className="list-group-item">Distributes your weight evenly</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Laces feel a bit cheap</li>
											<li className="list-group-item">Narrow toe box compared to some other choices</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/Brooks-Womens-Glycerin-17-Purple/dp/B07D3YR15Z?tag=" + infoData.amz_tag }>
									<a className="btn btn-lg btn-warning text-light fw-bold fs-2" target="_blank" rel="nofollow noopener" title="See Price on Amazon" alt="See Price on Amazon">SEE PRICE ON AMAZON</a>
								</Link>
							</div>
						</div> 

						<p>&nbsp;</p>
						{ /* product card: end */}


						{ /* product card */}
						<p>&nbsp;</p>

						<div className="card shadow px-3 bg-body rounded mb-4">
							<div className="d-flex justify-content-center mb-3">
							    <Image
								src="https://m.media-amazon.com/images/I/71OqVobNiqL._AC_UX575_.jpg" 
								width="575" 
								height="337"
								alt="ASICS GEL-Nimbus 20 Running Shoe" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="asics-gel-nimbus-20-running-shoe" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/ASICS-Womens-Gel-Nimbus-Running-indigo/dp/B071S6KXVN?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="ASICS GEL-Nimbus 20 Running Shoe" 
										alt="ASICS GEL-Nimbus 20 Running Shoe"
									>
									ASICS GEL-Nimbus 20 Running Shoe
									</a>
								</Link>
							</h2>
							<p>This is the final model that I want to present in today&rsquo;s journey to the best running shoes for high arches, and second from Asics that slowly but steadily builds its way to the throne of athletic footwear.</p>
							<p>On the running front, it&rsquo;s got everything you want: a breathable combination of textile and synthetic with a rubber sole that is flexible for easy and swift movement.</p>
							<p>The multidirectional stretch mesh with stretch reinforcement adapts to your foot, creating an incredible fit, almost glove-like.</p>
							<p>But what is more important is our focus today, their success in handling high arches and similar conditions.</p>
							<p>This model makes use of the FlyteFoam technology that provides exceptional softness and cushioning due to the organic fibers, but it does not lack in bounce and responsiveness either.</p>
							<p>The FluidRide midsole adds to the smooth transition from heel-to-toe and additionally reduces the weight and pressure on your foot.</p>
							<p>In fact, the whole construction is ergonomic.</p>
							<p>The exoskeletal heel counter enhances the support so that the outer side of the heel hits the ground at an increased angle with no pronation.</p>
							<p>Besides, 25mm high heel and 12mm high forefoot create a perfect ratio of carefully engineered shape and drop.</p>
							<p>You won&rsquo;t be paying such a steep price that you are with some other running shoes, and more importantly, the trade-offs that you make are minimal.</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Durable rubber</li>
											<li className="list-group-item">FlyteFoam & FluidRide cushioning</li>
											<li className="list-group-item">Come in as many as 31 colors</li>
											<li className="list-group-item">High-quality cooling system</li>
											<li className="list-group-item">Excellent stability & support</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">These are only for hard surfaces (street, athletic tracks, etc.)</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/ASICS-Womens-Gel-Nimbus-Running-indigo/dp/B071S6KXVN?tag=" + infoData.amz_tag }>
									<a className="btn btn-lg btn-warning text-light fw-bold fs-2" target="_blank" rel="nofollow noopener" title="See Price on Amazon" alt="See Price on Amazon">SEE PRICE ON AMAZON</a>
								</Link>
							</div>
						</div> 

						<p>&nbsp;</p>
						{ /* product card: end */}


						{ /* The Final Verdict */ }
						<h2 id="the-final-verdict" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>The Final Verdict</h2>
						<p>Based on their comfort, drop, flexibility, and durability, these were the nine best running shoes for high arches.</p>
						<p>You may ask: Why not ten? Why not a nice round number?</p>
						<p>Well, simply put - only these nine running shoes fulfilled my criteria for high arches.</p>
						<p>I always stay committed and include only the best choices out there on my list.</p>
						<p>All that is left is to proclaim the unrivaled running shoes for high arches -  <Link href="#brooks-ghost-12-running-shoe"><a className="text-decoration-none">Brooks Ghost 12</a></Link> for men and <Link href="#nike-air-zoom-pegasus-36-running-shoes"><a className="text-decoration-none">Nike Air Zoom Pegasus 36</a></Link> for ladies.</p>
						<p>Say goodbye to the acute pain and welcome pain-free training and running with these!</p>
						{ /* The Final Verdict: end */ }

						<p>&nbsp;</p>
						<p className="border-bottom"></p>
						<p>&nbsp;</p>

						{ /* Informative Section */ }
						<h2 id="factors-to-consider-when-buying-running-shoes-for-high-arches" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Factors to Consider When Buying Running Shoes for High Arches</h2>
						<p>Buying running shoes for high arches requires some prior knowledge because you&rsquo;re not just buying a pair of shoes that will look nice - you are buying something that will help you stay in shape, keep healthy, and reduce the pain that cavus foot can cause.</p>
						<p>In order to aid you, I constructed a list of the factors that you should take into account.</p>

						<h3 className="mt-5">Comfort</h3>
						<p>Again, &ldquo;comfort&rdquo; does not only mean comfort here.</p>
						<p>Instead, it means a comfortable shoe that is beneficial for high arches.</p>
						<p>As your foot curves upward, the position and application of the cushioning in that part of your foot are the most important.</p>
						<p>The cushioning inside the shoe should be implemented so that it provides adequate support for high arches because that is the primary factor that reduces the pain while you&rsquo;re running.</p>
						<p>Another option is that you get a shoe with removable insoles, which enables you to insert your custom <Link href="https://www.webmd.com/pain-management/what-are-shoe-orthotics#2"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">orthotics</a></Link>.</p>
						<p>The toe box is also relevant for the comfort of your shoe.</p>
						<p>There must be enough room for your toes to move a bit, but you don&rsquo;t want to get an option that has too wide toe box, as that can result in injuries.</p>
						<p>Finally, the most comfortable shoe simply needs to be breathable.</p>
						<p>While you&rsquo;re running, a lot of heat can accumulate, and you have to get shoes that have an efficient moisture release or prevention system.</p>
						<p>This is usually achieved by combining lightweight materials, most commonly <Link href="https://sewport.com/fabrics-directory/mesh-fabric"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">mesh</a></Link>.</p>

						<h3 className="mt-5">Right Fit</h3>
						<p>Finding the right fit for you sometimes feels like finding the holy grail, I know, but this is crucial if you have high arches.</p>
						<p>You may be scared to shop online because you&rsquo;re afraid that you won&rsquo;t get the right fit.</p>
						<p>Believe me, I&rsquo;ve been there - but going to the store has not saved me!</p>
						<p>It is a daunting task to find running shoes that can fully adapt to your foot, with that many supposedly perfectly-fitting shoes, and models and brands vying at your attention.</p>
						<p>That&rsquo;s why it&rsquo;s even better to shop online - if you know where to search.</p>
						<p>I made sure to always emphasize if the fit is true to the size, or a bit narrow or wider for the nine of my picks today, so that you know which size to get.</p>
						<div className="alert alert-info" role="alert">
							<p><strong>TIP</strong></p>
							<p>If you&rsquo;re shopping on Amazon, you can see that all of the previous buyers have left a review regarding the size.</p>
							<p><strong>&ldquo;Fits as expected&rdquo;</strong> is what you&rsquo;re looking for!</p>
						</div>

						<h3 className="mt-5">Construction</h3>
						<p>Finally, you have to consider the three-soles:</p>

						<h4 className="mt-3">Outsole</h4>
						<p>This part makes direct contact with the ground, thus supporting the entire foot and your weight.</p>
						<p>It is necessary for it to be constructed of high-quality materials that will not damage over time, or lead to slipping and other injuries.</p>
						<p>As a general rule, for running shoes, outsoles are usually made of a kind of rubber.</p>

						<h4 className="mt-3">Midsole</h4>
						<p>I&rsquo;ve already mentioned the midsole; this is the part that provides cushioning, which is, as we&rsquo;ve learned, the vital when it comes to high arches.</p>
						<p>Different kinds of foam (such as EVA) are used in the midsole to provide adequate shock absorption and comfort.</p>

						<h4 className="mt-3">Insole</h4>
						<p>Insoles are important because they round up a perfect shoe.</p>
						<p>The right insole should be just enough firm to provide sufficient stability, but soft enough so that it does not come at the expense of comfort.</p>
						<p>I made sure that all of my picks meet these criteria.</p>

						<p>&nbsp;</p>
						<div className="alert alert-success" role="alert">
							<p>I hope that my article helped you make an informed decision about the product that is going to make your life easier and facilitate your athletic journey.</p>
						</div>
						{ /* Informative Section: end */ }
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
