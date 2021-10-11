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
	const postId = 9;
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
						<p>During my years as a runner I&rsquo;ve encountered (and solved) a small universe of physical problems and one inconvenience that stuck by me for a while were hot spots on foot.</p>
						<p>These were probably brought on by my flat feet and man were they a hassle, but luckily I&rsquo;ve managed to overcome them.</p>
						<p>In case you&rsquo;ve encountered this issue &ndash; don&rsquo;t worry, it is an easily treatable condition.</p>
						<p>If you read the information and follow some of the simple tips from today&rsquo;s article, I guarantee that your feet will get back on track in no time.</p>
						<p>Let&rsquo;s jump into it!</p>
						{ /* kimjiwon */ }
						<ul>
							<li><Link href="#what-are-hot-spots"><a className="text-decoration-none">What are Hot Spots?</a></Link></li>
							<li><Link href="#causes"><a className="text-decoration-none">Causes</a></Link></li>
							<li><Link href="#how-do-i-know-if-i-have-hot-spots"><a className="text-decoration-none">How do I Know if I Have Hot Spots?</a></Link></li>
							<li><Link href="#how-to-prevent-and-treat-hot-spots"><a className="text-decoration-none">How to Prevent and Treat Hot Spots?</a></Link></li>
							<li><Link href="#how-to-prevent-a-blister-from-forming"><a className="text-decoration-none">How to Prevent a Blister from Forming?</a></Link></li>
							<li><Link href="#the-final-word"><a className="text-decoration-none">The Final Word</a></Link></li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="what-are-hot-spots" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What are Hot Spots?</h2>
						<p>A hot spot can be described as a pre-<Link href="https://www.healthline.com/health/blisters-on-feet"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">blister</a></Link> state on your skin.</p>
						<p>It is the body&rsquo;s way of letting you know that your skin is stretching more than it should and that you need to give it a break.</p>
						<p>They usually appear during extensive and/or intense periods of exercise.</p>
						<p>The ball of the foot is the part which commonly gets hot spots because this area endures the most pressure while running.</p>
						<p>Those who suffer from this problem find it painful to run and are unable to enjoy their physical activities anymore.</p>
						<p>Luckily, there is no need to get anxious as this condition is quite common among professional as well as recreational athletes, and thus easy to fix.</p>

						<p>&nbsp;</p>
						<h2 id="causes" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Causes</h2>
						<p>As I&rsquo;ve mentioned before, hot spots occur when too much pressure is applied to a particular part of the foot.</p>
						<p>They are usually formed on the part which first hits the ground when you run or the area which faces intense contact with the shoe.</p>
						<p>However, the story is a bit more complicated than this, so I want to break down the potential causes of this condition into a list.</p>
						<p>Take a look at it below:</p>

						<h3 className="mt-5">Hollow Feet</h3>
						<p><Link href="/best-running-shoes-for-high-arches"><a className="text-decoration-none">High arched feet</a></Link> (also known as <Link href="https://ortho-center.eu/en/bereich/hohlfuss/"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">hollow feet</a></Link>) are more prone to this condition than &lsquo;normal&rsquo; feet.</p>
						<p>The trouble is that this type of foot is very flexible which makes the skin on its bottom stretch too much.</p>
						<p>It also places a lot of pressure on the arch which only adds to this problem.</p>

						<h3 className="mt-5">Flat Feet</h3>
						<p>This is a condition that I have and the main reason why I got hot spots in the first place.</p>
						<p>When <Link href="/flat-feet-pronation"><a className="text-decoration-none">flat feet</a></Link> run, they tend to overpronate which excessively stretches the skin.</p>
						<p>My tip for you would see a physical therapist and ask him to give you some treatment options that go well with your running.</p>

						<h3 className="mt-5">Too Much Heat</h3>
						<p>When feet get too hot inside a shoe, the skin swells up, becomes soft and highly irritable.</p>
						<p>This opens the door to a plethora of possible problems with hot spots being one of the main ones.</p>
						<p>The solution could be to choose shoes which are made of breathable materials such as mesh, instead of full-leather ones.</p>

						<h3 className="mt-5">Bad Shoes</h3>
						<p>Be careful when choosing running shoes because if you choose a model that is too tight for your foot, it might cause hot spots.</p>
						<p>This happens due to friction between the shoe and the foot as they are stuck closely together with no room to breathe. Also, a narrow toe box might irritate your big toe, so I strongly advise against it.</p>

						<h3 className="mt-5">Shoes That Aren&rsquo;t Tied Tightly</h3>
						<p><Link href="/best-running-shoes-for-heel-pain"><a className="text-decoration-none">The running shoe should tightly envelop the heel</a></Link>, ankle, and arch and you can do this by tightening your laces.</p>
						<p>By doing this, you decrease the chances that the shoe will create some unwanted friction with the foot.</p>
						<p>However, keep in mind that your toes should never hit the front of the shoe and that they should have some room to spread out.</p>
						<p>Also, don&rsquo;t lace up to tightly because this could cut off blood circulation.</p>

						<h3 className="mt-5">Too Much Moisture</h3>
						<p>Wet skin is soft and easy to damage which makes it vulnerable to hot spots.</p>
						<p>When you run your feet inevitably start sweating creating a moist environment inside the shoes.</p>
						<p>After that happens, the feet, socks, and shoes start rubbing against each other and cause hot spots.</p>

						<h3 className="mt-5">Friction and More Friction</h3>
						<p>Running is a very repetitive motion, which means that the same spot hits the ground over and over again.</p>
						<p>This means that if your shoes are a just a tiny bit too tight or a certain part of the foot doesn&rsquo;t sit well there is a high chance that this area will get irritated due to the amount of friction it experiences.</p>
						<p>This is especially true for long runs such as half-marathons or above.</p>

						<p>&nbsp;</p>
						<h2 id="how-do-i-know-if-i-have-hot-spots" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How do I Know if I Have Hot Spots?</h2>
						<p>If there is piece of skin on your foot that is reddish and painful to the touch it is probably a hot spot.</p>
						<p>Also, the skin in that area might seem a bit saggy and warm, so pay attention to that too.</p>
						<p>Hot spots often appear on the heel, big toe, and ball of the foot.</p>

						<p>&nbsp;</p>
						<h2 id="how-to-prevent-and-treat-hot-spots" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How to Prevent and Treat Hot Spots?</h2>

						<h3 className="mt-5">Proper Running Shoes</h3>
						<p>My first advice for you would be to reconsider your choice of running shoes because there is a high chance that they are the culprit here.</p>
						<p>Go to the store, try out a few pairs and see which one feels really comfortable.</p>
						<p>The important thing is that your toes are not pinned together by the toe box and that the cushioning is good.</p>
						<p>Proper shoes are the best-known prevention for this kind of condition, so don&rsquo;t be lazy to spend some time searching for a model that suits you.</p>

						<h3 className="mt-5">Choose Your Socks Smart</h3>
						<p>Believe it or not, but socks are a major player in this situation, and I suggest you wear double layered socks.</p>
						<p>Now, when you run, the friction is going to build up between the two layers of socks rather than the sock and the foot, and lessen the chance of hot spots.</p>
						<p>Also, avoid cotton socks as they soak up all the sweat and keep your feet moist, which is something you definitely don&rsquo;t want.</p>
						<p>Go for <Link href="https://www.blisterprevention.com.au/blister-blog/moisture-wicking-socks-natural-synthetic-fibres"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">materials that wick away the sweat</a></Link>.</p>

						<h3 className="mt-5">In Case of Flat/Hollow Feet, Use Orthotics</h3>
						<p>Both flat and hollow feet are conditions that leave your foot&rsquo;s arch is in a compromised position which means that it requires some additional support.</p>
						<p>There are various orthotics that can provide the arch with much-needed support, and they are usually made in forms of insoles or tapes.</p>
						<p>All you need to do is find the right one for your specific condition.</p>
						<p>It&rsquo;s good to know that orthotics can differ and that it would be best if you could find ones that are made of materials which will not heat up your feet and thus create some side-problems.</p>

						<h3 className="mt-5">Decrease Friction</h3>
						<p>Besides double layered socks, there are other ways in which one can reduce friction inside the shoes.</p>
						<p>One thing that you could do is apply zinc oxide tapes or blister plasters to the area of the foot that seems to be showing signs of a hot spot forming or is the spot where it is most likely to appear.</p>
						<p>Another popular method is foot lubrication, as a slippery foot is less likely to get irritated and damaged.</p>
						<p>There are special gels and balms for this purpose and one should smother them around the foot before putting on the socks and shoes.</p>

						<p>&nbsp;</p>
						<h2 id="how-to-prevent-a-blister-from-forming" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How to Prevent a Blister from Forming?</h2>
						<p>If you happen to &lsquo;run into&rsquo; a hot spot on your foot, fear not as this doesn&rsquo;t necessarily have to lead to a blister if you treat it the right way.</p>
						<p>So what can you do?</p>
						<p><strong>First, stop moving!</strong></p>
						<p>Take off your shoes and check for red skinned, painful spots.</p>
						<p>Then, see what might be the cause.</p>
						<p>Often, a foreign agent such as sand might have crept into the shoe and is causing this trouble.</p>
						<p>Other times, your insole could be in a bad position or the socks are all bunched up.</p>
						<p>Of course, any of the causes mentioned in this article could be the case, and it is essential to identify which one is it so that you can address it adequately.</p>
						<p><strong>Second, do something about it.</strong></p>
						<p>Once you&rsquo;re sure that you are dealing with a hot spot, it is time to stop further damage to the skin and try to prevent a blister from developing.</p>
						<p>Any of the friction reducing solutions from the section above (tape, plaster, gel) could be used in this case.</p>
						<p>It wouldn&rsquo;t be a bad idea to have some of these products readily available in your home, car, etc.</p>
						<p>Also, if the shoes are the chief offender, swap them for more comfortable ones.</p>
						<p><strong>Last, give your feet a break.</strong></p>
						<p>Skip the next run or two that you have planned in order to give your skin a chance to rest and rejuvenate.</p>
						<p>If you&rsquo;ve ever had a blister you know how painful it can be, so make sure not to push yourself too hard without any good reason.</p>

						<p>&nbsp;</p>
						<h2 id="the-final-word" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>The Final Word</h2>
						<p>So now that you have all of this information under your belt, it is time for me to leave you with some closing words.</p>
						<p>As you could have read, hot spots are by no means a significant issue and should not be a cause of panic.</p>
						<p>However, this doesn&rsquo;t mean that they should be neglected; quite the contrary.</p>
						<p>Take some of the measures mentioned in the article and treat this condition as soon as you notice it.</p>
						<p>If you don&rsquo;t do this, there is a high chance that you will get a blister which creates another world of potential problems, so be smart and deal with this issue while it&rsquo;s still young.</p>
						<p>All in all, you can&rsquo;t do sports without ever facing an injury or even a minor physical inconvenience such as hot spots, so try to accept this and not to make a big fuss out of it.</p>
						<p>Everything can be treated and healed if taken seriously and that&rsquo;s all you have to know.</p>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
