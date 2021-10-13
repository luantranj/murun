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
	const postId = 24;
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
						<p>If you&rsquo;ve never seriously taken up running and you&rsquo;re just starting out, running 5 miles in 21 minutes must sound like an unachievable fantasy.</p>
						<p>Don&rsquo;t fret, though; it is possible &ndash; and easier than you might think.</p>
						<p>With this guide, you will be able to reach that milestone in almost no time at all, though it will take a lot of effort and dedication on your part.</p>
						<p>I know it&rsquo;s difficult, but it will be worth it.</p>
						<p>Get ready and let&rsquo;s get started!</p>
						{ /* kimjiwon */ }
						<ul>
							<li><Link href="#preparation-and-training"><a className="text-decoration-none">Preparation and Training</a></Link></li>
							<ul>
								<li><Link href="#improve-your-running-mechanics"><a className="text-decoration-none">Improve Your Running Mechanics</a></Link></li>
								<li><Link href="#improving-your-running-speed"><a className="text-decoration-none">Improving Your Running Speed</a></Link></li>
							</ul>
							<li><Link href="#running-the-5k"><a className="text-decoration-none">Running the 5k</a></Link></li>
							<li><Link href="#aftermath"><a className="text-decoration-none">The Aftermath</a></Link></li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="preparation-and-training" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Preparation and Training</h2>
						<p>Of course, you can&rsquo;t just magically get out there and run 5k in 21 minutes &ndash; you need to train and prepare yourself for it first.</p>
						<p>It will be tough, but you should be able to pull through it if you follow my instructions.</p>
						<p>If you&rsquo;re a regular runner already, it will be even easier.</p>

						<h3 id="improve-your-running-mechanics" className="mt-5">Improve Your Running Mechanics</h3>
						<p>The first thing you need to work on is improving the way you run.</p>
						<p>To determine if your form is good or not, you will need someone to watch you during your last 100-meter sprint or a camera set up.</p>
						<p>Let&rsquo;s go over it from the top down.</p>

						<div className="alert alert-primary mt-3" role="alert">
							<p><strong>Your head</strong> should be completely still with no movements from side to side or up and down.</p>
							<p>Even if you think it&rsquo;s not moving, it still might be doing it without you noticing it.</p>
							<p>An easy way to fix this mistake is by focusing on a distant spot in front of you and imagining that you&rsquo;re balancing something on your head, like a wine glass or book.</p>
						</div>

						<div className="alert alert-secondary" role="alert">
							<p><strong>Your face</strong> needs to be relaxed, but not too much, your cheeks certainly shouldn&rsquo;t be flopping about.</p>
							<p>You need to have your mouth slightly open and your eyes fully open.</p>
						</div>

						<div className="alert alert-primary" role="alert">
							<p><strong>Your chin</strong> shouldn&rsquo;t be cast back in the air during running &ndash; you need to keep it slightly down, but not pressed against your neck.</p>
						</div>

						<div className="alert alert-secondary" role="alert">
							<p><strong>Your shoulders</strong> shouldn&rsquo;t be pulled up &ndash; if you look like you&rsquo;re shrugging, you&rsquo;re doing it wrong.</p>
							<p>Keep them down to avoid causing back and neck pain.</p>
						</div>
		
						<div className="alert alert-primary" role="alert">
							<p><strong>Your arms</strong> need to be positioned at a 90-degree angle, and they need to be on the move.</p>
							<p>They need to come up just below your chin and go straight back after that.</p>
							<p>Swinging them uncontrollably will just cause you to get tired.</p>
						</div>

						<div className="alert alert-secondary" role="alert">
							<p><strong>Your hands</strong> need to be relaxed &ndash; clenching them into fists or karate-chop-hands will just slow your arms down.</p>
							<p>If your arms are slower, you will be slower, so you don&rsquo;t want that.</p>
						</div>

						<div className="alert alert-primary" role="alert">
							<p><strong>Your body</strong> should be straight and lean slightly forwards.</p>
							<p>This will propel you forward and help you move across the finish line faster.</p>
							<p>If you&rsquo;re leaning back, you need to work on fixing that.</p>
						</div>

						<div className="alert alert-secondary" role="alert">
							<p><strong>Your hips</strong> need to be up and not sinking down.</p>
							<p>An easy way to fix sinking hips is by lifting your chest out like you&rsquo;re puffing it out.</p>
							<p>This will correct your hips and allow you to move your legs better.</p>
						</div>


						<div className="alert alert-primary" role="alert">
							<p><strong>Your feet</strong> should touch the ground under your hips instead of reaching too far out.</p>
							<p>You need to make efficient steps with enough leverage to propel your next foot forward.</p>
							<p>If you&rsquo;re making strides that are too long, you won&rsquo;t have enough leverage, and you&rsquo;ll slow yourself down.</p>
						</div>

						<div className="alert alert-secondary mb-3" role="alert">
							<p><strong>Your toes</strong> should be the focal point of your run near the end, during your last sprint.</p>
							<p><Link href="/how-to-get-rid-of-flat-feet"><a className="text-decoration-none">Running flat-footed</a></Link> is not desirable during that period since it will slow you down and cause pain in various parts of the body.</p>
						</div>
						<p>Try to notice all of these problems and fix them as soon as possible.</p>
						<p>The sooner you create good habits, the sooner you&rsquo;ll see an improvement in your running times.</p>

						<h3  id="improving-your-running-speed" className="mt-5">Improving Your Running Speed</h3>
						<p>Of course, to finish the race in less time, you need to run significantly faster than before.</p>
						<p>Every time you run, you need to be a little faster, and you have to be constantly improving your times to achieve your goal.</p>
						<p>Take it one step at a time.</p>
						<p>Here are some things you can do to improve your speed.</p>
						<h4 className="mt-5">Interval Workouts</h4>
						<p>This refers to alternating between slow running and fast running.</p>
						<p>Start out by running for 30 seconds then jogging for a few minutes and alternating between the two.</p>
						<p>As you start improving you can increase the time of the sprinting time while decreasing the jogging time.</p>
						<h4 className="mt-5">Sprinting</h4>
						<p>Sprint training is sure to improve your overall speed, even if you won&rsquo;t be sprinting all the time during the race.</p>
						<p>You should alternate between running as fast as possible and walking the same distance.</p>
						<p>Spring for 100 meters then walk for 100 more and so on.</p>
						<h4 className="mt-5">Hill Running</h4>
						<p>If you have a hill near where you live, this is the ideal spot for training.</p>
						<p>Running up hills will improve your leg strength and endurance, and you will feel much lighter when you&rsquo;re running on a flat surface afterward.</p>
						<p>Be sure to keep your feet perpendicular to the hill and to maintain a proper running form &ndash; it&rsquo;s easier to go out of form when hill running.</p>
						<p>You can also try running up and down stairs, which is more accessible to people without any hills nearby, but also much harder.</p>
						<p>Try to find a nice, long, uninterrupted staircase for the best results.</p>
						<h4 className="mt-5">Weight Training</h4>
						<p>Another method to help you develop more leg strength is weight training.</p>
						<p>You can train at the gym, but the best way to train is by <Link href="/running-with-ankle-weights"><a className="text-decoration-none">putting weights on yourself while running a difficult course</a></Link> &ndash; use things like weighted vests, running parachutes and so on.</p>
						<p>If you feel comfortable, you can combine this with hill running.</p>
						<h4 className="mt-5">Jumping Training</h4>
						<p>Since running is a series of small jumps, improving your jumping form and strength will improve your running speed.</p>
						<p>Doing some jumping jacks, lunges, rope jumping or butt kicks will certainly improve your times.</p>
						<h4 className="mt-5">Proper Breathing</h4>
						<p>It&rsquo;s amazing how much you can improve your running speed by just changing the way you breathe.</p>
						<p>Improving the amount of oxygen you intake during a run will make your muscles more resistant to fatigue and more efficient.</p>
						<p>You can do this by breathing into your belly and taking large breaths through your mouth that you&rsquo;ll quickly expel through your nose.</p>
						<h4 className="mt-5">Rest Before the Race</h4>
						<p>If you&rsquo;re training for a race, you need to rest for at least 3 to 4 days before the race itself.</p>
						<p>I know that everyone wants to keep training and to improve right up until the event itself, but how are you going to run properly if you&rsquo;re dead tired?</p>
						<p>Don&rsquo;t overwork yourself and give your body some time to recover.</p>
						<p>You should also have rest periods of a day or two during training instead of training every day and causing damage to your muscles.</p>

						<p>&nbsp;</p>
						<h2 id="running-the-5k" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Running the 5k</h2>
						<p>After you&rsquo;ve done all the training and fixed your form as much as possible, it&rsquo;s time to run the 5k and see how well you&rsquo;ll do!</p>
						<p>Here are a few tips I&rsquo;ll give you on how to ensure that your run goes well.</p>
						<h3 className="mt-5">Sleeping and Waking Up</h3>
						<p>Don&rsquo;t stay up until late at night the previous day, don&rsquo;t go out drinking or anything like that.</p>
						<p>Make sure you get eight hours of sleep and wake up bright and early the next morning, even if the race is during the afternoon.</p>
						<h3 className="mt-5">Eat a Good Breakfast</h3>
						<p>Don&rsquo;t eat any heavy foods in the morning before the race.</p>
						<p>You should eat some light, high-carb foods that will give you energy but won&rsquo;t weigh you down.</p>
						<p>Fruit works well in that regard as do some vegetables.</p>
						<h3 className="mt-5">Hydrate Properly</h3>
						<p>Make sure you drink enough water before the race, so you don&rsquo;t run out of gas halfway through.</p>
						<p>Some people think 5k is quite a short race, but if you&rsquo;re running for a good time, it might be good to bring a water bottle with you to make sure you&rsquo;re hydrated properly.</p>
						<h3 className="mt-5">Don&rsquo;t Burn Out Early</h3>
						<p>A common beginner&rsquo;s mistake I see people make is making an explosive start to the race.</p>
						<p>Sure, it feels good to pass all the other runners straight away, but you soon get into a slump that you&rsquo;ll try to make up for with a frantic scramble near the end.</p>
						<p>Instead of doing this try to take it easy for the first part of the race and slowly ramp up during the second part until you do the final spring near the end.</p>
						<p>That way you&rsquo;ll achieve much better results.</p>
						<h3 className="mt-5">Look at the Time</h3>
						<p>Make sure to bring some sort of device that you can use to monitor your running time during the race itself.</p>
						<p>You could be running slower than intended and this way you&rsquo;ll notice so you&rsquo;ll be able to make up for lost time in the next section of the race.</p>
						<p>Don&rsquo;t overdo it and try to make up all the lost time quickly &ndash; you&rsquo;ll only burn yourself out.</p>
						<h3 className="mt-5">Sprint to the End</h3>
						<p>If you paced yourself correctly you should have some strength left at the end of the race, and this is where you should use it all.</p>
						<p>Make the fastest sprint that you possibly can during the last 100 to 200 meters of the race to make sure you get the best time possible.</p>
						<p>This is where sprinting workouts will pay off the most.</p>

						<p>&nbsp;</p>
						<h2 id="aftermath" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>The Aftermath</h2>
						<p>If you&rsquo;ve followed the instructions correctly, you have achieved your goal and ran the full five miles in 21 minutes or less &ndash; congratulations!</p>
						<p>Now you need to get a good rest and take proper care of your legs and your entire body to make sure nothing goes wrong.</p>
						<p>Take it easy for the next week or so before resuming regular training.</p>
						<p>If you haven&rsquo;t made it, don&rsquo;t sweat it too much &ndash; you should still be closer to your goal than you were before, and that&rsquo;s something to celebrate.</p>
						<p>You&rsquo;ll surely make it the next time you try, and you should aim for that now.</p>
						<p>Either way, I hope this guide was helpful to you and that you&rsquo;ll have fun preparing for the race and running it when the time comes.</p>
						<p>Good luck and enjoy running!</p>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
