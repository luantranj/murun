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
	const postId = 35;
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
						<p>If you are as passionate for&nbsp;<Link href="/21-minute-5k"><a className="text-decoration-none">running</a></Link>&nbsp;as I am, you probably have some experience with various&nbsp;<Link href="https://medlineplus.gov/footinjuriesanddisorders.html"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">foot injuries and conditions</a></Link>&nbsp;as well.</p>
						<p>If not, do not worry, I am here, as always, to guide you through everything you need to know about running.</p>
						<p>So, what is the topic for today?</p>
						<p>I will discuss a condition called&nbsp;<Link href="https://www.nhs.uk/conditions/metatarsalgia/"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">metatarsalgia</a></Link>&nbsp;which is characterized by the pain in the metatarsal area of the foot.</p>
						<p>Why?</p>
						<p>The inflammation in the&nbsp;<Link href="/dropped-metatarsal/"><a className="text-decoration-none">metatarsal</a></Link>&nbsp;area is quite common in passionate runners, and you too might already suffer from it without even realizing that.</p>
						<p>You would not want that, am I right?</p>
						<p>So, it does not matter if you already suffer from metatarsalgia or not; you should definitely know what it is, how you can diagnose it, and how it can be prevented or treated.</p>
						<p>The next logical step would be to try and find the best running shoes for metatarsalgia since no runner wants ever to stop running, am I right?</p>
						<p>Unfortunately, the pain caused by metatarsalgia can be quite debilitating, especially if you do not wear appropriate shoes that will help relieve it.</p>
						<p>Therefore, I have dedicated my time and invested my vast experience to identify the best running shoes for metatarsalgia that will help you continue being active.</p>
						<p>So, be sure to read what follows!</p>

						<p>&nbsp;</p>
						<h2 className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>The 5 Best Running Shoes for Metatarsalgia Currently Available on the Market - My Reviews</h2>

						{ /* product card */}
						<p>&nbsp;</p>

						<div className="card shadow px-3 bg-body rounded mb-4">
							<div className="d-flex justify-content-center mb-3">
							    <Image
								src="https://m.media-amazon.com/images/I/71Hh29cXe5L._AC_UX575_.jpg" 
								width="575" 
								height="345"
								alt="HOKA ONE ONE Bondi 5 Running Shoe" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="hoka-one-one-bondi-5-running-shoe" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/HOKA-ONE-Womens-Blueprint-Running/dp/B072366MYQ?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="HOKA ONE ONE Bondi 5 Running Shoe" 
										alt="HOKA ONE ONE Bondi 5 Running Shoe"
									>
									HOKA ONE ONE Bondi 5 Running Shoe
									</a>
								</Link>
							</h2>
							<p>Hoka One One Bondi 5 Running Shoe are a great choice when you want to prevent metatarsalgia or relieve its symptoms due to the well-cushioned insole which does not retain any moisture and thus extends the feeling of the overall comfort as well.</p>
							<p>At first sight, these shoes might put you off by how bulky they appear, but in reality, they are lighter than most shoes I have had before.</p>
							<p>The Ortholite&reg; Insole will provide you with all the cushioning you need while the toe box is large enough not to put any additional pressure on your forefoot.</p>
							<p>The shock absorbing is superb so that you will feel like you could be running off-road too.</p>
							<p>The upper fits like a sock, if you get the size right that is, and the sole is stiff enough without causing you to experience heaviness.</p>
							<p>The rubber sole also provides great grip on dry and wet surfaces alike.</p>
							<p>As for downsides, they are a bit pricey and can be too tight-fitting for some people.</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Great Cushioning</li>
											<li className="list-group-item">Well-ventilated</li>
											<li className="list-group-item">Stable and shock-absorbing</li>
											<li className="list-group-item">Light and very comfortable</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">A bit pricey in comparison to other running shoes</li>
											<li className="list-group-item">The sizing is not consistent</li>
											<li className="list-group-item">The sole tends to wear out fast</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/HOKA-ONE-Womens-Blueprint-Running/dp/B072366MYQ?tag=" + infoData.amz_tag }>
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
								src="https://m.media-amazon.com/images/I/41-N4nqIMbL._AC_.jpg" 
								width="500" 
								height="300"
								alt="ASICS Gel-Venture 6 MX Running Shoes" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="asics-gel-venture-6-mx-running-shoes" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/ASICS-Gel-Venture-Running-Indigo-Energy/dp/B01N3Y57I0?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="ASICS Gel-Venture 6 MX Running Shoes" 
										alt="ASICS Gel-Venture 6 MX Running Shoes"
									>
									ASICS Gel-Venture 6 MX Running Shoes
									</a>
								</Link>
							</h2>
							<p>ASICS Gel-Venture 6 MX Running Shoes seem to directly target at the runners who have issues such as metatarsalgia.</p>
							<p>The Rearfoot Gel system provides extra support in the metatarsal area and prevents the development of this dire condition in the first place.</p>
							<p>The supportive gel pads are placed right under the metatarsal bones and reduce the amount of pressure they would otherwise have to endure.</p>
							<p>These ASICS running shoes are also quite spacious, so no one will complain that they are too tight fitting like Hoka shoes.</p>
							<p>There is enough space in the toe area as well.</p>
							<p>The upper is made from synthetic materials that seem to be of good quality, and there are multiple instances of reinforcement.</p>
							<p>Unfortunately, this makes these shoes a bit heavy which can be an issue for some runners although I have personally not noticed them weighing me down.</p>
							<p>Both sock liner and insole can be removed so that you can insert medical orthotic if needed as well.</p>
							<p>Rubber sole provides stability, good grip and adds to shock absorbing.</p>
							<p>On the downside, the inside seems to be poorly ventilated which can cause your feet to feel warm and sweat excessively.</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Built-in Rearfoot Gel system prevents/relieves metatarsalgia</li>
											<li className="list-group-item">Reasonable price</li>
											<li className="list-group-item">High-quality build</li>
											<li className="list-group-item">Both sock liner and insole are removable if you seek extra space or need to insert a medical orthotic</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Feel a bit heavy in comparison to other running shoes</li>
											<li className="list-group-item">Poor ventilation</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/ASICS-Gel-Venture-Running-Indigo-Energy/dp/B01N3Y57I0?tag=" + infoData.amz_tag }>
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
								src="https://m.media-amazon.com/images/I/71a1nPm782L._AC_UX575_.jpg" 
								width="575" 
								height="329"
								alt="Brooks Glycerin 17" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="brooks-glycerin-17" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/Brooks-Womens-Glycerin-17-Ebony/dp/B07D3YTVSP?tag=" + infoData.amz_tag }>
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
							<p>Brooks might be a brand that is more famous for their walking footwear, but the Glycerin 17 model is sure to make them equally celebrated in the running footwear realm as well.</p>
							<p>This model is designed for the ladies but can take up pressure like a man. Indeed, the amount of shock these shoes can absorb is awe-inspiring.</p>
							<p>Furthermore, the outsole is not only thick but also has grooves at both sides and the entire underside. This allows for the ample support as well as reduction of vibrations you would otherwise feel on your feet.</p>
							<p>The footbed is generously cushioned while the upper fits like a glove thanks to the 3D Fit Print technology making the shoe not only comfortable but also stable and secure as it holds your foot in place at all time.</p>
							<p>These shoes feature a wider toe box than most other models and are thus ideal for people with a wider forefront and a flat or neutral arch.</p>
							<p>Sizing runs a bit small, so it is better to try them on before the purchase.</p>
							<p>As the brand is rather new to the running gear industry, the price could have been a bit lower as well.</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Made by a company with a long tradition</li>
											<li className="list-group-item">Great support in the midsole, outsole, and the upper of the shoe</li>
											<li className="list-group-item">Light and comfortable</li>
											<li className="list-group-item">Breathable</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Run about half a size down</li>
											<li className="list-group-item">High price</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/Brooks-Womens-Glycerin-17-Ebony/dp/B07D3YTVSP?tag=" + infoData.amz_tag }>
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
							<p>Saucony Kinvara 7 running shoes are both lightweight and durable which makes them more than suitable for people who suffer from metatarsalgia.</p>
							<p>The toe box is wide while the midfoot provides a snug feel and is great for all of you with a flat or neutral foot arch.</p>
							<p>The injection blown rubber soles guarantee you a long usage as well as good traction and shock absorption no matter the terrain.</p>
							<p>The TRI-FLEX configuration will provide you with a secure grip even on the wet trail.</p>
							<p>The midsole technology is well thought of as well; resilient EverRun SSL makes this area firm, dense and durable too.</p>
							<p>The shoes are versatile, and the pro-lock lacing system makes them stand out among other running shoe models on the market.</p>
							<p>There is always a downside to everything, and Kinvara 7 shoes are no exception- the sizing runs half a number small and the pro-lock system can feel a bit constrictive at times.</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">The comfortable FlexFilm technology</li>
											<li className="list-group-item">Innovative Pro-Lock lacing system</li>
											<li className="list-group-item">Extra lightweight</li>
											<li className="list-group-item">Versatile and durable</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Pro-Lock Lacing system can feel restrictive to some</li>
											<li className="list-group-item">Inconsistent sizing</li>
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
								src="https://m.media-amazon.com/images/I/813lieDer3L._AC_UX575_.jpg" 
								width="575" 
								height="438"
								alt="NIKE Air Max Invigor Print Running Shoes" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="nike-air-max-invigor-print-running-shoes" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/NIKE-Invigor-Running-Bright-Anthracite/dp/B00VDHUV7Q?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="NIKE Air Max Invigor Print Running Shoes" 
										alt="NIKE Air Max Invigor Print Running Shoes"
									>
									NIKE Air Max Invigor Print Running Shoes
									</a>
								</Link>
							</h2>
							<p>Nike Men&rsquo;s Air Max Invigor Print running shoes are finally a model that is true to size and can be ordered online without any concerns.</p>
							<p>Besides, the cushioning provided by the IU midsole as well as the visible Max Air units in the heels make these shoes a great choice for people who suffer from metatarsalgia.</p>
							<p>The flex grooved IU outsoles feature rubber pods that will secure a firm grip, good traction, and durability of the shoes.</p>
							<p>They seem bulky, but they are rather lightweight and will not weigh you down for sure.</p>
							<p>The upper is made from extra breathable Breathe Tech mesh which guarantees no sweating and provides comfort as well.</p>
							<p>The cushioned insole and padded ankle collar, add to the shock absorption and help relieve the pressure on the balls of the feet.</p>
							<p>If you are a Nike fan, you are sure to appreciate the retro-inspired design of the graphic print on the sides of the shoes (the same as the iconic Air Max 95).</p>
							<p>However, these shoes are made for dry weather conditions only, and if you need versatile shoes that can withstand all the elements, you should think twice about buying this model.&nbsp;</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Classic Nike look</li>
											<li className="list-group-item">Rubber toe bumper</li>
											<li className="list-group-item">Light-weighted</li>
											<li className="list-group-item">Padded tongue and collar for extra comfort</li>
											<li className="list-group-item">True sizing</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Some people find the padding too much</li>
											<li className="list-group-item">Designed to be used in dry weather only</li>
											<li className="list-group-item">The sole tends to wear out fast</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/NIKE-Invigor-Running-Bright-Anthracite/dp/B00VDHUV7Q?tag=" + infoData.amz_tag }>
									<a className="btn btn-lg btn-warning text-light fw-bold fs-2" target="_blank" rel="nofollow noopener" title="See Price on Amazon" alt="See Price on Amazon">SEE PRICE ON AMAZON</a>
								</Link>
							</div>
						</div> 

						<p>&nbsp;</p>
						{ /* product card: end */}



						{ /* The Final Verdict */ }
						<h2 id="the-final-verdict" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>The Final Verdict</h2>
						<p>In my humble opinion, all the guys who suffer from metatarsalgia should opt for the&nbsp;<Link href="#asics-gel-venture-6-mx-running-shoes"><a className="text-decoration-none">ASICS Gel-Venture 6 MX Running Shoes</a></Link>&nbsp;while the ladies should opt for&nbsp;<Link href="#brooks-glycerin-17"><a className="text-decoration-none">Brooks Glycerin 17 Running Shoes</a></Link>&nbsp;.</p>
						<p>Both models provide ample support to the forefoot area and absorb a great deal of shock.</p>
						{ /* The Final Verdict: end */ }

						<p>&nbsp;</p>
						<p className="border-bottom"></p>
						<p>&nbsp;</p>

						{ /* Informative Section */ }
						<h2 id="metatarsalgia-defined" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Metatarsalgia Defined</h2>
						<div className="d-flex justify-content-center mb-5 shadow rounded">
							<Image
								src="https://res.cloudinary.com/muru/image/upload/v1632988367/best-running-shoes-for-metatarsalgia/what-is-dropped-metatarsal_sh4kur.jpg" 
								width="730" 
								height="650"
								alt="Ball of Foot Pain plantar view" 
							/>
						</div>
						<p>Metatarsalgia is quite a big word, don&rsquo;t you agree? It sounds rather scary as well.</p>
						<p>However, no matter the complexity of its name, metatarsalgia is, in reality, quite a common condition that can be dealt with quite quickly and successfully if recognized on time.</p>
						<p>For this reason, everyone who runs needs to be aware of this condition, its symptoms, and causes, as well as some treatment suggestions.</p>
						<p>So, let us begin:</p>

						<h3 id="what-is-metatarsalgia" className="mt-5">What is Metatarsalgia?</h3>
						<p>Your ball of the foot is known as the metatarsal area.</p>
						<p>If it gets sensitive or inflamed, you are dealing with metatarsalgia - it is as simple as that.</p>
						<p>The pain caused by this condition is most usually felt near the big toe or close to&nbsp;<Link href="https://en.wikipedia.org/wiki/Metatarsal_bones"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">the metatarsal heads</a></Link>, or to be more precise, under the second, third and fourth metatarsal head.</p>
						<p>I think there is no need to say that the ball of the foot, or the metatarsal area, suffers the greatest pressure while we are running and that pain located in this part of the foot can thus make running very unpleasant and painful.</p>
						<p>No runner wants that.</p>


						<h3 id="what-causes-metatarsalgia" className="mt-5">What Causes Metatarsalgia?</h3>
						<div className="d-flex justify-content-center my-5 shadow rounded">
							<Image
								src="https://res.cloudinary.com/muru/image/upload/v1632991124/best-running-shoes-for-metatarsalgia/vector-diagram-forefoot-pain-metatarsalgia-symptom_a4dcd4.jpg" 
								width="730" 
								height="599"
								alt="Metatarsal heads (area of tenderness): Plantar and Side views" 
							/>
						</div>
						<p>The most common causes of metatarsalgia are:</p>
						<ul>
							<li className="mb-3">Constant or long-lasting pressure on the ball of the foot, especially when it is intense</li>
							<li className="mb-3">Inappropriate footwear such as shoes that are too restrictive, have poor arch support, or a toe area which is too narrow</li>
							<li className="mb-3">High heel shoes, especially if they are worn for long periods of time</li>
							<li className="mb-3">Standing for too long</li>
							<li className="mb-3">High impact activities involving running or jumping</li>
							<li className="mb-5">Thinning of the fat pad of the foot which naturally occurs with aging</li>
						</ul>
						<p>There are also some predisposing anatomical conditions which can cause or contribute to metatarsalgia, and those are:</p>
						<ul>
							<li className="mb-3">Prominent metatarsal heads</li>
							<li className="mb-3">Weak&nbsp;<Link href="http://aclandanatomy.com/MultimediaPlayer.aspx?multimediaid=10528219"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">toe flexors</a></Link></li>
							<li className="mb-3">Tight&nbsp;<Link href="http://aclandanatomy.com/MultimediaPlayer.aspx?multimediaid=10528217"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">toe extensors</a></Link></li>
							<li className="mb-3">Hypermobile first foot bone</li>
							<li className="mb-3">Hammertoe deformity</li>
							<li className="mb-3">Tight&nbsp;<Link href="/achilles-tendon-massage"><a className="text-decoration-none">Achilles tendon</a></Link></li>
							<li className="mb-3">Extreme&nbsp;<Link href="/flat-feet-pronation"><a className="text-decoration-none">foot pronation</a></Link></li>
							<li className="mb-3">Excess body weight</li>
						</ul>

						<h3 id="how-can-you-recognize-metatarsalgia" className="mt-5">How Can You Recognize Metatarsalgia?</h3>
						<p>The main symptoms of metatarsalgia are:</p>
						<ul>
							<li className="mb-3">The pain at the end of one or more of the metatarsal bones.</li>
							<li className="mb-3">Most often this pain gets worse when you are active (run, walk, and stand in one place for too long).</li>
							<li className="mb-3">People describe it as burning, sharp and agonizing.</li>
							<li className="mb-3">Tingling sensation in your toes.</li>
							<li className="mb-3">Numbness in your toes.</li>
							<li className="mb-3">Feeling that you have something in your shoe.</li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="metatarsalgia-treatment" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Metatarsalgia Treatment</h2>
						<p>As with any condition, you should visit your doctor before applying any treatment, but most common recommendations for treating metatarsalgia are as follow:</p>
						<ul>
							<li className="mb-3">You should try to be less active and rest more for at least some time</li>
							<li className="mb-3">You can apply ice packs to the area in which you feel pain as that will help relieve it as well as reduce inflammation</li>
							<li className="mb-3">You can take pain-relieving medications such as aspirin, naproxen sodium (Aleve), or ibuprofen (Motrin IB, Advil) as that too will help lessen pain and inflammation</li>
							<li className="mb-3">Buy and wear appropriate shoes</li>
							<li className="mb-3">Buy and use appropriate insoles or metatarsal pads</li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="what-are-the-right-running-shoes-for-metatarsalgia" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What Are the Right Running Shoes for Metatarsalgia?</h2>
						<p>As you could read, one of the main causes of metatarsalgia is wearing inappropriate shoes; this is even more so if you run on a daily basis and wear unsuitable running shoes.</p>
						<p>On the other hand, even if your condition was not directly caused by your poor choice of shoes, wearing such shoes can add to the discomfort or worsen the agony while a simple change into the appropriate footwear could minimize your pain and relieve the symptoms of metatarsalgia.</p>
						<p>The conclusion is easy to reach; you should find the best running shoes for metatarsalgia as soon as you experience initial symptoms or any discomfort in the metatarsal area.</p>
						<div className="mt-5 alert alert-primary text-center" role="alert">
							<p>What should you look for when searching for the best running shoes for metatarsalgia?</p>
						</div>
						<h3 className="mt-3">The Right Amount of Support</h3>
						<p>The best walking shoes for metatarsalgia should provide enough support under the metatarsal arch.</p>
						<p>You should, therefore, opt for running shoes with extra support and padding that will help spread the metatarsal bones and liberate the pinched nerves thus reducing the pain you feel.</p>
						<h3 className="mt-5">A Perfect Fit</h3>
						<p>Make sure that the shoes you buy for running fit you perfectly and you feel comfortable wearing them.</p>
						<h3 className="mt-5">The Appropriate Arch Support</h3>
						<p>Besides cushioning that diminishes the pressure your metatarsal bone has to endure, the best running shoes for metatarsalgia have to provide appropriate arch support as well.</p>
						<h3 className="mt-5">The Appropriate Toe Box</h3>
						<p>The choice of toe box depends on whether you have <Link href="/flat-feet-pronation"><a className="text-decoration-none">a flat/neutral arch</a></Link> or <Link href="/how-to-fix-high-arches"><a className="text-decoration-none">a high one</a></Link>.</p>
						<p>If you belong to the first group, you should opt for the running shoes with a wide toe box.</p>
						<p>If, on the other hand, you have a high arch, you might consider not only a narrower toe box but also a shock absorbing insole.</p>
						<p>In any case, avoid the shoes that offer no arch support and feature a soft midsole!</p>
						<h3 className="mt-5">The Appropriate Sole</h3>
						<p>The best running shoes for metatarsalgia need to have a stiff sole that will protect your feet from the direct impact.</p>
						<p>Some people find that a rocker sole bottom makes a good choice as well, especially if you have no balance issues.</p>
						<h3 className="mt-5">The Weight</h3>
						<p>People with metatarsalgia should opt for the lighter shoes as a heavy shoe can add to the pressure the foot endures and worsen the already existing condition.</p>

						<p>&nbsp;</p>
						<div className="alert alert-success" role="alert">
							<p>Whatever model you choose, you cannot go wrong, so buy the best running shoes for metatarsalgia and help yourself feel better today!</p>
						</div>
						{ /* Informative Section: end */ }
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
