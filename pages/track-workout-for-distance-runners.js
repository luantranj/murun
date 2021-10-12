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
	const postId = 22;
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
						<p>The track is the best place for a runner to practice for upcoming races or just to keep in shape.</p>
						<p>All runners, from sprinters all the way to marathon-runners can get a lot of benefit out of working out on the track.</p>
						<p>If you&rsquo;ve never tried it, find a high school track near you and try running a few laps!</p>
						<p>Today I&rsquo;m here to help you get started with that by telling you about the best track workouts for distance runners!</p>
						{ /* kimjiwon */ }
						<ul>
							<li><Link href="#what-you-need-to-be-a-successful-long-distance-runner"><a className="text-decoration-none">What You Need to be a Successful Long-distance Runner</a></Link></li>
							<li><Link href="#start-out-by-running-slower"><a className="text-decoration-none">Start Out By Running Slower</a></Link></li>
							<li><Link href="#take-more-steps"><a className="text-decoration-none">Take More Steps</a></Link></li>
							<li><Link href="#eat-well"><a className="text-decoration-none">Eat Well</a></Link></li>
							<li><Link href="#treat-injuries-properly"><a className="text-decoration-none">Treat Injuries Properly</a></Link></li>
							<li><Link href="#5-best-track-workouts"><a className="text-decoration-none">The 5 Best Track Workouts for Long Distance Runners</a></Link></li>
							<li><Link href="#final-word"><a className="text-decoration-none">The Final Word</a></Link></li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="what-you-need-to-be-a-successful-long-distance-runner" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What You Need to be a Successful Long-distance Runner</h2>
						<p>Long-distance running is an art form all its own and, like any great art, you need both talent and hard work to be truly amazing at it.</p>
						<p>For sprinters, speed is the most important thing in the world, but if you&rsquo;re a distance runner, it&rsquo;s just one of the things you need to balance along with endurance and more.</p>
						<p>The most important thing becomes something else &ndash; that balance, the pacing of your run.</p>
						<p>However, even so, you shouldn&rsquo;t understate the benefits of speed training.</p>
						<p>In recent years, speed training has proven to be incredibly beneficial for distance runners, and the way training is done has been redefined.</p>
						<p>To train as a long distance runner, you need to do almost every kind of running exercise there is!</p>
						<p>But that&rsquo;s a bit too much to start with; I&rsquo;ll give you a few tips on how to get going with your long-distance running training.</p>

						<p>&nbsp;</p>
						<h2 id="start-out-by-running-slower" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Start Out By Running Slower</h2>
						<p>When you start running, you shouldn&rsquo;t go all out straight away.</p>
						<p>Trying to push yourself to your limit from the offset will get you nowhere &ndash; except maybe a hospital bed.</p>
						<p>This has two functions.</p>
						<p>The first one is that you&rsquo;ll have the time to enjoy running.</p>
						<p>Pushing yourself all the time results in pain and more pain, which you will start to associate with running, and it will make you hate it.</p>
						<p>Running should be an enjoyable activity, especially in long-distance running.</p>
						<p>The second one is that it will allow you to slowly build up your endurance as you start to go faster and faster.</p>
						<p>Even if you&rsquo;re a regular runner, you should still take time to run slower to avoid injury while keeping your body in shape.</p>

						<p>&nbsp;</p>
						<h2 id="take-more-steps" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Take More Steps</h2>
						<p>The <Link href="https://web.archive.org/web/20170905220650/http:/sciencebasedrunning.com/2011/07/the-basics-cadence/"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">cadence</a></Link> of your run refers to the number of steps you take per minute while running.</p>
						<p>It might seem a bit counterproductive, but taking more steps while running leads to fewer injuries and better performance.</p>
						<p>Here&rsquo;s the idea behind it &ndash; the more steps you take, the less time your feet spend on the ground and the lesser the impact of each step.</p>
						<p>If you take larger steps you lift your legs more, you extend them further, and you put more pressure on your feet when they land.</p>
						<p>In case you ever had a case of <Link href="/tight-calves-after-running"><a className="text-decoration-none">tight calves after running</a></Link>, running like this is bound to help you.</p>
						<p>To run like this, you need to keep your feet under your body instead of extending your legs.</p>
						<p>Try to keep your feet level with your shoulders and achieve around 180 steps per minute.</p>
						<p>The best way to train yourself is by having something to give you a rhythm.</p>
						<p>Try to find a song that has three beats per second and run to it.</p>
						<p>The feeling will be awkward at first but after some five runs it should start to click, and you&rsquo;ll run much better and with less risk.</p>

						<p>&nbsp;</p>
						<h2 id="eat-well" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Eat Well</h2>
						<p>Fueling yourself properly before, during and after a run is necessary to get the most out of your exercise regimen.</p>
						<p>I had problems with this as well, like most new runners, but when I corrected my mistake, I saw a huge improvement.</p>
						<h3 className="mt-5">Eating before running</h3>
						<p>Eating before running depends on what kind of run you&rsquo;re going for.</p>
						<p>If you&rsquo;re going for a short, energetic run, you need to get a good shot of carbs and proteins in your body at least an hour before the run.</p>
						<p>Going for a 3 to 1 ratio of carbs and proteins is good while avoiding fat or fiber.</p>
						<p>The longer the run you&rsquo;re planning to take, the larger the meal should be.</p>
						<p>Still, it shouldn&rsquo;t be more than a light snack &ndash; don&rsquo;t overburden yourself with a full meal before running.</p>
						<h3 className="mt-5">During a run</h3>
						<p>During a run, you shouldn&rsquo;t be chomping on too much.</p>
						<p>You will probably need water though if you&rsquo;re running a larger distance.</p>
						<p>The amount of water you need varies on the heat and your size, but it shouldn&rsquo;t be bouncing around in your stomach.</p>
						<p>If you&rsquo;re running for less than an hour and you&rsquo;ve eaten beforehand, you won&rsquo;t need to eat during the run.</p>
						<p>Otherwise, you will need around 40 to 60 grams of carbs per hour to keep you going.</p>
						<p>You also need to replace your electrolytes which you can do with an energy bar or a sports drink.</p>
						<h3 className="mt-5">After the run</h3>
						<p>After the run, you should eat as soon as possible, within the first 30 minutes.</p>
						<p>You need a good mix of carbs and proteins, preferably 5 to 1, and here&rsquo;s where you should intake carbs you usually can&rsquo;t eat, like pasta or rice.</p>
						<p>This will help your body recover quickly and build up strength.</p>

						<p>&nbsp;</p>
						<h2 id="treat-injuries-properly" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Treat Injuries Properly</h2>
						<p>If you&rsquo;re feeling under the weather or you&rsquo;re having some pain, don&rsquo;t just ignore it and try to &ldquo;run through it&rdquo; &ndash; make sure you find out what it is and take steps to deal with it.</p>
						<p>Seemingly small problems like feeling <Link href="/hot-spots-on-foot"><a className="text-decoration-none">hot spots on foot</a></Link> or the feeling of having a pebble in your shoe can be signs of serious problems like <Link href="/how-to-heal-a-sprained-ankle-faster"><a className="text-decoration-none">a sprained ankle</a></Link> or a torn tendon.</p>
						<p>Injuries like that will just get worse with time and if you have something like <Link href="/mortons-neuroma-running"><a className="text-decoration-none">Morton&rsquo;s Neuroma</a></Link> to &ldquo;fix&rdquo; it you will only be making it more severe.</p>
						<p>Once you feel like you&rsquo;re injured, take time off to heal and check what&rsquo;s wrong before resuming your training.</p>
						<p>To decrease the risk of injury, don&rsquo;t push yourself and don&rsquo;t do unnecessary things like <Link href="/running-with-ankle-weights"><a className="text-decoration-none">running with ankle weights</a></Link> or working out three times per day.</p>

						<p>&nbsp;</p>
						<h2 id="5-best-track-workouts" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>The 5 Best Track Workouts for Long Distance Runners</h2>
						<p>What stops some runners from practicing on a track is a cyclical mindset &ndash; and by that I mean is that they hate going in circles and it seems pointless to them.</p>
						<p>However, there&rsquo;s more you can do on the track than just running in a circle like a dog chasing its tail.</p>
						<p>Here, I&rsquo;ll give you my thoughts on some of the best track workouts you can do if you are, or plan to become, a long distance runner.</p>

						<h3 className="mt-5">1. Standard Speed Workout</h3>
						<p>Despite speed not being everything to a distance runner, you&rsquo;ll still find it to be an important part of your arsenal, and it is crucial to develop it.</p>
						<p>On a track, you can easily do repetitions of short sprints to build up your speed.</p>
						<p>Just make sure to rest properly and don&rsquo;t run when something is hurting.</p>
						<p>First, do four repetitions of 100-meter sprints and walk for two minutes between sprints to recover.</p>
						<p>You should rest for five minutes afterward.</p>
						<p>Next, do the same amount of 60-meter sprints and the same amount of rest between them and after.</p>
						<p>Perform 2 or 3 sets of these.</p>
						<p>To finish off, do four 30-meter sprints at your max power, rest with 2-minute walks between reps and take five minutes off between sets.</p>
						<p>Do 2 or 3 sets in total.</p>

						<h3 className="mt-5">2. Endurance Workout</h3>
						<p>This is an important thing for a long-distance runner, and an exercise like this will allow you to get in that last, finish-line sprint when you think you&rsquo;re done.</p>
						<p>To do this, you&rsquo;ll do a series of longer sprints at 80 percent of your full intensity, with little rests between them.</p>
						<p>Start out with the longest distance, 800-meter sprints and do three of them.</p>
						<p>You should rest by walking for 90 seconds between the sprints.</p>
						<p>After that move on to three 600-meter sprints with the same rest, then three 400-meter sprints, again with the same amount of rest.</p>
						<p>Finally, you should finish off with sixteen 200-meter sprints while walking 30 seconds to rest between each one.</p>

						<h3 className="mt-5">3. Ladder Workout</h3>
						<p>This workout helps build both speed and endurance at the same time.</p>
						<p>It allows you to vary-up your pace and make the most out of your time.</p>
						<p>It&rsquo;s best for <Link href="/does-couch-to-5k-work"><a className="text-decoration-none">training for a 5K</a></Link>, though it can be used for any race.</p>
						<p>If <Link href="/how-to-start-running-for-beginners"><a className="text-decoration-none">you&rsquo;re a beginner</a></Link>, do this only once, but more experienced runners can do two or three reps, as needed.</p>
						<ul>
							<li className="mb-3">5 minutes of walking</li>
							<li className="mb-3">400 meters at your top pace</li>
							<li className="mb-3">400 meters at a slow pace</li>
							<li className="mb-3">800 meters at your top pace</li>
							<li className="mb-3">400 meters at a slow pace</li>
							<li className="mb-3">1200 meters at your top pace</li>
							<li className="mb-3">400 meters at a slow pace</li>
							<li className="mb-3">1600 meters at your top pace</li>
							<li className="mb-3">400 meters at a slow pace</li>
							<li className="mb-3">5 minutes of walking</li>
						</ul>

						<h3 className="mt-5">4. Pyramid Workout</h3>
						<p>This type of workout is designed to teach you how to pace yourself properly, so you don&rsquo;t run out of gas too soon.</p>
						<p>It starts slow, ramps up and then slows down again.</p>
						<p>You should warm up before engaging in this exercise &ndash; a few laps of jogging will be enough.</p>
						<ol>
							<li className="mb-3">Run 400 meters at around 80-90 percent of your maximum intensity, then walk until you get your breath back and jog until you do another 400 meters.</li>
							<li className="mb-3">Run 800 meters at around 80-90 percent of your maximum intensity, then walk until you get your breath back and jog until you do another 400 meters.</li>
							<li className="mb-3">Run 1200 meters at around 80-90 percent of your maximum intensity, then walk until you get your breath back and jog until you do another 400 meters.</li>
							<li className="mb-3">Run 800 meters at around 80-90 percent of your maximum intensity, then walk until you get your breath back and jog until you do another 400 meters.</li>
							<li className="mb-3">Run 400 meters at around 80-90 percent of your maximum intensity, then walk until you get your breath back and jog until you do another 400 meters.</li>
						</ol>
						<p>That&rsquo;s about it &ndash; it&rsquo;s a simple but highly effective exercise.</p>

						<h3 className="mt-5">5. The Long Run</h3>
						<p>One of the essentials in long distance training is &ldquo;The Long Run,&rdquo; the most significant exercise of the week.</p>
						<p>As the name implies, it&rsquo;s supposed to be your longest run, and you should push your limits with it each time.</p>
						<p>Run at a slow, conversational pace and try to run as long as possible with no stops &ndash; that&rsquo;s the gist of it.</p>
						<p>Here, you will most likely need water and some carbs to get you through it.</p>
						<p>Doing the long run on a track allows you to stop at any point once you feel like you&rsquo;ve done enough and you can rest straight away &ndash; you&rsquo;re not bound by needing to return home or to your car.</p>

						<p>&nbsp;</p>
						<h2 id="final-word" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>The Final Word</h2>
						<p>Whether you&rsquo;re a more experienced runner or a complete beginner, I hope you found this article to be at least a bit helpful.</p>
						<p>There&rsquo;s always more you can learn, and even I don&rsquo;t have complete knowledge of everything &ndash; it&rsquo;s important to always improve yourself.</p>
						<p>If you&rsquo;re interested in improving yourself, you can read some of the other articles on my blog or ask me questions in the comments if you want.</p>
						<p>Until next time, keep running and stay safe!</p>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
