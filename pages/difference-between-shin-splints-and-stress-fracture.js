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
	const postId = 15;
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
						<p>I think that every runner accepts the fact that there is a high risk for various injuries in their sport.</p>
						<p>Most of these injuries are in the lower leg and foot and their main symptom is pain.</p>
						<p>While it is easy to differentiate ankle and knee injuries, there are some injuries that give similar symptoms and are hard to differentiate.</p>
						<p>One of the best example are shin splints and stress fractures.</p>
						<p>Although they have many similarities, there are some key differences between these two types of injuries that many people don&rsquo;t know.</p>
						<p>That is why they often misdiagnose this condition and don&rsquo;t treat it properly.</p>
						<p>If you want to find out more about shin splints and stress fractures and how to differentiate them, you&rsquo;re on the right place.</p>
						{ /* kimjiwon */ }
						<ul>
							<li><Link href="#why-hard-to-differentiate-shin-splints-from-stress-fractures"><a className="text-decoration-none">Why is It Hard to Differentiate Shin Splints from Stress Fractures?</a></Link></li>
							<li><Link href="#type-of-pain-is-the-main-difference"><a className="text-decoration-none">Type Of Pain is the Main Difference Between Shin Splints and Stress Fractures </a></Link></li>
							<li><Link href="#shin-splints-are-more-frequent"><a className="text-decoration-none">Shin Splints are more Frequent than Tibial Stress Fractures</a></Link></li>
							<li><Link href="#various-treatment-differences"><a className="text-decoration-none">Various Treatment Differences Are The Important Reason Why You Need To Make A Difference Between Shin Splints And Stress Fractures</a></Link></li>
							<li><Link href="#conclusion"><a className="text-decoration-none">Conclusion</a></Link></li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="why-hard-to-differentiate-shin-splints-from-stress-fractures" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Why is It Hard to Differentiate Shin Splints from Stress Fractures?</h2>
						<p>There are various similarities between shin splints and tibial stress fractures.</p>
						<p>One of the most important similarity that confuses inexperienced people is shin pain.</p>
						<p>Both of these injuries are characterized by pain in the lower leg, more precisely along the shin bone.</p>
						<p>In both injuries, the pain can occur both during and after exercise and can be aggravated by touching the affected area.</p>
						<p>Moreover, there can also be swelling and redness in the lower leg.</p>
						<p><strong>Both shin splints and stress fractures have similar risk factors.</strong></p>
						<p>Although overuse can cause <Link href="http://www.sportsinjuryclinic.net/sport-injuries/ankle-achilles-shin-pain/shin-splints"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">shin splints</a></Link> and <Link href="https://www.mayoclinic.org/diseases-conditions/stress-fractures/symptoms-causes/syc-20354057"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">stress fractures</a></Link> all by itself, usually there are other factors that contribute to the development of these conditions.</p>
						<p>Some of the most frequent contributing factors are:</p>

						<h3 className="mt-5">Feet structural deformities and abnormalities</h3>
						<div className="d-flex justify-content-center mb-5 shadow rounded">
							<Image
								src="https://res.cloudinary.com/muru/image/upload/v1634007682/difference-between-shin-splints-and-stress-fracture/foot-arch-types_vyrl6a.png" 
								width="1741" 
								height="1268"
								alt="4 foot arch types: flat - normal - high - very high" 
							/>
						</div>
						<p>People with structural feet abnormalities like flat feet and high arches are more prone to various sport injuries, shin splints and stress fractures included.</p>
						<p>Some of the most important reason for this higher risk are change in gait cycle, muscles imbalances and weaknesses, shortening and bigger stress on tendons, ligaments and other supporting structures etc.</p>
						<p>Both people with flat feet and high arches are more prone to shin splints and stress fractures.</p>
						<p>However, there are some reports that claim that people with flat feet have more risk for shin injuries.</p>
						<p>The reason for this is the excessive pronation and straightening the arch of the foot during the impact phase of the gait cycle which cases more stress on the shin bone and muscles.</p>

						<h3 className="mt-5">Unfitting, unsupportive and worn out shoes</h3>
						<p>Every runner should know that they need to change their running shoes more often.</p>
						<p>Worn out shoes lose support and stability, leading to more stress to every part of the lower leg, shin bone and muscles included.</p>
						<p>Shoes that don&rsquo;t give enough support and stability can also raise the risk for shin splints and stress fractures, especially in people with flat feet who need supportive footwear.</p>

						<h3 className="mt-5">Improper or absent warmup and cool-down exercises</h3>
						<p>Warmups and cool down exercises are the important part of every physical activity.</p>
						<p>Both of them have similar aim - they release the tension of muscles and its supporting structures and give them more flexibility.</p>
						<p>Moreover, warm up exercises also prepare muscle for the intensive physical activity that will come.</p>

						<h3 className="mt-5">Weak muscles and muscle imbalances</h3>

						<p>&nbsp;</p>
						<h2 id="type-of-pain-is-the-main-difference" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Type Of Pain is the Main Difference Between Shin Splints and Stress Fractures </h2>
						<p>You are probably asking yourself how to make a difference if the pain is same?</p>
						<p>Well, there are some differences that can help you diagnose the injury easier.</p>
						<p><strong>First difference is the size of the painful area.</strong></p>
						<p>In shin splints, <Link href="http://londonrunningphysio.com/shin-splints-or-a-stress-fracture-understanding-the-leg-pain-that-you-get-when-running/"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">the pain</a></Link> affects bigger area.</p>
						<p>If you run your fingers along the shin bone, it will hurt all the way as you pass your fingers down your shin bone.</p>
						<p>In stress fractures, the pain is usually in one or multiple specific spots along the shin bone that are small in size, while the other parts of the lower leg are less tender or not tender at all.</p>
						<p>Moreover, the spot or spots hurt really deep and throbbing in comparison to the shin splints pain that is usually described as tight and achy.</p>
						<p><strong>Shin splints pain is usually not present while walking or hopping.</strong></p>
						<p>Thanks to this characteristic, there is the so called &lsquo;&rsquo;hop test&rsquo;&rsquo;.</p>
						<p>Stand on the foot of your painful leg and hop.</p>
						<p>If you can hop on it, it is probably not a stress fracture.</p>
						<p>If you cannot hop on it, there is a high chance that you have a lower leg stress fractures.</p>
						<p>The reason why you cannot hop on it is pretty simple - your brain will prevent you because it will know that it is going to hurt thanks to various receptors in the structures.</p>
						<div className="youtube-video-container my-5">
							<iframe 
								className="shadow rounded"
								width="560" 
								height="315" 
								src="https://www.youtube.com/embed/SolVLirP23I?controls=0" 
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen>
							</iframe>
						</div>
						<p><strong>What if you have both localized and radiating pain in the lower leg and shin bone?</strong></p>
						<p>There are many cases of shin pain where patients had the radiating pain first and then pain present in one or multiple spots.</p>
						<p>There are even cases where patient experienced precise pain first and then radiating pain.</p>
						<p>The reason for this is that they&rsquo;ve probably had both shin splints and stress fractures.</p>
						<p>Shin splints cause inflammation of muscle and other tissues attached to the shin bone, causing the inability of the muscle bear the stress.</p>
						<p>Because of it, more stress goes on the bone, causing the stress fractures.</p>
						<p>It can also happen the other way.</p>
						<p>Stress fractures cause weakness and imbalances, leading to more stress and inflammation of the muscles.</p>

						<p>&nbsp;</p>
						<h2 id="shin-splints-are-more-frequent" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Shin Splints are more Frequent than Tibial Stress Fractures</h2>
						<p>Shin splints are more frequent running injuries than tibial stress fractures.</p>
						<p>Both of them are primarily an overuse injury, caused by the repetitive stress during weight bearing activities.</p>
						<p>However, shin splint pain is a result of small tears and inflammation of the muscles attached to the shin bone.</p>
						<p>Because the inflammation is a result of doing too much too soon, shin splints are more common in beginners, runners returning after a long break or runners who rapidly increase the intensity or duration of their workout.</p>
						<p>Lower leg stress fractures are the result of not giving enough time for your bones to recover from intensive physical activities.</p>
						<p>Repetitive stress on the bone over time becomes greater than what the bone can bear, causing the tiny cracks in the bone, also known as stress fractures.</p>
						<p>Because this type of injury takes more time to develop, it can be seen in people who overtrain and is less frequent than shin splints.</p>

						<p>&nbsp;</p>
						<h2 id="various-treatment-differences" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Various Treatment Differences Are The Important Reason Why You Need To Make A Difference Between Shin Splints And Stress Fractures</h2>
						<p><strong>More rest is needed in the case of a stress fracture.</strong></p>
						<p>As with any other sport injury, the initial treatment should be simple home methods like rest, ice, compression and elevation.</p>
						<p>Keep your leg above the level of your heart, compress it with some elastic bandage and ice it every once in a couple of hours for no more than 15 to 20 minutes.</p>
						<p>This way you&rsquo;re going to relief the pain, reduce the swelling and allow tissues to heal.</p>
						<p>Rest is a crucial part of the initial treatment.</p>
						<p>However, there is a difference between how much rest you should take when you have shin splint and stress fractures.</p>
						<p>Although it is recommended in both cases to rest as much as possible, rest is more important for stress fractures.</p>
						<p>Bones take more time to heal in comparison to muscles and other soft tissues.</p>
						<p>That is why you should rest more in the case of stress fractures and completely avoid running and other weight bearing activities for 8 to 16 weeks.</p>
						<p>If you don&rsquo;t allow the bone to heal and get back to your sports too soon, more severe stress fractures can happen and they can become one big total fracture of the bone.</p>
						<p>If you still want to be active, switch to sports that don&rsquo;t involve weight bearing like swimming or cycling.</p>
						<p>You can also work more on your upper body strength.</p>
						<p>In some cases of shin splints, people can still train but at lower intensity.</p>
						<p>However, I still recommend a couple of weeks of rest in order to allow the pain and swelling to resolve completely.</p>
						<p>As soon as the pain and swelling is gone, you can continue with your training.</p>
						<p>Just make sure to increase the intensity of your trainings no more than 10% per week, especially soon after the injury.</p>
						<p>This way you will prevent shin splints from recurring.</p>
						<p><strong>Stretching, strengthening and balance exercises are important for prevention of shin splints.</strong></p>
						<p>Shin splints are often caused by muscle weaknesses and imbalances.</p>
						<p>That is why you should start doing various exercises that will improve the strength and flexibility of the muscles and other supporting tissues.</p>

						<p>&nbsp;</p>
						<h2 id="conclusion" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Conclusion</h2>
						<p>Shin splints and stress fractures are just one of many conditions that have similar symptoms and are hard to differentiate.</p>
						<p>However, there are not so frequent as these two.</p>
						<p>That is why I&rsquo;ve decided to explain the difference and best ways to recognize them.</p>
						<p>This is really important because of the proper treatment and prevention.</p>
						<p>I hope that with this text you&rsquo;ve learned more about shin splints and stress fractures and found out that it is much easier to differentiate them than you&rsquo;ve previously thought.</p>
						<p>If you&rsquo;re still unsure, please go to a doctor.</p>
						<p>He will give you the right diagnosis, treatment and tell you the best ways to prevent further injuries.</p>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
