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
	const postId = 29;
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
						<p>Running is one of the most complete forms of exercise you can do.</p>
						<p>When you&rsquo;re running, it affects your entire body, and almost all the muscles are working in perfect unison.</p>
						<p>Though this is beneficial, it also means that running can affect you in negative ways as well, causing pain in places you wouldn&rsquo;t think it would affect.</p>
						<p>One of the pains associated with running is throat pain.</p>
						<p>If you&rsquo;ve ever wondered &lsquo;why does my throat hurt when I run,&rsquo; today you&rsquo;ll find out all about the possible causes and solutions to the problem.</p>
						{ /* kimjiwon */ }
						<ul>
							<li><Link href="#throat pain while running causes"><a className="text-decoration-none">Possible Causes for Throat Pain While Running</a></Link></li>
							<li><Link href="#final-word"><a className="text-decoration-none">The Final Word</a></Link></li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="throat pain while running causes" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Possible Causes for Throat Pain While Running</h2>
						<h3>Dry Throat</h3>
						<p>This is one of the most common reasons for throat pain while running and it can be fixed rather easily.</p>
						<p>You see, most runners will breathe through their mouth &ndash; it is the optimal way to breathe since it allows you to take in the largest amount of oxygen possible.</p>
						<p>However, it can also be the cause of your sore throat.</p>
						<p>When you&rsquo;re constantly breathing through your mouth, it can dry out your throat, especially on a hot day or when you&rsquo;re not taking in enough liquid.</p>
						<p>This will irritate your throat and make it feel sore, like when you have a cold.</p>
						<p>This can also happen if the air is incredibly dry and the humidity is low, and it happens much faster in that case.</p>
						<p>There are a few solutions to this problem.</p>
						<p>The easiest one is to stop breathing through your mouth when running.</p>
						<p>We are made to be nose-breathers &ndash; the nose moisturizes and warms the air which leads to less soreness.</p>
						<p>The downside to this is that you won&rsquo;t be as efficient when it comes to taking in oxygen while running.</p>
						<p>The other solution is extra hydration &ndash; if you drink more water while running your throat won&rsquo;t be as dry as usual, so it will get less irritated when you breathe through your mouth.</p>
						<p>Don&rsquo;t <Link href="https://www.washingtonpost.com/archive/politics/2003/10/24/running-the-risk-of-too-much-water/68c634e9-ed5c-4614-95c6-922d3d69e6d5/?noredirect=on&amp;utm_term=.b21a28c452c0"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">overhydrate</a></Link>, though that can be extremely dangerous, especially if you&rsquo;re a long-distance runner.</p>
						<h3 className="mt-5">Temperature Sensitivity</h3>
						<p>You know how your throat and even nose can feel like they&rsquo;re being stabbed when you&rsquo;re breathing in extremely cold weather?</p>
						<p>Well, that can happen even if the air is not that cold if you happen to be involved in a strenuous activity like running.</p>
						<p>Since you breathe in much more air than usual, the shock to your system is greater even if the air is not that much colder than your body.</p>
						<p>Sensitivity to cold air can even lead to your throat becoming inflamed.</p>
						<p>Pharyngitis is a condition that can commonly cause you to have a sore throat and it can be caused by an influx of cold air into it.</p>
						<p>It can cause a scratchy feeling in your throat and difficulty swallowing like you have a lump stuck in your throat.</p>
						<p>The solution to this problem is not that difficult if your throat is not already inflamed.</p>
						<p>Just protect yourself with something like a scarf when running and breathe in slower, through your nose.</p>
						<p>You will breathe in less air that way, but you&rsquo;ll feel better, and your throat will stop hurting, so it&rsquo;s worth it.</p>
						<p>If your throat is already inflamed, you should probably visit your doctor, take the prescribed medicine and stop running for a while.</p>
						<p>You should also take the protective measures already described above.</p>
						<h3 className="mt-5">Acid Reflux</h3>
						<p>A lot of people suffer from acid reflux and don&rsquo;t even know it.</p>
						<p>This condition can impact you greatly and, yes, it can also be the reason behind your sore throat when you&rsquo;re on a run.</p>
						<p>Acid reflux is a condition in which the contents of your stomach rise to reach all the way up to your throat.</p>
						<p>This includes stomach acid, which is corrosive and hurts the soft tissues of your throat, thus causing the pain you&rsquo;re feeling.</p>
						<p>It happens because the sphincters on your stomach don&rsquo;t work right and it&rsquo;s raised beyond the diaphragm.</p>
						<p>When you&rsquo;re running, your stomach is bouncing up and down constantly, which can trigger acid reflux.</p>
						<p>Even if your stomach is not usually raised above your diaphragm, it can get to that point because of running which causes the acid to rise up from it to your throat.</p>
						<p>One of the classic signs of acid reflux is a burning sensation in your lower chest, known as heartburn.</p>
						<p>If you&rsquo;re experiencing it, it&rsquo;s probably the cause of your problems.</p>
						<p>Other symptoms include an acid feeling in your mouth and the feeling that you&rsquo;re about to throw up or even throwing up a little in your mouth.</p>
						<p>However, even if there&rsquo;s no heartburn present, it&rsquo;s still possible that acid reflux is the cause of your throat soreness.</p>
						<p><Link href="https://www.webmd.com/heartburn-gerd/guide/laryngopharyngeal-reflux-silent-reflux#1"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">Silent reflux</a></Link>, also known as laryngopharyngeal reflux, doesn&rsquo;t include heartburn and it is more difficult to diagnose.</p>
						<p>Common symptoms may include hoarseness, a feeling of a lump in your throat, constant coughing, apnea, trouble swallowing and more.</p>
						<p>Solutions to this problem can be various.</p>
						<p>If your acid reflux is only triggered by running, you might want to <Link href="/how-to-start-running-for-beginners"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">improve your running form</a></Link>, so you bounce less and that might be enough to help it clear up.</p>
						<p>Your stomach will stop rising up so far, and the acid will stop rising up as a result.</p>
						<p>However, it can be far more difficult than that to get rid of acid reflux.</p>
						<p>If this solution doesn&rsquo;t help, visit your doctor and get diagnosed.</p>
						<p>The treatment may be as simple as changing your diet or taking some medicine, or it could involve surgery.</p>
						<p>Just make sure you don&rsquo;t leave it untreated.</p>
						<h3 className="mt-5">Allergies</h3>
						<p>The reason for your sore throat can be as simple as this &ndash; seasonal allergies.</p>
						<p>Plenty of people get them without being aware that they have them.</p>
						<p>A constantly runny nose and sore throat are common symptoms, as is redness around the eyes and nose in particular.</p>
						<p>It&rsquo;s something people just chalk up to tiredness, but it can be more than that.</p>
						<p>But how is it possible that your allergies trigger when running?</p>
						<p>Well, you&rsquo;re breathing in far more air when you&rsquo;re running or doing almost any sort of exercise.</p>
						<p>Because of that, it is possible that you&rsquo;re also breathing in more of the allergen than you would if you were just breathing normally.</p>
						<p>Different people require different amounts of an allergen to trigger their allergies.</p>
						<p>You might be more resistant, so the amount you breathe in while you&rsquo;re breathing normally doesn&rsquo;t trigger the allergy &ndash; but when you&rsquo;re sucking in loads of air during running, you manage to trigger it.</p>
						<p>Dealing with this cause is not more different than dealing with regular allergies.</p>
						<p>Get diagnose and use the medicine prescribed for dealing with your allergies.</p>
						<p>Also, avoid running in areas where the substance you&rsquo;re allergic to is present.</p>
						<p>If you&rsquo;re allergic to pollen, which is the most common cause of allergies, stick to running at the track or indoors during allergy season.</p>
						<h3 className="mt-5">Throat Infections</h3>
						<p>One of the possible causes of throat pain when running is an undiagnosed throat infection, and it can be quite bothersome.</p>
						<p>You might wonder how it is possible not to notice an infection except when you&rsquo;re running, but there&rsquo;s an easy explanation to that.</p>
						<p>You see, the increased influx of air when running, especially colder air, can irritate the infection and cause inflammation or swelling, thus resulting in pain.</p>
						<p>The infection might not present itself with pain as a common symptom, but the added irritation to an already weakened and infected throat can cause pain to present itself.</p>
						<p>The solution to this problem starts with identifying if you have a throat infection and what kind of infection it might be.</p>
						<p>Treating something like tonsillitis is much different than dealing with a bout of mononucleosis.</p>
						<p>Keep in mind that viruses are the cause of <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3135445/"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">90 percent of sore throats</a></Link> which makes this option quite likely.</p>
						<p>Don&rsquo;t underestimate the possibility that you have an infection just because you&rsquo;re not feeling any other obvious symptoms.</p>


						<p>&nbsp;</p>
						<h2 id="final-word" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>The Final Word</h2>
						<p>If you haven&rsquo;t found the solution to your problem in here, you shouldn&rsquo;t worry &ndash; there are many other possible conditions that can cause a sore throat when you&rsquo;re running, and most are not something to worry about.</p>
						<p>Still, you shouldn&rsquo;t be too relaxed, and if you suspect something is seriously wrong, you should stop running and visit your doctor immediately.</p>
						<p>The sooner you get the proper treatment, the sooner you can return to your exercise routine.</p>
						<p>Don&rsquo;t try to force yourself through the pain thinking it will just go away!</p>
						<p>If you happen to have any further questions that you need answers to, feel free to comment and you&rsquo;ll get an answer soon.</p>
						<p>Until next time, keep running and stay safe while doing so.</p>

					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
