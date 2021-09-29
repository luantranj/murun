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
	const postId = 39;
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
						<p>Trail running seems to be getting more and more popular, and an increasing number of people are moving their jogging routes from the streets to the mountains.</p>
						<p>This is, of course, great because it&rsquo;s a wonderful opportunity to get some exercise while enjoying the soothing, natural surroundings.</p>
						<p>However, many of these folks often encounter a health problem called peroneal tendonitis, due to running on steep and uneven surfaces.</p>
						<p>This condition can be quite painful and can leave a runner unable to perform the favorite physical activity.</p>
						<p>Fortunately, this injury is treatable, and one can prevent its recurrence with a good set of shoes.</p>
						<p>In today&rsquo;s article, I will be reviewing some of the best running shoes for peroneal tendonitis, 
							and present some useful information to help you choose the appropriate model as well.
						</p>


						<p>&nbsp;</p>
						<h2 className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Top 5 Running Shoes for Peroneal Tendonitis</h2>

						{ /* product card */}
						<p>&nbsp;</p>

						<div className="card shadow px-3 bg-body rounded mb-4">
							<div className="d-flex justify-content-center mb-3">
							    <Image
								src="https://m.media-amazon.com/images/I/81ZKDthg4iL._AC_UX575_.jpg" 
								width="575" 
								height="327"
								alt="ASICS Gel-Nimbus 18 Running Shoe" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="asics-gel-nimbus-18-running-shoe" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/ASICS-Womens-Gel-Nimbus-running-Silver/dp/B017TGLWSG?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="ASICS Gel-Nimbus 18 Running Shoe" 
										alt="ASICS Gel-Nimbus 18 Running Shoe"
									>
									ASICS Gel-Nimbus 18 Running Shoe
									</a>
								</Link>
							</h2>
							<p>Asics is a well-known name in the world of sports, and it is especially cherished among runners.</p>
							<p>Today, I&rsquo;m inspecting their Gel Nimbus 18 model, so let&rsquo;s take a closer look at it.</p>
							<br />
							<p>First and foremost, the main advantage of this shoe is its superb cushioning.</p>
							<p>The brands FluidRide midsole technology utilizes gel to form the cushioning, and it is effective in taking pressure off the tendons.</p>
							<br />
							<p>Second, the upper part of the shoe employs the FluitFit technology, a stretchy mesh, which adapts the shoe to the individual&rsquo;s width of the foot for ultimate comfort.</p>
							<p>The sole is made from rubber and laced with gel in order to maximize shock absorption properties.</p>
							<p>Each part of the shoe is masterfully crafted, and everything works well when put together.</p>
							<p>However, I must say that the durability of Nimbus 18 is what is lacking, and frequent runners will probably have to replace the shoes after a year-or-so of intense use.</p>
							<br />
							<p>Third, this pair is lightweight which is what you definitely want, especially when recovering from tendonitis.</p>
							<br />
							<p>Last, a thing that might throw some people off the price, as it is very high compared to some of its competition.</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Lightweight</li>
											<li className="list-group-item">Excellent cushioning properties</li>
											<li className="list-group-item">Good shock absorption</li>
											<li className="list-group-item">Comfortable</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Not very durable</li>
											<li className="list-group-item">Very expensive</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/ASICS-Womens-Gel-Nimbus-running-Silver/dp/B017TGLWSG?tag=" + infoData.amz_tag }>
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
							<p>If you&rsquo;ve never heard of Brooks, it&rsquo;s about time you discover this incredible brand.</p>
							<p>Their Glycerin 17 shoe is one of the most popular in the running community.</p>
							<p>The shoes are made from a mix of mesh and various synthetic materials, which make it breathable and provide good ventilation to the feet.</p>
							<p>Despite the design being narrow, the material is stretchable and fits all foot widths without any problems.</p>
							<p>According to the company, their DNA midsole offers about 20% more cushioning than the average running shoe, which is indeed an impressive feature.</p>
							<p>Besides midfoot, there is also additional cushioning in all the pressure zones of the foot, further decreasing the risk of injury.</p>
							<p>Similar to the Asics shoe, this one too has gotten complaints about not being very durable when used frequently.</p>
							<p>The arch support is exquisite and will be suitable for most people&rsquo;s feet. If you have exceptionally high arches, you might require some orthotics as well.</p>
							<p>With the weight of only 8 ounces per shoe, this is a very light model which is a highly desirable characteristic.</p>
							<p>As for the price, the Glycerin 17 falls into the same category as the previous item on this list - they&rsquo;re expensive.</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Lightweight</li>
											<li className="list-group-item">Comfortable</li>
											<li className="list-group-item">Excellent arch support</li>
											<li className="list-group-item">Good cushioning and shock absorption</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Very expensive</li>
											<li className="list-group-item">Not very durable</li>
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
								src="https://m.media-amazon.com/images/I/81V-HLTzsKL._AC_UX575_.jpg" 
								width="575" 
								height="345"
								alt="Saucony Triumph ISO 4 Running Shoe" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="saucony-triumph-iso-4-running-shoe" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/Saucony-Triumph-ISO-Wide-Men/dp/B07L5V3LMJ?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="Saucony Triumph ISO 4 Running Shoe" 
										alt="Saucony Triumph ISO 4 Running Shoe"
									>
									Saucony Triumph ISO 4 Running Shoe
									</a>
								</Link>
							</h2>
							<p>Cushiony and lightweight - this is how the manufacturer advertises their Triumph ISO model.</p>
							<p>But what was my impression of it? Let&rsquo;s find out.</p>
							<p>The outsole of the shoe is made from special, injection-blown rubber that has cushioning which is strategically placed all over the critical points of the foot.</p>
							<p>There is also an insole made from proprietary foam to improve the cushioning even more.</p>
							<p>Now, the bottom part of the shoe is most comfortable, and the upper section follows as well.</p>
							<p>The ISO fit inner sleeve grips and secures foot so that it doesn&rsquo;t move inside the shoe.</p>
							<p>The exterior is constructed of mesh and synthetic fabrics that provide great breathability.</p>
							<p>A potential problem for some people might be the relatively narrow toe box. Even though the entire body of the shoe is stretchy, 
								it still won&rsquo;t work for some individuals with <Link href="/how-do-you-know-if-you-have-wide-feet"><a className="text-decoration-none">wide feet</a></Link>.
							</p>
							<p>On the upside, Saucony Triumph is a very light, weighing around 10 ounces per shoe.</p>
							<p>Regarding its cost, this pair is much cheaper than the previous two and offers decent value for the money.</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Secure fit for the foot</li>
											<li className="list-group-item">Great cushioning and shock absorption</li>
											<li className="list-group-item">Comfortable</li>
											<li className="list-group-item">Lightweight</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Narrow toe box might be a problem for some</li>
											<li className="list-group-item">
												Not great for people with&nbsp; 
												<Link href="/how-to-fix-high-arches"><a className="text-decoration-none">high arches</a></Link>
											</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/Saucony-Triumph-ISO-Wide-Men/dp/B07L5V3LMJ?tag=" + infoData.amz_tag }>
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
								src="https://m.media-amazon.com/images/I/81q3nfWWY9L._AC_UX575_.jpg" 
								width="575" 
								height="317"
								alt="Mizuno Wave Rider 24 Waveknit Running Shoe" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="mizuno-wave-rider-24-waveknit-running-shoe" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/Mizuno-Rider-WAVEKNIT-Running-Greywhite/dp/B07XMQ2CFP?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="Mizuno Wave Rider 24 Waveknit Running Shoe" 
										alt="Mizuno Wave Rider 24 Waveknit Running Shoe"
									>
									Mizuno Wave Rider 24 Waveknit Running Shoe
									</a>
								</Link>
							</h2>
							<p>Mizuno Wave Rider 24 has a rubber sole with a very interesting design, named CloudWave by the company.</p>
							<p>The aim of this sole is to enhance shock absorption by acting as a spring, and they provide a responsive and snappy ride.</p>
							<p>Even though these shoes have a little bit less cushioning than the other shoes I reviewed today, they are still soft and provide a lot of comfort.</p>
							<p>However, people recovering from tendonitis might require a bit softer pair.</p>
							<p>A significant advantage of Mizuno&rsquo;s sneakers is that they are lightweight while being durable, 
								with some users claiming they&rsquo;ve used them for long periods of time.
							</p>
							<p>Wave Rider 24 has excellent arch support for <Link href="/flat-feet-pronation"><a className="text-decoration-none">people with flat to normal arches</a></Link>, 
								while those with high arches will probably need a bit more.
							</p>
							<p>The price is another con of this particular model. It is far from being the most expensive, but it&rsquo;s also much pricier than some other, reputable shoes on the market.</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Lightweight and durable</li>
											<li className="list-group-item">Breathable</li>
											<li className="list-group-item">Good shock absorption</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Some people might want more cushioning</li>
											<li className="list-group-item">Expensive</li>
											<li className="list-group-item">Not optimal for high arches</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/Mizuno-Rider-WAVEKNIT-Running-Greywhite/dp/B07XMQ2CFP?tag=" + infoData.amz_tag }>
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
								src="https://m.media-amazon.com/images/I/81o-CadGeUL._AC_SX575._SX._UX._SY._UY_.jpg" 
								width="575" 
								height="335"
								alt="Adidas Performance Energy Boost 3 M Running Shoe" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="adidas-performance-energy-boost-3-m-running-shoe" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/adidas-Performance-Energy-Boost-Running/dp/B0115POV08?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="Adidas Performance Energy Boost 3 M Running Shoe" 
										alt="Adidas Performance Energy Boost 3 M Running Shoe"
									>
									Adidas Performance Energy Boost 3 M Running Shoe
									</a>
								</Link>
							</h2>
							<p>Last but not least, we have the industry giant Adidas, and now I&rsquo;ll dissect their Energy Boost 3.</p>
							<p>The shoe gets its name from Adidas&rsquo; boost foam which the sole is made from. This material manages to be comfortable, responsive, and durable all at once.</p>
							<p>A potential setback of this sole is that it is perhaps a bit stiffer than one would typically want in case of peroneal tendonitis.</p>
							<p>Another cool thing about this shoe is the Torsion system, a midsole designed in such a way to provide the best possible support and stability between the heel and forefoot.</p>
							<p>The stretchy, synthetic mesh of the upper is breathable, but the plastic overlay tends to be a bit uncomfortable, especially when going for long runs.</p>
							<p>The purpose that the overlay is there is to remove the need for stitches, which, as it turns out, can be a two-edged sword.</p>
							<p>When it comes to price, this is one of the more affordable models in today&rsquo;s reviews. It still isn&rsquo;t cheap, but it won&rsquo;t break the bank for most people.</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Boost foam provides good cushioning</li>
											<li className="list-group-item">Pretty durable</li>
											<li className="list-group-item">Fair price</li>
											<li className="list-group-item">Lightweight</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">A bit stiff</li>
											<li className="list-group-item">The welded overlays might be uncomfortable</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/adidas-Performance-Energy-Boost-Running/dp/B0115POV08?tag=" + infoData.amz_tag }>
									<a className="btn btn-lg btn-warning text-light fw-bold fs-2" target="_blank" rel="nofollow noopener" title="See Price on Amazon" alt="See Price on Amazon">SEE PRICE ON AMAZON</a>
								</Link>
							</div>
						</div> 

						<p>&nbsp;</p>
						{ /* product card: end */}


						{ /* The Final Verdict */ }
						<h2 id="the-final-verdict" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>The Final Verdict</h2>
						<p>As I&rsquo;ve reached the end of this article, the only thing that&rsquo;s left to do is declare the winner of the roundup.</p>
						<p>It was a tight race, but I decided to go for&nbsp;<Link href="#asics-gel-nimbus-18-running-shoe"><a className="text-decoration-none">Asics Gel Nimbus 18</a></Link>.</p>
						<p>My reasons for doing so are the following - the shoe has excellent cushioning and shock absorption, and it&rsquo;s breathable as well as comfortable.</p>
						<p>Yes, you will have to pay a few extra dollars for it, but I&rsquo;m sure that you won&rsquo;t regret it.</p>

						{ /* The Final Verdict: end */ }

						<p>&nbsp;</p>
						<p className="border-bottom"></p>
						<p>&nbsp;</p>

						{ /* Informative Section */ }
						<h2 id="about-peroneal-tendonitis" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>About Peroneal Tendonitis</h2>
						<div className="d-flex justify-content-center mb-5 shadow rounded">
							<Image
								src="https://res.cloudinary.com/muru/image/upload/v1632900277/best-running-shoes-for-peroneal-tendonitis/peroneal-tendonitis_w7tyd1.jpg" 
								width="730" 
								height="284"
								alt="Peroneal Tendonitis: Area of pain" 
							/>
						</div>
						<p>As the name implies, Peroneal Tendonitis is an injury of one or both peroneal tendons, located on each side of the heel, connecting the&nbsp;
							<Link href="/dropped-metatarsal"><a className="text-decoration-none">metatarsals&nbsp;</a></Link>with the calves.
						</p>
						<p>This condition can be diagnosed as a tear or inflammation of these tendons, and it often occurs with runners who run on uneven and steep surfaces.</p>
						<p>Its symptoms include pain and swelling, and the area feels tender when you touch it. It leaves the foot weak, 
							unstable and makes walking extremely difficult due to the foot&apos;s inability to support the weight of the body.
						</p>
						<p>In some rare instances, peroneal tendonitis gets misdiagnosed which leads to improper treatment and worsens the patient&rsquo;s condition as a result.</p>
						<p>In order to get the best possible diagnosis, it is advisable to visit a foot and ankle surgeon.</p>
						<p>The surgeon will check the foot and look for swelling, instability, pain, and warmth, usually on the outer side of one&rsquo;s ankle.</p>
						<p>An x-ray or some other form of imaging might be utilized to determine if any other related injuries have occurred.</p>
						<p>&nbsp;</p>
						<h2 id="causes-of-peroneal-tendonitis" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Causes of Peroneal Tendonitis</h2>
						<p>The primary physiological cause of this form of tendonitis is&nbsp;
							<Link href="https://www.medicalnewstoday.com/articles/320582.php"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">supination</a></Link>
							&nbsp;or underpronation of the foot.
						</p>
						<p>It usually happens to those with high-arched, flexible feet which tend to stretch a lot and thus spread the plantar fascia.</p>
						<p>Also, running on uneven surfaces will give you less control over your landing position, and you might end up supinating more than usual.</p>
						<p>Another common cause is running at high speeds and doing a lot of volume without proper preparation. Obviously, you don&apos;t want to overtrain</p>
						<p>In order to be able to&nbsp;<Link href="/peroneal-tendonitis-running"><a className="text-decoration-none">run very fast safely</a></Link>, 
							you have to build up the resilience of Peroneal tendons over a certain period of time.
						</p>
						<p>&nbsp;</p>
						<h2 id="treatment" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Treatment</h2>
						<p>Depending on the severity and specific details of one&rsquo;s injury, there are different ways of treating it. Have a look at the list below to see what I&rsquo;m talking about:</p>
						<h3 className="mt-5">Rest</h3>
						<p>If your injury isn&rsquo;t very serious, then resting is probably the best thing you can do.</p>
						<p>This means that training is out of the question and walking should be done slowly and carefully as you do not want to put any unnecessary strain on the tendon.</p>
						<p>Some doctors will recommend resting the foot in an elevated position.</p>

						<h3 className="mt-5">Casting</h3>
						<p>In some instances, casting is used to restrict movement. This is usually done in case of a tendon tear.</p>

						<h3 className="mt-5">Physical Therapy</h3>
						<p>It is not uncommon for the patient to undergo various forms of physical therapy for optimal and speedy recovery.</p>
						<p>Some common examples include ice, ultrasound, or heat therapy, often used to decrease swelling and numb the pain.</p>
						<p>As the situation improves, the therapist will introduce some light exercises aimed at improving one&rsquo;s range of motion and strengthening the muscles.</p>

						<h3 className="mt-5">Stretching and Massage</h3>
						<p>As the peroneal tendon connects the calves to the metatarsal, stretching,&nbsp;massaging, and loosening up the calf muscles is recommended.</p>
						<p>The reason for this is that tight muscles place more stress on the mid-foot as well as the tendons, which might hinder the recovery.</p>

						<h3 className="mt-5">Surgery</h3>
						<p>If the injury is severe, then surgery might be required to mend the tendon or other parts of the foot.</p>
						<p>After that, the patient will have to go through a phase of physical therapy and other forms of rehabilitation.</p>

						<h3 className="mt-5">Medication</h3>
						<p>Ibuprofen and similar anti-inflammatory drugs are sometimes prescribed to help reduce swelling and pain.</p>
						<p>Seldom, the doctors will give the patient a powerful cortisone injection in an attempt to mitigate inflammation.</p>
		
						<p>&nbsp;</p>
						<h2 id="prevention" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Prevention</h2>
						<p>As it is always better to prevent than to treat, I&rsquo;d suggest you pay special attention to this section of the article.</p>
						<p>Tendonitis is sometimes caused by muscle imbalances or improper running technique, so it would be wise to address these issues first.</p>
						<p>Talk to a professional (a personal trainer or a physical therapist) who can assess your body&rsquo;s condition as well as your running form, and correct it if it&rsquo;s not right.</p>
						<p><strong>SIDENOTE</strong>.&nbsp;
							<span className="text-muted">
								if you have an&nbsp;
								<Link href="/is-my-ankle-sprained-or-broken"><a className="text-decoration-none">ankle sprain or injury</a></Link>, 
								don&apos;t try to return to excercise&nbsp;
								<Link href="https://www.healthline.com/health/fitness-exercise/peroneal-tendonitis-stretches#prevention">
									<a className="text-decoration-none" target="_blank" rel="noopener noreferrer">too soon</a>
								</Link>
								&nbsp;which can cause peroneal tendonitis.
							</span>
						</p>
						<p>Sneakers also play a huge role.</p> 
						<p>As a matter of fact, the very reason I&rsquo;m writing about them today is that they can be a massive factor in the successful prevention of peroneal tendonitis.</p>
						<p>It&rsquo;s impossible to understand the impact that shoes have on your running until you try on a good pair.</p>
						<p>What is a good pair? Read on to find out.</p>

						<p>&nbsp;</p>
						<h2 id="what-to-know-before-buying-shoes-for-peroneal-tendonitis" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What to Know Before Buying Shoes for Peroneal Tendonitis?</h2>
						<p>Good running shoes are essential because they will help prevent injuries as well as speed up the healing of an already inflicted foot.</p>
						<p>Now, not every shoe is able to do this, so it is important to know which features to look for.</p>

						<h3 className="mt-5">Cushioning&nbsp;</h3>
						<p>As you&rsquo;re running, most of the stress gets transferred to your ankles, making them very vulnerable to injuries. A thing that can relieve some of this stress is proper cushioning in the midfoot area.</p>
						<p>The reason for this is that most tendons go through the ankle and end at the front of the foot, leaving the middle part prone to get hurt.</p>
						<p>Shoes with special, built-in soles or rubber cushions are the best solution for this problem.</p>
						<p>The cushioning will act as a spring when you run and thus reduce the amount of stress that the ankle is absorbing.</p>

						<h3 className="mt-5">Shock Absorption</h3>
						<p>Tendon related injuries often happen due to overworking of the tendons, which can happen very quickly if your shoes lack the adequate shock absorption abilities.</p>
						<p>Air or gel filled soles, and multi-layered soles are the features that you should be looking for as they provide sufficient shock absorption.</p>

						<h3 className="mt-5">Weight</h3>
						<p>When considering the weight of the shoe goes for as light as possible.</p>
						<p>The lighter the shoe, the less effort you&rsquo;ll have to put in while running, and the less impact will it have on your ankles and tendons.</p>
						<p>Also, you&rsquo;ll reduce the amount of fatigue you feel during/after running.</p>

						<h3 className="mt-5">Good Arch Support</h3>
						<p>There are three&nbsp;
							<Link href="http://www.richardsonpodiatrycenter.com/library/foot-arch-types.cfm">
								<a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">kinds of arches</a>
							</Link>
							&nbsp;in feet - normal, high, and flat. You need to be aware which one do you have and buy shoes accordingly.
						</p>
						<p>What&rsquo;s essential is to get shoes with adequate support the kind of arch your feet have. 
							As high-arched people are the ones that get tendonitis the most, they should pay extra attention to this.
						</p>

						<h3 className="mt-5">The Right Size</h3>
						<p>Your running shoes should be a perfect fit - not a bit bigger or smaller, but just the right size.</p>
						<p>If you&rsquo;re running in sneakers which are slightly too big for you, your feet are going to be moving inside the shoe which will cause instability and increase the chance of injury.</p>
						<p>A number too small can be very uncomfortable and cause pain which will lead to improper walking or running form in an attempt to alleviate the discomfort.</p>

						<p>&nbsp;</p>
						<div className="alert alert-success" role="alert">
							<p>All in all, I hope that you realize just how big a role shoes play in the prevention and recovery from&nbsp; 
								<Link href="/peroneal-tendonitis-running"><a className="text-decoration-none">peroneal tendonitis</a></Link>.
							</p>
							<p>My advice is that you shouldn&rsquo;t hesitate to invest your time and money in finding and buying a pair that is optimal for you, 
								so that you can run happily for years to come.
							</p>
						</div>
						{ /* Informative Section: end */ }
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }




		{ /***** MOST FREQUENTLY USED PLACEHOLDER *****/ }

		{ /* <h3 className="mt-5"></h3> */ }
		

		{ /* 
			<p>&nbsp;</p>
			&apos; 
			&quot;
		*/ }
		

		{ /* ALL LINKs */ } 
			{ /* <a href="(.+)" target="_blank" rel="noopener">(.+)</a> */ }
			{ /* <Link href="$1"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">$2</a></Link> */ }


		{ /* HEADER 2 */ }
			{ /* (.+)\n(.+) */ }
			{ /* <h2 id="$1" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>$2</h2> */ }


		{ /* <div className="youtube-video-container my-5">
			<iframe 
				className="shadow rounded"
				width="560" 
				height="315" 
				src="https://www.youtube.com/embed/_________________________?controls=0" 
				title="YouTube video player" 
				frameBorder="0" 
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
				allowFullScreen>
			</iframe>
		</div> */ }


		{ /* IMAGE */ }
			{ /* <div className="d-flex justify-content-center mb-5 shadow rounded">
				<Image
					src="" 
					width="" 
					height=""
					alt="" 
				/>
			</div> */ }


		{ /* TABLE OF CONTENTS */ }
			{ /* <ul>
				<li><Link href="#"><a className="text-decoration-none"></a></Link></li>
			</ul> */ }


		{ /* 


		<ul>
			<li></li>
			&nbsp;
			<li></li>
		</ul>
		*/ }
	</>)
}
