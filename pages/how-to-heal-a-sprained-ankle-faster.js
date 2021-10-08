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
	const postId = 3;
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
						<p>You&apos;re outside, following your typical exercise routine, when suddenly &ndash; you twist your ankle.</p>
						<p>And just as you thought you were lucky enough to avoid an injury, a sharp pain hits you - you just sprained your ankle.</p>
						<p>So, what now?</p>
						<p>These things take weeks &ndash; and even months &ndash; to heal, and of course, you don&apos;t want to wait that long.</p>
						<p>Well, it seems like knowing how to heal a sprained ankle faster might come in handy.</p>
						<p>After all, getting you back on your feet and onto the running track is our shared goal.</p>
						<p>I think it&apos;s time for you to check out my six tried-and-true steps to a quick recovery!</p>
						<ul>
							<li className="mb-3"><Link href="#how-long-does-it-typically-take-to-heal-a-sprained-ankle"><a className="text-decoration-none">How Long Does It Typically Take To Heal A Sprained Ankle?</a></Link></li>
							<li className="mb-1"><Link href="#things-to-do-&-things-to-avoid"><a className="text-decoration-none">How To Heal A Sprained Ankle Faster: Things To Do & Things To Avoid </a></Link></li>
							<ul>
								<li className="mb-1"><Link href="#tip-1-r-i-c-e-it-first"><a className="text-decoration-none">Tip #1: R.I.C.E. It First</a></Link></li>
								<li className="mb-1"><Link href="#tip-2-avoid-h-a-r-m-at-all-costs"><a className="text-decoration-none">Tip #2: Avoid H.A.R.M. At All Costs</a></Link></li>
								<li className="mb-1"><Link href="#tip-3-dont-baby-your-injured-ankle"><a className="text-decoration-none">Tip #3: Don’t Baby Your Injured Ankle</a></Link></li>
								<li className="mb-1"><Link href="#tip-4-fully-restore-your-ankles-strength-and-flexibility"><a className="text-decoration-none">Tip #4: Fully Restore Your Ankle’s Strength And Flexibility </a></Link></li>
								<li className="mb-1"><Link href="#tip-5-what-you-eat-during-your-recovery-matters-too"><a className="text-decoration-none">Tip #5: What You Eat During Your Recovery Matters, Too </a></Link></li>
								<li><Link href="#tip-6-give-essential-oils-a-try"><a className="text-decoration-none">Tip #6: Give Essential Oils A Try </a></Link></li>
							</ul>
							<li className="mt-3"><Link href="#final-thoughts"><a className="text-decoration-none">Final Thoughts</a></Link></li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="how-long-does-it-typically-take-to-heal-a-sprained-ankle" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How Long Does It Typically Take To Heal A Sprained Ankle?</h2>
						<p>Before you get the chance to learn how to heal a sprained ankle faster, I thought it would be a good idea to take a moment to explain how long the recovery typically lasts.</p>
						<p>I mean, how can you be sure these tips cut your recovery short if you don&apos;t know how long it would last in the first place, right?</p>
						<p>There&apos;s no definitive answer to this question, mostly because it vastly depends on the severity of the sprain &ndash; there are <Link href="https://drayerpt.com/blog/ankle-sprains-what-is-the-recovery-time/"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">three grades of ankle sprains</a></Link>, categorized by the extent of damage done to the ligaments &ndash; as well as your overall health at the time of the injury.</p>
						<div className="alert alert-danger" role="alert">
							<p>That said, mild to moderate sprains could take anywhere from 2 to 8 weeks to resolve completely, while grade III ankle sprains typically take a lot longer &ndash; in that case, you can expect at least three long months (if not more) of recovery.</p>
						</div>
						<p>It&apos;s important to remember that the <Link href="https://www.sports-health.com/sports-injuries/ankle-and-foot-injuries/ankle-sprain-and-strain-signs-and-symptoms"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">symptoms</a></Link> won&apos;t go away overnight, no matter what you do &ndash; healing a sprained ankle is the same as any other type of injury, which means it takes time.</p>
						<p className="text-danger">But, with a little luck and some help from my tips on how to heal a sprained ankle faster, you should be able to get back on track in a matter of weeks, not months.</p>

						<p>&nbsp;</p>
						<h2 id="things-to-do-&-things-to-avoid" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How To Heal A Sprained Ankle Faster: Things To Do & Things To Avoid </h2>
						<p>Given the fact that a sprained ankle might take up to 12 weeks to heal (depending on the severity of the injury, of course), you&rsquo;re probably left wondering if there&rsquo;s anything you can do to speed up the process.</p>
						<p>To answer that, I give you my top 6 tips on how to heal a sprained ankle faster!</p>
						<p>Keep in mind that none of these tips are miracle solutions for your problem, and you&rsquo;ll still have to do a fair amount of waiting before your ankle is adequately healed.</p>
						<p>They should help you get back on your feet (both of them, that is) a bit sooner than expected, though.</p>

						<h3 id="tip-1-r-i-c-e-it-first" className="mt-5">Tip #1: R.I.C.E. It First</h3>
						<p>As soon as the injury has occurred, you should implement the R.I.C.E. method, the mainstay of many athletes around the globe, including runners like yourself.</p>
						<p>The acronym stands for rest, ice, compression, and elevation &ndash; four simple self-care techniques that will help you deal with the initial swelling and pain that often accompany an ankle injury.</p>
						<p>If you want to learn more about how to heal a sprained ankle faster using the R.I.C.E. method, I&apos;ll explain the vital steps below:</p>

						<h4 className="mt-3">Rest</h4>
						<p>So, you sprained your ankle.</p>
						<p>What now?</p>
						<p>The answer couldn&rsquo;t be more simple - rest.</p>
						<p>Limiting the amount of moving around and not putting weight on the injured ankle is vital during the first 24 to 48 hours.</p>
						<p>Even after the initial period has passed, don&rsquo;t go by the &ldquo;no pain, no gain&rdquo; mentality &ndash; now&rsquo;s the time to listen to your body and give it time to heal itself.</p>
						<p>That doesn&rsquo;t mean you should baby your ankle, and give up on exercise altogether &ndash; but more on that later!</p>

						<h4 className="mt-3">Ice</h4>
						<p>Applying an ice pack is one of those tried-and-true things you can do during the first 48 to 72 hours after the injury to keep the pain and swelling to a minimum.</p>
						<p>You&rsquo;d be surprised at how much a bag of frozen corn or peas can do for a sprained ankle.</p>
						<p>However, you have to take certain precautions to avoid further damage.</p>
						<p>Instead of applying ice for prolonged periods of time, aim for around 15 to 20 minutes at a time, several times a day.</p>
						<p>Also, remember to never put it directly on the skin &ndash; wrapping the ice in a piece of cloth or a towel will prevent <Link href="https://www.burn-injury-resource-center.com/2012/01/ice-packs-can-cause-serious-burns-frostbite.html"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">skin burns</a></Link>.</p>

						<h4 className="mt-3">Compression</h4>
						<p>The third letter of the R.I.C.E. acronym stands for compression &ndash; applying pressure to the injured ankle and the surrounding area using an elastic bandage.</p>
						<p>Of course, <Link href="https://www.healthlinkbc.ca/health-topics/zm2802"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">how you do this is equally as important</a></Link> &ndash; while the bandage should feel snug, it should by no means feel uncomfortably tight.</p>
						<p>Remember, the goal here is to provide compression and reduce swelling, not cut off blood flow.</p>

						<h4 className="mt-3">Elevation</h4>
						<p>Finally, elevate the injured leg whenever possible.</p>
						<p>Propping your leg up using pillows is a simple, yet effective way to combat fluid retention in the injured tissue, so that the area around the sprained ankle doesn&rsquo;t swell too much.</p>
						<p>Just elevate your ankle and let gravity do the rest.</p>

						<h3 id="tip-2-avoid-h-a-r-m-at-all-costs" className="mt-5">Tip #2: Avoid H.A.R.M. At All Costs</h3>
						<p>Here&rsquo;s another acronym for you (I promise this is the last one for today): H.A.R.M.</p>
						<p>It doesn&rsquo;t sound like something that will aid your sprained ankle recovery, does it?</p>
						<p>The acronym stands for the following four terms &ndash; and you should avoid them like the plaque:</p>

						<h4 className="mt-3">Heat</h4>
						<p>I understand that, after an injury, having a hot, relaxing bath sounds like the best thing in the entire world, but trust me, it&rsquo;s not.</p>
						<p>My advice to you is to think of all things hot &ndash; showers, baths, water bottles, heat packs, and saunas &ndash; and cross them off your list for the next few days.</p>
						<p>Why?</p>
						<p>Because, even though it does feel soothing, heat dilates blood vessels, which only increases swelling.</p>

						<h4 className="mt-3">Alcohol</h4>
						<p>You might think that, since you&rsquo;re already spending the day lounging around the house, a glass of wine isn&rsquo;t such a bad idea. Well, you&rsquo;re wrong.</p>
						<p>What alcohol does is dilate the blood vessels, which can only result in more swelling and delayed healing.</p>
						<p>But since we&rsquo;re here today to help you learn how to heal a sprained ankle faster, consider laying off of alcohol during the initial healing stages.</p>

						<h4 className="mt-3">Running</h4>
						<p>While you might be eager to return to your exercise routine as soon as possible, as stated in the previous section, resting is a vital part of recovering from a sprained ankle.</p>
						<p>So, no running for the time being.</p>
						<p>Not only will running put an unnecessary strain on your injured ankle, but it will increase blood flow into the region, as well, which can result in blood accumulating in the area.</p>

						<h4 className="mt-3">Massage</h4>
						<p>Massages are another thing you should avoid after spraining your ankle &ndash; at least during the first few days following the injury.</p>
						<p>I feel like I&rsquo;m repeating myself, but stimulating blood flow to the area is something you want to avoid &ndash; and direct massages do precisely that.</p>
						<p>Plus, it could further aggravate the already damaged tissue.</p>

						<h3 id="tip-3-dont-baby-your-injured-ankle" className="mt-5">Tip #3: Don&rsquo;t Baby Your Injured Ankle</h3>
						<p>I know it seems like I&apos;m going against everything I just said but read first, and judge later.</p>
						<p>I promise it will all make sense in a moment!</p>
						<p>As I said, you should keep the weight off of the injured ankle for the first couple of days &ndash; or up to a week, depending on the severity of the sprain.</p>
						<p>After that initial recovery period is over, and the swelling has subsided, you can move on to the second phase of your recovery.</p>
						<p>Getting back into your exercise routine too soon will only cause further complications, but at the same time, waiting too long &ndash; babying your sprain, so to speak &ndash; will only prolong the loss of muscle activity.</p>
						<p>Finding the middle ground is crucial in a situation like this.</p>
						<p>Of course, that doesn&rsquo;t mean you should push yourself &ndash; by all means, give your body some time to heal.</p>
						<p>But as soon as the pain and swelling subside, you should start working on getting back to your ankle&rsquo;s normal range of movement.</p>
						<p>Another primary goal of this phase is to gradually up the amount of weight you put on the injured leg until it can carry your entire body&apos;s weight again.</p>
						<p>Several great exercises will help this phase go as smoothly as possible, so check them out:</p>

						<h4 className="mt-3"><Link href="https://healthyliving.azcentral.com/isometric-ankle-muscle-strengthening-5816.html"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer"><strong>Isometric ankle exercises</strong></a></Link></h4>
						<p>Such as pushing your foot in a particular direction against resistance (a wall or a table leg, for example), without moving your ankle.</p>

						<h4 className="mt-3">Range-of-motion exercises</h4>
						<p>These exercises are a good choice, too, especially after the first few days have passed.</p>
						<p>Remember to stick to small, gentle movements, though &ndash; up and down, side to side, and circular motions. </p>
						<p>That brings me to my next tip on how to heal a sprained ankle faster:</p>

						<h3 id="tip-4-fully-restore-your-ankles-strength-and-flexibility" className="mt-5">Tip #4: Fully Restore Your Ankle&rsquo;s Strength And Flexibility </h3>
						<p>And while the previous advice on how to heal a sprained ankle faster kind of touched upon the importance of rehab exercise, this one is going to help you fine-tune your ankle after an injury.</p>
						<p>It&apos;s time to focus on actually getting you back out there on the running tracks.</p>
						<p>After the sprain, there has to be an adjustment period, and these exercises should help you get back into your old routine in no time:</p>

						<h4 className="mt-3">Walking</h4>
						<p>You know what they say: You have to walk before you can run.</p>
						<p>So, start moving &ndash; every day, as much as you can, without pushing yourself too hard, of course.</p>
						<p>With time, you&apos;ll notice that bearing weight isn&apos;t a problem anymore.</p>
						<p>Take that as the first sign that complete recovery is just around the corner.</p>

						<h4 className="mt-3">Strengthening Exercises</h4>
						<p>The next step towards the recovery is making your joint and the muscles around it strong again.</p>
						<p>Not only are these strengthening exercises important in healing a sprained ankle faster, but they can <Link href="/best-ankle-braces"><a className="text-decoration-none">prevent any future injuries</a></Link>, as well.</p>

						<h4 className="mt-3">Balance Exercises</h4>
						<p>Another thing you should focus on is regaining balance and control that might be compromised as a result of the injury.</p>
						<p>Also known as proprioception exercises (don&rsquo;t worry, it only sounds complicated), these workouts are aimed at improving your overall balance, as well as strengthening your ankle.</p>
						<p>Even something as simple as single-leg standing can have a massive impact on your recovery.</p>
						<p>The best advice I can give you on how to heal a sprained ankle faster is to keep going &ndash; perform these exercises, challenge yourself a bit every day, and I&rsquo;m sure you&rsquo;ll notice some significant improvements in a matter of weeks.</p>

						<h3 id="tip-5-what-you-eat-during-your-recovery-matters-too" className="mt-5">Tip #5: What You Eat During Your Recovery Matters, Too</h3>
						<p>The idea behind this claim is very straightforward:</p>
						<p>Your body will need specific nutrients to keep your joints, muscles, and ligaments healthy and firm.</p>
						<p>So, my fifth tip will focus on specific food groups that are known to reduce swelling, as well as support and speed up healing of the damaged tissues.</p>
						<p>Here&rsquo;s a list of some of the best anti-inflammatory foods that will aid your recovery:</p>

						<h4 className="mt-3">Proteins, Including Collagen</h4>
						<p>First and foremost, <Link href="https://draxe.com/protein-foods/"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">you&apos;re going to need protein</a></Link> &ndash; lots and lots of it &ndash; so chicken and fish should be at the top of your menu lists.</p>
						<p>Speaking of proteins, pay attention to collagen, too &ndash; it&apos;s the key factor to having a healthy connective tissue.</p>
						<p>Bone broth should help you out with that.</p>
						<p>If you&apos;re vegan, don&apos;t worry, I&apos;ve got you covered.</p>
						<p>Lentils and black beans are excellent sources of plant-based proteins &ndash; but I&apos;m guessing you already knew that.</p>

						<h4 className="mt-3">Leafy Greens</h4>
						<p>No diet-related list can go without leafy veggies!</p>
						<p>Why?</p>
						<p>Because kale, broccoli, lettuce, and other green leafy vegetables are high in antioxidants, minerals, and vitamins, such as vitamin K.</p>
						<p>Your body will be thankful, trust me.</p>
						<p>Some green veggies (spinach, for example) are an excellent source of zinc, as well, which is necessary for rebuilding damaged tissues.</p>

						<h4 className="mt-3">Vitamin C Rich Foods</h4>
						<p>I know you&apos;re wondering what does vitamin C has to do with tips on how to heal a sprained ankle faster.</p>
						<p>All I can say is &ndash; you&apos;d be surprised!</p>
						<p>If you&apos;re interested in learning more about the benefits of a vitamin C rich diet, you can do so <Link href="https://www.healthline.com/nutrition/vitamin-c-benefits"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">here</a></Link>, but for now, it&apos;s important to remember that <Link href="https://nutritionreview.org/2013/04/collagen-connection/"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">vitamin C plays a prominent role in the formation of collagen</a></Link>.</p>
						<p>As such, it should be a part of your &quot;recovery diet.&quot;</p>
						<p>Look at it this way: now you have an excellent excuse to eat as many strawberries as your heart desires.</p>

						<h3 id="tip-6-give-essential-oils-a-try" className="mt-5">Tip #6: Give Essential Oils A Try</h3>
						<p>While I wouldn&apos;t recommend massages during the first few days (as explained in the second tip), <Link href="/essential-oils-for-plantar-fasciitis"><a className="text-decoration-none">gentle rubs with a few selected essential oils</a></Link> several times a day will do wonders for your recovery.</p>
						<p>The following oils are excellent in aiding sprained ankle treatment, as they reduce inflammation and bruising in the affected area:</p>

						<h4 className="mt-3">Peppermint Oil</h4>
						<p>Can you imagine how good the cooling effect of peppermint oil would feel on your sprained ankle?</p>
						<p>Talk about instant pain relief in a bottle!</p>

						<h4 className="mt-3">Frankincense Oil</h4>
						<p>You could try combining this one with peppermint oil for better results, but even if you decide to use it by itself, <Link href="https://draxe.com/what-is-frankincense/"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">frankincense essential oil will still have some marvelous healing properties</a></Link>.</p>

						<h4 className="mt-3">Lavender Oil</h4>
						<p>Although you will mostly see it as a part of various beauty routines, lavender oil is also exceptional at decreasing swelling and inflammation.</p>
						<p>The best thing is, since it&apos;s so popular, you&apos;ll probably be able to find it in your local store.</p>

						<div className="alert alert-warning" role="alert">
							<p><strong>Bonus Tip:</strong></p>
							<p>Although it&rsquo;s not oil, I thought I should mention <Link href="https://healthyliving.azcentral.com/does-epsom-salt-help-a-sprained-ankle-12253935.html"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">Epsom salt</a></Link> here anyway.</p>
							<p>Magnesium sulfate can be an excellent ally in soothing sore muscles.</p>
						</div>

						<p>&nbsp;</p>
						<h2 id="final-thoughts" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Final Thoughts</h2>
						<p>The key term here is patience.</p>
						<p>There&rsquo;s no magic cure for a sprained ankle, and even though following these six tips on how to heal a sprained ankle faster might cut your recovery period a bit shorter, you&rsquo;re still going to have to do your fair share of waiting.</p>
						<p>Give your body time to heal.</p>
						<p>If you found the article helpful, <Link href="/contact"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">let me know</a></Link> and consider sharing it with your fellow runners in case they need a little help, too &ndash; sprained ankles are more common than one might think!</p>

					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
