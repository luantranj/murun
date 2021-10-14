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
	const postId = 30;
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
						<p>Finding the balance in your life is tough &ndash; and drawing the line between being inactive and working out can be even harder &ndash; but you can&rsquo;t keep avoiding this issue and hoping it goes away on its own.</p>
						<p>There&apos;s no shame in acknowledging that you might need a little help taking proper care of your health when you&apos;re neck-deep in work, commuting, deadlines, and all those life stuff that happens every day &ndash; it happens to everyone, whether they&apos;d like to admit it or not.</p>
						<p>That&rsquo;s why today&rsquo;s article is all about sharing proven ways to include exercise in your daily life &ndash; even when it seems impossible to do so!</p>

						<h2 className="mt-5">1. You Can Exercise Without Ever Leaving Your Desk</h2>
						<p>Of course, I&rsquo;m not talking about full-blown strength training.</p>
						<p>I mean, that would be amazing, but we all know it&rsquo;s not a very realistic expectation to have at this point, now, is it?</p>
						<p>However, that doesn&rsquo;t mean you should give up on physical activity altogether, and spend most of your waking hours with your behind promptly glued to your chair.</p>
						<p>I know, I know, you have a LOT to do, but I can assure you that a quick desk-job-inspired &ldquo;workout,&rdquo; such as light stretching, won&rsquo;t hurt your progress in any way.</p>
						<p>So, whenever you catch yourself doing some mundane tasks or waiting for that Slack reply, use it to squeeze some physical activity in &ndash; a couple of minutes here and a couple of minutes there, and before you know it, you&apos;re making a difference in your physical activity level.</p>
						<h2 className="mt-5">2. Note It Down In Your Planner</h2>
						<p>You wouldn&rsquo;t skip a dentist appointment because you don&rsquo;t want to interrupt your flow, now, would you?</p>
						<p>(I know you would, but let&rsquo;s pretend for the sake of this argument, okay?)</p>
						<p>So, if you can&rsquo;t seem to squeeze in a workout without it messing up your entire schedule, plan ahead, note it down in your calendar, as you would any other appointment, and make sure you follow through with it:</p>
						<p>You&rsquo;ll always be busy, so you&rsquo;ll have to work your way around it &ndash; and the first step is learning to treat exercise not as something optional, but as a priority, instead.</p>
						<p>You&rsquo;re having an appointment with a healthier version of yourself here!</p>
						<h2 className="mt-5">3. Reward Yourself for Being Productive</h2>
						<p>Do you feel particularly proud of a particular task you finished or the efficiency and results you got from the engagement you&rsquo;ve put in, and you&apos;re in the mood to celebrate your success?</p>
						<p>What better way to do that than by treating yourself with something as beneficial for your general wellbeing as a workout, instead of going for your usual celebration method of having a glass of wine?</p>
						<p>Or, you know, have both, if you feel like it &ndash; as long as you don&rsquo;t do it at the same time, I won&rsquo;t judge!</p>
						<h2 className="mt-5">4. Get Yourself One of Those Standing Desks</h2>
						<p>And no, I&rsquo;m not saying you should spend the entire day on your feet. Standing for prolonged periods can be just as bad for you as sitting.</p>
						<p>The idea is to give yourself options and switch between the two throughout the day &ndash; from sitting to standing and back.</p>
						<p>Once you get into it, I&rsquo;m sure you&rsquo;ll notice something interesting:</p>
						<p>The mere act of standing up will make you move more because you&rsquo;ll be naturally compelled to do so.</p>
						<p>Stretching, walking around, shifting your weight from one leg to the other &ndash; and even dancing when your favorite song comes on &ndash; will all become a part of your routine.</p>
						<p>And before you know it, you&rsquo;ll be making a difference in your activity level.</p>
						<h2 className="mt-5">5. Did You Know That Running Boosts Creativity?</h2>
						<p>If that&apos;s not a reason enough for you to put on your running shoes and head outside, I don&apos;t know what is!</p>
						<p>Whenever you face a demanding task which involves creative thinking and you get stuck, go for a run &ndash; enjoy the fresh air, experience the runner&rsquo;s high, and most importantly, give your brain a chance to have its &ldquo;aha!&rdquo; moment.</p>
						<p>Running is repetitive by nature, which means your body &ndash; and your brain &ndash; can switch to autopilot and free up some space in your subconscious for creativity and deeper thinking.</p>
						<p>If you&rsquo;re a total running newbie, consider giving the Couch to 5K Program a try &ndash; you can check out my <Link href="/does-couch-to-5k-work"><a className="text-decoration-none">couch to 5k reviews</a></Link> for more info!</p>
						<h2 className="mt-5">6. Start Your Day A Tad Bit Earlier Than Usual</h2>
						<p>If you&rsquo;re not exactly a morning person, you&rsquo;re probably going to hate me for this, but I don&rsquo;t mind &ndash; it&rsquo;s for your own good, as they say!</p>
						<p>Here&rsquo;s the thing:</p>
						<p>Maybe you&rsquo;re not that busy as you think, and you merely fell into the same trap as anyone who&rsquo;s ever worked from home:</p>
						<p>You&rsquo;re starting your day way later than you probably should because you can afford to do so.</p>
						<p>If there&rsquo;s even a slim chance of you starting your day a half an hour to an hour earlier, seize it, and use that time for a quick workout!</p>
						<h2 className="mt-5">7. It Doesn&rsquo;t Have To Be Time-Consuming &ndash; Every Bit Counts</h2>
						<p>One of the main things I&rsquo;d like you to remember about finding ways to include exercise in your daily life is that every bit counts.</p>
						<p>No one expects you to go from zero to a hundred straight away.</p>
						<p>It&rsquo;s okay to split your workouts into small, five to ten-minute portions, and space them out evenly throughout the day if that&rsquo;s what works for you.</p>
						<p>Also, focus on making your workouts more effective and less time-consuming &ndash; rather than doing an hour and a half of yoga, opt for 10-15 minutes of <Link href="https://en.wikipedia.org/wiki/High-intensity_interval_training"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">HIIT</a></Link>, instead.</p>
						<h2 className="mt-5">8. Walk, Walk, Walk</h2>
						<p>Simply put, forget that you own a car and that public transportation exists, and walk everywhere instead.</p>
						<p>Running errands, grocery shopping &ndash; all these daily activities don&rsquo;t have to include a vehicle.</p>
						<p>Plus, you&rsquo;ll be doing a massive favor to the environment, and given the alarming rate of climate change these days that should be more than enough to motivate you.</p>
						<p>Opt for a bike if it&rsquo;s more convenient for you, or park farther away from your destination, and walk a few blocks.</p>
						<p>As long as you&rsquo;re getting your heart rate up, it doesn&rsquo;t matter whether you&rsquo;re walking or cycling &ndash; you&rsquo;re doing something, and that&rsquo;s all that counts!</p>
						<h2 className="mt-5">9. Let&rsquo;s Pretend That Elevators Aren&rsquo;t a Thing</h2>
						<p>Yes, you read that right.</p>
						<p>Besides your car, the elevator is something you should add on your list of things to ditch to sneak in more physical activity in your day, too.</p>
						<p>I mean, if you can sit there writing fantasy fiction, pretending that dragons do exist, apply the same creative thinking to your daily life, and pretend that elevators don&rsquo;t.</p>
						<p>No one expects you to climb ten flights of stairs every single day, but whenever you&rsquo;re going only a couple of floors up, opt for taking the stairs.</p>
						<p>Even a stairway or two can be enough to get your heart rate up &ndash; and that&rsquo;s all that matters.</p>
						<h2 className="mt-5">10. Do You Have A Dog?</h2>
						<p>Okay, I get how this may seem like a completely random, off-topic question, but you&rsquo;ll see where I&rsquo;m going with it soon enough.</p>
						<p>So, do you?</p>
						<p>If the answer is &quot;No,&quot; it might be time to reconsider your life choices here &ndash; not only because of how unbelievably adorable pooches can be but because there&apos;s actual research that shows that these four-legged companions help keep their owners more active!</p>
						<p>I mean, if all else fails, at least you&rsquo;ll have a new best friend that will motivate you to go on daily walks.</p>
						<h2 className="mt-5">You May Go Back To Your Important Stuff Now</h2>
						<p>But before you go, I&rsquo;d like you to remember one thing:</p>
						<p>I know that, in your mind, everything that&apos;s not directly related to working gets labeled as a waste of time almost immediately, and I&apos;d like to see you working on changing that attitude by following these simple tips.</p>
						<p>You&rsquo;re allowed to take a break; you know that, right?</p>
						<p>There are plenty of ways to include exercise in your daily life &ndash; even when you&rsquo;re too busy &ndash; so, don&rsquo;t make excuses!</p>
						<p>All I&rsquo;m asking for here is 30 minutes of your day.</p>
						<p>And once you commit to it, you&rsquo;ll see how beneficial it will be not only for your body but your work, as well!</p>

					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
