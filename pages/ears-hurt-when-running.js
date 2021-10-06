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
	const postId = 27;
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
						<p>There is nothing out of the ordinary about pain in the hips, knees, and ankles while running or exercising, and runners usually know the cause of this pain and are familiarized with the ways to address it.</p>
						<p>Still, if your ears hurt when running, you probably have no idea where is this coming from.</p>
						<p>There are various reasons why this can happen, which is why there is no one solution for all of them.</p>
						<p>If you have ever felt an earache during exercising or running, you should not ignore the pain.</p>
						<p>First, you need to get informed about the potential reasons, try out the solution, and if the problem persists, you must consult your doctor.</p>
						<p>Read this article to find out everything you should about earache that happens while running, and how to deal with it.</p>
						<ul>
							<li><Link href="#what-can-cause-an-earache-when-you-run"><a className="text-decoration-none">What Can Cause An Earache When You Run?</a></Link></li>
							<li><Link href="#how-to-prevent-ear-pain-while-running"><a className="text-decoration-none">How to Prevent Ear Pain While Running?</a></Link></li>
							<li><Link href="#how-to-treat-ear-pain"><a className="text-decoration-none">How to Treat Ear Pain?</a></Link></li>
							<li><Link href="#final-word"><a className="text-decoration-none">Final Word</a></Link></li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="what-can-cause-an-earache-when-you-run" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What Can Cause An Earache When You Run?</h2>
						<p>While it is a rarity, I have heard many of my fellow runners complain about earache during physical activities.</p>
						<p>There is no single answer to this question since there are various factors that can contribute to this problem.</p>
						<p>In fact, the runners I know which faced this problem all had different stories behind the pain.</p>
						<p>Sometimes the pain is caused by your daily habits, while other times it can be a consequence of a more severe health issue.</p>
						<p>No worries, though, I&rsquo;ll write about all the known reasons for <Link href="https://www.everydayhealth.com/ear-pain/guide/"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">experiencing ear pain</a></Link>.</p>

						<h3 className="mt-5">The Constriction of Blood Vessels</h3>
						<p>You have probably heard that <Link href="https://www.livestrong.com/article/429813-what-happens-to-your-vessels-when-you-exercise/"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">blood vessels can get constricted</a></Link> while you are exercising or running.</p>
						<p>The same thing happens to the vessels supplying the ear canal and inner ear.</p>
						<p>This is more likely to happen if you are running at a high altitude or in cold climate.</p>
						<p>As a result of cool air, the blood flow in the ear is restricted which builds up the pressure inside the ear and causes pain.</p>
						<p>I myself like running in mountain areas, because the breathtaking nature provides an amazing scenery for morning jogging, but I am aware that this can contribute to ear pain.</p>
		
						<h3 className="mt-5">Using Earplugs</h3>
						<p>Most people find listening to music while running motivating.</p>
						<p>While that is true, wearing earplugs for prolonged periods of time can cause ear irritation and pain.</p>
						<p>This happens because earplugs can bounce inside your ears (we&rsquo;ve all been there, and even if it is not always painful, it is always unpleasant).</p>
						<p>If you think using large earphones can pressure the ears too hard and irritate.</p>
						<p>This doesn&rsquo;t mean that you have to renounce listening to music when running, especially if it is something that gets you going that extra mile.</p>
						<p>You can choose to wear earplugs with curved plastic which fall more naturally into your ear and create comfort.</p>

						<h3 className="mt-5">Tear or Hole in the Eardrum</h3>
						<p>The eardrum separates outer and inner ear. It is essential for balancing the ear pressure.</p>
						<p>In some cases, the eardrum can get perforated. While this doesn&rsquo;t occur as a result of running, it can affect on how you feel during exercising.</p>
						<p>Because the balance is disrupted, the pressure in the ear causes pain.</p>
						<p><Link href="https://www.healthline.com/health/ruptured-eardrum"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">The eardrum trauma</a></Link> can be caused by ear infection, severe trauma, or a sudden change in ear pressure. If this happens without you being aware of it, and you continue to run, the condition may worsen.</p>
						<p>Additional side effects of the perforated eardrum can include sensitivity to loud noises, ear discharge, and vertigo.</p>
						<p>Because of this, it would be better to take a break from running if you don&rsquo;t want the problem to get worse.</p>

						<h3 className="mt-5">Ear Infection</h3>
						<p>Ear infection is among the most obvious causes of ear pain, including ear pain while running.</p>
						<p>It can be caused by allergies, cold, fluid build up in the ear, or sinus infections.</p>
						<p>There are some things that can make individuals more prone to ear infection, including illness, altitude, climate, and exposure to cigarette smoke.</p>
						<p>It is important to identify the symptoms of ear infections as early as possible, so you could visit the doctor and start treatment immediately.</p>
						<p>If you have an ear infection, you will probably notice fluid draining from the middle of the ear and pain.</p>

						<h3 className="mt-5">GERD</h3>
						<p>GERD, otherwise known as gastroesophageal reflux disease, is a condition which causes stomach acids flow back into the esophagus.</p>
						<p>While you wouldn&rsquo;t often associate it with stomach problems, ear pain is often the sign of GERD, and if not addressed, it can cause severe ear infections.</p>
						<p>The condition can worsen during exercising and running because your stomach moves around. Such dynamic movements can increase the ear pain.</p>

						<p>&nbsp;</p>
						<h2 id="how-to-prevent-ear-pain-while-running" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How to Prevent Ear Pain While Running?</h2>
						<p>Finally, the information you&rsquo;ve came here for, how to prevent your ears from aching when you run.</p>
						<p>Fortunately, there are precautionary measures you can take.</p>
						<p>Here are some of them you can start practicing today:</p>
						<ul>
							<li className="mb-3">Use the right type of earplugs when running (as I mentioned in one of the previous paragraphs)</li>
							<li className="mb-3">Avoid going for a run when the weather is too cold, and try not to run at high altitudes</li>
							<li className="mb-3">Avoid running long distances</li>
							<li className="mb-3">Take a break at running for some time, and you will be able to see whether the pain is caused by the physical activity</li>
							<li className="mb-3">Don&rsquo;t listen to loud music</li>
							<li className="mb-3">Don&rsquo;t put pressure on your ear while sleeping</li>
						</ul>


						<p>&nbsp;</p>
						<h2 id="how-to-treat-ear-pain" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How to Treat Ear Pain?</h2>
						<p>The first step toward treating earache is consulting a doctor.</p>
						<p>This way he or she will be able to prescribe you a treatment that will ease the symptoms and heal the infection or other condition you are struggling with.</p>
						<p>While you should avoid self-treatment, there are some natural remedies you can try to ease the pain until you are able to make a doctor&rsquo;s appointment</p>
						<p>All of these remedies are completely harmless.</p>
						<p>Maybe some of them won&rsquo;t work for you, but they will definitely not cause you additional pain or discomfort.</p>
						<ul>
							<li className="mb-3">Use cold or warm compresses. Place a warm compress or ice pack over the ear, and change from warm to cold every ten minutes</li>
							<li className="mb-3">Put a few drops of warmed olive oil in the ear</li>
							<li className="mb-3">Use naturopathic ear drops which are made from herbal extracts</li>
							<li className="mb-3">Try seeing chiropractic</li>
							<li className="mb-3">Use tea tree oil because of its antibacterial properties</li>
							<li className="mb-3">Apply ginger juice around the outer ear canal, but don&rsquo;t put it directly into the ear</li>
							<li className="mb-3">Use ear drops that contain garlic</li>
							<li className="mb-3">Put several drops of hydrogen peroxide into the sensitive ear</li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="final-word" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Final Word</h2>
						<p>As you see, your ears can hurt while running.</p>
						<p>It is something that can catch you by surprise.</p>
						<p>I am always prepared for the pain in my joints, especially because <Link href="/flat-feet-pronation"><a className="text-decoration-none">I have flat feet</a></Link> which makes running more challenging than for other people (but I never give up).</p>
						<p>Earache is something that caught me off guard.</p>
						<p>While this situation is not very common, it still happens to some people.</p>
						<p>It is vital to determine its causes, which can vary from outer factors, like earplugs to problems inside your ear, such as infections.</p>
						<p>When you determine what&rsquo;s causing the pain, you will know how to treat it effectively.</p>
						<p>Remember that you shouldn&rsquo;t take on any serious steps before consulting your physician.</p>
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


		{ /* HEADER 2 & TOC list */ }
			{ /* (.+)\n(.+) */ }
			{ /* <p>&nbsp;</p>\n<h2 id="$1" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>$2</h2>\n\n<li><Link href="#$1"><a className="text-decoration-none">$2</a></Link></li> */ }


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
