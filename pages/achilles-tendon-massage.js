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
	const postId = 11;
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
						<p>The last time I heard a story about rupturing an <Link href="https://www.webmd.com/fitness-exercise/picture-of-the-achilles-tendon"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">Achilles tendon</a></Link>, the guy was playing tennis and lunged after a ball.</p>
						<p>He just dropped to the ground.</p>
						<p>He knew that he should not move because the foot did not feel right and when you hear something like that, trust me - the last thing you want to do is move with the injury.</p>
						<p>Fortunately, keeping still was precisely the right thing to do.</p>
						<p>A similar scenario happened to me while I was running.</p>
						<p>After many months of a limited range of motion, persistent discomfort and third cortisone shot for <Link href="/best-running-shoes-for-achilles-tendonitis/"><a className="text-decoration-none">Achilles tendonitis</a></Link> and still no relief, I went researching and found out the technique called &ldquo;friction massage.&rdquo;</p>
						<p>That&rsquo;s when things began to change.</p>
						<p>But first of all, let&rsquo;s state some facts about Achilles tendonitis.</p>
						{ /* kimjiwon */ }
						<ul>
							<li><Link href="#what-is-achilles-tendonitis"><a className="text-decoration-none">What Is Achilles Tendonitis?</a></Link></li>
							<li><Link href="#causes-of-achilles-tendinitis"><a className="text-decoration-none">Causes of Achilles Tendinitis</a></Link></li>
							<li><Link href="#self-massage-technique-for-achilles-tendonitis"><a className="text-decoration-none">Self-Massage Technique for Achilles Tendonitis</a></Link></li>
							<li><Link href="#how-to-do-a-friction-massage"><a className="text-decoration-none">How to Do a Friction Massage?how-to-do-a-friction-massage</a></Link></li>
							<li><Link href="#how-does-friction-massage-work"><a className="text-decoration-none">How does Friction Massage Work?</a></Link></li>
							<li><Link href="#are-there-any-risks-of-friction-massage"><a className="text-decoration-none">Are There Any Risks of Friction Massage?</a></Link></li>
							<li><Link href="#conclusion"><a className="text-decoration-none">Conclusion</a></Link></li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="what-is-achilles-tendonitis" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What Is Achilles Tendonitis?</h2>
						<p>One of the most common foot injuries incurred by runners and even joggers is Achilles tendonitis.</p>
						<p>The condition is characterized by a heavy soreness on the tendon which connects calf and heel, with the propensity to hinder your ability to use foot when playing sports, running and even walking.</p>
						<p>If you touch the back of your ankle, you&rsquo;ll feel a thick, huge tendon which attaches your heel bone to your calf.</p>
						<p>This tendon is what is called the Achilles tendon.</p>
						<p>Achilles tendon receives all the massive tensions from the impacts which are caused by your strenuous jumping and running.</p>
						<p>Together with your calf, the Achilles tendon absorbs the shock from your foot when it lands on the ground and propels it upward afterward to repeat the cycle.</p>
						<p>The magnitude, frequency, and duration of these motions are suspected to be ones accountable to the possible damage of the Achilles tendon.</p>
						<p>Because of its suffix &ldquo;itis,&rdquo; Achilles tendonitis means that there is an inflammation in the tendon.</p>
						<p>Some medical researchers advocate calling Achilles tendonitis as Achilles tendonosis or Achilles tendinopathy to emphasize that the cause of the injury and pain is the degeneration of Achilles tendon fibers, mainly due to overuse.</p>
						<p>Conditions and symptoms which are felt on the lower limb area and the foot fall under the realm of <Link href="http://www.fpma.com/what_is_podiatric_medicine.php"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">podiatric medicine</a></Link> - the Achilles tendon is indeed no exception.</p>
						<p>Well, the fortunate thing about this condition is that it is so prevalent among active people and athletes who are doing lots of foot activity so that medical doctors can diagnose it quickly and provide the necessary treatment depending on its gravity.</p>
						<p>Achilles tendonitis can be chronic or acute.</p>
						<p><strong>Signs of an inflamed Achilles tendon include:</strong></p>
						<ul>
							<li className="mb-3">Swelling over the Achilles tendon</li>
							<li className="mb-3">Tendon pain during exercising. Achilles pain gradually comes on with prolonged exercise and usually dissipates with rest</li>
							<li className="mb-3">Redness over the skin</li>
							<li className="mb-3">Sometimes, one can feel a creaking when pressing the fingers into the tendon while moving the foot</li>
						</ul>
						<p>Chronic Achilles tendonitis is often more challenging to treat, and it may follow if the tendon isn&rsquo;t treated correctly or allowed to heal fully.</p>
						<p>When tendonitis becomes chronic, the pain usually disappears after a warm up, yet returns once one stops training.</p>
						<p>If the Achilles tendon is repeatedly stressed, the injury worsens until it&rsquo;s impossible to run.</p>
						<p><strong>Additional signs of a chronic problem include:</strong></p>
						<ul>
							<li className="mb-3">Pain in the tendon when walking upstairs or up a hill</li>
							<li className="mb-3">Lumps or nodules in the Achilles tendon, particularly 2 cm above the heel</li>
							<li className="mb-3">Stiffness and pain in the Achilles tendon in the morning. The pain can be described as diffuse along the tendon, rather than specific.</li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="causes-of-achilles-tendinitis" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Causes of Achilles Tendinitis</h2>
						<p>An injury is usually occurring from overuse.</p>
						<p>Achilles tendonitis typically comes on gradually.</p>
						<p>Ignoring the early warning signs of pain causes the symptoms to increase until the activity is too painful to continue.</p>
						<p>The more fatigued the calf muscles are, the more stressed the Achilles tendon, and the higher likelihood of tendinitis is developing.</p>
						<p>The most common causes of tendonitis include:</p>
						<h3>Running up hills</h3>
						<p>It causes the Achilles tendon to stretch more than normal on every stride, and that fatigues the tendon sooner than normal.</p>
						<h3>Overuse</h3>
						<p>Excessive activity before proper warm up cause most overuse injuries.</p>
						<h3>Weak or tight</h3>
						<p>A weakness or tightness in the calf musculature will easily lead to fatigue.</p>
						<p>Once the <Link href="https://www.physio-pedia.com/Gastrocnemius"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">gastrocnemius</a></Link> fatigues, it shortens and tightens, thus putting an additional stretch on the Achilles tendon.</p>
						<h3>Overpronation</h3>
						<p>Overpronating the foot increases the strain placed on the Achilles tendon.</p>
						<p>As the foot flattens and rolls in, the lower leg rotates inwards causing a twisting motion, and this twist puts an additional strain on the Achilles.</p>

						<p>&nbsp;</p>
						<h2 id="self-massage-technique-for-achilles-tendonitis" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Self-Massage Technique for Achilles Tendonitis</h2>
						<p>If you have Achilles tendonitis, you may be able to accelerate your healing with a self-massage technique which is called deep friction massage or &ldquo;frictioning.&rdquo;</p>
						<p>It has been a popular treatment method for decades now.</p>
						<p>Friction massage &ldquo;scrubs&rdquo; the tendon&rsquo;s fibers, aiding recovery, and it does not have to be particularly intense (deep).</p>
						<p>The mechanism is a mild stimulation of natural tissue repair mechanisms.</p>
						<p>This technique is well worth trying, because it is quite safe, basically free to experiment with, and it makes some sense even though it is far from proven medicine.</p>
						<p>It helped me a lot with the pain and discomfort so I will share my knowledge of this technique.</p>

						<p>&nbsp;</p>
						<h2 id="how-to-do-a-friction-massage" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How to Do a Friction Massage?how-to-do-a-friction-massage</h2>
						<p>This method is distinctive - it has a different goal and feel than the typical steam-rolling and squeezing of the muscles, as you might do with <Link href="https://www.painscience.com/articles/tennis-ball.php"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">some tennis ball massage</a></Link>.</p>
						<p>But the action of this kind of massage is well-suited to self-treatment and simple, as long as you can reach the problem.</p>
						<p>Just rub gently forth and back over the inflamed tendon at the point of greatest tenderness.</p>
						<p>The best way to do this is like strumming a guitar string- your strokes should be perpendicular to the fibers of the tendon.</p>
						<p>Use gentle to moderate pressure with your thumb or with the pads of your fingers.</p>
						<p>Strong pressure isn&rsquo;t required, particularly for self-treatment. I will explain more about intensity as we go.</p>
						<p>Even a gentle massage will cause discomfort as you are rubbing an active case of tendinitis.</p>
						<p>The pain should be a bit sharp or burning and clear - however, the discomfort should be easily bearable.</p>
						<p>If the pain is dull, or the friction is painless, you don&rsquo;t have tendinitis, or you are probably in the wrong place.</p>
						<p>If it&rsquo;s too painful, either the tendinitis is too severe to treat in this fashion efficiently, or you are pressing too hard.</p>
						<p>The discomfort will significantly subside after one or two minutes.</p>
						<p>If it does not, you should stop the treatment and try again later.</p>
						<p>If the tenderness does subside, increase the intensity until it returns, and wait for it to subside again.</p>
						<p>Increase it the third time, and wait the third time for the tenderness to subside.</p>
						<p>Finish by icing the site of the massage, ideally with bare ice.</p>
						<p>The complete treatment should take about 3 to 6 minutes and should be done at least once per day.</p>
						<p>If it is going to work, you should feel an immediate improvement in symptoms following each treatment.</p>
						<p>However, this is no miracle cure, and it may not work for you.</p>
						<p>It is worth trying, but it sometimes fails for all kinds of reasons.</p>

						<p>&nbsp;</p>
						<h2 id="how-does-friction-massage-work" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How does Friction Massage Work?</h2>
						<p>This kind of message is a specific way to stimulate enough, but not too much.</p>
						<p>A basic principle of healing is that overloaded tissue must be given a break from their labors, and that is particularly true of tendinitis.</p>
						<p>A sick tendon needs at least moderate stimulation to move tissue fluids and to induce tissue repair.</p>
						<p>But what kind of stimulation if you are trying to avoid pulling it?</p>
						<p>In the case of Achilles tendonitis, excessive pulling on the tendon is the most common problem.</p>
						<p>If this is the case, more pulling can be counterproductive.</p>
						<p>The friction massage is a way to stimulate tissue in a different, new way.</p>
						<p>For whatever it is worth, that is a big idea: get the benefit of stimulating the tissue without any longitudinal loading.</p>
						<p>That is a simple explanation for the rationale for this treatment.</p>
						<p>That is the conventional wisdom.</p>
						<p>What else might be going on?</p>
						<p>One could also describe this massage technique as a form of provocation therapy- breaking down to rebuild-hurting to help, and indeed some professional perform it that way.</p>
						<p>It can be done with more dramatic intent of affecting the structure of the tendon.</p>
						<p>That could work, but I just do not recommend it.</p>

						<p>&nbsp;</p>
						<h2 id="are-there-any-risks-of-friction-massage" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Are There Any Risks of Friction Massage?</h2>
						<p>Well, some minor ones.</p>
						<p>There are only health risks if you&rsquo;re a bit reckless with it.</p>
						<p>If you ignore excessive pain, you might accidentally attempt to friction massage something which is not tendinitis, and perhaps something that is more vulnerable than tendinitis.</p>
						<p>However, pain is an excellent guide.</p>
						<p>As long as you do not persist when friction massaging is too painful or showing no signs of working, you are extremely unlikely to cause any harm.</p>

						<p>&nbsp;</p>
						<h2 id="conclusion" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Conclusion</h2>
						<p>Although friction massage does seem to help many cases of Achilles tendonitis, unfortunately, there are many conditions which get mistaken for tendinitis, and will not be helped by friction massage.</p>
						<p>The worst case scenario is that you will waste a few minutes of your time, which is fairly likely.</p>
						<p>In the end, friction massage is worth trying, because it is safe and free to experiment with, and I will recommend it, as it helped me with my Achilles tendonitis.</p>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
