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
	const postId = 18;
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
						<p className="mt-2"><Link href={ '/category/' +  topicSlugs[infoData.topic] }><a className="text-decoration-none link-light fw-bold">{ topics[infoData.topic] }</a></Link></p>
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
				<p>Running is a great way to raise your fitness level, and accomplish multiple goals that will improve your health and overall wellbeing.</p>
				<p>While running may be overwhelming for beginners, it gets easier once you get the complete idea of the running routine and everything that goes with it.</p>
				<p>I had troubles starting myself, especially because I&#8217;m flat footed, and I learned everything from scratch. Now, I&#8217;m going to transfer that knowledge to you.</p>
				<ul>
					<li><Link href="#the-benefits-of-running"><a className="text-decoration-none">The Benefits of Running</a></Link></li>
					<li><Link href="#how-to-train"><a className="text-decoration-none">How to Train</a></Link></li>
					<li>Choose Your Training Plan</li>
					<li>Types of Races Recommended for the Beginners</li>
					<li>Correct Running Form</li>
					<li>How to Breathe</li>
					<li>Choosing the Right Gear</li>
					<li>Warming Up and Cooling Down</li>
					<li>Nutrition</li>
					<li>Hydration</li>
					<li>Injury Prevention</li>
					<li>Common Mistakes</li>
					<li>Pro Tips</li>
					<li>FAQ</li>
					<li>Conclusion</li>
				</ul>
				<p>&nbsp;</p>
				<h2 id="the-benefits-of-running" className="fw-bold text-center">The Benefits of Running</h2>
				<div className="d-flex justify-content-center mt-4 mb-5 shadow rounded">
					<Image
					src="/running-benefits.png" 
					width="563" 
					height="555"
					alt='Benefits of Running' 
					/>
				</div>
				<p><a href="https://www.betterhealth.vic.gov.au/health/healthyliving/running-and-jogging-health-benefits" target="_blank" rel="noopener">Running can improve your health significantly</a> if you make it your regular routine.
				</p>
				<p>It raises the levels of good cholesterol in your blood, and it increases your lung capacity. It also helps in prevention of blood clots, and it boosts your immune system.</p>
				<p>Running is in particular important for women, because it can reduce the risk of breast cancer. It also reduces the risk of stroke.</p>
				<p>A lot of doctors recommend the regular running routine for treatment of early stage of diabetes.</p>
				<p>It can also help with high blood pressure, osteoporosis and it lowers the risk of a heart attack.</p>
				<p>Running keeps the arteries healthy, it helps them retain the elasticity, and it strengthens the heart.</p>
				<p>The most popular use of running is to reduce and maintain the body weight. And it proved to be very effective at that. It can burn off extra calories and prevent obesity.</p>
				<p>Besides the physical benefits, running can improve your psyche as well. It can boost your confidence, and it will empower you once you start overcoming your goals.</p>
				<p>The studies have found that it also relieves the stress.</p>
				<p>It will help you have a better sleep, reduce the chance of headaches and it can help you get rid of excess hormones in your body.</p>
				<p>Running is a great tool to cope with depression. It stimulates the brain to release the hormones that will improve your mood.</p>
				<p>The first run is the hardest, but once you notice that your mood is improving, you will make it your daily task.</p>

				<p>&nbsp;</p>
				<h2 id="how-to-train" className="fw-bold text-center">How to Train</h2>
				<div className="d-flex justify-content-center mt-4 mb-5 shadow rounded">
					<Image
					src="/runners-training.jpg" 
					width="720" 
					height="480"
					alt='Benefits of Running' 
					/>
				</div>

				<p>The best way to stay dedicated to your cause is to sign up for a race. This way you will have a regular running schedule, and you will maintain your focus.</p>
				<p>As a beginner,&nbsp;<Link href="https://empoweryourrun.com/running-5-miles-a-day/"><a className="text-decoration-none">I signed up for a race</a></Link>, and I can tell you that is very beneficial for the start.</p>
				<p>Later, once you become more experienced, you will be able to develop a routine that you can follow alone.</p>
				<p>You can run any race, just clear your schedule and stick to it.</p>
				<p>Start with the shortest distance for a start. Find the race near you by using some of the race map websites, like&nbsp;<Link href="http://runningintheusa.com/race/overview"><a className="text-decoration-none" target="_blank">Running USA</a></Link>.</p>
				<p>Maintaining a proper form is very important when you start running.</p>
				<p>A lot of people are used to land on their heels while other lead with the toes.</p>
				<p>None of these forms are bad, and it's always the best to keep your natural way of running, you will just need good shoes that have a lot of support.</p>
				<p>I would advise you to start with the run-walk method for a start. This is a great way to increase your endurance and improve your running time.</p>
				<p>You can pick whatever pace that fits you. I would recommend going for a run for 10-30 seconds, then walk for 1-2 minutes and repeat the rotation for as long as you can.</p>
				<p>Try running 3 times a week for a start.</p>
				<p>This way of training reduces the risk of injury for beginners, and it gives the muscles the time to recover and adjust. If you feel that this is too easy for you, nothing stops you from going on a full run.</p>

				<div className="youtube-video-container my-5">
					<iframe 
						className="shadow rounded"
						width="560" 
						height="315" 
						src="https://www.youtube.com/embed/wRkeBVMQSgg?controls=0" 
						title="YouTube video player" 
						frameBorder="0" 
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
						allowFullScreen>
					</iframe>
				</div>
		</div> { /* col: end */ }
		</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
