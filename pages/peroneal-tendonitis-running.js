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
	const postId = 12;
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
						<p>Runners accept the fact that there is a certain amount of risk for injuries in this sport.</p>
						<p>Most runners have at least a couple of injuries per year, caused by various factors such as overuse, improper footwear, training surfaces etc.</p>
						<p>The majority of these injuries involve lower leg like knee or the Achilles tendon.</p>
						<p>But what if your pain doesn&rsquo;t fit into any of the usual categories such as runner&rsquo;s knee, ankle sprain or Achilles tendonitis?</p>
						<p>What if the pain is present on the outside of the ankle and goes all the way down to the base of the fifth metatarsal and under the arch of the foot?</p>
						<p>There is high chance that this pain is caused by the peroneal tendonitis, an injury that is less frequent than other foot and ankle injuries.</p>
						<p>Because peroneal tendonitis is less frequent and has symptoms that are similar to other foot and ankle injuries, it is often misdiagnosed and not treated properly.</p>
						<p>Moreover, the pain can be so bad that it can limit runners not only in their sport but also in everyday activities.</p>
						<p>That is why today I&rsquo;m going to talk about peroneal tendonitis in runners.</p>
						<p>If you want to find out more about the causes, symptoms and ways to treat and prevent it, please read on.</p>
						{ /* kimjiwon */ }
						<ul>
							<li><Link href="#why-are-peroneal-tendons-so-important-for-running"><a className="text-decoration-none">Why Are Peroneal Tendons So Important For Running?</a></Link></li>
							<li><Link href="#difference"><a className="text-decoration-none">Is There A Difference Between Peroneal Tendonitis, Tendinosis And Tendinopathy?</a></Link></li>
							<li><Link href="#overuse"><a className="text-decoration-none">Overuse is the Primary Cause of Peroneal Tendonitis</a></Link></li>
							<li><Link href="#runners-higher-risk-for-peroneal-tendonitis"><a className="text-decoration-none">Why are Runners at Higher Risk for Developing Peroneal Tendonitis?</a></Link></li>
							<li><Link href="#other-factors"><a className="text-decoration-none">Other Factors that can Contribute to Peroneal Tendonitis</a></Link></li>
							<li><Link href="#symptoms"><a className="text-decoration-none">What are the Symptoms of Peroneal Tendonitis?</a></Link></li>
							<li><Link href="#rest"><a className="text-decoration-none">Rest is a Crucial Part of the Initial Treatment for Peroneal Tendonitis</a></Link></li>
							<li><Link href="#how-to-prevent-peroneal-tendonitis"><a className="text-decoration-none">How to Prevent Peroneal Tendonitis?</a></Link></li>
							<li><Link href="#exercises"><a className="text-decoration-none">Exercises are the Important Part of Peroneal Tendonitis Prevention</a></Link></li>
							<li><Link href="#conclusion"><a className="text-decoration-none">Conclusion</a></Link></li>
						</ul>


						<p>&nbsp;</p>
						<h2 id="why-are-peroneal-tendons-so-important-for-running" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Why Are Peroneal Tendons So Important For Running?</h2>
						<p>In order to understand this condition, I think we should first talk about peroneal tendons and its important <Link href="https://www.physio-pedia.com/Peroneal_Tendinopathy"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">role</a></Link> in all weight bearing activities, running included.</p>
						<p>There are actually two peroneal tendons - one emerges from the peroneus brevis muscle, while the other emerges from peroneus longus muscle.</p>
						<p>Both of these muscles and tendons run parallel to each other down the lateral leg and behind the malleolus and insert into two different areas on the foot- one tendon attaches to the outer part of the midfoot, while the other goes underneath the foot and attaches to the inside of the arch of the foot.</p>
						<p>Three most important functions of these muscles and its tendons are eversion, plantar flexion of the lateral foot and ankle stabilization.</p>
						<div className="d-flex justify-content-center my-5 shadow rounded">
							<Image
								src="https://res.cloudinary.com/muru/image/upload/v1633946303/peroneal-tendonitis-running/peroneal-tendonitis_qw55xl.jpg" 
								width="730" 
								height="284"
								alt="Peroneal tendonitis: Pain location" 
							/>
						</div>
						<p>Eversion is outward roll of the foot.</p>
						<p>When peroneal muscles contract and shorten, the muscles and its tendons roll the ankle outwards.</p>
						<p>Plantar flexion of the foot is actually pointing of the foot downward.</p>
						<p>They also stabilize foot and ankle, especially during weight bearing activities.</p>
						<p>Eversion, plantar flexion and lateral ankle and foot stabilization are important part of usual running gait cycle and therefore any excessive eversion and plantar flexion can make you more susceptible to injury and vice versa.</p>

						<p>&nbsp;</p>
						<h2 id="difference" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Is There A Difference Between Peroneal Tendonitis, Tendinosis And Tendinopathy?</h2>
						<p>There is <Link href="http://www.sportsinjuryclinic.net/sport-injuries/ankle-achilles-shin-pain/peroneal-tendonitis"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">no difference</a></Link> between these terms, they all describe the same condition.</p>
						<p>Out of all of them, peroneal tendonitis is actually the most inaccurate term even though it is the most used. In medical terminology, suffix &lsquo;&rsquo;-itis&rsquo;&rsquo; means inflammation of some tissue.</p>
						<p>In the past, it was believed that peroneal tendonitis is an acute inflammation of peroneal tendons.</p>
						<p>However, recent studies has shown that inflammation is less responsible for this condition than previously thought.</p>
						<p>Peroneal tendonitis is actually a chronic condition, primarily caused by the repetitive stress on the tendons and other foot structures.</p>
						<p>Initially, there may be an inflammation of tendons and surrounding tissues.</p>
						<p>There is also a possibility that every worsening of this condition will lead to inflammation.</p>
						<p>However, as the condition progresses, usually there are no signs of inflammation because degeneration replaces the inflammatory process.</p>

						<p>&nbsp;</p>
						<h2 id="overuse" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Overuse is the Primary Cause of Peroneal Tendonitis</h2>
						<p>As I&rsquo;ve already mentioned, peroneal tendonitis is a chronic condition which is primarily an overuse injury, caused by the repetitive stress on the tendons.</p>
						<p>People who do weight bearing physical activities, especially those that have repetitive ankle motion and sudden and frequent change of direction like running, jumping, tennis, dancing are more susceptible to this type of injury.</p>
						<p>Every stress causes little damage which may or may not be followed by the inflammation.</p>
						<p>Over time, all these stress, small damages and repair cause structural changes in the tendon, also known as degeneration.</p>
						<p>In order to endure the repetitive stress, the tendons will first start to thicken.</p>
						<p>However, after a while, all these vicious cycle of stress, damage and repair will lead to stretching and thinning of the tendon.</p>
						<p>Moreover, in the later stages of this medical condition there is also a higher chance for peroneal tendon rupture.</p>

						<p>&nbsp;</p>
						<h2 id="runners-higher-risk-for-peroneal-tendonitis" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Why are Runners at Higher Risk for Developing Peroneal Tendonitis?</h2>
						<p>In comparison to other running foot injuries, peroneal tendonitis is not that common.</p>
						<p>That is the reason why there are not so many studies who researched factors that can contribute to the development of peroneal tendonitis.</p>
						<p>However, there are some studies who have shown that <Link href="https://www.docontherun.com/peroneal-tendon-injuries-runners-overview-runners-connect-running-injury-summit/"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">runners</a></Link>, especially those who run at a higher speed or for longer periods, are at a higher risk for peroneal tendonitis.</p>
						<p>In this study, it is noticed that higher running speeds put additional stress on the peroneal tendons in addition to the usual stress these tendons go through during weight bearing.</p>
						<p>The reason for this is the increased activity of peroneus muscles.</p>
						<p>Moreover, higher running speeds require more rapid transfer of forces to the midfoot as well as better ankle stabilization.</p>
						<p>All these changes can lead to irritation, inflammation and degeneration of peroneal tendons.</p>
						<p>Runners are also at a higher risk for peroneal tendonitis because of the different running surface they train on.</p>

						<p>&nbsp;</p>
						<h2 id="other-factors" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Other Factors that can Contribute to Peroneal Tendonitis</h2>
						<p>In addition to overuse as the primary cause of peroneal tendonitis, there are various factors that can contribute to development of peroneal tendonitis in some way.</p>
						<p>Moreover, these factors can also be present in many runners.</p>

						<h3 className="mt-5">Flat feet, Overpronation and Excess Eversion</h3>
						<p>The people who are at higher risk for developing peroneal tendonitis are those with <Link href="/how-to-get-rid-of-flat-feet"><a className="text-decoration-none">flat feet</a></Link>.</p>
						<p>People with low arches usually tend to overpronate and do excess eversion of the foot, leading to more stress on the peroneal muscles and tendons, predisposing them to injury.</p>
						<p>There is even one study that confirms this claim.</p>

						<h3 className="mt-5">Running Along Slopes</h3>
						<p>Running along slopes will cause excessive rolling out of the foot, also known as eversion.</p>
						<p>Because peroneal muscles and tendons are important for eversion of foot, this excessive motion during run along slopes will cause more strain on the tendons and make you more susceptible to injury of peroneal tendons.</p>

						<h3 className="mt-5">Tight Calf Muscles</h3>
						<p>Tight calf muscles increase the tension in the peroneal tendon, causing it to rub more against/off the outside of the bones.</p>

						<h3 className="mt-5">Ankle Sprain</h3>
						<p>Peroneal muscles and tendons are one of several structures that surround the ankle.</p>
						<p>That is why <Link href="/how-to-heal-a-sprained-ankle-faster"><a className="text-decoration-none">ankle sprains</a></Link> can also lead to the injury of the peroneal tendons.</p>
						<p>However, ankle sprain doesn&rsquo;t have to cause injury of the peroneal tendons instantly.</p>
						<p>Previous ankle sprains can lead to ankle instability and since peroneal tendons are important for ankle stabilization, this condition will put more stress on them and may lead to peroneal tendonitis after some time.</p>

						<h3 className="mt-5">Improper Footwear</h3>
						<p>Improper, unsupportive or worn out shoes can contribute to peroneal tendonitis.</p>
						<p>They will cause foot and ankle instability and put more stress on the lower leg muscles, tendons and other structures, peroneal tendons included.</p>

						<h3 className="mt-5">Lower Leg Muscle Imbalances</h3>

						<p>&nbsp;</p>
						<h2 id="symptoms" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What are the Symptoms of Peroneal Tendonitis?</h2>
						<p>Pain is the main <Link href="https://www.foothealthfacts.org/conditions/peroneal-tendon-injuries"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">symptom</a></Link> in people with peroneal tendonitis.</p>
						<p>This pain is usually located on the outside of the ankle, below the malleolus or the bony lump on the outside of the ankle.</p>
						<p>It can be felt all the way down to the insertion of the tendon at the base of the fifth metatarsal bone.</p>
						<p>This pain can be and gets worse during and after physical activity and gets better with rest.</p>
						<p>Many people say that the pain is the worst in the morning when they stand on their feet for the first time after rest and gets better during the day or until physical activity.</p>
						<p>Moreover, there is also an ankle instability when weight bearing.</p>
						<p>Pressing the peroneal tendons can recreate this pain, as well as foot inversion and eversion.</p>
						<p>The pain associated with peroneal tendonitis usually has gradual onset and progresses with the continuation of activities that can aggravate it.</p>
						<p>There can also be signs of inflammation like swelling, redness, tenderness on the outside of the ankle, especially during the acute phase of this medical condition.</p>

						<p>&nbsp;</p>
						<h2 id="rest" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Rest is a Crucial Part of the Initial Treatment for Peroneal Tendonitis</h2>
						<p>The <Link href="https://www.medicalnewstoday.com/articles/318349.php"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">treatment and prognosis</a></Link> of peroneal tendonitis depends of the severity and stage of this medical condition.</p>
						<p>However, as with all sports injuries, PRICE therapy is the initial treatment for peroneal tendonitis, especially in the acute phase of the injury.</p>
						<p><strong>PRICE therapy consists of protection, rest, ice, compression and elevation.</strong></p>
						<p>The aim of this therapy is to reduce the stress on the tendon, relief pain and swelling and therefore give the peroneal tendons time to heal properly.</p>
						<p>Try to hold your leg above your heart in order to minimize swelling and apply ice once every couple of hours for 15-20 minutes.</p>
						<p>Don&rsquo;t use ice too long or frequently since it can damage tissues and worsen the condition.</p>
						<p>In cases where the pain is severe, you should consider taking some anti-inflammatory medication like ibuprofen or similar.</p>
						<p>Rest is a crucial part of treatment for peroneal tendonitis.</p>
						<p>You should avoid any activity that can aggravate the injury.</p>
						<p>Because most everyday activities involve some sort of weight bearing, it is recommended to take a couple of days off.</p>
						<p>If total rest is not possible and the pain isn&rsquo;t gone, compression and taping of your foot and ankle as well as <Link href="/best-ankle-braces"><a className="text-decoration-none">brace</a></Link> are possible solutions.</p>
						<p>This way you will offload the tension as much as possible while doing your activities and allow the peroneal tendons to heal.</p>
						<p>If you still want to be physically active while recovering, switch to sports that doesn&rsquo;t involve weight bearing like swimming or cycling.</p>

						<p>&nbsp;</p>
						<h2 id="how-to-prevent-peroneal-tendonitis" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How to Prevent Peroneal Tendonitis?</h2>
						<p>As soon as you&rsquo;ve recovered from acute phase of peroneal tendonitis, you should work on the prevention from recurring.</p>
						<p>If you don&rsquo;t change your habits and correct and eliminate contributing factors and causes, the pain will come back sooner rather than later.</p>
						<p>Moreover, it will be worse and last longer.</p>
						<p>Because it is an overuse injury, change of training regime is the first thing you should do.</p>
						<p>Lower the intensity of your trainings and don&rsquo;t overtrain.</p>
						<p>Change the intensity of your trainings gradually, especially if you&rsquo;ve already had symptoms of peroneal tendonitis.</p>
						<p>All runners should know that their footwear don&rsquo;t last long and should be changed more frequently.</p>
						<p>It is also important to get <Link href="/best-running-shoes-for-peroneal-tendonitis"><a className="text-decoration-none">footwear with proper stability</a></Link> for you foot and ankle.</p>
						<p>And remember, they don&rsquo;t have to be the most expensive in order to be good.</p>
						<p>If you have structural abnormality of foot such as <Link href="/best-running-shoes-for-high-arches"><a className="text-decoration-none">high arches</a></Link> or flat feet, get shoes that are specially designed for these conditions.</p>
						<p>People with flat feet tend to overpronate and are more susceptible to peroneal tendonitis.</p>
						<p>That is why you should try to find the so called motion control shoes or stability shoes.</p>
						<p>They will prevent excessive pronation and eversion of foot and ankle and stabilize them.</p>
						<p>Over-the-counter or custom made orthotics and insoles can also be helpful with this condition.</p>
						<p>Ever since the kinesio taping became popular among professional athletes, many people started using them for their sports injuries.</p>
						<p>You can find various simple kinesio taping techniques for peroneal tendonitis.</p>
						<p>However, you can use the same technique that is used for ankle sprain.</p>
						<p>If you&rsquo;re not into kinesio taping, usual athletic tapes can also be helpful.</p>
						<p>The aim of taping is similar to PRICE therapy- it will provide protection and support and reduce pain and swelling.</p>

						<p>&nbsp;</p>
						<h2 id="exercises" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Exercises are the Important Part of Peroneal Tendonitis Prevention</h2>
						<p>As I&rsquo;ve previously mentioned, most cases of peroneal tendonitis are associated with weak lower leg muscles, improper muscle balance and foot and ankle instability.</p>
						<p>That is why working on your muscles and tendon strength, balance and stability is key to successful prevention of peroneal tendonitis.</p>
						<p>You&rsquo;ve probably asking yourself what type of exercises you should do and how to do them?</p>
						<p>Don&rsquo;t worry, I got you covered.</p>
						<p><strong>For the best results, you should include stretching, strengthening and balance exercises.</strong></p>
						<p>However, the combination of these exercises depend on you current stage and severity of this medical condition.</p>
						<p>Some of them can be done even while you&rsquo;re recovering, while others require for injury to fully settle in order to do them.</p>
						<p>Stretching and strengthening are good for both tendons and muscles.</p>
						<p>Muscle stretching will offload the tendon, while tendon stretching will improve strength of tendons and improve the healing.</p>
						<p>Balance exercises are also important.</p>
						<p>They are used for improving your foot and ankle stability by improving your proprioception.</p>
						<p>Proprioception is the sense of knowing where are your body parts in space.</p>
						<p>Poor proprioception leads to instability and poor balance, leading to higher risk for peroneal tendonitis and other running injuries.</p>
						<p>These exercises will regain your balance and stability by re-educating your body to quickly react to movements.</p>
						<p>When it comes to stretching exercises, the best way is to focus on stretching your calf muscles since <Link href="/tight-calves-after-running"><a className="text-decoration-none">tight calf muscles</a></Link> can increase stress on peroneal tendons during running.</p>
						<p><strong>The following exercise is one of the best for stretching your calves.</strong></p>
						<ul>
							<li className="mb-3">Stand an arm&rsquo;s length from the wall</li>
							<li className="mb-3">Place your right foot behind your left</li>
							<li className="mb-3">Bend your left leg forward and keep your knee straight</li>
							<li className="mb-3">Make sure your right heel is on the ground</li>
							<li className="mb-3">Hold the stretch for 15 to 30 seconds and release. Repeat three times</li>
							<li className="mb-3">Reverse the position of your legs, and repeat</li>
						</ul>
						<p>Peroneal muscles and tendons are important for eversion of the foot or turning the foot outwards.</p>
						<p>That is why your strengthening exercises should focus on foot eversion and inversion.</p>
						<ul>
							<li className="mb-3">Sit on a chair with your injured leg crossed over your other knee</li>
							<li className="mb-3">Hold the bottom of the foot with your hand</li>
							<li className="mb-3">Slowly tilt the sole of your foot toward the floor</li>
							<li className="mb-3">Hold this position for 5 to 10 seconds</li>
							<li className="mb-3">Pull your foot toward you</li>
							<li className="mb-3">Repeat 10 times</li>
						</ul>
						<p>When it comes to balancing exercises, I recommend starting with simple single leg balance exercise and then progress to more complex exercises.</p>
						<p>You can also use wobble balance board or a foam balance mat but it will be much harder, especially in the beginning.</p>
						<ul>
							<li className="mb-3">Balance on your injured leg for 30 seconds</li>
							<li className="mb-3">Stand up and then rock back on your heels so that your toes are off the ground for about five seconds</li>
							<li className="mb-3">Repeat 10 times and do two more sets of 10. Do this first with your eyes open and then with closed eyes</li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="conclusion" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Conclusion</h2>
						<p>Even though peroneal tendonitis is not that common running injury, it is a serious condition that requires proper management.</p>
						<p>Getting back to running and usual activities too soon will not only aggravate injury but can also lead to rupture of the peroneal tendon.</p>
						<p>In these serious cases, surgical treatment is the only option.</p>
						<p>Thankfully, with early diagnosis and proper treatment and exercises you can successfully manage this medical condition and continue running.</p>
						<p>It might seem to you that finding and eliminating all the factors that contributed to this condition is hard but in the end it will be worth it.</p>
						<p>I hope that with this text you&rsquo;ve learned more about peroneal tendonitis in runners, its causes and ways to prevent it and found out that it is possible to run painless, as long as you eliminate causes and change some habits.</p>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
