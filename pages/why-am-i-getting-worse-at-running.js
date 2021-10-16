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
	const postId = 52;
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
						<p>If you&rsquo;ve been experiencing difficulties during running lately or noticed you&rsquo;re not an enthusiastic runner you&rsquo;ve always been, you&rsquo;re in the right place.</p>
						<p>Today, we&rsquo;ll look at the reasons behind sudden problems you might have that concern running progress.</p>
						<p>First of all, I want to say that there are many reasons why this might be happening to you, and I can&rsquo;t state this enough - you must consider all the factors that could be affecting your running.</p>
						<p>From diet and lifestyle to weather and running style, you have to take everything into account.</p>
						<p>Hitting a plateau and stagnating can make you feel like you&rsquo;re continually running slow, and making no progress at all could lead to feeling extremely frustrated.</p>
						<p>In times like these, doing more of the same thing is not the best approach.</p>
						<p>The best thing to do is first to discover the root of your problem and then try to solve it.</p>
						<p>Think about what could cause you to say, &ldquo;Why am I getting worse at running?&rdquo;</p>
						<p>If this is a question you&rsquo;ve been asking yourself lately, stay with me until the end as I help you resolve the issue. </p>
						<ul>
							<li><Link href="#stress-related-issues"><a className="text-decoration-none">Stress-related issues</a></Link></li>
							<li><Link href="#dietary-issues"><a className="text-decoration-none">Dietary issues</a></Link></li>
							<li><Link href="#iron-deficiency"><a className="text-decoration-none">Iron deficiency</a></Link></li>
							<li><Link href="#environmental-factors"><a className="text-decoration-none">Environmental factors</a></Link></li>
							<li><Link href="#skipping-long-slow-runs"><a className="text-decoration-none">Skipping long slow runs</a></Link></li>
							<li><Link href="#running-too-slow-or-too-hard"><a className="text-decoration-none">Running too slow or too hard</a></Link></li>
							<li><Link href="#final-word"><a className="text-decoration-none">Why am I Getting Worse at Running - Final word</a></Link></li>
						{ /* kimjiwon */ }
						</ul>

						<p>&nbsp;</p>
						<h2 id="stress-related-issues" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Stress-related issues</h2>
						<p>Stress is an inevitable part of our lives.</p>
						<p>It comes hand in hand with the modern, hasty way of life, and we have to learn how to deal with it.</p>
						<p>Otherwise, stress will take its toll, potentially ruining many aspects of our day-to-day lives.</p>
						<p>And yes, this includes running too.</p>
						<p>Don&rsquo;t forget that your body can only deal with so much stress, including physical and mental.</p>
						<p>It&rsquo;s essential to balance the stress you experience from different aspects of your life, like your job and personal life.</p>
						<p>If just one of these causes too much stress (either physical or mental), you might underperform (even burnout) in other areas.</p>
						<p>Running can be a good stress reliever, but if you notice you&rsquo;ve been having trouble reaching a running goal, stress can cause your problems.</p>
						<p>If there&rsquo;s too much stress in your life, there&rsquo;s a huge chance your body won&rsquo;t be able to adapt to your workouts.</p>
						<p>This is why you must try to <Link href="https://www.helpguide.org/articles/stress/stress-management.htm"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">remove stress from your life as much as possible</a></Link>.</p>
						<p>Another issue that could affect your running could also be due to stress - irregular sleep patterns.</p>
						<p>If you&rsquo;re not getting enough sleep, your body won&rsquo;t be able to perform well, and you could be too tired to run.</p>
						<p>Your body deserves to be well-rested if you want it to achieve that running goal.</p>
						<p>Don&rsquo;t forget that sleep is when your body actively recovers, and if it doesn&rsquo;t get enough sleep, it may not recover properly.</p>
						<p><Link href="https://www.sleepfoundation.org/articles/how-much-sleep-do-we-really-need"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">National Sleep Foundation</a></Link> states that a healthy adult should get between 7 and 9 hours of sleep every night.</p>

						<p>&nbsp;</p>
						<h2 id="dietary-issues" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Dietary issues</h2>
						<p>If you have stress under control and sleep enough every night, it&rsquo;s time to check your diet.</p>
						<p>It doesn&rsquo;t even have to be your diet in general, just in the past few weeks.</p>
						<p>When it comes to food, there are typically four things that could cause problems:</p>
						<p><strong>Not eating enough</strong> - If you&rsquo;re not eating a sufficient amount of food every day, your body might not have enough energy to endure heavy training or running.</p>
						<p><strong>Your body needs more carbohydrates</strong> - Carbohydrates are the body&rsquo;s preferred fuel source for high-intensity training, so never skip on them!</p>
						<p><strong>Chronicle dehydration</strong> - This is the least likely reason since most runners are hydrated. Nevertheless, check your daily water intake to make sure you&rsquo;re staying hydrated.</p>
						<p><strong>Low iron</strong> - Another unlikely cause, but not impossible.</p>
						<p>Low iron or borderline anemia is more common in women, and generally rare in runners, but make sure to check your iron level if you often feel sluggish or under the weather.</p>
						<p className="text-success">Of course, it goes without saying that a healthy diet plays a huge role in training and running, and if you&rsquo;re feeling too weak, make sure to <Link href="https://www.healthline.com/nutrition/12-healthy-high-carb-foods"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">load up on healthy carbs</a></Link>.</p>

						<p>&nbsp;</p>
						<h2 id="iron-deficiency" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Iron deficiency</h2>
						<p>Okay, you control stress level, you sleep 7 hours every night and have a healthy diet, but still struggle with running?</p>
						<p>You feel lethargic and weak?</p>
						<p>Let me ask you a question.</p>
						<p>Have you had blood work done recently?</p>
						<p>Although iron deficiency is not common among runners, you shouldn&rsquo;t disregard it.</p>
						<p>Checking iron level is very important, not just for running but for overall health.</p>
						<p>Low iron can cause a sudden decrease in endurance and can seriously affect your performance.</p>
						<p>In case you suffer from iron deficiency, you must include as much iron-rich food in your diet as you can.</p>
						<p>This includes:</p>
						<ul>
							<li className="mb-3">Red meat, pork, poultry</li>
							<li className="mb-3">Beans</li>
							<li className="mb-3">Seafood</li>
							<li className="mb-3">Dark green leafy vegetables such as spinach</li>
							<li className="mb-3">Dried fruit, especially raisins and apricots</li>
							<li className="mb-3">Peas</li>
							<li className="mb-3">Beets</li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="environmental-factors" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Environmental factors</h2>
						<p>The season can have an impact on your running.</p>
						<p>During hot summer weather, it&rsquo;s inevitable you&rsquo;re going to run slower.</p>
						<p>Running in the heat and being exposed to the sun is no joke.</p>
						<p>Add humidity to the equation, and you get a recipe for disaster.</p>
						<p>When summer conditions are harsh enough, it&rsquo;s more challenging than being at 7000 feet elevation.</p>
						<p>Summer conditions are tougher on the body then winter conditions.</p>
						<p>Sure, during winter, there&rsquo;s a better chance you&rsquo;ll get hurt by slipping on ice, but extreme heat, high humidity, and sun exposure are, for sure, the worst conditions for high-intensity activity.</p>
						<p>Your body will become dehydrated quicker than usual, your temperature will increase, and you&rsquo;ll sweat more.</p>
						<p>So, what can you do?</p>
						<p>During summer, try to avoid the time when it&rsquo;s most hot and instead run early in the morning or later in the evening.</p>
						<p>Once you do this, check your endurance, and if it&rsquo;s improved, you can honestly just blame the weather.</p>

						<p>&nbsp;</p>
						<h2 id="skipping-long-slow-runs" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Skipping long slow runs</h2>
						<p>Poor training habits can affect your running the same way as poor lifestyle habits, so it&rsquo;s essential to check them.</p>
						<p>One reason you may not see improvement in your running could be that you&rsquo;re skipping long runs.</p>
						<p>Taking a long slow run is crucial, especially <Link href="/how-to-start-running-for-beginners"><a className="text-decoration-none">if you&rsquo;re a beginner</a></Link>.</p>
						<p>Even if you&rsquo;re an experienced runner, you should never skip a long run once a week.</p>
						<p>Running long and slow is what builds endurance.</p>
						<p>It also helps you make faster paces more sustainable, and it gradually improves your ability to recover.</p>
						<p>If you skip long runs for just a few weeks, you&rsquo;ll probably start noticing that your fitness is declined, and fast speed seems more difficult than before.</p>
						<p>This is because you&rsquo;re not doing anything to build an endurance base that you need to support your other workouts.</p>
						<p>For example, if running 5 miles used to be a piece of cake for you, now it may be too difficult.</p>
						<p>So make sure to prioritize long slow runs to regain endurance. </p>

						<p>&nbsp;</p>
						<h2 id="running-too-slow-or-too-hard" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Running too slow or too hard</h2>
						<p>Your body can only take so much before it starts to push back against you.</p>
						<p>If you&rsquo;ve been running too hard for too many days, losing endurance could be your body&rsquo;s way of telling you to slow down.</p>
						<p>If your pace decreases and fatigue and tiredness increase, it&rsquo;s time to take a break.</p>
						<p>Of course, speed workouts are essential for progress, but easy runs should also be a part of your weekly routine.</p>
						<p>Even if you don&rsquo;t like easy runs, you still ought to do them to allow your body to recover and avoid reaching a breaking point.</p>
						<p>Slow and easy running is beneficial to your capacity and will lead to speed gains in the long term.</p>
						<p>Plus, easy runs allow your body to enjoy running.</p>
						<p>When you&rsquo;re always running hard, you&rsquo;re in pain most of the time, and your body can only handle so much.</p>
						<p><strong>Allow your body to rest!</strong></p>
						<p>Likewise, doing only slow runs is not good either.</p>
						<p>While easy runs are an effective way for your body to take a rest and recover, it also needs to be aware that there is a goal to achieve, and it won&rsquo;t be done by running slowly all the time.</p>
						<p><strong>If you don&rsquo;t ever push yourself, you will never experience progress!</strong></p>
						<p>So, yes.</p>
						<p>Running too hard can cause as many problems as running too slow.</p>
						<p>The solution is to find the perfect balance between the two.</p>


						<p>&nbsp;</p>
						<h2 id="final-word" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Why am I Getting Worse at Running - Final word</h2>
						<p>There are many reasons why you could be getting worse at running.</p>
						<p>I&rsquo;ve gathered the usual suspects, so make sure to consider all of them if you want to find the root of your problems.</p>
						<p>Just remember - it&rsquo;s perfectly normal that you&rsquo;re experiencing some difficulties from time to time, even the best of us do.</p>
						<p>Focus on how you can solve them and get back to making progress!</p>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
