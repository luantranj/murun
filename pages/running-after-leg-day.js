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
	const postId = 17;
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

						{ /* CONTENT HERE */ }
						<p>After a good leg day, you usually barely walk away from the gym.</p>
						<p>What about running the day after this???</p>
						<p>This question appears regularly in fitness circles lately, so I decided to help you guys out.</p>
						<p>I noticed many people are worried about this because it seems that your legs might not handle the stress of the combined effort of hard training and running a day later.</p>
						<p>Let&rsquo;s see is running after leg day good!</p>
						{ /* kimjiwon */ }
						<ul>
							<li><Link href="#running-after-leg-days-isnt-bad"><a className="text-decoration-none">Running After Leg Days Isn’t Bad At All</a></Link></li>
							<li><Link href="#why-are-leg-days-so-hard"><a className="text-decoration-none">Why are Leg Days so Hard?</a></Link></li>
							<li><Link href="#how-to-prevent-leg-day-damage"><a className="text-decoration-none">How to Prevent Leg Day Damage?</a></Link></li>
							<li><Link href="#what-about-running-after-leg-day"><a className="text-decoration-none">So, What about Running After Leg Day?</a></Link></li>
							<li><Link href="#how-to-run-after-a-leg-day"><a className="text-decoration-none">How to Run After a Leg Day?</a></Link></li>
							<li><Link href="#conclusion"><a className="text-decoration-none">Conclusion</a></Link></li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="running-after-leg-days-isnt-bad" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Running After Leg Days Isn’t Bad At All</h2>
						<p>Logically thinking, you&rsquo;d expect that&rsquo;s a bad idea, especially if you destroy your legs during your leg day.</p>
						<p>But, on the other hand, running after leg day can be beneficial for some reasons: it helps the recovery of your muscles from intensive leg workout, promotes proper circulation, has an anabolic and fat burn effects!</p>
						<p><Link href="/flat-feet-exercises"><a className="text-decoration-none">As a flat foot runner</a></Link> and gym veteran, I can tell you this - you should strengthen your feet - let them do their job.</p>
						<p>Don&rsquo;t chuck your shoes and go running barefoot.</p>
						<p>Run a few times a week barefoot on grass, and slowly start getting less and less supportive shoes.</p>
						<p>In case you have flat foot arches (like me), you need to find a shoe which offers more stability and arch support for your foot.</p>
						<p>You will need a &ldquo;stability&rdquo; running shoe, which helps flat-footed runners with more support and guidance from the shoe structure.</p>
						<p>I have seen many fitness maniacs who enjoy running after leg days.</p>
						<p>That was unbelievable for me at first, but I used to convince myself that they are straining their legs beyond the required.</p>
						<p>After some time, I started wondering if such an intense workout was necessary for the legs, and you know what?</p>
						<p>I was astounded at what I found.</p>
						<p>Before we get into concepts in more detail, you might wonder - why run at all when other, less-risky aerobic options like ellipticals and bikes are available?</p>
						<p>The answer - nothing blasts fat like running, and nothing is as natural, functional and convenient.</p>
						<p>When I first started running, I skipped leg days often when the weather was terrible, or I was sore.</p>
						<p>I learned that it was not helping me become a better runner, so I started getting out the door when conditions weren&rsquo;t perfect, and it helped me get faster.</p>
						<p>Running after leg days isn&rsquo;t bad at all - I&rsquo;ll prove you that!</p>
						<p>But first, let&rsquo;s tackle some questions about legs and leg training.</p>

						<p>&nbsp;</p>
						<h2 id="why-are-leg-days-so-hard" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Why are Leg Days so Hard?</h2>
						<p>Glutes, hamstrings, calves, and thighs form the most massive muscle group in the body.</p>
						<p>As a result, leg workouts consume so many calories - i.e., they burn a lot of fat.</p>
						<p>If one wants to see visible results from lower body exercises, he or she has to engage in intense workout sessions.</p>
						<p>Whether it be <Link href="https://www.youtube.com/watch?v=O32-Ae8SNIc"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">power cleans</a></Link>, reverse calf or lunge raises or overhead squats - the heavier the weights, greater the effects.</p>
						<p>Leg day is an exceptional level of hell in itself.</p>
						<p>It is enough to look around at the many memes scattered all over the Internet if you have no idea what I am talking about.</p>
						<p>You might get the idea that the whole concept of an intense leg session is to damage yourself for at least two days voluntarily.</p>
						<p>Many people are against running after leg day mainly because the legs are not exactly expected to survive its aftermath.</p>
						<p>Leg day is especially grueling and will probably make you have flashbacks of the way you have lived your life.</p>
						<p>What makes leg day so debilitating for us is a condition which is known as <Link href="https://www.painscience.com/articles/delayed-onset-muscle-soreness.php"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">Delayed Onset Muscle Soreness</a></Link> or DOMS, which peaks at about 24 to 48 hours after an intense workout.</p>
						<p>Does it sound like the hell you go through after leg days, right?</p>
						<p>Anybody can fall victim to DOMS.</p>
						<p>This nasty condition is caused by a microscopic trauma that the muscles sustain after an intense workout that they aren&rsquo;t used to.</p>
						<p>If you push your muscles too hard, you will most definitely end up with DOMS.</p>

						<p>&nbsp;</p>
						<h2 id="how-to-prevent-leg-day-damage" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How to Prevent Leg Day Damage?</h2>
						<p>The soreness and damage caused to the muscles can be prevented to a great extent with a well-planned workout session.</p>
						<p>If you can reduce inflammations and damage, you may after all not have to skip running after leg day.</p>
						<p>I&rsquo;ll give you some of the tips to beat the blues pm and after a leg day workout:</p>
						<ul>
							<li className="mb-1">Never miss a warm-up session</li>
							<li className="mb-1">Choose the weights wisely</li>
							<li className="mb-1">Take breaks</li>
							<li className="mb-1">Don&rsquo;t miss stretching</li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="what-about-running-after-leg-day" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>So, What about Running After Leg Day?</h2>
						<p>There is a common misconception that exercises do not have to be comfortable and that they are supposed to hurt at some point.</p>
						<p>That is correct to some degree, but you should also keep in mind that being in pain and doing nothing but wallow in it can keep you far from pushing past the limits of your body, too.</p>
						<p>On the other hand, running and the optimal balance of intensity, volume, and pace-specific work will always be the primary focus of runner&rsquo;s training program.</p>
						<p>Pain can set you back from your fitness goals, too.</p>
						<p>Just imagine being in so much pain that you remain incapacitated for days.</p>
						<p>That&rsquo;s terrible, and it does very little for you and your goals if you have to stay in bed for a couple of days after every workout.</p>
						<p>So, should you run after leg day?</p>
						<p>The answer is yes - if you can handle it.</p>
						<p>There are a few ways to utilize running after leg workouts and benefit from them:</p>

						<h3 className="mt-5">Utilize primal running form</h3>
						<p>You can significantly reduce the impact of running and its risk to connective tissues and joints by learning &ldquo;soft running.&rdquo;</p>
						<p>This technique imitates the barefoot running style of the cavemen, in which you gently land on the forefoot with a springy bent leg and avoid the traumatic heel strike which rattles your bones.</p>

						<h3 className="mt-5">Sprints after leg days</h3>
						<p>Immediately after a leg workout, a high-intensity, short interval session can spare joint stress, have a strength-training-like anabolic effect and raise EPOC (excess post-exercise oxygen consumption) and extra calorie-burning for as long as 48 hours.</p>

						<h3 className="mt-5">An easy recovery run</h3>
						<p>No more than 15 to 20 minutes and light enough that you can still chat comfortably while doing it - it is advisable after intense workouts.</p>
						<p>That will increase your blood circulation and help you recover faster.</p>
						<p>To maximize the promotion of proper circulation, you can also wear <Link href="https://www.sports-health.com/blog/do-compression-garments-work"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">compression garments</a></Link>.</p>
						<p>A nicely fitted pair of compression stockings or tights will increase your circulation and help you get rid of DOMS faster.</p>

						<p>&nbsp;</p>
						<h2 id="how-to-run-after-a-leg-day" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How to Run After a Leg Day?</h2>
						<p>Running after leg day can seem impossible, especially if you are suffering from the unholy wrath of your traumatized muscles.</p>
						<p>On the other hand, If you can - it will promote faster recovery and reduce soreness so you can quickly get back on your feet.</p>
						<p>Slip into your compression garments and your most comfortable running shoes.</p>
						<p>Stretch your legs gently before doing any training.</p>
						<p>That will prevent further muscle injury and get your circulation pumped up before your run.</p>
						<p>Set your timer, plug in your earphones and start running.</p>
						<p>Finish off your run with a gentle stretch to cool down.</p>
						<p>Keep your compression stockings or tights on for another 1 to 2 hours to maximize the benefits of the increased circulation they bring.</p>

						<p>&nbsp;</p>
						<h2 id="conclusion" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Conclusion</h2>
						<p>Leg day can be a hell on earth, but gradually, your body will adapt to the stress which you put it through.</p>
						<p>That does not lessen the pain, which comes after.</p>
						<p>Running after intense leg workouts can be very good for you and your muscles under the right circumstances.</p>
						<p>However, it is not done to break any records or to push your body beyond its limits but to aid in the recovery of your muscles after the trauma they received.</p>
						<p>Keeping a relaxed pace at no more than 20 minutes promotes good circulation, speed up muscle recovery and reduce DOMS.</p>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
