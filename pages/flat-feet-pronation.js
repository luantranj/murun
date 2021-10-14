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
	const postId = 33;
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
						<p>Flat feet are seen as something that&rsquo;s a relic of the past, something that happened to people ages ago and has been eradicated.</p>
						<p>It simply doesn&rsquo;t happen anymore, or it happens to children, sometimes.</p>
						<p>Well, that couldn&rsquo;t be further from the truth &ndash; it&rsquo;s quite easy to develop flat feet even in the modern world, as an adult.</p>
						<p>You might have flat feet and not even know it!</p>
						<p>However, just because you might not notice that you have flat feet, it doesn&rsquo;t mean that it won&rsquo;t affect you on a day-to-day basis.</p>
						<p>It&rsquo;s not just an aesthetic problem &ndash; it&rsquo;s something that can throw your whole body out of whack.</p>
						<p>Today I&rsquo;ll give you a crash-course on flat feet, pronation, supination, how it occurs, all the problems it can cause, and how to deal with flat feet.</p>
						<p>I won&rsquo;t waste any more time so let&rsquo;s get started!</p>
						{ /* kimjiwon */ }
						<ul>
							<li><Link href="#what-are-flat-feet"><a className="text-decoration-none">What are Flat Feet?</a></Link></li>
							<li><Link href="#what-causes-flat-feet"><a className="text-decoration-none">What Causes Flat Feet?</a></Link></li>
							<li><Link href="#the-effects-of-flat-feet-pronation-on-your-body"><a className="text-decoration-none">The Effects of Flat Feet/Pronation on Your Body</a></Link></li>
							<li><Link href="#treatments"><a className="text-decoration-none">Treatments for Flat Feet</a></Link></li>
							<li><Link href="#conclusion"><a className="text-decoration-none">Conclusion</a></Link></li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="what-are-flat-feet" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What are Flat Feet?</h2>
						<div className="d-flex justify-content-center mb-5 shadow rounded">
							<Image
								src="https://res.cloudinary.com/muru/image/upload/v1634209441/flat-feet-pronation/flat-foot_qb3byy.jpg" 
								width="730" 
								height="613"
								alt="Fallen arch vs normal arch" 
							/>
						</div>

						<p>First off, I&rsquo;ll try and make it clear what flat feet are exactly since there are a lot of misconceptions flying around in regards to this.</p>
						<p>Flat feet, also known as &ldquo;pes planus&rdquo; or fallen arches, is a condition in which the arches of the foot are collapsed and almost your entire foot is in contact with the ground, hence the name.</p>
						<p>In normal feet, the arches are raised, and the middle part of your foot doesn&rsquo;t touch the ground at all.</p>
						<p>The condition comes in different degrees &ndash; in more extreme cases, the condition can be identified simply by looking at the foot or the footprint.</p>
						<p>In less severe cases, an x-ray is typically needed to identify the condition.</p>
						<p>But how do you even know you should get checked out?</p>
						<p><strong>Well, here are some symptoms usually associated with flat feet:</strong></p>
						<ul>
							<li className="mb-3">Constant foot pain in the arches</li>
							<li className="mb-3">Stiffness in the feet</li>
							<li className="mb-3">Back and leg pain</li>
							<li className="mb-3">Difficulty standing on your toes</li>
							<li className="mb-3">Swelling in the inside bottoms of the feet</li>
							<li className="mb-3">Knee and hip pain</li>
						</ul>
						<p>You can usually notice that you might have flat feet if your footprint doesn&rsquo;t have that distinctive crescent-shape that a normal foot leaves, as shown in the picture.</p>
						<div className="d-flex justify-content-center mb-5 shadow rounded">
							<Image
								src="https://res.cloudinary.com/muru/image/upload/v1634209822/flat-feet-pronation/how-to-get-rid-of-flat-feet-2-nonoptimizedx2_eyhy7u.jpg" 
								width="1024" 
								height="604"
								alt="healthy foot and flat foot footprints" 
							/>
						</div>
						<p>However, that&rsquo;s an easy way to identify the condition only in more severe cases &ndash; in borderline cases it&rsquo;s not reliable.</p> 
						<p>Have a doctor check you out if you suspect you might have flat feet.</p>
						<p>There is also a difference between true flat feet (collapsed arches) and flexible flat feet (excessive foot pronation).</p>
						<p>The latter condition is mostly just cosmetic &ndash; there&rsquo;s no pain since the arches aren&rsquo;t truly collapsed and it can be corrected far more easily.</p>

						<p>&nbsp;</p>
						<h2 id="what-causes-flat-feet" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What Causes Flat Feet?</h2>
						<p>If you&rsquo;ve grown up outside of the city, you&rsquo;ve probably been scolded by your parents at least once for running around bare-footed &ndash; they warned you that it&rsquo;s how you get flat feet and you certainly don&rsquo;t want that!</p>
						<p>Well, that&rsquo;s one of the most common misconceptions about this condition.</p>
						<p>Going around barefoot is more likely to help with treating flat feet rather than cause it, but I&rsquo;m getting ahead of myself here.</p>
						<p>So, what does cause flat feet?</p>
						<p>For some, the condition is genetic, and their arch simply never develops properly.</p>
						<p>Children have flat feet initially and develop arches over time, but for some, it just doesn&rsquo;t happen.</p>
						<p>Up to 30% of people fall into this category &ndash; yes, you heard that right.</p>
						<p>Of course, this takes into account people whose feet aren&rsquo;t completely flat or who have the condition in just one foot, but it&rsquo;s still a lot of people.</p>
						<p>Overly restrictive shoes during childhood, especially closed-toe shoes that are too small can often cause flat feet to develop.</p>
						<p>In adults, there&rsquo;s a wide variety of causes for flat feet.</p>
						<p>They could develop due to injury, repeated stress, illness, and the most common risk factors include obesity, diabetes, arthritis, and hypertension, among others.</p>

						<p>&nbsp;</p>
						<h2 id="the-effects-of-flat-feet-pronation-on-your-body" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>The Effects of Flat Feet/Pronation on Your Body</h2>
						<p>So, your foot is flat &ndash; what&rsquo;s the big deal?</p>
						<p>Well, the fact that your feet are supposed to be arched is not just a cosmetic thing.</p>
						<p>The function of the foot arch is to make the foot springy and flexible and allow it to absorb most of the impact during day-to-day activities like walking or running.</p>
						<p>If you have flat feet, that doesn&rsquo;t happen, and the impact gets transferred to the rest of your body &ndash; mostly the bones in your legs, but also your hip and spine.</p>
						<p>It can have a huge knock-on effect and throw your whole body out of alignment.</p>
						<p>Are you having constant back pains and don&rsquo;t know why?</p>
						<p>Are you clumsy and often stumble, but can&rsquo;t figure out the reason?</p>
						<p>Experiencing <Link href="/calf-cramping-running"><a className="text-decoration-none">calf cramps</a></Link> all the time?</p>
						<p>Your <Link href="/best-running-shoes-for-bunions"><a className="text-decoration-none">bunions getting worse</a></Link>?</p>
						<p>Flat feet might be the cause, and you might not even know it.</p>
						<p>Flat feet can also lead to the early development of other conditions, such as osteoarthritis of the foot joints and can severely impact your athletic performance.</p>
						<p>If you&rsquo;re a runner, flat feet can be a major problem.</p>

						<p>&nbsp;</p>
						<h2 id="treatments" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Treatments for Flat Feet</h2>
						<p>There are various ways to treat flat feet, and probably the most effective treatment is regular exercise.</p>
						<p><Link href="/flat-feet-exercises"><a className="text-decoration-none">Flat feet exercises</a></Link> and walking barefoot on different types of terrain during childhood will promote the formation of proper foot arches.</p>
						<p>In addition to that, allowing children to mostly wear open-toed footwear like sandals will help promote proper development of their feet.</p>
						<p>In some cases, orthotic shoe inserts can also help with treating the condition, and they can be bought over-the-counter or by prescription, depending on the severity of the condition.</p>
						<p>Typically, if flat feet develop during childhood and aren&rsquo;t treated at that time, correcting them during adulthood can be tough.</p>
						<p>Surgical interventions are sometimes done to correct especially severe cases, though it is a last resort.</p>
						<p>However, <Link href="/how-to-get-rid-of-flat-feet"><a className="text-decoration-none">getting rid of flat feet</a></Link> isn&rsquo;t impossible though it can be a long and arduous process.</p>
						<p>You just have to grit your teeth and bear it.</p>
						<p>Usually, they can be treated through regular exercise and orthotics &ndash; but you need to use them correctly.</p>
						<p>The orthotics can be as simple as shoe inserts, but in certain cases, casts or full foot braces are also used.</p>
						<p>Instantly using shoe inserts which raise your arch to normal levels is not recommended and will only be painful &ndash; you need to start with orthotics that raise your arch just a little bit, then a little more and so on.</p>
						<p>Eventually, your foot will adjust.</p>
						<p>Definitely don&rsquo;t just get orthotics on your own &ndash; consult with your doctor before doing anything to treat the condition.</p>
						<p>If you don&rsquo;t, you might just make it worse.</p>
						<p>Still, even the proper treatment can be quite painful, and you might need to use pain medication alongside everything else to handle it.</p>
						<p>Some anti-swelling medication also might be needed to help loosen the foot and relieve the stress placed on it.</p>
						<p>Of course, you will need to use different shoes as well, not just different shoe inserts.</p>
						<p>And you shouldn&rsquo;t use the same shoes when walking as you do when running.</p>
						<p>If you&rsquo;re an active runner, you should look into getting the best running shoes for flat feet to make sure you are treating this condition properly.</p>
						<p>You will also need to try and remove any risk factors that might have caused you to develop flat feet in the first place.</p>
						<p>For example, lowering your blood pressure or losing weight is recommended and will help treat flat feet.</p>
						<p>Avoiding high-impact activities while the treatment is ongoing or while it&rsquo;s in the early stages is also recommended.</p>

						<p>&nbsp;</p>
						<h2 id="conclusion" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Conclusion</h2>
						<p>So, as you can see, flat feet aren&rsquo;t harmless at all, and they can have a huge impact on the way your body works.</p>
						<p>You should treat this condition as soon as you can and give it the importance it deserves &ndash; it&rsquo;s not just a cosmetic issue.</p>
						<p>However, it&rsquo;s a condition that&rsquo;s far from being untreatable &ndash; it just takes a lot of time, persistence, and effort, but it is doable.</p>
						<p>If you&rsquo;re a runner and suspect you might have flat feet you should definitely get checked out as soon as possible and fix the condition if you have it.</p>
						<p>Running with flat feet will only make the condition worse.</p>
						<p>I hope I managed to give you a good crash-course on what flat feet are, why the condition is nothing to sneeze at, and how to go about treating it.</p>
						<p>Until next time, stay well and keep running!</p>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
