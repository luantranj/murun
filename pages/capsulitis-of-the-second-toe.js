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
	const postId = 45;
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
						<p>Although we often fail to give them enough credit, our feet are, in fact, incredibly intricate mechanisms that need to perform a whole slew of motions to allow us basic daily activities.</p>
						<p>Something as simple as walking to a toilet puts into motion complex machinery comprised of 33 joints, 26 bones, 107 ligaments, and 19 muscles.</p>
						<p>Keeping that in mind, it is easy to see how increased physical activity like running can bring this system to a halt.</p>
						<p>And to be quite honest, some of the foot-related medical conditions have been well-researched and even more publicly discussed.</p>
						<p>Others, despite their frequency, are not that well known.</p>
						<p>That is why we are going to take this opportunity to talk a bit about capsulitis of the second toe.</p>
						<ul>
							<li><Link href="#what-is-capsulitis-of-the-second-toe"><a className="text-decoration-none">What Is Capsulitis Of The Second Toe?</a></Link></li>
							<li><Link href="#mortons-neuroma"><a className="text-decoration-none">A Couple Of Words On Morton’s Neuroma</a></Link></li>
							<li><Link href="#the-causes-of-capsulitis-foot"><a className="text-decoration-none">The Causes Of Capsulitis Foot</a></Link></li>
							<li><Link href="#common-symptoms"><a className="text-decoration-none">Capsulitis Of The Second Toe – Common Symptoms</a></Link></li>
							<li><Link href="#treating-capsulitis"><a className="text-decoration-none">Finding A Way For Treating Capsulitis</a></Link></li>
							<ul>
								<li><Link href="#resting-the-feet"><a className="text-decoration-none">Resting the feet</a></Link></li>
								<li><Link href="#ice"><a className="text-decoration-none">Applying the ice on the affected area</a></Link></li>
								<li><Link href="#stretching"><a className="text-decoration-none">Stretching exercises</a></Link></li>
								<li><Link href="#physical-therapy"><a className="text-decoration-none">Physical therapy</a></Link></li>
								<li><Link href="#orthotics"><a className="text-decoration-none">Arch support orthotics</a></Link></li>
								<li><Link href="#footpads"><a className="text-decoration-none">Footpads</a></Link></li>
								<li><Link href="#shoes"><a className="text-decoration-none">Comfortable shoes</a></Link></li>
								<li><Link href="#taping"><a className="text-decoration-none">Taping</a></Link></li>
								<li><Link href="#anti-inflammatory-medication"><a className="text-decoration-none">Anti-inflammatory medication</a></Link></li>
							</ul>
							<li><Link href="#conclusion"><a className="text-decoration-none">Conclusion</a></Link></li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="what-is-capsulitis-of-the-second-toe" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What Is Capsulitis Of The Second Toe?</h2>
						<p>If we looked for the most straightforward definition, we would probably find that capsulitis of the second toe is <Link href="https://youtu.be/qVRnWxPJbLM?t=7"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">a condition that affects the ligaments</a></Link> surrounding the toe and causes inflammation.</p>
						<p>Under normal circumstances, the ligaments surrounding the joint base have the purpose of forming a layer of tissue that provides protection and supports the functions of the joint.</p>
						<p>Also, inflammation weakens the surrounding ligaments as well as causes considerable discomfort, so there are more than enough reasons to react upon the first sign of illness.</p>
						<p>The reason why we discuss specifically the second toe is very simple &ndash; this part of the body is most commonly affected.</p>
						<p>Still, you should be aware that capsulitis can affect all other toes as well as any other joint in your body.</p>
						<div className="alert alert-primary" role="alert">
							<p><strong>EDITOR&apos;S NOTE</strong></p>
							<p>In spite of high frequency and the fact that millions of people out there are experiencing this medical issue in one form or another, capsulitis often goes unnoticed and, as a result, is poorly treated.</p>
							<p>This is due to the simple fact that its symptoms are too similar to other conditions like <Link href="https://www.hss.edu/condition-list_synovitis.asp"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">synovitis</a></Link> and <Link href="https://www.medicalnewstoday.com/articles/152120"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">bursitis</a></Link>.</p>
							<p>However, capsulitis of the second toe is, by far, most commonly confused with the condition called Morton&apos;s neuroma.</p>
							<p>So, before we learn how to recognize the capsulitis and treat it properly, we will first try to move Morton&apos;s neuroma out of the equation.</p>
						</div>

						<p>&nbsp;</p>
						<h2 id="mortons-neuroma" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>A Couple Of Words On Morton’s Neuroma</h2>
						<div className="d-flex justify-content-center mb-5 shadow rounded">
							<Image
								src="https://res.cloudinary.com/muru/image/upload/v1634346357/capsulitis-of-the-second-toe/mortons-neuroma-is-actually-not-a-tumor_fqvzcp.jpg" 
								width="730" 
								height="584"
								alt="Mortons Neuroma: the neuroma position" 
							/>
						</div>
						<p>Much like capsulitis of the second toe, <Link href="/mortons-neuroma-running"><a className="text-decoration-none">Morton&rsquo;s neuroma</a></Link> is a painful condition that causes discomfort and affects the ball of the foot.</p>
						<p>This time, though, we are usually talking about the area between the third and the fourth toe.</p>
						<p>The growth of this tissue is usually caused by constant stress or recent trauma.</p>
						<p>Your body tries to protect the affected area by growing these additional layers of tissue but, as a result, puts even more pressure on the pinched nerve.</p>
						<p>So, to sum all the crucial things up&hellip;</p>
						<p><strong>Symptoms</strong></p>
						<ul>
							<li className="mb-3">Numbness or tingling</li>
							<li className="mb-3">Burning pain in the foot</li>
							<li className="mb-3">You are feeling like you are standing on a pebble</li>
						</ul>
						<p><strong>Risk factors</strong></p>
						<ul>
							<li className="mb-3">High heels</li>
							<li className="mb-3">Tight footwear</li>
							<li className="mb-3">Athletic activities (running, skiing, rock-climbing)</li>
							<li className="mb-3">Various foot deformities (flat feet, hammertoes, bunions)</li>
						</ul>
						<p>But, the reason why we are here is to get to know what the differences are between capsulitis of the second toe and Morton&apos;s neuroma.</p>
						<p>Well, although they share a lot of similarities, there are a couple of significant distinctions:</p>
						<ul>
							<li className="mb-3">Neuroma usually affects the area between the third and fourth toe</li>
							<li className="mb-3">Neuroma-caused pain is felt between the toes. On the other hand, capsulitis is formed at the bottom of the toe</li>
							<li className="mb-3">A neuroma is accompanied by tingling sensations</li>
						</ul>
						<p>Of course, capsulitis also has a fair share of unique symptoms we&apos;ll cover in greater depth a bit later.</p>
						<p>What is important to point out, though, is that even if you are able to notice the difference, you should ask for professional medical help no more than a couple of days after noticing the symptoms.</p>
						<p>All these guidelines should help you only to make some immediate actions and reduce risk factors.</p>
						<p>For instance, in the case of Morton&apos;s neuroma, that could be <Link href="/best-running-shoes-for-mortons-neuroma"><a className="text-decoration-none">moving to more comfortable footwear</a></Link>.</p>

						<p>&nbsp;</p>
						<h2 id="the-causes-of-capsulitis-foot" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>The Causes Of Capsulitis Foot</h2>
						<p>The origins of capsulitis foot are numerous, but they can all be summed to one thing &ndash; abnormal foot mechanics.</p>
						<p>Or, if we are to be more precise, we could say that capsulitis can be caused by all situations in which the toe joint sustains too much pressure.</p>
						<p>This excessive pressure is often a result of foot deformities, inappropriate footwear, injury, or trauma.</p>
						<p>However, in some instances, the condition can be caused by nothing else than abnormal foot mechanics repeated through countless consecutive motions.</p>
						<p>So, due to this wide variety of causes, we can say that capsulitis of the second toe can be developed virtually by anyone.</p>
						<p>But, they can also help us to identify the groups of people that are at higher risk.</p>
						<p>Let us take a quick look at a couple of common capsulitis-related risk factors:</p>
						<ul>
							<li className="mb-3">Toe size (your second toe is much bigger than the rest of the toes, including the big toe)</li>
							<li className="mb-3"><Link href="/best-running-shoes-for-bunions/"><a className="text-decoration-none">You are having bunions</a></Link> and do not wear the footwear designed to accommodate them</li>
							<li className="mb-3">Wearing uncomfortable shoes (much like in the case of Morton&rsquo;s neuroma that includes uncomfortably high heels)</li>
							<li className="mb-3">Unstable foot arch (this also includes <Link href="/flat-feet-pronation"><a className="text-decoration-none">flat feet</a></Link>)</li>
							<li className="mb-3"><Link href="/tight-calves-after-running"><a className="text-decoration-none">Tight calf muscles</a></Link></li>
							<li className="mb-3">Muscular imbalance (this covers primarily the muscles on the top and at the bottom of your foot)</li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="common-symptoms" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Capsulitis Of The Second Toe – Common Symptoms</h2>
						<p>As we can see, the causes of foot capsulitis are as numerous as they are mundane, which is never considered good news.</p>
						<p>However, the key to proper treatment lies in the early recognition of symptoms and timely reaction.</p>
						<p>So, let us go together through some of the most common symptoms of capsulitis of the second toe.</p>
						<ul>
							<li className="mb-3">Swelling of the second toe. This is also one of the main differences between capsulitis and Morton&rsquo;s neuroma. In advanced stages, capsulitis is almost always accompanied by pain and severe swelling of the second toe</li>
							<li className="mb-3">Numbness in the second toe even after you remove the footwear</li>
							<li className="mb-3">The feeling like there is a marble beneath your joint</li>
							<li className="mb-3">Discomfort while you are walking barefoot on the flat surface</li>
							<li className="mb-3">Discomfort while you are wearing tight shoes</li>
							<li className="mb-3">Above the average <Link href="https://bottomlineinc.com/health/foot-health/easy-ways-to-strengthen-feet-to-reduce-pain-and-stiffness"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">stiffness in the forefoot area</a></Link></li>
							<li className="mb-3">Redness of the joint</li>
							<li className="mb-3">Your second toe is feeling numb</li>
						</ul>
						<div className="alert alert-primary" role="alert">
							<p><strong>EDITOR&apos;S NOTE</strong></p>
							<p>We have to point out now that capsulitis of the second toe is a progressive condition.</p>
							<p>In some cases, it takes years to come to the point where you will experience some of the more severe symptoms we covered above.</p>
							<p>That is why you should pay even more attention to the milder ones and do not attribute any of them to weariness and tight footwear.</p>
							<p>Instead, act upon the first sign of any of them and schedule a meeting with your physician.</p>
						</div>

						<p>&nbsp;</p>
						<h2 id="treating-capsulitis" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Finding A Way For Treating Capsulitis</h2>
						<p>Now that we&apos;ve covered all these basics, we can afford a little breather and tell you that capsulitis can be successfully treated and even completely cured.</p>
						<p>But, this useful piece of info comes with a big disclaimer.</p>
						<p>All these things are valid if the condition is discovered and treated in its early stages.</p>
						<p>So, feel free to go back and give the symptoms another round of reading.</p>
						<p>If you delay the treatment more than necessary and allow the condition to hit the later stages, we are afraid that the only way to put an end on capsulitis will be a complicated operation and prolonged recovery.<br />Also, neither of the methods we are going to cover are a substitute for a medical examination.</p>
						<p>Look at them more as a way to mitigate your well-structured recovery plan and relieve pain.</p>
						<p>So, without further ado, let us quickly go through some of the most popular and efficient methods for treating capsulitis.</p>

						<h3 id="resting-the-feet" className="mt-5">Resting the feet</h3>
						<p>As we already briefly mentioned, capsulitis of the second toe often develops as a result of strenuous physical activity.</p>
						<p>Therefore, the first step in recovery should be giving the affected foot much necessary rest.</p>
						<p>Lowering physical activity alleviates pressure on your joints and gives the inflamed ligaments more time to recover.</p>

						<h3 id="ice" className="mt-5">Applying the ice on the affected area</h3>
						<p>This can be classified as common knowledge, but it&apos;s still worth additional discussion.</p>
						<p>Mostly because applying ice on the injured joints and inflamed ligaments do not exactly help them recover.</p>
						<p>So, if you think cold items are somehow healing your injured joints, you are not entirely right.</p>
						<p>But, if you need a cheap and efficient way to numb the pain, cope with the symptoms, and ease your way into the physical therapy, ice can prove to be an incredibly valuable asset.</p>

						<h3 id="stretching" className="mt-5">Stretching exercises</h3>
						<p>Stretching exercises were always considered an efficient way to treat various conditions involving joints and ligament inflammation, and, in that regard, capsulitis of the second toe is not that different.</p>
						<p>Here are a couple of movements that have, by now, produced the best results with patients in different stages.</p>
						<h4 className="mt-5">Toe extensor stretch</h4>
						<div className="youtube-video-container mt-3 mb-5">
							<iframe 
								className="shadow rounded"
								width="560" 
								height="315" 
								src="https://www.youtube.com/embed/h2kaEOd3GcI?controls=0" 
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen>
							</iframe>
						</div>

						<h4 className="mt-3">Stretching the calf</h4>
						<div className="youtube-video-container mt-3 mb-5">
							<iframe 
								className="shadow rounded"
								width="560" 
								height="315" 
								src="https://www.youtube.com/embed/R_YTlylgusg?controls=0" 
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen>
							</iframe>
						</div>

						<h4 className="mt-3">Toe curl</h4>
						<div className="youtube-video-container mt-3 mb-5">
							<iframe 
								className="shadow rounded"
								width="560" 
								height="315" 
								src="https://www.youtube.com/embed/xTm8hwEX-nI?controls=0" 
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen>
							</iframe>
						</div>

						<h4 className="mt-3">Toe lift</h4>
						<div className="youtube-video-container mt-3 mb-5">
							<iframe 
								className="shadow rounded"
								width="560" 
								height="315" 
								src="https://www.youtube.com/embed/Sxxf6AoDjlw?controls=0" 
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen>
							</iframe>
						</div>

						<h3 id="physical-therapy" className="mt-5">Physical therapy</h3>
						<p>Of course, all of the stretching exercises we have mentioned above are a way to make your recovery efforts more efficient.</p>
						<p>But, carefully structured physical therapy guided by professional medical technicians should be a pillar of your healing process.</p>
						<p>So, act upon the first symptoms of capsulitis and pay a visit to your physician.</p>

						<h3 id="orthotics" className="mt-5">Arch support orthotics</h3>
						<p>Arch support orthotics can be best described as medical treatments specially developed by physicians to promote support to your feet.</p>
						<p>So, it&rsquo;s not like you can simply go to a medical store and buy them &ndash; they need to be carefully designed and molded after your feet.</p>
						<p>However, the results are worth the trouble &ndash; these footwear inserts perform an excellent job in relieving pain, providing support, correcting feet movement, and do a lot of heavy lifting in capsulitis therapy.</p>

						<h3 id="footpads" className="mt-5">Footpads</h3>
						<p>Footpads are somewhat simplified and, admittedly, less efficient counterparts to our previous mention.</p>
						<p>Still, they are reasonably affordable, widely accessible, and greatly improve shock absorption of your footwear, especially if your job entails a lot of standing and requires you to wear formal shoes.</p>
						<p>So, you can lose very little by buying yourself a pair.</p>

						<h3 id="shoes" className="mt-5">Comfortable shoes</h3>
						<p>This is probably one of the best things you can do for your feet, regardless of whether you are developing capsulitis symptoms or not.</p>
						<p>Our feet are, by their nature, one of the body parts that experience the most pressure and attrition over the course of a day.</p>
						<p>The worst thing we can do is to put them into a pair of uncomfortable shoes that will make these problems even worse.</p>
						<p>Take this issue even more seriously if you engage in some demanding athletic activity like running on a daily basis.</p>

						<h3 id="taping" className="mt-5">Taping</h3>
						<p>Taping is a somewhat crude but still very simplistic way to put the affected toe into a position that reduces the risk of further injury.</p>
						<p>But, that&apos;s not all &ndash; you also get faster recovery time as an added bonus.</p>
						<p>Of course, the best way to do this is with the medically approved Kinesio tape (you want to produce the least discomfort possible).</p>

						<h3 id="anti-inflammatory-medication" className="mt-5">Anti-inflammatory medication</h3>
						<p>This is the last method you can resort to before you have to rely on surgical procedures.</p>
						<p>But, on a more positive note, anti-inflammatory medication and cortisone injections have proved to be quite efficient in fighting foot capsulitis.</p>
						<p>So as long as you make timely visits to your physician, you have nothing to fear.</p>


						<p>&nbsp;</p>
						<h2 id="conclusion" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Conclusion</h2>
						<p>We hope these few lines drew your attention to a severe medical condition that, due to mild and very common initial symptoms, often ends up lost in the shuffle until the surgical procedure becomes the last viable treatment.</p>
						<p>Pay special attention to everything we covered if you are an active runner or engage in some other strenuous physical activity.</p>
						<p>The human body is a near-perfect mechanism designed to sustain a lot of attrition and achieve incredible physical feats.</p>
						<p>However, much like any other similar device, this one also requires careful and devoted maintenance.</p>
						<p>So, be sure to do your part.</p>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
