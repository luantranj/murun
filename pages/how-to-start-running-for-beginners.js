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
						<p>Running is a great way to raise your fitness level, and accomplish multiple goals that will improve your health and overall wellbeing.</p>
						<p>While running may be overwhelming for beginners, it gets easier once you get the complete idea of the running routine and everything that goes with it.</p>
						<p>I had troubles starting myself, especially because I&apos;m flat footed, and I learned everything from scratch. Now, I&apos;m going to transfer that knowledge to you.</p>
						<ul>
							<li><Link href="#the-benefits-of-running"><a className="text-decoration-none">The Benefits of Running</a></Link></li>
							<li><Link href="#how-to-train"><a className="text-decoration-none">How to Train</a></Link></li>
							<li><Link href="#choose-your-training-plan"><a className="text-decoration-none">Choose Your Training Plan</a></Link></li>
							<li><Link href="#types-of-races-recommended-for-beginners"><a className="text-decoration-none">Types of Races Recommended for the Beginners</a></Link></li>
							<li><Link href="#correct-running-form"><a className="text-decoration-none">Correct Running Form</a></Link></li>
							<li><Link href="#how-to-breathe"><a className="text-decoration-none">How to Breathe</a></Link></li>
							<li><Link href="#choosing-the-right-gear"><a className="text-decoration-none">Choosing the Right Gear</a></Link></li>
							<li><Link href="#warming-up-and-cooling-down"><a className="text-decoration-none">Warming Up and Cooling Down</a></Link></li>
							<li><Link href="#nutrition"><a className="text-decoration-none">Nutrition</a></Link></li>
							<li><Link href="#hydration"><a className="text-decoration-none">Hydration</a></Link></li>
							<li><Link href="#injury-prevention"><a className="text-decoration-none">Injury Prevention</a></Link></li>
							<li><Link href="#common-mistakes"><a className="text-decoration-none">Common Mistakes</a></Link></li>
							<li><Link href="#pro-tips"><a className="text-decoration-none">Pro Tips</a></Link></li>
							<li><Link href="#frequently-asked-questions"><a className="text-decoration-none">Frequently Asked Questions</a></Link></li>
							<li><Link href="#conclusion"><a className="text-decoration-none">Conclusion</a></Link></li>
						</ul>
						<p>&nbsp;</p>
						<h2 id="the-benefits-of-running" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>The Benefits of Running</h2>
						<div className="d-flex justify-content-center mb-5 shadow rounded">
							<Image
								src="https://res.cloudinary.com/muru/image/upload/v1628208660/how-to-start-running/running-benefits_uzf4ut.png" 
								width="563" 
								height="555"
								alt="Benefits of Running" 
							/>
						</div>
						<p><Link href="https://www.betterhealth.vic.gov.au/health/healthyliving/running-and-jogging-health-benefits"><a className="text-decoration-none" target="_blank" rel="noreferrer">Running can improve your health significantly</a></Link> if you make it your regular routine.
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
						<h2 id="how-to-train" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How to Train</h2>
						<p>The best way to stay dedicated to your cause is to sign up for a race. This way you will have a regular running schedule, and you will maintain your focus.</p>
						<p>As a beginner,&nbsp;<Link href="https://empoweryourrun.com/running-5-miles-a-day/"><a className="text-decoration-none">I signed up for a race</a></Link>, and I can tell you that is very beneficial for the start.</p>
						<p>Later, once you become more experienced, you will be able to develop a routine that you can follow alone.</p>
						<p>You can run any race, just clear your schedule and stick to it.</p>
						<p>Start with the shortest distance for a start. Find the race near you by using some of the race map websites, like&nbsp;<Link href="http://runningintheusa.com/race/overview"><a className="text-decoration-none" target="_blank" rel="noreferrer">Running USA</a></Link>.</p>
						<p>Maintaining a proper form is very important when you start running.</p>
						<p>A lot of people are used to land on their heels while other lead with the toes.</p>
						<p>None of these forms are bad, and it&apos;s always the best to keep your natural way of running, you will just need good shoes that have a lot of support.</p>
						<p>I would advise you to start with the run-walk method for a start. This is a great way to increase your endurance and improve your running time.</p>
						<p>You can pick whatever pace that fits you. I would recommend going for a run for 10-30 seconds, then walk for 1-2 minutes and repeat the rotation for as long as you can.</p>
						<p>Try running 3 times a week for a start.</p>
						<p>This way of training reduces the risk of injury for beginners, and it gives the muscles the time to recover and adjust. If you feel that this is too easy for you, nothing stops you from going on a full run.</p>


						<p>&nbsp;</p>
						<h2 id="choose-your-training-plan" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Choose Your Training Plan</h2>
						<p>
							<Link href="http://www.coolrunning.com/engine/2/2_4/"><a className="text-decoration-none" target="_blank" rel="noreferrer">The internet is filled with various running fitness plans</a></Link>; I tried a lot of them, and I recommend that you start simple.
						</p>
						<p>Try this for a start:</p>
						<ul>
							<li><Link href="/running-3-times-a-week"><a className="text-decoration-none">Run three days a week</a></Link></li>
							<li>Keep your sessions around 20 or 30 minutes long</li>
							<li>Run for an hour over the weekend</li>
							<li>Keep the conventional pace while you run</li>
							<li>Try the walk-run method</li>
							<li>Rest on the off days</li>
						</ul>
		
						<p>&nbsp;</p>
						<h2 id="types-of-races-recommended-for-beginners" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Types of Races Recommended for Beginners</h2>
						<p>I would advise all new runners to <Link href="/does-couch-to-5k-work"><a className="text-decoration-none">start with a 5k</a></Link></p>
						<p>5k is a race 3.1 miles long that is fairly suitable for beginners.</p>
						<p>You can start with a 1-mile long race and increase it by half a mile every week until you reach the 5k. 5k should be your destination on the 7th week. Try to <Link href="/21-minute-5k/"><a className="text-decoration-none">run a 21 minute 5k</a></Link>.</p>
						<p>You can always use the walk-run method until you get the endurance required to complete the entire training by running.</p>
						<p>After you get comfortable with 5k, you can advance to the 10k race which is 6.2 miles long.</p>
						<p><Link href="/10k-training-plan-12-weeks"><a className="text-decoration-none">10k race training</a></Link> lasts for 10 weeks, with the race itself happens in the 10th week. 10k is a classic distance, and it attracts a lot more people than 5k.</p>
						<p>Sometimes they are organized with the aim for competition and offering the prizes for the top competitors.</p>
						<p>Along with the 10k, the next most popular race is the half-marathon. It is 13.1 miles long, and it can be a great way for the beginners to get the feeling of a big race, but only completing the half of it.</p>
						<p>Once you conquer the finish line of a half-marathon, you will get the encouragement to try the full marathon out.</p>
						<p>Training time for the half-marathon lasts for 17 weeks.</p>
						<p>Marathon is the first running event for many beginners.</p>
						<p>Once they overcome the basic running training, they give the 26.2 miles long race a shot.</p>
						<p>Marathons are big events, and they require 6 months of training to get ready.</p>


						<p>&nbsp;</p>
						<h2 id="correct-running-form" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Correct Running Form</h2>
						<p>As I said before, it&apos;s best that you keep your natural form, but you can tune it up a bit to make it better, and there are some tips that are&nbsp;recommended to make it as best as you can.</p>
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
						<h3>Focus</h3>
						<p>Focus on the ground around 20 feet ahead of your body. 10-20 feet is the best distance to keep your focus on, to maintain the proper form and notice the change in terrain.</p>

						<h3 className="mt-5">Most runners are divided into two groups: toe runners and heel strikers.</h3>
						<p>Toe runners have their calves fatigued quickly, and heel strikers waste their energy and are usually the slowest types.</p>
						<p>Although you can perform well with your natural form, it is recommended that you land midfoot for the best performance and injury prevention.</p>

						<h3 className="mt-5">Keep your feet pointed forward.</h3>
						<p>Point your toes in the direction you want to go. That way you will prevent the injuries from happening.</p>
						<p>If this way is not your natural way of running, try to practice it, and over time you will master it.</p>

						<h3 className="mt-5">Keep your hands at your waist, right where they can brush your hip.</h3>
						<p>The arms should be bent at a 90-degree angle. A lot of beginners keep their arms all the way up to their chest, and that results in faster fatigue and increase of the tension in the shoulders and the neck.</p>

						<h3 className="mt-5">While you run, your hands should be relaxed as much as possible.</h3>
						<p>Don&apos;t tighten your fists, because you can increase the tightness in your arms, neck, and shoulders.</p>

						<h3 className="mt-5">Keep your posture straight; keep your head up, your back straight and the shoulders leveled.</h3>
						<p>Don&apos;t lean forward; this is a common mistake among beginners who get tired. Poke your chest out, and check your posture from time to time.</p>

						<h3 className="mt-5">Relax your shoulders and keep them behind your chest.</h3>
						<p>Tight and rounded shoulders can restrict your breathing, if you relax your shoulders, you will breathe a lot easier.</p>

						<h3 className="mt-5">Your arms should be rotated from the shoulders.</h3>
						<p>Swing them back and forth from the shoulder and not from your elbow.</p>

						<h3 className="mt-5">Don&apos;t bounce, and stay low to the ground.</h3>
						<p>Bouncing wastes your energy, and the higher you go from the ground, the bigger the shock your body will have to absorb.</p>


						<p>&nbsp;</p>
						<h2 id="how-to-breathe" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How to Breathe</h2>
						<p>The biggest difference a&nbsp;runner can make is in its breathing technique. Proper breathing increases the comfort and performance while running.&nbsp;</p>
						<div className="youtube-video-container my-5">
							<iframe 
								className="shadow rounded"
								width="560" 
								height="315" 
								src="https://www.youtube.com/embed/TUkM1OhoGXs?controls=0"
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen>
							</iframe>
						</div>
						<p>The most popular opinion for breathing while running is that you should breathe in through the nose and breathe out through the mouth. Although this technique works well for yoga and martial arts, it&apos;s not the best solution for running.</p>
						<p>Breathe both through your nose and mouth. That way you will deliver the amount of oxygen your muscles require. While you&apos;re exhaling, do it through your mouth and do it fully, so you can remove all the carbon dioxide and breathe in deeply.</p>
						<p>You should breathe from your belly and not from your chest. Chest breathing is to shallow; you should focus more on diaphragm breathing.</p>
						<p>Incorporate the deep belly breathing with the proper posture, and you will have better performance.</p>
						<p>Often runners match their breathing with their foot strikes. Usually, they breathe in for three-foot strikes and breathe out for two.</p>
						<p>When you start, you should set your pace based on how easy you can breathe.</p>


						<p>&nbsp;</p>
						<h2 id="choosing-the-right-gear" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Choosing the Right Gear</h2>
						<p>The quality of your gear has a direct impact on your performance and injury prevention.</p>
						<p>Two most important things when it comes to gear are the shoes and socks.</p> 
						<p>You should get the lightweight shoes that have good shock absorbing abilities.&nbsp;
						They should also be comfortable, so you can avoid the possible foot injuries.</p>
						<p>You may not think so, but <Link href="/best-socks-for-plantar-fasciitis"><a className="text-decoration-none">the socks are very important</a></Link> as well. You need a pair of socks that are breathable and sweat-wicking. Opt out for cotton socks that won&apos;t cause your foot to slip inside of the shoe. There are even advanced versions that have rubber parts on the bottom to improve your grip, and completely prevent the slipping.</p>


						<p>&nbsp;</p>
						<h2 id="warming-up-and-cooling-down" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Warming Up and Cooling Down</h2>
						<p>Start all of your running sessions with a warm-up, and finish them with a cooldown.</p>
						<p>Warm-up helps your muscles receive more blood and oxygen throughout the workout. 
						It will also raise their temperature and flexibility, and it will prepare your heart for the intense pumping.</p>
						<p>Cooldown keeps the blood flowing after you&apos;ve finished running. If you stop suddenly, you might feel dizzy and even nauseated. 
						Gradually slowing down will give your body the necessary time to adjust.</p>

						<h3 className="mt-5">How to warm-up</h3>
						<p>Don&apos;t stretch when you warm-up, ever. Do a light exercise for around 10 minutes to warm up and loosen up the muscles. 
						My advice to you is that you start by walking then transfer to light running and then you can start your training.</p>

						<h3 className="mt-5">How to cool down</h3>
						<p>While you&apos;re approaching the end of your workout, gradually reduce the tempo of running and breathing. 
						Go from slower run pace to walking; the cooldown should last as the warm-up, for 5-10 minutes.</p>
						<p>After the cooldown, you can perform the stretches. Stretch your calves, hamstrings, and quads. 
						Hold still and stretch each muscle for around 30 seconds. Stretch slowly, and don&apos;t stretch through pain.</p>

						<p>&nbsp;</p>
						<h2 id="nutrition" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Nutrition</h2>
						<p>The nutrition and food plan depends on what your goals with running are.</p>
						<p>If you want to reduce the weight, you should focus on the caloric deficit and strict-protein based diet. 
						If your goal is only cardio and endurance, your diet should stay almost the same.</p>
						<p>But your pre-workout meal should contain carbs and the after workout meal should be rich in protein. 
						Your pre-workout meal should be at least 3 hours before the workout. No meal should be just before the workout.</p>
						<p>After every meal, your body slows down and directs all the blood into your stomach, 
						which makes the workout almost impossible because your muscles can&apos;t get enough blood to work properly. 
						It&apos;s better not to eat at all before the workout than to eat anything.</p>
						<p>The meal plan you&apos;re going to follow depends on your goals. If your goal is to lose weight, 
						which is for the most people that want to start running, then you should focus on high protein and low-fat diet.</p>
						<p>If you just want to be more active and maintain your weight, then keep your meals the same size as before.</p>
						<p>You may feel hungrier than before when you start running, and you will want to eat more, 
						and most people who don&apos;t control their meals, end up gaining weight, even if that wasn&apos;t their cause.</p>

						<p>&nbsp;</p>
						<h2 id="hydration" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Hydration</h2>
						<p>You shouldn&apos;t be heading for a run without your water bottle.</p>
						<p>A regular size bottle will be enough. If you find out that that&apos;s not enough for you, you can always get a bigger one, or plan your route around the water fountains.</p>
						<p>If you are wondering how much and when you should drink the water, just listen to your body and drink when you&apos;re thirsty.</p>
						<p>If your running session lasts less than an hour, water will be everything you need. But, if you want to extend it over the one hour mark, it would be better than you get a sports drink to fuel you up.</p>
						<p>After running for one hour, your body starts to lose the electrolytes which you can replenish with a sports drink.</p>
						<p>I would advise you not to drink too much water. Overhydration is a bigger problem than dehydration. Drink only when you need it, not just you have the bottle close by.</p>


						<p>&nbsp;</p>
						<h2 id="injury-prevention" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Injury Prevention</h2>
						<p><Link href="/injuries"><a className="text-decoration-none">Every beginner should know how to prevent all possible injuries</a></Link>&nbsp;that may come with the running routine.</p>
						<p>Warm-up before the workout is very important, just as the stretching after. Just remember never to stretch before you run.</p>
						<p>Both dynamic and static stretches are fine.</p>
						<p>If you&apos;re performing static stretches, be sure to hold the position for at least 30 seconds.</p>
						<p>Dynamic stretches are fine, but they are not as effective as static ones. I would advise you to use the static stretches.</p>
						<p>Think about your posture while you run, proper posture can prevent a lot of injuries and discomfort.</p>
						<p>Side stitches for example, which are pretty common. If you experience side stitches while you run, slow down and take deep breaths.</p>
						<p>Stretch your body and allow your lungs to fill with air.</p>
						<p>Wait for the pain to stop and resume your previous pace. You can also experience leg cramps, which are the result of fatigue.</p>
						<p>The best way to prevent the cramps is not to start faster than your standard running speed. If you do experience them, the treatment is very simple; you only need to stretch the cramped muscle.</p>
						<p>Other common injuries happen to the feet, like&nbsp;<Link href="/dropped-metatarsal"><a className="text-decoration-none">dropped metatarsal</a></Link>.
						&nbsp;Constant banging your feet and heels on the concrete can cause blisters, bruises, calluses and even the loss of toenails. 
						Try to run on soft surfaces, and&nbsp;<Link href="/running-equipment"><a className="text-decoration-none">get the proper running gear</a></Link>.</p>

						<p>&nbsp;</p>
						<h2 id="common-mistakes" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Common Mistakes</h2>

						<h3>Wrong shoes</h3>
						<p>Old or improper running shoes may result in various problems.</p>
						<p>The first will be the discomfort, and you may even put yourself to the risk of injuries.</p>
						<p>The solution is simple, don&apos;t use the shoes that are worn out, and use the ones made especially for running.</p>

						<h3 className="mt-5">Start too big</h3>
						<p>Most of the new runners want to take a bite that is too big for them.</p>
						<p>Don&apos;t start too fast and don&apos;t go on long runs that you can&apos;t handle.</p>
						<p>Work your way up slowly, over time, and take on the bigger runs once your body is ready to take the challenge.</p>
						<p>Pay attention to what your body is telling you if you experience the pain, and it worsens when you continue to run, take some days off, then return to your standard running routine.</p>
						<h3 className="mt-5">Overstriding</h3>
						<p>Another common mistake that can cause some injuries is overstriding.</p>
						<p>People tend to think that longer stride can improve their speed and the efficiency, but that&apos;s far from the truth. Don&apos;t lunge too far and land mid-foot.</p>

						<h3 className="mt-5">Bad posture</h3>
						<p>Bad posture is one of the most common mistakes new runners make.</p>
						<p>With bad posture, you get tired faster, and you create the tension in the neck and shoulders.</p>
						<p>I have talked already how you can maintain the proper posture, so try your best to practice it.</p>

						<h3 className="mt-5">Overtraining and dehydration</h3>
						<p>These mistakes can also be a big oversight for beginners. Make sure you doni&apos;t run too much for your level, and you stay hydrated enough.</p>
		

						<p>&nbsp;</p>
						<h2 id="pro-tips" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Pro Tips</h2>
						<ul>
							<li>Consult with your doctor before you start training. Getting the medical clearing is a smart decision, especially if you haven&apos;t been active before.</li>
							&nbsp;
							<li>Take enough time to recover between running sessions, so you give your body a chance to recuperate.</li>
							&nbsp;
							<li>Do strength training. Strength training is beneficial for your overall performance, especially to prevent the injuries.</li>
							&nbsp;
							<li>Work on flexibility. Being flexible is beneficial for injury prevention. There are a lot of ways you can improve your flexibility; yoga is one of the best ways to do it.</li>
							&nbsp;
							<li>If you injure yourself, be very patient and take time to recover. Even if the injury requires a few weeks to recover, don&apos;t rush yourself. By doing that you can only worsen the situation.</li>
						</ul>


						<p>&nbsp;</p>
						<h2 id="frequently-asked-questions" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Frequently Asked Questions</h2>
						<p><strong>Q</strong>:&nbsp;Is&nbsp;running after leg day&nbsp;advised?<br /><strong>A</strong>:&nbsp;Yes. Run after a hard workout can improve the blood flow and aid with recovery.</p>
						<p><strong>Q</strong>:&nbsp;What clothes should I wear?<br /><strong>A</strong>:&nbsp;The most important part is your shoes. The clothes should be hugging your body and light.</p>
						<p><strong>Q</strong>:&nbsp;Should I work had to improve my speed and distance?<br /><strong>A</strong>:&nbsp;Yes. But gradually, take your time and improve slowly.</p>
						<p><strong>Q</strong>:&nbsp;Should I run every day?<br /><strong>A</strong>:&nbsp;No. You need at least one or two days to recover.</p>


						<p>&nbsp;</p>
						<h2 id="conclusion" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Conclusion</h2>
						<p>Running is a great habit, and now that you know how to start running, it will be even better.</p>
						<p>You have improved health and better physique to look forward to.</p>
						<p>Take everything you learned today and apply it in your workout, and I can promise you that you will feel great.</p>
						<p>Make sure you do your warm-ups before the run and stretches after, get the proper gear and enjoy the run!</p>

					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
