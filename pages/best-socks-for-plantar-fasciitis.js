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
	const postId = 44;
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
						<p className="mt-3 fst-italic fw-lighter text-white-50">EmpowerYourRun may earn a small commission from affiliate links in this article. <Link href="/disclaimer"><a className="text-decoration-none text-warning text-decoration-underline" target="_blank" rel="noreferrer">Learn more</a></Link></p>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Info: end */ }


		{ /* Article Content */ }
		<div className="artilce-content mt-4 py-4 fs-5">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-lg-10 col-xl-8 col-xxl-7">
						<p>Plantar fasciitis is a widespread condition which affects millions of runners across the world. If you&apos;ve ever had it, you know how painfully annoying it can be.</p>
						<p>The really persistent type, those who do not wish to stop exercising despite the pain, can find a way to minimize further damage to their feet. This can be done with the help of appropriate footwear or insoles.</p>
						<p>There is one more piece of equipment which could help here &ndash; compression socks.</p>
						<p> They can help individuals alleviate a certain amount of irritation and create more secure conditions for running.</p>
						<p>Today&apos;s article focuses on finding the best socks for plantar fasciitis, and if you are a runner who is afflicted by this condition, then you might want to keep reading.</p>

						<p>&nbsp;</p>

						<h2 className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Top 5 Socks for Plantar Fasciitis</h2>

						{ /* product card */}
						<p>&nbsp;</p>

						<div className="card shadow px-3 bg-body rounded mb-4">
							<div className="d-flex justify-content-center mb-3">
							    <Image
								src="https://m.media-amazon.com/images/I/91mhVSdjiYL._AC_SX425_.jpg" 
								width="425" 
								height="235"
								alt="Thirty48 Plantar Fasciitis Compression Socks" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="thirty48-plantar-fasciitis-compression-socks" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/Thirty-48-Fasciitis-Compression-Circulation/dp/B01MRXJ12Q?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="Thirty48 Plantar Fasciitis Compression Socks" 
										alt="Thirty48 Plantar Fasciitis Compression Socks"
									>
									Thirty48 Plantar Fasciitis Compression Socks
									</a>
								</Link>
							</h2>
							<p>Thirty 48 is a well-known brand on the market and has received many positive reviews from its users.</p>
							<p>They are a right combination of style and functionality which is what has made them so successful.</p>
							<p>These socks do what they&apos;re supposed to &ndash; create compression where necessary and allow for free movement where it is needed.</p>
							<p>The 20-30 mmHg of pressure is enough to increase circulation, relieve pain, and create good arch support.</p>
							<p>As far as the length is concerned, the socks stop above one&apos;s ankles.</p>
							<p>A slight problem with this model is that they might be a bit too tight on the bottom of the calf, 
							but this largely depends on how a person&apos;s legs are built.</p>
							<p>The material is a 75/25 combination of nylon and spandex, and it yields all the necessary properties.</p>
							<p>It is lightweight and thin so that you can wear the socks underneath your &quot;normal&quot; ones.</p>
							<p>They are also breathable and will not leave your feet sweaty and moist, so they are good for exercising as well as everyday wear.</p>
							<p>They do not have any additional padding, but it is not necessary, as they are pretty comfortable the way they are.</p>
							<p>Thirty 48&apos;s cost is decent and falls into the mid price range, which is outstanding for such a good product.&nbsp;</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Breathable, lightweight material</li>
											<li className="list-group-item">Good arch support</li>
											<li className="list-group-item">Available in four colors</li>
											<li className="list-group-item">Great price</li>
											<li className="list-group-item">Comfortable</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Might be a bit tight around the bottom calf for some users</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/Thirty-48-Fasciitis-Compression-Circulation/dp/B01MRXJ12Q?tag=" + infoData.amz_tag }>
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
								src="https://m.media-amazon.com/images/I/91yMAefij2L._AC_UX385_.jpg" 
								width="385" 
								height="296"
								alt="Feetures Elite Max Cushion Compression Socks" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="feetures-elite-max-cushion-compression-socks" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/Feetures-Elite-Cushion-Athletic-Running/dp/B074SYFJPK?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="Feetures Elite Max Cushion Compression Socks" 
										alt="Feetures Elite Max Cushion Compression Socks"
									>
									Feetures Elite Max Cushion Compression Socks
									</a>
								</Link>
							</h2>
							<p>Feetures is another excellent compression sock that was, according to the manufacturer, designed for optimum performance. This means that their product is intended for people who move a lot and live dynamically.</p>
							<p>Let&apos;s inspect this pair a bit more.</p>
							<p>Feetures are comfortable and pain-relieving, and they owe this to the company&apos;s unique technology of 3 targeted compression zones. This ensures that you feel pressure where it is necessary and not feel it where it isn&apos;t.</p>
							<p>Their system is effective and provides arch support and stabilizes the plantar fascia.</p>
							<p>Like most of these products, these socks are also ankle-high.</p>
							<p>There seems to be a problem with general sizing and some people have complained that it doesn&apos;t fit them properly despite choosing their right size.</p>
							<p>The socks are made from nylon and lycra, which makes them stretchy and comfortable. However, the material tends to shrink a bit when washed, but don&apos;t worry; they will stretch back to their original size when worn.</p>
							<p>The important thing is that they are breathable and moisture-wicking.</p>
							<p>Unlike the previous model on this list, this one does employ additional cushioning.</p>
							<p>Now, the price of these socks is something that you&apos;ll hear people complaining about. It is a bit higher than its competition, but the company does offer a lifetime warranty, which is a big deal.</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">The targeted compression technology works well</li>
											<li className="list-group-item">Breathable and moisture-wicking</li>
											<li className="list-group-item">Extra-cushioning in certain areas</li>
											<li className="list-group-item">Lifetime warranty</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">General sizing might be a problem</li>
											<li className="list-group-item">Expensive</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/Feetures-Elite-Cushion-Athletic-Running/dp/B074SYFJPK?tag=" + infoData.amz_tag }>
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
								src="https://m.media-amazon.com/images/I/81AX3pti1nS._AC_SX679_.jpg" 
								width="679" 
								height="696"
								alt="Bitly Plantar Fasciitis Compression Socks" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="feetures-elite-max-cushion-compression-socks" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/Bitly-Plantar-Fasciitis-Premium-Compression/dp/B01091ZLGC?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="Bitly Plantar Fasciitis Compression Socks" 
										alt="Bitly Plantar Fasciitis Compression Socks"
									>
									Bitly Plantar Fasciitis Compression Socks
									</a>
								</Link>
							</h2>
							<p>Bitly is a famous compression sock that&apos;s good for both sports and ordinary daily tasks.</p>
							<p>They are available in many colors which sets them apart from others on the market and are a good choice for those who don&apos;t want to spend a lot of money.</p>
							<p>They have an open-toe closed-heel design which is not uncommon among these products.</p>
							<p>The compression is evenly spread among the areas of the foot, but some would argue that it is not strong enough. However, this depends on the individual, so it would be best if you compare them with another brand just to see which compression levels suits you more.</p>
							<p>Bitly is an ankle-high sock, which is a very common length for this type of product.</p>
							<p>It fits well, but a potential problem might be the thick line at the end of the sock pressing hard on people&apos;s pinky toe bunions (if there are any).</p>
							<p>The socks are made from the company&apos;s signature Drystat material which, as the name implies, helps your feet stay dry as it absorbs any sweat that might occur.</p>
							<p>It is also breathable which will further promote cool feet.</p>
							<p>As far as extra-padding is concerned, Bitly doesn&apos;t have any, which might or might not be a problem depending on what you like.</p>
							<p>The price is definitely a benefit here, as this pair is affordable and offers decent quality for what you pay.</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Comfortable</li>
											<li className="list-group-item">Breathable and moisture-absorbing material</li>
											<li className="list-group-item">Good for everyday wear</li>
											<li className="list-group-item">Can be worn for long hours</li>
											<li className="list-group-item">Affordable</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Might press on the pinky toe too much</li>
											<li className="list-group-item">Not enough compression for some individuals</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/Bitly-Plantar-Fasciitis-Premium-Compression/dp/B01091ZLGC?tag=" + infoData.amz_tag }>
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
								src="https://m.media-amazon.com/images/I/91-t9-myzWL._SX522_.jpg" 
								width="522" 
								height="522"
								alt="Physix Gear Plantar Fasciitis Socks" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="physix-gear-plantar-fasciitis-socks" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/gp/product/B01LYJ706O?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="Physix Gear Plantar Fasciitis Socks" 
										alt="Physix Gear Plantar Fasciitis Socks"
									>
									Physix Gear Plantar Fasciitis Socks
									</a>
								</Link>
							</h2>
							<p>Physix compression socks are designed to be worn day and night, and they do a solid job of improving circulation for those with plantar fasciitis.</p>
							<p>Want to know more about them? Read on.</p>
							<p>This pair is good at providing compression and alleviating pain without restricting motion.</p>
							<p>But, everything isn&apos;t great as many users who have wide feet have complained that this model is just too snug for them which creates more discomfort than benefits.</p>
							<p>The top part of the sock has a non-slip cuff which will help keep it in place, while the lightweight heel provides additional comfort as it takes off the unnecessary pressure from this part of the foot.</p>
							<p>They are ankle-high models with open toes, and if you find the right size for you, they are quite comfortable to wear.</p>
							<p>The material is double-stitched and feels very durable when holding it.</p>
							<p>It is comprised of 80% nylon and 20% spandex which gives it its moisture absorbing properties, that keep the feet dry.</p>
							<p>The socks are available in three different colors &ndash; black, purple, and skin so you can match them with your favorite outfits. The skin color might appeal to those who like to wear sandals.</p>
							<p>The price of Physix is a bit higher than that of the other pairs I reviewed today. Whether it is worth it or not depends on the user&apos;s experience, but my opinion is that the other brands perform just as well for less money.</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Alleviates pain</li>
											<li className="list-group-item">Breathable and moisture-wicking material</li>
											<li className="list-group-item">Comfortable</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Too snug for people with wide feet</li>
											<li className="list-group-item">Expensive</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/gp/product/B01LYJ706O?tag=" + infoData.amz_tag }>
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
								src="https://m.media-amazon.com/images/I/51UeOIFAsfL._AC_UX569_.jpg" 
								width="569" 
								height="333"
								alt="Thorlos J Max Cushion Running Rolltop Socks" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/Thorlos-Womens-Running-Thick-Padded/dp/B0009MZUPE?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="Thorlos J Max Cushion Running Rolltop Socks" 
										alt="Thorlos J Max Cushion Running Rolltop Socks"
									>
									Thorlos J Max Cushion Running Rolltop Socks
									</a>
								</Link>
							</h2>
							<p>Last but not least, we have an American made compression sock that comes to us from Thorlos.</p>
							<p>This product is a bit different from the other four I mentioned today, and let&apos;s see how.</p>
							<p>This model has a flat knit instep as well as additional cushioning at the arch to provide the foot with the much-needed support.</p>
							<p>They do not provide as much compression as some other socks out there, but will still do a fine job of preventing one from further damaging their plantar fascia.</p>
							<p>These socks are roll tops, which means that you can roll them down below your ankles if you wish so. When they are fully spread out, they stop at your lower calf.</p>
							<p>The size measurements seem to be a recurring problem with compression socks, so a few users reported that they needed to buy these in size larger than what they usually wear.</p>
							<p>The material that they are made from is a combination of the company&apos;s special acrylic (86%), nylon (13%), and spandex (1%). As with all other socks, this one also aims to provide the feet with enough breathability and moisture-wicking properties, and it succeeds in its task.</p>
							<p>The price is reasonable, and Thorlos falls into the mid-price category.</p>
							<p>If you happen not to be satisfied with this pair, the manufacturer guarantees to return your money.</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Comfortable</li>
											<li className="list-group-item">Breathable, moisture-wicking material</li>
											<li className="list-group-item">Can be rolled down</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Fabric might be too thick for some</li>
											<li className="list-group-item">The sizing might be too small</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/Thorlos-Womens-Running-Thick-Padded/dp/B0009MZUPE?tag=" + infoData.amz_tag }>
									<a className="btn btn-lg btn-warning text-light fw-bold fs-2" target="_blank" rel="nofollow noopener" title="See Price on Amazon" alt="See Price on Amazon">SEE PRICE ON AMAZON</a>
								</Link>
							</div>
						</div> 

						<p>&nbsp;</p>
						{ /* product card: end */}


						{ /* The Final Verdict */ }
						<h2 id="the-final-verdict" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>The Final Verdict</h2>
						<p>My champion of this list is <Link href="#thirty48-plantar-fasciitis-compression-socks"><a className="text-decoration-none">the Thirty 48 pair</a></Link> for its unmatched combination of quality, comfort, and functionality. 
						It is a compression sock that will do its job right, and you will likely wear it for a long, long time.</p>

						{ /* The Final Verdict: end */ }

						<p>&nbsp;</p>
						<p className="border-bottom"></p>
						<p>&nbsp;</p>

						{ /* Informative Section */ }
						<h2 id="plantar-fasciitis-risk-factors" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Plantar Fasciitis Risk Factors</h2>
						<p>Despite cases where there were no specific reasons for the occurrence of plantar fasciitis, we have a number of risk factors which increase the possibility of this kind of injury:</p>
						<h3 className="mt-5">Age</h3>
						<p>Research has shown that people from 40 to 60 are at a higher risk of developing plantar fasciitis.</p>
						<h3 className="mt-5">Physical Activity</h3>
						<p>Any kind of physical activity can cause this problem, but it is especially common with runners, ballet dancers, and aerobic dancers. The reason for this is that the activities mentioned above place a significant amount of pressure on the heel.</p>
						<h3 className="mt-5">A Pre-existing Foot Condition</h3>
						<p>People who have certain foot conditions such as&nbsp;<Link href="/how-to-fix-high-arches"><a className="text-decoration-none">high arches</a></Link>&nbsp;or&nbsp;<Link href="/flat-feet-exercises"><a className="text-decoration-none">flat feet</a></Link>&nbsp;are more prone to developing plantar fasciitis than those who don&apos;t. Again, this is due to the heel enduring a lot of stress.</p>
						<h3 className="mt-5">Weight</h3>
						<p>Overweight individuals are at a higher risk of getting injured.</p>
						<h3 className="mt-5">Long-Standing Hours</h3>
						<p>Individuals who work in certain professions that involve a lot of walking and standing (hairdressers, nurses, teachers, factory workers) have shown a higher tendency of developing this condition.</p>


						<p>&nbsp;</p>
						<h2 id="the-benefits-of-socks-for-plantar-fasciitis" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>The Benefits of Socks for Plantar Fasciitis</h2>
						<p>Though compression socks don&apos;t provide the solid support that special running shoes do, they do help in alleviating pain and helping one perform their daily tasks despite the injury. There are a few key advantages that this item provides, so let&apos;s talk about them a bit:</p>
						<h3 className="mt-5">Convenient</h3>
						<p>Unlike shoes or insoles, these socks can usually be worn for the entire day as they do not cause discomfort to one's feet.</p>
						<p>In some cases, you can even wear them while you sleep.</p>
						<p>You can also wear your regular socks on top of them so that they match your favorite outfit or clothing style.</p>
						<h3 className="mt-5">Pain Relieving</h3>
						<p>The great thing about compression is that it does help in decreasing the levels of pain that people feel.</p>
						<p>Quality compression socks that fit your feet well will undoubtedly help you normalize your lifestyle even when suffering from plantar fasciitis.</p>
						<h3 className="mt-5">Affordable</h3>
						<p>Perhaps the best reason for buying a pair of plantar fasciitis socks is that they will (most likely) not break your bank.</p>
						<p>They are the cheapest piece of walking/running aid equipment which is effective and which can last for a long time.</p>


						<p>&nbsp;</p>
						<h2 id="what-to-consider-when-buying-socks-for-plantar-fasciitis" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What to Consider When Buying Socks for Plantar Fasciitis?</h2>
						<p>Before you venture out on a shopping spree, it would be good to know which features to look for in socks for plantar fasciitis.</p>
						<p>It is important that you read the following section because many of these characteristics tend to be overlooked by buyers, and then they end up being unsatisfied with what they&apos;ve bought.</p>
						<p>To ensure contentment with the acquired product as well as proper functionality, please check out the sections below.</p>
						<h3 className="mt-5">Compression and Arch support</h3>
						<p>The thing that you need to pay attention to here is the way that compression is spread out through the various parts of the foot.</p>
						<p>Ideally, a compression sock should put pressure on the ankle as well as the balls of the foot because these are the regions most affected by plantar fasciitis. This will create sufficient arch support and reduce the amount of stress that your plantar fascia ligaments receive.</p>
						<p>By placing pressure in these regions, the socks will also improve blood circulation which will in turn help to relieve pain and even speed up the healing process.</p>
						<p>My advice would be to try on a pair and wear them for a minute or two to see whether they are doing what they should be.</p>
						<h3 className="mt-5">Size</h3>
						<p>In most cases, compression socks come in four sizes &ndash; small, medium, large, and extra large. Even though these measures should correspond to standard shoe sizes, it would be best to do an additional check with the manufacturer just to be sure.</p>
						<p>Besides this, compression socks come in different lengths. Most models go up to just above your ankle, but you can also find knee-high socks. The latter are usually used in cases of severe plantar fasciitis as they help to align the shin with the ankle and the foot.</p>
						<h3 className="mt-5">Moisture-wicking</h3>
						<p>As with most sports clothing, it is crucial that the material from which the sock is made is moisture-wicking and odor absorbing.</p>
						<p>Nobody likes to have sweaty feet because, besides being uncomfortable, this can also cause some fungal infections.</p>
						<p>Another factor that goes hand in hand with sweat is the unpleasant smell. The former is especially a problem for those who have to wear these socks for the entire day.</p>
						<p>Your best bet is to look for socks made from a combination of spandex and nylon. This is a well-tested formula which will keep your feet comfortable and dry.</p>
						<h3 className="mt-5">Padding</h3>
						<p>As these socks create a certain amount of compression, this might lead to a bit of discomfort in some areas of the foot. This is why some manufacturers started making compression socks reinforced with heel-padding.</p>
						<p>The role of this padding is to remove pressure from the heel, which is a common problem when wearing this item.</p>
						<p>Also, this addition will also help to keep one&apos;s foot in a neutral position, and this can be very helpful to those who have to stand for extended amounts of time.</p>
						<h3 className="mt-5">Price</h3>
						<p>The price of a pair depends on a few different factors such as size, length, and material.</p>
						<p>On average, the cost of these products goes from $10 to around $40.</p>
						<p>Those who are looking for something on the cheaper end of the spectrum should pay attention to the material.</p>
						<p>You should be able to find models with a 75 to 25 ratio of nylon to spandex for up to $15. This mainly refers to ankle-high socks, as those which go up to the knees will probably cost more.</p>

						<p>&nbsp;</p>
		<div className="alert alert-success" role="alert">
						<p>Besides my top 5 picks, the market is flooded with compression socks and sleeves; so I would advise you to do more research with the help of my buying guide, and maybe you&apos;ll come across something amazing that I missed.</p>
		</div>
						{ /* Informative Section: end */ }

					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }

	</>)
}
