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
	const postId = 0;
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
						<p>Flat feet are the condition that happens due to the poor foot arch.</p>
						<p>It&apos;s a very common issue, and it&apos;s followed by discomfort and pain. It can also lead to numerous other foot problems.</p> 
						<p>The question is, can it be cured?</p>
						<p>Actually, there are several methods to deal and fix this issue, but before taking any measures, it&apos;s important to know what the condition is in detail.</p>
						<p>Flat feet are a normal occurrence in toddlers. Their muscles and tendons are loose, and when they age, the tendons get tighter and stronger. While the muscles and tendons form, also does the arch.</p>
						<p>A lot of people don&apos;t get enough tightening in their tendons and strength in their muscles, so they never fully develop a proper arch.</p>
						<ul>
							<li><Link href="#can-flat-feet-be-cured"><a className="text-decoration-none">Can Flat Feet be Cured?</a></Link></li>
							<li><Link href="#how-can-you-know-if-you-have-flat-feet"><a className="text-decoration-none">How Can You Know if You Have Flat Feet?</a></Link></li>
							<li><Link href="#whats-the-issue-with-fallen-arches"><a className="text-decoration-none">What&apos;s the Issue with Fallen Arches?</a></Link></li>
							<li><Link href="#should-medical-treatment-be-considered"><a className="text-decoration-none">Should Medical Treatment be Considered?</a></Link></li>
							<ul>
								<li><Link href="#how-long-does-it-take-to-recover"><a className="text-decoration-none">How Long does It Take to Recover?</a></Link></li>
								<li><Link href="#is-this-type-of-surgery-risky"><a className="text-decoration-none">Is This Type of Surgery Risky?</a></Link></li>
							</ul>
							<li><Link href="#treatment-by-physical-therapy"><a className="text-decoration-none">Treatment by Physical Therapy</a></Link></li>
							<li><Link href="#useful-foot-exercises"><a className="text-decoration-none">Useful Foot Exercises</a></Link></li>
							<li><Link href="#the-connection-between-weight-and-flat-feet"><a className="text-decoration-none">The Connection between Weight and Flat Feet</a></Link></li>
							<li><Link href="#corticosteroids-as-the-solution-for-the-pain"><a className="text-decoration-none">Corticosteroids as The Solution for The Pain</a></Link></li>
							<li><Link href="#conclusion"><a className="text-decoration-none">Conclusion</a></Link></li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="can-flat-feet-be-cured" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Can Flat Feet be Cured?</h2>
						<p><Link href="https://www.nhs.uk/conditions/flat-feet/"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">Most of the people who have flat feet don&apos;t experience any issues</a></Link>.</p>
						<p>But some of them might suffer from ankle, foot, knee and hip pain.</p>
						<p>Usually, the people who have the most issues are the ones that spend a lot of their time on their feet.</p>
						<p>If you experience these problems, and you know that you have flat feet, there are some things you can do to help yourself.</p>
						<p>I will cover as much as solutions as possible so you can put an end to your suffering, or at least reduce it significantly.</p>
						<p>Even if the pain is not that significant in your case, you should still do something about it.</p>
						<p>Because you might end up having even more problems than you have now.</p>
						<p>Try some of the simple solutions, and consult your doctor about any serious procedures and further instructions.</p>
						<p>Take as much as the info you can, but don&apos;t avoid going to the doctor.</p>
						<p>Even though something simple might reduce the pain and help you at the moment, to be sure that it&apos;s good in the long run by confirming it with your doctor.</p>

						<p>&nbsp;</p>
						<h2 id="how-can-you-know-if-you-have-flat-feet" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How Can You Know if You Have Flat Feet?</h2>
						<div className="d-flex justify-content-center mb-5 shadow rounded">
							<Image
								src="https://res.cloudinary.com/muru/image/upload/v1632968635/how-to-get-rid-of-flat-feet/how-to-get-rid-of-flat-feet-2-nonoptimizedx2_jkmeoy.jpg" 
								width="1024" 
								height="604"
								alt="Healthy foot vs Flat foot outside view" 
							/>
						</div>
						<p>The tendons and muscles that form the arch of your feet might get loosen, and the pain in your feet might not be caused only by being active too much.</p>
						<p><Link href="https://www.mayoclinic.org/diseases-conditions/flatfeet/symptoms-causes/syc-20372604"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">Pay attention to certain signs that can warn you</a></Link>&nbsp;of the fallen arch.</p>
						<p>The most common symptoms are the pain around the arch and heel, the shoes don&apos;t fit properly anymore, it&apos;s hard to stand on your toes and the swelling of the ankles.</p>
						<p>You can always take a simple test.</p> 
						<p>Get your feet wet and stand on the flat surface.</p>
						<p>Look at the imprint your feet left, people with normal arches leave an imprint that has space between the ball of the foot and the heel.</p>
						<p>People who have flat feet leave the complete outline of their foot with no space between the heel and the top of the foot.</p>

						<p>&nbsp;</p>
						<h2 id="whats-the-issue-with-fallen-arches" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What&apos;s the Issue with Fallen Arches?</h2>
						<div className="d-flex justify-content-center mb-5 shadow rounded">
							<Image
								src="https://res.cloudinary.com/muru/image/upload/v1632969320/how-to-get-rid-of-flat-feet/how-to-get-rid-of-flat-feet-3-nonoptimizedx2_vxevye.jpg" 
								width="914" 
								height="768"
								alt="Healthy foot vs. Flat foot inside look" 
							/>
						</div>
						<p><Link href="https://www.webmd.com/pain-management/what-are-fallen-arches#1"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">Even though not everyone with a fallen arch</a></Link>&nbsp;experiences conditions associated with flat feet, weakened foot muscles can contribute to those problems.</p>
						<p>Some of the common things that contribute and are associated with a fallen arch are:</p>
						<h3 className="mt-5">Overpronating</h3>
						<p><Link href="/flat-feet-pronation"><a className="text-decoration-none">Overpronation</a></Link> is common among people with flat feet. It happens when you roll your foot inward when you walk.</p>
						<p>When you have flat feet, it&apos;s much easy to overpronate your feet. Overpronation causes the loss of the ability to absorb the shock which results in pain and discomfort and also increases the risk for injuries.</p>
						<h3 className="mt-4">Achilles Tendonitis</h3>
						<p>The pressure that is put on <Link href="/best-running-shoes-for-achilles-tendonitis"><a className="text-decoration-none">the Achilles tendon</a></Link> can damage it and can make even the simplest movements painful.</p>
						<p>It can even lead to swelling and inflammation if untreated on time.</p>
						<h3 className="mt-4">Shin splints</h3>
						<p><Link href="/difference-between-shin-splints-and-stress-fracture"><a className="text-decoration-none">Shin splints</a></Link> usually happen to runners, and the people who have fallen arches are more prone to shin splints because their shin bone gets inflamed.</p>
						<p>Shin splints are very painful and can significantly reduce the levels of activity you can achieve.</p>
						<h3 className="mt-4">Bunions</h3>
						<p><Link href="/how-to-prevent-bunions-from-getting-worse"><a className="text-decoration-none">Bunions</a></Link>&nbsp;are usually caused by improper footwear. But they can happen due to flat feet as well.</p>
						<p className="mb-5">Flat feet can&apos;t conform to the shoe properly, and they make the creation of bunions easily possible.</p>
						<p>Not everyone with flat feet will have these issues, but weak arches do increase the chance for them.</p>
						<p>Lack of shock absorption lead to pain and discomfort, and those are just the beginning.</p>
						<p>If you experience any of these issues and some serious ones later, medical treatment might be necessary to get rid of them.</p>


						<p>&nbsp;</p>
						<h2 id="should-medical-treatment-be-considered" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Should Medical Treatment be Considered?</h2>
						<p>A lot of people think that surgery is necessary to resolve the issue with flat feet.</p>
						<p>The reconstruction of flat feet can be done&nbsp;<Link href="http://www.aofas.org/footcaremd/treatments/Pages/Flatfoot-Surgical-Correction.aspx"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">with surgery to restore the true function of the arch</a></Link>.</p>
						<p>Usually, it is only the last resort and only the people who experience a lot of pain go through this procedure.</p>
						<p>The procedure usually doesn&apos;t take a lot of time, and you might be required to stay only overnight in the hospital.</p>
						<p>It&apos;s is necessary to perform a few steps to complete the operation.</p>
						<p>It&apos;s best described with two major steps:</p>
						<p>First of all, general anesthetic is applied to numb the foot completely. Then 3 cuts are made on foot; they allow the doctor to remove the weak and damaged tendon. It is then replaced with the healthy one.</p>
						<p>After that is being taken care of, the calcaneal osteotomy is next. It involves inserting a metal screw in the heel bone. It&apos;s supposed to reposition the hell so it can support the arch better.</p>

						<h3 id="how-long-does-it-take-to-recover" className="mt-5">How Long does It Take to Recover?</h3>
						<p>The recovery after the surgery can take some time.</p>
						<p>Especially because it&apos;s done on the feet, which requires stillness for a longer period of time.</p>
						<p>With this particular procedure, the recovery comes in stages.&nbsp;</p>
						<p>The first few days, the foot is completely numb, which should prevent the pain.</p>
						<p>Most likely the foot will be in a cast, sometimes even up to the knee.</p>
						<p>Depending on the individual case, you might be required to stay in the hospital for a few days.</p>
						<p>Painkillers would also be prescribed to cope with the pain.</p>
						<p>Some general tips for recovery after this surgery are:</p>
						<ul>
							<li className="mb-3">Keeping the foot as much elevated as possible to keep down the swelling</li>
							<li className="mb-3">Keep the weight off the foot and consulting a rehabilitation expert</li>
							<li className="mb-3">Limiting the movement</li>
							<li className="mb-3">Constraining from the use of anti-inflammatory drugs. They can make a recovery to take much longer.</li>
						</ul>
						<p>For several weeks you will be required to undergo a number of checkups for a couple of weeks.</p>
						<p>In these checkups, you might be required to take a few x-rays, recasting of the foot and other reviews by the doctor, varying of the individual case.</p>
						<p>The entire recovery should be completed in 12 weeks.</p>

						<h3 id="is-this-type-of-surgery-risky" className="mt-5">Is This Type of Surgery Risky?</h3>
						<p>Well, every surgery comes with some risks.</p>
						<p>This particular one comes with the risks of infections, nerve damage and the symptoms returning from the surgery.</p>
						<p>Of course, these risks are very rare, but still, it&apos;s one of the procedures with the longest recovery period.</p>
						<p>This is why most of the people who have flat feet prefer the non-surgical solutions.</p>
						<p>The natural solutions are designed to lower the pain and strengthen the arch, as well as to lower the risk for any further foot problems.</p>


						<p>&nbsp;</p>
						<h2 id="treatment-by-physical-therapy" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Treatment by Physical Therapy</h2>
						<p>Physical therapy being far less invasive than surgery, it&apos;s the number one choice therapy for flat feet.</p>
						<p>And it&apos;s recommended for people that have at least some flexibility in the tendons of the foot.</p>
						<p>It&apos;s pretty effective, and it can be a very good option for relieving the pain.</p>
						<p>After you visit the physical therapist, he will introduce the stretching exercises to you which are designed to restore the arch in your foot.</p>
						<p>The muscles will strengthen, and the tendons will be tightened.</p>
						<p>Along with these exercises, the therapist might even use the tape to create the artificial arch in the foot.</p>
						<p>It&apos;s not a long-term solution, but it will help to reduce the pain for the moment.</p>
						<p>This type of therapy can also help with inflammation.</p>
						<p>Physical therapy is a quick way to relieve the pain effectively. But, still, medical treatment should be considered if the pain is severe.</p>


						<p>&nbsp;</p>
						<h2 id="useful-foot-exercises" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Useful Foot Exercises</h2>
						<p>The effects of flat feet are well fought with the regular exercises.</p>
						<p>They are designed to add the muscle and increase the strength on the area.</p>
						<p>By adding the muscle, the arch will be better supported, and issues caused by the flat feet will be reduced and eliminated.</p>
						<p>Try some of these useful exercises:</p>

						<h3 className="mt-5">Calf raises</h3>
						<p>This is one of the simplest exercises where the foot muscles aren&apos;t the primary ones in function, but supportive ones.</p>
						<p>Nevertheless, this exercise will strengthen the muscles of the foot if performed regularly.</p>
						<div className="youtube-video-container my-5">
							<iframe 
								className="shadow rounded"
								width="560" 
								height="315" 
								src="https://www.youtube.com/embed/gwLzBJYoWlI?controls=0" 
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen>
							</iframe>
						</div>

						<h3 className="mt-5">Towel grab</h3>
						<p>This is a great foot exercise; it is performed by grabbing a towel while sitting in a chair.</p>
						<p>Position the towel below your toes and pull it towards you.</p>
						<div className="youtube-video-container my-5">
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

						<h3 className="mt-5">Standing raises</h3>
						<p>To perform this exercise, stand on one leg and raise the arch of the foot you&apos;re standing on.</p>
						<p>Hold it in that position for a couple of seconds and then come back down.</p>
						<p>This is a bit harder version of the calf raise exercise.</p>
						<p>Do the same with the other foot and repeat a couple of times a day.</p>
						<div className="youtube-video-container my-5">
							<iframe 
								className="shadow rounded"
								width="560" 
								height="315" 
								src="https://www.youtube.com/embed/MW2WG5l-fYE?controls=0" 
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen>
							</iframe>
						</div>

						<p className="mt-5">Along with these exercises, yoga can be also very helpful and therapeutic massage.</p>
						<p>Actually, anything you can do to strengthen the foot muscles and stretch them can be helpful.</p>
						<p>If you feel the soreness after these exercises, don&apos;t be alarmed, since that is a normal response of the muscles to the workout.</p>
						<p>However, you should know how to differ the soreness from actual pain.</p>
						<p>If you experience the pain, stop pushing yourself, and if you can&apos;t figure out how and what exercises are best for your case, consult the physical therapist.</p>

						<p>&nbsp;</p>
						<h2 id="the-connection-between-weight-and-flat-feet" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>The Connection between Weight and Flat Feet</h2>
						<p>Fallen arches are a common occurrence for older people who tend to put too much pressure on their feet due to increased body weight over time.</p>
						<p>Obesity and foot pain are often linked one to another.</p>
						<p>Losing the extra weight can reduce the pressure put on the feet and indirectly reduce the pain.</p>
						<p>A healthy diet is a good way to start, and a caloric deficit on a daily basis until the weight is reduced.</p>
						<p>Exercising can speed up the process significantly and strengthen the muscles at the same time.</p>

						<p>&nbsp;</p>
						<h2 id="corticosteroids-as-the-solution-for-the-pain" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Corticosteroids as The Solution for The Pain</h2>
						<p>Corticosteroids are the solution for people who experience a lot of pain.</p>
						<p>Corticosteroids can reduce the inflammation significantly and temporarily reduce the pain.</p>
						<p>Even though these injections can help a lot, they are not the permanent solution.</p>
						<p>They are not the cure for flat feet, and you should not get used to them.</p>
						<p>Using them once in a while to relieve the pain is ok, and if they don&apos;t remove the inflammation, some other permanent option should be considered.</p>

						<p>&nbsp;</p>
						<h2 id="conclusion" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Conclusion</h2>
						<p>Self-help is possible with the pain in your feet, but it&apos;s always recommended to consult a doctor.</p>
						<p>Try the exercises out, and if you don&apos;t notice the improvement, consider medical treatment.</p>
						<p>The longer time you take to act, the worse the condition will be.</p>
						<p>I hope these tips and information was of help to you, and you managed to get the better idea what exactly the flat feet are, how do they form and how are they treatable.</p>

					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
