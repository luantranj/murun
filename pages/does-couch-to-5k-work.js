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
	const postId = 20;
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
						<p>If you have toyed with the idea of starting to run or have a friend who has recently taken up running, chances are you have heard of the Couch to 5K (C25K) program.</p>
						<p>But if you have not, it is a wildly popular training program which is designed to take a non-runner from a sedentary lifestyle to running a 5-kilometer race in just nine weeks.</p>
						<p>It is designed by Josh Clark and published initially on the training website Cool running.</p>
						<p>The C25K has claimed to help thousands of people become runners and has blossomed into a running movement of its own.</p>
						<p>The training plan consists of three days of training sessions per week, for a total of nine weeks.</p>
						<p>Each session includes walking and running intervals, measured by distance or time, progressing forward with the final goal of running either 30 minutes or 5k without walking.</p>
						<p>Running apps are very popular nowadays, and there are plenty to choose from.</p>
						<p>The difference between Couch to 5K and many other iOS running apps is that while those apps can track your run, they do not tell you how much to run or how often.</p>
						<p>The Couch to the 5K app is an excellent choice for new runners because it combines an easy-to-follow plan with the iPhone&rsquo;s GPS capabilities.</p>
						<p>If you are thinking of using the C25K to help get you started on your running journey, consider these following pros and cons to the plan.</p>
						{ /* kimjiwon */ }
						<ul>
							<li><Link href="#pros"><a className="text-decoration-none">Pros</a></Link></li>
							<li><Link href="#cons"><a className="text-decoration-none">Cons</a></Link></li>
							<li><Link href="#what-do-you-get-with-c25k"><a className="text-decoration-none">What do You Get with C25K?</a></Link></li>
							<li><Link href="#tracking-distance-and-pace"><a className="text-decoration-none">Tracking Distance and Pace</a></Link></li>
							<li><Link href="#playing-music-while-running"><a className="text-decoration-none">Playing Music While Running</a></Link></li>
							<li><Link href="#tips-that-will-help-you-to-complete-the-c25k"><a className="text-decoration-none">Tips that will Help You to Complete the C25K</a></Link></li>
							<li><Link href="#conclusion"><a className="text-decoration-none">Conclusion</a></Link></li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="pros" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Pros</h2>
						<div className="d-flex justify-content-center mb-3 shadow rounded">
							<Image
								src="https://res.cloudinary.com/muru/image/upload/v1634022674/does-couch-to-5k-work/c25k-app_xpapfb.jpg" 
								width="730" 
								height="411"
								alt="5k run app screenshot" 
							/>
						</div>
						<p className="text-center">Source: <Link href="https://www.youtube.com/watch?v=jJ_nV7RqrUo"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">YouTube</a></Link></p>
						<p>Does the thought of running for more than one minute terrify you?</p>
						<p>Well, this training may be perfect for you.</p>
						<p>The C25K program starts off with generous walking breaks, and that is an ideal introduction to running both mentally and physically (for example, day one includes: the brisk five-minute warmup walk.</p>
						<p>After that, there goes 60 seconds of jogging and 90 seconds of walking for a total of 20 minutes).</p>
						<p>Josh Clark states that too many people have been turned off from running just because they are trying to start off too fast.</p>
						<p>By having specific, short time goals or distance prevents the participants from doing too much too soon.</p>
						<p>And by preventing these, it prevents injury and mental burnout.</p>
						<p>There has always been a stigma behind walking versus running, but do not let it bother you.</p>
						<p>Studies have shown that a combination of running and walking help in building physical endurance, running distance while preventing muscle fatigue and injuries.</p>
						<p>So you aren&rsquo;t any less of a badass for taking walking breaks, well, quite the contrary, you&rsquo;re a smart runner!</p>
						<p>Further, some fantastic athletes are well known for their run and walk methods.</p>
						<p>Ultra runners (people who run 100+ miles at once!) are notorious for it.</p>
						<p>What&rsquo;s most interesting about this style of training is that it has been made famous by former Olympic runner <Link href="http://www.jeffgalloway.com/"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">Jeff Galloway</a></Link>, who uses the run/walk methods to train runners of all levels to run up-to-a-marathon-distances and beyond.</p>
						<p>The C25K is variable in the sense that participants can choose to follow the plan by either time or distance, depending on their goals.</p>
						<p>That is very helpful for those who are unable to measure the distance they run or those who may have time constraints on their training sessions.</p>

						<p>&nbsp;</p>
						<h2 id="cons" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Cons</h2>
						<p>Though the creators of the C25K program claim that it&rsquo;s for almost everyone, it might not be for everyone.</p>
						<p>Depending on many factors, such as previous fitness experience, health conditions, many beginners may find this training program too aggressive.</p>
						<p>Many <Link href="/how-to-start-running-for-beginners"><a className="text-decoration-none">beginning runners</a></Link> may find that certain weeks include an increase in the running distance which proves to be too difficult and that they may have to repeat that week.</p>
						<p>For example, on training day #3 of week five of the program, participants are suggested to run 2 miles straight without a walk break.</p>
						<p>That&rsquo;s a significant increase from three quarter mile interval run, with half mile walk breaks, the session before.</p>
						<p>The C25K program encourages runners to repeat a week if that is necessary.</p>
						<p>However, the claim of getting participants off the couch and onto running 5 kilometers in only nine weeks can become frustrating to some who find they need to repeat a week.</p>
						<p>On the other hand, some beginners may find the C25K program not aggressive enough.</p>
						<p>This program discourages participants from skipping ahead, and that can also prove frustrating for those who feel they are capable of doing more.</p>

						<p>&nbsp;</p>
						<h2 id="what-do-you-get-with-c25k" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What do You Get with C25K?</h2>
						<p>The Couch to 5K gives you a respectable beginner&rsquo;s plan with the goal of getting you off the couch and running to a 5K or 3.1 miles in nine weeks.</p>
						<p>Starting on the first day of week 1, you alternate 60 seconds of running with 90 seconds of walking for 20 minutes and a 5-minute warm-up and 5-minute cooldown.</p>
						<p>As the weeks progress, you will start running more and walking less until you are jogging for full 30 minutes.</p>
						<p>When you launch the application, you can select appropriate workout along the bottom of the screen.</p>
						<p>Tap &ldquo;start&rdquo; on the workout page and the voice prompts guide you through your run.</p>
						<p>The application tells you everything, including when to run and when to walk.</p>
						<p>After you complete a training session, a small button which is located at the bottom of the screen turns green, making it easy to keep track of which workouts you have already completed.</p>

						<p>&nbsp;</p>
						<h2 id="tracking-distance-and-pace" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Tracking Distance and Pace</h2>
						<p>By taking advantage of the GPS that is built in iPhone, the Couch to 5K tracks your distance, calories, and pace.</p>
						<p>The application is accurate and quick to establish a connection.</p>
						<p>Some runners may find one or more of the weekly increases hard to handle.</p>
						<p>It allows runners to repeat difficult weeks if this occurs.</p>

						<p>&nbsp;</p>
						<h2 id="playing-music-while-running" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Playing Music While Running</h2>
						<p>The Couch to 5K application integrates with your Music app, Spotify, and Pandora, so you can listen to music while you run.</p>
						<p>You control the music from the workout page, including pausing your playlist and skipping songs.</p>
						<p>You can even control the volume without interrupting your workout.</p>
						<p>Twitter, Instagram and Facebook integration is another plus.</p>
						<p>The application automatically shares your workout progress with friends if you enable that feature in the Settings menu.</p>

						<p>&nbsp;</p>
						<h2 id="tips-that-will-help-you-to-complete-the-c25k" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Tips that will Help You to Complete the C25K</h2>
						<h3 className="mt-5">Buy a decent pair of running shoes</h3>
						<p>If you are new to running, you probably may not have any suitable clothing.</p>
						<p>And a decent pair of running shoes is essential.</p>
						<p>I also advise female runners to consider purchasing a sports bra.</p>
						<p>You do not need a technical gear to start with, wear clothes which are comfortable in a breathable material such as cotton and loose fitting.</p>
						<p>If you want to invest in running gear, then shop around for bargains.</p>

						<h3 className="mt-5">Remember to warm up and cool down</h3>
						<p>Each training session starts with a 5-minute brisk walk.</p>
						<p>That is perhaps the most crucial component of each course because it ensures that your joints are prepared for activity and lubricated.</p>
						<p>The 5-minute brisk walk at the end of each final run repetition removes your temptation of stopping running and immediately sitting down, which also enables you to cool down properly.</p>

						<h3 className="mt-5">Do not run on consecutive days</h3>
						<p>When you follow the C25K program, <Link href="/running-3-times-a-week"><a className="text-decoration-none">you run three times a week</a></Link>.</p>
						<p>I scheduled my runs for a Monday, Wednesday, and Friday or Saturday.</p>
						<p>I made sure I did not run on consecutive days.</p>
						<p>When your running is going well, it can be so tempting to skip a rest day to fit in an extra run.</p>
						<p>Please do not do that!</p>
						<p>I believe that rest days form the most critical component of any training plan because they enable the body to recover.</p>

						<h3 className="mt-5">Monitor and share your progress</h3>
						<p>I found out that keeping track of my progress really motivates me.</p>
						<p>I logged all of my training sessions on Fetch Everyone and spent too long analyzing the data from my GPS.</p>
						<p>If you do not have access to a GPS device, then I suggest downloading a running app such as Strava or Runkeeper.</p>
						<p>I uploaded each session on Runkeeper and shared my progress on social media.</p>
						<p>Although my family and friends do not understand my running obsession, other runners are generally very supportive.</p>

						<h3 className="mt-5">It&rsquo;s okay to repeat a training session</h3>
						<p>It is sometimes required to repeat specific training sessions and weeks.</p>
						<p>If you struggle to complete one of the session, then I would suggest repeating that session.</p>
						<p>The second time I followed this program I found myself repeating Week Seven three times.</p>

						<h3 className="mt-5">The comparison is the thief of joy</h3>
						<p>It took me so long to stop comparing my running achievements to the achievements of other runners on social media.</p>
						<p>There were times when I felt as if everyone else was running faster and further.</p>
						<p>Ignore the Runkeeper and other social media and concentrate on your achievements.</p>

						<h3 className="mt-5">Slow down</h3>
						<p>When I was following the C25K for the second time, I would set off to quickly, too far.</p>
						<p>Then, I would find myself struggling to complete some more extended running repetitions.</p>
						<p>In the end, I had to spend lots of time consciously telling myself to slow down.</p>
						<p>I would incorporate hills into my runs because that forced me to slow down.</p>
						<p>So, don&rsquo;t be afraid of slowing down.</p>

						<h3 className="mt-5">Mix it up</h3>
						<p>Plan good running routes and mix it up.</p>
						<p>The best running routes are those free from traffic, those that are scenic and have good lighting.</p>
						<p>You can run anywhere if it is safe.</p>
						<p>If I run along the same roads every time I run, I get bored quickly.</p>
						<p>I find running slightly more natural if I do not know precisely where the next hill is located.</p>
						<p>So, explore your local neighborhood.</p>
						<p>If possible get off the pavements and onto the trails.</p>

						<h3 className="mt-5">Enjoy your running</h3>
						<p>If you are a complete beginner, not one single week of the C25K is going to be easy.</p>
						<p>There will be times when you want to quit, and you will ache your body adapts.</p>
						<p>I can guarantee that all the pride and satisfaction you will feel at the end of C25K will make all of the challenging sessions worthwhile.</p>

						<h3 className="mt-5">On the day of your final run</h3>
						<p>I completed the last five-kilometer run that marks the end of the C25K around my local neighborhood.</p>
						<p>However, I would recommend finishing your first five-kilometer run with others if at all possible, by heading to your local park.</p>
						<p>Trust me, running with others will help you to complete the C25K.</p>

						<h3 className="mt-5">Other Tips</h3>
						<p>Remember, the plan is a general outline, and it may need to be modified based on your current fitness levels.</p>
						<p>Don&rsquo;t become frustrated if you must repeat a week, or if you feel a session is too easy.</p>
						<p>The first week is always the worst one when it comes to starting a new fitness plan- you feel weak, and your body might rebel.</p>
						<p>Trust me- it gets easier.</p>
						<p>Think about the big picture, and remember that even the best athletes must be patient and learn to trust in their training.</p>
						<p>If you find the C25K program to be too hard, or too easy, consider looking for alternative training plans or hiring a running coach who will design a plan specifically for you.</p>

						<p>&nbsp;</p>
						<h2 id="conclusion" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Conclusion</h2>
						<p>The Couch to the 5K app is ideal for beginners.</p>
						<p>The training plan is a great way to build up gradually your running mileage, and the application includes a bunch of nifty features, such as integrated music playlist.</p>
						<p>It is also affordable and easy to use.</p>
						<p>However, after you complete this program, you may want a different running application.</p>
						<p>Also, leaving C25K running in the background depletes the battery life of your phone.</p>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
