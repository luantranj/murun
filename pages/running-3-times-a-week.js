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
	const postId = 19;
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
						<p>Running is the modern man&rsquo;s go-to exercise when looking for improved health, weight loss, and overall wellbeing.</p>
						<p>It requires minimal equipment, can be done pretty much anywhere and doesn&rsquo;t have to take longer than 30 minutes. 
							The evidence is pretty clear &ndash; running yields many&nbsp;
							<Link href="https://www.runnersworld.com/start-running/6-ways-running-improves-your-health/slide/1">
								<a className="text-decoration-none" target="_blank" rel="noreferrer">benefits</a>
							</Link>&nbsp;for the human body.
						</p>
						<p>Now, as more and more people choose to run, numerous studies, opinions, and philosophies start popping up, 
							and sometimes they contradict each other, resulting in confusion for the ordinary person.
						</p>
						<p>For example, how often or how long should you run, are two arguments that are often debated and rarely seem to find some common ground.</p>
						<p>So today, I&rsquo;m going to neglect all the &lsquo;internet fuss&rsquo; and focus on an old recipe &ndash; running three times a week 
							and what you need to know to get the most out of it.
						</p>

						<ul>
							<li><Link href="#who-should-run-three-times-a-week"><a className="text-decoration-none">Who Should Run Three Times A Week?</a></Link></li>
							<li><Link href="#how-to-get-the-most-benefits"><a className="text-decoration-none">How To Get The Most Benefits?</a></Link></li>
							<li><Link href="#before-you-start-running"><a className="text-decoration-none">Before You Start Running</a></Link></li>
							<li><Link href="#conclusion"><a className="text-decoration-none">Conclusion</a></Link></li>
						</ul>

						<p>Enjoy!</p>

						<p>&nbsp;</p>
						<h2 id="who-should-run-three-times-a-week" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Who Should Run Three Times A Week?</h2>
						<p>Before we start getting into the benefits, maybe I should try to define who this regimen is for:</p>
						<br />
						<p>First, three days a week is not exactly high volume, especially not by professional athlete standards which means that this program is more suitable for recreational runners.</p>
						<p>Folks who are just getting into running or those who do it to stay healthy or get slim should find this amount just right, as they would not stress their joints too often and will have plenty of time to recover.</p>
						<br />
						<p>Second, people who do other forms of exercise (weight training, martial arts, etc.) and want to run for cardiovascular conditioning will probably do well with this frequency.</p>
						<p>However, if you do very strenuous workouts, running three times a week on top of that might be too much, so please listen to your body.</p>
						<br />
						<p>Third, individuals who are recovering from an injury, are&nbsp;
							<Link href="/injuries">
								<a className="text-decoration-none">prone to injuries, or suffer from a deformity</a>
							</Link>
							&nbsp;should not try to do more volume than this as it would most likely be counter-productive.
						</p>
						<p>For example, I have&nbsp;
							<Link href="/flat-feet-pronation"><a className="text-decoration-none">flat feet</a></Link>, 
							and this running regimen works for me, but I have to wear special insoles and limit my running time.
						</p>
						<br />
						<p>Last, in case you are preparing for a race, you could benefit from this program.</p>
						<p>Even those who want to run a marathon can also use this regimen but they should not attempt to run more than 10-15 kilometers per workout, and certainly not a full marathon.</p>


						<p>&nbsp;</p>
						<h2 id="how-to-get-the-most-benefits" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How To Get the Most Benefits?</h2>
						<p>There are several points that are good to know in order to truly benefit from running three times a week. 
							I&rsquo;m going to break them up into sections for your convenience, so take a look at the list below.
						</p>

						<h3 className="mt-5"></h3>
						<h3 className="mt-5">Focus on mobility</h3>
						<p>One of the essential elements to keep your body functioning happily and injury-free is doing mobility work. 
							Yet, this is often neglected or overlooked simply because people are either too lazy or uninformed about it.
						</p>
						<p>So why should you mobilize?</p>
						<p>Modern lifestyle involves a lot of sitting which is quite bad for us as it stiffens up our joints and limits their natural range of motion.</p>
						<p>If the joints can&rsquo;t move properly, this means that the body compensates by putting additional strain on or tendons or starts tearing at the joint socket.</p>
						<p>Also, frequent exercise (running) stiffens our muscles too which makes the problem even worse.</p>
						<p>The antidote to this are mobility exercises, especially those&nbsp;
							<Link href="https://www.livestrong.com/article/13730637-mobility-exercises-for-runners/">
								<a className="text-decoration-none" target="_blank" rel="noreferrer">aimed at runners</a>
							</Link>.</p>
						<p>If you can, do them before you run as they will loosen you up and improve the quality of your movements.</p>
						<p>If you don&rsquo;t have enough time, do them on your days off. There is no limit, so if you want you can do them every single day.</p>
						<p>Mobilizing is not the same as stretching, and this is very important to know.</p>
						<p>As a matter of fact, if you stretch before or after running, maybe you should stop doing it for a while and focus on mobility instead.</p>
		
						<h3 className="mt-5">Learn the right running technique</h3>
						<div className="youtube-video-container my-4">
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
						<p>Running is a skill, and it takes some practice to perfect it.</p>
						<p>Knowing this is important because running relatively frequently with improper technique will eventually take a toll on your body.</p>
						<p>So even if you only go on&nbsp;
							<Link href="/does-couch-to-5k-work/"><a className="text-decoration-none">short runs like 5K&rsquo;s</a></Link>, 
							it would be best to learn the right way to do it if you want to get the most out of it.
						</p>
						<p>Learning the&nbsp;<Link href="https://www.runnersworld.com/run-faster/proper-running-form"><a className="text-decoration-none" target="_blank" rel="noreferrer">correct form</a></Link>
							&nbsp;is connected to having sufficient mobility in your joints (my previous point), so make sure to take care of that too.
						</p>
						<p>Besides this, things that you&rsquo;ll have to practice and pay attention to are your posture, your stride, and strike.</p>
						<p>There are various drills and tricks that can help you improve this and you can learn about some of them&nbsp;
							<Link href="https://strengthrunning.com/2015/09/running-drills-to-improve-speed-form-efficiency/">
								<a className="text-decoration-none" target="_blank" rel="noreferrer">here</a>
							</Link>.
						</p>

						<h3 className="mt-5">Define your running goals</h3>
						<p>In order to know how long you should run you first need to know why you&rsquo;ve started running in the first place.</p>
						<p>There are many different reasons why people take up running, each of them having a distinct goal, and not all goals are met in the same way.</p>
						<p>For example, recreational runners who want to stay healthy, lose weight, and feel better should probably not push themselves too hard. 
							This means running 5-10 kilometers per workout will be more than enough to remain fit.
						</p>
						<p>Of course, a challenge from time to time is fine, but there won&rsquo;t be any real need for it frequently as you want to save up your energy for other daily tasks.</p>
						<p>Those who are training for a race should take a different approach.</p>
						<p>Preparing for long races such as marathons by running three times a week is possible and actually preferable&nbsp;
							<Link href="/how-to-start-running-for-beginners"><a className="text-decoration-none">if you are a beginner</a></Link>. 
							But, you&rsquo;ll have to follow a&nbsp;
							<Link href="http://www.therunnerbeans.com/2016/01/3dayaweekmarathontrainingplan.html"><a className="text-decoration-none" target="_blank" rel="noreferrer">program</a></Link>
							&nbsp;and be smart about it.
						</p>

						<h3 className="mt-5">Keep your pace up</h3>
						<p>People who are interested in building their aerobic strength should try to run at a slightly challenging pace.</p>
						<p>This method is also known as a steady run and can be described as &lsquo;comfortably hard,&rsquo; which means that you should be able to keep it up for an hour or so,
							but it isn&rsquo;t easy.
						</p>
						<p>The point of running this way is to develop your aerobic threshold.</p>
						<p>This translates to running at the fastest pace you can while remaining completely aerobic (your muscles have enough oxygen to supply them with energy) throughout the run.</p>
						<p>If you train in this manner for a long time, it means that your &lsquo;normal&rsquo; or steady pace will get faster and faster.</p>
						<p>You know that you are running at this tempo when you can&rsquo;t speak out more than three or four short sentences at a time. 
							This is called a &lsquo;talk test&rsquo; and is a reliable indicator of how much effort you&rsquo;re putting in.
						</p>

						<h3 className="mt-5">Consider your workout schedule</h3>
						<p>If you do other types of exercise besides running then plan your schedule carefully.</p>
						<p>What do I mean by this? Well, if you, let&rsquo;s say, lift weights then you might not want to be&nbsp;
							<Link href="/running-after-leg-day"><a className="text-decoration-none">running after leg day</a></Link>, 
							as you won&rsquo;t be giving your muscles enough time to recover.&nbsp;
						</p>
						<p>Try to have at least a rest day or two between heavy squats and jogging so that you reap the most benefits from both.</p>
						<p>This rule applies to any other activity that takes a lot out of your legs, not only leg day in the gym.</p>

						<h3 className="mt-5">Prioritize sleep and nutrition</h3>
						<p>It cannot be overemphasized how important sleep is for our recovery and health in general. 
							The same can be said about nutrition, so these are two points that you need to take seriously.
						</p>
						<p>The tissues that we tear during our physical activity get repaired when we sleep.</p>
						<p>Besides this,&nbsp;<Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3632337/"><a className="text-decoration-none" target="_blank" rel="noreferrer">research</a></Link>
							&nbsp;has shown that sleep can help you boost your weight loss, keep your hormones in check, and make you better in any skill that you&rsquo;re trying to master.&nbsp;
						</p>
						<p>In case of sleep, both quality and quantity count so make sure to get both.</p>
						<p>Go to bed and get up around the same time every day, and make sure that your bedroom is pitch dark.</p>
						<p>A&nbsp;
							<Link href="https://www.curejoy.com/content/best-foods-for-runners/"><a className="text-decoration-none" target="_blank" rel="noreferrer">good diet</a></Link>&nbsp;
								will assist you a great deal in staying fit and healthy.&nbsp;
						</p>
						<p>You probably know all the things that you should eat and the foods that you should avoid, but I&rsquo;ll write it here just in case.</p>
						<p>Get your protein from lean meats and fish, fats from nuts, seeds and eggs, and carbs from fresh fruits and whole grain. Avoid processed food and sugar.</p>
						<p>It doesn&rsquo;t have to get much more complicated than that!</p>


						<p>&nbsp;</p>
						<h2 id="before-you-start-running" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Before You Start Running</h2>
						<h3 className="mt-5">Check your medical condition</h3>
						<p>Before committing to running three times a week, you definitely want to go to your doctor and get a physical examination.</p>
						<p>There is a&nbsp;
							<Link href="https://www.active.com/running/articles/7-health-tests-every-runner-should-take">
								<a className="text-decoration-none" target="_blank" rel="noreferrer">series of tests</a>
							</Link>&nbsp;
							that people go through to make sure that they are able to run freely without having to worry about their health.
						</p>
						<p>Also, if you have a condition like a&nbsp;<Link href="/best-running-shoes-for-high-arches"><a className="text-decoration-none">high arch</a></Link>, 
							flat feet or a&nbsp;<Link href="/dropped-metatarsal"><a className="text-decoration-none">dropped metatarsal&nbsp;</a></Link>
							talk to a doctor who can recommend the right orthopedics for &lsquo;running around&rsquo; these problems.
						</p>

						<h3 className="mt-5">Acquire the right running equipment</h3>
						<p>When it comes to running, the only equipment that you need is good shoes and clothes.</p>
						<p>It is important to consider several factors when buying running shoes, for example: heel height, flexibility, instep, length, and width. 
							All of the aforementioned contribute to the comfort level of the shoe, and it needs to be high.
						</p>
						<p>Aside from shoes, proper clothes are also a pretty important factor, especially if you run all year round.</p>
						<p>You&rsquo;ll need shirts and shorts/pants made of breathable material for the hot days since you&rsquo;ll be sweating a lot.</p>
						<p>Also, training in autumn and winter will require a running jacket or a vest, and in case your ears hurt when you run in the cold, make sure to wear some headgear.</p>
						<p>Gadgets such as cell phone apps, watches, and similar products are definitely a useful asset to have, but they are not necessary.</p>
						<p>If it doesn&rsquo;t bother you too much, it can be a good idea to keep track of your running times so that you can see how much you have improved over a specified period.</p>

						<h3 className="mt-5">Be patient</h3>
						<p>Newbie runners might fall into the &ldquo;I want it all, and I want it now&rdquo; trap, meaning that they want to see some results immediately.</p>
						<p>I advise you to take it slowly and be patient as the results (weight loss, improved health, etc.) will eventually come.</p>
						<p>All you need to do is be responsible for your body and stay consistent with your training, as there is no magic pill to speed things up.</p>
						<p>Instead of anticipating some future moment try to learn to enjoy the journey because when you fall in love with the process, everything else will fall into place.</p>
						<p>This saying might be a clich&eacute;, but my experience tells me that it is true, and I hope that you will feel the same too.</p>

						<p>&nbsp;</p>
						<h2 id="conclusion" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Conclusion</h2>
						<p>Now, I would like to write a few last words. If you&rsquo;ve decided to take up running and want to do it three times a week, my best tip for you would be to take it seriously.</p>
						<p>Treat it as a project, not as something that you are just dabbling in for no apparent reason.</p>
						<p>This new addition to your life might require some lifestyle changes, but I&rsquo;m more than confident that they will all be positive.</p>
						<p>Running can bring you more enjoyment and benefits than you could ever have imagined, and while it may be hard in the beginning, you will start to appreciate it along the way.</p>
						<p>The expression &lsquo;hard work pays off&rsquo; applies to all areas of our existence including the one I wrote about today.</p>
						<p>So, until next time, happy running and all the best!</p>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
