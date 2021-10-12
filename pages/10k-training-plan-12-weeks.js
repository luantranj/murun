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
	const postId = 21;
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
						<p>When I ran my first 10k, I thought I was prepared for it.</p>
						<p>After all, <Link href="/21-minute-5k"><a className="text-decoration-none">I successfully ran a full 5k</a></Link> just a month before it &ndash; how hard could it be?</p>
						<p>As it turned out, it was much harder, and I didn&rsquo;t make the finish line at all.</p>
						<p>After that embarrassment, I dedicated myself fully to training for the next 10k and this time I managed to do it.</p>
						<p>Since then I ran plenty more and managed to make the finish each time.</p>
						<p>Today, I will tell you a bit about how even complete beginners can make the finish line in a 10k with just 12 weeks of training.</p>
						{ /* kimjiwon */ }
						<ul>
							<li><Link href="#what-is-the-10k-race"><a className="text-decoration-none">What is the 10k Race?</a></Link></li>
							<li><Link href="#how-to-prepare-for-a-10k-race"><a className="text-decoration-none">How to Prepare for a 10k Race</a></Link></li>
							<li><Link href="#the-10-week-10k-training-program-for-beginners"><a className="text-decoration-none">The 10-week 10k Training Program for Beginners</a></Link></li>
							<li><Link href="#faq"><a className="text-decoration-none">Frequently Asked Questions</a></Link></li>
							<li><Link href="#final-word"><a className="text-decoration-none">The Final Word</a></Link></li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="what-is-the-10k-race" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What is the 10k Race?</h2>
						<p>If you&rsquo;re new to all this, you might be wondering what exactly makes the 10k race special and why you need special preparations for it.</p>
						<p>The 10k race gets its name from its distance &ndash; 10 kilometers (approximately 6.2 miles) and, along with the 5k (3.1 miles) is one of the most popular races out there.</p>
						<p>It requires a good mix of endurance and speed and is great for covering all the basics of running.</p>
						<p>It is great for people who are already in shape and want something that will challenge them.</p>
						<p>This is one of the best races out there for people who are looking to improve their endurance and leg strength as well as their confidence.</p>
						<p>It&rsquo;s especially good if you&rsquo;re looking to transition into running full or half marathons.</p>
						<p>However, it&rsquo;s also a good goal to strive for when you&rsquo;re just getting into running and beginners can achieve it after some training, which I&rsquo;ll get into in just a bit.</p>
						<p>If you&rsquo;re a beginner, though, you need to be cautious.</p>


						<p>&nbsp;</p>
						<h2 id="how-to-prepare-for-a-10k-race" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How to Prepare for a 10k Race</h2>
						<p>Training for a 10k race is more than just following a schedule or a training plan &ndash; I found that out the hard way.</p>
						<p>You also need to make sure you&rsquo;re doing everything right and that you&rsquo;re not at risk.</p>
						<p>In this section, I&rsquo;ll give you some tips and advice on how to prepare for a 10k race.</p>
						<div className="youtube-video-container my-5">
							<iframe 
								className="shadow rounded"
								width="560" 
								height="315" 
								src="https://www.youtube.com/embed/DdiBikKi85w?controls=0" 
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen>
							</iframe>
						</div>

						<h3 className="mt-5">Make Sure You&rsquo;re Healthy Enough</h3>
						<p>This is the first thing you need to do before deciding to tackle this lofty goal.</p>
						<p>I&rsquo;ll tell you that, in theory, anyone can achieve this goal, but some people will risk their health doing it, and it&rsquo;s not worth it.</p>
						<p>If you&rsquo;re at risk of heart or lung diseases, you&rsquo;re over 40; you have heart problems or <Link href="https://www.webmd.com/fitness-exercise/guide/running-injuries-causes-prevention-treatment"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">chronic injuries</a></Link>, you&rsquo;re obese or have bone problems - you need to consult your doctor before training for a 10k.</p>
						<p>You need to explain what you&rsquo;re planning to do and how to know if your body is ready for it.</p>
						<p>Contrary to popular belief, though, <Link href="https://www.nhs.uk/live-well/exercise/running-helps-manage-my-blood-pressure-andrews-story/"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">running with high blood pressure</a></Link> will not harm you &ndash; it will help.</p>
						<p>Preferably, you should already be involved in some physical activity, however minimal, before training for a 10k.</p>

						<h3 className="mt-5">Take as Much Time as You Need</h3>
						<p>While this program is supposed to be a 12-week one, you shouldn&rsquo;t push yourself to do it in that time.</p>
						<p>You can extend it if you feel you need to and start the regime well in advance so you can adjust it accordingly.</p>
						<p>This is especially important for beginners.</p>
						<p>It&rsquo;s better to repeat a week or two instead of injuring or completely exhausting yourself.</p>
						<p>Even if you&rsquo;re experienced, you shouldn&rsquo;t start this training program 12 weeks before the race &ndash; leave at least a month or two of breathing room.</p>

						<h3 className="mt-5">Don&rsquo;t Stop Your Other Exercises</h3>
						<p>Unless you feel like you&rsquo;ll hurt yourself by doing too much, you should keep your other exercise regimes alive, if you have any.</p>
						<p>They will help you get through this training program with more ease.</p>
						<p>The best activities for cross training include biking, swimming, and yoga, though strength training and other exercises are also beneficial.</p>
						<p>It will help you improve your strength, endurance, and stamina.</p>
						<p>Just make sure you don&rsquo;t overexert yourself.</p>
						<p>Take a day off each week and more than that if you feel that you need to.</p>
						<p><Link href="/running-after-leg-day"><a className="text-decoration-none">Running after leg day</a></Link> is difficult, for example, but it&rsquo;s doable.</p>
						<p>In case you can&rsquo;t run on a certain day, for any reason, substitute it with cross training to make sure you stay in good shape.</p>

						<h3 className="mt-5">Don&rsquo;t Neglect the Warm Up</h3>
						<p>You should always warm up properly before going into a full-on run.</p>
						<p>Just the same, you should cool off when you&rsquo;re finished.</p>
						<p>Start and end each exercise with a light, 5-minute walk, and you should mostly be fine.</p>
						<p>Doing too many stretches is not recommended, though, since they might make your muscles stiffer and prone to injury rather than loosening them.</p>

						<h3 className="mt-5">Eat Well</h3>
						<p>A machine can&rsquo;t run well on bad fuel, and the same goes for your body.</p>
						<p>You need to make sure that you&rsquo;re eating properly so you can stay in top form and perform well, both during your training and the 10k itself.</p>
						<p><Link href="https://www.bbcgoodfood.com/howto/guide/what-eat-your-run"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">Before a run</a></Link>
						, you should eat some slow-release carbs, like brown rice or brown bread, while post-run you should focus on getting some fast-release carbs in, like sweet potatoes or white pasta.</p>
						<p>Always eat around 20 to 30 minutes after a run for the best results and wait for two to four hours after eating before you run.</p>
						<div className="youtube-video-container my-5">
							<iframe 
								className="shadow rounded"
								width="560" 
								height="315" 
								src="https://www.youtube.com/embed/5YQQHqwxYzs?controls=0" 
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen>
							</iframe>
						</div>

						<p>&nbsp;</p>
						<h2 id="the-10-week-10k-training-program-for-beginners" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>The 10-week 10k Training Program for Beginners</h2>
						<p>For the purposes of this guide, we&rsquo;ll consider a &ldquo;beginner&rdquo; to be someone who just started running and can run a whole mile without stopping.</p>
						<p>If you&rsquo;re just starting out, you can still follow this guide, but you should take more than 10 weeks to go through it.</p>
						<p>The first two weeks are quite similar, and you should run at around 50 to 75% of your full capacity without overexerting yourself.</p>
						<p>This way you get the most <Link href="/running-3-times-a-week"><a className="text-decoration-none">benefits from running 3 times a week</a></Link>, allowing you more time to rest and cross-train.</p>
						<h3 className="mt-5">Week 1</h3>
						<ul>
							<li className="mb-3">Monday &ndash; 15 minutes of light running, 5 minutes of walking</li>
							<li className="mb-3">Tuesday &ndash; Rest</li>
							<li className="mb-3">Wednesday - Rest</li>
							<li className="mb-3">Thursday &ndash; 15 minutes of light running, 5 minutes of walking</li>
							<li className="mb-3">Friday - Rest</li>
							<li className="mb-3">Saturday - Rest</li>
							<li className="mb-3">Sunday &ndash; 25 minutes of light running, 10 minutes of walking</li>
						</ul>
						<h3 className="mt-5">Week 2</h3>
						<ul>
						<li className="mb-3">Monday &ndash; Rest</li>
						<li className="mb-3">Tuesday &ndash; 15 minutes of light running, 5 minutes of walking</li>
						<li className="mb-3">Wednesday - Rest</li>
						<li className="mb-3">Thursday - Rest</li>
						<li className="mb-3">Friday &ndash; 15 minutes of light running, 5 minutes of walking</li>
						<li className="mb-3">Saturday - Rest</li>
						<li className="mb-3">Sunday &ndash; 25 minutes of light running, 10 minutes of walking</li>
						</ul>
						<h3 className="mt-5">Week 3</h3>
						<p>Here&rsquo;s where the schedule moves to a rougher pace, and you should make sure that you&rsquo;re ready to transition to it.</p>
						<p>If you&rsquo;re not, you can repeat a week before moving on to this stage.</p>
						<ul>
						<li className="mb-3">Monday - Rest</li>
						<li className="mb-3">Tuesday - 15 minutes of light running, 5 minutes of walking</li>
						<li className="mb-3">Wednesday - Rest</li>
						<li className="mb-3">Thursday - 20 minutes of light running, 5 minutes of walking</li>
						<li className="mb-3">Friday - Rest</li>
						<li className="mb-3">Saturday - 10 minutes of light running</li>
						<li className="mb-3">Sunday - 20 minutes of light running, 5 minutes of walking</li>
						</ul>
						<h3 className="mt-5">Week 4</h3>
						<ul>
						<li className="mb-3">Monday - Rest</li>
						<li className="mb-3">Tuesday - 15 minutes of light running, 5 minutes of walking</li>
						<li className="mb-3">Wednesday - Rest</li>
						<li className="mb-3">Thursday - 20 minutes of light running, 5 minutes of walking</li>
						<li className="mb-3">Friday - Rest</li>
						<li className="mb-3">Saturday - 10 minutes of light running</li>
						<li className="mb-3">Sunday - 25 minutes of light running, 5 minutes of walking</li>
						</ul>
						<h3 className="mt-5">Week 5</h3>
						<p>During this week you start running at an intermediate pace, meaning around 70 to 90% of your full strength. You also eliminate walking after some runs, but you can still do it if it helps you out.</p>
						<ul>
						<li className="mb-3">Monday - Rest</li>
						<li className="mb-3">Tuesday - 15 minutes of light running</li>
						<li className="mb-3">Wednesday - Rest</li>
						<li className="mb-3">Thursday - 15 minutes of intermediate running, 10 minutes of walking</li>
						<li className="mb-3">Friday - Rest</li>
						<li className="mb-3">Saturday - 10 minutes of light running</li>
						<li className="mb-3">Sunday - 30 minutes of light running, 10 minutes of walking</li>
						</ul>
						<h3 className="mt-5">Week 6</h3>
						<ul>
							<li className="mb-3">Monday - Rest</li>
							<li className="mb-3">Tuesday &ndash; 20 minutes of light running</li>
							<li className="mb-3">Wednesday - Rest</li>
							<li className="mb-3">Thursday - 20 minutes of intermediate running, 10 minutes of walking</li>
							<li className="mb-3">Friday - Rest</li>
							<li className="mb-3">Saturday - 15 minutes of light running</li>
							<li className="mb-3">Sunday - 40 minutes of light running, 10 minutes of walking</li>
						</ul>
						<h3 className="mt-5">Week 7</h3>
						<ul>
							<li className="mb-3">Monday - Rest</li>
							<li className="mb-3">Tuesday - 15 minutes of light running</li>
							<li className="mb-3">Wednesday - Rest</li>
							<li className="mb-3">Thursday - 20 minutes of light running</li>
							<li className="mb-3">Friday - Rest</li>
							<li className="mb-3">Saturday - 15 minutes of light running</li>
							<li className="mb-3">Sunday - 45 minutes of light running, 10 minutes of walking</li>
						</ul>
						<h3 className="mt-5">Week 8</h3>
						<ul>
							<li className="mb-3">Monday - Rest</li>
							<li className="mb-3">Tuesday - 10 minutes of light running</li>
							<li className="mb-3">Wednesday - Rest</li>
							<li className="mb-3">Thursday - 15 minutes of intermediate running</li>
							<li className="mb-3">Friday - Rest</li>
							<li className="mb-3">Saturday - 15 minutes of light running</li>
							<li className="mb-3">Sunday - 50 minutes of light running, 10 minutes of walking</li>
						</ul>
						<h3 className="mt-5">Week 9</h3>
						<ul>
							<li className="mb-3">Monday - Rest</li>
							<li className="mb-3">Tuesday - 15 minutes of intermediate running</li>
							<li className="mb-3">Wednesday - Rest</li>
							<li className="mb-3">Thursday &ndash; 20 minutes of light running</li>
							<li className="mb-3">Friday - Rest</li>
							<li className="mb-3">Saturday - 15 minutes of intermediate running</li>
							<li className="mb-3">Sunday - 50 minutes of light running</li>
						</ul>
						<h3 className="mt-5">Week 10</h3>
						<ul>
							<li className="mb-3">Monday - Rest</li>
							<li className="mb-3">Tuesday - 20 minutes of light running</li>
							<li className="mb-3">Wednesday - Rest</li>
							<li className="mb-3">Thursday - 15 minutes of intermediate running</li>
							<li className="mb-3">Friday - Rest</li>
							<li className="mb-3">Saturday &ndash; 20 minutes of light running</li>
							<li className="mb-3">Sunday &ndash; 30 minutes of light running</li>
						</ul>
						<p>Make sure you end the training program at least 3 days before the race and get those three days of rest that you need.</p>
						<p>If possible, get a full week of rest in to make sure that you&rsquo;re well-rested before you go and conquer your first 10k!</p>

						<p>&nbsp;</p>
						<h2 id="faq" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Frequently Asked Questions</h2>
						<p>You probably have some questions that weren&rsquo;t answered in the other sections, but don&rsquo;t worry &ndash; I&rsquo;ll answer as many as I can right here.</p>
						<h3 className="mt-5">How to start running?</h3>
						<p>This something a lot of people struggle with &ndash; <Link href="/how-to-start-running-for-beginners"><a className="text-decoration-none">how to start running</a></Link>?</p>
						<p>It might seem easy at first, but it can be a bit difficult, especially when you&rsquo;ve never done it before.</p>
						<p>One of the most important things you should do is pick a goal to strive for and a training plan that you can stick to.</p>
						<p>You can pick any race in the next three to five months and a training plan like this one to keep you going.</p>
						<p>As far as other things go, <Link href="https://www.theguardian.com/lifeandstyle/the-running-blog/2014/jul/31/running-technique-why-form-matters"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">improving your running form</a></Link> is important as well as getting the right gear.</p>
						<p>When you&rsquo;ve got all that down, you should be able to start running with minimal problems.</p>
						<h3 className="mt-5">How much training do I need?</h3>
						<p>This is completely up to you and how experienced and fit you are.</p>
						<p>You might think that you need to train much harder if you&rsquo;re less experienced, but that won&rsquo;t help you &ndash; it is more likely to injure you.</p>
						<p>If you have less experience running, you should take it slow, stretch out the program to more weeks, possibly 16 or 18, and take at least two days of rest each week.</p>
						<p>If you&rsquo;re more experienced, you can do more training.</p>
						<p>Instead of rest you can even run or walk a few recovery miles.</p>
						<p>It&rsquo;s all up to you in the end.</p>
						<h3 className="mt-5">What clothes do I wear when running?</h3>
						<p>Lots of people get discoursed when they learn how much professional running clothes cost, thinking they need it to start training.</p>
						<p>You really don&rsquo;t, and you can wear almost anything you feel comfortable in, anything that allows you to move easily.</p>
						<p>The only must is a pair of good running shoes &ndash; and make sure they&rsquo;re new, old ones won&rsquo;t do.</p>
						<p>For women, a good sports bra that&rsquo;s properly supportive is also a must.</p>
						<p>You also need to make sure you&rsquo;re dressed well for the weather &ndash; don&rsquo;t go out running in shorts when it&rsquo;s freezing outside.</p>
						<p>Sacrificing a bit of movement to warm up is necessary.</p>
						<h3 className="mt-5">How do I breathe while running?</h3>
						<p>This is probably one of the most common questions that beginners pose, and even some more experienced runners can&rsquo;t give you a good answer to it.</p>
						<p>Some might even give you bad advice.</p>
						<p>What you should do when running is breathe in as much air as possible.</p>
						<p>Breathe in deeply through both your nose and your mouth and exhale through your mouth.</p>
						<p>Also, make sure you&rsquo;re taking deep breaths from the belly or diaphragm &ndash; shallow chest breathing just won&rsquo;t do the trick.</p>
						<p>You need to exhale fully as well, to get rid of all the carbon dioxide so you can inhale deeply.</p>
						<h3 className="mt-5">What are the best areas for running?</h3>
						<p>Most people aren&rsquo;t sure about where to run &ndash; outdoors or on a treadmill, but I&rsquo;ll always tell you that running outdoors is better, especially if you&rsquo;re training for a race.</p>
						<p>You just can&rsquo;t get the right feel for it on a treadmill.</p>
						<p>That leaves the following questions &ndash; where should you run?</p>
						<p>Well, some of the best areas for that are things like parks, bike paths or other pedestrian-only areas in your town.</p>
						<p>If you have a high-school or a university nearby with a track, you&rsquo;ll find that they&rsquo;re usually open to the public and you can use that.</p>
						<p>If you prefer running in your local area, you should use a website like <Link href="https://www.mapmyrun.com/"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">MapMyRun</a></Link> to measure the distance.</p>
						<p>Make sure you pick wide sidewalks as well, wear highly visible clothes and avoid using music &ndash; you need to hear what&rsquo;s around you to avoid danger.</p>
						<p>Don&rsquo;t run alone during the night or in bad parts of town.</p>

						<p>&nbsp;</p>
						<h2 id="final-word" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>The Final Word</h2>
						<p>So, that&rsquo;s about it folks!</p>
						<p>If you follow the training schedule, you should be able to run a full 10k in under 12 weeks.</p>
						<p>Don&rsquo;t expect great results right off the bat, but you should be able to finish the race and come back for the next one!</p>
						<p>If you have any questions that I haven&rsquo;t answered, feel free to sound off in the comments!</p>
						<p>If you know anyone who might find this article helpful, share it with them so they can benefit from it &ndash; that&rsquo;s why I wrote it after all.</p>
						<p>Until next time, have a good run, and I hope we&rsquo;ll see each other again.</p>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
