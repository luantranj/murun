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
	const postId = 51;
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
						<p>Are training and running shoes the same thing?</p>
						<p>No, not really.</p>
						<p>There&rsquo;s a common misconception that they are, which is understandable, considering the fact they look quite similar.</p>
						<p>But the real expert will tell you that there&rsquo;s a vast difference between the two!</p>
						<p>Each type of sports shoes will have its own purpose and key dissimilarities with regard to the other.</p>
						<p>After reading this article, you&rsquo;ll be able to spot training versus running shoes immediately, as well as determine which ones you need.</p>
						<p>Stay tuned!</p>
						{ /* T.O.C */ }
						<ul>
							<li><Link href="#training-shoes-story-of-versatility"><a className="text-decoration-none">Training Shoes: Story of Versatility</a></Link></li>
							<li><Link href="#running-shoes-story-of-comfort"><a className="text-decoration-none">Running Shoes: Story of Comfort</a></Link></li>
							<li><Link href="#importance-of-using-the-right-shoes-for-your-activities"><a className="text-decoration-none">Importance of Using the Right Shoes for Your Activities</a></Link></li>
							<li><Link href="#how-should-training-and-running-shoes-fit"><a className="text-decoration-none">How Should Training and Running Shoes Fit?</a></Link></li>
							<li><Link href="#better-performance"><a className="text-decoration-none">An Often Neglected Benefit - Better Performance</a></Link></li>
							<li><Link href="#training-or-running-shoes-for-walking"><a className="text-decoration-none">Training or Running Shoes for Walking?</a></Link></li>
							<li><Link href="#final-words"><a className="text-decoration-none">Final Words: Training Versus Running Shoes: Which Ones to Get?</a></Link></li>
						</ul>
						<div className="d-flex justify-content-center my-5 shadow rounded">
							<Image
								src="https://res.cloudinary.com/muru/image/upload/v1633833949/training-versus-running-shoes/running-shoes-training-shoes-girl-confused-Custom_zfte91.png" 
								width="730" 
								height="382"
								alt="Confusing of running shoes vs. training shoes" 
							/>
						</div>

						<p>&nbsp;</p>
						<h2 id="training-shoes-story-of-versatility" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Training Shoes: Story of Versatility</h2>
						<p>Generally speaking, training shoes serve for more versatile movement.</p>
						<p>I&rsquo;m talking about lateral (side-to-side) and circular motion, which you need if you play sports or do a workout.</p>

						<h3 className="mt-5">Why are training shoes more adaptable to movement?</h3>
						<p>First and foremost, because of their construction.</p>
						<p>They have a flatter sole, which is, in turn, more flexible and adaptable to different surfaces.</p>
						<p>What this means is that the whole bottom part of the shoe can bend as you step in different directions.</p>
						<p>Plus, they are lightweight for easier movement!</p>
						<p>They have a reinforced upper part of the shoe that prevents any unwanted movement, which comes in handy when you&rsquo;re jumping.</p>
						<p>The low heel-to-toe drop provides a better base for lifts, and the firm midsole increases stability.</p>
						<p>Some training shoes also have an extended outsole, which serves for gripping onto a rope during rope climbs.</p>
						<p>Thus, training shoes support cutting, jumping, stopping, and a bit of running.</p>
						<p>Switching between physical activities is what they are best at.</p>
						<p>You can consider them as something of an all-in-one training shoe.</p>
						<div className="d-flex justify-content-center mb-5 shadow rounded">
							<Image
								src="https://res.cloudinary.com/muru/image/upload/v1633834347/training-versus-running-shoes/training-shoes-anatomy_ovywcn.png" 
								width="730" 
								height="382"
								alt="Training shoes anatomy" 
							/>
						</div>

						<h3 className="mt-5">What about the treadmill?</h3>
						<p>So, one could easily deduce that training shoes are excellent for the gym.</p>
						<p>But what about the treadmill? It is running, isn&rsquo;t it?</p>
						<p>Should you get running shoes for the treadmill?</p>
						<p>In an idyllic world, yes - you&rsquo;d use running shoes even for the treadmill.</p>
						<p>But realistically, not many people carry two pairs of shoes to the gym to switch them in-between the exercises.</p>
						<p>Hence, your training shoes can be okay for running short distances on the treadmill.</p>
						<p>If you&rsquo;re going to be running for longer than 15 minutes, though, I suggest running shoes.</p>

						<h3 className="mt-5 mb-3">When to use training shoes?</h3>
						<p><strong>High-intensity gym workout</strong><br />They&rsquo;ll make you ready for any kind of mixed workout because of their versatility.</p>
						<p><strong>Boot camp workout</strong><br />Again, training shoes are your best bet for this training program.</p>
						<p><strong>Weight lifting</strong><br />Training shoes will keep you steady while you&rsquo;re doing weight lifting. Also, the heel support is excellent if you&rsquo;re doing squats with dumbells and are required to stand up with weight.</p>
						<p><strong>Strength workout</strong><br />Training shoes help you with endurance exercises and support your body.</p>
						<p><strong>Playing sports as a hobby</strong><br />Some casual sports players prefer running shoes, but training shoes are better for this purpose because they enable swift movement.</p>
						<p>Of course, if you&rsquo;re a professional, it&rsquo;s better to go for shoes that are specifically designed for that sport (e.g., high tops for basketball).</p>

						<p>&nbsp;</p>
						<h2 id="running-shoes-story-of-comfort" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Running Shoes: Story of Comfort</h2>
						<p>Obviously, running shoes are called that because they are made for <Link href="/how-to-start-running-for-beginners"><a className="text-decoration-none">running</a></Link>.</p>
						<p>But what&rsquo;s that bit that makes them the best shoes for running?</p>
						<p>Their sole is made in such a way that it protects your feet and provides additional support during running.</p>
						<p>So, when you&rsquo;re performing one and the same motion (basically, hitting the surface repeatedly with your feet), running shoes alleviate the drop.</p>
						<p>Many people claim that running shoes are best-in-class when it comes to comfort, and they aren&rsquo;t wrong.</p>
						<h3>Comfort and Injury prevention</h3>
						<p>Remember how I said that training shoes are made primarily for multidirectional movement?</p>
						<p>Well, running shoes are predominately for moving forward.</p>
						<p>When you move your feet while running - that is, heel-to-toe, the balls of your feet are under bigger pressure.</p>
						<p>This requires more cushioning and support that running shoes have.</p>
						<p>In other words, what you get is shock absorption.</p>
						<p>The cushioned midsole benefits you the most, but other parts of the running shoes&rsquo; construction also increase your performance.</p>
						<p>Thus, the fabric upper part maximizes breathability and ventilation, which is helpful in the long run and prevents any injuries and discomfort.</p>
						<p>You&rsquo;ll find that some running shoes also have a reinforced outsole that enhances durability.</p>
						<p>You should opt for these if you&rsquo;re often trail running on uneven or off-road terrain (rocks, pebbles, mud, etc.).</p>
						<p>However, bear in mind that, however durable the outsole is, running shoes aren&rsquo;t made for hiking.</p>
						<p>Those running shoes that are made of the thinnest fabrics are the best for road and pavement running.</p>
						<div className="d-flex justify-content-center mb-5 shadow rounded">
							<Image
								src="https://res.cloudinary.com/muru/image/upload/v1633837095/training-versus-running-shoes/running-shoes-anatomy_iaakn7.png" 
								width="730" 
								height="382"
								alt="Running shoes anatomy" 
							/>
						</div>

						<h3 className="mt-5">When to use running shoes?</h3>
						<p><strong>Running</strong><br />Pretty straightforward - the main purpose of the running shoes is what they are named after.</p>
						<p>With the right running shoes, you won&rsquo;t feel tired after running miles and miles on any surface thrown under your heels (literally).</p>
						<p><strong>Treadmill workout</strong><br />As noted, you can also use training shoes for the treadmill and cardio training, but it&rsquo;s better to keep it to short distances.</p>
						<p><strong>Marathon race</strong><br />Even if you walk during a marathon instead of running (if it&rsquo;s a long one), running shoes should still be your first pick.</p>

						<p>&nbsp;</p>
						<h2 id="importance-of-using-the-right-shoes-for-your-activities" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Importance of Using the Right Shoes for Your Activities</h2>
						<p>If you pick the wrong shoes, you can experience some mild problems such as discomfort and fatigue.</p>
						<p>In case you&rsquo;ve ever worn inappropriate kinds of shoes for a longer period, you probably know what I&rsquo;m talking about.</p>
						<p>Ache, chronic pain, soreness, even blisters?</p>
						<p>This will be a thing of the past when you pick training or running shoes accordingly.</p>
						<p>Also, there&rsquo;s a risk of injuries or other conditions, such as:</p>
						<ul>
							<li className="mb-1">Heel pain</li>
							<li className="mb-1">Peroneal tendonitis</li>
							<li className="mb-1"><Link href="https://www.medicalnewstoday.com/articles/319324"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">Knee injuries</a></Link></li>
							<li className="mb-1">Ankle sprain, etc.</li>
						</ul>
						<p>In addition, if you have <Link href="/how-do-you-know-if-you-have-wide-feet"><a className="text-decoration-none">wide feet</a></Link>, <Link href="/best-running-shoes-for-high-arches"><a className="text-decoration-none">high arches</a></Link>, or <Link href="/flat-feet-pronation"><a className="text-decoration-none">flat feet</a></Link>, it might be challenging to run and maintain the desired amount of activity if you don&rsquo;t get yourself the best pair of shoes for your needs.</p>
						<p>Just follow my guide above, and this shouldn&rsquo;t be a problem!</p>
						<p>Let&rsquo;s see in practice how the mismatch of shoes can cost you an injury:</p>
						<p><strong>Running shoes used for side-to-side movement</strong><br />Higher heel drop with this kind of shoes can increase the chances of spraining your ankle during this kind of motion.</p>
						<p><strong>Running shoes for weight lifting</strong> <br />The extra cushioning does not provide the necessary stability and support you need to stand properly with added weight.</p>
						<p><strong>Training shoes for running</strong><br />Many problems, from fractures to sprained ankles, can arise due to a lack of cushioning support and shock absorption.</p>

						<p>&nbsp;</p>
						<h2 id="how-should-training-and-running-shoes-fit" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How Should Training and Running Shoes Fit?</h2>
						<p>Rule of the thumb is that your running and training shoes should be half a size bigger than your casual shoe size.</p>
						<p>Why is that so?</p>
						<p>During any activity in which your feet are involved, your blood flow increases, and slight swelling occurs.</p>
						<p>The too-small size of shoes can also cause your toenails to bruise and fall off.</p>
						<p><strong>How to know whether running or training shoes fit properly?</strong></p>
						<p>Here&rsquo;s a quick, three-step gauging of the fit:</p>

						<h3 className="mt-5">Step 1:</h3>
						<p>Take out the insoles of the shoes and stand on them.</p>
						<p>They should match the shape of your foot.</p>
						<p>Your toes should be just inside the lines, and the tip of the insoles should be above them.</p>
						<p>In other words, should have some wiggle room in the toe box between your big toe and the top of the shoe.</p>

						<h3 className="mt-5">Step 2:</h3>
						<p>When you lace your shoes tightly (when you can slide a finger between the knot and the sneakers is okay), you should feel comfortable.</p>
						<p>They should not constrict your nerves or blood vessels.</p>

						<h3 className="mt-5">Step 3:</h3>
						<p>Give them a try.</p>
						<p>Walk - or, if possible - run, and you&rsquo;ll see whether a particular pair is a good fit.</p>
						<p>You shouldn&rsquo;t sense pressure on any part of your foot.</p>

						<p>&nbsp;</p>
						<h2 id="better-performance" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>An Often Neglected Benefit - Better Performance</h2>
						<p>Are you in top form and trying your best but still do not achieve the maximum?</p>
						<p>Believe it or not, it might be the wrong shoes that are holding you back.</p>
						<p>And that&rsquo;s the last thing that you want!</p>
						<p>Let me give you an example.</p>
						<p>Say that you&rsquo;re in a perfect physical condition and know that you can do more - for instance, run faster - but you aren&rsquo;t.</p>
						<p>If you own some other shoes than running, their dynamics might keep you from performing better because they increase the traction and grip.</p>
						<p>Or vice versa - you feel that you&rsquo;ve gained strength but still cannot bring your weight lifting to the next level? It might be that you haven&rsquo;t got appropriate training shoes.</p>
						<p>So, consult again the main purposes of training and running shoes presented above, and get the ones that suit you best.</p>
						<p>It&rsquo;ll be life-changing!</p>

						<p>&nbsp;</p>
						<h2 id="training-or-running-shoes-for-walking" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Training or Running Shoes for Walking?</h2>
						<p>This is another frequently asked question when speaking about these two kinds of shoes.</p>
						<p>Which ones are better for everyday use and casual walking?</p>
						<p>Definitely running shoes.</p>
						<p>Their amount of cushioning will help with low-impact activities, and their featherweight makes walking a breeze.</p>
						<p>When choosing every-day running shoes for long walks, aim at those that have good amounts of cushioning, but perhaps a bit lower than what you would take for running.</p>
						<p>For instance, if they have foam in one part of the sole, it&rsquo;ll be enough - you don&rsquo;t have to go for double cushioning.</p>

						<p>&nbsp;</p>
						<h2 id="final-words" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Final Words: Training Versus Running Shoes: Which Ones to Get?</h2>
						<p>Shoe technology has become so developed that it can influence your performance to a considerable extent.</p>
						<p>When you choose the right pair of shoes, you&rsquo;ll forget that you&rsquo;re wearing them, and they won&rsquo;t interfere with any of your activities.</p>
						<p>Quite the contrary - they will facilitate them.</p>
						<p>I hope I helped you decide on the training versus running shoes matter for yourself.</p>
						<p>They both serve a range of different purposes.</p>
						<p>With my short guide, now you know what kind of footwear you need.</p>
						<p>Take training shoes to the gym, and take running shoes on tracks and runs, and you won&rsquo;t make a mistake!</p>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
