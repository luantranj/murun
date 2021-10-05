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
	const postId = 2;
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
						<p>Whether you&rsquo;re physically active or not, you&rsquo;ve probably experienced heel pain at least once in your life.</p>
						<p>Although heel pain is usually not a serious medical condition, this pain can be annoying and limit your everyday activities, even those that are basic like walking or standing.</p>
						<p>The question arises: How to heal a bruised heel?</p>
						<p>And, today, that&rsquo;s what we&rsquo;re going to learn.</p>
						<p>If you are like me and have some additional foot deformity like flat feet, the chance of getting a bruised heel is much higher.</p>
						<p>People with <Link href="/how-to-get-rid-of-flat-feet"><a className="text-decoration-none">flat feet</a></Link> tend to overpronate during weight bearing and need footwear that will provide more stability than cushioning.</p>
						<p>However, in order to avoid heel injuries, you need lots of cushioning and finding the right balance between stability for flat feet and cushioning for heel impact can be quite difficult.</p>
						<p>Heel bone, in medicine also known as calcaneus bone, is the largest and most important bone in the foot.</p>
						<p>Because the sole bone bears most of the weight during the heel strike phase of a gait cycle, the heel bone is at constant risk for injury like bruised heel.</p>
						<p>In comparison to the other heel injuries, bruised heel is the least severe.</p>
						<p>However, it causes significant pain and can lead to more serious conditions if not treated properly.</p>
						<p>That&rsquo;s why I&rsquo;ve put together all the information about how to heal bruised heel that you should know, so you can get back on your feet as soon as possible.</p>
						<ul>
							<li><Link href="#what-is-bruised-heel"><a className="text-decoration-none">What is Bruised Heel?</a></Link></li>
							<li><Link href="#classification-of-the-heel-injuries"><a className="text-decoration-none">Classification of The Heel Injuries</a></Link></li>
							<li><Link href="#what-are-the-causes-of-bruised-heel"><a className="text-decoration-none">What are The Causes of Bruised Heel?</a></Link></li>
							<li><Link href="#what-are-the-symptoms-of-a-bruised-heel"><a className="text-decoration-none">What are The Symptoms of a Bruised Heel?</a></Link></li>
							<li><Link href="#how-to-self-diagnose-a-bruised-heel"><a className="text-decoration-none">How to Self-Diagnose a Bruised Heel?</a></Link></li>
							<li><Link href="#medical-conditions-that-are-similar-to-bruised-heel"><a className="text-decoration-none">Medical Conditions that are Similar to Bruised Heel</a></Link></li>
							<li><Link href="#how-to-heal-a-bruised-heel-treatment"><a className="text-decoration-none">How to Heal a Bruised Heel - Treatment</a></Link></li>
							<li><Link href="#how-to-prevent-a-bruised-heel"><a className="text-decoration-none">How to Prevent a Bruised Heel?</a></Link></li>
							<li><Link href="#conclusion"><a className="text-decoration-none">Conclusion</a></Link></li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="what-is-bruised-heel" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What is Bruised Heel?</h2>
						<p><Link href="https://www.healthline.com/health/bruised-heel"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">Bruised heel</a></Link> is an injury of the heel pad that protects the heel bone.</p>
						<p>The heel pad is a tissue that sits right beneath the heel bone.</p>
						<p>It is primarily made of fat and acts as a cushioning which protects the heel bone during weight bearing activities like walking, running, jumping etc.</p>
						<p>Since it absorbs the shock of the impact from rigorous activities, the fat pad is prone to thinning out, or it can even be displaced.</p>
						<p>When the heel pad becomes damaged, the tiny blood vessels break, making a collection of blood called hematoma or bruise.</p>
						<p>This damage results in a bruised heel, also known as heel pad syndrome or heel pad contusion.</p>

						<p>&nbsp;</p>
						<h2 id="classification-of-the-heel-injuries" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Classification of The Heel Injuries</h2>
						<p>A heel injury can be classified into three groups:</p>
						<ul>
							<li className="mb-3"><strong>Mild</strong> - like bruised heel and bruised fat pad</li>
							<li className="mb-3"><strong>Moderate</strong> - such as stress fracture and even bone bruise</li>
							<li className="mb-3"><strong>Severe</strong> - like fracture of the calcaneus (the bone in the foot that bears most of the weight during the heel strike)</li>
						</ul>
						<p>The ferocity of the given injury depends on the amount of force that was placed on the calcaneus.</p>
						<p>An injury like a heel bruise, as I already said, will result in pain during walking or weight bearing, paired with swelling in and around the heel.</p>
						<p>The heel will also be prone to tenderness when exposed to pressure.</p>
						<p>The problem may occur if you continue to work out on a bruised heel.</p>
						<p>In that case, the injury may develop into chronic inflammation of the outside of the bone perimeter.</p>
						<p>This is a more severe type of bruised heel that needs a lot of time to heal.</p>
						<p>The healing process can involve physical therapy or using prescription shoes.</p>

						<p>&nbsp;</p>
						<h2 id="what-are-the-causes-of-bruised-heel" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What are The Causes of Bruised Heel?</h2>
						<p>Sadly it is very easy to bruise your heel if you are not careful enough.</p>
						<p>There are a lot of causes that can lead to trauma of this type, but usually, the bruised heel is a result of a single severe trauma</p>
						<p><strong>The bruised heel is the most common occurrence if you experience a fall with the front of your foot pointed up.</strong></p>
						<p>The logic question is, why?</p>
						<p>Well, this type of fall will usually amplify your body weight by five or even six times, so if you weigh around 220 lbs, the force you put on your feet is over 1100 lbs.</p>
						<p>That is a lot of force, so the next question is, how does it not break apart?</p>
						<p>Well, the main ally and support of your heel is a 1 cm thick fat pad.</p>
						<p>With such a type of fall, your fat pad is endangered since it can also bruise, or in the worst-case scenario, it can herniate out into the skin.</p>
						<p>Bone bruising is also possible.</p>
						<p><strong>The most common <Link href="https://www.sportsmd.com/sports-injuries/foot-ankle-injuries/bruised-heel-fat-pad-contusion/#How_is_a_bruised_heel_diagnosed"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">causes</a></Link> and contributing factors of bruised heel are:</strong></p>
						<ul>
							<li className="mb-3">Overuse &ndash; repetitive stress caused by running, jumping etc</li>
							<li className="mb-3">Long distance walking and running</li>
							<li className="mb-3">Heavy landing or impact on the heel</li>
							<li className="mb-3">Overweight</li>
							<li className="mb-3">Unfitting shoes that aren&rsquo;t cushioned enough</li>
							<li className="mb-3">Walking, running or jumping barefoot</li>
							<li className="mb-3">Hard, uneven surfaces</li>
							<li className="mb-3">Age</li>
						</ul>
						<p>As with all sports injuries, bruised heel is primarily an overuse injury, caused by the repetitive stress on the heel during physical activity.</p>
						<p><strong>Overuse injuries can be classified according to the time they occur:</strong></p>
						<ul>
							<li className="mb-3"><strong>Form 1</strong> - pain after activity</li>
							<li className="mb-3"><strong>Form 2</strong> - pain during the activity that does not restrict activity</li>
							<li className="mb-3"><strong>Form 3</strong> - pain during activity that immediately restrict the activity when occured</li>
							<li className="mb-3"><strong>Form 4</strong> - chronic perpetual pain</li>
						</ul>
						<p>Repeated stress on the heel pad can cause its flattening and displacement, leaving the calcaneus bone unprotected and susceptible to injury.</p>
						<p>This is the reason why people who participate in sports that involve repetitive impact on the heel like jumping, basketball, football, tennis are particularly susceptible to this medical condition.</p>
						<p>Now imagine how much damage they can cause to their heel by pounding on it day by day wearing unfitting shoes.</p>
						<p><strong>Did you know that wearing poor quality shoes can amplify your weight by two or three times with each step or jump you make?</strong></p>
						<p>If you are still not aware of what that actually means let me explain it better.</p>
						<p>That means that on every 1000 steps you make you will carry extra two or three times of your weight per heel.</p>
						<p>That repetitive behaviour will for sure lead to a sore fat pad or even bruised one which means the next step is a bruised heel.</p>
						<p><strong>A bruised heel can also occur suddenly from heavy impact or landing.</strong></p>
						<p>Moreover, these cases can be more severe and result in fractures.</p>
						<p><strong>Heel contusion may also occur as a result of a long-distance walking on a daily basis like policeman do.</strong></p>
						<p>That is the reason why this condition is also known as the policeman&rsquo;s heel.</p>

						<p>&nbsp;</p>
						<h2 id="what-are-the-symptoms-of-a-bruised-heel" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What are The Symptoms of a Bruised Heel?</h2>
						<p>Bruised heel is mainly characterized by the pain on the bottom of the heel.</p>
						<p>The pain is usually located in the middle of the heel.</p>
						<p>If both the bone and the pad are bruised, the pain might be sharper.</p>
						<p>Moreover, any weight bearing will make the pain even worse, while rest will calm the symptoms.</p>
						<p>In addition to pain, there can also be a red or purple bruise of skin above the injury.</p>
						<p>The bruising is caused by bleeding from damaged heel pad or bone blood vessels.</p>

						<p>&nbsp;</p>
						<h2 id="how-to-self-diagnose-a-bruised-heel" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How to Self-Diagnose a Bruised Heel?</h2>
						<p>The simplest way to recognize a bruised heel in addition to redness, swelling and tenderness of the affected is by doing the following test:</p>
						<ul>
							<li className="mb-3">Take your painful foot in your hands</li>
							<li className="mb-3">Press gently in the middle of the heel with thumbs</li>
							<li className="mb-3">Increase the pressure until you experience pain</li>
							<li className="mb-3">If pain decreases as soon as you take the pressure of the painful area, you probably have a bruised heel</li>
						</ul>
						<p>If you&rsquo;re still not sure and the pain gets worse, you should go to a doctor.</p>
						<p>Take the doctor&rsquo;s appointment into consideration if you feel next symptoms:</p>
						<ul>
							<li className="mb-3">Burning, numbness and tingling in the foot and toes since those symptoms may point to the issue called neuralgia</li>
							<li className="mb-3">If you feel like there is no trace of a fat pad cushion in your heel that can cause fat pad atrophy</li>
							<li className="mb-3">Intense pain that lasts over a week, especially if a fever accompanies the pain</li>
						</ul>
						<p>He will make a proper diagnose by checking your medical history, clinical evaluation and additional tests like x-ray.</p>
						<div className="youtube-video-container my-5">
							<iframe 
								className="shadow rounded"
								width="560" 
								height="315" 
								src="https://www.youtube.com/embed/plbBvPASXwM?controls=0" 
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen>
							</iframe>
						</div>

						<p>&nbsp;</p>
						<h2 id="medical-conditions-that-are-similar-to-bruised-heel" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Medical Conditions that are Similar to Bruised Heel</h2>
						<p>Bruised heel is most frequently confused with a condition called <Link href="/essential-oils-for-plantar-fasciitis"><a className="text-decoration-none">plantar fasciitis</a></Link>.</p>
						<p>Plantar fasciitis is an inflammation of the tissues located between the heel and ball of the foot.</p>
						<p>The <Link href="https://healthfully.com/5-things-you-need-to-know-about-a-bruised-heel-10179557.html"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">difference</a></Link> between plantar fasciitis and bruised heel is the localization of the pain.</p>
						<p>In plantar fasciitis, the pain is usually located at the front of the heel and goes towards the sole of the foot and toes. Moreover, it is usually worse in the morning and gets better during the day.</p>
						<p>This is totally opposite from the heel bruise pain, which gets worse during the day because of all the walking and standing you do.</p>
						<p>Fractures of the calcaneus or heel bone can cause similar symptoms as bruised heel, but the pain is more severe and it will last longer.</p>
						<p>A single, acute injury like landing on the heel during jump can cause the fracture.</p>
						<p>Other issues like arthritis, sprained foot arch, <Link href="/plantar-fibroma-massage"><a className="text-decoration-none">plantar fibroma</a></Link>, infection in the muscles and bones, as well as <Link href="/best-running-shoes-for-achilles-tendonitis"><a className="text-decoration-none">Achilles tendinitis</a></Link>, might cause symptoms similar to a bruised heel, so make sure you consult your doctor before self-treating the injury.</p>

						<p>&nbsp;</p>
						<h2 id="how-to-heal-a-bruised-heel-treatment" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How to Heal a Bruised Heel - Treatment</h2>
						<p>A bruised heel will take up to three weeks to recover.</p>
						<p>The time to recover will be increased with shock absorbtion or if you also bruise a bone.</p>
						<p>In that case the recovery time will take from two to six weeks until you feel better but even then your heel is not healed completely.</p>
						<p><strong>Also, if the injury happens to a kid or a teenager, doctor appointment is mandatory within one or two days since it can affect their development and growth.</strong></p>
						<p>Be aware that treatments that will work for adults may not help kids.</p>
						<p>There are various <Link href="http://www.sportsinjuryclinic.net/sport-injuries/foot-heel-pain/bruised-heel-1"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">treatments</a></Link> for bruised heel.</p>
						<p>The type of treatment depends on severity of the injury.</p>
						<p>However, as with all sports injury, the initial treatment should be simple home methods like PRICE therapy.</p>
						<p><strong>PRICE therapy consists of protection, rest, ice, compression and elevation.</strong></p>
						<p>The aim of PRICE therapy is to reduce the stress and therefore bruising and swelling, allowing the tissues to heal faster.</p>
						<h3 className="mt-5">Rest</h3>
						<p>Rest is a crucial part of the healing process.</p>
						<p>You should avoid standing, walking or any other weight bearing physical activity that can aggravate the injury.</p>
						<p>If it&rsquo;s not possible to avoid weight bearing, you should use <Link href="/best-ankle-braces"><a className="text-decoration-none">foot brace</a></Link>, sleeve or crutches.</p>
						<p>The goal of rest is to take all the weight and stress from the injured heel.</p>
						<p>You should rest until you can place most of your weight on the heel without feeling pain.</p>
						<h3 className="mt-5">Ice</h3>
						<p>Ice is the second thing to do after you experience heel pain.</p>
						<p><strong>Some people will reach for the warm compresses, but that is the biggest mistake to make since the ice has deeper penetrating power than heat.</strong></p>
						<p>Although it can&rsquo;t treat the cause of the injury, it will reduce the pain and swelling.</p>
						<p>How does it reduce the swelling?</p>
						<p>Well, when ice is applied on the heel, it decreases the flow of inflammatory cells into the muscle. That will cause the arteries to vasodilate further flushing out inflammatory cells from the affected area.</p>
						<p>Don&rsquo;t apply ice more than once every 2 to 3 hours for 20 minutes. Long and frequent ice therapy can damage the tissues.</p>
						<p>Some experts say that ice therapy should be followed by heat treatment. It is recommended to use heat after ice therapy for the next couple of days.</p>
						<p>The simplest way of this therapy is to immerse your feet in hot water. Just be sure that it&rsquo;s not too hot.</p>
		
						<h3 className="mt-5">Taping</h3>
						<div className="youtube-video-container my-4">
							<iframe 
								className="shadow rounded"
								width="560" 
								height="315" 
								src="https://www.youtube.com/embed/nQtkwfJrhXo?controls=0" 
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen>
							</iframe>
						</div>
						<p>Taping is a form of compression that will press the soft tissues under the heel, increase natural cushioning of this area and protect the heel of impact.</p>
						<p>First, place an anchor strip of non-stretch zinc oxide tape horizontally around the back of the heel.</p>
						<p>Then place the support strips under the heel to compress the tissues.</p>
						<p>After that, repeat the initial anchor strip in order to achieve better support.</p>

						<h3 className="mt-5">Elevation</h3>
						<p>The goal of elevation is to reduce the excessive swelling and blood from the injured area by reducing blood flow.</p>
						<p>For the best results, try to hold your leg above your heart in order to reduce blood flow in feet and minimize the swelling and bruise.</p>

						<h3 className="mt-5">Insoles, Heel pads, Orthotics</h3>
						<p>Insoles, heel pads or orthotics can both heal and prevent injuries.</p>
						<p>They will reduce the stress on the heel and accelerate the healing process.</p>
						<p>Just make sure you&rsquo;re using them in both shoes.</p>
						<p>Having insole or pad that is only in one shoe causes the difference in leg length and can cause other problems.</p>
						<p><strong>One of the best foot orthotics for a bruised heel is the heel cup.</strong></p>
						<p>This orthotic recushion the thinned out or damaged fat pad while at the same time it supports the arch of the foot, allowing achievement of the optimal level.</p>
						<p>A good heel cup will also encourage the fat pad to regenerate itself.</p>

						<h3 className="mt-5">Topical Anti-inflammatory Creams</h3>
						<p>Topical anti-inflammatory creams can speed up the healing process and decrease inflammation significantly.</p>
						<p>It will also loosen up the pain a bit.</p>
						<p><strong>It is recommended to use creams that have menthols as one of the main ingredients like Biofreeze, Voltaren gel, and more.</strong></p>
						<p>Your podiatrist can prescribe these creams.</p>

						<h3 className="mt-5">Over-the-counter Anti-inflammatory Medications</h3>
						<p>If you can&rsquo;t take the pain, use over-the-counter anti-inflammatory medications such as naproxen or ibuprofen with previously mentioned therapy.</p>
						<p>Of course, make sure you consult with your physician or podiatrist before you take them.</p>
						<p>You should take one or two week courses with two or three doses per day to build up the level of anti-inflammatory enzymes in your body.</p>
						<p>That way, you will speed up the healing process and reduce inflammation.</p>
						<p>Remember, if you are not persistent and you take just one or two pills occasionally, you will not do a thing for the inflammation you will only reduce the current level of pain.</p>

						<h3 className="mt-5">Light Stretch</h3>
						<p>Few days after the injury happens, you should start with a light stretch to reduce pain and tightness caused by the injury.</p>
						<p>All you need is a towel and some patience.</p>
						<p>Sit on the floor with your legs stretched in front of you, take a towel on each end and make a loop around the heel.</p>
						<p>Gently pull back towards the body until you feel a stretch hold for 10-20 seconds then release.</p>
						<p>Repeat five to ten times.</p>

						<p>&nbsp;</p>
						<h2 id="how-to-prevent-a-bruised-heel" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How to Prevent a Bruised Heel?</h2>
						<p>As I&rsquo;ve previously mentioned, there are various factors that can contribute to development of heel bruise.</p>
						<p>Correcting and eliminating these factors will lower the possibility of getting injured again.</p>

						<h3 className="mt-5">Don&rsquo;t Over Train</h3>
						<p>Bruised heel is primarily an overuse injury.</p>
						<p>That is why you should always gradually increase the intensity and duration of your workout, especially if you&rsquo;re a beginner.</p>

						<h3 className="mt-5">Lose Weight</h3>
						<p>If you&rsquo;re overweight, you should consider reducing your weight and start eating more healthy.</p>
						<p>Less weight means less stress on the heel and less chance to experience a heel bruise and pain.</p>

						<h3 className="mt-5">Proper Shoes</h3>
						<p>Get shoes with proper cushioning and change worn out shoes.</p>
						<p>Shoes that are worn out have lost their support, stability and cushioning because of usage.</p>
						<p>That is why you should change your footwear as soon as you notice they are worn out.</p>
						<p>Shoes nowadays are built to be light and flexible, which leads us to the conclusion that they need to be replaced more often; to be precise, they have a life span of approximately 300 miles.</p>
						<p>A careful selection of running shoes should be your priority.</p>
						<p><Link href="/best-running-shoes-for-heel-pain"><a className="text-decoration-none">Shoes that have proper cushioning and adequate level of support</a></Link> will reduce the stress on the heel while weight bearing and reduce the risk for heel and other lower leg injuries.</p>

						<h3 className="mt-5">Insoles, Heel pads or Orthotics</h3>
						<p>If you&rsquo;re like me and have <Link href="/flat-feet-pronation"><a className="text-decoration-none">flat feet</a></Link>, the chance of finding the right shoes can be difficult.</p>
						<p>On one side, I need to find shoes that provide enough stability for my overpronation, while on the other I need shoes with lots of cushioning to prevent further heel injuries.</p>
						<p>That&rsquo;s why I&rsquo;ve decided to put shoe insole in my stability shoes in order to correct both problems.</p>
						<p>The goal of insoles, heel pads or orthotics is to elevate heel and provide better cushioning for this area.</p>
						<p>In order to minimize the cost, you should try over the counter heel support.</p>
						<p>If you feel that they are not adequate for you, consult with a doctor and get a custom made orthotic.</p>

						<h3 className="mt-5">Avoid Doing Physical Activities Barefoot</h3>
						<p>Avoid doing physical activities barefoot, especially those that involve frequent jumping or change of direction.</p>

						<h3 className="mt-5">Avoid Weight Bearing on Hard or Uneven Surfaces</h3>
						<p>Hard, uneven surfaces will not only raise the risk for heel bruise but other, more serious injuries like sprains, fractures etc.</p>

						<h3 className="mt-5">Stretch Before and After Your Exercise</h3>

						<p>&nbsp;</p>
						<h2 id="conclusion" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Conclusion</h2>
						<p>Although bruised heel is the least severe and not so frequent foot injury, it is important to know factors that can cause it as well as how to manage it.</p>
						<p>It is important to start your rest and other home treatments as soon as possible and continue until your bruised heel is fully recovered.</p>
						<p>If you go back to activities and sports too soon, you can interrupt the healing process.</p>
						<p>Moreover, you can alter the healing process and develop scars in your heel that require surgical treatment.</p>
						<p>However, I&rsquo;m a type of person that doesn&rsquo;t like to be inactive.</p>
						<p>That&rsquo;s why I always try to find another activity that will temporarily replace my usual weight bearing sports.</p>
						<p><strong>Swimming is a great alternative during the recovery period.</strong></p>
						<p>It does not include jumping or walking but will make you physically active.</p>
						<p>The first thing you should do after you fully recovered is to <strong>find the appropriate shoes</strong>.</p>
						<p>Shoes with lots of cushioning and support will absorb more shock and put less stress on the heel.</p>
						<p>This is really important, especially if you&rsquo;ve recently experienced bruised heel or other foot injury.</p>
						<p>Sometimes it is necessary to get <strong>heel pad </strong>or<strong> orthotic</strong> especially when performing more intensive activities, such as walking or running on uneven surfaces.</p>
						<p>However, you should <strong>avoid any activities on uneven surfaces</strong>, especially after the injury.</p>
						<p>I hope that with this text I&rsquo;ve taught you the basics of bruised heel, its symptoms, causes and ways to treat and prevent it so the next time you feel the symptoms you will know what to do.</p>
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


		{ /* HEADER 2 */ }
			{ /* (.+)\n(.+) */ }
			{ /*  <p>&nbsp;</p>\n<h2 id="$1" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>$2</h2>\n\n<li><Link href="#$1"><a className="text-decoration-none">$2</a></Link></li> */ }


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
