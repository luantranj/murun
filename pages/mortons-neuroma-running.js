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
	const postId = 10;
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
						<p>Today I&rsquo;m going to talk about medical condition that is common among runners and a cause for concern - Morton&rsquo;s neuroma.</p>
						<p>There are various reasons for concern but some of the most important are mild initial symptoms that lead to later diagnosis, painful and persistent symptoms in the later stages, various treatments with different success rate etc.</p>
						<p>If you want to find out more about Morton&rsquo;s neuroma and best ways to manage it in order to get back to running as soon as possible, please read on.</p>
						{ /* kimjiwon */ }
						<ul>
							<li><Link href="#mortons-neuroma-is-actually-not-a-tumor"><a className="text-decoration-none">Morton’s Neuroma Is Actually Not A Tumor</a></Link></li>
							<li><Link href="#the-exact-cause-of-mortons-neuroma-is-still-not-known"><a className="text-decoration-none">The Exact Cause of Morton’s Neuroma Is Still Not Known</a></Link></li>
							<li><Link href="#why-are-runners-more-prone-to-mortons-neuroma"><a className="text-decoration-none">Why Are Runners More Prone to Morton’s Neuroma?</a></Link></li>
							<li><Link href="#how-to-recognize-mortons-neuroma"><a className="text-decoration-none">How To Recognize Morton’s Neuroma?</a></Link></li>
							<li><Link href="#early-diagnosis-treatment-and-prevention"><a className="text-decoration-none">Early Diagnosis, Treatment And Prevention Are Key To Successful Treatment Of Morton’s Neuroma In Runners</a></Link></li>
							<li><Link href="#what-if-conservative-treatments-do-not-work"><a className="text-decoration-none">What If Conservative Treatments Do Not Work?</a></Link></li>
							<li><Link href="#conclusion"><a className="text-decoration-none">Conclusion</a></Link></li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="mortons-neuroma-is-actually-not-a-tumor" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Morton’s Neuroma Is Actually Not A Tumor</h2>
						<div className="d-flex justify-content-center mb-5 shadow rounded">
							<Image
								src="https://res.cloudinary.com/muru/image/upload/v1633927633/mortons-neuroma-running/mortons-neuroma-is-actually-not-a-tumor_o7levk.jpg" 
								width="730" 
								height="584"
								alt="Neuroma position on foot" 
							/>
						</div>
						<p>The good news about Morton&rsquo;s neuroma is that <Link href="https://www.mayoclinic.org/diseases-conditions/mortons-neuroma/symptoms-causes/syc-20351935"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">it&rsquo;s not a tumor</a></Link>
						.</p>
						<p>Although the term neuroma is used for benign nerve tumors, Morton&rsquo;s neuroma is actually just a thickening of the nerve, caused by irritation and inflammation.</p>
						<p>Because it causes the pain between toes, intermetatarsalgia is more accurate and appropriate term for this condition.</p>
						<p>Intermetatarsal describes the location of Morton&rsquo;s neuroma in the <Link href="/best-running-shoes-for-metatarsalgia"><a className="text-decoration-none">ball of the foot</a></Link> between <Link href="/dropped-metatarsal"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">the metatarsal or toe bones</a></Link>, while the suffix &lsquo;&rsquo;-algia&rsquo;&rsquo; means pain.</p>
						<p>Morton&rsquo;s neuroma usually affects the third interdigital nerve that goes between the third and fourth toe.</p>
						<p>There are couple of explanations for this.</p>
						<p>Firstly, the third interdigital nerve is the largest interdigital nerve and therefore more susceptible to pressure, irritation and injury because it is placed in the space that is the same size as other interdigital spaces.</p>
						<p>Secondly, the third metatarsal bone is fixed while the forth is more mobile, leading to bigger friction and stress on the nerve.</p>


						<p>&nbsp;</p>
						<h2 id="the-exact-cause-of-mortons-neuroma-is-still-not-known" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>The Exact Cause of Morton’s Neuroma Is Still Not Known</h2>
						<p>Even though it is a relatively common condition, the exact cause of Morton&rsquo;s neuroma is still not known.</p>
						<p>There are various <Link href="https://physioworks.com.au/injuries-conditions-1/mortons-neuroma"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">factors</a></Link> that are associated with Morton&rsquo;s neuroma.</p>
						<p>However, it is still not known if they are the cause of this condition or just one of many contributing factors.</p>
						<p>In order to manage Morton&rsquo;s neuroma and its pain better and get back to running as soon as possible, I think you should know more about the potential causes and contributing factors.</p>
						<p>Moreover, you probably have one or more of these factors.</p>

						<p>&nbsp;</p>
						<h2 id="why-are-runners-more-prone-to-mortons-neuroma" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Why Are Runners More Prone to Morton’s Neuroma?</h2>
						<p>Runners and people participating in sports that involve weight bearing and repetitive pressure on the ball of the foot like racquet sports are more susceptible to Morton&rsquo;s neuroma.</p>
						<p>I&rsquo;ve already mentioned the reason for this in the previous sentence - running or racquet sports involve repetitive pressure on the ball of the foot, leading to irritation and inflammation of the interdigital nerve.</p>
		
						<p className="mt-5"><strong>High heels, tight shoes with narrow toe boxes and shoes without proper cushioning and support raise the risk for Morton&rsquo;s neuroma.</strong></p>
						<p>In the past, it was noticed that women are more likely to get Morton&rsquo;s neuroma than men.</p>
						<p>That&rsquo;s when researchers have realized that the possible explanation for this is the different type of shoes they wear.</p>
						<p>Women often wear tight high heels that have narrow toe boxes that put the pressure on the interdigital nerve and cause irritation and inflammation.</p>
						<p>However, women are not the only ones at risk.</p>
						<p>Men who wear unfitting, tight shoes with narrow toe boxer are also at risk for developing Morton&rsquo;s neuroma.</p>
						<p>You&rsquo;re probably asking yourself - Are high heels and tight shoes the only footwear that can raise the risk for Morton&rsquo;s neuroma?</p>
						<p>They&rsquo;re not.</p>
						<p>Shoes without proper cushioning and support can also put more pressure on the nerve and cause this medical condition.</p>
						<p>Proper fitting shoes are especially important for people suffering from foot deformity like flat feet, high arches, <Link href="/best-running-shoes-for-bunions"><a className="text-decoration-none">bunions</a></Link> or hammer toes since this is another contributing factor of Morton&rsquo;s neuroma.</p>

						<p className="mt-5"><strong>Foot structural abnormalities put additional pressure and irritation on the interdigital nerve.</strong></p>
						<p>People with structural foot abnormalities like flat feet, high arches, bunions or hammer toes are more prone to Morton&rsquo;s neuroma.</p>
						<p>All these structural deformities put additional pressure on the third web space and interdigital nerve, raising the possibility for inflammation and Morton&rsquo;s neuroma.</p>

						<p>&nbsp;</p>
						<h2 id="how-to-recognize-mortons-neuroma" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How To Recognize Morton’s Neuroma?</h2>
						<p>Many people recognize Morton&rsquo;s neuroma in the later stages of this medical condition.</p>
						<p>The reason for this is the fact that initial <Link href="https://www.academyofclinicalmassage.com/putting-squeeze-mortons-neuroma/"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">symptoms</a></Link> are so mild that people usually don&rsquo;t pay attention to them.</p>
						<p>They usually blame them on some other cause.</p>
						<p>Initially, most people complain of burning, tingling or numbness in the ball of the foot that can also radiate to toes.</p>
						<p>People describe this feeling like they&rsquo;re walking on a pebble, have something in their shoe or like their sock is bunched up.</p>
						<p>These symptoms occur only occasionally and they usually go away after removing the shoe, massaging the feet or avoiding aggravating activities or shoes.</p>
						<p>Overtime, the symptoms progressively get worse, become more often and last longer.</p>
						<p>Moreover, removing the shoes and massaging the foot will not be that helpful anymore.</p>
						<p>As neuroma becomes larger and temporary changes of the nerve become permanent, the symptoms become more intense and there can also be pain in the ball of the foot, just behind the third interdigital space.</p>
						<p><strong>Simple tests that can help you self-diagnose Morton&rsquo;s neuroma:</strong></p>
						<p>There are couple of tests that are used by doctors to help diagnose Morton&rsquo;s neuroma.</p>
						<p>Of course, some of these tests are more accurate than others.</p>

						<h3 className="mt-5">Lateral squeeze test or Mulder&rsquo;s click</h3>
						<p>The most commonly used test for Morton&rsquo;s neuroma is the lateral squeeze test.</p>
						<p>It is not most accurate but it is easy to perform.</p>
						<p>Squeeze the size with one hand and squeeze the area between metatarsal heads with fingers of the other hand.</p>
						<p>The pain is sometimes accompanied by a click that can be felt.</p>
						<p>This click is also known as Mulder&rsquo;s click.</p>

						<h3 className="mt-5">Digital nerve stress test</h3>
						<p>While not as commonly used as the lateral squeeze test, digital nerve stress test is easy to perform.</p>
						<p>Moreover, recent studies showed that this test is one of the most effective ways to diagnose Morton&rsquo;s neuroma and should be used regularly in medical practice.</p>
						<p>While holding both ankles in full dorsiflexion, manually extend toes of suspected area.</p>
						<p>If you feel the pain or discomfort, there is a high chance that you have Morton&rsquo;s neuroma.</p>

						<p>&nbsp;</p>
						<h2 id="early-diagnosis-treatment-and-prevention" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Early Diagnosis, Treatment And Prevention Are Key To Successful Treatment Of Morton’s Neuroma In Runners</h2>
						<p>The key to successful management of Morton&rsquo;s neuroma is early diagnosis.</p>
						<p>The sooner you diagnose Morton&rsquo;s neuroma, the more conservative treatment options will be available to you.</p>
						<p>Moreover, the success rate of these treatments will be much higher.</p>
						<p>What are those conservative treatments you ask?</p>
						<p>Well, as with any other sports injury the initial treatment should be simple home methods like protection, rest and ice.</p>

						<h3 className="mt-5">Rest</h3>
						<p>As soon as you feel the symptoms, you should stop running or do any other weight bearing activity that can aggravate the symptoms. Rest is important part of the initial treatment.</p>
						<p>If you still want to be active, temporarily switch to sports that don&rsquo;t include weight bearing like swimming.</p>
						<p>It will keep you in shape while you&rsquo;re recovering from this medical condition.</p>

						<h3 className="mt-5">Ice</h3>
						<p>Ice the painful area once every 2 to 3 hours for 15 to 20 minutes.</p>
						<p>The aim of these methods is to relief pain and reduce swelling, allowing the nerve to heal faster.</p>
						<p>If you cannot take the pain, anti-inflammatory medications like ibuprofen can be helpful.</p>
						<p>It is also important to recognize and correct all the contributing factors that you have.</p>
						<p>Thankfully, there are various ways to correct and eliminate them.</p>

						<h3 className="mt-5">Proper footwear</h3>
						<p>Change of footwear should be the first thing you should do.</p>
						<p><Link href="/best-running-shoes-for-mortons-neuroma"><a className="text-decoration-none">Shoes with lots of cushioning</a></Link> will absorb shock when running and put less stress on the ball of the foot and the nerve.</p>
						<p>If you also have some foot deformity like high arches or flat feet, you should look for shoes that are adequate for your condition.</p>
						<p>The best shoes for flat feet are the so called stability or motion control shoes, while shoes with lots of cushioning are <Link href="/best-running-shoes-for-high-arches"><a className="text-decoration-none">good choice for high arches</a></Link>.</p>

						<h3 className="mt-5">Shoe support</h3>
						<p>Orthotics like shoe pads and inserts are another way to manage Morton&rsquo;s neuroma.</p>
						<p>There are metatarsal or neuroma pads on the market that will reduce the pressure on the metatarsal heads on the ball of the foot, which is the place where the nerve becomes thickened.</p>
						<p>The pad shifts stress from the head to the neck of metatarsal bones and reduces irritation.</p>
						<p>Moreover, it also separates toes and increases the space between the metatarsal heads, preventing irritation and pressure even further.</p>
						<p>Shoe inserts are similar to neuroma pads.</p>
						<p>The advantage of shoes inserts is that they can also correct other foot structural abnormalities that you may have.</p>
						<p>Although there are various over-the-counter inserts that you can buy, I always recommend getting a custom made orthotics.</p>
						<p>They are more expensive but specially designed for your foot.</p>
						<p>Another way to relief symptoms and allow Morton&rsquo;s neuroma to heal are socks with toe spreaders.</p>
						<p>Most people use them overnight in order to prevent symptoms reappearing in the morning.</p>
						<p>The cheaper alternative is to use cotton balls between your toes instead of special socks.</p>

						<h3 className="mt-5">Exercises</h3>
						<p>Various strengthening and stretching exercises can help with Morton&rsquo;s neuroma.</p>
						<p>The aim of these exercises is to release tension from certain muscle group and shift the stress from the affected area to the other parts of lower leg.</p>
						<p>Some of the best exercises are calf stretches, plantar fascia stretches, foot intrinsic muscle strengthening exercise and balance exercises.</p>
						<div className="alert alert-secondary">
							<p><strong>Calf Stretch Exercise</strong></p>
							<ul>
								<li className="mb-3">Stand and lean against a wall</li>
								<li className="mb-3">Place one foot back and make sure that knee is straight the entire exercise</li>
								<li className="mb-3">Bend the front knee until a gentle stretch is felt on the back of the lower leg</li>
								<li className="mb-3">Hold for 30 seconds, repeat 3 times per side then do this with back knee bent</li>
							</ul>
						</div>

						<p><strong>Plantar Fascia Stretch</strong></p>
						<ul>
							<li className="mb-3">Hold the toes of the painful foot</li>
							<li className="mb-3">Stretch them toward your shin bone</li>
							<li className="mb-3">Hold for 30 seconds and repeat 3 times</li>
						</ul>

						<div className="alert alert-secondary">
							<p><strong>Foot Intrinsic Muscle Strengthening</strong></p>
							<ul>
								<li className="mb-3">Put some towel flat on the floor</li>
								<li className="mb-3">Try to grab the towel by using your toes</li>
								<li className="mb-3">Do 3 sets of 10 repetitions</li>
							</ul>
						</div>

						<p>&nbsp;</p>
						<h2 id="what-if-conservative-treatments-do-not-work" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What If Conservative Treatments Do Not Work?</h2>
						<p>The problem with Morton&rsquo;s neuroma is the success rate of the previously mentioned conservative treatments.</p>
						<p>The exact success rate is currently not known, but reasonable estimate is that ⅓ of patients have some sort of improvement or total resolution of symptoms.</p>
						<p>It is also believed that the more conservative methods you use, there is higher chance for successful resolution.</p>
						<p>The more invasive method is corticosteroid injections.</p>
						<p>There are some reports that claim that the success rate raises to more than 80% when using corticosteroid injection therapy along with other conservative treatments, especially with shoe modifications.</p>
						<p>Unfortunately, if none of the conservative treatments work and the symptoms become even worse, <Link href="https://emedicine.medscape.com/article/1237552-treatment#d13"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">surgical treatment</a></Link> is the only available option.</p>
						<p>The recovery time depends on the type of surgical procedure but usually patients can get back to sports 4 to 6 weeks after surgery.</p>
						<p>All surgical procedures have a potential risk for complications and surgical therapy for Morton&rsquo;s neuroma is no different.</p>
						<p>Most of these complications come from inadequate wound healing, especially if the procedure is done with plantar approach (incision is made on the bottom of your feet).</p>
						<p>In case of removal procedure, there is a chance for the so called stump neuroma, condition that is more painful than Morton&rsquo;s neuroma and requires re-surgery.</p>
						<p>Because of the complications and risk for recurrence and development of new conditions, surgical therapy is not recommended until the symptoms get worse or there are no other conservative treatment options left.</p>

						<p>&nbsp;</p>
						<h2 id="conclusion" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Conclusion</h2>
						<p>When runners hear Morton&rsquo;s neuroma they often worry that they&rsquo;re never going to run as before.</p>
						<p>Although treating Morton&rsquo;s neuroma is not easy, it is possible to run painless as long as you start with your treatment as soon as possible.</p>
						<p>The good news about Morton&rsquo;s neuroma is the variety of treatments that are available for you.</p>
						<p>Even though they have various success rates, it is better to have more treatments available than no treatments at all.</p>
						<p>Even if surgical treatment is the only option left for your Morton&rsquo;s neuroma, do not worry.</p>
						<p>The number of complications is not that big and your condition will be much better than before other conservative treatments.</p>
						<p>I hope that with this text you&rsquo;ve learned more about Morton&rsquo;s neuroma, its causes and ways to treat and prevent it and learned that it is possible to run painless as long as you start your treatment early.</p>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
