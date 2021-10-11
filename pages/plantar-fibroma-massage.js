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
	const postId = 8;
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
						<p>Most people associate pain in the arch of the foot with structural abnormalities such as high arches or flat feet.</p>
						<p>However, there are other various conditions that can also cause this type of pain and discomfort.</p>
						<p>One of them is pretty common and is called plantar fibroma.</p>
						<p>Many people are familiar with plantar fasciitis, but they don&rsquo;t know anything about plantar fibroma, even though it is one of the most common conditions that affects the plantar fascia.</p>
						<p>Recent study has showed that out of all patients with pain and discomfort in the sole of the foot, more than 50% is diagnosed with plantar fibroma.</p>
						<p>The most probable reason for this is the fact that in many cases this condition causes little to no symptoms.</p>
						<p>However, what about cases where the pain and discomfort can limit everyday activities?</p>
						<p>Do not worry, I got you covered.</p>
						<p>Today I&rsquo;m going to talk about plantar fibroma, its symptoms, causes and treatments.</p>
						<p>If you want to find out more about this medical condition, please read on.</p>
						<ul>
							<li><Link href="#what-is-plantar-fibroma"><a className="text-decoration-none">What is Plantar Fibroma?</a></Link></li>
							<li><Link href="#who-is-at-risk-for-developing-plantar-fibroma"><a className="text-decoration-none">Who is at Risk for Developing Plantar Fibroma?</a></Link></li>
							<li><Link href="#what-are-the-symptoms-of-plantar-fibroma"><a className="text-decoration-none">What are The Symptoms of Plantar Fibroma?</a></Link></li>
							<li><Link href="#how-to-diagnose-plantar-fibroma"><a className="text-decoration-none">How to Diagnose Plantar Fibroma?</a></Link></li>
							<li><Link href="#how-to-treat-plantar-fibroma"><a className="text-decoration-none">How to Treat Plantar Fibroma?</a></Link></li>
							<li><Link href="#conclusion"><a className="text-decoration-none">Conclusion</a></Link></li>
						</ul>


						<p>&nbsp;</p>
						<h2 id="what-is-plantar-fibroma" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What is Plantar Fibroma?</h2>
						<p><Link href="https://www.healthline.com/health/plantar-fibroma"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">Plantar fibroma</a></Link> is a medical condition which affects the plantar fascia.</p>
						<p>It is a benign growth of fibrous tissue of plantar fascia in a form of nodule, usually located in the middle of the arch of the foot.</p>
						<p>In order to understand this medical condition better, I think it is also important to know more about plantar fascia and its function.</p>
						<p>Plantar fascia is a fibrous tissue that connects the heel with the front of the foot.</p>
						<p>This strong band of connective tissue has an important role in shock absorption during weight bearing and arch support.</p>
						<p>Plantar fibroma can develop in just one foot or both feet.</p>
						<p>Most cases of this medical condition have one nodule that is located in one foot and is usually less than an inch in size.</p>
						<p>However, it is also possible to have multiple, big nodules in both feet.</p>
						<p>This more severe form is rare and it is also known as plantar fibromatosis or <Link href="https://www.healthline.com/health/ledderhose-disease"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">Ledderhose disease</a></Link>.</p>

						<p>&nbsp;</p>
						<h2 id="who-is-at-risk-for-developing-plantar-fibroma" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Who is at Risk for Developing Plantar Fibroma?</h2>
						<p>The exact <Link href="https://www.medicalnewstoday.com/articles/321742.php"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">cause</a></Link> of plantar fibroma is currently not known.</p>
						<p>It is believed that genetics along with environmental factors cause the development of plantar fibroma.</p>
						<p>Many researches also noticed that this condition is more common in people from North Europe.</p>
						<p>Moreover, men are more likely to be affected than women.</p>
						<p>Because of the importance of plantar fascia in arch support and shock absorption, people with arch structural abnormalities like <Link href="/best-running-shoes-for-high-arches"><a className="text-decoration-none">high arches</a></Link> or <Link href="/flat-feet-pronation"><a className="text-decoration-none">flat feet</a></Link> myself included, are more prone to conditions that affect the sole of the foot.</p>
						<p>Although the exact cause of plantar fibroma is not known, there are various factors that are linked to the development of plantar fibroma.</p>
						<p>Most of these factors cannot directly cause plantar fibroma.</p>
						<p>They just contribute to the development of this condition along with genetic and other environmental factors.</p>

						<h3 className="mt-5">Trauma</h3>
						<p>Many researchers believe that repetitive trauma of plantar fascia can cause abnormal growth of fibrous tissue, causing plantar fibroma.</p>
						<p>However, even though there are many scientific proofs, The American Orthopedic Foot and Ankle Society, discounts trauma as a factor in nodule growth.</p>

						<h3 className="mt-5">Various Medical Condition and Lifestyle Choices</h3>
						<p>Various medical conditions and lifestyle choices such as diabetes, alcoholism, chronic liver disease and epilepsy can contribute to plantar fibroma growth in some way.</p>

						<h3 className="mt-5">Medications and Supplements</h3>
						<p>Some researchers found association between various medications and supplements and plantar fibroma such as: vitamin C, anti-seizure medications (such as phenytoin), some high blood pressure medications (such as beta-blockers), glucosamine and chondroitin.</p>

						<p>&nbsp;</p>
						<h2 id="what-are-the-symptoms-of-plantar-fibroma" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What are The Symptoms of Plantar Fibroma?</h2>
						<p>In the early stages of this medical condition, the plantar fibroma growth is small.</p>
						<p>Because of its small size, you may not feel any <Link href="https://www.foothealthfacts.org/conditions/plantar-fibroma"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">symptoms</a></Link> at all.</p>
						<p>However, if the nodule becomes bigger or there are multiple nodules, you may begin to experience pain or severe discomfort located in the middle of the arch of the foot.</p>
						<p>This discomfort and pain is caused by the size of the nodule as well as the external pressure on the affected area like friction from shoes, walking and standing barefoot or for an extended period of time.</p>
						<p>Pressure on the affected area can cause irritation and inflammation.</p>
						<p>This is the reason why other symptoms of inflammation such as swelling, tenderness and redness in the affected area can also be present.</p>


						<p>&nbsp;</p>
						<h2 id="how-to-diagnose-plantar-fibroma" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How to Diagnose Plantar Fibroma?</h2>
						<p>In most cases, plantar fibroma can be easily <Link href="https://www.footeducation.com/page/plantar-fibroma"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">diagnosed</a></Link> by examination of your foot by a doctor.</p>
						<p>The physical examination of your foot also includes pressing the nodule and the surrounding area.</p>
						<p>The nodule usually feels smooth and rubbery.</p>
						<p>However, because there are other various conditions that can cause a lump on the arch of the foot like cysts, malignancies, infections, additional tests may be necessary.</p>
						<p>These include imaging tests and biopsy.</p>
						<p>Imaging tests and biopsy can confirm or rule out plantar fibroma in suspicious cases.</p>

						<p>&nbsp;</p>
						<h2 id="how-to-treat-plantar-fibroma" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How to Treat Plantar Fibroma?</h2>
						<p>There are two types of <Link href="https://www.hmpgloballearningnetwork.com/site/podiatry/article/7488"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">treatment</a></Link> for plantar fibroma - conservative, non-surgical treatment and surgical treatment.</p>
						<p>The type of treatment depends on the severity of medical condition.</p>
						<p>Most cases of plantar fibroma are treated with non-surgical methods until the pain and discomfort limit your everyday activities.</p>
						<p>The aim of these treatments is to alleviate pain and discomfort and reduce the size of the nodule(s).</p>

						<h3 className="mt-5">Non-surgical Treatments</h3>
						<p>There are various non-surgical treatments with different success rates.</p>
						<p>The most commonly used non-surgical treatments are:</p>

						<h4 className="mt-5">Topical Treatment</h4>
						<p>Topical gels like verapamil may stop the growth of fibrous tissue and reduce the size of the nodule.</p>
						<p>It is believed that when used correctly, this gel can remodel the affected tissue in six to twelve months.</p>
						<p>Some topical medications claim that they can also alleviate pain in just a few months of use.</p>
						<p>Unfortunately, evidence for the effectiveness of these treatments is limited.</p>

						<h4 className="mt-5">Corticosteroid Injections</h4>
						<p>Corticosteroids are anti-inflammatory medications.</p>
						<p>The aim of corticosteroids is to reduce inflammation and relief the symptoms like pain and swelling.</p>
						<p>Injection of corticosteroids in the affected area can reduce inflammation and allow you to walk or stand with greater ease.</p>
						<p>However, this is just a temporary solution that does not affect the size and growth of the nodule.</p>

						<h4 className="mt-5">Orthotics</h4>
						<p><Link href="/best-socks-for-plantar-fasciitis"><a className="text-decoration-none">Shoe support like insoles or pads</a></Link> can alleviate pain by redistributing weight and reducing the pressure on the arch of the foot and plantar fibroma nodule.</p>
						<p>Shoe orthotics are especially helpful in cases where fibroma is small and causes little to no symptoms.</p>
						<p>If over-the-counter orthotics are not helpful, maybe you should consider getting a custom made orthotics.</p>

						<h4 className="mt-5">Home Methods</h4>
						<p>As with almost all foot injuries and conditions, simple home treatments such as rest, ice, elevation along with anti-inflammatory medications can temporary relief the symptoms.</p>
						<p>The aim of this treatment is to reduce inflammation, relief pain and reduce swelling.</p>
						<p>That is why I recommend taking a couple of days off and avoid any intensive physical activities as soon as the symptoms reoccur.</p>
						<p>Try to hold your leg above your heart in order to reduce blood flow in feet and minimize the swelling and apply ice once every 2 to 3 hours for 20 minutes.</p>
						<p>Don&rsquo;t use ice frequently because it can damage the tissues and aggravate this medical condition.</p>

						<h4 className="mt-5">Exercises and Massages</h4>
						<p>One of the factors that may contribute to the development of plantar fibroma is <Link href="/tight-calves-after-running"><a className="text-decoration-none">tight calf muscle</a></Link>.</p>
						<p>Because plantar fascia is actually the continuation of Achilles tendon of calf muscle, calf muscle stretching exercises along with <Link href="/achilles-tendon-massage"><a className="text-decoration-none">the Achilles tendon stretching exercises</a></Link> may help with pain and discomfort in patients with plantar fibroma.</p>
						<p>Moreover, stretching the plantar fascia can also be helpful.</p>
						<p>Just make sure to not put too much pressure on the fibroma itself, because it can make symptoms even worse.</p>
						<p>In general, most of these exercises will offload the arch of the foot and plantar fascia and therefore ease the symptoms.</p>
		
						<div className="alert alert-secondary">
							<p><strong>Stretch Your Calves</strong></p>
							<ul>
								<li className="mb-3">Stand an arm&rsquo;s length from the wall</li>
								<li className="mb-3">Place your right foot behind your left</li>
								<li className="mb-3">Bend end your left leg forward and keep your knee straight</li>
								<li className="mb-3">Make sure your right heel is on the ground</li>
								<li className="mb-3">Hold the stretch for 15 to 30 seconds and release.</li>
								<li className="mb-3">Repeat three times</li>
								<li className="mb-3">Reverse the position of your legs, and repeat</li>
							</ul>
						</div>

						<p><strong>Stretch Your Plantar Fascia</strong></p>
						<p>For these exercises you need to sit up straight on the chair.</p>
						<p>You also need some towel or elastic band and some roller like foam roller, ball or a bottle.</p>
						<ul>
							<li className="mb-3">Roll your foot back and forth over a foam roller, bottle or can. Do this for one minute and then switch to the other foot. The effect is even better if you use frozen bottle.</li>
							<li className="mb-3">Cross one leg over the other. Grab your big toe, pull it gently toward you and hold for 15 to 30 seconds. Repeat three times and then do the same with the other foot.</li>
							<li className="mb-3">Fold a towel lengthwise to make a strap. You can also use some other elastic band. Place the strap under the arches of both feet. Grab the ends of a strap with both hands, and gently pull your feet toward you.</li>
							<li className="mb-3">Hold for 15 to 30 seconds and repeat three times.</li>
						</ul>
	
						<div className="alert alert-secondary">
							<p><strong>Strengthen Your Calves and Plantar Fascia</strong></p>
							<ul>
								<li className="mb-3">Stand on your toes then slowly come back down</li>
								<li className="mb-3">Repeat this 10 times</li>
							</ul>
						</div>

						<p><strong>Massages</strong></p>
						<p>It is believed that various massages along with stretching and strengthening exercises may help with plantar fibroma by:</p>
						<ul>
							<li className="mb-3">Breaking of accumulated fibroma tissue in the foot</li>
							<li className="mb-3">Increase blood circulation and stimulate cell growth</li>
							<li className="mb-3">Pain relief and reduction of swelling</li>
						</ul>

						<div className="alert alert-secondary">
							<p><strong>Plantar fascia massage</strong></p>
							<ul>
								<li className="mb-3">Sit in a chair and cross the injured foot over the knee of your other leg</li>
								<li className="mb-3">Place your fingers over the base of the toes of your injured foot</li>
								<li className="mb-3">Pull your toes toward you until you feel a stretch in the arch of your foot</li>
								<li className="mb-3">With your other hand, massage the bottom of your foot, moving from the heel toward your toes</li>
								<li className="mb-3">Do this for 3 to 5 minutes</li>
							</ul>
							<p>There are some things you should know before you start with massage therapy.</p>
							<p>Always start slow and gently.</p>
							<p>These massages should not be painful.</p>
							<p>Moreover, try to avoid the direct pressure on the plantar fibroma.</p>
							<p>However, there are no studies that claim that physical therapy has a significant help in the treatment of plantar fibromas.</p>
						</div>

						<h3 className="mt-5">Surgical Treatment</h3>
						<p>If plantar fibroma continues to grow or the pain and discomfort gets worse and limit your everyday activities, surgical removal of plantar fibroma may be the only option.</p>
						<p>Recovery and return to usual physical activities is in one to two months, depending on several factors such as severity of the condition, complications etc.</p>
						<p>However, surgical treatment of plantar fibroma is usually avoided.</p>
						<p>It is only considered when all the other available treatments have failed.</p>
						<p>One of the main reasons for this is the high recurrence rate, especially when there are multiple fibromas.</p>
						<p>Another major disadvantage of surgical treatment is the increased risk for developing of other foot conditions such as <Link href="/how-to-get-rid-of-flat-feet"><a className="text-decoration-none">flat feet</a></Link> or hammer toes.</p>
						<p>There is also a risk for other surgical <Link href="https://www.footeducation.com/page/plantar-fibroma"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">complications</a></Link> such as:</p>

						<h4 className="mt-3">Problems with wound healing</h4>
						<p>Problems with wound healing are much more frequent in surgery of the sole of the foot.</p>
						<p>Some of the problems include abnormal scarring, painful wounds etc.</p>

						<h4 className="mt-3">Infections</h4>
						<p>Infection of wound is another complication that happens in 2-5 % of cases.</p>
						<p>Moreover, it is there is a higher chance if the problems with wound healing exist.</p>

						<h4 className="mt-3">Nerve injury</h4>
						<p>The injury or irritation of plantar nerve can happen in 2-5% of cases.</p>

						<p>&nbsp;</p>
						<h2 id="conclusion" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Conclusion</h2>
						<p>Plantar fibroma is a medical condition which affects people differently.</p>
						<p>Some people will have a small lump that doesn&rsquo;t cause any symptoms, while others will experience severe pain and continuous growth of plantar fibroma.</p>
						<p>In either cases, it is important to know that plantar fibromas will not go without treatment.</p>
						<p>Although there are various treatments for plantar fibroma, the effectiveness is individual.</p>
						<p>Same therapy may provide long-term relief in some patients, while in others it may provide only short-term relief.</p>
						<p>In my opinion, you should try every treatment that is available to you.</p>
						<p>Start with more simple treatments that will relief the symptoms such as rest, ice, anti-inflammatory medications, orthotics.</p>
						<p>If they are not so effective, try with other treatments such as topical gels, corticosteroid injections.</p>
						<p>It is important not to skip or miss the treatment.</p>
						<p>Conservative treatment of plantar fibroma takes time and the success rate is not so big.</p>
						<p>That is why you should follow doctor&rsquo;s orders carefully.</p>
						<p>Because plantar fibroma is a non-cancerous, benign tumor, it is not a cause of alarm.</p>
						<p>However, you should always go to your doctor if you have any symptoms that persist for more than a few days.</p>
						<p>I hope that with this text you&rsquo;ve learned more about plantar fibroma, its causes, symptoms and treatments so you will know how to manage this annoying condition much easier.</p>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
