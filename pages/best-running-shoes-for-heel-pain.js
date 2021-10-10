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
	const postId = 48;
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
						<p>When you&rsquo;re running, your heels will probably take most of the impact since almost all runners land heel-first.</p>
						<p>It&rsquo;s no wonder that one of the most common problems that runners encounter is heel pain.</p>
						<p>Over time, this can develop from a niggling annoyance to a severe problem that stops you from running altogether.</p>
						<p>However, there is a way to mitigate the problem &ndash; with the right shoes; you&rsquo;ll be able to minimize the impact and run without heel pain.</p>
						<p>Today you&rsquo;ll find out all about the best running shoes for heel pain that you can buy right now.</p>

						<p>&nbsp;</p>
						<h2 className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>The 5 Best Running Shoes for Heel Pain</h2>

						{ /* product card */}
						<p>&nbsp;</p>

						<div className="card shadow px-3 bg-body rounded mb-4">
							<div className="d-flex justify-content-center mb-3">
							    <Image
								src="https://m.media-amazon.com/images/I/91DueXPB9YL._AC_UX575_.jpg" 
								width="575" 
								height="381"
								alt="ASICS Gel Nimbus 18 Running Shoe" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="asics-gel-nimbus-18-running-shoe" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/ASICS-Nimbus-Running-Silver-Yellow/dp/B00YDN1XEM?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="ASICS Gel Nimbus 18 Running Shoe" 
										alt="ASICS Gel Nimbus 18 Running Shoe"
									>
									ASICS Gel Nimbus 18 Running Shoe
									</a>
								</Link>
							</h2>
							<p>These ASICS shoes are made primarily from textile and synthetic fabrics which makes them highly breathable and comfortable.</p>
							<p>The cushioning here is great, and they absorb shock quite well, meaning that your heel won&rsquo;t take the brunt of the impact.</p>
							<p>However, all the cushioning makes them a bit heavier than the average running shoe.</p>
							<p>As far as the fit goes, they&rsquo;re good, and if you&rsquo;ve good feet that aren&rsquo;t&rsquo; oddly-shaped, they will be good for you.</p>
							<p>The toe box is a particular standout, being incredibly roomy and accommodating.</p>
							<p>The worst part of the shoe is the sole, which is not quite as durable as it should be in a running shoe, so it will start wearing down after around 5 to 6 months of use.</p>
							<p>Overall, these shoes will be a good fit for someone looking to fix their constant heel pain problems.</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Highly breathable</li>
											<li className="list-group-item">An extremely wide toe box</li>
											<li className="list-group-item">Good fit for most foot types</li>
											<li className="list-group-item">Great cushioning</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Heavier than most running shoes</li>
											<li className="list-group-item">The sole starts wearing down quickly</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/ASICS-Nimbus-Running-Silver-Yellow/dp/B00YDN1XEM?tag=" + infoData.amz_tag }>
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
								src="https://m.media-amazon.com/images/I/81kVBqhIXRL._AC_UX575_.jpg" 
								width="575" 
								height="368"
								alt="Brooks Ghost 10 Running Shoe" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="brooks-ghost-10-running-shoe" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/Brooks-Mens-Ghost-Silver-White/dp/B071441FW4?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="Brooks Ghost 10 Running Shoe" 
										alt="Brooks Ghost 10 Running Shoe"
									>
									Brooks Ghost 10 Running Shoe
									</a>
								</Link>
							</h2>
							<p>Here&rsquo;s a pair of shoes that will be great for almost anyone.</p>
							<p>They are made out of extremely lightweight materials, mostly synthetics and textile fabric.</p>
							<p>For most people, they will fit like a glove.</p>
							<p>Even though they&rsquo;re not heavy, they offer extensive cushioning, making them great for those with heel pain.</p>
							<p>The full-length segmented crash pads will also be able to absorb most of the impact when you land and offer relief for your painful heels.</p>
							<p>Sadly, the cushioning makes them a bit stuffy and hot at the front.</p>
							<p>They offer medium to high arch support, and they&rsquo;re great if you happen to have a high arch and need a bit of that extra supportiveness for your foot.</p>
							<p>The sad part is that the foam in these shoes starts to break down rather quickly and if you&rsquo;re a long-distance runner they will be almost unusable after roughly five hundred miles.</p>
							<p>They come at a great price, but that is the real cost.</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Great, tight cushioning</li>
											<li className="list-group-item">They are a great fit</li>
											<li className="list-group-item">Extremely lightweight</li>
											<li className="list-group-item">They come at a great price</li>
											<li className="list-group-item">Good arch support for high arches</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">The front is not breathable enough</li>
											<li className="list-group-item">The foam starts breaking down after a few hundred miles</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/Brooks-Mens-Ghost-Silver-White/dp/B071441FW4?tag=" + infoData.amz_tag }>
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
								src="https://m.media-amazon.com/images/I/81yxhWNAjUL._AC_UX575_.jpg" 
								width="575" 
								height="346"
								alt="Saucony Kinvara 7 Running Shoe" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="saucony-kinvara-7-running-shoe" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/Saucony-S10298-8-001-Kinvara-7/dp/B00YBFIKX4?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="Saucony Kinvara 7 Running Shoe" 
										alt="Saucony Kinvara 7 Running Shoe"
									>
									Saucony Kinvara 7 Running Shoe
									</a>
								</Link>
							</h2>
							<p>For someone with heel pain problems, these will be one of the best shoes they can get because of one outstanding thing &ndash; the cushioning around the heel.</p>
							<p>The cushioning is tight and effective and will almost certainly help with any heel pain you might have.</p>
							<p>Other than that, the shoes are quite lightweight, and the underfoot is especially springy.</p>
							<p>They will be a good fit for most people out there, though there is one slight problem &ndash; the toe box is tighter than you might expect.</p>
							<p>In addition to all that, the shoes offer great arch support, and if you have a high arch, you might want to try these on.</p>
							<p>The only other major issue is the lack of breathability, and that might be a problem in the summer months.</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Better price than most competitors</li>
											<li className="list-group-item">The underfoot is quite springy</li>
											<li className="list-group-item">Extremely comfortable and a good fit</li>
											<li className="list-group-item">They offer good arch support</li>
											<li className="list-group-item">The heel is tightly cushioned</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Tight toe box</li>
											<li className="list-group-item">Lack of proper breathability</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/Saucony-S10298-8-001-Kinvara-7/dp/B00YBFIKX4?tag=" + infoData.amz_tag }>
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
								src="https://m.media-amazon.com/images/I/81oRlyLAfcL._AC_UX575_.jpg" 
								width="575" 
								height="345"
								alt="New Balance Made in Us 990 V4 Sneaker" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="new-balance-made-in-us-990-v4-sneaker" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/New-Balance-M990GL4-Running-Castle/dp/B015XJTORC/?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="New Balance Made in Us 990 V4 Sneaker" 
										alt="New Balance Made in Us 990 V4 Sneaker"
									>
									New Balance Made in Us 990 V4 Sneaker
									</a>
								</Link>
							</h2>
							<p>These are definitely one of the best shoes out there for people who have problems with pain in their heels.</p>
							<p>They are made to be lightweight with a toe box that you can comfortably move in and a heel that&rsquo;s properly cupped and supported.</p>
							<p>The cushioning is excellent, and so is the overall shock absorption.</p>
							<p>To top it all off, they&rsquo;re made in the USA from highly durable materials and will last for more than a thousand miles of running for sure.</p>
							<p>These shoes have one of the strangest downsides, though &ndash; they squeak when you&rsquo;re walking or running in them.</p>
							<p>After a while, it can become quite grating, so if you&rsquo;re easily irritated by that sort of thing, you should give these a hard pass.</p>
							<p>Other than that, the price tag is quite high, but considering the quality you get for the money it&rsquo;s more than worth the price.</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">They feature a comfortable fit</li>
											<li className="list-group-item">An extremely roomy toe box</li>
											<li className="list-group-item">Highly comfortable</li>
											<li className="list-group-item">Extremely durable</li>
											<li className="list-group-item">Amazing cushioning and shock absorption</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">High price tag</li>
											<li className="list-group-item">They squeak a lot</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/New-Balance-M990GL4-Running-Castle/dp/B015XJTORC/?tag=" + infoData.amz_tag }>
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
								src="https://m.media-amazon.com/images/I/81mHhktG2uL._AC_UX575_.jpg" 
								width="575" 
								height="320"
								alt="Saucony Guide 10 Running Shoe" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="saucony-guide-10-running-shoe" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/Saucony-Womens-Guide-Running-Light/dp/B01GIPMPWG?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="Saucony Guide 10 Running Shoe" 
										alt="Saucony Guide 10 Running Shoe"
									>
									Saucony Guide 10 Running Shoe
									</a>
								</Link>
							</h2>
							<p>These are highly comfortable shoes made from fabric producing a highly breathable and light piece of running gear.</p>
							<p>Despite that, they&rsquo;re also highly durable, and it will be a long time before you have to replace them.</p>
							<p>The cushioning is distributed evenly between the forefoot and heel offering great support and pain relief.</p>
							<p>The shock absorption works great and provides comfort for your painful heels.</p>
							<p>If you happen to have plantar fasciitis, these are also some of the best shoes you can get since they offer astoundingly good support for your arches.</p>
							<p>Keep in mind to get them a size larger, since the fit runs a bit small and you might end up with unusable shoes if you order the size you&rsquo;re used to.</p>
							<p>Besides that, the only other downside is the shoelaces &ndash; they are of poor quality, difficult to lace up and break easily.</p>
							<p>However, it&rsquo;s not difficult to replace them with a good pair.</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Comfortable</li>
											<li className="list-group-item">Awesome arch support for plantar fasciitis</li>
											<li className="list-group-item">The cushioning is superb</li>
											<li className="list-group-item">Made from breathable materials</li>
											<li className="list-group-item">Highly durable</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">The fit is a bit small</li>
											<li className="list-group-item">The shoelaces are of poor quality</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/Saucony-Womens-Guide-Running-Light/dp/B01GIPMPWG?tag=" + infoData.amz_tag }>
									<a className="btn btn-lg btn-warning text-light fw-bold fs-2" target="_blank" rel="nofollow noopener" title="See Price on Amazon" alt="See Price on Amazon">SEE PRICE ON AMAZON</a>
								</Link>
							</div>
						</div> 

						<p>&nbsp;</p>
						{ /* product card: end */}


						{ /* The Final Verdict */ }
						<h2 id="the-final-verdict" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>The Final Verdict</h2>
						<p>All of these shoes are on this list for a reason &ndash; they&rsquo;re great for runners who are experiencing heel pain and which ones will fit you the best depends on your condition and your preferences.</p>
						<p>However, the best pair overall and the one that will fit the most people is definitely the <Link href="#new-balance-made-in-us-990-v4-sneaker"><a className="text-decoration-none">New Balance 990 V4 Sneaker</a></Link>.</p>
						<p>These shoes excel in almost every possible category &ndash; they are durable, have great cushioning, good breathability, a comfortable fit and more!</p>
						<p>All without any major downsides - they&rsquo;re certainly worth twice their price!</p>
						<p>If you&rsquo;re going to pick one of these shoes &ndash; this is the pair you should get.</p>
						{ /* The Final Verdict: end */ }

						<p>&nbsp;</p>
						<p className="border-bottom"></p>
						<p>&nbsp;</p>

						{ /* Informative Section */ }
						<h2 id="the-causes-of-heel-pain" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>The Causes of Heel Pain</h2>
						<p>Heel pain in runners doesn&rsquo;t always have the same cause.</p>
						<p>Even if it hurts in the same way, the underlying condition might be different, thus requiring different treatment &ndash; which also means a different type of shoes.</p>
						<p>Here you&rsquo;ll find out a bit about the most common causes of heel pain in runners and how to deal with them.</p>

						<h3 className="mt-5">Plantar fasciitis</h3>
						<p><Link href="/plantar-fasciitis-trigger-points"><a className="text-decoration-none">Plantar fasciitis</a></Link> is the most common cause of heel pain.</p>
						<p>It&rsquo;s an inflammation of the plantar fascia &ndash; a strong ligament that starts at the heel bone and ends at the tip of your foot.</p>
						<p>The reason for the inflammation of this ligament is usually overwork.</p>
						<p>If it&rsquo;s stretched too much and too far it will become inflamed, usually at the heel, but sometimes in the middle of your foot as well.</p>
						<p>This is also one of the most sinister types of heel pain since you usually won&rsquo;t feel it when running &ndash; it will appear after an extended period of rest.</p>
						<p>Because of that, you might not connect it to running straight away, but the impact it puts on your heel is what most likely caused this condition.</p>
						<p>This is why it&rsquo;s also called &lsquo;jogger&rsquo;s heel&rsquo; in some circles.</p>
						<p>If it&rsquo;s not treated in time, it might lead to a degenerative process that causes permanent damage to your foot ligaments.</p>

						<h3 className="mt-5">Heel Bursitis</h3>
						<p>Heel Bursitis is another common foot condition caused by the inflammation of small fluid sacks in your foot, specifically those positioned near your heel.</p>
						<p>Hard or awkward landings might cause this condition to occur, through overwork is also a factor.</p>
						<p>You&rsquo;ll probably feel the pain deep in your heel and swelling may occur, getting worse and worse until it&rsquo;s treated.</p>

						<h3 className="mt-5">Heel Spurs</h3>
						<p>Heel Spurs are a particularly nasty condition.</p>
						<p>They are small bony protrusions on your heel bones caused by chronic strain, overwork, running on hard surfaces or repeated injuries.</p>
						<p>The pain you&rsquo;ll feel is akin to small painful jabs while running or walking.</p>
						<p>In addition to being painful by themselves, heel spurs can also cause an onset of plantar fasciitis.</p>

						<h3 className="mt-5">Tarsal tunnel syndrome</h3>
						<p>Tarsal tunnel syndrome is a condition caused by the tarsal nerve at the back of your foot getting compressed or pinched.</p>
						<p>It can occur in your ankle or in the foot itself, causing pain, tingling, and numbness not only in the heel but through the whole foot.</p>

						<h3 className="mt-5">Stress fractures</h3>
						<p><Link href="/difference-between-shin-splints-and-stress-fracture"><a className="text-decoration-none">Stress fractures</a></Link> are another common cause of heel pain in runners that often goes undetected.</p>
						<p>These are micro-fractures in the foot bones caused by constant stress being put on the foot.</p>

						<h3 className="mt-5">Achilles tendonitis</h3>
						<p><Link href="/achilles-tendon-massage"><a className="text-decoration-none">Achilles tendonitis</a></Link>, the progressive degeneration of the Achilles tendon is also a cause of heel pain.</p>
						<p>It can be caused or made worse by overworking the foot and performing high-impact activities like running.</p>
						<p>&nbsp;</p>
						<p>There are many other possible causes, including tendon ruptures, ligament tears, cysts, circulation issues, osteoporosis, nerve degeneration, and more.</p>
						<p>These are just the most prominent ones.</p>
		
						<p>&nbsp;</p>
						<h2 id="how-the-right-running-shoes-can-help" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How The Right Running Shoes Can Help</h2>
						<p>Since impact and overwork contributes or causes, most of the conditions that cause heel pain, proper support and cushioning will certainly help you to avoid them.</p>
						<p>Good shoes can significantly reduce the impact on your heels by cushioning them and distributing the weight of your foot evenly.</p>
						<p>If there&rsquo;s less impact on the bones and muscles of your foot, there&rsquo;s a smaller chance that you&rsquo;ll develop one of these conditions.</p>
						<p>However, good running shoes serve not only as prevention for some of these conditions but also as a form of symptom relief and treatment.</p>
						<p><strong>Studies have shown that orthotics and footwear changes contribute significantly to reduced pain and disease regression in patients with plantar fasciitis.</strong></p>
						<p>More supportive shoes with better shock absorption are the first thing you should buy if you learn that you have plantar fasciitis.</p>
						<p>But, how do you choose the right shoes?</p>
						<p>Here are some things to look out for.</p>

						<p>&nbsp;</p>
						<h2 id="how-to-choose-the-best-running-shoes-for-heel-pain" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How To Choose The Best Running Shoes For Heel Pain</h2>
						<h3 className="mt-5">Heel Support</h3>
						<p>Since you&rsquo;re trying to prevent and deal with heel pain, it stands to reason that the most important part of the shoes you need to buy will be the heel.</p>
						<p>Shoes with thin soles shouldn&rsquo;t even be something you consider.</p>
						<p>You will need to buy a shoe that has a thick heel with good support, and that properly cups your leg.</p>
						<p>That way, you won&rsquo;t have any unnecessary, jerky movements that might impact your ligaments and your heel will feel less impact when you run.</p>

						<h3 className="mt-5">Arch Support</h3>
						<p>When your heel is hurting the problem might not necessarily have started there &ndash; after all, it&rsquo;s connected to the rest of your foot.</p>
						<p>One of the main sources of most foot problems in runners is bad arch support, and that&rsquo;s what you need to look out for next.</p>
						<p>You need to test to see what kind of arch you have &ndash; high, neutral or low &ndash; and get a shoe which supports it properly.</p>

						<h3 className="mt-5">Fit</h3>
						<p>There are a lot of people out there that get a shoe which doesn&rsquo;t fit them properly and think they just need to &lsquo;break it in&rsquo; and all will be well.</p>
						<p>Sadly, that&rsquo;s not the case, and an ill-fitting shoe will inevitably lead to some foot problems, especially in runners.</p>
						<p>If you&rsquo;ve got heel pain problems, you will need a tighter shoe that doesn&rsquo;t let the foot move around too much, but remains comfortable.</p>
						<p>You should also look for shoes with a wide toe box.</p>

						<h3 className="mt-5">Shock Absorption</h3>
						<p>Good shock absorption is another thing to consider when you&rsquo;re trying to get the best running shoes for heel pain.</p>
						<p>If the shoe properly distributes the shock from the impact across the entire foot, your heel will suffer less when you land on it.</p>
						<p>Shoes that can handle impact up to 4 or 5 times your bodyweight are what you need to look for.</p>
						<p>Proper cushioning helps with this, and you should look for shoes that fit your running style.</p>
						<p>If you&rsquo;re a sprinter, you need lightweight cushioning, but you&rsquo;ll need much more extensive cushioning if you&rsquo;re a long-distance runner.</p>

						<h3 className="mt-5">Breathability</h3>
						<p>Many foot problems, like heel spurs, can be exacerbated if your feet become too wet and sweaty.</p>
						<p>If you intend to run for a long time during hot weather, the breathability of your shoes will help with your heel pain problems.</p>
						<p>Try to look for synthetic shoes that have lots of strong but flexible mesh that allows for good airflow.</p>
						<p>Synthetic leather and nylon are some of the best choices out there, though pigskin leather is also a good choice.</p>

						<p>&nbsp;</p>
						<div className="alert alert-success" role="alert">
							<p>In case you have any questions or opinions on the article, feel free to <Link href="/contact"><a className="text-decoration-none">send me a message</a></Link> and share the article if you liked it.</p>
							<p>Most importantly &ndash; just keep on running!</p>
						</div>
						{ /* Informative Section: end */ }
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
