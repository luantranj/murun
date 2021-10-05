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
	const postId = 43;
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
						<p><Link href="/how-long-does-plantar-fasciitis-last"><a className="text-decoration-none">I&apos;ve talked a lot about plantar fasciitis</a></Link>&nbsp;and various ways to treat.</p>
						<p>You should already know what its symptoms are, how to recognize it and which are the most commonly recommended therapy options.</p>
						<p>You are well aware that prevention is the key.</p>
						<p>However, there are also some alternative ways that you can consider and combine with all of the other treatments for plantar fasciitis that you already use.</p>
						<p>Including essential oils in your daily feet care routine can benefit your condition.</p>
						<p>Today, I will tell you how they work, how you can use them and which oils you should choose.</p>

						<p>&nbsp;</p>

						<h2 className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Top 7 Essential Oils for Plantar Fasciitis on the Market – 2021 Reviews</h2>

						{ /* product card */}
						<p>&nbsp;</p>

						<div className="card shadow px-3 bg-body rounded mb-4">
							<div className="d-flex justify-content-center mb-3">
							    <Image
								src="https://m.media-amazon.com/images/I/71m23YX6+FL._SY679_.jpg" 
								width="336" 
								height="461"
								alt="Handcraft Lavender Essential Oil - 100% Pure & Natural – Premium Therapeutic Grade with Premium Glass Dropper - Huge 4 fl.oz" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="handcraft-lavender-essential-oil" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/Handcraft-Lavender-Essential-Oil-Therapeutic/dp/B075817VBP?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="Handcraft Lavender Essential Oil - 100% Pure & Natural" 
										alt="Handcraft Lavender Essential Oil - 100% Pure & Natural"
									>
									Handcraft Lavender Essential Oil
									</a>
								</Link>
							</h2>
							<p>If you want a pure, natural, handcrafted, therapeutic grade essential oil that is FDA approved, you can always count on the Handcraft Blends.</p>
							<p>Their lavender oil is tested by an independent lab to determine there are no fillers or additives.</p>
							<p>It comes in a high quality 4 oz glass bottle that keeps UV rays out.</p>
							<p>The manufacturer recommends you to mix lavender with Bergamot, Cedarwood, Clary Sage, Clove, Geranium, Lemon, Helichrysum, Neroli, Rose and Rosemary, Patchouli, Sandalwood or Vetiver for optimal results.</p>
							<p>This lavender essential oil can work wonders for your plantar fasciitis.</p>
							<p>It is relaxing, and it will help you treat burns, prevent lice and repel various bugs.</p>
							<p>The packaging is practical as it comes with a long glass dropper.</p>
							<p>No more accidental over-pouring in your diffuser.</p>
							<p>However, you will notice that in comparison to other brands, this lavender oil is not very potent.</p>
							<p>It leaves stains on your clothes and has an odd after smell.</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">You can also use it as a bug repellent and to prevent getting lice</li>
											<li className="list-group-item">It is excellent for treating burns and relaxing for your feet</li>
											<li className="list-group-item">The amount you get for the price is impressive</li>
											<li className="list-group-item">It comes with a long glass dropper</li>
											<li className="list-group-item">The blend is handcrafted</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">The scent could be a bit stronger</li>
											<li className="list-group-item">It could stain your clothes</li>
											<li className="list-group-item">Your skin might be irritated if you apply it directly</li>
											<li className="list-group-item">It might have an odd after smell</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/Handcraft-Lavender-Essential-Oil-Therapeutic/dp/B075817VBP?tag=" + infoData.amz_tag }>
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
								src="https://m.media-amazon.com/images/I/51e2SwQNE9L._AC_.jpg" 
								width="494" 
								height="452"
								alt="Edens Garden Ginger Essential Oil, 100% Pure Therapeutic Grade (Undiluted Natural/ Homeopathic Aromatherapy Scented Essential Oil Singles) 10 ml" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="edens-garden-ginger-essential-oil" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/Ginger-Therapeutic-Essential-Edens-Garden-/dp/B0046W2IK8?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="Edens Garden Ginger Essential Oil" 
										alt="Edens Garden Ginger Essential Oil"
									>
									Edens Garden Ginger Essential Oil
									</a>
								</Link>
							</h2>
							<p>Scientific research indicates that ginger essential oil has numerous health-promoting properties.</p>
							<p>The one that comes from Eden&rsquo;s Garden is packed in a glass amber bottle and comes with a pipette dropper to help you find the right dosage for yourself.</p>
							<p>The product is GC and MS certified and the manufacturer offers four different sizes you can choose between - 5 mL, 10 mL, 30 mL, and 120 mL.</p>
							<p>Ginger oil can be quite useful for various feet problems such as plantar fasciitis, Achilles tendonitis, and bunions.</p>
							<p>It will alleviate your pain after first use.</p>
							<p>It offers many medicinal benefits, and you can learn more about them in a booklet that comes with a product.</p>
							<p>The drops come out of pipette nicely, and the oil has a quite potent aroma.</p>
							<p>Still, it doesn&apos;t smell like fresh ginger and has a turpentine undertone, which might irritate your nostrils.</p>
							<p>Also, it doesn&apos;t mix very well with water, so be careful how you use it.</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">It is quite effective for plantar fasciitis and bunions</li>
											<li className="list-group-item">It comes with a booklet about different oils and their uses</li>
											<li className="list-group-item">The drops come out nicely, not too fast</li>
											<li className="list-group-item">It has a potent smell, and you can even use it in cooking</li>
											<li className="list-group-item">The ginger oil will work great in your diffuser and for medicinal uses</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">It doesn&apos;t smell like fresh ginger</li>
											<li className="list-group-item">It doesn&apos;t mix very well with water</li>
											<li className="list-group-item">The smell changes after only a few days</li>
											<li className="list-group-item">It has a turpentine undertone, which might be irritating</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/Ginger-Therapeutic-Essential-Edens-Garden-/dp/B0046W2IK8?tag=" + infoData.amz_tag }>
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
								src="https://m.media-amazon.com/images/I/61WDlrRexvL._SX466_.jpg" 
								width="461" 
								height="461"
								alt="Edens Garden Turmeric Essential Oil" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="edens-garden-turmeric-essential-oil" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/Turmeric-Therapeutic-Essential-Edens-Garden-/dp/B005CIK5U0?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="Edens Garden Turmeric Essential Oil" 
										alt="Edens Garden Turmeric Essential Oil"
									>
									Edens Garden Turmeric Essential Oil
									</a>
								</Link>
							</h2>
							<p>Here&apos;s another fantastic oil from Eden&apos;s Garden &ndash; turmeric essential oil.</p>
							<p>It will provide you with warm and calming support to help you reduce acute and chronic pain.</p>
							<p>Just like the previous one, this product is GC and MS certified, therapeutic grade and available in four different sizes.</p>
							<p>The oils are stored in a temperature sensitive room with minimal light, which means they are as fresh as possible once they arrive at your doorstep.</p>
							<p>Turmeric is famous for its inflammation and pain combating properties, which means it can be beneficial for people with plantar fasciitis.</p>
							<p>This essential oil diffuses well and doesn&apos;t leave discoloration on the skin.</p>
							<p>It is potent, and you can mix it with many different carrier oils.</p>
							<p>At last, the price is fantastic for such a high-quality oil.</p>
							<p>Regarding turmeric oil downsides, you should know that it is yellow and it will probably stain your clothes.</p>
							<p>Also, it doesn&apos;t have a delightful smell, like a curry.</p>
							<p>However, you still shouldn&apos;t use it in the kitchen.</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">It is efficient for combating inflammation and as a pain reliever</li>
											<li className="list-group-item">It diffuses well</li>
											<li className="list-group-item">It doesn&apos;t leave discoloration marks on your skin</li>
											<li className="list-group-item">The oil is potent and works well with different carrier oils</li>
											<li className="list-group-item">The price is incredible for a therapeutic grade oil</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">It is yellow, and it will stain your clothes</li>
											<li className="list-group-item">It has a scent similar to curry</li>
											<li className="list-group-item">The smell is so strong; you should avoid using it around other people</li>
											<li className="list-group-item">You shouldn&apos;t use it in the kitchen</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/Turmeric-Therapeutic-Essential-Edens-Garden-/dp/B005CIK5U0?tag=" + infoData.amz_tag }>
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
								src="https://m.media-amazon.com/images/I/71qs9QiGWrS._SX466_.jpg" 
								width="466" 
								height="466"
								alt="Maple Holistics Pure Grapeseed Oil" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="maple-holistics-pure-grapeseed-oil" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/Pure-Grapeseed-Hair-Face-Acne/dp/B013TS9BHM?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="Maple Holistics Pure Grapeseed Oil" 
										alt="Maple Holistics Pure Grapeseed Oil"
									>
									Maple Holistics Pure Grapeseed Oil
									</a>
								</Link>
							</h2>
							<p>Maple Holistic swears by their pure, cold-pressed grapeseed oil and if you are not 100% satisfied with it, they offer the full no-questions-asked refund.</p>
							<p>It contains no fillers or any other impurities, which means its antioxidant properties can provide you with the best possible effectiveness.</p>
							<p>You can use it as a massage oil or skin moisturizer.</p>
							<p>This light essential oil will do miracles for your skin, whether you use it on your feet or your face.</p>
							<p>It is quick absorbing and not greasy, which makes it easier to apply. All you need is a few drops, and the healing can start.</p>
							<p>You can use it as a carrier oil as well, and mix it with other oils that are beneficial for plantar fasciitis.</p>
							<p>However, this grapeseed oil comes in a plastic bottle, which makes its quality a bit questionable.</p>
							<p>The packaging might leak no matter how tight you close it and it could cause allergic reactions.</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">It is quick absorbing and not greasy</li>
											<li className="list-group-item">It does miracles for your skin</li>
											<li className="list-group-item">A small amount of oil goes a long way</li>
											<li className="list-group-item">It serves great as a carrier oil</li>
											<li className="list-group-item">It also works well for baby massages</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">The essential oil comes in a plastic bottle</li>
											<li className="list-group-item">The packaging leaks no matter how tight you close it</li>
											<li className="list-group-item">You might have an allergic reaction to it</li>
											<li className="list-group-item">It will discolor fabrics</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/Pure-Grapeseed-Hair-Face-Acne/dp/B013TS9BHM?tag=" + infoData.amz_tag }>
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
								src="https://m.media-amazon.com/images/I/61lHuNEi3kL._AC_SX679_.jpg" 
								width="171" 
								height="459"
								alt="NOW Marjoram Essential Oil" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="now-marjoram-essential-oil" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/NOW-Solutions-Marjoram-Oil-1-Ounce/dp/B0014UCK12?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="NOW Marjoram Essential Oil" 
										alt="NOW Marjoram Essential Oil"
									>
									NOW Marjoram Essential Oil
									</a>
								</Link>
							</h2>
							<p>Marjoram essential oil from NOW Solutions is steam-distilled from the flowers and leaves of Thymus mastichina.</p>
							<p>It is 100% pure and natural and most commonly used for its magnificent, calming essence.</p>
							<p>You can mix it with basil, clary sage, rosemary or thyme oil for optimal results. It has a herbal, slightly medicinal aroma.</p>
							<p>NOW Solutions designed this oil for aromatherapy purposes specifically.</p>
							<p>Rub the marjoram oil on your soles, and you&apos;ll feel the relief as the pain alleviates.</p>
							<p>You can use it to reduce swelling, spasms, and sciatica.</p>
							<p>Its minty smell can be calming, and it works great as a massage oil.</p>
							<p>If you mix a few drops with water, you can make an excellent antioxidant drink.</p>
							<p>However, you should keep in mind that this product is made of thymus mastichina, not the sweet origanum marjorana which is much more beneficial and has a more pleasant smell.</p>
							<p>Be precise with the dosage, because large quantities can cause headaches.</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">If you put it on the soles of your feet, it will alleviate pain</li>
											<li className="list-group-item">It reduces swelling, spasms and sciatica</li>
											<li className="list-group-item">It smells a bit minty and medicinal</li>
											<li className="list-group-item">It works great as a massage oil</li>
											<li className="list-group-item">If you mix it with water, you will get an excellent antioxidant drink</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">This is thymus mastichina, not the sweet marjoram (Origanum marjorana)</li>
											<li className="list-group-item">In large quantities, the scent can cause a severe headache</li>
											<li className="list-group-item">The dropper allows too much oil to drop out</li>
											<li className="list-group-item">It is so potent that it seems artificial</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/NOW-Solutions-Marjoram-Oil-1-Ounce/dp/B0014UCK12?tag=" + infoData.amz_tag }>
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
								src="https://m.media-amazon.com/images/I/71vnMcV19ZL._AC_SX679_.jpg" 
								width="564" 
								height="613"
								alt="doTERRA Lemongrass Essential Oil" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="doterra-lemongrass-essential-oil" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/doTERRA-Lemongrass-Essential-Oil-Refreshing/dp/B007TYY2N6?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="doTERRA Lemongrass Essential Oil" 
										alt="doTERRA Lemongrass Essential Oil"
									>
									doTERRA Lemongrass Essential Oil
									</a>
								</Link>
							</h2>
							<p>Lemongrass essential oil, with its pungent, herbaceous, smoky aroma, is one of the most loved oils for massages and skin toning.</p>
							<p>It is refreshing and supports healthy digestion.</p>
							<p>You can combine equal parts of coconut oil as a carrier, and lemongrass oil for massages.</p>
							<p>Another option is to blend the lemongrass with basil, cardamom, or spearmint.</p>
							<p>If you spend several hours a day standing on your feet or walking, this essential oil can help your feet feel comfortable again, which is crucial for plantar fasciitis.</p>
							<p>It can also help you get rid of feet fungus, break fevers or improve your digestion.</p>
							<p>The aroma is nice, relaxing and uplifting at the same time.</p>
							<p>However, if you put too many drops in your diffuser, the smell might make you nauseous.</p>
							<p>Also, your skin might have an allergic reaction if you apply it directly.</p>
							<p>The sealing cap drips, so be careful.</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">It can keep your feet comfortable if you have to stand for a long time</li>
											<li className="list-group-item">It is also great for feet fungus</li>
											<li className="list-group-item">It breaks fevers and helps with digestion</li>
											<li className="list-group-item">The aroma is fantastic</li>
											<li className="list-group-item">It is relaxing and uplifting at the same time</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">Too many drops might cause nausea</li>
											<li className="list-group-item">Your skin might react to it</li>
											<li className="list-group-item">It has an awful sealing cap that drips</li>
											<li className="list-group-item">Be careful purchasing doTerra oils as there are many cheap knockoffs out there</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/doTERRA-Lemongrass-Essential-Oil-Refreshing/dp/B007TYY2N6?tag=" + infoData.amz_tag }>
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
								src="https://m.media-amazon.com/images/I/51jkgwFHVYL._AC_SX679_.jpg" 
								width="167" 
								height="459"
								alt="Plant Therapy Organic Peppermint Essential Oil" 
							    />
							</div>
							<p className="text-center fs-6">Source: <Link href="https://www.amazon.com/"><a className="text-decoration-none" target="_blank" rel="noreferrer">Amazon.com</a></Link></p>
							<h2 id="plant-therapy-organic-peppermint-essential-oil" className="card-title fw-bold text-center text-md-start mb-4" style={{ fontSize: '2rem' }}>
								<Link href={ "https://www.amazon.com/Plant-Therapy-Organic-Essential-Peppermint/dp/B0062C2IKA?tag=" + infoData.amz_tag }>
									<a 
										className="text-decoration-none" 
										target="_blank" 
										rel="nofollow noopener" 
										title="Plant Therapy Organic Peppermint Essential Oil" 
										alt="Plant Therapy Organic Peppermint Essential Oil"
									>
									Plant Therapy Organic Peppermint Essential Oil
									</a>
								</Link>
							</h2>
							<p>Plant Therapy is here to offer you their 100% organic, USDA Certified peppermint essential oil, that has no additives or fillers.</p>
							<p>It has a fresh, minty-grassy smell, that will boost your senses, help you relax and revitalize.</p>
							<p>The cooling effect it has on the skin can help you get rid of almost any pain in your body.</p>
							<p>If you want to pamper your feet in it, just mix a few drops with a half cup of Epsom salt and let that mixture dissolve in warm water.</p>
							<p>This peppermint essential oil works well as a pain reliever.</p>
							<p>It can also alleviate your fever or fix your breath.</p>
							<p>The substance is organic and affordable at the same time.</p>
							<p>A few drops are all that you need.</p>
							<p>Unfortunately, Plant Therapy&rsquo;s essential oil doesn&rsquo;t have a clear aroma which makes it not potent enough.</p>
							<p>It is not as efficient with migraines like other brands&rsquo; oils.</p>
							<p>At last, getting a drop out of the bottle can be difficult.</p>
							<div className="row">
								<div className="col-sm-6 mt-4">
									<div className="card bg-primary">
										<div className="card-header fw-bold text-light text-center">Pros</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">It can help you get rid of the fever</li>
											<li className="list-group-item">It is tasty if you mix it with water</li>
											<li className="list-group-item">It works as a fantastic pain reliever</li>
											<li className="list-group-item">You need just a few drops to get the job done</li>
											<li className="list-group-item">The oil is organic and pure, yet quite affordable</li>
										</ul>
									</div>
								</div>
								<div className="col-sm-6 mt-4">
									<div className="card bg-secondary">
										<div className="card-header fw-bold text-light text-center">Cons</div>
										<ul className="list-group list-group-flush">
											<li className="list-group-item">It doesn’t have a clear aroma</li>
											<li className="list-group-item">The scent is not potent enough</li>
											<li className="list-group-item">It is not as efficient for migraines as expected</li>
											<li className="list-group-item">It’s a bit hard to get a drop out of the bottle</li>
										</ul>
									</div>
								</div>
							</div> { /* pros and cons: end */ }
							<p>&nbsp;</p>
							<div className="mb-5 text-center">
								<Link href={ "https://www.amazon.com/Plant-Therapy-Organic-Essential-Peppermint/dp/B0062C2IKA?tag=" + infoData.amz_tag }>
									<a className="btn btn-lg btn-warning text-light fw-bold fs-2" target="_blank" rel="nofollow noopener" title="See Price on Amazon" alt="See Price on Amazon">SEE PRICE ON AMAZON</a>
								</Link>
							</div>
						</div> 

						<p>&nbsp;</p>
						{ /* product card: end */}



						{ /* The Final Verdict */ }
						<h2 id="the-final-verdict" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>The Final Verdict</h2>
						<p>I know, plantar fasciitis can be incredibly annoying, tiring and painful, and you are willing to try anything that can reduce the pain even by a fraction.</p>
						<p>However, I cannot tell you which essential oil for plantar fasciitis is the best one in your case.</p>
						<p>You have to find that out on your own.</p>
						<p>As you&rsquo;ve seen, there are many available options on the market, and you can combine the healing properties of the essential oil, with the scent you like.</p>
						<p>Just promise me, that even if it might sound silly, you will give it a try.</p>
						<p>You will thank me later.</p>
						{ /* The Final Verdict: end */ }

						<p>&nbsp;</p>
						<p className="border-bottom"></p>
						<p>&nbsp;</p>

						{ /* Informative Section */ }
						<h2 id="how-can-essential-oils-help-your-plantar-fasciitis" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How can Essential Oils Help Your Plantar Fasciitis?</h2>
						<p>If you ever read anything about essential oils, you already know that they have tremendous healing properties for various medical conditions.</p>
						<p>Luckily for you, plantar fasciitis is one of them.</p>
						<p>Essential oils are made of aromatic plant materials, such as the bark of trees, leaves, petals of flowers, and stems. They are produced through two different processes - steam distillation and cold pressing.</p>
						<p>Previously mentioned processes result in highly potent and concentrated liquid substances, which are later used to heal, revitalize, relax and refresh.</p>
						<p>We can agree that plantar fasciitis, and other related medical issues, such as heel spurs and bunions, cause a lot of pain and discomfort.</p>
						<p>The primary role of essential oils is to relieve that pain and discomfort.</p>
						<p>Various types of essential oils can help you with plantar fasciitis.</p>
						<p>Their scent is not that important, as long as they have anti-inflammatory and antispasmodic properties, or can boast analgesic and stimulants.</p>
						<p>Most commonly, one essential oil will have few of these properties combined.</p>
						<p>Another beauty of this type of plantar fasciitis therapy is that you can mix different oils to find what suits your needs and deliver the best healing results.</p>
		
						<p>&nbsp;</p>
						<h2 id="which-essential-oils-should-you-choose" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Which Essential Oils Should You Choose?</h2>
						<p>This is the list of essential oils that are most commonly used for treating plantar fasciitis, and their medicinal properties.</p>
						<p>Remember, this list is not final, you can add any oil you like to it, or avoid some oils that are included, if you find they don&apost work for you.</p>
						<p>Let&rsquo;s take a look at the table:</p>
						<div className="d-flex justify-content-center mb-5 shadow rounded">
							<Image
								src="https://res.cloudinary.com/muru/image/upload/v1633413322/essential-oils-for-plantar-fasciitis/Essential-Oils-Features-Compared-Table_dj3kah.png" 
								width="1726" 
								height="617"
								alt="the list table of essential oils that are most commonly used for treating plantar fasciitis" 
							/>
						</div>

						<p>&nbsp;</p>
						<h2 id="how-to-use-essential-oils-to-treat-plantar-fasciitis" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How to Use Essential Oils to Treat Plantar Fasciitis?</h2>
						<p>There&rsquo;s one thing you should remember: <Link href="/plantar-fasciitis-trigger-points"><a className="text-decoration-none">healing plantar fasciitis</a></Link> can&rsquo;t be done with just essential oils.</p>
						<p>You&rsquo;ll have to perform a series of stretches, combine it with essential oils based deep tissue massage, and then get back to more foot stretches.</p>
						<p>Now, I will teach you how to apply essential oils to your painful feet!</p>
		
						<h3 className="mt-5">Foot Soak</h3>
						<p>If you want to heal your plantar fasciitis, you should perform these healing foot soaks every day.</p>
						<p>The best time to do it, is at night, just before bedtime.</p>
						<p>Such ritual will help you sleep better as well.</p>
						<p><strong>You&rsquo;ll need:</strong></p>
						<ul>
							<li>A foot soak tub filled with hot water</li>
							<li>&frac12; or &frac34; cup Epsom salts</li>
							<li>10 drops of birch</li>
							<li>10 drops of peppermint</li>
							<li>5 drops of geranium</li>
							<li>5 drops of marjoram</li>
						</ul>
						<p><strong>Instructions</strong></p>
						<p>All you have to do is fill a foot soak tub with hot water, put the Epsom salt in it, and wait for it to dissolve.</p>
						<p>Add the essential oils and mix.</p>
						<p>Place your feet in the soaking tub, and sit comfortably for 15 minutes.</p>
						<p>You can repeat this 1 &ndash; 2 times a day.</p>

						<h3 className="mt-5">Fascia Massage Blend</h3>
						<p>Once you make this potent massage blend, you can use it for both foot soaks and massages.</p>
						<p>Store it in a dropper or roll-on bottle for convenience.</p>
						<p>Remember, you&rsquo;ll have to dilute it before use.</p>
						<p><strong>You&rsquo;ll need:</strong></p>
						<ul>
							<li>1 8-ounce amber glass bottle</li>
							<li>8 teaspoons of Helichrysum</li>
							<li>8 teaspoons of lemongrass</li>
							<li>8 teaspoons of wintergreen</li>
							<li>4 teaspoons of clove</li>
							<li>4 teaspoons of geranium</li>
							<li>2 teaspoons of black pepper</li>
						</ul>
						<p><strong>Instructions</strong></p>
						<p>Pour the essential oils into an amber bottle, using a dropper or a glass pipette.</p>
						<p>Mix the content of the bottle thoroughly.</p>
						<p>Dilute each time before use.</p>
						<p>For optimal results, use a 2% &ndash; 5 % dilution.</p>

						<h3 className="mt-5">Deep Tissue Massage Blend</h3>
						<p>Of course, making the fascia massage blend isn&rsquo;t enough.</p>
						<p>You have to give yourself a deep tissue massage for it to work.</p>
						<p>You should do this 1 &ndash; 2 times a day.</p>
						<p>It may be painful in the beginning, but you&rsquo;ll feel a lot better at the end.</p>
						<p><strong>You&rsquo;ll need:</strong></p>
						<ul>
						<li>2 tablespoons of coconut oil</li>
						<li>8 &ndash; 10 drops of the fascia tissue massage blend</li>
						</ul>
						<p><strong>Instructions</strong></p>
						<p>Mix the coconut oil with fascia massage blend and keep in a bowl.</p>
						<p>Dip your fingers into the mixture and rub the oil into your soles.</p>
						<p>Use long stroking motions, gradually warming up your feet.</p>
						<p>Start pressing your feet in a squeezing motion using your thumb and the rest of the fingers.</p>
						<p>Your knuckles should help you knead the soles of your feet. Maintain firm but gentle pressure.</p>
						<p>If you feel too much pain, stop.</p>
						<p>&nbsp;</p>
						<p>You can learn how to give yourself a therapeutic massage at home, by watching this video.</p>
						<div className="youtube-video-container my-5">
							<iframe 
								className="shadow rounded"
								width="560" 
								height="315" 
								src="https://www.youtube.com/embed/o9s6_AS7WWs?controls=0" 
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen>
							</iframe>
						</div>

						<p>&nbsp;</p>
						<div className="alert alert-success" role="alert">
							<p>Don&rsquo;t hesitate to <Link href="/contact"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">contact me</a></Link> if you have any other questions, and <Link href="/how-to-wrap-foot-for-plantar-fasciitis-with-ace-bandage"><a className="text-decoration-none">don't forget about wrapping your foot with an ace bandage</a></Link>.</p>
							<p>If you combine all of these different treatments, your pain will be gone before you know it.</p>
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
			{ /* <Link href="$1"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">$2</a></Link> */ }


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
