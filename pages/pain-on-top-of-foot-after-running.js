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
	const postId = 50;
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
						<p>You feel pain across the top of your foot with some swelling after running?</p>
						<p>The pain gets worse when you run, walk, and even touching the affected area causes sharp pain, and it&apos;s better with rest?</p>
						<p>So:</p>
						<p>Top foot pain is all but a problem that you should overlook.</p>
						<p>Today, you&apos;re going to learn the causes of this injury, how you can prevent it, and the treatments you can use when things are past this point.</p>
						<p>If you&apos;d love to get back to running as soon as possible, you will love this article.</p>
						<p>Let&apos;s get started!</p>
						<ul>
							<li><Link href="#what-are-we-exactly-dealing-with"><a className="text-decoration-none">What are We Exactly Dealing With?</a></Link></li>
							<li><Link href="#first-symptoms"><a className="text-decoration-none">The First Symptoms</a></Link></li>
							<li><Link href="#simple-test"><a className="text-decoration-none">A Simple Test to Identify Foot Extensor Tendonitis</a></Link></li>
							<li><Link href="#causes-for-pain-on-top-of-foot-after-running"><a className="text-decoration-none">Causes for Pain on Top of Foot After Running</a></Link></li>
							<li><Link href="#how-you-can-avoid-alleviate-extensor-tendonitis"><a className="text-decoration-none">How You Can Avoid/Alleviate Extensor Tendonitis</a></Link></li>
							<li><Link href="#how-to-treat-foot-extensor-tendonitis"><a className="text-decoration-none">How To Treat Foot Extensor Tendonitis?</a></Link></li>
							<li><Link href="#conclusion"><a className="text-decoration-none">Conclusion</a></Link></li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="what-are-we-exactly-dealing-with" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What are We Exactly Dealing With?</h2>
						<p>The specific injury we are going to talk about in this article is called foot extensor tendonitis.</p>
						<p>It is the inflammation of foot tendons &ndash; a condition that tends to cause severe pain and can even prevent you from running as time goes by.</p>
						<div className="d-flex justify-content-center mb-5 shadow rounded">
							<Image
								src="https://res.cloudinary.com/muru/image/upload/v1634352711/pain-on-top-of-foot-after-running/Extensor-tendonitis-definition-Custom_vss4qu.png" 
								width="730" 
								height="612"
								alt="Top foot pain aka Foot Extensor Tendonitis" 
							/>
						</div>
						<p>The problem with foot extensor tendonitis is that the discomfort caused by this specific condition can be easily confused with some other similar running-caused traumas like physical injuries and pain caused by overly tight shoelaces.</p>
						<p>Both these latter mentions are not that severe and can be rooted out with a bit of ice and a couple of days of resting.</p>
						<p>Foot extensor tendonitis, on the other hand, is something completely different.</p>
						<p>So:</p>
						<p>Let&apos;s first examine a couple of symptoms that are pointing out to developing tendonitis.</p>

						<p>&nbsp;</p>
						<h2 id="first-symptoms" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>The First Symptoms</h2>
						<h3>Swelling, redness, and warmth near the injury area</h3>
						<p>These symptoms can also occur as a result of a physical injury but, if they continue to manifest on a daily basis, you should definitely consult your physician.</p>
						<h3 className="mt-5">Increased tenderness</h3>
						<p>If you are developing foot extensor tendonitis, the affected area should become increasingly tender.</p>
						<p>So much so that even the slight touch can cause sharp pain.</p>
						<h3 className="mt-5">Bruising</h3>
						<p>Although not one of the most common symptoms, in some cases, developing foot extensor tendonitis can manifest in the form of noticeable bruises above the injured area.</p>
						<h3 className="mt-5">Crepitus</h3>
						<p>If you are unfamiliar with this medical term, crepitus refers to the grating sensation or sound produced by friction between cartilage and the bone (or parts of the bone).</p>
						<p>If you notice this symptom, take that as a serious sign that you are not dealing with the ordinary physical trauma.</p>
						<h3 className="mt-5">Retracting and recurring symptoms</h3>
						<p>Most of the physical injuries take a couple of days to wear off.</p>
						<p>If you notice the signs appearing again as soon as you engage in physical activity, you should make an appointment with your physicians.</p>

						<p>&nbsp;</p>
						<h2 id="simple-test" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>A Simple Test to Identify Foot Extensor Tendonitis</h2>
						<div className="youtube-video-container my-5">
							<iframe 
								className="shadow rounded"
								width="560" 
								height="315" 
								src="https://www.youtube.com/embed/BZ7NI9kIzmQ?controls=0" 
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen>
							</iframe>
						</div>
						<p>You can try this simple test to tell if you have foot extensor tendonitis:</p>
						<p>Sit on the floor with your legs stretched out in front of you.</p>
						<p>Then try pulling your toes towards you; it would be a good idea that someone presses your toes to resist the movement.</p>
						<p>If you feel pain along the course of a tendon connecting your toes and the front of your ankle, you likely have the condition.</p>

						<p>&nbsp;</p>
						<h2 id="causes-for-pain-on-top-of-foot-after-running" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Causes for Pain on Top of Foot After Running</h2>
						<p>In the previous section, I have established that foot extensor tendonitis represents the inflammation of foot tendons.</p>
						<p>Now:</p>
						<p>Let&apos;s see what its causes are.</p>
						<p>In this way, you can remove the causes for discomfort, which will most certainly speed up the recovery.</p>

						<h3 className="mt-5">Friction/Tight shoes</h3>
						<p>Temporary irritation with tight shoes or laces can cause mild pain in the top area of your feet.</p>
						<p>However, if this kind of friction continues on a daily basis, your occasional ache can develop in a full-scale injury.</p>

						<h3 className="mt-5">Extensive physical activity</h3>
						<p>By activity, I may refer to something as simple as standing for extended periods of time.</p>
						<p>However, the chances of developing the condition can be drastically increased if you:</p>
						<ul>
							<li className="mb-3">Walk on uneven surfaces</li>
							<li className="mb-3">Frequently run downhill</li>
							<li className="mb-3">Use worn-out shoes</li>
							<li className="mb-3">Face problems with weight control</li>
						</ul>

						<h3 className="mt-5">Abnormal foot arches</h3>
						<p>This primarily refers to <Link href="/best-running-shoes-for-high-arches"><a className="text-decoration-none">people with high foot arches</a></Link> since they are more likely to produce pressure on the top of the feet.</p>
						<p>However, <Link href="/flat-feet-pronation"><a className="text-decoration-none">persons with flat feet</a></Link> have their tendons under more stress, so they are not out of danger either.</p>

						<h3 className="mt-5">Calf tightness</h3>
						<p>This case is similar to flat feet &ndash; if you have developed this condition, your body will try to compensate for the lack of mobility by <Link href="/tight-calves-after-running"><a className="text-decoration-none">putting more pressure on the extensor muscles when you are running</a></Link>.</p>
						<p>This problem becomes even more severe if you are a recreational runner and cover distances of five miles or more and more a day.</p>

						<p>&nbsp;</p>
						<h2 id="how-you-can-avoid-alleviate-extensor-tendonitis" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How You Can Avoid/Alleviate Extensor Tendonitis</h2>
						<p>Based on all the things I have just covered, these are a couple of preventive measures you can use to keep tendonitis on hold or alleviate its symptoms if you have already gone too far down the road.</p>
						<ul>
							<li className="mb-3">Wearing shoes that provide strong support to the feet and ankles</li>
							<li className="mb-3">Wearing terrain-appropriate and comfortable footwear</li>
							<li className="mb-3">Spending a couple of minutes stretching before running</li>
							<li className="mb-3">Taking occasional breaks while performing a repetitive or exhausting activity</li>
							<li className="mb-3">Strengthening up the leg muscles (primarily calf muscles)</li>
							<li className="mb-3">Loosening up the laces</li>
						</ul>
						<p>The video below teaches you a shoe lacing technique to reduce pressure on the top of your foot.</p>
						<div className="youtube-video-container mt-3 mb-5">
							<iframe 
								className="shadow rounded"
								width="560" 
								height="315" 
								src="https://www.youtube.com/embed/7BsViAtj7-o?controls=0" 
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen>
							</iframe>
						</div>

						<p>&nbsp;</p>
						<h2 id="how-to-treat-foot-extensor-tendonitis" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How To Treat Foot Extensor Tendonitis?</h2>
						<div className="alert alert-danger" role="alert">
							<p><strong>IMPORTANT</strong></p>
							<p>I urge you to visit your physician before applying any of these treatments.</p>
							<p>There is a high chance that your condition was not adequately diagnosed or that symptoms do not reflect the current stage of the trauma.</p>
							<p>These common mistakes, as well as the chances of dislocation or <Link href="https://www.healthline.com/health/advancing-rheumatoid-arthritis/rheumatoid-arthritis-in-feet"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">developing arthritis</a></Link>, can be quickly ruled out after an X-ray, MRI, or CT scan.</p>
							<p>When you finish the examination at the medical facility, you will, most likely, be advised to start applying one of the following treatments (depending on the severity of the problem).</p>
						</div>
						<h3 className="mt-5">Resting</h3>
						<p>Foot extensor tendons are going under a lot of stress even when you are performing mundane activities like standing or walking.</p>
						<p>So, the first step in treating tendonitis should be giving these sensitive anatomical structures a proper time to rest and recuperate.</p>
						<h3 className="mt-5">Ice treatments</h3>
						<p>This method is especially efficient if you are experiencing stinging pain and excessive swelling.</p>
						<p>However, the main goal of ice treatment, in this case, is reducing the inflammation.</p>
						<p>Therefore, be sure to keep the ice packs pressed to the affected area for at least 15 minutes in a row.</p>
						<p>The treatments should be applied every four hours.</p>
						<h3 className="mt-5">Compression</h3>
						<p>Compression is performed by wrapping up the elastic bandage around the hurt foot.</p>
						<p>Fortunately, these items are very inexpensive and can be found in any sports equipment store.</p>
						<h3 className="mt-5">Elevation</h3>
						<p>This method is not exactly aimed at relieving inflammation as much as reducing swelling.</p>
						<p>All you need to do is to raise your feet above the heart level.</p>
						<p>For instance, if you are sitting, your feet can be simply elevated on a chair or a stool.</p>
						<p>When you are lying, you can achieve the same effect with nothing but an ordinary cushion.</p>
						<h3 className="mt-5">Leg and foot exercises</h3>
						<p>I have already mentioned this method as a preventive measure, but since foot extensor tendons are constantly in use strengthening calf muscles can drastically speed up the recovery.</p>
						<p>Here are a couple of <Link href="https://www.webmd.com/fitness-exercise/strengthening-calf-muscles#1"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">simple calf-strengthening exercises</a></Link> and <Link href="https://www.livestrong.com/article/324758-foot-extensor-tendon-exercises/"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">foot extensor stretches</a></Link> to get you going:</p>
						<h4>Double-leg calf raise</h4>
						<div className="youtube-video-container mt-3 mb-5">
							<iframe 
								className="shadow rounded"
								width="560" 
								height="315" 
								src="https://www.youtube.com/embed/1-e4EgueAwU?controls=0" 
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen>
							</iframe>
						</div>

						<h4>Single-leg calf raise</h4>
						<div className="youtube-video-container mt-3 mb-5">
							<iframe 
								className="shadow rounded"
								width="560" 
								height="315" 
								src="https://www.youtube.com/embed/uyviVgy6tDA?controls=0" 
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen>
							</iframe>
						</div>

						<h4>Seated calf raise</h4>
						<div className="youtube-video-container mt-3 mb-5">
							<iframe 
								className="shadow rounded"
								width="560" 
								height="315" 
								src="https://www.youtube.com/embed/Lv9rklLUp2k?controls=0" 
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen>
							</iframe>
						</div>

						<h4>Food extensor stretch #1: Toe raises</h4>
						<div className="youtube-video-container mt-3 mb-5">
							<iframe 
								className="shadow rounded"
								width="560" 
								height="315" 
								src="https://www.youtube.com/embed/gRHg6v6-szc?controls=0" 
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen>
							</iframe>
						</div>

						<h4>Food extensor stretch #2: Towel toe curls</h4>
						<div className="youtube-video-container mt-3 mb-5">
							<iframe 
								className="shadow rounded"
								width="560" 
								height="315" 
								src="https://www.youtube.com/embed/dVDMUuWtX00?controls=0" 
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen>
							</iframe>
						</div>

						<h3 className="mt-5">Swimming</h3>
						<p>If you want to stay active, swimming, or running in the pool help strengthen your calves, and take the pressure away from your feet caused by running.</p>

						<h3 className="mt-5">Medication</h3>
						<p>Using medication during the recovery doesn&apos;t have to mean you are dealing with something dangerous.</p>
						<p>In most cases, your physician will prescribe non-steroidal drugs like naproxen and ibuprofen that are used to reduce inflammation.</p>
						<p>However, in some of the more severe cases, the same effect can be achieved only with the help of steroid injections.</p>
						<h3 className="mt-5">Physiotherapy</h3>
						<p>Physiotherapy is used only when all other methods I have listed above don&rsquo;t produce desired results.</p>
						<p>However, you don&rsquo;t have to be afraid since this type of treatment uses only non-invasive and non-strenuous techniques like:</p>
						<ul>
							<li className="mb-3">Reducing pain with thermal and electrical modalities</li>
							<li className="mb-3">Stretching out calf muscles</li>
							<li className="mb-3">Working out neglected leg muscles</li>
							<li className="mb-3">Retraining walking and running patterns</li>
							<li className="mb-3">Reducing swelling with ice and proper position</li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="conclusion" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Conclusion</h2>
						<p>As we can see, the pain that appears on the top of the foot after running is a problem that is very easy to address, at least in terms of physical therapies.</p>
						<p>If identified timely, your recovery can be over in no more than 3-4 four days.</p>
						<p>More severe traumas, on the other hand, may require up to six weeks of therapy.</p>
						<p>Still, the good news is that neither of these cases requires surgical procedure or some different invasive medical technique.</p>
						<p>However, the only real way to forever fend off foot extensor tendonitis lies in prevention.</p>
						<p>If you don&apos;t correct your posture, improve your running patterns, listen to your body, and find a way to strengthen your leg muscles, foot tendons will continue to sustain heavy pressure, and you will have to deal with this condition sooner than later.</p>
						<p>Keep this in mind before going on the next long-distance run.</p>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
