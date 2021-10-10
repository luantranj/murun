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
	const postId = 7;
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
						<p className="mt-2"><Link href={ '/' +  topicSlugs[infoData.topic] }><a className="text-decoration-none link-light fw-bold">{ topics[infoData.topic] }</a></Link></p>
						<h1 className="fw-bold">{ infoData.title }</h1>	
						<div className="mt-4 mb-md-4">
							<Link href={ infoData.author_link }><a className="text-decoration-none link-light">{ infoData.author_name }</a></Link>
							<span className="px-3">&#9642;</span>
							<span>{ infoData.min_read } min read</span>
						</div>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Info: end */ }


		{ /* Article Content */ }
		<div className="artilce-content mt-4 py-4 fs-5">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-lg-10 col-xl-8 col-xxl-7">
						<p>Those who know me, know that I have been whining about not being able to run because of Plantar Fasciitis.</p>
						<p>After over six months of trying different solutions, with no apparent relief, I quite suddenly found the answer to my Plantar Fasciitis - it may be yours too!</p>
						<p>How I got plantar fasciitis?</p>
						<p>I have always enjoyed running, and in my eagerness to run more and more, I&rsquo;ve done too much too soon.</p>
						<p>The over mileage, even in the minimal running shoes which greatly helped my arthritic knees, had over-stressed my feet before they had the chance to get stronger and adapt.</p>
						<p>I think I tried everything except cortisone injections, surgery, and <Link href="http://www.aofas.org/footcaremd/treatments/Pages/Extracorporeal-Shock-Wave-Therapy.aspx"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">extracorporeal shockwave therapy</a></Link>.</p>
						<p>Nothing delivered satisfying results except one thing - trigger point therapy.</p>
						<p><strong>Today I am going to show you exactly where to trigger point massage to get rid of Plantar Fasciitis heel pain which you have been suffering from.</strong></p>
						<p>I spent like RM1000 before finding this free solution to my problem.</p>
						<p>If you have heel pain, this is worth trying.</p>
						<p>Trust me; it might save you a lot of grief and pain, needless abstinence, and icing.</p>
						{ /* T.O.C */ }
						<ul>
							<li><Link href="#the-solution-that-came-from-unexpected-source"><a className="text-decoration-none">The Solution That Came From Unexpected Source</a></Link></li>
							<li><Link href="#what-is-plantar-fasciitis"><a className="text-decoration-none">What is Plantar Fasciitis?</a></Link></li>
							<li><Link href="#trigger-the-point-yourself"><a className="text-decoration-none">Fast Plantar Fasciitis Relief - Trigger The Point Yourself</a></Link></li>
							<li><Link href="#where-does-it-hurt"><a className="text-decoration-none">Where Does It Hurt?</a></Link></li>
							<li><Link href="#conclusion"><a className="text-decoration-none">Conclusion</a></Link></li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="the-solution-that-came-from-unexpected-source" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>The Solution That Came From Unexpected Source</h2>
						<p>I stopped running, which I didn&apos;t need to.</p>
						<p>I also wore cushioned shoes 24/7.</p>
						<p>All that cushioning did help my pain, but the plantar fasciitis didn&apos;t go away.</p>
						<p>At the end of six months of &ldquo;living&rdquo; in my shoes, <Link href="/flat-feet-pronation"><a className="text-decoration-none">I had become flat-footed</a></Link>!</p>
						<p>Now I understand that all those little muscles in my foot (when I was barefoot) work together to give that &ldquo;spring&rdquo; to my step.</p>
						<p>Cocooning them in my shoes made those muscles weak.</p>
						<p>I also got custom insoles and tried off-the-shelf-insoles also (with some pain relief but plantar fasciitis stayed).</p>
						<p>My physiotherapist said those $100 hard insoles would provide support to my arch, taking the pressure off my heel.</p>
						<p>They hurt my heel and my arch.</p>
						<p>I also stretched and massaged my feet and calves.</p>
						<p>I iced my feet.</p>
						<p>That was torture - I would soak my feet in a bath of freezing water to bring down the inflammation.</p>
						<p>The Plantar Fasciitis was still there, no matter what I tried.</p>
						<p>But the technique that I am going to share with you may spare you from a fruitless search for padded shoes, custom insoles, heel cushions and foot splints.</p>
						<p>So try this first - don&rsquo;t be like me!</p>

						<p>&nbsp;</p>
						<h2 id="what-is-plantar-fasciitis" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What is Plantar Fasciitis?</h2>
						<p>It is one of the most common causes of <Link href="/best-running-shoes-for-heel-pain"><a className="text-decoration-none">heel pain</a></Link>, which involves inflammation of the band of tissue which runs across the bottom of the foot and connects the heel bone to the toes (<Link href="https://orthoinfo.aaos.org/en/diseases--conditions/plantar-fasciitis-and-bone-spurs"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">plantar fascia</a></Link>).</p>
						<p>Plantar fasciitis can develop in one or both feet, and it is the most frequent injury of the plantar fascia.</p>
						<p>Plantar fasciitis causes stabbing pain which typically occurs with the first steps in the morning.</p>
						<p>As you move more, the pain generally decreases, but it might return after long periods of standing or after rising from sitting.</p>
						<p>Considered that the most common cause of foot pain and heel pain, this condition affects the fascia, ligaments, and muscles of the lower leg and between the heel bone and the toe.</p>
						<p>Any injury or strain to the <Link href="http://www.musclesused.com/gastrocnemius-soleus-calf-muscles/"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">soleus and gastrocnemius muscles</a></Link> and ligaments of the lower leg can cause the formation of trigger points to result in referral pain to the heel and foot.</p>
						<p>Walking becomes so painful!</p>
						<p>Plantar Fasciitis is most common in runners but people who wear shoes with inadequate support and people who are overweight also have an increased risk of plantar fasciitis.</p>
						<p>It may also occur in younger individuals who are on their feet for many hours of the day.</p>
						<p>In addition to age, obesity, inadequate footwear and lack of physical exercise, Plantar Fasciitis is known to affect individuals with the extreme inward rolling of the foot, which is connected to flat feet.</p>
						<p>Under regular circumstances, plantar fascia acts like a shock-absorbing bowstring, which supports the arch in the foot.</p>
						<p>If stress and tension on that bowstring become too great, there is a chance small tears can arise in the fascia.</p>
						<p>Repetitive tearing and stretching can cause the fascia to become inflamed or irritated, though in many cases of plantar fasciitis, the cause is not apparent.</p>

						<p>&nbsp;</p>
						<h2 id="trigger-the-point-yourself" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Fast Plantar Fasciitis Relief - Trigger The Point Yourself</h2>
						<p>One of the common misconceptions about this kind of therapy is that it is useful for short-term pain relief only.</p>
						<p>Plantar Fasciitis is usually associated with trigger points in the Soleus, Gastrocnemius and <Link href="https://www.orthobullets.com/anatomy/10095/quadratus-plantae-lpn"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">Quadratus Plantae muscles</a></Link>.</p>
						<p>Trigger point release therapy along with foot stretching are essential steps to ensure healing from Plantar Fasciitis.</p>
						<p>These trigger points are pretty accessible, and patients should be encouraged to work with them at home between treatments as a part of a comprehensive treatment program.</p>
						<p>The release of the trigger points will provide important comfort from this condition - it improves the blood flow around the inflamed muscles and ligaments and improves muscular fluidity.</p>
						<p>The treatment is followed by stretching to help retrain the muscles and prevent recurrence of the pain.</p>
						<p>Back to my story- whatever I tried, the pain in my heel was still present.</p>
						<p>I read the &ldquo;<Link href={ "https://www.amazon.com/Trigger-Point-Therapy-Workbook-Self-Treatment/dp/1572243759?tag=" + infoData.amz_tag }><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">Trigger Point Therapy Workbook.: Your Self Treatment Guide for Pain Relief</a></Link>&rdquo; by Clair and Amber Davies, and I can tell you - that book solved my problem!</p>
						<p>I rubbed and applied pressure at the specific &ldquo;trigger points&rdquo; in my calves and feet that the book said would help with plantar fasciitis, and the pain vanished - just like that.</p>
						<p>I was stunned.</p>
						<p>The next morning I woke up for the first time in a long time not wearing my plantar fasciitis boots - pain-free.</p>
						<p>It can help you too - it is easy to do and takes just a few minutes a few times a day.</p>
						<p>The book contains helpful diagrams which show where the trigger points are about the &ldquo;referred&rdquo; pain, for pain In various parts of the body.</p>
						<p>You will need only your thumbs and a golf ball.</p>

						<p>&nbsp;</p>
						<h2 id="where-does-it-hurt" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Where Does It Hurt?</h2>
						<p>If it hurts directly on your heel, it could well be one of two trigger points, or both of them.</p>
						<p>This is a sharp pain which feels like you stepped on a stone.</p>
						<p>First, you have to find the trigger point.</p>
						<p>Use your thumbs and fingers to feel along your: <strong>1) quadratus plantae</strong> and <strong>2) calf muscle</strong>, to find the trigger points.</p>
						<div className="d-flex justify-content-center mb-5 shadow rounded">
							<Image
								src="https://res.cloudinary.com/muru/image/upload/v1633856736/plantar-fasciitis-trigger-points/quadratus-plantae-724x1024_dtzgch.jpg" 
								width="724" 
								height="1024"
								alt="Quadratus plantae" 
							/>
						</div>
						<p>As I already explained, the pain in your heel can originate from a trigger point in your calves.</p>
						<p>It is typically located in the &ldquo;belly&rdquo; of the muscle and is a hard/solid mass ranging from &ldquo;pea&rdquo; to &ldquo;noodle&rdquo; size/shape.</p>
						<p>How do I know for sure I found it?</p>
						<p>It hurts when you push down on it.</p>
						<p>You don&rsquo;t need to push hard, but firmly.</p>
						<p>It surprised me a lot the first time I felt and found that trigger point.</p>
						<p>That pea-like mass hurt exquisitely-only when I pressed on it.</p>
						<p>Now that you have found the first trigger point try to use your thumbs and firmly rub it out in a nice and smooth rolling motion.</p>
						<p>Do this 6-12 times.</p>
						<p>It will hurt but in a right way.</p>
						<p>Don&rsquo;t worry! That should deactivate the trigger point, which results in the muscle being able to relax.</p>
						<p>You may discover that the tightness in your calves and the heel pain has eased, and at this point, you can safely stretch.</p>
						<p>Now, let&rsquo;s find the trigger points in your quadratus plantae next.</p>
						<p>This trigger point is very deep, and you will need to apply monstrous pressure with your thumbs to find it.</p>
						<p>Mine felt like a crunchy mass the shape and size of a bison rump steak gristle.</p>
						<p>It will hurt.</p>
						<p>To make it hurt some more, try to roll that painful spot over a golf ball.</p>
						<p>Work out that trigger point for about 6-12 rolls.</p>
						<p>Do this every one or two hours throughout the day.</p>
						<p>Stubborn trigger points can take up two weeks before deactivating, but you should feel relief soon.</p>
						<p>For me, the pain went away immediately!</p>
						<p>For some reason, lots of people tend to hang on to heel pain for a while before getting it looked at.</p>
						<p>It is like they&rsquo;ve built a friendship with it.</p>
						<p>In two studies, which totaled 432 people, heel pain had been present around 14 months on average.</p>
						<p>What I found out is that we used to set low expectations for treatment time with Plantar Fasciitis.</p>
						<p>We are starting to find out that we can make improvements a lot faster than we thought.</p>
						<p>In the past, the treatment of trigger points was also overlooked with Plantar Fasciitis like symptoms.</p>
						<p>That&rsquo;s strange since stretching has been recommended for years.</p>
						<p>So what happened?</p>
						<p>The combined trigger point treatment and stretching saw the best outcome in pain relief and physical function.</p>

						<p>&nbsp;</p>
						<h2 id="conclusion" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Conclusion</h2>
						<p>Plantar fasciitis is a common occurrence which can be treated relatively quick with the right plan.</p>
						<p>The combination of trigger point deactivation and stretch can get the job done and get you rid of discomfort and pain.</p>
						<p>I hope you found this article helpful.</p>
						<p>If you have any questions or tips, contact me <Link href="/contact"><a className="text-decoration-none">here</a></Link> and remember to share this article with someone who needs it, because sharing is caring!</p>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
