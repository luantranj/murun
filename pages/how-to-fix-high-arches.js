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
	const postId = 40;
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
						<p>High-arched foot, otherwise known as cavus foot, is the bending of the arch of your foot.</p>
						<p>So that the high position is fixed and permanently affects your stature, walking, and, ultimately, running and athletic lifestyle.</p>
						<p>It is not that rare as some people may think, although it does occur less often than flatfoot (or a fallen arch) - the opposite condition, when the arch is low.</p>
						<p>However, it can be equally painful and difficult to deal with.</p>
						<p>As your mid-foot does not carry enough weight, and the other parts (heel and ball) of your feet are overloaded with pressure.</p>
						<p>Your ankles are not spared from the pain too, because additional pressure is put on them.</p>
						<p>For that reason, you may experience agonizing pain, or even instability and difficulty walking.</p>
						<p>And high arches can result in some other conditions, such as muscular dystrophy (because of the imbalance), metatarsalgia, calluses, plantar fasciitis, or ankle sprain.</p>
						<p>If this is the case with you, don&rsquo;t despair, as I&rsquo;m here to help to answer your burning question:</p>
						<p>How to fix high arches and alleviate your pain?</p>
						<p>Rest assured that you&rsquo;ll find your solution in the next few paragraphs.</p>
						<p>Before that, we&rsquo;ll briefly go through the symptoms and things you should know before you decide which method to go for.</p>
						{ /* kimjiwon */ }
						<ul>
							<li><Link href="#symptoms-and-common-misconceptions"><a className="text-decoration-none">High Arches - Symptoms and Common Misconceptions</a></Link></li>
							<li><Link href="#treatment"><a className="text-decoration-none">High Arch Treatment</a></Link></li>
							<ul>
								<li><Link href="#surgical-interventions"><a className="text-decoration-none">Surgical Interventions</a></Link></li>
								<li><Link href="#non-surgical-treatment"><a className="text-decoration-none">Non-surgical Treatment</a></Link></li>
							</ul>
						</ul>

						<p>&nbsp;</p>
						<h2 id="symptoms-and-common-misconceptions" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>High Arches - Symptoms and Common Misconceptions</h2>
						<div className="d-flex justify-content-center mb-5 shadow rounded">
							<Image
								src="https://res.cloudinary.com/muru/image/upload/v1634281985/how-to-fix-high-arches/pathologies-foot-difference-between-sick-healthy-1_nuniir.png" 
								width="730" 
								height="548"
								alt="pathologies foot difference between normal arch, flat foot and high arch" 
							/>
						</div>
						<p>Although some people may not be aware of this, high arches can be observed even when a person is standing, especially if you take a view from the side.</p>
						<p>Other symptoms may not be felt immediately, but can develop as the condition progresses over the course of the years:</p>
						<p><strong>Ankle instability and pain</strong> - due to the unequal pressure exertion on different parts of the foot, the ankle is prone to injuries, and it may not be stable when you&rsquo;re walking.</p>
						<p><strong>Hammertoes -</strong> this is the bending of the four smaller toes toward the floor, spreading from the middle toe.</p>
						<p><strong>Claw toes</strong> - similarly, this is the bending of the smaller toes, but it happens at the same time at all of them, spreading from both sides.</p>
						<p><strong>Generally painful feet</strong> - as your arch is much higher than it should be, your feet will eventually feel &ldquo;tired&rdquo; due to the imbalance when you&rsquo;re walking.</p>
						<p><strong>Accompanying conditions that can develop</strong> - I&rsquo;ve already mentioned them</p>
						<p>As many of you probably know, this condition is inheritable.</p>
						<p>But if you were not born with it, it does not mean you&rsquo;re saved from its sudden development at any age.</p>
						<p>Finally, higher arches can be connected to an underlying neurological condition, such as Charcot-Marie-Tooth disease, spina bifida, or cerebral palsy.</p>
						<p>Therefore, if you&rsquo;re experiencing any of the symptoms, it is crucial to go to your podiatric physician, who will diagnose high arches and decide on the severity of your symptoms.</p>
						<p>This is the first step to solving the problem.</p>
						<p>In most cases, you will be given painkillers and some advice to follow to ease the pain.</p>
						<p>Here is where my article may help you significantly.</p>

						<p>&nbsp;</p>
						<h2 id="treatment" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>High Arch Treatment </h2>
						<p>After your doctor examines your symptoms and identifies the severity of your condition, there are two main paths that your recovery and treatment can go: surgical and non-surgical solutions.</p>
						<p>As your surgeon is a specialist for the former path, you can consider me a sort of a professional for the other path.</p>
						<p>But I&rsquo;ll first present you with therapies that you may require if your condition belongs to the most severe group.</p>

						<h3 id="surgical-interventions" className="mt-5">Surgical Interventions</h3>
						<p>Now, I am not an expert at this, so take my advice concerning surgery with caution, and always consult your doctor before an important decision or during recovery.</p>
						<p>However, based on my considerable experience, I know what the most common procedures are, what you can expect, and are some tips that can ease your recovery process afterward.</p>
						<p>Most people with high arches, however, will not need surgery, and it will be fixed with alternative methods.</p>
						<p>The surgery will be needed if you experience extreme instability when walking, running, or even just standing.</p>
						<p>And if the pain is unbearable and does not subdue after other therapies and methods that you&rsquo;ve tried.</p>
						<p>Your doctor will determine the right procedure after he or she determines the type of your condition, and here are the usual ones:</p>
						<div className="alert alert-primary">
							<p><strong>Osteotomy</strong> - Via this procedure, your surgeon will change the shape of your bone in order to straighten the arch.</p>
							<p>The most common form is the lateral column extension, when this bone is extended so that the arch is lowered.</p>
							<p><strong>Changing the position of the tendon</strong> - When tendons are re-adjusted and moved from one part of your foot to another, areas that are under pressure due to your condition are strengthened.</p>
							<p>In this way, the tension is released and the stability is improved.</p>
							<p><strong>Synovectomy</strong> - This is a sort of a regeneration of the protective layer of your tendon in order to achieve full protection.</p>
							<p><strong>Plantar fascia release</strong> - The tendon between the ball and the heel of your foot is cut so that it heals in the right way.</p>
							<p><strong>Arthrodesis</strong> - This is the fusion of two adjacent bones, and it mostly aims at achieving greater stability.</p>
							<p><strong>Ankle ligament tightening</strong> - This procedure is also employed if the main problem is not the pain but the instability of your posture; your ankle is adjusted and tightened so that your feet is more stable.</p>
						</div>
						<p>Again, do not hesitate to consult your doctor and surgeon for more about these options, and above all, don&rsquo;t worry - the process of recovery will usually take no more than 6 weeks.</p>
						<p>If you&rsquo;re dedicated to athletics, running, and fitness as I am, I know this may seem like an eternity for you, but it will pass quickly, and your well-being is more important than anything!</p>

						<h3 id="non-surgical-treatment" className="mt-5">Non-surgical Treatment</h3>
						<p>Most probably, you will be fine implementing the options that will be described in this section, and you will be relieved permanently without any complicated procedures.</p>
						<h4>Physical Therapy</h4>
						<p>I&rsquo;m sure you&rsquo;re not surprised to learn that you can benefit from physical therapy if you have high arches.</p>
						<p>Here are the top seven physical toe exercises I recommend you do at home that ease side-effects caused by cavus foot:</p>

						<div className="alert alert-info">
							<p><strong>Stretching your toes using a piece of fabrics</strong></p>
							<p>This is the so-called &ldquo;Achilles stretch,&rdquo; so you may know it by that name if you&rsquo;re familiar with toe exercises.</p>
							<p>You can wrap a towel (or anything that you have in that shape) around the ball of the foot, take both ends of a towel and gently and slowly pull them towards you.</p>
							<p>In this way, you will stretch your toes and ameliorate claw and hammertoes.</p>
						</div>

						<div className="alert alert-warning">
							<p><strong>Squeezing your toes</strong></p>
							<p>Again, this will ease the pain in your toes, and you can do it pretty much anywhere.</p>
							<p>Just put your fingers between your toes and squeeze them for around 15 seconds, then let go, and repeat around 5 times.</p>
							<p>You&rsquo;ll feel instant relaxation and relief.</p>
						</div>

						<div className="alert alert-info">
							<p><strong>Picking up an object</strong></p>
							<p>Take a ball-shaped object (like a tennis, golf, or ping pong ball, depending on the size of your foot), and try to pick it up with the mid part of your foot, where the arch is high.</p>
							<p>Hold 2-3 seconds in the air, then release the object and repeat the exercise.</p>
						</div>

						<div className="alert alert-warning">
							<p><strong>Rolling an object</strong></p>
							<p>Take a round, longish object (like a tin can or a bottle) and roll it up and down on a flat surface so that you feel a slight pressure beneath the raised arch.</p>
							<p>Roll it for 3 to 4 minutes.</p>
						</div>

						<div className="alert alert-info">
							<p><strong>Stretching with support</strong></p>
							<p>Place your hands on the wall, or use any other reliable surface, such as a table, chair, counter (or a tree, if you like doing the exercises in nature).</p>
							<p>Now step back with one leg, and press down with the heel of your foot.</p>
							<p>Lean slightly forward.</p>
							<p>If this is too painful, be careful, and shift your weight on your hands holding on the support, until you feel you&rsquo;re ready to fully stretch your foot.</p>
						</div>

						<div className="alert alert-warning">
							<p><strong>Ankle circles</strong></p>
							<p>This one will ease the pain that you feel in your ankle due to the irregular weight put on it as a consequence of high arches.</p>
							<p>Simply cross your legs and move your ankle in small circles in both directions.</p>
							<p>Do two sets of five circles in each direction.</p>
							<p>You can use your hands to control the movement.</p>
						</div>

						<p>By the way, you should always warm up properly before doing the exercises - you don&rsquo;t want them to have the opposite effect.</p>

						<h4>Orthotic Management</h4>
						<p>Another way in which you can fix high arches is by inserting orthotic devices into your shoe.</p>
						<p>They are custom-made for your foot and will work as an efficient stabilizer of the imbalance caused by the high arch.</p>
						<p>If you&rsquo;re not familiar with orthotic devices, the logical question is:</p>
						<p>How is the beneficial effect achieved?</p>
						<p>Namely, these devices provide support for the part of your foot that is raised, i.e., they extend the surface of the contact area while you&rsquo;re walking, standing, and running.</p>
						<p>In this way, the pressure that you exert to your feet is moved away from the ball and sole of your feet and evenly spread to all areas, as it should be.</p>
						<p>Moreover, as now you will touch the ground with your whole foot, your stability and balance will be improved.</p>
						<p>There are two main kinds of orthotics:</p>
						<p><strong>Single-support area orthotics:</strong> they are created to &ldquo;fill in&rdquo; the space that is beneath the raised arch.</p>
						<p><strong>Triad orthotics:</strong> they provide support for three parts of your foot - heel, arch, and ball.</p>
						<p>Therefore, you can opt for a type that focuses on a particularly painful spot or buy a triple-support device that will improve your overall condition.</p>
						<p>For instance, as too much weight is forced onto the ball of your feet, you will want to check out the best insoles for ball of foot pain.</p>

						<h4>Appropriate Shoewear</h4>
						<p>Finally, I can advise you to buy shoes that are comfortable and modified for high arches.</p>
						<p>For women specifically, although high-heeled shoes are usually not beneficial for feet, here they can actually feel more comfortable since the heel fills in the space beneath the arch.</p>
						<p>However, if the heel is too high, this can have a harmful effect and even worsen the condition.</p>
						<p>Therefore, it is always best to buy ergonomically designed high-topped shoes that support the ankle and high arches.</p>
						<p>There are even <Link href="/best-running-shoes-for-high-arches"><a className="text-decoration-none">running shoes</a></Link> that are designed for this purpose.</p>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
