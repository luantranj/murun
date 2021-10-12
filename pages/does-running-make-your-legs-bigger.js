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
	const postId = 16;
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
						<p>Have you taken up running in order to lose weight and look thinner but worry that it can have an opposite effect on your legs?</p>
						<p>It is quite a common suspicion among people who are beginning to run, and unfortunately, it can be true, although not necessarily.</p>
						<p>So, does running make your legs bigger?</p>
						<p>The answer is both yes and no!</p>
						<p>Namely, the outcome will primarily depend on the type of running you do, how intensely you do it, and what you eat during the process.</p>
						<p>Therefore, if you want to avoid your legs becoming bigger, read on and find out what brings that about and how to avoid it.</p>
						{ /* kimjiwon */ }
						<ul>
							<li><Link href="#how-do-muscles-bulk-up"><a className="text-decoration-none">How Do Muscles Bulk Up? The Muscle Building Process Defined</a></Link></li>
							<li><Link href="#type-of-running"><a className="text-decoration-none">Type of Running</a></Link></li>
							<li><Link href="#genetics"><a className="text-decoration-none">Genetics</a></Link></li>
							<li><Link href="#the-intensity-of-training"><a className="text-decoration-none">The Intensity of Training</a></Link></li>
							<li><Link href="#time-and-distance"><a className="text-decoration-none">The Time You Spend Running and the Distance You Cross</a></Link></li>
							<li><Link href="#diet"><a className="text-decoration-none">The Diet and the Effect of Running on Your Appetite</a></Link></li>
							<li><Link href="#conclusion"><a className="text-decoration-none">Conclusion</a></Link></li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="how-do-muscles-bulk-up" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How Do Muscles Bulk Up? The Muscle Building Process Defined</h2>
						<p>When you start training, the muscle that is under strain starts to tear on a cell level.</p>
						<p>These micro tears in muscle cells then use the <Link href="https://ghr.nlm.nih.gov/primer/howgeneswork/protein"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">proteins</a></Link> from the food you eat and rebuild themselves during your resting period making your muscle not only stronger but bigger as well.</p>
						<p>Any exercise can cause these muscle tears, but they are more prominent when you start a new type of training or come back to train after a long pause.</p>
						<p>As far as running is concerned, there are some forms of running that contribute to muscle building process and should be avoided when you wish to avoid bulking up your thighs, but you should also pay attention to your diet as the food you eat greatly contributes to the problem as well.</p>
						<p>As you can see the question we are trying to answer here is not an easy one.</p>
						<p>There are numerous factors that will influence the final outcome.</p>
						<p>Besides the already mentioned ones, the genetics plays an important role too, and so does the time you spend running as well as the distance you cross.</p>
						<p>I will, therefore, try to cover all the potential pitfalls that can cause your legs to become bigger when running.</p>
		
						<p>&nbsp;</p>
						<h2 id="type-of-running" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Type of Running</h2>
						<p>You have probably noticed that marathon and ultramarathon competitors tend to be rather skinny, while sprinters look a bit bulky and quite muscular.</p>
						<p>This can give you a hint about what type of running you should you need to choose when trying to avoid becoming bigger.</p>

						<h3 className="mt-5">Long-Distance Running</h3>
						<p>The reason why <Link href="/track-workout-for-distance-runners"><a className="text-decoration-none">long-distance runners</a></Link> appear lean has two sides to it.</p>
						<p>First of all, being lighter and carrying less mass around the thighs provides a competitor with a better chance to win. Bulking up is therefore not an option.</p>
						<p>Secondly, long-distance running itself has a negative effect on the muscle gaining process.</p>
						<p>The culprit is the <Link href="https://www.hormone.org/hormones-and-health/hormones/cortisol"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">stress hormone cortisol</a></Link> that tends to spiral up during prolonged aerobic exercise, this hormone actually prevents muscle gain, which together with the intense calorie burning, brings about the slender look!</p>
						<p>Running long miles burns more calories but also defines your thighs, calves and glutes.</p>
						<p>If you run for one single hour at a 6 mph pace, you will burn almost 800 calories.</p>
						<p>Losing calories leads to losing the extra weight and your legs are sure to become slimmer as well.</p>

						<h3 className="mt-5">Sprints</h3>
						<p>Most of the sprinters have very muscular, well-defined thighs.</p>
						<p>They have to be able to literally explode when competing and they need properly developed fast twitch muscles for that.</p>
						<p>In order to bulk up, they add some extra load such as a weighted vest or run up a hill.</p>
						<p>In this way, they increase the tension in their quads, hamstrings, glutes, and calves and stimulate them to become bigger.</p>
						<p>They also rely on other types of exercises that stimulate muscle growth such as Olympic lifts or plyometrics.</p>

						<p>&nbsp;</p>
						<h2 id="genetics" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Genetics</h2>
						<p>Your genetic makeup will also influence both shape and size of your legs.</p>
						<p>You can therefore be predetermined to gain muscles more quickly than other people.</p>
						<p>If you run, you will just contribute to it and perhaps even become too bulky.</p>
						<p>In essence, people with stocky build are not likely to magically change into a long-leg marathon runner no matter how hard they try.</p>
						<p>If risky genetics is your problem too, you might want to consider taking up an entirely different activity instead of running.</p>
						<p>For example, swimming is a great cardio training that is not as leg intensive as running.</p>
						<p>The size and shape of your legs is largely determined by your genetic makeup.</p>
						<p>Some people add muscle more readily than others, and running can contribute to this.</p>

						<p>&nbsp;</p>
						<h2 id="the-intensity-of-training" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>The Intensity of Training</h2>
						<p>The intensity of running will influence the outcome your training sessions have on your body.</p>
						<p>It is actually a question whether you are activate fast twitch muscles or the slow twitch ones.</p>
						<p>If you choose the distance running, do not start with a large mileage but rather build it up slowly.</p>
						<p>For example, <Link href="/how-to-start-running-for-beginners"><a className="text-decoration-none">start by running two miles and add a mile every week</a></Link>.</p>
						<p>In this way you will be more likely to slim down your legs.</p>
						<p>Sprint workouts are more intense and should be avoided if you do not want to bulk up your legs.</p>
						<p>If you do not mind bigger legs, but want to strengthen them, you can add a workout to your training as well.</p>
						<p>Four sprints in a session will be enough to start(up to 100 m), and as you grow stronger you can add more.</p>
						<p>Do not start forcefully but rather keep your first sessions moderate and make sure you rest enough between sprints.</p>

						<p>&nbsp;</p>
						<h2 id="time-and-distance" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>The Time You Spend Running and the Distance You Cross</h2>
						<p>The length of time spent running is another variable worth considering.</p>
						<p>If you immediately start running for a long time (more than two hours) and cross more than eight miles at once, you are likely to tear the muscle tissue, make it swell and appear bigger.</p>
						<p>Therefore, overtraining will most probably make your muscles grow rapidly and make your legs look bulky.</p>
						<p>Increasing the distance can cause a progressive overload of your muscles and their growth, especially if you run at the fast pace and engage the fast twitch muscles.</p>
						<p>This does not mean that you have to keep running the same distance all your life as that can be counterproductive as well.</p>
						<p>Your body will become fitter and require more exercise to burn the same amount of calories and keep burning the fat.</p>
						<p>The time is of essence as well, as your body starts burning fat only after it has depleted the glycogen stores which takes about half an hour.</p>
						<p>So, as you become fitter you will normally require less time to cross the same distance and that means that you will spend less time in the aerobic fat burning zone and hinder your fat loss rather than enhance it.</p>
						<p>The conclusion is that you should not push yourself too hard but rather try to keep your running sessions optimal and stay in the aerobic state for as long as possible.</p>
						<p>Running too fast will result in existing the aerobic state too fast as well and adding mileage will lead to the progressive overload and muscle growth.</p>

						<p>&nbsp;</p>
						<h2 id="diet" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>The Diet and the Effect of Running on Your Appetite</h2>
						<p>Running will make you hungry, that is as sure as the sun shines!</p>
						<p>However, you should avoid a common mistake of fueling up on <Link href="https://www.healthline.com/nutrition/good-carbs-bad-carbs"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">carbs</a></Link> before or after your training.</p>
						<p>You might think that you need extra energy to complete the intense running session, but that is not entirely true, especially if you are trying to lose weight.</p>
						<p>The thing is that you will burden your body with the carbs and your body will first need to burn them before it can actually start burning the fat.</p>
						<p>If you avoid taking carbs prior to running, your body will use the stored fat as a fuel and you will lose the extra weight faster.</p>
						<p>This means slimmer legs as well!</p>
						<p>Carbohydrates are bad for people trying to lose weight for one more reason- they increase the appetite and create a sort of addiction.</p>
						<p>The more you eat them the more you crave them as your <Link href="http://studenthealth.emory.edu/hs/health_topics/what_is_insulin_resistance.pdf"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">insulin levels rise</a></Link>.</p>
						<p>If you eat more calories than you actually spend you exceed the total daily calorie energy expenditure and gain weight rather than lose it- and we all know that thighs are one of the most critical zone of woman's body.</p>
						<p>If you want to make your legs bigger by gaining muscles, you do need to take some extra calories in but make sure that they come from protein rich food as that will speed up the muscle growth process.</p>

						<p>&nbsp;</p>
						<h2 id="conclusion" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Conclusion</h2>
						<p><Link href="/running-3-times-a-week"><a className="text-decoration-none">Running is a great way to improve your cardiovascular health</a></Link> but also lose the extra pounds you might be struggling with.</p>
						<p>Unfortunately, not all of us will react the same to running.</p>
						<p>So, does running make your legs bigger?</p>
						<p>As you could see by now, there are many factors that will influence the final outcome- the type of running we choose, our genetic predisposition to build muscles, how and what we eat and how intensely we train.</p>
						<p>In short it is better to run long distance than be a sprinter, and keep your trainings optimal.</p>
						<p>You will have to restrain from certain food as well and keep the calorie intake low.</p>
						<p>It is not easy to understand all of this information at once, it is even harder to follow up on everything you have just read.</p>
						<p>So, take your time, adjust your running to these guidelines one step at the time and soon enough those inches from your legs are going to start melting.</p>
						<p>Let me know how it went!</p>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
