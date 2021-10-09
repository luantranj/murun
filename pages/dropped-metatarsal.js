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
	const postId = 4;
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
						<p>Pain in the ball of the foot is a symptom that is often either overlooked or misdiagnosed.</p>
						<p>Moreover, many people attribute this condition to uncomfortable shoes or overuse and think that it will go away with some rest.</p>
						<p>Although uncomfortable shoes or overuse can contribute to this pain and the rest may help, there are usually other factors like structural abnormality, that lay beneath this problem.</p>
						<p>I&rsquo;ve always attributed foot pain to my <Link href="/flat-feet-exercises"><a className="text-decoration-none">flat feet</a></Link>.</p>
						<p>However, after the pain in the ball of the foot started getting worse even with all the treatments that I&rsquo;ve tried, I figured out that there is probably some other problem that is causing this pain, and I was right.</p>
						<p>The pain in the ball of the foot was caused by dropped metatarsal.</p>
						<p>Dropped metatarsal is one of the most common and overlooked cause of the pain in the ball of the foot.</p>
						<p>If you have similar problem and want to know more about the symptoms, causes and how to treat it, please read on.</p>
						<ul>
							<li><Link href="#what-is-dropped-metatarsal"><a className="text-decoration-none">What is Dropped Metatarsal?</a></Link></li>
							<li><Link href="#classification"><a className="text-decoration-none">Classification</a></Link></li>
							<li><Link href="#what-are-the-causes-of-dropped-metatarsal"><a className="text-decoration-none">What are The Causes of Dropped Metatarsal?</a></Link></li>
							<li><Link href="#what-are-the-symptoms"><a className="text-decoration-none">What are The Symptoms and How to Recognize Dropped Metatarsal?</a></Link></li>
							<li><Link href="#how-to-treat-dropped-metatarsal"><a className="text-decoration-none">How to Treat Dropped Metatarsal?</a></Link></li>
							<li><Link href="#can-metatarsal-pads-help"><a className="text-decoration-none">Can Metatarsal Pads Help?</a></Link></li>
							<li><Link href="#conclusion"><a className="text-decoration-none">Conclusion</a></Link></li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="what-is-dropped-metatarsal" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What is Dropped Metatarsal?</h2>
						<div className="d-flex justify-content-center mb-5 shadow rounded">
							<Image
								src="https://res.cloudinary.com/muru/image/upload/v1632988367/best-running-shoes-for-metatarsalgia/what-is-dropped-metatarsal_sh4kur.jpg" 
								width="730" 
								height="650"
								alt="Ball of Foot Pain (Metatarsalgia)" 
							/>
						</div>
						<p>You are probably asking yourself &ndash; what are metatarsals and how and where they are dropped?</p>
						<p>Well, let&rsquo;s start with the explanation of metatarsals first.</p>
						<p>Metatarsals are bones that connect the toe bones to the midfoot.</p>
						<p>There are five metatarsal bones, connected with each toe individually.</p>
						<p>In normal cases, these bones are lined up with each other evenly in order to share the weight and stress that our bodies put on the foot with every step that we take.</p>
						<p>Because of their position and curvature, they also have an important role in development of the arch of the foot.</p>
						<p>Dropped metatarsal, also known as plantar flexed metatarsal, is a medical condition in which one of the metatarsal bones is positioned lower than the other metatarsal bones, causing uneven stress and weight distribution.</p>
						<p>It usually affects the second metatarsal bone which is next to metatarsal bone of a big toe.</p>
						<p>In this medical condition, the dropped metatarsal hits the ground first during the gait cycle, taking most of the weight and stress from each step by itself.</p>
						<p>The similar situation is also present in other weight bearing activities such as jumping, running or just standing.</p>
						<p>Because one bone is not meant to deal with all this weight, the surrounding tissues become irritated and inflamed, causing pain in the ball of the foot which is also known as metatarsalgia.</p>
						<p>Bigger friction of skin and dropped metatarsal can also cause thickening and hardening of the skin beneath the metatarsal, also known as callus.</p>
						<p>Many people use the term metatarsalgia for dropped metatarsal.</p>
						<p>However, that is not the correct term.</p>
						<p>Metatarsalgia is a general term for any pain in the ball of the foot.</p>
						<p>This pain can be a symptom of many other medical conditions, not just plantar flexed metatarsal.</p>

						<p>&nbsp;</p>
						<h2 id="classification" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Classification</h2>
						<p>Metatarsalgia can be classified as <strong>primary</strong>, <strong>secondary</strong>, and <strong>iatrogenic</strong>.</p>

						<h3 className="mt-5">Primary metatarsalgia</h3>
						<p>Primary metatarsalgia is caused due to anatomical characteristics of the metatarsals and how they affect one another and the rest of the foot.</p>
						<p>For example, if you suffer from the disproportional length of the second and third metatarsal bone, hallux valgus, a congenital deformity of the metatarsal head, fixed equinus of the foot and more.</p>

						<h3 className="mt-5">Secondary metatarsalgia</h3>
						<p>Secondary metatarsalgia is caused by overburdening your metatarsal bones via systematic conditions like chronic synovitis, vascular disease, and especially diabetic neuropathy.</p>
						<p>It can also occur if you are suffering from arthritis, psoriasis, or due to neurological disorders like metatarsal malunion.</p>

						<h3 className="mt-5">Iatrogenic metatarsalgia</h3>
						<p>Iatrogenic metatarsalgia may occur if you had reconstructive foot surgery (considered as the failed one) since it tends to increase the chances of getting one.</p>
						<p>For example, if you had a hallux valgus surgery, it can cause excessive shortening of the first metatarsal, which leads to overburdening the second and third metatarsal rays.</p>

						<p>&nbsp;</p>
						<h2 id="what-are-the-causes-of-dropped-metatarsal" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What are The Causes of Dropped Metatarsal?</h2>
						<h3 className="mt-5">Inherited foot deformity as the primary cause of dropped metatarsal</h3>
						<p><Link href="http://www.cdafootankle.com/metatarsalgia/"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">The primary cause</a></Link> of dropped metatarsal is abnormal foot structure and biomechanics, which are hereditary abnormalities.</p>
						<p>Structural defects such as <Link href="/best-running-shoes-for-high-arches"><a className="text-decoration-none">high arched</a></Link> or flat feet can put extra weight and stress on metatarsals, especially flat feet.</p>
						<p>The reason for this is simple &ndash; <Link href="/flat-feet-pronation"><a className="text-decoration-none">people with flat feet usually tend to excessively pronate</a></Link> (turn the sole of the foot inward) and put more stress on the medial metatarsals than the ones that are outward.</p>
						<p>This is also the reason why the most commonly dropped metatarsal is <Link href="/capsulitis-of-the-second-toe"><a className="text-decoration-none">the second one</a></Link>.</p>
						<p>Another structural abnormality that may be the cause of plantar flexed metatarsal is a longer second toe than the big toe.</p>
						<p>Similar to previous problem, longer second toe along with second metatarsal is more exposed to weight and stress during weight bearing activities, causing irritation, inflammation and pain.</p>
						<p>As with all medical conditions that are the result of both genetics and environmental factors, there are <Link href="https://patient.info/health/heel-and-foot-pain-plantar-fasciitis/metatarsalgia-metatarsal-injury"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">various factors that can contribute</a></Link> to the development of a dropped metatarsal.</p>

						<h3 className="mt-5">Unfitting footwear</h3>
						<p>Women who wear high heel are more often diagnosed with dropped metatarsal and metatarsalgia.</p>
						<p>High heels cause more weight to be transferred to the forefoot and higher possibility to get a dropped metatarsal and pain in the ball of the foot.</p>
						<p>Tight shoes with narrow toe boxes and those without proper support and cushioning can also lead to plantar flexed metatarsal and other metatarsal problems.</p>
						<p>Actually, improper footwear is one of the most common factors that contributes to manifestation of dropped metatarsal in people who are already at risk because of their inherited abnormal foot structure.</p>

						<h3 className="mt-5">Overweight</h3>
						<p>Dropped metatarsal is another condition caused by the excessive weight.</p>
						<p>Excess weight means more pressure on the foot and metatarsals, leading to higher risk for plantar flexed metatarsal and pain in the ball of the foot.</p>

						<h3 className="mt-5">Other foot deformities like hammertoes or bunions</h3>
						<p>Hammertoes can cause retrograde pressure on the metatarsals, causing higher chance for one of them to be dropped.</p>
						<p><Link href="/best-running-shoes-for-bunions"><a className="text-decoration-none">Bunions</a></Link> cause the weakening of big toes, leading to extra stress on the ball of the foot.</p>
						<p>Tight toe extensors in your feet attach the muscles located at the front of your legs with toes.</p>
						<p>Since they run across the top of your feet with very thin padding to protect them from injuries, they are very vulnerable.</p>
						<p>When they become too weak, they affect your ability to move toes, and even simple things like standing can become a nightmare.</p>
						<p>After some time, this will affect the ball of the foot since all the extra stress will be located there.</p>

						<h3 className="mt-5">Age</h3>
						<p>There is a pad beneath the metatarsals that protects the foot from impact and pressure.</p>
						<p>This pad along with other structures can get thinner with age, leading to dropped metatarsal and metatarsalgia.</p>

						<h3 className="mt-5">Injuries</h3>
						<p>Injuries like metatarsal stress fractures and inadequate healing can lead to dropped metatarsal.</p>

						<h3 className="mt-5">Other conditions like arthritis, neuromas etc.</h3>
						<p>For example, <Link href="/best-running-shoes-for-mortons-neuroma"><a className="text-decoration-none">Morton&apos;s neuroma</a></Link> is a noncancerous growth of fibrous tissue around the nerve, and it usually occurs between the third and fourth metatarsal.</p>
						<p>It causes symptoms that are similar to metatarsalgia due to inflammation and irritation of a nerve, and it contributes a lot to metatarsal stress.</p>
						<p><Link href="/best-ankle-braces"><a className="text-decoration-none">Poor ankle mobility</a></Link>, particularly if you suffer from excessive tightness in the <Link href="/best-running-shoes-for-achilles-tendonitis"><a className="text-decoration-none">Achilles tendon</a></Link> or <Link href="/calf-cramping-running"><a className="text-decoration-none">calf muscles</a></Link> can as well contribute to this condition.</p>

						<h3 className="mt-5">Overuse</h3>

						<p>&nbsp;</p>
						<h2 id="what-are-the-symptoms" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What are The Symptoms and How to Recognize Dropped Metatarsal?</h2>
						<p><strong>The <Link href="https://www.medicalnewstoday.com/articles/190431.php"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">main symptom</a></Link> of dropped metatarsal is pain in the ball of the foot.</strong></p>
						<p>The tricky thing is that usually, pain comes in a period of several months, rather than suddenly.</p>
						<p>That means if you are an athlete and you are doing high-impact activities, you will probably make things worse in that period of time.</p>
						<p>This pain is a result of the pressure on the nerve caused by the dropped metatarsal, as well as irritation and inflammation caused by the stress and friction of the surrounding tissues.</p>
						<p>The pain in the ball of the foot can be sharp or burning and may also be accompanied by tingling or numbness in toes.</p>
						<p>It usually gets worse with physical activity and walking barefoot while it decreases with rest.</p>
						<p>Many people with dropped metatarsal may also have a feeling like they&rsquo;re walking on a pebble.</p>
						<p>There are other symptoms that may or may not be present like callus on the skin beneath the dropped metatarsals of signs of inflammation like swelling, redness, tenderness etc.</p>
						<p>You can also experience pain around your second, third, and fourth toe; in some cases, the pain only affects the area around the big toe.</p>
						<p>You must be aware that the pain will always increase with physical activity, especially if you usually practice it barefoot.</p>
						<p>Logically pain decreases with rest, but remember that is not enough.</p>
						<p>Although there are various conditions that can cause metatarsalgia, dropped metatarsal can be recognized by examining the ball of the foot.</p>
						<p>You&rsquo;ll usually notice that one area of the ball of the foot is positioned lower in comparison to the other parts.</p>
						<p>This misalignment along with pain when moving your toes and pressing the ball of the foot are signs that you probably have dropped metatarsal.</p>
						<p>If you are still not sure that you are suffering from a dropped metatarsal, you should visit your podiatrist.</p>
						<p>Your doctor will probably start with an X-ray since that is a good way to exclude other causes of foot pain.</p>
						<p>Ultrasound can be ordered, as well, so your doctor can identify possible conditions such as bursitis or Morton neuroma. A bone scan will precisely locate the places affected by inflammation.</p>
						<p>Also, an MRI can help detect and diagnose causes of pain in the metatarsal and midfoot regions like traumatic disorders, arthritis, or conditions that result in biomechanical imbalance.</p>

						<p>&nbsp;</p>
						<h2 id="how-to-treat-dropped-metatarsal" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How to Treat Dropped Metatarsal?</h2>
						<h3 className="mt-5">Acute Phase</h3>
						<p>As with all sports injuries, you should start your treatment with simple home methods like PRICE therapy which consists of protection, rest, ice, compression and elevation.</p>
						<p>The first day of injury is the day when you start working on the rehabilitation of your foot.</p>
						<p>The main goal is to restore normal range of motion, strength, and function.</p>
						<p>This phase also includes things like wearing semi-rigid corrective devices in supportive shoes and a gentle 6-week stretching program.</p>
						<p>But the key is in patience to avoid disrupting the healing process or re-injuring.</p>
						<p>The aim of this treatment is to ease pain and discomfort, as well as reduce the swelling and inflammation.</p>

						<h4 className="mt-3">Protection and Rest</h4>
						<p>These are the first things you should do as soon as you feel the pain in the ball of the foot.</p>
						<p>You should avoid doing any activity that can aggravate the pain.</p>
						<p>The goal of rest is to take the weight and stress from the ball of the foot as much as possible .</p>
						<p>You should rest until you can place most of your weight on the ball of the foot without feeling pain.</p>

						<h4 className="mt-3">Ice</h4>
						<p>Apply ice to the painful area several times a day.</p>
						<p>Don&rsquo;t apply ice more than once every 2 to 3 hours for 15 to 20 minutes.</p>
						<p>Long and frequent ice therapy can damage the tissues.</p>

						<h4 className="mt-3">Taping</h4>
						<p>Taping is a form of <strong>compression</strong> that will press the soft tissues under the ball of the foot, increase natural cushioning of this area and protect it from the impact and weight.</p>
						<p>It will also reduce inflammation and pain.</p>
						<div className="youtube-video-container mt-3 mb-5">
							<iframe 
								className="shadow rounded"
								width="560" 
								height="315" 
								src="https://www.youtube.com/embed/5NJ6CsDwZ2U?controls=0" 
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen>
							</iframe>
						</div>

						<h4 className="mt-3">Elevation</h4>
						<p>Keep your leg elevated while resting, preferably above the level of your heart in order to reduce blood flow in feet and minimize the swelling.</p>

						<div className="alert alert-warning my-5" role="alert">
							<p>If you can&rsquo;t take the pain, use over-the-counter anti-inflammatory medications such as naproxen or ibuprofen with previously mentioned therapy.</p>
						</div>

						<p>There are also <Link href="https://www.webmd.com/a-to-z-guides/metatarsalgia#1"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">other methods</a></Link> that can ease the symptoms and prevent the pain from reoccurring.</p>

						<h4 className="mt-3">Use support like orthotics, insoles and pads</h4>
						<p>The aim of insoles, pads and custom-made orthotics is to redistribute weight and pressure off the metatarsals, provide additional cushioning and realign the metatarsals.</p>
						<p>Moreover, custom made orthotics also control foot function and can also correct additional foot deformities like flat or high arched feet.</p>
						<p>If you have a naturally high arch and you suffer from a dropped metatarsal, you will respond well to any orthotic device, but people with a Morton neuroma need a rigid orthotic with an extension under the firaffiliast metatarsal bone.</p>

						<h4 className="mt-3">Find a proper footwear</h4>
						<p><Link href="/best-running-shoes-for-metatarsalgia"><a className="text-decoration-none">The best footwear for dropped metatarsals</a></Link> are the ones that have lots of cushioning and wider toe box.</p>
						<p>However, if you&rsquo;re like me and have additional foot deformity like flat feet, finding the right balance between stability and cushioning can be difficult.</p>
						<p>Stability and support is needed for flat feet, while cushioning is good for dropped metatarsal.</p>

						<h4 className="mt-3">Don&rsquo;t over train</h4>
						<p>Overuse can aggravate metatarsalgia and plantar flexed metatarsal, especially if the symptoms are still present.</p>
						<p>That is why you should lower the intensity of your physical activity or switch to sports that have less weight bearing like swimming.</p>

						<h4 className="mt-3">Lose excessive weight</h4>
						<p>If you&rsquo;re overweight, you should consider reducing your weight and start eating healthier.</p>
						<p>Less weight means less stress on the metatarsals and less chance to experience a dropped metatarsal and other metatarsal problems.</p>
		
						<p className="mt-5">In case you are also identified with callus, the doctor may decide to shave it down to provide temporary relief (depending on the size).</p>
						<p>However, it is very important to avoid bleeding from debridement.</p>
						<p>Also, go easy on the use of acids and other chemicals that the doctor prescribed you.</p>
						<p>Remember, less is more.</p>

						<h3 className="mt-5">Recovery Phase</h3>
						<p>The recovery phase often includes physical therapy as the best possible treatment.</p>
						<p>The primary focus is the restoration of normal biomechanics as well as getting rid of the pressure in the troubled area.</p>
						<p>Therapy will allow the inflammation to subside or resolve completely by relieving the repeated excessive pressure.</p>
						<p>When you are pain-free, you can start with isokinetic, isometric, and isotonic exercises to strengthen up your foot.</p>
						<p>You should also include recreational therapy, like swimming.</p>

						<h3 className="mt-5">Maintenance Phase</h3>
						<p>Because dropped metatarsal is primarily caused by an inherited structural abnormality, all these methods will just ease the symptoms and prevent the pain from reoccurring.</p>
						<p>If the pain doesn&rsquo;t subside you can always take some of them over the counter medications like nonsteroidal anti-inflammatory drugs like ibuprofen or naproxen.</p>
						<p>Using steroid shots if you are suffering from primary metatarsalgia is not recommended since you won&rsquo;t benefit too much from them.</p>
						<p>However, they will not cure the dropped metatarsal and correct the deformity.</p>
						<p>As the inflammation subsides, wearing an orthotic device is a must often to maintain normal mechanical function and to distribute pressure from the injured area.</p>
						<p><strong>If you are a runner, then regular replacement of shoes is necessary to avoid recidivism.</strong></p>
						<p>If none of the previously mentioned methods work or if you want to correct the abnormality, surgical treatment is the way to go.</p>
						<p>The success rate is high, however there is a long recovery period and rehabilitation after the surgery.</p>
						<p>There are multiple surgical procedures for metatarsals, depending on the individual foot structure.</p>
						<p>One of the procedures is to cut the bone in order to raise the dropped metatarsal.</p>
						<p>The procedure can also involve shortening or lengthening of the bone if there is also a length abnormality.</p>

						<p>&nbsp;</p>
						<h2 id="can-metatarsal-pads-help" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Can Metatarsal Pads Help?</h2>
						<p>The purpose of metatarsal pads is to relocate the weight evenly between the metatarsal heads.</p>
						<p>In case you suffer from a neuroma, the good news is that it will separate the metatarsal heads too.</p>
						<p>Metatarsal pads increase the width of the forefoot.</p>
						<p>They come in various sizes and shapes.</p>
						<p>The material, size, and shape can have some effect on pain relief too.</p>
						<p>The key component is where to place the metatarsal pad.</p>
						<p>Do you place it at the leading edge of the orthotic plate?</p>
						<p>Or do you place it so you can extend distally to the plantar plate?</p>
						<div className="youtube-video-container my-5">
							<iframe 
								className="shadow rounded"
								width="560" 
								height="315" 
								src="https://www.youtube.com/embed/_ikqUukd7z4?controls=0" 
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen>
							</iframe>
						</div>
						<p>You should remember that you do not need to place the metatarsal pad under the metatarsal head but proximal to the metatarsal heads.</p>
						<p>When distally placed, small, felt metatarsal pads would reduce the most pressure on metatarsal heads.</p>
						<p>Then the width of the pad can support the second, third, and fourth metatarsal heads while avoiding the first and fifth metatarsal heads.</p>
						<p>Make sure you avoid extending the pad proximally to the tarsometatarsal joints.</p>

						<h3 className="mt-5">What Is The Best Material For Metatarsal Pads?</h3>
						<p>Metatarsal pads come in a wide variety of materials, and they are all designed to help in reducing your foot pain.</p>
						<p>Metatarsal pads are usually made from the following materials:</p>
						<h4 className="mt-3">Open-cell polyurethane foam</h4>
						<p>Delivers long term resilient padding.</p>
		
						<h4 className="mt-3">Wool or polyester felt</h4>
						<p>Less resilient and firmer than polyurethane foam.</p>
						<p>This is the best choice if you require very firm support.</p>
						<p>However, they dry very slowly, which is a bad thing.</p>
						<h4 className="mt-3">Latex and leather</h4>
						<p>Leather is great since it allows your foot to breathe.</p>
						<p>In this case, leather is used to reinforce the softer latex material, but make sure you are not allergic to latex before purchasing them.</p>
		
						<p className="mt-5">There are also versions of forefoot cushions made from stretchy gel materials.</p>
						<p>They are great at absorbing shock.</p>
						<p>But these are only forefoot cushions, not metatarsal pads; they do not provide support, so do not apply too much of a pressure on the balls of the foot when wearing them.</p>
						<p>Keep in mind that metatarsal pads will come into contact with your foot, so you should pick the ones with an effective antimicrobial treatment that will prevent odor and potential infections.</p>
						<h3 className="mt-5">What Is The Best Shape Of The Metatarsal Pad?</h3>
						<p>Metatarsal pads are available in a variety of shapes, but I will only mention the three most popular ones:</p>
						<ul>
							<li>Met dome</li>
							<li>U-shaped pad</li>
							<li>Donut-shaped pad</li>
						</ul>
						<p><strong>The dome shape</strong> is the most effective metatarsal pad for reducing pressure.</p>
						<p><strong>The U-shaped pad</strong> is the second most effective, while <strong>the donut-shaped pad</strong> didn&apos;t provide any significant changes.</p>
						<p>The dome metatarsal pad is also the most comfortable one.</p>
						<p>If you suffer from a relatively uncomplicated injury and pain beneath the middle metatarsal rays, the dome metatarsal pad will be the best choice for you.</p>
		
						<h3 className="mt-5">How To Keep Metatarsal Pad In Place?</h3>
						<p>When you pick out the right pad for your foot, it is time to find the best way to wear them.</p>
						<p>You can choose between three options:</p>
						<ul>
							<li className="mb-1">Self-stick the pad to the bottom of your foot</li>
							<li className="mb-1">Self-stick the pad to the top of the insole of your shoe</li>
							<li className="mb-1">Placing the velcro attachment under the insole</li>
							<li className="mb-1">Self-stick the pad to the bottom of your foot</li>
						</ul>
						<p>Some pads feature a self-stick adhesive to cling directly to the bottom of your foot.</p>
						<p>There are some problems with this design:</p>
						<ul>
							<li className="mb-3">It may take some time and a few mistakes while you find the right place where to place it</li>
							<li className="mb-3">The stickiness of the pad will be compromised as you are repositioning the pad to get the best fit</li>
							<li className="mb-3">Pads that are so close with the foot will sooner or later wear out or develop odors</li>
							<li className="mb-3">Adhesives can irritate the skin</li>
							<li className="mb-3">Doing this each day or in some cases a few times a day is inconvenient</li>
						</ul>

						<h4 className="mt-5">Self-stick the pad to the top of the insole of your shoe</h4>
						<p>The pad can be strategically placed to provide the best relief.</p>
						<p>Advantages of this design are:</p>
						<ul>
							<li className="mb-3">If it takes a bit of time and few mistakes until you find a perfect fit you know it is still worth the effort since your pad will be there for you every day</li>
							<li className="mb-3">They will last longer and stay cleaner since they are separated from your foot by a sock</li>
							<li className="mb-3">Chances of skin irritation from adhesive are minor</li>
						</ul>

						<h4 className="mt-5">Placing the velcro attachment under the insole</h4>
						<p>This design uses velcro to attach the pad under the top surface of your insoles.</p>
						<p>This system has advantages just like the previous method plus:</p>
						<ul>
							<li className="mb-3">Velcro can not lose its grip like adhesives, so you can adjust it as many times you want</li>
							<li className="mb-3">As you put your shoes on every day, there is no risk of wearing it off since it is protected under the insole</li>
							<li className="mb-3">The antimicrobial nature of the insole keeps the pad from becoming dirty and full of bacteria</li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="conclusion" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Conclusion</h2>
						<p>Metatarsalgia or pain in the ball of the foot is a symptom of various medical conditions, including plantar flexed metatarsal.</p>
						<p>Because there are so many conditions that can cause this type of pain, dropped metatarsal is often overlooked, misdiagnosed and hard to treat.</p>
						<p>There are several reasons why dropped metatarsal is hard to treat.</p>
						<p>However, one of the most important reasons is that none of the conservative treatments can cure bone structural abnormality that is inherited.</p>
						<p>In severe cases, surgical therapy is the only option left.</p>
						<p>However, not everybody that is diagnosed with dropped metatarsal need surgical therapy.</p>
						<p>Many of them can manage it with simple home methods.</p>
						<p><strong>Always start your treatment with PRICE.</strong></p>
						<p>Rest is crucial for any foot injury.</p>
						<p>The first thing you should do after you fully recovered is to find the appropriate shoes and support like pads or orthotics.</p>
						<p><strong>Shoes with lots of cushioning and support will absorb more shock and offload the metatarsals.</strong></p>
						<p>It is important to eliminate or correct all factors that can aggravate dropped metatarsal.</p>
						<p>The more contributing factors you eliminate or correct, the less chance for symptoms of dropped metatarsal to reoccur.</p>
						<p>These are simple methods that can at least delay surgery for some time.</p>
						<p>If you still want to be physically active, switch to other sports like swimming and avoid those that involve jumping and running.</p>
						<p>I hope that with this text I&rsquo;ve thought you the basics of dropped metatarsal, its symptoms, causes and ways to treat and prevent it so the next time you feel the symptoms you will know what to do.</p>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }




		{ /***** MOST FREQUENTLY USED PLACEHOLDER *****/ }

		{ /* <h3 className="mt-5"></h3> */ }
		

		{ /* 
			<p>&nbsp;</p>
			&apos; 
			&quot;
		*/ }
		

		{ /* ALL LINKs */ } 
			{ /* <a href="(.+)" target="_blank" rel="noopener">(.+)</a> */ }
			{ /* <Link href="$1"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">$2</a></Link> */ }


		{ /* HEADER 2 & TOC list */ }
			{ /* (.+)\n(.+) */ }
			{ /* <p>&nbsp;</p>\n<h2 id="$1" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>$2</h2>\n\n<li><Link href="#$1"><a className="text-decoration-none">$2</a></Link></li> */ }


		{ /* <div className="youtube-video-container my-5">
			<iframe 
				className="shadow rounded"
				width="560" 
				height="315" 
				src="https://www.youtube.com/embed/_________________________?controls=0" 
				title="YouTube video player" 
				frameBorder="0" 
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
				allowFullScreen>
			</iframe>
		</div> */ }


		{ /* IMAGE */ }
			{ /* <div className="d-flex justify-content-center mb-5 shadow rounded">
				<Image
					src="" 
					width="" 
					height=""
					alt="" 
				/>
			</div> */ }


		{ /* TABLE OF CONTENTS */ }
			{ /* <ul>
				<li><Link href="#"><a className="text-decoration-none"></a></Link></li>
			</ul> */ }


		{ /* 


		<ul>
			<li></li>
			&nbsp;
			<li></li>
		</ul>
		*/ }
	</>)
}
