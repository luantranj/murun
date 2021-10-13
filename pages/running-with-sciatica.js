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
	const postId = 25;
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
						<p>If you take the time to do a quick Google search for the term &ldquo;sciatica,&rdquo; a bunch of results will come up &ndash; causes, risk factors, symptoms, and what not.</p>
						<p>But the real question that every avid runner is genuinely looking to answer is:</p>
						<p>Is running with sciatica possible?</p>
						<p>Surely there&rsquo;s something you can do, besides giving up your favorite sporting activity for good, right?</p>
						<p>Of course, there is, and I&rsquo;m going to tell you all about it &ndash; let&rsquo;s start by covering the basics!</p>
						{ /* kimjiwon */ }
						<ul>
							<li><Link href="#causes-and-symptoms"><a className="text-decoration-none">Sciatica: Causes And Symptoms Of This Painful Condition</a></Link></li>
							<li><Link href="#to-run-or-not-to-run"><a className="text-decoration-none">To Run Or Not To Run – That Is The Question</a></Link></li>
							<li><Link href="#how-to-overcome-sciatica"><a className="text-decoration-none">How To Overcome Sciatica: 5 Treatment Options</a></Link></li>
							<li><Link href="#final-thoughts"><a className="text-decoration-none">Sciatica And Running: Final Thoughts</a></Link></li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="causes-and-symptoms" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Sciatica: Causes And Symptoms Of This Painful Condition</h2>

						<h3 className="mt-5">Symptoms</h3>
						<p>Since you&rsquo;re here, reading this, I&rsquo;m guessing you already know what the primary symptom of sciatica is from first-hand experience.</p>
						<p>Most people, if asked, would describe it as a severe, shooting pain that starts in the lower back &ndash; or <Link href="https://www.spine-health.com/conditions/spine-anatomy/lumbar-spine-anatomy-and-pain"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">lumbar spine</a></Link> &ndash; and extends, through your buttock, all the way to the rear of your thigh, and further down your leg.</p>

						<p>Sometimes, it may even reach your foot and toes, although that depends on where the nerve is affected.</p>
						<p>Does that sound about right?</p>
						<p>But besides this so-called hallmark symptom of sciatica, you should look out for a couple more signs and symptoms, as well:</p>
						<ul>
							<li className="mb-3">The pain sometimes radiates in the hip area, making it seem like the hip pain</li>
							<li className="mb-3">A burning sensation or the feeling of &ldquo;pins and needles&rdquo; that spreads down one of your legs</li>
							<li className="mb-3">A sense of numbness or weakness that results in difficulty in moving your leg</li>
							<li className="mb-3">Even something as simple as sneezing or having a good laugh causes the pain to increase all of a sudden. And don&rsquo;t even get me started on bending at the waist</li>
							<li className="mb-3">Trying to stand up after sitting for quite some time results in sharp, shooting pain in the affected leg. The same might happen if you spend too much time standing, as well</li>
							<li className="mb-3">The pain might be followed by a muscle spasm in your leg or lower back, as well</li>
						</ul>

						<h3 className="mt-5">What Might Be The Cause?</h3>
						<p>If you&rsquo;re experiencing any of the symptoms mentioned above to a point where they&rsquo;re affecting your everyday life and becoming debilitating, you should seek medical attention as soon as possible.</p>
						<p>Now, remember, sciatica is not a real diagnosis.</p>
						<p>Instead, it&rsquo;s a symptom of an entirely different, often more severe, health problem, and more often than not, one of these conditions is to blame:</p>

						<h4 className="mt-3">Herniated Disc</h4>
						<p>A bulging disc, a slipped disc, a <Link href="https://www.mayoclinic.org/diseases-conditions/herniated-disk/symptoms-causes/syc-20354095"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">ruptured disc</a></Link>, whatever you choose to call it, the problem stays the same &ndash; the disc&rsquo;s soft inner material has leaked, causing not only nerve compression but irritation due to hyaluronic acid, too.</p>

						<h4 className="mt-3">Lumbar Spinal Stenosis</h4>
						<p>The nerve compression disorder is often seen in older adults, above the 60-year mark, meaning it&rsquo;s related to the unavoidable process of aging, and there&rsquo;s not much you can do about that.</p>

						<h4 className="mt-3">Spondylolisthesis</h4>
						<p>What happens in people suffering from <Link href="https://www.webmd.com/back-pain/guide/pain-management-spondylolisthesis"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">spondylolisthesis</a></Link> is that one of their vertebra, usually those in the lumbar spine, slips forward over the adjacent one.</p>
						<p>As a result of disc space collapse, the spinal nerve can get pinched.</p>

						<h4 className="mt-3">Trauma</h4>
						<p>Suffering a direct blow to the lumbar area, either as a result of a car accident, sports injury or falling, can result in direct compression of the sciatic nerve.</p>
						<p>Alternatively, a broken lumbar vertebra &ndash; its fragments, to be exact &ndash; could compress the nerve, as well.</p>

						<h4 className="mt-3">Piriformis Syndrome</h4>
						<p>There&rsquo;s one more cause worth mentioning, but to be fair, it&rsquo;s not so much of a cause, as it is a condition that often gets confused with sciatica in runners.</p>
						<p>Have you heard about <Link href="https://www.spine-health.com/conditions/sciatica/what-piriformis-syndrome"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">piriformis syndrome</a></Link> before?</p>
						<p>The two are often misdiagnosed and overall hard to distinguish from one another because the piriformis syndrome will have some sciatica-like symptoms.</p>
						<p>Wonderful, huh?</p>
						<p>Here&rsquo;s a video that sums it up perfectly:</p>
						<div className="youtube-video-container mt-3 mb-5">
							<iframe 
								className="shadow rounded"
								width="560" 
								height="315" 
								src="https://www.youtube.com/embed/0vHYGR3krkI?controls=0" 
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen>
							</iframe>
						</div>

						<p>&nbsp;</p>
						<h2 id="to-run-or-not-to-run" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>To Run Or Not To Run – That Is The Question</h2>
						<p>Before we tackled the actual issue of sciatica and running, I wanted you to see that there&rsquo;s no real connection between the two.</p>
						<p>I would even go as far as to say that running could improve your condition, and work as a form of treatment.</p>
						<p>So, what seems to be the problem with sciatica and running, two words no runner wants to see in the same sentence?</p>
						<p>It&rsquo;s the muscles - those located in the lower back, buttocks, the back of your thighs, and calves &ndash; that are causing all the commotion.</p>
						<p>Those are the muscles you use when you&rsquo;re running, and, unfortunately, the same ones that the sciatic nerve passes through on its way down.</p>
						<p>That&rsquo;s why some people tend to blame their sciatic pain on running, and others report the pain becoming almost unbearable during their daily runs.</p>
						<p>So, we&rsquo;re now well past the point of establishing that sciatica does make running difficult, not to mention painful.</p>
						<p>But does it mean you should stop running with sciatica?</p>
						<p>Of course not!</p>
						<p>Even if you&rsquo;re a complete beginner, thinking about following the <Link href="/does-couch-to-5k-work"><a className="text-decoration-none">Couch to 5K</a></Link> program, know that sciatica and running don&rsquo;t have to be mutually exclusive.</p>
						<p>On that note, there are some things you need you can try to make running with sciatica a whole lot easier &ndash; maybe you can&rsquo;t beat it, but you can certainly do something to minimize it:</p>
						<p>The first thing you should do is check your running form.</p>
						<p>A shorter stride can make all the difference.</p>
						<p>Also, try switching from hardcore sprinting to a lighter pace.</p>
						<p>It may not work, but you won&rsquo;t know unless you try, right?</p>
						<p>Aim for distance, not speed.</p>
						<p>These <Link href="/track-workout-for-distance-runners"><a className="text-decoration-none">track workouts for distance runners</a></Link> might help!</p>
						<p>When you go running, try and stay away from concrete and other hard surfaces, and opt for softer ground and grass, instead.<br /> <br />Remember to stretch thoroughly, focusing on your leg muscles and lower back.</p>
						<p>That should be something you&rsquo;re already doing, but if you&rsquo;re known for skipping a few stretches now and then, now&rsquo;s the time to get serious about lunges and high-knee lifts.</p>
						<p>Have you thought about changing your running shoes?</p>
						<p>You might be wondering what shoes have to do with sciatic pain, notably when we already established that the cause is rooted in the lumbar spine, but wearing supportive well-cushioned shoes could reduce the impact running has on your knees and hips.</p>
						<p>Also &ndash; and this one might sound crazy &ndash; consider ditching your shoes entirely, and try going barefoot.</p>
						<p>Start with walking, and see how it goes.<br /> <br />A hot pack might help alleviate the symptoms and loosen up your muscles before running.</p>
						<p>Even something as simple as a steamed towel or a hot water bottle can do wonders when you apply them to the area in your lower back, around the sciatic nerve, for 10 to 20 minutes.</p>
						<p>Afterward, you can use ice packs, as they can help reduce activity-related pain, and soothe inflammation.<br /> <br />Our bodies need water &ndash; that&rsquo;s a fact.</p>
						<p>But did you know that keeping your hydration levels up might help you deal with sciatica?</p>
						<p>Yes, you read that right &ndash; even something as simple as drinking water can provide some relief.<br /> <br />Consider taking over-the-counter meds before your runs to help ease the pain &ndash; it&rsquo;s far from ideal, but if all else fails, what else can you do?</p>
						<p>All of the things mentioned above can help, but they&rsquo;re nothing more than quick fixes, something you can&rsquo;t keep doing for long.</p>
						<p>If you leave sciatica untreated &ndash; or whatever it&rsquo;s causing it, to be exact &ndash; chances are it will get worse with time.</p>
						<p>I&rsquo;m pretty sure no runner is willing to take that chance.</p>
						<p>Are you?</p>
						<p>So, let&rsquo;s see what you can do about running with sciatica regarding pain relief and treatment, shall we?</p>

						<p>&nbsp;</p>
						<h2 id="how-to-overcome-sciatica" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How To Overcome Sciatica: 5 Treatment Options</h2>
						<p>We have a joined goal here &ndash; to get you back on the running track as soon as possible.</p>
						<p>Here are some suggestions on what you can do to handle the pain and speed up your recovery:</p>

						<h3 className="mt-5">1. Medication Will Help Deal With The Pain</h3>
						<p>I&rsquo;ve already mentioned that over-the-counter medication is a viable solution for sciatic pain.</p>
						<p>The same goes for prescription meds, although you&rsquo;ll have to talk to your doctor about them.</p>
						<p>Think of anti-inflammatories, such as ibuprofen, as the first line of defense.</p>
						<p>If they fail, muscle relaxants and narcotics are the next in line, although they&rsquo;re typically prescribed as a short-term solution, for no more than two weeks at a time.</p>
						<p>In some cases, anti-seizure medications and tricyclic antidepressants seem to provide some relief, but it all depends on what&rsquo;s causing sciatica in the first place.</p>

						<h3 className="mt-5">2. Steroid Injections Are An Option, Too</h3>
						<p>In cases of severe and persistent pain, your doctor might suggest corticosteroid injections, because they&rsquo;re one of the best ways to address the inflammation around the irritated sciatic nerve that&rsquo;s taken over your everyday life.</p>
						<p>Epidural steroid injections offer the massive advantage of being semi-permanent (their effect usually lasts for a solid few months), but they come with a couple of downsides, too.</p>
						<p>First off, they have to be injected directly into the area around the nerve root, which is painful enough as it is, but most importantly, their use &ndash; frequency of use, to be exact - is limited due to possible side-effects.</p>

						<h3 className="mt-5">3. Physical Therapy Helps With Stretching And Strengthening Muscles</h3>
						<p>You might be wondering why I waited this long to talk about physical therapy.</p>
						<p>Well, the main reason is that you should deal with the acute pain before you move on to the actual rehabilitation program.</p>
						<p>The focus of physical therapy for sciatica should be on strengthening and stretching, as well as aerobic conditioning, with the goal of correcting your posture, improving your flexibility, and making your core muscles stronger.</p>
						<p>I&rsquo;m sure that, as a runner, you already have an above-average fitness level, but you should give physical therapy a try, nonetheless.</p>
						<p>Just don&rsquo;t go off <Link href="/running-with-ankle-weights"><a className="text-decoration-none">running with ankle weights</a></Link>, thinking it could help &ndash; you&rsquo;re already in enough pain as it is.</p>
						<p>This video will give you an idea of what to expect:</p>
						<div className="youtube-video-container my-5">
							<iframe 
								className="shadow rounded"
								width="560" 
								height="315" 
								src="https://www.youtube.com/embed/CbZzeO4P9YA?controls=0" 
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen>
							</iframe>
						</div>

						<h3 className="mt-5">4. Acupuncture As An Alternative</h3>
						<p>There are standard medical treatments, and then there are the alternative ones, like acupuncture.</p>
						<p>Even if you&rsquo;re not a huge fan of New Age practices, I strongly encourage you to give acupuncture a shot.</p>
						<p>After all, both the FDA (U.S. Food and Drug Administration) and the National Institutes of Health have approved it as a legitimate treatment for back-related issues, including sciatica.</p>

						<h3 className="mt-5">5. Surgery As The Last Resort</h3>
						<p>That&rsquo;s the treatment option we&rsquo;re trying to avoid here, but sadly, in some cases, it&rsquo;s the only solution that works.</p>
						<p>Don&rsquo;t go off panicking just yet, though &ndash; it&rsquo;s usually an option for those suffering from a severe and debilitating form of sciatica, where the quality of life is significantly impaired.</p>
						<p>Trust me; your doctor will go through all the other treatment methods first.</p>
						<p>If nothing else works or the pain persists for more than six weeks at a time, then &ndash; and only then &ndash; will they suggest surgery.</p>
						<p>The final decision is on you, though, as it is an elective procedure.</p>

						<p>&nbsp;</p>
						<h2 id="final-thoughts" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Sciatica And Running: Final Thoughts</h2>
						<p>So far, I think it&rsquo;s safe to assume that no, sciatica won&rsquo;t prevent you from running &ndash; as long as you do it correctly, that is.</p>
						<p>However, keep in mind that your physician has the final word on sciatica and running.</p>
						<p>If they do advise you to take a break from running, for the time being, remember it&rsquo;s not the end of the world &ndash; it might be the last thing you want to hear, but it&rsquo;s for your own good.</p>
						<p>I&rsquo;m sure you&rsquo;ll be back on the running tracks in no time, so see you there!</p>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
