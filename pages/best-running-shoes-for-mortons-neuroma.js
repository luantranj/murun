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
	const postId = 47;
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
						<p>When a sharp pain starts cutting your runs short &ndash; or prevents you from running altogether, as Morton&rsquo;s neuroma often does &ndash; you know it&rsquo;s time to do something about it.</p>
						<p>And while treatment is your best bet, it takes time.</p>
						<p>In the meantime, though, you should focus your attention on finding the best running shoes for Morton&rsquo;s neuroma!</p>
						<p>Let&rsquo;s check out what the market has to offer together!</p>

						<p>&nbsp;</p>

						<h2 className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Best Running Shoes For Morton’s Neuroma: Top 5 Models & In-Depth Reviews </h2>
						<p>Running with Morton&rsquo;s neuroma doesn&rsquo;t have to end up being &quot;mission impossible&quot; &ndash; as long as you have the right shoes for the job, you&rsquo;re pretty much good to go.</p>
						<p>On that note, here are my in-depth reviews of the best running shoes for Morton&rsquo;s neuroma currently available on the market!</p>

						{ /* product card */}
						<p>&nbsp;</p>

						<div className="card shadow px-3 bg-body rounded mb-4">
							<div className="d-flex justify-content-center mb-3">
							    <Image
								src="https://m.media-amazon.com/images/I/91QiINP1SeL._AC_UX575_.jpg" 
								width="575" 
								height="299"
								alt="Altra Mens Torin 3 Athletic Shoe" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="altra-mens-torin-3-athletic-shoe" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/dp/B01MT1KMTW/?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="Altra Mens Torin 3 Athletic Shoe" 
										alt="Altra Mens Torin 3 Athletic Shoe"
									>
									Altra Men&apos;s Torin 3 Athletic Shoe
									</a>
								</Link>
							</h2>
							<p>What better way to show you what the market has to offer when it comes to the best running shoes for Morton&rsquo;s neuroma than with one of my personal favorites, right?</p>
							<p>Anyway, if you owned a pair of Altra athletic shoes in the past, you already know what to expect regarding their overall feel and comfort.</p>
							<p>The zero-drop platform, the responsive, lightweight cushioning, and the roomy FootShape toe box are all there to keep you comfortable, and to encourage natural foot positioning and proper running form.</p>
							<p>There&rsquo;s one thing that&rsquo;s new and improved, though &ndash; the FootPod outsoles allow for natural flexibility, rather than a constricted feel.</p>
							<p>However, they are known for causing an occasional blister or two.</p>
							<p>It&rsquo;s not that the shoes are uncomfortable &ndash; because they most certainly are &ndash; but I think it&rsquo;s all that extra room in the toe box that&rsquo;s causing all the commotion.</p>
							<p>If you want to play it safe, stick to short-distance runs with these.</p>
							<p>Marathons are out of the question &ndash; unless you want to end up with blisters, that is.</p>
							<p>The sizes run small, though, so be sure to take that into account.</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">An ample amount of cushioning</li>
											<li className="list-group-item">They feature a fully cushioned zero-drop platform</li>
											<li className="list-group-item">The FootShape toe box is quite roomy</li>
											<li className="list-group-item">They have a responsive, lightweight feel</li>
											<li className="list-group-item">They help maintain natural foot positioning</li>
											<li className="list-group-item">Reasonably priced</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">It may cause blisters during longer runs</li>
											<li className="list-group-item">The sizes run small</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/dp/B01MT1KMTW/?tag=" + infoData.amz_tag }>
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
								src="https://m.media-amazon.com/images/I/81-aAybJ4JL._AC_UX575_.jpg" 
								width="575" 
								height="352"
								alt="Brooks Womens Ghost 9" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="brooks-womens-ghost-9" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/Brooks-Womens-Azalea-Yellow-Running/dp/B017N00JZ0/?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="Brooks Womens Ghost 9" 
										alt="Brooks Womens Ghost 9"
									>
									Brooks Womens Ghost 9
									</a>
								</Link>
							</h2>
							<p>Okay, here&rsquo;s one for my female readers &ndash; and fellow runners &ndash; out there:</p>
							<p>The Brooks Ghost 9, one of the best running shoes for Morton&rsquo;s neuroma &ndash; as far as women&rsquo;s athletic shoes go, that is.</p>
							<p>Now, I couldn&rsquo;t try these on myself for obvious reasons, but I had a friend of mine put them to the test, and here&rsquo;s what she told me:</p>
							<p>The toe box is quite broad, which came as a surprise given the fact that women&rsquo;s shoes are known for their narrowness.</p>
							<p>Plus, the entire forefoot area is lightly cushioned &ndash; perfect for a cozy in-shoe feel.</p>
							<p>And let&rsquo;s not forget the full-length Crash Pad that accommodates to your foot landing.</p>
							<p>I hear it&rsquo;s going to make your transitions a whole lot smoother, too.</p>
							<p><strong>All in all, my friend&rsquo;s overall impression was that these shoes were made with the runner&rsquo;s comfort in mind.</strong></p>
							<p>There&rsquo;s one thing I noticed right off the bat, though &ndash; the 12 mm heel-to-toe differential seems to be slightly too high for someone coping with Morton&rsquo;s neuroma.</p>
							<p>You could find it beneficial if you&rsquo;re a heel striker, though, so keep that in mind when you make the final decision.</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Light cushioning and grip in the forefoot area</li>
											<li className="list-group-item">The Omega Flex Grooves enhance natural forefoot movement</li>
											<li className="list-group-item">The toe box is wide</li>
											<li className="list-group-item">The Crash Pad allows for a smoother landing</li>
											<li className="list-group-item">The tongue and collar have a plush feel</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">The heel drop could be lower</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/Brooks-Womens-Azalea-Yellow-Running/dp/B017N00JZ0/?tag=" + infoData.amz_tag }>
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
								src="https://m.media-amazon.com/images/I/81-d6emLscL._AC_UX575_.jpg" 
								width="575" 
								height="289"
								alt="Altra Mens One 2.5 Running Shoe" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="altra-mens-one-2-5-running-shoe" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/Altra-Mens-Running-Shoe-Black/dp/B01B7AZAFG/?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="Altra Mens One 2.5 Running Shoe" 
										alt="Altra Mens One 2.5 Running Shoe"
									>
									Altra Mens One 2.5 Running Shoe
									</a>
								</Link>
							</h2>
							<p>By now, you probably think there&rsquo;s no way you&rsquo;ll find an affordable pair of shoes that will give your aching feet the relief they deserve &ndash; but Altra&rsquo;s here to prove you wrong!</p>
							<p>And I know you&rsquo;re probably thinking:</p>
							<p>What can I expect from running shoes that are this affordable?</p>
							<p>Well, first off all, they&rsquo;re surprisingly comfortable.</p>
							<p>The responsive cushioning protects your feet, while the InnerFlex midsole adapts to them.</p>
							<p>Pair that with a ZeroDrop platform &ndash; that&rsquo;s right, there&rsquo;s no heel-to-toe differential &ndash; and you get a pair of perfectly balanced shoes that will help you maintain low-impact form.</p>
							<p>Most importantly, though, the toe box is foot-shaped, which should give your toes plenty of room to wiggle around and relax.</p>
							<p>Now, I won&apos;t sugarcoat it for you &ndash; there are some issues you should consider.</p>
							<p>The toe overlay isn&rsquo;t their most comfortable feature.</p>
							<p>It tends to press on your big toe, which could cause some fit issues, even if you pick the right size.</p>
							<p>I feel like durability might be a problem, too.</p>
							<p>The soles wear out pretty quickly, which could be a problem, especially for <Link href="/track-workout-for-distance-runners"><a className="text-decoration-none">long-distance runners</a></Link>.</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">They feature a ZeroDrop platform</li>
											<li className="list-group-item">They help maintain low-impact form</li>
											<li className="list-group-item">The Foot-Shaped toe box is quite spacious</li>
											<li className="list-group-item">Responsive cushioning protects your feet</li>
											<li className="list-group-item">The midsole adapts to your foot thanks to InnerFlex technology</li>
											<li className="list-group-item">Very affordable</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">The soles wear out quickly</li>
											<li className="list-group-item">The toe overlay might cause fit issues</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/Altra-Mens-Running-Shoe-Black/dp/B01B7AZAFG/?tag=" + infoData.amz_tag }>
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
								src="https://m.media-amazon.com/images/I/71D9J8ZB+tL._AC_UX575_.jpg" 
								width="575" 
								height="360"
								alt="New Balance Womens Fresh Foam 1080v6 Running Shoe" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="new-balance-womens-fresh-foam-1080v6-running-shoe" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/New-Balance-Womens-1080v6-Running/dp/B00YVIIUU4/?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="New Balance Womens Fresh Foam 1080v6 Running Shoe" 
										alt="New Balance Womens Fresh Foam 1080v6 Running Shoe"
									>
									New Balance Women&apos;s Fresh Foam 1080v6 Running Shoe
									</a>
								</Link>
							</h2>
							<p>Who said athletic shoes have to be unattractive?</p>
							<p>With the ombr&eacute; fade, the mash overlay, and the attractive pattern on the sides, the New Balance Fresh Foam shoes are every female runner&rsquo;s dream!</p>
							<p>They&rsquo;re not all looks, though:</p>
							<p>First and foremost, the roomy toe box will give your toes plenty of space to spread out, instead of cramping them up &ndash; and you know how important that is when you&rsquo;re suffering from Morton&rsquo;s neuroma.</p>
							<p>Moreover, the Fresh Foam midsoles not only provide stability but ensure that all the impact gets absorbed &ndash; even on rough terrain.</p>
							<p>If you&rsquo;re a fan of long-distance running, these shoes might be your new best friend!</p>
							<p>And while the mesh overlay is one of the things that make these shoes look and feel so cool, sadly, it&rsquo;s their biggest downfall, as well:</p>
							<p>All the extra breathability is more than welcome during the summer, but I can&rsquo;t imagine these being your go-to running shoes for cold, winter months.</p>
							<p>They&rsquo;re too &quot;airy&quot; to keep your feet warm.</p>
							<p>Also, keep in mind that the sizes do run a bit small before you place your order!</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">The toe box is quite roomy</li>
											<li className="list-group-item">They have a reasonably low heel drop</li>
											<li className="list-group-item">The Fresh Foam midsole helps absorb the impact</li>
											<li className="list-group-item">The mesh upper keeps your feet cool</li>
											<li className="list-group-item">They’re surprisingly lightweight</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Not suitable for cold weather</li>
											<li className="list-group-item">The sizes run a bit small</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/New-Balance-Womens-1080v6-Running/dp/B00YVIIUU4/?tag=" + infoData.amz_tag }>
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
								src="https://m.media-amazon.com/images/I/81yfM7HYqvL._AC_UX575_.jpg" 
								width="575" 
								height="356"
								alt="HOKA ONE ONE Mens Bondi 5 Running Shoe" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="hoka-one-one-mens-bondi-5-running-shoe" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/Hoka-Mens-Bondi-Running-Midnight/dp/B01H6BJ7A4/?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="HOKA ONE ONE Mens Bondi 5 Running Shoe" 
										alt="HOKA ONE ONE Mens Bondi 5 Running Shoe"
									>
									HOKA ONE ONE Men&apos;s Bondi 5 Running Shoe
									</a>
								</Link>
							</h2>
							<p>Right off the bat, I could tell that these were going to be comfortable &ndash; and there are a couple of reasons why:</p>
							<p>First off, the Meta-Rocker midsoles lend them their curved profile.</p>
							<p>Pair that with a low heel drop, and you get a pair of running shoes that pretty much feel like a rocking chair &ndash; but for your feet.</p>
							<p>It may sound weird, but it guides your feet through the natural gait cycle!</p>
							<p>Secondly, they feature an ample amount of cushioning.</p>
							<p>The tongue is padded, and the Ortholite insoles ensure that your forefoot area feels comfortably plush, which, as you know, plays an essential role in pain relief.</p>
							<p>On top of that, the strategically placed Zonal rubber lends the outsoles some much-needed durability.</p>
							<p>Don&apos;t worry about the shoes giving up before you do!</p>
							<p>Now, as you can probably imagine, all these fantastic, comfort-oriented features come at a certain price &ndash; and it&rsquo;s not an affordable one, either.</p>
							<p>Do I think they&rsquo;re overpriced, though?</p>
							<p>Well, not really. You do get what you paid for &ndash; one of the best running shoes for Morton&rsquo;s neuroma currently available on the market!</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">The Ortholite insoles provide extra cushioning</li>
											<li className="list-group-item">The sole profile is comfortably curved</li>
											<li className="list-group-item">The Meta-Rocker midsole offers a low heel-to-toe profile</li>
											<li className="list-group-item">The 3D Print structure ensures a precise fit</li>
											<li className="list-group-item">They’re lightweight, yet cushioned</li>
											<li className="list-group-item">The Zonal Rubber Outsole seems very durable</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">They’re quite expensive</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/Hoka-Mens-Bondi-Running-Midnight/dp/B01H6BJ7A4/?tag=" + infoData.amz_tag }>
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
								src="https://m.media-amazon.com/images/I/61MX8l-+CuL._AC_UX575_.jpg" 
								width="575" 
								height="299"
								alt="ASICS Womens Gel-Excite 6 Running Shoes" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="asics-womens-gel-excite-6-running-shoes" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/PRODUCT-NAME/dp/B01MRXJ12Q?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="ASICS Womens Gel-Excite 6 Running Shoes" 
										alt="ASICS Womens Gel-Excite 6 Running Shoes"
									>
									ASICS Women&apos;s Gel-Excite 6 Running Shoes
									</a>
								</Link>
							</h2>
							<p>Another pick for all the ladies out there comes from Asics, a famous brand when it comes to footwear for running.</p>
							<p>This pair is one of those models that show you don&rsquo;t have to compromise to have everything - comfort, performance, and a tempting price tag.</p>
							<p>The features that make them the bona fide running shoes are the rubber sole enhanced with the AmpliFoam Midsole that adds to the overall density and comfort.</p>
							<p>It is this part of the shoe that accounts for the perfect adjustment to your feet.</p>
							<p>Another factor utilized to protect you from conditions such as Morton&rsquo;s Neuroma is the Rearfoot Gel Technology.</p>
							<p>What precisely does this technology deliver?</p>
							<p>Well, while you&rsquo;re running and your weight is shifting from the lower part of your foot to the upper, this gel enables a smooth transitioning.</p>
							<p>Basically, it reduces the pressure on your toes and creates a stable support for your feet.</p>
							<p>Inside these running shoes, the Ortholite insoles ensure breathable and soft experience due to the Ortholite foam.</p>
							<p>You&rsquo;ve probably seen a lot of running shoes by Asics.</p>
							<p>Visually, these are no different - they are as fancy as models from some other brands, but they are pleasant on the eye.</p>
							<p>It is the inside that counts and makes them one of the best running shoes for Morton&rsquo;s neuroma!</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">The Ortholite cushioning</li>
											<li className="list-group-item">Budget-friendly</li>
											<li className="list-group-item">Smooth transition of your stance</li>
											<li className="list-group-item">Effective moisture management</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Not as durable as some other picks</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/ASICS-Womens-Gel-Excite-Running-Shoes/dp/B07FQL6PX9?tag=" + infoData.amz_tag }>
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
								src="https://m.media-amazon.com/images/I/71es-gz94eL._AC_UX575_.jpg" 
								width="575" 
								height="305"
								alt="ASICS Mens Gel-Excite 6 Winterized Running Shoes" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="asics-mens-gel-excite-6-winterized-running-shoes" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/ASICS-Gel-Excite-Running-Shoes-Black/dp/B07FQL1FJL?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="ASICS Mens Gel-Excite 6 Winterized Running Shoes" 
										alt="ASICS Mens Gel-Excite 6 Winterized Running Shoes"
									>
									ASICS Men&apos;s Gel-Excite 6 Winterized Running Shoes
									</a>
								</Link>
							</h2>
							<p>Another ode to Asics goes for their Men&rsquo;s 6 Twist running shoe model.</p>
							<p>The signature of this model is pretty similar to the previous model for ladies.</p>
							<p>What protects you and prevents any further injuries is the Rearfoot GEL Technology incorporated into the cushioning.</p>
							<p>You can thank this technology for a smooth transition when you&rsquo;re running, and no pressure on your toes.</p>
							<p>The breathable mesh overlays provide a moisture-free experience, and the Ampli Foam midsole incorporated into the structure of these shoes allows your foot to hit the ground without any pronation.</p>
							<p>I already went over the Ortholite technology, and by now, you are undoubtedly familiar with it.</p>
							<p>But what is essential is not only that it is implemented, but also how it is used.</p>
							<p>Namely, Asics uses Ortholite sock liners with foam padded mesh to create the most beneficial shoe for athletes and physically active people.</p>
							<p>One thing I want to mention with these is that you should probably size up because the fit is a bit tight.</p>
							<p>I&rsquo;m always honest to you - while these shoes are really functional and comfortable, they lack a bit in the durability department.</p>
							<p>The material won&rsquo;t sustain harsh weather conditions (rain, slush, snow), but that&rsquo;s something that shouldn&rsquo;t be a problem for such a bargain.</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Sweatproof technology</li>
											<li className="list-group-item">Removes the pressure from your toes</li>
											<li className="list-group-item">Supportive & flexible sole</li>
											<li className="list-group-item">Low price</li>
											<li className="list-group-item">Easy to wash</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Not suitable for rain</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/ASICS-Gel-Excite-Running-Shoes-Black/dp/B07FQL1FJL?tag=" + infoData.amz_tag }>
									<a className="btn btn-lg btn-warning text-light fw-bold fs-2" target="_blank" rel="nofollow noopener" title="See Price on Amazon" alt="See Price on Amazon">SEE PRICE ON AMAZON</a>
								</Link>
							</div>
						</div> 

						<p>&nbsp;</p>
						{ /* product card: end */}


						{ /* The Final Verdict */ }
						<h2 id="the-final-verdict" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>The Final Verdict</h2>
						<p>Okay, it&rsquo;s time for me to announce the winners. That&rsquo;s right, plural &ndash; one for the ladies, and one for the gents!</p>
						<p>I would recommend the <Link href="#new-balance-womens-fresh-foam-1080v6-running-shoe"><a className="text-decoration-none">New Balance Women&apos;s Fresh Foam 1080v6 Running Shoe</a></Link> to any female runner out there dealing with this painful foot condition.</p>
						<p>The guys, on the other hand, would probably find the <Link href="#altra-mens-torin-3-athletic-shoe"><a className="text-decoration-none">Altra Men&apos;s Torin 3 Athletic Shoe</a></Link> to be the best running shoes for Morton&rsquo;s neuroma.</p>

						{ /* The Final Verdict: end */ }

						<p>&nbsp;</p>
						<p className="border-bottom"></p>
						<p>&nbsp;</p>

						{ /* Informative Section */ }
						<h2 id="mortons-neuroma-causes" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Morton’s Neuroma: What Could Be Causing This Painful Condition?</h2>
						<div className="d-flex justify-content-center mb-5 shadow rounded">
							<Image
								src="https://res.cloudinary.com/muru/image/upload/v1633772603/best-running-shoes-for-mortons-neuroma/mortons-neuroma-cross-section-used-gradient_w5571f.png" 
								width="730" 
								height="627"
								alt="Normal foot vs. Mortons neuroma" 
							/>
						</div>
						<p>Faced with a sudden pain in the ball of the foot &ndash; <Link href="https://www.medicalnewstoday.com/articles/179773.php"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">the most common symptom of Morton&rsquo;s neuroma</a></Link> &ndash; people always ask the same question:</p>
						<p>Why me?</p>
						<p>Well, I feel like it&apos;s important to know that certain factors put you at risk for developing this painful condition:</p>
						<p>Being overweight</p>
						<ul>
						<li className="mb-1">Having<Link href="/flat-feet-pronation"><a className="text-decoration-none"> flat feet&nbsp;</a></Link></li>
						<li className="mb-1">Constantly wearing high-heeled or very narrow, tight shoes</li>
						<li className="mb-1">Previous injuries or traumas to the foot</li>
						<li className="mb-1">Pre-existing abnormalities in the foot anatomy</li>
						<li className="mb-1">Overstraining the ball of the foot by specific types of exercise, such as running</li>
						</ul>
						<p>I don&rsquo;t know if you&rsquo;ve noticed, but they all seem to have one thing in common:</p>
						<p>The constant, often extreme pressure exerted on foot, and particularly the nerve.</p>
						<p>Now, here&rsquo;s the thing:</p>
						<p>The continued compression and irritation will force the nerve between your third and fourth toe to develop extra fibrous tissue, and become enlarged and inflamed &ndash; and that, my friends, is how you end up with this condition, also known as an <Link href="https://www.foothealthfacts.org/conditions/morton-s-neuroma-(intermetatarsal-neuroma)"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">intermetatarsal neuroma</a></Link>.</p>

						<p>&nbsp;</p>
						<h2 id="mortons-neuroma-symptom-checklist" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>A Quick Symptom Checklist: Is It Morton’s Neuroma?</h2>
						<p>The tricky thing about Morton&rsquo;s neuroma is that it often has no outward, visible symptoms.</p>
						<p>There won&rsquo;t be any apparent bruises, lumps, or swelling, so you&rsquo;re going to have to listen to what your body&rsquo;s telling you.</p>
						<p>There&rsquo;s a chance that your condition is entirely asymptomatic, too, and, as such, went unnoticed up until now.</p>
						<p>What are you supposed to do?</p>
						<p>Well, paying attention to the ongoing sensations and going by what you feel could be your best bet:</p>
						<ul>
							<li className="mb-3">Intermittent pain is the most apparent symptom of Morton&rsquo;s neuroma</li>
							<li className="mb-3">A tingling sensation between your toes is the first symptom you&rsquo;re likely to experience first</li>
							<li className="mb-3">Feeling like there&rsquo;s something inside the ball of your foot</li>
							<li className="mb-3">A sharp, &quot;burning&quot; sensation in the forefoot that radiates towards your toes</li>
							<li className="mb-3">Feeling like there&rsquo;s a pebble in your shoe and you&rsquo;re standing on it or that your sock is bunched-up</li>
							<li className="mb-3">Numbness &ndash; or &quot;pins and needless&quot; &ndash; in the affected toes</li>
							<li className="mb-3">Difficulty walking &ndash; and running &ndash; due to the pain</li>
						</ul>
						<div className="alert alert-warning" role="alert">
							<p><strong>Disclaimer</strong></p>
							<p>While I&rsquo;m confident in the validity of the facts provided in this article, I&rsquo;m not a medical professional &ndash; if you&rsquo;re experiencing any unusual (or painful) sensations in your foot, the best course of action would be talking to your health provider and get it checked out as soon as possible.</p>
						</div>

						<p>&nbsp;</p>
						<h2 id="mortons-neuroma-running-shoes-detailed-buying-guide" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How To Choose The Best Running Shoes For The Job: A Detailed Buying Guide</h2>
						<p>How do you go about finding the perfect pair, though?</p>
						<p>Keep on reading and find out!</p>

						<h3 className="mt-5">Choose The Right Size</h3>
						<p>Okay, I know this falls into the &quot;common knowledge&quot; category, but I think you&rsquo;d be surprised at how often people end up buying wrong size shoes.</p>
						<p>Chances are you&rsquo;ve done it at least once in your life, too.</p>
						<p>And while it&rsquo;s a bad idea in general &ndash; ill-fitting shoes always bring on more harm than good &ndash; when you&rsquo;re suffering from Morton&rsquo;s neuroma, buying the right size should be your top priority.</p>
						<p>That said, don&rsquo;t make the mistake of focusing solely on getting the length right &ndash; shoe width matters, as well!</p>
						<div className="alert alert-primary" role="alert">
							<p><strong>EXTRA TIP</strong></p>
							<p>If you&apos;re having any doubts about the exact shoe size you should be wearing, get your feet measured by a professional, and buy shoes according to that evaluation.</p>
							<p>Oh, and don&rsquo;t freak out if your feet turn out to be two entirely different sizes.</p>
							<p>It&rsquo;s shocking discovery, I&rsquo;d give you that, but it&rsquo;s quite common &ndash; most people have feet that differ in size!</p>
						</div>

						<h3 className="mt-5">Give Your Toes Enough Space</h3>
						<p>The next thing you should consider &ndash; and it&rsquo;s closely related to the shoe&rsquo;s overall fit &ndash; is the size (and the shape) of the toe box.</p>
						<p>A good rule of thumb for choosing the best running shoes for Morton&rsquo;s neuroma is to go with a roomy toe box.</p>
						<p>Not only does that give your toes some much-needed space to spread out and lay comfortably flat but reduces the pressure on your forefoot, as well.</p>
						<p>If the toe box is pointy, triangle-shaped or narrow, stay away from them &ndash; these shoes will bring you nothing but pain and suffering.</p>

						<h3 className="mt-5">Cushioning Absorbs The Shock</h3>
						<p>Okay, let&rsquo;s get one thing straight:</p>
						<p>As someone with a rather painful foot condition, you can&rsquo;t afford to skip out on cushioning.</p>
						<p>Its role goes beyond pure comfort, too.</p>
						<p>A well-cushioned shoe will also absorb the landing surface&apos;s impact, and, as you know, shock absorption is critical for protecting your feet.</p>
						<p>That said, you have to make sure that the padding is adequately distributed - cushioning around the heel is always welcome, but the focus should be on the forefoot area.</p>
						<p>Having a layer of padding underneath the ball of your foot is essential to prevent further nerve irritation.</p>
						<div className="alert alert-primary" role="alert">
							<p><strong>EXTRA TIP</strong></p>
							<p>Overdoing it is a bad idea, though &ndash; this is one of those &quot;too much of the good thing&quot; situations.</p>
							<p>So, aim to find that &quot;middle ground&quot; &ndash; no cushioning is just as bad as too much of it.</p>
							<p>There&rsquo;s <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5992812/"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">research</a></Link> to support the claim that high levels of cushioning could lead to an increased risk of injury in runners.</p>
						</div>
						<h3 className="mt-5">Heel Drop: Low To None</h3>
						<p>Okay, pay close attention, because this is one of those critical factors you have to consider when picking the best running shoes for Morton&apos;s neuroma.</p>
						<p>Everything else can be perfect, but if the <Link href="https://gearinstitute.com/what-is-heel-drop/"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">heel-to-toe differential</a></Link> is too high, it won&rsquo;t matter &ndash; the shoes will end up being uncomfortable.</p>
						<p>Here&rsquo;s the thing:</p>
						<p>The higher the heel, the more pressure you&apos;ll put on your forefoot &ndash; and that&apos;s something you should avoid at all costs when you&apos;re suffering from Morton&apos;s neuroma.</p>
						<p>A good rule of thumb is to go with a heel drop of four millimeters or less.</p>
						<p>No differential would be ideal, though, but you&rsquo;ll probably have to work your way up to zero-drop running shoes.</p>

						<p>&nbsp;</p>
						<div className="alert alert-success" role="alert">
							<p>I&rsquo;m interested in hearing what you have to say about this article, though, so feel free to send me a message <Link href="/contact"><a className="text-decoration-none">here</a></Link>!</p>
						</div>
						{ /* Informative Section: end */ }
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }

	</>)
}
