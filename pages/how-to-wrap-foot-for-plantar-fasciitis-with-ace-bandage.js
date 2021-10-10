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
	const postId = 6;
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
						<p>Suffering from any kind of pain can be a life-changing experience.</p>
						<p>If the pain is located in your feet, the problem is even more serious as you will not be able to move as freely as you used to and that can cause an avalanche of other worrying complications.</p>
						<p>If the pain you feel is located in your heel area and spreads over your arch and the bottom of your foot, you are most likely suffering from the condition known as plantar fasciitis.</p>
						<p>Plantar fasciitis is a very common problem nowadays among people of all ages and professions.</p>
						<p>Luckily for you or your loved ones who have to bear this debilitating agony, there are ways to ease the pain and feel better.</p>
						<p>The solutions offered by health professionals and enthusiasts are numerous, and if you continue reading you will find out useful information regarding this grave condition plus learn how to wrap the foot for plantar fasciitis with an ace bandage.</p>
						<p>Help yourself by reading the following text; it might be the first step to your healing!</p>
						{ /* T.O.C */ }
						<ul>
							<li><Link href="#what-is-plantar-fasciitis"><a className="text-decoration-none">What is Plantar Fasciitis?</a></Link></li>
							<li><Link href="#who-is-at-the-greatest-risk"><a className="text-decoration-none">Who is at the Greatest Risk?</a></Link></li>
							<li><Link href="#how-to-diagnose-the-plantar-fasciitis"><a className="text-decoration-none">How to Diagnose the Plantar Fasciitis?</a></Link></li>
							<li><Link href="#the-most-common-causes"><a className="text-decoration-none">The Most Common Causes</a></Link></li>
							<li><Link href="#the-most-common-symptoms"><a className="text-decoration-none">The Most Common Symptoms</a></Link></li>
							<li><Link href="#wrapping-your-foot-with-ace-bandage"><a className="text-decoration-none">The Most Helpful Pain-relieving Technique for People with Plantar Fasciitis: Wrapping Your Foot with Ace Bandage</a></Link></li>
							<ul>
								<li><Link href="#does-wrapping-really-work"><a className="text-decoration-none">Does wrapping really work?</a></Link></li>
								<li><Link href="#what-is-the-ace-bandage"><a className="text-decoration-none">What is the Ace Bandage?</a></Link></li>
								<li><Link href="#wrapping-with-ace-bandage-techniques"><a className="text-decoration-none">Wrapping with Ace Bandage Techniques</a></Link></li>
									<ul>
										<li><Link href="#the-first-technique"><a className="text-decoration-none">The First Technique</a></Link></li>
										<li><Link href="#the-second-technique"><a className="text-decoration-none">The Second Technique</a></Link></li>
									</ul>
							</ul>
							<li><Link href="#what-size-of-the-ace-bandage-you-should-use"><a className="text-decoration-none">What Size Of The Ace Bandage You Should Use</a></Link></li>
							<li><Link href="#dos-and-donts"><a className="text-decoration-none">Do&apos;s and Don&apos;ts</a></Link></li>
							<li><Link href="#what-if-the-ace-bandage-does-not-work"><a className="text-decoration-none">What If The Ace Bandage Does Not Work</a></Link></li>
							<li><Link href="#conclusion"><a className="text-decoration-none">Conclusion</a></Link></li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="what-is-plantar-fasciitis" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What is Plantar Fasciitis?</h2>
						<div className="d-flex justify-content-center mb-5 shadow rounded">
							<Image
								src="https://res.cloudinary.com/muru/image/upload/v1633840203/how-to-wrap-foot-for-plantar-fasciitis-with-ace-bandage/what-is-plantar-fasciitis-300x300_hwwrxq.jpg" 
								width="300" 
								height="300"
								alt="Platar fasciitis: side view and bottom view" 
							/>
						</div>
						<p>For all of you who are not 100% sure if the pain you are feeling is caused by the plantar fasciitis, I will shortly deal with this condition and the most prominent symptoms you can use to identify it with certainty.</p>
						<p>First of all, you should know that plantar fasciitis is one of the leading causes of heel pain.</p>
						<p>If you have ever injured the plantar fascia - a ligament that connects the toes with your heel bone, and feel pain as a result of that injury, you are most certainly dealing with the plantar fasciitis.</p>
						<p>The main role of the plantar fascia is to support the arch of your foot, and this is why the pain will spread to that area as well.</p>
						<p>The smallest strain of this ligament can result in inflammation and cause swelling and pain in the boot of your foot.</p>

						<p>&nbsp;</p>
						<h2 id="who-is-at-the-greatest-risk" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Who is at the Greatest Risk?</h2>
						<p>It is not clearly defined which population groups are at the greatest risk but it is definitely more common among middle-aged people.</p>
						<p>Being active also increases the risk of suffering from plantar fasciitis as it increases the chances that you will injure this area.</p>
						<p>Therefore, athletes often have to deal with this painful condition as well.</p>
						<p>The bad news is that even if you are completely inactive, or have not walked long due to an illness or for whatever reason it can happen to you too.</p>
						<p>The most &ldquo;dangerous&rdquo; situation is going up and down the stairs as that is when plantar fasciitis most often comes to be.</p>

						<p>&nbsp;</p>
						<h2 id="how-to-diagnose-the-plantar-fasciitis" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How to Diagnose the Plantar Fasciitis?</h2>
						<p>Let the doctor do it, you pay him or her for such services!</p>
						<p>And although I am kidding when I say this, there is a lot of truth to it.</p>
						<p>You should never diagnose yourself, even if you have some medical education.</p>
						<p>The best way to diagnose plantar fasciitis is to observe the way the patient walks and stands.</p>
						<p>Combined with the well-researched medical history and precise identification of the source and location of the pain the patient feels this is the most fault-proof method in diagnosing this condition.</p>
						<p>The doctor should also be informed about the time of the day when the pain is most prominent and the level of fitness of the patient he is examining.</p>
						<p>Pain caused by plantar fasciitis is present mostly in the morning or during your daily activities.</p>
						<p>If you feel the pain at night, you most probably suffer from a different condition such as arthritis.</p>
						<p>Similar symptoms can also be caused by certain nerve issues, or even a small bone fracture, and this is why sometimes the doctor will order for an x-ray image before he gives his final diagnosis and confirms that it is plantar fasciitis indeed.</p>

						<p>&nbsp;</p>
						<h2 id="the-most-common-causes" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>The Most Common Causes</h2>
						<p>Numerous things can contribute to the occurrence of the plantar fasciitis.</p>
						<p>Here is the list of things that can cause or contribute to the development of this aching condition:</p>
						<ul>
							<li className="mb-1"><Link href="/flat-feet-pronation"><a className="text-decoration-none">Flat feet</a></Link></li>
							<li className="mb-1">Very <Link href="/best-running-shoes-for-high-arches"><a className="text-decoration-none">high arch</a></Link></li>
							<li className="mb-1">Excess weight</li>
							<li className="mb-1">Having a &ldquo;standing&rdquo; job</li>
							<li className="mb-1">Wearing old, worn out shoes</li>
							<li className="mb-1">Wearing shoes with thin soles</li>
							<li className="mb-1">Wearing high-heeled shoes for long or too often</li>
							<li className="mb-1">Suffering from &ldquo;heel cords&rdquo; (<Link href="/best-running-shoes-for-achilles-tendonitis"><a className="text-decoration-none">tight Achilles tendons</a></Link>)</li>
							<li className="mb-1">Walking unusually</li>
							<li className="mb-1">Suffering a sport injury</li>
							<li className="mb-1">Walking uphill</li>
							<li className="mb-1">Inadequate landing after jumping</li>
							<li className="mb-1">Working out without the warm up session</li>
						</ul>
						<div className="alert alert-warning">
							<p><strong>Fun Fact:</strong></p>
							<p>Women are at greater risk than men when it comes to suffering from plantar fasciitis.</p>
						</div>

						<p>&nbsp;</p>
						<h2 id="the-most-common-symptoms" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>The Most Common Symptoms</h2>
						<p>There are several symptoms that will help you decide if the plantar fasciitis is your problem or not:</p>
						<ul>
							<li className="mb-3">The pain in the bottom of your foot (located either around the center of heel bone or at the front of it)</li>
							<li className="mb-3">The &ldquo;first-step pain&rdquo; you feel as soon as you get out of the bed in the morning</li>
							<li className="mb-3">The pain that occurs after standing in one place for long time</li>
							<li className="mb-3">The pain you feel when you stand up after sitting for long time</li>
							<li className="mb-3">The pain you feel right after you finish exercising</li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="the-most-common-pain-relieving-techniques" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>The Most Common Pain Relieving Techniques</h2>
						<p>There are numerous actions you can take to feel better and relieve the pain:</p>

						<h3 className="mt-5">Rest</h3>
						<p>Resting is a key to a successful recovery.</p>
						<p>If you work, you must take some days off and try to keep your aching foot up.</p>
						<p>If you must work and use your injured foot, consider using crutches to take the pressure off the foot.</p>

						<h3 className="mt-5">Ice Packs</h3>
						<p>While resting at the comfort of your home, apply the ice therapy to the affected area a couple of times a day.</p>
						<p>Do not let the time of &ldquo;icing&rdquo; the foot to exceed ten minutes.</p>
						<p>The best result will arrive with applying ice three or four times a day, not more than 20 minutes, and don&rsquo;t forget to put a cloth or towel between your skin and the ice pack.</p>
						<p>It is best done in the morning.</p>
						<p>If applying ice directly on foot is not comfortable for you, you can always try an ice bath.</p>
						<p>Just soak your injured foot in a mixture of ice and water for about fifteen minutes.</p>
						<p>You can create an &ldquo;ice roller&rdquo; by freezing some water in a plastic bottle and then roll your foot over it.</p>
						<p>If ice therapy doesn&apos;t help you after a few days, you can always try with a heating pad.</p>
						<p>Although the heat is not the best solution for plantar fasciitis pain, it might help since we all react differently and you have nothing to lose.</p>

						<h3 className="mt-5">Massage the ligament</h3>
						<p>If you cannot afford a physical therapist, you can simply use a tennis ball in the similar way as the iced bottle. Simply roll your foot over ball in all the possible directions.</p>

						<h3 className="mt-5">Minimizing the activities</h3>
						<p>Do not walk for long or run, especially on hard surfaces.</p>
						<p>It is better to make a short pause than convict yourself to a long and painful recovery.</p>
						<p>If you must be physically active, then consider swimming since it will not overburden your foot.</p>

						<h3 className="mt-5">Stretch</h3>
						<p>Stretching exercises are a great way to ease any pain including the one that follows the plantar fasciitis.</p>
						<p><strong>I suggest the so-called &ldquo;rope stretching&rdquo;.</strong></p>
						<p>Take a long rope (or an elastic band) and sit on the floor with your feet in front; position the middle of the rope on the balls of your feet while you hold on to the ends with each of your hand.</p>
						<p>Push the rope slowly and then bring your feet back towards yourself by pulling the rope.</p>
						<p><strong>You can also try the wall stretch.</strong></p>
						<p>It will help to lengthen and stretch your arch and Achilles tendon.</p>
						<ul>
							<li className="mb-3">First, lean forward against a wall, keep one knee straight and the heel of that same leg flat on the floor</li>
							<li className="mb-3">Now bend your other knee, you should feel the Achilles tendon and foot arching on the straight leg stretch as you lean forward</li>
							<li className="mb-3">Hold this position for about ten seconds, then relax and straighten up</li>
							<li className="mb-3">Repeat this twenty times per leg</li>
						</ul>
						<p><strong>Perform a squat stretch to stretch your arch and tendons.</strong></p>
						<p>It is recommended to start with this after some days from when the injury occurred.</p>
						<ul>
							<li className="mb-3">Lean forward onto a countertop and spread your feet shoulder-width apart</li>
							<li className="mb-3">Keep one foot in front of the other</li>
							<li className="mb-3">Bend your knees and slowly squat down while trying to keep your heels on the ground as much as you can</li>
							<li className="mb-3">Stay in the squat position for around 15 seconds then straighten up</li>
							<li className="mb-3">Repeat it twenty times</li>
						</ul>
						<p>You must do all foot stretching gently, slowly, and with extreme care.</p>
						<p>Do not move quickly or you will re-injure the fascia.</p>
						<p>If the pain is too much for you, then stop and try again tomorrow.</p>
						<p>Do not push yourself too far, or you can make the situation even worse.</p>
						<p>Do these stretches three times a day, especially if you&rsquo;ve been sitting for an extended period of time, or you just got up from the bed.</p>

						<h3 className="mt-5">Wear the appropriate shoes</h3>
						<p>Your shoes must support your feet and ankles and be comfortable at the same time.</p>
						<p>Most shoes can&rsquo;t provide enough support, but that is not a problem if you have a heel cup or <Link href="/best-socks-for-plantar-fasciitis"><a className="text-decoration-none">any other type of orthotic</a></Link> that will support your arch.</p>
						<p>The point of elevating your arch is to help distribute the pressure evenly and take that extra stress of your fascia.</p>
						<p>You can get these orthotics in any drugstore or pharmacy without a prescription.</p>
						<p>In case they do not fit you well, you can visit your doctor and order custom made ones for which you will need a prescription.</p>
						<p>Remember if you experienced any foot injury flip-flops are the worst choice and should be avoided even on the beach.</p>

						<h3 className="mt-5">Treat plantar fasciitis with pain medication</h3>
						<p>I advise you to help yourself relieve the pain (at least in the first few days) with over-the-counter pain medication.</p>
						<p>Use them only as advised on the box and no more than two weeks.</p>
						<p>Try with OTC anti-inflammatory medications to reduce the inflammation and the pain.</p>
						<p>That can be Ibuprofen, Advil, Naproxen, just any medication you know works the best for you.</p>
						<p>If you have a plantar fasciitis pain that doesn&apos;t respond to any of the home treatments, your doctor may suggest corticosteroids.</p>
						<p>These injections work better if they are done in the early stages, but doctors only administer them in more severe cases.</p>

						<p>&nbsp;</p>
						<h2 id="wrapping-your-foot-with-ace-bandage" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>The Most Helpful Pain-relieving Technique for People with Plantar Fasciitis: Wrapping Your Foot with Ace Bandage</h2>
						<h3 id="does-wrapping-really-work" className="mt-5">Does wrapping really work?</h3>
						<p>It depends of how bad your injury is, but it is one of the most trusted pain relieving techniques that people use to ease the plantar fasciitis pain.</p>
						<p>In most cases it will work wonders especially when combined with some other methods listed in the previous section.</p>
						<p>You should know though that wrapping or taping will not treat the causes or reverse the condition, but rather just decrease the symptoms.</p>
						<p>Most of all, wrapping your foot with ace bandage will help you walk (but remember that you should rather rest whenever possible!) and prevent some further complication or pain increase.</p>
						<p>The whole point of wrapping your foot is to stabilize the fascia ligament and limit all unnecessary movements.</p>
						<p>This way, you prevent the development of new tears in the injured tissue.</p>
						<p>Of course, if you do it properly.</p>
						<p>Your foot must be clean and dry before wrapping.</p>
						<p>Avoid using moisturizing soap for cleaning the foot since it will prevent the tape from sticking to the skin well.</p>
						<p>Also, wear it during the day and remove it before you go to bed to let your skin breathe.</p>

						<h3 id="what-is-the-ace-bandage" className="mt-5">What is the Ace Bandage?</h3>
						<p>The Ace brand has become synonymous with elastic cotton wrap bandages.</p>
						<p>The bandage is comfortable to wear and should not cause any irritations, not even on the sensitive skin since it is made only from cotton without added latex or dyes.</p>
						<p>It was invented to stay breathable while at the same time, it reduces inflammation and swelling in patients who just had surgery.</p>
						<p>This product will provide light support.</p>
						<p>Nowadays, these bandages are used for compression therapy for sore joints or for total immobilization of sprained limbs.</p>

						<h3 id="wrapping-with-ace-bandage-techniques" className="mt-5">Wrapping with Ace Bandage Techniques</h3>
						<p>Before you start, make sure you sit in a comfortable position so you can rest an injured foot on the opposite knee.</p>
						<p>Always make sure you can reach the foot with ease to be able to stretch it and wrap it properly.</p>
						<p>No matter what method of wrapping you choose, a properly wrapped foot will minimize the inflammation and stress, so make sure you take your time and be extra careful while doing it.</p>
						<p><strong>There are two basic techniques to wrap your feet, and although they are both bound to help you, you will probably find one more comfortable than the other.</strong></p>
						<p>It is therefore best to try both techniques and then decide which one works better for you.</p>

						<h4 id="the-first-technique" className="mt-5">1. The First Technique to Wrap Foot for Plantar Fasciitis with Ace Bandage</h4>
						<p>Start to wrap the ace bandage from the ball of your foot right under your big toe, all the way to the area below your pinkie toe.</p>
						<p>Every next layer of ace bandage should overlap the previous one a bit.</p>
						<p>For the best result, it is recommended to overlap the bandage by half a width without leaving any gaps.</p>
						<p>Make sure you keep the bandage smooth and even.</p>
						<p>Continue until you cover 2/3 of the heel.</p>
						<p>The bandage should sit low on the ankle not go all the way up to cover it.</p>
						<p>At the end, make sure you have secured the bandage well and you are done.</p>
						<p>You can use elastic clips, or if you are using the self-adhering bandage, it will be enough to smooth down the end.</p>
						<p>If you want to try something new, you can acquire an innovative snap fastener from Ace that makes finishing off a wrap effortless.</p>
						<p>Simple, isn&apos;t it?</p>

						<h4 id="the-second-technique" className="mt-5">2. The Second Technique to Wrap Foot for Plantar Fasciitis with Ace Bandage</h4>
						<p>This second method is somewhat more complicated.</p>
						<p>First start the same way as for the first technique- wrap the bandage under your toes.</p>
						<p>However, do not continue doing so until you reach the heel but rather go to the heel straight away and wrap the bandage around it.</p>
						<p>Go back to the starting position, from inside to the outside of your foot.</p>
						<p>The ace bandage should now end under the pinkie toe.</p>
						<p>The next stop should be the top of your foot.</p>
						<p>Finally go below your foot as to form an X shape.</p>
						<p>The point where the bandage crosses should be right in the middle of the plantar fascia.</p>
						<p>Repeat the process one more time and then <Link href="https://video.search.yahoo.com/video/play;_ylt=AwrC5plXwiBbuAMAOBQ0nIlQ;_ylu=X3oDMTByZjF2ZHFmBHNlYwNzcgRzbGsDdmlkBHZ0aWQDBGdwb3MDNw--?p=wrapping+plantar+fasciitis&amp;vid=8d701a6d1dd80ba956cbfe171b8d6ef8&amp;turl=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOVP.XpbBvsAHpxoHSHuhnNLUYgEsDh%26pid%3D15.1%26h%3D225%26w%3D300%26c%3D7%26rs%3D1&amp;rurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1jQv_CipqyU&amp;tit=Plantar+Fasciitis+Taping&amp;c=6&amp;h=225&amp;w=300&amp;l=271&amp;sigr=11b78m7mq&amp;sigt=10opfvq8p&amp;sigi=12rbrdbek&amp;age=1297368021&amp;fr2=p%3As%2Cv%3Av&amp;fr=yhs-iba-1&amp;hsimp=yhs-1&amp;hspart=iba&amp;type=mwds_6047_CHW_RS&amp;tt=b"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">wrap the bandage</a></Link> around your ankle and secure it.</p>
						<div className="youtube-video-container my-5">
							<iframe 
								className="shadow rounded"
								width="560" 
								height="315" 
								src="https://www.youtube.com/embed/1jQv_CipqyU?controls=0" 
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen>
							</iframe>
						</div>
						<p>I hope you got the grips, but you can always watch some <Link href="https://video.search.yahoo.com/video/play;_ylt=AwrC5plXwiBbuAMALhQ0nIlQ;_ylu=X3oDMTByZ2N0cmxpBHNlYwNzcgRzbGsDdmlkBHZ0aWQDBGdwb3MDMg--?p=wrapping+plantar+fasciitis&amp;vid=4da162a71435269280a94190f990bfb8&amp;turl=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOVP.jk7aJUCIo8iCxdcrErJP_QEsDh%26pid%3D15.1%26h%3D225%26w%3D300%26c%3D7%26rs%3D1&amp;rurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Do1gJGN2MNI0&amp;tit=How+to+wrap+your+foot+for+Plantar+Fasciitis+%7C+Dr.+Bembynista&amp;c=1&amp;h=225&amp;w=300&amp;l=67&amp;sigr=11bgtlnaa&amp;sigt=11s33itqt&amp;sigi=12r76f0ng&amp;age=1394491414&amp;fr2=p%3As%2Cv%3Av&amp;fr=yhs-iba-1&amp;hsimp=yhs-1&amp;hspart=iba&amp;type=mwds_6047_CHW_RS&amp;tt=b"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">videos</a></Link> as well.</p>
						<div className="youtube-video-container my-5">
							<iframe 
								className="shadow rounded"
								width="560" 
								height="315" 
								src="https://www.youtube.com/embed/o1gJGN2MNI0?controls=0" 
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen>
							</iframe>
						</div>
						<p>&nbsp;</p>
						<h2 id="what-size-of-the-ace-bandage-you-should-use" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What Size Of The Ace Bandage You Should Use</h2>
						<p>There are many different styles of the Ace product available, so it can be difficult to tell which one is the best for you.</p>
						<p>The width of the Ace bandages come in a range from two to six inches.</p>
						<p>If you need more compression, you should opt for the wider bandage.</p>
						<p>For an adult, a three or four-inch width bandage should be enough.</p>
						<p>For children or people with small feet, the two-inch width should provide enough compression.</p>
						<p>Make sure that you choose the size of the bandage that won&rsquo;t restrict blood flow.</p>

						<p>&nbsp;</p>
						<h2 id="dos-and-donts" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Do&apos;s and Don&apos;ts</h2>
						<p>There are some things you should do to improve the healing process, and there are some things you should avoid for any cost since they will harm the healing process.</p>
						<p><strong>Things you should do:</strong></p>
						<ul>
							<li className="mb-3">Apply the Ace bandage in first two days after an injury occurred</li>
							<li className="mb-3">Apply gentle massage</li>
							<li className="mb-3">Wear night splints to allow your feet to stay a ninety-degree angle</li>
							<li className="mb-3">If the bandage makes your foot go numb or tickle remove it immediately</li>
							<li className="mb-3">Wear bandages on both of your feet even if the only one is troubling you</li>
							<li className="mb-3">For quick and best results pair Ace bandages with Ace Brand Therapeutic Arch support and Ace Brand Plantar Fasciitis Sleep Support.</li>
						</ul>
						<p className="mt-5"><strong>Things you shouldn&rsquo;t do:</strong></p>
						<ul>
							<li className="mb-3">Never use the compression bandage and the ice pack at the same time since it may cause frostbites</li>
							<li className="mb-3">Never wrap your bandages to tight since it will reduce the blood circulation</li>
							<li className="mb-3">Never use gauze wrap it is not elastic enough</li>
							<li className="mb-3">The elastic wrap does not support your foot it only provides compression so do not think can exercise with the ACE bandage on you will only re-injure the foot</li>
							<li className="mb-3">If you are diabetic, or you are suffering from neuropathy or vascular diseases, it is not recommended to use ACE Brand Plantar Fasciitis Sleep Support</li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="what-if-the-ace-bandage-does-not-work" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What If The Ace Bandage Does Not Work</h2>
						<p>In case the Ace bandage techniques do not work well for you, do not give up on wrapping.</p>
						<p>A lot of physical therapists advise using kinesiology tape, also known as KT.</p>
						<p><strong>But what is KT?</strong></p>
						<p>This is an adhesive substance made of hypoallergenic cotton, and it is latex-free.</p>
						<p>It goes directly on foot, and it pulls the skin up away from the muscle (sounds nasty, I know).</p>
						<p>That way, it enhances lymph drainage and blood flow.</p>
						<p>It is highly recommended for people who can&rsquo;t stay inactive.</p>
						<p><strong>Here is how you should apply it.</strong></p>
						<ul>
							<li className="mb-3">First, carefully measure the distance between the ball of the foot and back of the heel. Now cut the tape according to the length you just measured</li>
							<li className="mb-3">The second step is to measure the length from the big toe to the pinkie toe. Cut the length of the tape in four strips and round the edges</li>
							<li className="mb-3">Next, take the first strip and lay it over the arch and up to the back heel to reach the Achilles tendon</li>
							<li className="mb-3">Then, secure it by gently rubbing it down.</li>
							<li className="mb-3">After you properly place the first strip, use four smaller ones to secure the big one over the ball of your foot.</li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="conclusion" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Conclusion</h2>
						<p>Knowing how to wrap foot for plantar fasciitis with ace bandage can help you a lot, but only if you are really suffering from this condition.</p>
						<p>Therefore, please visit the doctor before you go on to implement any of the pain-relieving methods mentioned in this text.</p>
						<p>If none of the methods I mentioned above is helpful to you, then the time has come to visit your podiatrist.</p>
						<p>In most severe cases, the pain will not decrease, and the plantar fascia will not react as it should on the recommended treatments.</p>
						<p>Then, unfortunately, your last resort is surgery.</p>
						<p>During the surgery, a surgeon will release your plantar fascia from the heel bone.</p>
						<p>But be aware that if you undergo surgery, you may end up with a weakened foot arch.</p>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
