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
	const postId = 34;
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
						<p>I can bet that many of you that read this post are supporters of that famous mantra &quot;If it ain&rsquo;t hurting it ain&rsquo;t working&quot;.</p>
						<p>That is a very hazardous way of thinking because you can never know when the pain is an ordinary ache or potential injury.</p>
						<p>Of course, we all get through injuries at some point, but you got to learn when to run through your pain, and when is the time to stop and rest, and even it&rsquo;s time to consult your doctor.</p>
						<p>With time we all learn to listen to our body and to recognize when the pain is routine twinge and when our body tries to indicate to us that something is wrong.</p>
						<p>So when something hurts you that much that you can&rsquo;t even walk it is time to go and visit your doctor.</p>
						<p>Many of us live with some long-term injuries or congenital deformity like forefoot varus for example, that we aren&apos;t even aware of so we push them harder and harder daily until they reach their breaking point, and as usual, when we do realize it, it is already too late.</p>
						<p>That&rsquo;s why I&rsquo;m here to help you understand how to distinguish common running injuries and some serious health issues.</p>
						<p>If you are suffering from forefoot varus, don&rsquo;t let it discourage you.</p>
						<p>There are plenty of things you can do to make your condition better, and it will also allow you to continue running.</p>
						<p>All you need to do is to read my article until the end, and I guarantee it will change your point of view.</p>
						{ /* kimjiwon */ }
						<ul>
							<li><Link href="#what-is-forefoot-varus"><a className="text-decoration-none">What is Forefoot Varus?</a></Link></li>
							<li><Link href="#symptoms"><a className="text-decoration-none">Symptoms of a Forefoot Varus</a></Link></li>
							<li><Link href="#causes"><a className="text-decoration-none">What Can Cause Forefoot Varus?</a></Link></li>
							<li><Link href="#problems-that-are-related-to-forefoot-varus"><a className="text-decoration-none">Problems that are Related To Forefoot Varus</a></Link></li>
							<li><Link href="#how-to-diagnose-forefoot-varus-forefoot-supinatus"><a className="text-decoration-none">Difference between Forefoot Varus and Forefoot Supinatus and How To Diagnose Them</a></Link></li>
							<li><Link href="#treatments"><a className="text-decoration-none">Treatments for Forefoot Varus</a></Link></li>
							<li><Link href="#custom-made-orthotics"><a className="text-decoration-none">What are Custom-made Orthotics and How They Affect Forefoot Varus?</a></Link></li>
							<li><Link href="#what-forefoot-varus-means-for-runners"><a className="text-decoration-none">What Forefoot Varus Means for Runners?</a></Link></li>
							<li><Link href="#conclusion"><a className="text-decoration-none">Conclusion</a></Link></li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="what-is-forefoot-varus" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What is Forefoot Varus?</h2>
						<div className="d-flex justify-content-center mb-5 shadow rounded">
							<Image
								src="https://res.cloudinary.com/muru/image/upload/v1634259149/forefoot-varus/xray-foot-varus-valgus-deformity-1st_womp1y.jpg" 
								width="730" 
								height="682"
								alt="xray foot varus-valgus deformity 1st" 
							/>
						</div>
						<p>Forefoot varus is a congenital structural deformity of the foot.</p>
						<p>This means that the forefoot has an inverted angle in comparison to the heel.</p>
						<p>But let me clear it up a bit better for you - this deformity makes bones in your inner part of the forefoot sit in a higher position then bones that are located on the outside of your foot.</p>
						<p>When you are suffering from forefoot varus deformity, your foot will have just two points of contact while you are standing on the ground.</p>
						<p>Those spots are the heel and the bones on the outer side of the foot.</p>
						<p>That will make heel to compensate and evert so that inner bones of the foot can make contact with the ground.</p>
						<div className="d-flex justify-content-center mb-5 shadow rounded">
							<Image
								src="https://res.cloudinary.com/muru/image/upload/v1634259328/forefoot-varus/illustration-of-normal-planovalgus-varus-feet-footprint_ubvomc.jpg" 
								width="730" 
								height="1022"
								alt="illustration of normal planovalgus varus feet footprint" 
							/>
						</div>

						<p>&nbsp;</p>
						<h2 id="symptoms" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Symptoms of a Forefoot Varus</h2>
						<p>Symptoms of forefoot varus generally start as mild symptoms, but they tend to progress with activity and age.</p>
						<p>Most common symptoms are:</p>
						<ul>
							<li className="mb-1">Ankle pain</li>
							<li className="mb-1"><Link href="/best-running-shoes-for-achilles-tendonitis"><a className="text-decoration-none">Achilles tendon</a></Link> pain</li>
							<li className="mb-1"><Link href="/difference-between-shin-splints-and-stress-fracture"><a className="text-decoration-none">Shin pain</a></Link></li>
							<li className="mb-1">Knee pain</li>
							<li className="mb-1">Muscle fatigue in shin calf</li>
							<li className="mb-1"><Link href="/best-running-shoes-for-heel-pain"><a className="text-decoration-none">Pain in the heel</a></Link> and arch</li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="causes" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What Can Cause Forefoot Varus?</h2>
						<p>There are two main factors that cause forefoot varus:</p>

						<h3 className="mt-3">Birth defects</h3>
						<p>Mainly defect in the structure of the foot occurs during birth.</p>
						<p>It is more common for boys than girls, and it is estimated to be found in around 1-3 babies in 1000 newborns.<br />As the child grows, the angle of the forefoot decreases, and it should be fully corrected by the age of three.</p>
						<p>If that doesn&apos;t happen, you should consult the doctors.</p>

						<h3 className="mt-5">Foot injury</h3>
						<p>Injuries will cause misalignment of the bones in your foot, and that can trigger the forefoot varus.</p>

						<p>&nbsp;</p>
						<h2 id="problems-that-are-related-to-forefoot-varus" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Problems that are Related To Forefoot Varus</h2>
						<div className="d-flex justify-content-center mb-5 shadow rounded">
							<Image
								src="https://res.cloudinary.com/muru/image/upload/v1634259995/forefoot-varus/foot-deformation-medical-desease-infographic-valgus_vtwldj.jpg" 
								width="730" 
								height="612"
								alt="foot deformation medical desease infographic valgus" 
							/>
						</div>
						<p>To ensure maximum stability of the foot while standing, walking or running, a healthy foot should normally rest on the ground in &quot;tripod foot&quot; position (heel, little toe joint, and big toe joint standing on the ground).</p>
						<p>This position allocates the weight of your body equally between the inner and outer bones of your forefoot and heel.</p>
						<p>But as I said, the forefoot varus only have two points of contact with the ground.</p>
						<p>That leads to compromising the alignment of the ankle, knees, hips, and back and that situation can cause a lot of damage:</p>

						<h3 className="mt-5">Plantar Fasciitis</h3>
						<p>The primary cause of <Link href="/best-socks-for-plantar-fasciitis"><a className="text-decoration-none">plantar fasciitis</a></Link> is excessive pronation of the foot.</p>
						<p>When the foot pronates, the arch goes down, and plantar fascia (ligament) get stretched to the maximum.</p>
						<p>This could cause sharp pain, especially if you were resting for a longer period of time.</p>
						<p>The main reason for excessive pronation is forefoot varus.</p>

						<h3 className="mt-5"><Link href="/best-running-shoes-for-bunions"><a className="text-decoration-none">Bunion formation</a></Link></h3>

						<h3 className="mt-5">Joint pain in knees, hips, ankles, and back</h3>
						<p>Healthy and natural alignment of the feet, knees, and hips will improve your balance and stabilize your core which will also improve your body posture.</p>
						<p>The pronated foot will cause the unnatural alignment of your knees and hips, which can have a major impact on body fatigue and cause pain.</p>

						<h3 className="mt-5">Destabilization during walking or running</h3>

						<h3 className="mt-5">Reducing the shock absorption during walking and running</h3>
						<p>The arch of your foot has a role in absorbing the shock while you run or walk, but due to deformity of your foot, the arch loses the ability to function correctly.</p>

						<p>&nbsp;</p>
						<h2 id="how-to-diagnose-forefoot-varus-forefoot-supinatus" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Difference between Forefoot Varus and Forefoot Supinatus and How To Diagnose Them</h2>
						<p>Sadly, these two conditions are often mistaken one for another.</p>
						<p>The main difference is that the forefoot varus is inherited and the forefoot supinatus acquired during the time as a result of weak arches.</p>
						<p>Luckily, forefoot supinatus can be easily reversed with regular exercising and building up the muscles in the arches.</p>
						<p>While on the other hand, forefoot varus can&apos;t be reversed, and in extreme cases, it requires surgery.</p>
						<p>It is crucial to know how to distinguish between these two conditions.</p>
						<p>You can easily do it on your own in the comfort of your home.</p>
						<p>The procedure is simple for both conditions with minor differences.</p>
						<p><Link href="https://www.physio-pedia.com/Biomechanical_Assessment_of_Foot_and_Ankle"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">To diagnose the forefoot varus</a></Link> follow these simple instructions:</p>
						<p><strong>Step 1:</strong></p>
						<p>Bend your knee over the chair.</p>
						<p><strong>Step 2:</strong></p>
						<p>Apply the force on your forefoot in the base of joints between the 4th and 5th toe.</p>
						<p><strong>Step 3:</strong></p>
						<p>Make sure you are aligning the forefoot with your heel while applying the pressure.</p>
						<p><strong>Step 4:</strong></p>
						<p>If the base of the big toe is higher then alignment of the forefoot and heel, you are suffering from forefoot varus.</p>
						<p><strong>Step 5:</strong></p>
						<p>The next step will clarify it as flexible or rigid - you need to apply the force on the crown of the metatarsal in the opposite direction.</p>
						<p>If your forefoot position doesn&apos;t level-out with the heel, then it&apos;s rigid forefoot varus.</p>
						<div className="alert alert-warning">
							<p>When diagnosing the forefoot supinatus, you will need to follow the first four steps.</p>
							<p>The only difference is in the final step where you apply pressure on the metatarsal in the opposite direction and if the forefoot level-out with the heel, then the varus is flexible.</p>
							<p>And you are suffering from forefoot supinatus.</p>
						</div>

						<p>&nbsp;</p>
						<h2 id="treatments" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Treatments for Forefoot Varus</h2>
						<div className="d-flex justify-content-center mb-5 shadow rounded">
							<Image
								src="https://res.cloudinary.com/muru/image/upload/v1634260958/forefoot-varus/foot-deformation-medical-desease-infographic-valgus-1_lgfc59.jpg" 
								width="730" 
								height="458"
								alt="foot deformation medical desease infographic valgus and varus" 
							/>
						</div>
						<p>Treatment of forefoot varus depends on the severity of the condition and when it is detected.</p>
						<p>If the deformity is detected in early stages, the recommended treatment will be wearing corrective orthotics and adequate footwear.</p>
						<p>If the patient refuses the recommended treatment, the deformity will progress further, and then the only available option is surgery.</p>
						<p>There are two types of treatments:</p>
						<p><strong>Maintenance</strong> - This involves using a cast, or your podiatrist can recommend you using a custom-made orthotic.</p>
						<p><strong>Surgery</strong> - This requires correction of the bones and soft tissues in your foot.</p>

						<p>&nbsp;</p>
						<h2 id="custom-made-orthotics" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What are Custom-made Orthotics and How They Affect Forefoot Varus?</h2>
						<div className="d-flex justify-content-center mb-5 shadow rounded">
							<Image
								src="https://res.cloudinary.com/muru/image/upload/v1634261326/forefoot-varus/orthopedic-insole-orthotic-arch-support_zsdixt.jpg" 
								width="730" 
								height="322"
								alt="orthopedic insole orthotic arch support" 
							/>
						</div>
						<p>Orthotics are always prescribed by a physician.</p>
						<p>Custom made orthotics have a purpose of supporting the skeleton, muscles, and foot in the correct position.</p>
						<p>They are a long-term solution for preventing reappearance by correcting and controlling the main cause of this deformity.</p>
						<p>It is crucial that orthotics have a forefoot post or wedge under the first metatarsal head, and a heel cup with medial longitudinal arch support to help with the alignment of your foot.</p>
						<p>This way, you will trick your foot into thinking it is down on the ground.</p>

						<p>&nbsp;</p>
						<h2 id="what-forefoot-varus-means-for-runners" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What Forefoot Varus Means for Runners?</h2>
						<p>When you are suffering from this sort of deformity, your foot will stay on the ground for an extended period when trying to achieve stability during a run.</p>
						<p>The problem is that this condition reduces the shock absorption during the walk or a run, and that makes you more prone to an injury.</p>
						<p>If you are a runner who is suffering from chronic injuries, and you tried all types of running shoes and none helped, you might consider that the problem is in your forefoot imbalance.</p>
						<p>Unfortunately, there are still no shoes that are specifically made for forefoot varus deformity, but you should try using your orthotic with the motion-control shoes.</p>
						<p>The point is that an orthotic is made to correct the positioning of your foot, so it is logical to think that it is best to be used with the shoes that do the same.</p>
						<p>The main problem is (like I already mentioned) that the runner&apos;s foot stays too long in shock-absorbing phase, so that makes your foot, ankle, shin, knee, and hip work harder to adapt and propulse on the ground, risking the injuries and pain.</p>
						<p>So using the motion-control shoes will help you guide the foot through contact, shock absorption, adaptation, and propulsion so the stresses you put on your foot, leg and knee will be downsized to a minimum as well the risk of pain and injury.</p>

						<p>&nbsp;</p>
						<h2 id="conclusion" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Conclusion</h2>
						<p>As you can see from all that I just wrote above, forefoot varus is not a regular runners injury that you can treat over time.</p>
						<p>It&rsquo;s a lifetime health condition that you need to maintain on a daily basis to prevent further deterioration.</p>
						<p>I understand that when you learn about how this condition is untreatable, you just lose interest in maintaining it, but this is very important because that is the only way of preventing the inevitable - having a surgery.</p>
						<p>If you are a proactive runner and you have some unexplained issues while running your miles I recommend you to do a home test that I mentioned before or visit your physician and clarify your doubts.</p>
						<p>He will make sure that you get all the right information and treatments that your current condition requires.</p>
						<p>I hope I&rsquo;ve introduced you to this topic and convince you to start taking care about the pain and signals your body might be sending to you.</p>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
