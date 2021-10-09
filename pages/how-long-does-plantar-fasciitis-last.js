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
	const postId = 5;
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
						<p>The recovery time of Plantar Fasciitis varies based on the number of factors.</p>
						<p>The recovery time may last from a few days up to even a few years if it&apos;s not treated properly.</p>
						<p>Long recovery time may be caused by the wrong treatment or improper recovery.</p>
						<p>Mostly the people can&apos;t stay off their feet enough which extends their recovery time significantly.</p>
						<p>It&apos;s pretty easy to increase the recovery time from weeks to months if the treatment and recovery is not taken seriously.</p>
						<p>And it&apos;s even more complicated if you are flat footed like me, I know exactly what you might be going through, so I&apos;m going to tell you all about it.</p>
						<ul>
							<li><Link href="#what-plantar-fasciitis-actually-is"><a className="text-decoration-none">What Plantar Fasciitis Actually is?</a></Link></li>
							<li><Link href="#what-are-the-causes"><a className="text-decoration-none">What are The Causes?</a></Link></li>
							<li><Link href="#the-symptoms"><a className="text-decoration-none">The Symptoms</a></Link></li>
							<li><Link href="#how-to-cure-the-plantar-fasciitis"><a className="text-decoration-none">How to Cure the Plantar Fasciitis</a></Link></li>
							<li><Link href="#preventing-plantar-fasciitis-from-returning"><a className="text-decoration-none">Preventing Plantar Fasciitis from Returning</a></Link></li>
							<li><Link href="#summary"><a className="text-decoration-none">Summary</a></Link></li>
							<li><Link href="#conclusion"><a className="text-decoration-none">Conclusion</a></Link></li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="what-plantar-fasciitis-actually-is" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What Plantar Fasciitis Actually is?</h2>
						<p>Heel pain can be caused by many illnesses and injuries, <Link href="https://en.wikipedia.org/wiki/Plantar_fasciitis"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">but the most common cause is Plantar Fasciitis</a></Link>.</p>
						<p>It&apos;s an inflammation of the tissue that goes across the bottom of the foot, from the toes to the heel.</p>
						<p>This ligament&apos;s purpose is to support the arch of the foot and to absorb the shocks.</p>
						<p>The plantar fascia is not very elastic, what makes it prone to damages.</p>
						<p>Too much flexing makes it weak. When the feet are put under too much pressure, the ligament can be inflamed.</p>
						<p>The whole area is very prone to tiny tears, and the sometimes the ligament can be pulled away.</p>
						<p>Plantar Fasciitis is a common condition, and it can cause a lot of discomfort and pain.</p>
						<p>The pain can be so severe that it can completely restrict your movement.</p>

						<p>&nbsp;</p>
						<h2 id="what-are-the-causes" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What are The Causes?</h2>
						<p>Plantar fasciitis can be caused by several activities and behaviors.</p>
						<p>One of the most common causes is simply being overweight.</p>
						<p>Having the extra unnecessary weight can put a lot of pressure on the feet, heels especially.</p>
						<p>When the heel is constantly under pressure eventually, it will develop plantar fasciitis.</p>
						<p>Just by cutting some weight you can say goodbye to plantar fasciitis and say hello to the lighter and easier movement.</p>
						<p>Some people struggle with plantar fasciitis because their job involves standing on their feet for a long time.</p>
						<p>Standing constantly on your feet for extended period of time also puts a lot of pressure on the heel, and eventually, it starts showing symptoms of plantar fasciitis.</p>
						<p>Sudden lifestyle changes can also trigger the plantar fasciitis.</p>
						<p>If you spend most of your life being inactive and suddenly you start being a lot more active, you may injure your plantar fascia.</p>
						<p>If you&apos;re going to change your lifestyle significantly, it&apos;s important that you do it gradually.</p>
						<p>A sudden change in the movement, mostly in sports, can cause the plantar fasciitis.</p>
						<p>Landing hard on the heel or twisting the foot can be the causes of plantar fasciitis.</p>
						<p>These causes are not that preventable because they happen quickly and like an accident.</p>
						<p>Intense sports activity can cause wear and tear of the heel and the plantar fascia.</p>
						<p>Not taking enough time to rest from the intense sports activities can increase the sensitivity of the ligament and make it very prone to tearing.</p>
						<p>Wearing shoes with poor arch support or the shoes that don&apos;t fit you well can also be the cause.</p>
						<p>If the shoes are not that supportive and comfortable getting the supportive insoles is the least you should do.</p>
						<p>Having the tight Achilles tendon often can lead to Plantar fasciitis.</p>
						<p><Link href="/achilles-tendon-massage"><a className="text-decoration-none">Tight Achilles tendon</a></Link> reduces the ability to flex the ankle, and it can indirectly put the pressure on the plantar fascia.</p>

						<p>&nbsp;</p>
						<h2 id="the-symptoms" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>The Symptoms</h2>
						<p><Link href="https://emedicine.medscape.com/article/307562-clinical"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">Plantar Fasciitis can be confused with Calcaneal bursitis</a></Link>.</p>
						<p>Bursitis, although similar pain-wise, is caused by inflammation of the bursa, which is under the heel.</p>
						<p>Plantar fasciitis occurs on the footbed. The first symptom is, of course, the pain.</p>
						<p>The pain is felt before any activity, and it spreads on the bottom of the foot.</p>
						<p>The pain is the strongest early in the morning and increases as you increase your activity.</p>
						<p>Sometimes the area can get swollen, and the symptoms may decrease a bit if you take a bit of rest, because the blood flow increases and it makes the fascia more elastic.</p>
						<p>Most people first notice it while going up the stairs.</p>
						<p>It&apos;s best described as a stabbing pain or burning of the area around the heel.</p>
						<p>You can also feel an intense pain far worse than before, and that can be due to a rupture of the plantar fascia.</p>
						<p>Rupture of the plantar fascia can be caused by the high-intensity workouts and sports.</p>
						<p>Jogging on hard surfaces can also lead to rupture of the ligament and even wearing the wrong shoes.</p>
						<p>Those ruptures are very serious and should be treated immediately.</p>

						<p>&nbsp;</p>
						<h2 id="how-to-cure-the-plantar-fasciitis" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How to Cure the Plantar Fasciitis</h2>
						<h3 className="mt-5">Rest</h3>
						<p>Give your foot the time to heal.</p>
						<p>Take some time off and rest.</p>
						<p>This is the most important step which will directly impact the longevity of the recovery.</p>
						<p>Don&apos;t perform the repetitive movements, because they can prevent the ligament from healing faster.</p>
						<p>You will need several weeks of rest to heal properly.</p>
						<p>The exact recovery period cannot be said, because it differs from person to person.</p>

						<h3 className="mt-5">Ice</h3>
						<p>Putting the ice on the heel can help with the swelling.</p>
						<p>Apply the ice pack and elevating your foot for around 20 minutes about 3 times a day can help significantly.</p>
						<p>You can also freeze the water bottle and roll your foot over it.</p>
						<p>It&apos;s a great way to massage the damaged area.</p>

						<h3 className="mt-5">Foot massage with essential oils</h3>
						<p>Foot massage with essential oils can reduce the inflammation.</p>
						<p>But, it should be performed only when the swelling subsides.</p>
						<p>To increase the blood flow, perform <Link href="/essential-oils-for-plantar-fasciitis"><a className="text-decoration-none">warm oil massages</a></Link>, and you will speed up the recovery time.</p>

						<h3 className="mt-5">Pain relief ointments</h3>
						<p>Using the pain relief ointments can ease the pain.</p>
						<p>You can use Epsom salt in the warm water and soak your feet in it.</p>
						<p>By doing so few times a week, you will feel the relief in the affected area.</p>

						<h3 className="mt-5">Taping</h3>
						<p>Taping the foot can help immobilize the foot and reduce the discomfort.</p>

						<p>&nbsp;</p>
						<h2 id="preventing-plantar-fasciitis-from-returning" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Preventing Plantar Fasciitis from Returning</h2>
						<p>There are a lot of things you can do to prevent the injury of the plantar fascia.</p>
						<p>I will list some of the top measures you can take to prevent the pain in the plantar fascia.</p>

						<h3 className="mt-5">Proper shoes</h3>
						<p>To prevent the injury of the foot you have to choose your shoes carefully.</p>
						<p>Based on your foot mechanics and the amount of your activity, your footwear should be chosen.</p>
						<p>Proper shoes can increase the comfort and reduce the stress your feet are being exposed to.</p>
						<p>Opt out for a proper running or walking shoes that have plenty of support for your arch.</p>
						<p>I would recommend that you wear the shoes which have a bit higher heel to toe dip.</p>
						<p>This way you will reduce the stress on the plantar fascia.</p>

						<h3 className="mt-5">Orthotic inserts</h3>
						<p>Try the orthotic inserts to improve the functionality of your feet.</p>
						<p>They are made especially to support your feet and control your gait.</p>
						<p>Invest in good footwear and don&apos;t wear the old, this is your first line of defense for plantar fasciitis.</p>

						<h3 className="mt-5">Reduce your weight</h3>
						<p>Keeping your body weight in check and at a healthy level will reduce the chance of plantar fasciitis, and it will improve your health overall.</p>
						<p>Keep in mind that your legs carry your body weight all the time.</p>

						<h3 className="mt-5">Warm up before any exercise and stretch the muscles after</h3>
						<p>Warming up increases the blood flow and allows the muscles to perform properly, and stretching releases the tensions.</p>

						<p>&nbsp;</p>
						<h2 id="summary" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Summary</h2>
						<p>Taking everything into consideration the recovery time depends on these factors:</p>
						<ul>
							<li className="mb-3">The length of the injury not being treated. The longer you wait, the longer you will recover</li>
							<li className="mb-3">The severity of the damage to the plantar fascia. The bigger the injury, the longer the recovery</li>
							<li className="mb-3">If the ligament has a tear, the recovery time will significantly be longer</li>
							<li className="mb-3">The use of prescription orthotics. They can shorten the recovery</li>
							<li className="mb-3">It depends on the nature of your job. If you have to be active and you have to spend a lot of time on your feet, the recovery time will be much longer</li>
							<li className="mb-3">Body weight highly affects the recovery time. Cutting the body weight can prevent the injury from returning, and it can speed up the recovery process</li>
							<li className="mb-3">Proper footwear can help a lot</li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="conclusion" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Conclusion</h2>
						<p>The length of the recovery depends mostly on you.</p>
						<p>It can vary on the level of injury, but your actions after the injury will impact the recovery time the most.</p>
						<p>It can also vary based on your body, not all of us heal the same.</p>
						<p>But the most important thing for you to remember is to restrain yourself from excessive movement until your foot is healed.</p>
						<p>Keep your leg iced and elevated, by following only these two pieces of advice; your recovery time can shorten from few months to few weeks.</p>
						<p>Be patient, and take care of yourself, because if you won&apos;t who will?</p>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
