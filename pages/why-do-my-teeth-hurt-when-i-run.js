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
	const postId = 28;
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
						<p>Summer is here and for many people the best way to stay in shape is by running.</p>
						<p>Running will not only burn the belly that you&apos;ve gained during the winter but also improve your overall and cardiovascular health.</p>
						<p>When you start running, you expect your muscles like calves and quads to ache and your lungs to burn.</p>
						<p>Moreover, there is always a risk for injuries.</p>
						<p>But what if your teeth hurt when you run?</p>
						<p>Pain in your teeth while running is one of many possible conditions among runners.</p>
						<p>Moreover, it is not that rare.</p>
						<p>However, I think it is hard to find all the information and ways to manage it at one place.</p>
						<p>That is why today I&rsquo;m going to talk about why can you experience tooth pain while running and how to manage it.</p>
						<p>Why does my teeth hurt when I run?</p>
						<p>If you want to find out the answer to this question, please read on.</p>
						{ /* kimjiwon */ }
						<ul>
							<li><Link href="#tooth-pain-not-caused-by-the-run"><a className="text-decoration-none">Tooth Pain While Running is Usually Not Caused by the Run Itself</a></Link></li>
							<li><Link href="#teeth-grinding-jaw-clenching"><a className="text-decoration-none">Teeth Grinding and Jaw Clenching are One of the Most Common Causes of Teeth Pain When Running</a></Link></li>
							<li><Link href="#temperature-sensitivity"><a className="text-decoration-none">Temperature Sensitivity is Another Cause of Tooth Pain When Running</a></Link></li>
							<li><Link href="#trigger-an-infection"><a className="text-decoration-none">Running Can Trigger An Infection That Is Already Present</a></Link></li>
							<li><Link href="#sinus-infection"><a className="text-decoration-none">Can Sinus Infection Cause Tooth Pain When I Run?</a></Link></li>
							<li><Link href="#how-to-treat-tooth-pain-while-running"><a className="text-decoration-none">How to Treat Tooth Pain While Running?</a></Link></li>
							<li><Link href="#tooth-pain-not-infection-inflammation"><a className="text-decoration-none">What if I don&apos;t Have any Infection or Inflammation But still Have Tooth Pain When I Run?</a></Link></li>
							<li><Link href="#conclusion"><a className="text-decoration-none">Conclusion</a></Link></li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="tooth-pain-not-caused-by-the-run" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Tooth Pain While Running is Usually Not Caused by the Run Itself</h2>
						<p>Tooth pain can be an annoying problem, especially when you already have to deal with muscle and lungs burn during your run.</p>
						<p>At first glance, it might seems strange to you that running can be associated with tooth pain but it is possible and it may be an alarm for deeper, more serious condition.</p>
						<p>In most cases, run is not the cause for tooth pain.</p>
						<p>Usually, running is just a trigger for the condition that is already present.</p>
						<p>Sometimes it is mere coincidence that you&rsquo;ve experienced tooth pain during your usual run.</p>
						<p>In this case, if the pain continues after your run or is very intense, you should go to a dentist.</p>

						<p>&nbsp;</p>
						<h2 id="teeth-grinding-jaw-clenching" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Teeth Grinding and Jaw Clenching are One of the Most Common Causes of Teeth Pain When Running</h2>
						<p>Do you clench your jaw and grind your teeth when you run?</p>
						<p>If so, that can be the cause for your teeth pain when running.</p>
						<p>People can clench jaw and <Link href="https://www.nhs.uk/conditions/teeth-grinding/"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">grind teeth</a></Link> even when they&rsquo;re not running.</p>
						<p>However, most people have this bad habit only when they run and there is a simple explanation to this problem.</p>
						<p>When your foot hits the ground during the impact phase of the gait cycle, the force of impact travels not only through your lower body parts but upper parts too.</p>
						<p>This impact force along with your jaw clenching or teeth grinding can cause pain.</p>
						<p>It is also important to note that this pain is usually present in the whole jaw and is not concentrated.</p>
						<p>If it&rsquo;s concentrated in one area, there may be another cause for the pain.</p>
						<p>Tense jaw muscles are most common cause for teeth pain when running.</p>
						<p>The simple solution to this problem is to stop clenching your jaw and grinding your teeth.</p>
						<p>Keep your muscles relaxed when running.</p>
						<p>Moreover, simple massage of your jaw and muscles can also help.</p>

						<p>&nbsp;</p>
						<h2 id="temperature-sensitivity" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Temperature Sensitivity is Another Cause of Tooth Pain When Running</h2>
						<p>Many people have teeth and gums that are <Link href="https://www.webmd.com/oral-health/features/case-sensitive"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">sensitive</a></Link> on cold and windy weather.</p>
						<p>That is why everytime they go out for a run on a cold or windy weather they feel pain.</p>
						<p>Moreover, this problem can be even worse if you breathe through your mouth when running.</p>
						<p>If you&rsquo;re sure that you have teeth and gums that are sensitive to temperature changes and wind, mask or change of the way you&rsquo;re breathing while running will make the pain go away.</p>
						<p>You should also avoid cold drinks during and after your run since it can aggravate the pain and discomfort even more.</p>

						<p>&nbsp;</p>
						<h2 id="trigger-an-infection" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Running Can Trigger An Infection That Is Already Present</h2>
						<p>If your teeth and gums are usually not sensitive to temperature and windy weather, maybe you have a <Link href="https://www.webmd.com/oral-health/guide/dental-health-cavities#1"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">cavity</a></Link> and should go to a dentist.</p>
						<p>Tooth cavity or caries is permanently damaged are of the tooth, caused by the bad oral hygiene, sweets and bacterias.</p>
						<p>Initially, there are no signs of the infection.</p>
						<p>However, with time, the bacterias will eat through the first few layer of the tooth, reach to the nerves of the tooth and cause pain.</p>
						<p>This pain can also be aggravated by running, hot and cold food and drinks and cold and windy weather.</p>
						<p><Link href="https://www.webmd.com/oral-health/guide/gingivitis-periodontal-disease#1"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">Gingivitis</a></Link>, a bacterial infection of your gums can also cause pain while running.</p>
						<p>You&apos;re probably asking yourself how can run aggravate cavity or gingivitis pain?</p>
						<p>There is an increased blood flow when you run.</p>
						<p>Increased blood flow will contribute to the already increased blood flow of the tooth or gums caused by the infection and inflammation, causing pain while running.</p>

						<p>&nbsp;</p>
						<h2 id="sinus-infection" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Can Sinus Infection Cause Tooth Pain When I Run?</h2>
						<p><Link href="https://www.webmd.com/allergies/sinusitis-and-sinus-infection"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">Sinusitis</a></Link> is an infection of one or more sinuses.</p>
						<p>Sinuses are connected cavities in the skull.</p>
						<p>It is still not known why do we have sinuses.</p>
						<p>One of theories is that they help in air humidification when we breath while the other theory thinks that they enhance our voice.</p>
						<p>Either way, running can trigger sinusitis symptoms and cause teeth pain.</p>
						<p>In this case, both breathing through your mouth and nose as well as increased blood flow will trigger the pain when you run.</p>
						<p>Infection and inflammation of maxillary sinus is the most common sinusitis that can cause teeth pain.</p>
						<p>It is usually dull pain in the upper teeth.</p>
						<p>The reason for this is the connection between tooth roots and maxillary sinus.</p>
						<p>Sinusitis is a serious condition which requires adequate medical treatment.</p>
						<p>You can easily examine yourself by putting a pressure with your finger on your cheeks&rsquo; above eyebrows, around the nose and above upper lip.</p>
						<p>If you feel pain, there is a possibility that you have sinusitis.</p>
						<p>If you don&rsquo;t have any of the conditions mentioned above, maybe it&rsquo;s time evaluate your running posture and gait cycle.</p>
						<p>There are various conditions like <Link href="/flat-feet-pronation"><a className="text-decoration-none">flat feet</a></Link>, <Link href="/best-running-shoes-for-high-arches"><a className="text-decoration-none">high arches</a></Link>, <Link href="/best-running-shoes-for-mortons-neuroma"><a className="text-decoration-none">Morton&rsquo;s neuroma</a></Link> or sciatica that can cause instability and stronger impact on one side of the body more than the other.</p>
						<p>This stronger impact on one side also leads to bigger impact force on the upper parts of body which may lead to teeth pain.</p>
						<p>You can find more information about <Link href="/mortons-neuroma-running"><a className="text-decoration-none">Morton&rsquo;s neuroma in running</a></Link> on this site.</p>
						<p>I&rsquo;ve also answered to common question - <Link href="/running-with-sciatica"><a className="text-decoration-none">Can you run with sciatica</a></Link>?</p>

						<p>&nbsp;</p>
						<h2 id="how-to-treat-tooth-pain-while-running" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How to Treat Tooth Pain While Running?</h2>
						<p>Proper treatment of tooth pain while running depends on the exact cause.</p>
						<p>However, because the aim of the initial treatment is to relief pain and not to treat cause, you should start with simple home remedies until you go to a dentist.</p>
						<p><strong>Saltwater rinse</strong> is one of the best ways to treat tooth pain.</p>
						<p>Swish warm, salty water around your mouth and don&apos;t swallow it.</p>
						<p><strong>Over-the-counter anti-inflammatory medications</strong> like ibuprofen are also good for tooth pain relief.</p>
						<p>If the pain is too severe, you can also use over the counter pain relief gels and liquids with benzocaine.</p>
						<p>However, you should know that they don&apos;t reduce inflammation.</p>
						<p>They only make oral cavity numb.</p>
						<p>Moreover, they shouldn&apos;t be used for longer periods of time.</p>
						<p>If you have a swollen face along with toothache, you can use an <strong>ice pack on your cheek</strong>.</p>
						<p>It will reduce both swelling and pain.</p>
						<p>However, swollen cheek can be a sign of abscess, a serious bacterial infection which requires urgent medical attention.</p>
						<p>Tooth abscess is the collection of pus in the root of your tooth.</p>
						<p>It can also cause fever and inflammation of your gums.</p>
						<p><strong>Clove oil</strong> is another great natural remedy for toothache.</p>
						<p>You can soak a cotton ball with it and tap on the affected teeth and gums or rub it directly on the painful area.</p>
						<p>As soon as you deal with pain, <strong>you should go to a dentist</strong>.</p>
						<p>Dentist will examine your oral cavity, check if you have caries, gingivitis or other condition and treat it the right way.</p>

						<p>&nbsp;</p>
						<h2 id="tooth-pain-not-infection-inflammation" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What if I don&apos;t Have any Infection or Inflammation But still Have Tooth Pain When I Run?</h2>
						<p>If you&apos;ve been to a doctor and there is no infection of your teeth and gums, you probably have teeth that are too sensitive to temperature, impact during run, the way you run etc.</p>
						<p>In these cases you should avoid drinking cold drinks during and after your run, switch to mouth breathing or protect your mouth from cold and wind.</p>
						<p>If the big impact force is what triggers your teeth pain, you should also evaluate your gait cycle and work on your gate cycle.</p>
						<p>Runners should also switch shoes more often since they get worn out easily.</p>
						<p>Moreover, worn out shoes can put additional stress and impact force on whole body during run and also cause tooth pain.</p>

						<p>&nbsp;</p>
						<h2 id="conclusion" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Conclusion</h2>
						<p>Tooth pain while running is a common condition that can have more serious underlying cause.</p>
						<p>Simple home remedies will only treat the symptoms and not the cause.</p>
						<p>Moreover, this is just a temporary solution.</p>
						<p>That is why you should always go to a dentist as soon as you feel the pain.</p>
						<p>I hope that with this text you&rsquo;ve learned more about this unusual condition and that I&rsquo;ve answered to your question - Why does my teeth hurt when I run?</p>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
