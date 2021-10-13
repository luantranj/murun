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
	const postId = 23;
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
						<p>Have you ever considered running with ankle weights?</p>
						<p>If you are a runner yourself, this activity seems to be the next logical step you take once &ldquo;regular&rdquo; running becomes too dull for you, or you want a bigger challenge.</p>
						<p>It is a great idea actually, as it comes with various benefits I&rsquo;ll be talking about today.</p>
						<p>As someone who fell in love with running years ago, and someone who <Link href="/flat-feet-exercises"><a className="text-decoration-none">struggles with flat feet</a></Link> at the same time, I was intrigued by this activity.</p>
						<p>Can it be helpful for my condition?</p>
						<p>Would I benefit from it, or would it just cause more pain?</p>
						<p>After days of research, I learned a lot about running with ankle weights, and I am going to share the information I found with you, right here, right now.</p>
						<p>Let&rsquo;s dive in!</p>
						{ /* kimjiwon */ }
						<ul>
							<li><Link href="#what-are-the-ankle-weights"><a className="text-decoration-none">What Are the Ankle Weights?</a></Link></li>
							<li><Link href="#different-types-of-ankle-weights"><a className="text-decoration-none">Different Types of Ankle Weights</a></Link></li>
							<li><Link href="#benefits-of-running-with-ankle-weights"><a className="text-decoration-none">Benefits of Running with Ankle Weights</a></Link></li>
							<li><Link href="#conclusion"><a className="text-decoration-none">Conclusion</a></Link></li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="what-are-the-ankle-weights" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What Are the Ankle Weights?</h2>
						<p>Before I proceed to explain the enormous benefits of running with ankle weights, I think we should cover the basics.</p>
						<p>What are the ankle weights?</p>
						<p>How do they work?</p>
						<p>Are there different types that suit different needs of a runner who uses them?</p>
						<p>Well, it is quite simple really.</p>
						<p>Ankle weights are a piece of fitness equipment, designed as weighted clothing that you fix above your ankle, or around <Link href="/best-running-shoes-for-achilles-tendonitis"><a className="text-decoration-none">the Achilles' tendon</a></Link> and lower shin to be precise.</p>
						<p>The central role of these weights is to make your body muscles work harder by adding the weight to your ankle region.</p>
						<p>As you can see, I said &ldquo;body muscles&rdquo; and not just &ldquo;leg muscles&rdquo;.</p>
						<p>This is an important note to make because as you will see later on, ankle weights activate various muscles in your body.</p>
						<p>They do much more than simply strengthening your extremities.</p>

						<p>&nbsp;</p>
						<h2 id="different-types-of-ankle-weights" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Different Types of Ankle Weights</h2>
						<p>As a &ldquo;flat feet runner&rdquo; I have to pay a lot of attention to details regarding my daily exercise.</p>
						<p>I buy special shoes; I wisely choose the surface I run on and so on.</p>
						<p>When I decided to look into running with ankle weights and consider this as a part of my weekly running routine, I figured I&rsquo;ll have to adjust it as well as regular running.</p>
						<p>So, I was interested in different types of ankle weights.</p>
						<p>Are all the ankle weights same?</p>
						<p>Are there ones that would be more beneficial for my medical condition than the others?</p>
						<p>What I found out, is that there are two general types of ankle weights on the market:</p>
						<ul>
						<li className="mb-3">Fixed weight ankle weights &ndash; you can choose a size that suits your needs, available from &frac14; lbs. to 25 lbs., but if you want to change the weight you&rsquo;ll have to buy a whole new set</li>
						<li className="mb-3">Adjustable ankle weights &ndash; you can purchase one set and add weight bars as you like, overall, this is a more affordable option, as you will avoid buying multiple sizes</li>
						</ul>
						<p>As I said, which type you choose depends on your health, the strength of your leg and hip muscles, and the way you plan to use them.</p>
						<p>There is a big difference whether you intend to jog, run and walk exclusively, or you want to swim, do crunches, bicycle kicks, planks and various leg exercises as well.</p>
						<p>No matter which type you pick, fixed or adjustable, the rule of thumb is to start at a lower weight range.</p>
						<p>You cannot go from zero weight to all the weight over the night, no matter how much trust you put in your own legs.</p>
						<p>This can only lead to injury, and that&rsquo;s something we&rsquo;d like to avoid, right?</p>
						<p>If you plan to use ankle weights for different types of exercises, start with a few pounds, work your way up to five, eight and more.</p>
						<p>Keep your progress slow and steady.</p>
						<p>In this case, adjustable ankle weights would be the best option so you can interchange them for various exercises.</p>
						<p>However, let&rsquo;s get back to our main topic &ndash; running with ankle weights.</p>
						<p>For running, walking, jogging and using cardio machines, <Link href="https://www.darkironfitness.com/how-heavy-should-ankle-weights-be/"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">it is highly recommended that you stay under five pounds</a></Link>.</p>
						<p>In case you are <Link href="/best-running-shoes-for-high-arches"><a className="text-decoration-none">dealing with high arches</a></Link>, or any other condition that might in some way limit your ability to run, there may come times when you&rsquo;ll need to lower the weight you are running with.</p>
						<p>In this case, adjustable weights are also a better solution, but having a few sizes of fixed weights is also a valid option, as you&rsquo;ll never go over five pounds.</p>
						<p>Here&rsquo;s a useful video that will teach you how to run with ankle weights.</p>
						<div className="youtube-video-container my-5">
							<iframe 
								className="shadow rounded"
								width="560" 
								height="315" 
								src="https://www.youtube.com/embed/yMYJmH-YPS4?controls=0" 
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen>
							</iframe>
						</div>

						<p>&nbsp;</p>
						<h2 id="benefits-of-running-with-ankle-weights" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Benefits of Running with Ankle Weights</h2>
						<p>Now that you are familiar with ankle weights, what they are and which types you can choose I can tell you about the top benefits of using them for running.</p>
						<p>To be honest, some of these benefits were truly surprising for me at first, but when I read more about it and tried the activity myself, I realized they were true.</p>
						<p>Don&rsquo;t worry; I will detail out every single one of them for you.</p>
						<p>I don&rsquo;t want to keep you waiting any longer, so let&rsquo;s jump right into the top ten advantages of running with ankle weights!</p>
						<h3 className="mt-5">1. You will Burn More Calories</h3>
						<p>As you probably figured out, running with ankle weights can help your body burn significantly more calories.</p>
						<p>It&rsquo;s quite logical if you think.</p>
						<p>The ankle weights require you to apply more force while running, which means, at the same time you apply more energy, and therefore your body burns more calories.</p>
						<p>This sounded especially intriguing to me, as one of my top goals at a time was to lose a few pounds.</p>
						<p>Studies have shown that participants who wear ankle weights while running on a treadmill, burn considerably more calories than the participants who ran without wearing them.</p>
						<p>Researchers concluded that running with ankle weights can be a good solution for people who want to boost their weight loss and improve cardiovascular fitness.</p>
						<h3 className="mt-5">2. It will Boost Your Endurance</h3>
						<p>When you Google the benefits of using ankle weights, you will soon realize that there is an ongoing discussion among fitness experts on their ability to boost endurance.</p>
						<p>The added weight will add resistance to any exercise, not just in case of running with ankle weights.</p>
						<p>However, if you choose to jog while wearing ankle weights, you will exert extra energy, which will increase your respiration and heart rate.</p>
						<p>Such change in breathing and heart rhythm will do amazing things for you.</p>
						<p>Within few weeks of use, your ability to push yourself for more extended periods will increase.</p>
						<p>At the same time, this will be beneficial for your cardiovascular and pulmonary health, so what more could you ask for?</p>
						<h3 className="mt-5">3. It will Improve Your Balance</h3>
						<p>If you have high arches which may <Link href="https://www.anklefootmd.com/problems-associated-with-high-foot-arches/"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">cause you to lose your balance</a></Link> while walking or running, this is good news for you because running with ankle weights is linked to increased balance.</p>
						<p>Once you put the added weight to them, the small muscles in your ankle have to bring their &ldquo;A game&rdquo; to maintain the overall balance of your body.</p>
						<p>If you strengthen them by running with ankle weights, they will offer you better support and balance.</p>
						<p>However, if this is one of your primary goals, you should add the ankle weights once you&rsquo;ve already warmed-up your muscles.</p>
						<p>Stretch out or try some foam roller exercise first, and you will be good to go.</p>
						<h3 className="mt-5">4. It will Tone and Shape Your Thighs</h3>
						<p>Want to get rid of excess fat on your thighs and get your swimsuit body ready?</p>
						<p>Running with ankle weights can help you with that, too!</p>
						<p>It will give your thigh muscles excellent shape and tone.</p>
						<p>This happens because the added weight from ankle weights increases the resistance in the thighs region as you run or exercise.</p>
						<p>As you keep using your ankle weights and possibly increasing the pressure, your body will adapt and build up your thighs.</p>
						<h3 className="mt-5">5. It will Tone and Shape Your Legs</h3>
						<p>I bet you&rsquo;ve wondered:</p>
						<p><Link href="/does-running-make-your-legs-bigger"><a className="text-decoration-none">Does running make your legs bigger?</a></Link></p>
						<p>If you are opting for better tone and shape of your leg muscles, running will do you good.</p>
						<p>However, running with ankle weights will do miracles in a shorter time.</p>
						<p>You will gain in the range of motion and flexibility as well.</p>
						<p>Unfortunately, women are usually the ones who avoid adding resistance or weights to their exercise, as they want to prevent their muscles from becoming bulky.</p>
						<p>However, if you want to achieve desired results through running, you&rsquo;ll have to tire the leg muscles, and this can be done merely by adding ankle weights.</p>
						<p>It will help you exhaust the muscles more quickly.</p>
						<h3 className="mt-5">6. It will Benefit Your Abdominal Muscles</h3>
						<p>Back before I became a runner, I was, well, let&rsquo;s say a little chubby.</p>
						<p>I believed it was kind of cute at the time, but it affected my health tremendously, which was the main reason why I started running.</p>
						<p>My doctor said something inspiring: &ldquo;You cannot run from your health problems, you need to face them.</p>
						<p>But, you can face them through running!&rdquo;</p>
						<p>Even though I thought &ldquo;Why don&rsquo;t you try <Link href="/best-running-shoes-for-peroneal-tendonitis"><a className="text-decoration-none">running with peroneal tendonitis</a></Link>, Mr. Smarty Pants?&rdquo; at the moment; his words were forever stuck in my head.</p>
						<p>So, I came up with a weight loss routine.</p>
						<p>It was made of running, but it included some abdomen workouts too.</p>
						<p>Soon, I realized that if I include ankle weights, I can combine these two things and boost my results.</p>
						<p>You see, the added ankle weights target not just your legs and your breathing muscles, but the lower abdominal muscles too.</p>
						<p>If you want to use this benefit to the fullest, you should wear the ankle weights while running in a park, on a treadmill, doing your reverse abdominal lifts, knee-to-chest or bicycle exercises.</p>
						<p>In all of these cases, the weights will keep your abdominal muscles contracted and maintain your pelvic tilt.</p>
						<h3 className="mt-5">7. You will Build Stronger Breathing Muscles</h3>
						<p>This might sound a bit funny at first, but let me explain.</p>
						<p>It is entirely logical that running with weights will strengthen your legs, but breathing muscles?</p>
						<p>You wouldn&rsquo;t make such connection of top off your head.</p>
						<p>However, if you are an experienced runner, you already know that running can improve respiratory health.</p>
						<p>For example, if you are suffering from respiratory diseases, such as asthma, ankle weights can, in fact, help you overcome these medical conditions.</p>
						<p>But, here&rsquo;s the trick, if you want to achieve this, you will have to move your ankle weights to your chest instead of attaching them on your ankles as you usually would.</p>
						<p>Such added weight on your chest region will increase heart and respiratory rate, both of which play a crucial role in your breathing process.</p>
						<p>At the same time, they will strengthen your breathing muscles and make them significantly more efficient.</p>
						<p>Remember, if you decide to use the ankle weights to perform any breathing workout, I advise you to consult your health care professional first.</p>
						<p>Not all of us are the best candidates for weighted breathing, and in case you should avoid it, you need to be aware of it in order to prevent any possible injury.</p>
						<h3 className="mt-5">8. It will Improve Your Cardiovascular Health</h3>
						<p>This benefit is related to a few benefits I already described &ndash; better endurance, faster calorie burning, toned muscles and so on.</p>
						<p>As you already know from your elementary school biology class, your muscles need blood and oxygen to function correctly.</p>
						<p>So, when your muscles are working harder, like <Link href="https://www.fitday.com/fitness-articles/fitness/why-running-improves-heart-health.html"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">in case of running with ankle weights, your heart and lungs also double their work</a></Link> to provide them with necessary oxygen and blood.</p>
						<p>Such activity of both your heart and lungs, literally trains your cardiovascular system to become more efficient.</p>
						<p>Five-pound ankle weights are all you need.</p>
						<p>But what does this mean for your cardiovascular health?</p>
						<p>Well, having a strong heart means lowering the risk of developing a heart or arterial disease and getting a heart attack.</p>
						<p>At the same time, it keeps your blood pressure at a healthy level.</p>
						<h3 className="mt-5">9. Ankle Weights are Affordable and Versatile</h3>
						<p>Okay, I am here to talk about the benefits of running with ankle weights in a first place.</p>
						<p>But, truth to be told, ankle weights can be used for a much wider range of exercises, and they are just as beneficial in every one of them.</p>
						<p>When people decide to purchase fitness equipment to add to their home gym, they usually don&rsquo;t want to spend too much money, and they want an as versatile piece or device as possible.</p>
						<p>With ankle weights, both of these things are guaranteed.</p>
						<p>You&rsquo;ll have a chance to perform a variety of exercises with them or just one exercise in different positions.</p>
						<p>Walking, jogging, running, climbing, riding a bike, exercising while sitting &ndash; you have all of these options on your hands, and there is no need to spend hundreds of dollars.</p>
						<h3 className="mt-5">10. If You Dare, It Can Improve Your Water Workouts</h3>
						<p>Let&rsquo;s be fair, there will be days when it is rainy outside, or too hot, or you simply don&rsquo;t feel like running or hitting a gym to hop on a treadmill.</p>
						<p>No shame in that, we&rsquo;ve all been there.</p>
						<p>Skipping a day or two will do you no harm.</p>
						<p>However, I&rsquo;ve dealt with lazy periods, when I couldn&rsquo;t get myself to run for a whole week.</p>
						<p>However, I soon realized that swimming is a good substitute for these days.</p>
						<p>Ankle weights can come in handy for this, too.</p>
						<p>Swimming seems to be relaxing, and it activates many different muscle groups at the same time.</p>
						<p>All you have to do is attach your ankle weights as usual, and you will increase the weight resistance, which you&rsquo;ll have to overcome if you want to float on water or navigate forward.</p>
						<p>You&rsquo;ll be burning more calories in comparison to regular swimming because the added weight will strain your muscles.</p>
						<p>You can even use <Link href="https://woman.thenest.com/benefits-ankle-weights-glove-weights-used-swimming-10730.html"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">aquatic ankle weights</a></Link> that are designed specifically for this purpose.</p>

						<p>&nbsp;</p>
						<h2 id="conclusion" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Conclusion</h2>
						<p>We came to the end of our today&rsquo;s journey together.</p>
						<p>I hope you learned a lot about running with ankle weights and its benefits and that you&rsquo;ll decide to give this activity a chance.</p>
						<p>Don&rsquo;t worry, even the flat feet runners, like me, can safely run with ankle weights and also use some of its advantages to improve their condition.</p>
						<p>If you have any problem with feet, strengthening your leg muscles is always a good way to prevent further complications.</p>
						<p>If you have any further questions or an opinion you&rsquo;d like to share, feel free to <Link href="/contact"><a className="text-decoration-none">contact me</a></Link>, I am always glad to hear from fellow runners.</p>
						<p>Be safe and have fun while you run!</p>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
