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
	const postId = 1;
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
						<p>We&rsquo;ve all heard just how bad bunions can be and everyone of you probably knows at least one person that suffers from them.</p>
						<p>However, most people consider them to be a trivial issue.</p>
						<p>I was like that as well, and you probably are.</p>
						<p>That&rsquo;s not true though, and bunions can be an incredibly debilitating condition that might require surgery.</p>
						<p>Today I&rsquo;ll be telling you how to avoid that and treat your bunions the right way before they become bad enough to require going under the knife.</p>
						<ul>
							<li><Link href="#what-are-bunions"><a className="text-decoration-none">What are Bunions?</a></Link></li>
							<li><Link href="#common-symptoms-and-signs"><a className="text-decoration-none">How to Notice that You’re Developing a Bunion – Common Symptoms and Signs</a></Link></li>
							<li><Link href="#what-can-cause-a-bunion-to-develop"><a className="text-decoration-none">What can Cause a Bunion to Develop?</a></Link></li>
							<li><Link href="#how-to-treat-bunions-without-surgery"><a className="text-decoration-none">How to Treat Bunions without Surgery (6 Tips)</a></Link></li>
							<li><Link href="#what-can-you-do-when-surgery-is-the-only-option"><a className="text-decoration-none">What Can You Do When Surgery is the Only Option?</a></Link></li>
							<li><Link href="#final-words"><a className="text-decoration-none">Final Words</a></Link></li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="what-are-bunions" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What are Bunions?</h2>
						<p>To explain how you should treat your bunions I first have to tell you some of the basics and correct any misconceptions you might have.</p>
						<p>For example, you will often hear people refer to bunions as a &ldquo;growth&rdquo; on their feet &ndash; this is mostly wrong.</p>
						<p>Bunions are, in fact, something quite different.</p>
						<p>This deformity is caused by the joint of your big toe being out of alignment and sticking out.</p>
						<p>This can also happen on your little toe, in which case they are called bunionettes or tailor&rsquo;s bunions.</p>
						<p>Usually, there is no extra bone growth present, but in bad cases there will be some, further exacerbating the issue.</p>
						<p>To go more in-depth on the subject, the joint that&rsquo;s misaligned in most cases is the metatarsal phalangeal joint.</p>
						<p>This causes the toe to point towards the other toes instead of forward.</p>
						<p>The area can also become inflamed and present redness and pain, though that might not necessarily happen.</p>
						<p>The condition is progressive, and it will get worse with time, if not treated.</p>
						<p>If it progresses to the third degree with malpositioning of 30 degrees or more, surgery might be the only way to fix it.</p>
						<p><strong>But how do you notice it on time?</strong></p>
						<p>Well, I thought a bunion would have been obvious, but I was wrong about that &ndash; people sometimes go years without ever noticing they are developing one.</p>
						<p>In the next section, I&rsquo;ll talk more about that.</p>

						<p>&nbsp;</p>
						<h2 id="common-symptoms-and-signs" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How to Notice that You’re Developing a Bunion – Common Symptoms and Signs</h2>
						<p>As I mentioned, bunions can sneak up on you, and you might not notice them developing until they&rsquo;re already quite bad and start hurting.</p>
						<p>However, you can still spot them before they become unmanageable.</p>
						<p>The first sign that you might be developing a bunion is pain in your foot when walking &ndash; usually near the big or little toe.</p>
						<p>If you rest up a bit or wear wider shoes, it might start to feel better, and you might think it was just fatigue or a bad choice of shoes, but it might not be.</p>
						<p>Other early signs might also include calluses near the area as well as patches of hardened and thick skin. This includes calluses on your second toe as well.</p>
						<p>Inflammation in the area, even before a bump appears, is also one of the telltale signs &ndash; even if the inflammation passes it doesn&rsquo;t mean that a bunion won&rsquo;t develop.</p>
						<p>If you&rsquo;re having difficulty moving your big toe and experience a constant dull pain in the area, you will most likely already see a bump, and it&rsquo;s most likely that you have a bunion in the early stages of development, so you should consult your doctor.</p>
						<p><strong>So, to recap, the most common symptoms are:</strong></p>
						<ul>
							<li>Swelling and inflammation</li>
							<li>Calluses in the area</li>
							<li>A pronounced bump</li>
							<li>Constant dull pain</li>
							<li>Pain when walking</li>
							<li>Thick and hard skin in the area</li>
							<li>Difficulty moving your big toe</li>
						</ul>
						<p>If you notice you&rsquo;re developing a bunion, what can you do?</p>
						<p>Well, I&rsquo;ll talk about that in just a second, but first I want to have a word with you about how you can prevent getting one in the first place.</p>

						<p>&nbsp;</p>
						<h2 id="what-can-cause-a-bunion-to-develop" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What can Cause a Bunion to Develop?</h2>
						<p>For the most part, the chance that you&rsquo;ll get a bunion is up to your genes, and they occur due to bad foot structure.</p>
						<p>However, some bad habits and actions can contribute to that and cause a bunion to develop sooner rather than later.</p>
						<p><strong>Here are some things you should avoid:</strong></p>
						<ul>
							<li>Wearing shoes that are too tight for you and have a narrow toe box</li>
							<li>Shoes with high heels and pointy toe boxes</li>
							<li>Standing for a long time</li>
							<li>Foot injuries</li>
							<li>Lack of foot exercise</li>
							<li>Obesity</li>
						</ul>
						<p>Other things that can exacerbate a bunion include other foot deformities, neuromuscular disorders, bone diseases and conditions like arthritis.</p>
						<p>Women also have a much larger chance of developing bunions than men do.</p>
						<p>You can try and prevent bunions from developing by following this advice, but as I said, it&rsquo;s in your genes &ndash; it will probably happen sooner or later.</p>
						<p>So, when it happens, what can you do?</p>

						<p>&nbsp;</p>
						<h2 id="how-to-treat-bunions-without-surgery" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How to Treat Bunions without Surgery</h2>
						<p>Now that&rsquo;s it come to this, and you&rsquo;ve developed a bunion, you will have to deal with it and prevent it from getting worse.</p>
						<p>At first, this can be done in a few easy ways and won&rsquo;t require you to have surgery at all.</p>
						<h3 className="mt-5">1. Using toe spacer and bunion splits</h3>
						<p>This is one of the easiest ways to deal with bunions when they&rsquo;re not incredibly advanced.</p>
						<p>It involves using a physical object like a split or a brace of sorts, to push the toes into their more natural positions.</p>
						<p>They spread out your toes, and as they do, the bunion moves back inside.</p>
						<h3 className="mt-5">2. Massage</h3>
						<p>Most people think massages are good just for relaxation purposes, but I&rsquo;ll tell you that a good massage can do you more good than most pills.</p>
						<p>That&rsquo;s also the case when you have a bunion, and a well-performed massage routine can relax the muscles in the foot allowing them to move back into their natural positions thus correcting the misalignment of the toes.</p>
						<p>Massages are best applied after a workout routine, which can involve walking, running or a range of different foot stretch exercises.</p>
						<p>During the massage, a deep heat cream can be applied for the best results.</p>
						<p>Using various natural oils might also help further &ndash; olive oil and castor oil are quite popular for this purpose.</p>
						<p>Most massage routines for treating bunions aren&rsquo;t too complicated, and you can learn to perform them yourself after a while.</p>
						<p>However, it is still best if it&rsquo;s applied by a professional.</p>
						<h3 className="mt-5">3. Stretching exercises</h3>
						<p>Stretching exercises, especially when combined with a good massage, can make the muscles in your feet more flexible allowing your toes to return to their natural position.</p>
						<p>One simple exercise you can perform involves placing an elastic band on your big toes, turning your feet outwards slowly and then holding the position for around 60 to 90 seconds.</p>
						<p>After that relax for the same amount of time and repeat.</p>
						<p>You should do around 5 to 10 repetitions, 2 or 3 times per day.</p>
						<p>There is a range of other exercises you can try, and it&rsquo;s best if you find one that suits you and stick to it for a longer time.</p>
						<h3 className="mt-5">4. Cold compress</h3>
						<p>The tried and true method for dealing with most inflammations is effective when it comes to bunions as well.</p>
						<p>It will reduce the swelling and the pain allowing you to be more comfortable and apply some of the other treatment options as well.</p>
						<p>All you need to do is take an ice pack wrapped in a cloth and apply it to the affected area.</p>
						<p>Apply it in 10-minute intervals with pauses of around 5 minutes in-between.</p>
						<p>Do this until you feel a noticeable relief and do it multiple times per day as needed.</p>
						<p>Just make sure not to put the ice directly on the skin to avoid freeze burns.</p>
						<p>This won&rsquo;t make your bunion disappear, but it will slow its progress and definitely help with the swelling.</p>
						<h3 className="mt-5">5. Taping up your feet</h3>
						<p>This is one of the oldest methods in the book.</p>
						<p>Taping up your feet with medical tape for a few weeks forces the toes back into their natural positions.</p>
						<p>While it is possible to do this on your own, it is not advisable since the taping needs to be strong but shouldn&rsquo;t cut off your circulation.</p>
						<p>If you opt for this, have a medical professional tape you up.</p>
						<p>Of course, you should also make sure to use proper medical tape.</p>
						<p>Don&rsquo;t use just any tape you may have lying around since you run the risk of making your condition worse if you do that.</p>
						<h3 className="mt-5">6. Choose better shoes</h3>
						<p>Wearing good shoes might not reduce bunions, but it will definitely help stop their growth.</p>
						<p>What I mean by &ldquo;good shoes&rdquo; are&nbsp;<Link href="/best-running-shoes-for-bunions"><a className="text-decoration-none">shoes that leave enough space for your toes in the front</a></Link>.</p>
						<p>Shoes that are too narrow and that have a pointy toe box are bad, as are high heels.</p>
						<p>You can also choose from a wide variety of specially designed therapeutic footwear available on the market, some of which is designed specifically to deal with bunions and similar foot conditions.</p>
						<p>Orthotics can also help ease your condition and stop it from getting worse.</p>

						<p>&nbsp;</p>
						<h2 id="what-can-you-do-when-surgery-is-the-only-option" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What Can You Do When Surgery is the Only Option?</h2>
						<div className="d-flex justify-content-center mb-5 shadow rounded">
							<Image
								src="https://res.cloudinary.com/muru/image/upload/v1633001719/how-to-prevent-bunions-from-getting-worse/what-can-you-do-when-surgery-is-the-only-option-optimizedx2_vq9wkr.jpg" 
								width="730" 
								height="726"
								alt="Bunionectomy" 
							/>
						</div>
						<p>While all of these methods of dealing with bunions are helpful to a degree, sometimes it&rsquo;s simply too late for them to work and there&rsquo;s no other option but to go under the knife.</p>
						<p>So, what do you do?</p>
						<p>Well, first off, don&rsquo;t be afraid.</p>
						<p>Bunion surgeries are routine procedures, and there&rsquo;s not a lot that can go wrong with them.</p>
						<p>I will tell you a bit more about them to reassure you of that.</p>
						<p>But how do you know when&rsquo;s the time for surgery?</p>
						<p>If your bunion is causing you constant pain that doesn&rsquo;t get relieved easily, that is a good time to do it.</p>
						<p>You can also look at the position of your toe, and if it&rsquo;s leaning inward a lot and the bunion is incredibly large, it&rsquo;s time.</p>
						<p>The best bet you have is to visit your doctor and let him make the judgment call, though.</p>
						<p>While bunion operations are not dangerous or too complex, you will need six to eight weeks to heal, so make sure your schedule is clear before you opt for surgery.</p>
						<p>The surgery used to treat bunions is often called bunionectomy or a hallux valgus correction.</p>
						<p>However, this is just a blanket term for a wide variety of different procedures that can be done to realign the toe and remove any excess bone growth.</p>
						<p>The surgery may involve joint replacement as well if the joint is too damaged to fix.</p>
						<p>Luckily, no matter the case, it is not a surgery that will require a hospital stay.</p>
						<p>In fact, you will be able to go home mere hours after the surgery is finished.</p>
						<p>Of course, there will be some restriction to your diet and movement after the surgery depending on how complex it was, so make sure to listen to your doctor and follow the instructions that you are given.</p>
						<p>As I mentioned before, you should recover in six to eight weeks but don&rsquo;t expect to be walking or running the same way as before.</p>
						<p>For a full recovery, you&rsquo;ll need at least four to eight months.</p>
						<p>During the initial recovery period, you will have to avoid putting any weight on your foot, and you&rsquo;ll need crutches.</p>
						<p>For the first two weeks, you&rsquo;ll wear a cast and after that a foot brace until the doctor decides that it&rsquo;s time to take it off.</p>
						<p>While you make a full recovery, your foot will stay swollen, and this will last for a few months.</p>
						<p>It&rsquo;s normal and make sure to pick footwear that will accommodate that.</p>
						<p>You might also require physical therapy during this period.</p>
						<p>Overall, you&rsquo;ll be fine after a while, and you don&rsquo;t need to worry too much.</p>

						<p>&nbsp;</p>
						<h2 id="final-words" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Final Words</h2>
						<p>Well, that&rsquo;s about all I have to say about bunions, at least in this article.</p>
						<p>If you take care of your feet properly, you should be able to avoid going under the knife, and I wish you all the best in treating your bunions &ndash; I know they can be a real pain.</p>
						<p>If you liked the article, just share it around and <Link href="/contact"><a className="text-decoration-none">send me</a></Link> some other bunion-treatment advice if you happen to know any.</p>
						<p>I hope you&rsquo;ll stop by again some time.</p>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
