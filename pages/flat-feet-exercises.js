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
	const postId = 32;
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
						<p>Flat feet are a relatively common condition that many individuals face worldwide.</p>
						<p>They have several different causes and are generally characterized by the feet having a very low or no arch at all.</p>
						<p>In many cases, <Link href="/flat-feet-pronation"><a className="text-decoration-none">people with flat feet</a></Link> live and exercise normally without ever experiencing any issues, but sometimes these folks feel pain or discomfort.</p>
						<p>This is the time to look for help and treatment options.</p>
						<p>Now, something that will probably benefit a large percentage of flat-footed individuals are flat feet exercises.</p>
						<p>They can be done in the comfort of one&apos;s own home and can serve as both as a prevention and a remedy, depending on your specific case.</p>
						<p>If you&apos;d like to find out more about this, then please read on.</p>
						{ /* kimjiwon */ }
						<ul>
							<li><Link href="#not-all-flat-feet-are-made-equal"><a className="text-decoration-none">Not All Flat Feet Are Made Equal</a></Link></li>
							<li><Link href="#top-7-flat-feet-exercises"><a className="text-decoration-none">Top 7 Flat Feet Exercises</a></Link></li>
							<li><Link href="#the-wet-foot-test"><a className="text-decoration-none">The Wet Foot Test</a></Link></li>
							<li><Link href="#other-factors"><a className="text-decoration-none">Other Factors That Could Help With Flat Feet</a></Link></li>
							<li><Link href="#final-word"><a className="text-decoration-none">The Final Word</a></Link></li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="not-all-flat-feet-are-made-equal" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Not All Flat Feet Are Made Equal</h2>
						<p>The most important thing to know about flat feet is that there are several causes to them.</p>
						<p>Let&apos;s take a look at what they are:</p>
						<ul>
							<li className="mb-3">Weak muscles causing the arches to collapse. The arches are usually there while a person is sitting, but they collapse under the weight when they stand up.</li>
							<li className="mb-3">Genetic factors, meaning that a person doesn&apos;t naturally develop arches</li>
							<li className="mb-3">Injuries of the foot or the ankle</li>
							<li className="mb-3">Arthritis</li>
							<li className="mb-3">Damage of the posterior tibial tendon</li>
							<li className="mb-3">Nervous system diseases</li>
						</ul>
						<p>Now, since these types have fundamentally different roots, they are also going to require different solutions, if there are any.</p>
						<p>For example, a person with anatomically (genetically) flat feet is not going to &quot;fix&quot; them by doing a couple of exercises every day, nor will it help individuals with nervous system diseases.</p>
						<p>This means that exercises are going to work for folks who have collapsed arches due to weak muscles, as well as some other cases where they could serve as prevention.</p>

						<p>&nbsp;</p>
						<h2 id="top-7-flat-feet-exercises" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Top 7 Flat Feet Exercises</h2>
						<p>The following exercises can be performed by anyone who has flat feet.</p>
						<p>They are simple and effective if the cause for this condition isn&apos;t genetic, neurological, or due to a severe injury.</p>
						<h3 className="mt-5">1. Heel Raises</h3>
						<p>This is probably the most straightforward and most well-known flat feet exercise.</p>
						<p>To do it, all you need is a floor and a wall.</p>
						<p>Stand close to a wall, facing it, and hold on to it for balance.</p>
						<p>Lift your heels up as high as you can so that you stand on your toes.</p>
						<p>Keep the heels up for around 5-10 seconds or so and then lower them down.</p>
						<p>Repeat this for 15 to 20 times.</p>
						<p>The resting time between reps should be around the same as the length of the rep.</p>
						<p>If you find the exercise too difficult, you can do a sitting variation; just to the same movements while sitting in a chair with your back straight.</p>
						<h3 className="mt-5">2. Heel Cord Stretch</h3>
						<div className="youtube-video-container my-5">
							<iframe 
								className="shadow rounded"
								width="560" 
								height="315" 
								src="https://www.youtube.com/embed/RMwz1lqQy_c?controls=0" 
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen>
							</iframe>
						</div>
						<p>This is a runner&apos;s favorite and something that almost anyone could benefit from.</p>
						<p>To do the stretch, stand facing a wall and place one or both hands on it for balance.</p>
						<p>Then, step slightly back with one leg (around one footstep&apos;s length) and keep both feet firmly on the ground.</p>
						<p>Next, start bending the knee of the front leg so that you feel a stretch in the back leg, but remember not to lift the heel of the back leg up.</p>
						<p>Bend the knee as far as the pain of the stretch isn&apos;t too great.</p>
						<p>Stay in this position for about 30 seconds and then extend the knee of the front leg to release the tension.</p>
						<p>Repeat 8 to 10 times for each leg.</p>
						<h3 className="mt-5">3. Tennis Ball Massage</h3>
						<p>One of the best ways to loosen up tight muscles in your feet is the tennis ball massage.</p>
						<p>This will help to release the tension from the muscles of your arch (or where the arch should be).</p>
						<p>All you need is a tennis ball and the floor.</p>
						<p>Stand on the ball with one foot and roll it back and forth across the muscles of the arch.</p>
						<p>Do this for a minute or so, and then roll it sideways across the above-mentioned area for the same amount of time.</p>
						<p>After you&apos;ve done this, stand on the tennis ball with the ball (the front part) of your feet and try to touch the ground with your heel several times.</p>
						<p>Repeat everything for the other foot, and you&apos;re done.</p>
						<p><strong>Tip:</strong> You should feel slight pain when massaging the feet, but it will eventually fade, and as it does, increase gradually increase the pressure. This is the best way to keep the exercise effective.</p>
						<h3 className="mt-5">4. Plantar Fascia Stretch</h3>
						<p>This stretch goes hand-in-hand with the tennis ball massage.</p>
						<p>The massage helps to loosen up the muscles after which you&apos;ll be able to stretch them more effectively.</p>
						<p>Here&apos;s how you do it.</p>
						<p>Stand close to a wall and put your toes on the wall while keeping the rest of the foot on the floor.</p>
						<p>Your other leg should be positioned back, with the foot firmly on the ground, as if you were standing in a slight lunge.</p>
						<p>As your toes are spread out and extended on the wall, flex the knee of the front leg and try to bring it towards the wall.</p>
						<p>You should be able to feel a stretch in the forefoot.</p>
						<p>Keep the knee bent for around 5 to 10 seconds and then slowly bring it back.</p>
						<p>Repeat this 15 do 20 times and then switch legs.</p>
						<h3 className="mt-5">5. Towel Curls</h3>
						<div className="youtube-video-container my-5">
							<iframe 
								className="shadow rounded"
								width="560" 
								height="315" 
								src="https://www.youtube.com/embed/2YRQlsM7v7E?controls=0" 
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen>
							</iframe>
						</div>
						<p>For the following exercise, you will need a towel.</p>
						<p>The exercise activates the small muscles which support the arch and is a crucial movement to help strengthen them.</p>
						<p>Place the towel on the floor, sit down (on the floor or a chair) and put one foot over the towel.</p>
						<p>Squeeze your toes as if you&apos;re trying to bring your heel and toes closer.</p>
						<p>Another way of looking at it is &quot;wrinkle up the towel.&quot;</p>
						<p>Make sure to keep your toes and heel in contact with the floor at all times.</p>
						<p>Repeat the movement for 15 to 20 reps, and then switch to your other foot.</p>
						<h3 className="mt-5">6. Toe Yoga/Gymnastics</h3>
						<p>You might not be aware just how big of an impact toe muscles have on the rest of your feet, and here&apos;s an exercise to strengthen them.</p>
						<p>Sit down on a chair and place your feet flat on the ground.</p>
						<p>You can do the exercise foot by foot, or both at the same time.</p>
						<p>Press the big toe into the floor, lift the other toes up as high as you can, and keep them there for around 5 seconds.</p>
						<p>Repeat this 10-15 times.</p>
						<p>Next, do the opposite - lift up the big toe, while pressing down the rest, and keep it up for the same amount of time.</p>
						<h3 className="mt-5">7. Calf Raises</h3>
						<div className="youtube-video-container my-5">
							<iframe 
								className="shadow rounded"
								width="560" 
								height="315" 
								src="https://www.youtube.com/embed/gwLzBJYoWlI?controls=0" 
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen>
							</iframe>
						</div>
						<p>Find a spot where you can stand with the front part of your feet and have the back of the feet hanging in the air; a staircase is a good option or a platform for step aerobics.</p>
						<p>Make sure to have good balance, so don&apos;t try to stand on just the tip of your toes but include a large portion of the foot.</p>
						<p>If it&apos;s still too challenging, use a chair or some other object to keep balance.</p>
						<p>Now, stand up on your toes and then slowly lower the heels down so that they get below the parallel of your toes.</p>
						<p>Next, raise the heel up again, and repeat the movement for 10 reps or so; feel free to do less if it&apos;s too hard.</p>
						<p>By doing this exercise, you will be activating the muscles of the arch and require them to do some &quot;heavy lifting,&quot; which will, in turn, make them stronger.</p>

						<p>&nbsp;</p>
						<h2 id="the-wet-foot-test" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>The Wet Foot Test</h2>
						<p>If you&apos;ve never heard of it before, the wet foot test is a simple indicator of how high or low one&apos;s arch is.</p>
						<p>Simply dip your feet into the water, step on a surface where you&apos;ll leave a clear footprint (like concrete) and see what the footprint looks like.</p>
						<p>If the entire midsole is visible, that means that your feet are flat, and if only the outer side of the midsole can be seen, the arch is normal.</p>
						<div className="youtube-video-container my-5">
							<iframe 
								className="shadow rounded"
								width="560" 
								height="315" 
								src="https://www.youtube.com/embed/RvhrguUSyms?controls=0" 
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen>
							</iframe>
						</div>
						<p>Take the wet foot test before you start exercising and take a photo of your footprint.</p>
						<p>Then after several weeks, repeat the test and check whether there are any improvements.</p>
						<p>You might be pleasantly surprised!</p>

						<p>&nbsp;</p>
						<h2 id="other-factors" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Other Factors That Could Help With Flat Feet</h2>
						<p>Exercises are obviously an essential factor in fixing of flat feet, but they aren&apos;t the end-all-be-all solution.</p>
						<p>There are several other factors that you could consider if you want to mitigate the effect that flat feet have on your life.</p>
						<p>First, there are plenty of orthotics that could help you deal with your condition.</p>
						<p>Go talk with a podiatrist, and see if they can recommend some orthotics for your specific case.</p>
						<p>Since seeing a professional isn&apos;t free or cheap, go there only if you feel pain or think that just doing the exercises isn&rsquo;t enough for you.</p>
						<p>Second, you could take a look at shoes specifically designed for flat feet, and this is especially important if you want to run.</p>
						<p>In order to find the best running shoes for flat feet (that will actually work for you) here&rsquo;s what you need to know:</p>

						<h3 className="mt-5">Midsole Contact</h3>
						<p>Find a shoe with a midsole which makes complete contact with one&apos;s feet.</p>
						<p>To be more precise, we&apos;re looking for shoes with a <Link href="http://hub.therunningworks.net/running-shoes-everything-you-need-to-know/"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">straight last</a></Link>, the latter referring to the mold that determines the shape of the sneaker.</p>
						<p>A straight last is an alternative to the hourglass figure that&apos;s common with most running shoes today, and it provides the runner with more stability.</p>

						<h3 className="mt-5">Arch Support</h3>
						<p>People with collapsed arches due to weak muscles in their feet should definitely look for a shoe with enhanced arch support.</p>
						<p>The height of the arches may vary between models, so try out a few different ones and see which one feels best on your feet.</p>

						<h3 className="mt-5">Hardened Foam for Stability</h3>
						<p>Besides a straight last, stability can also be achieved through the use of dual-density foam in the making of the shoe.</p>
						<p>This means that the medial side of the arch is supported by a thicker, harder version of foam so that the entire surface of the foot has a stable place to stand on.</p>

						<h3 className="mt-5">Extra Heel and Toe Support</h3>
						<p>Many flat-footed runners have probably noticed how much their shoes wear out around toe and heel areas.</p>
						<p>This is because the lack of arches causes them to put more pressure on the toes and heels, and it&apos;s precisely why additional support is needed in these parts of the foot.</p>

						<h3 className="mt-5">Lifespan</h3>
						<p>This is why you&apos;ll have to replace your shoes every 350 to 500 miles, depending on how much they&apos;ve broken down.</p>
						<p>If you keep running in the same pair beyond this mileage, you&apos;ll be putting yourself at risk of overpronation and injury.</p>

						<p>&nbsp;</p>
						<h2 id="final-word" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>The Final Word</h2>
						<p>As you can see, there&apos;s a lot that you can do to try and reverse your flat feet or prevent them from forming in the first place.</p>
						<p>Unfortunately, there are times when exercises can&apos;t help much but be sure to give them a try anyway because they do make a difference in the majority of cases.</p>
						<p>Also, don&apos;t forget to consider all the other factors such as shoes and orthotics, as these tools are mostly beneficial.</p>
						<p>All in all, I urge you to be consistent and methodical in your exercising, and good things will eventually come your way!</p>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
