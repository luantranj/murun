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
	const postId = 42;
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
						<p>Being involved in sports automatically puts you in a group that is more prone to injuries.</p>
						<p>Athletes, especially runners, wholeheartedly accept their reality as being exposed to many accidental injuries.</p>
						<p>Naturally, the most affected and injury-prone area concentrates around the legs.</p>
						<p>From knees, down to the ankles and toes, there are various possibilities and variations of injuries that can affect a physically active person.</p>
						<p>One of the most prevalent injuries happen in the ankles, and although those are often classified as sports injuries, bear in mind: it can happen to virtually anyone.</p>
						<p>When it comes to determining whether your ankle is broken or sprained, there are many key factors and symptoms to take into account before reaching a final conclusion.</p>
						<p>The similarities between these two injuries can be extremely jarring, but there are key differences that one must take into account in order to be sure which of those two injuries is the ultimate diagnosis.</p>
						<p>Both of these injuries are not to be neither taken nor treated lightly.</p>
						<p>Both of them can cause a significant setback in the life of a professional athlete or a weekend warrior.</p>
						<p>Both of these injuries take time and patience to heal properly.</p>
						<p>No one likes experiencing pain, but sometimes it is manageable.</p>
						<p>There are certain things that can help us ameliorate the pain and continue with our fitness activities, such as comfortable running shoes.</p>
						<p>Keep reading to find out how to tell a sprained ankle from a broken ankle, their symptoms, similarities, and most importantly, their differences.</p>
						{ /* kimjiwon */ }
						<ul>
							<li><Link href="#is-your-ankle-sprained-or-broken"><a className="text-decoration-none">Is Your Ankle Sprained or Broken?</a></Link></li>
							<li><Link href="#sprained-ankle"><a className="text-decoration-none">Sprained Ankle</a></Link></li>
							<ul>
								<li><Link href="#what-is-a-sprained-ankle"><a className="text-decoration-none">What is a Sprained Ankle, Exactly?</a></Link></li>
								<li><Link href="#sprained-ankle-if"><a className="text-decoration-none">It’s a Sprained Ankle If...</a></Link></li>
								<li><Link href="#how-long-sprained-ankle-heal"><a className="text-decoration-none">How Long Does My Sprained Ankle Need to Heal?</a></Link></li>
							</ul>
							<li><Link href="#broken-ankle"><a className="text-decoration-none">Broken Ankle</a></Link></li>
							<ul>
								<li><Link href="#my-ankle-broken-or-not"><a className="text-decoration-none">How Can I Know If My Ankle is Broken?</a></Link></li>
								<li><Link href="#broken-ankle-if"><a className="text-decoration-none">It’s a Broken Ankle If...</a></Link></li>
								<li><Link href="#broken-ankle-and-healing-process"><a className="text-decoration-none">Your Broken Ankle and the Healing Process</a></Link></li>

							</ul>
							<li><Link href="#finally"><a className="text-decoration-none">And Finally…</a></Link></li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="is-your-ankle-sprained-or-broken" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Is Your Ankle Sprained or Broken?</h2>
						<p>You&rsquo;ve suffered a certain trauma to your ankle, and now it is swollen, tender, or bruised.</p>
						<p>Or all of those at the same time.</p>
						<p>So, which one is it &ndash; is it a sprained ankle or is it a broken ankle?</p>
						<p>Symptoms that are shared and similar by both injuries include the following:</p>
						<ul>
							<li className="mb-3">Pain</li>
							<li className="mb-3">Swelling</li>
							<li className="mb-3">Bruising</li>
							<li className="mb-3">Instability (stability depends on how severe the sprain is - if it is sprained)</li>
							<li className="mb-3">Difficulties with supporting yourself or walking</li>
							<li className="mb-3">Tenderness</li>
							<li className="mb-3">Throbbing</li>
						</ul>
						<p>Maybe you feel like it is not that serious, or you don&rsquo;t feel up to rushing to the doctor&rsquo;s office for a diagnosis; if some time has passed and all you see is more bruising and pain increase, but you still don&rsquo;t know how to tell the difference.</p>
						<p>Nevertheless, there is a difference between these two injuries.</p>
						<p>They may pertain to the same affected area, but they have very different causes, definitions, treatment and healing processes.</p>
						<p>What essentially separates the two is that a sprained ankle is, in its core, a torn ligament, while a fractured ankle involves the breaking of one or more bones.</p>
						<p>You can quickly go over the following questions in order to know the basic difference:</p>
						<p><strong>Was there &ldquo;a sound&rdquo;?</strong></p>
						<p>Sprains are most commonly not accompanied by sounds, at least not distinct ones like the ones that follow a broken ankle.</p>
						<p>If you&rsquo;ve heard it - your ankle is broken.</p>
						<p><strong>Where is the pain?</strong></p>
						<p>If the pain is mainly located in the soft tissue, then it&rsquo;s a sprain.</p>
						<p>If it concentrates on your bone, then it is broken.</p>
						<p><strong>Can you put any pressure on it?</strong></p>
						<p>If you cannot walk, or cannot apply any pressure on your ankle, then it is most definitely broken.</p>
						<p>Is there any numbness to it?</p>
						<p>When your ankle is sprained, you will feel pain, over and over again.</p>
						<p>If it is broken, you will feel a certain amount of numbness and throbbing.</p>

						<p>&nbsp;</p>
						<h2 id="sprained-ankle" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Sprained Ankle</h2>
						<p>For those of you that have never experienced or had a sprained ankle before, I have compiled a concise but simple overview of all the causes and symptoms of a sprained ankle.</p>
						<p>Bear in mind that only your doctor should diagnose you with a sprained ankle.</p>

						<h3 id="what-is-a-sprained-ankle" className="mt-5">What is a Sprained Ankle, Exactly?</h3>
						<p>As it was mentioned before, a sprained ankle involves damaged ligaments in one of your ankles.</p>
						<p>There are various degrees of sprains, each of them serious in their own way.</p>
						<p>However, they are separated into three grades, ranging from mild, moderate and ultimately, to severe:</p>

						<h4 className="mt-3">Grade l</h4>
						<p>A grade I sprain involves a mild sprain.</p>
						<p>The ligaments suffer a dose of stretching and a possible mild tear, and the accompanying symptoms include pain, soreness and mild swelling.</p>

						<h4 className="mt-3">Grade ll</h4>
						<p>Then, we have a moderate sprain which includes partial tearing of the ligaments.</p>
						<p>This sprain is almost always followed by noticeable swelling and bruising, a considerable amount of pain, joint instability.</p>

						<h4 className="mt-3">Grade lll</h4>
						<p>A grade III sprain is what is considered a severe sprain.</p>
						<p>As a consequence of this injury, a person suffers from immense joint instability.</p>
						<p>What accompanies a grade III sprain is severe pain, with significant swelling and bruising to the ankle and the surrounding area.</p>
						<p>A sprained ankle is a common injury of athletes but can nevertheless occur in many unpredictable situations that involve people who do not frequently engage in sports.</p>

						<h3 id="sprained-ankle-if" className="mt-5">It’s a Sprained Ankle If...</h3>
						<p>If the pain that you experience can be characterized either &ldquo;mild&rdquo; or &ldquo;moderate&rdquo;, if you can put some weight on your ankle, then your ankle is sprained.</p>
						<p>Other symptoms that are known to occur when you are dealing with a sprained ankle are:</p>
						<div className="alert alert-danger">
							<p><strong>Bruising -</strong> skin discolorations are not unheard of when it comes to sprained ankles.</p>
							<p>This is one of the first signs that a ligament has been torn and that there is blood rushing to the affected area.</p>
							<p><strong>Swelling</strong> - In addition to bruising, swelling can also occur if more than one ligament has been torn.</p>
							<p><strong>Inability to move</strong> - in grade III sprains, walking or carrying your weight on the sprained ankle is accompanied with severe pain, thus rendering the ability to move impossible.</p>
						</div>
						<p>Now that we have that part covered, let&rsquo;s move on to recuperation.</p>

						<h3 id="how-long-sprained-ankle-heal" className="mt-5">How Long Does My Sprained Ankle Need to Heal?</h3>
						<p>When it comes to suffering an injury, we all want an overnight cure that will solve all of our problems, because let&rsquo;s face it &ndash; nobody likes to sit around and do nothing.</p>
						<p>Especially not runners.</p>
						<p>People who are physically active tend to take an injury really hard because they are unable to sit still and wait around &ndash; which is exactly what they need to do.</p>
						<p>Once your ankle is sprained, <Link href="/how-to-heal-a-sprained-ankle-faster"><a className="text-decoration-none">your goal must be to have it heal fully and properly</a></Link>.</p>
						<p>You must be patient and calm.</p>
						<p>Grade I sprains are the ones that heal the fastest.</p>
						<p>This, however, does not mean that they heal overnight.</p>
						<p>It takes between 2 to 4 weeks for the swelling to dissolve completely and for the ankle to fully recover.</p>
						<p>The ones that are a bit more serious and require more time are grade II sprains.</p>
						<p>They necessitate as much time as 6 to 8 weeks in order to heal properly without disruptions.</p>
						<p>Finally, grade III sprains are the ones that are the most severe.</p>
						<p>For that sole reason, they need between 12 weeks to 6 months in order for the swelling and bruising to heal completely.</p>
						<p>However, there are nuances and hues even there, as not every grade III sprain is the same.</p>
						<p>Some grade III sprains necessitate an undisrupted resting period in order for the ligaments to heal properly.</p>
						<p>Make sure that you follow the instructions of your doctors and physical therapists to have your ligaments heal properly.</p>

						<p>&nbsp;</p>
						<h2 id="broken-ankle" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Broken Ankle</h2>
						<p>The very lucky ones amongst us athletes are the ones that have never experienced a broken bone.</p>
						<p>However, what all of us know is that it can happen at any time and any place, so we must be prepared for it.</p>

						<h3 id="my-ankle-broken-or-not" className="mt-5">How Can I Know If My Ankle is Broken?</h3>
						<p>This one is actually quite simple.</p>
						<p>The most prominent indicator of a broken ankle is actually pain.</p>
						<p>With spraining, you have various grades, and severity categories, not each of them feels just the same.</p>
						<p>While there is bruising, swelling, and difficulties with moving around, a broken ankle hurts a lot more.</p>
						<p>In addition to pain, if it is a severe fracture, the ankle in question may appear deformed, or it can have a bone protruding out of the skin.</p>

						<h3 id="broken-ankle-if" className="mt-5">It’s a Broken Ankle If...</h3>
						<p>If you can put a checkmark on all of these statements, then you have a broken ankle:</p>
						<div className="alert alert-danger">
							<ul>
								<li className="mb-3">There is a severe pain which only seems to increase</li>
								<li className="mb-3">There was a &ldquo;sound&rdquo; when you injured your ankle</li>
								<li className="mb-3">The injured ankle cannot sustain your weight; you cannot rely on it</li>
								<li className="mb-3">You cannot move your ankle at all</li>
								<li>Your ankle is misaligned with your leg, and it does not seem to look as it usually does</li>
							</ul>
						</div>
						<p>If all of the statements above are true and apply to you, you need to contact your doctor and get the appropriate and necessary medical treatment right away.</p>
						<p>Of course, the ultimate way to confirm that you have fractured your ankle is to get an X-Ray.</p>

						<h3 id="broken-ankle-and-healing-process" className="mt-5">Your Broken Ankle and the Healing Process</h3>
						<p>While some fractures necessitate surgical interventions, others do not &ndash; and the recovery time largely depends on the severity level of a fracture.</p>
						<p>When it comes to recovering from a fractured bone, the most important thing about the healing process is that the bones actually heal properly, so that malalignment of the bones and instability could be ruled out.</p>
						<p>Certain fractures can be treated without surgical intervention but can be treated with a cast, such as <Link href="/best-ankle-braces"><a className="text-decoration-none">an ankle brace</a></Link>, or a walking boot.</p>
						<p>Other than that, the person with a fractured ankle may need to move around by using crutches for support.</p>
						<p>The healing period can take between 6 to 12 weeks or longer, but the period can vary depending on the severity of the fracture.</p>
						<p>Bear in mind that, if your fracture necessitates surgical intervention, you will need to recover from the surgery as well.</p>
						<p>What is crucial in situations such as is not to despair and to take the necessary time and dedicate it fully to getting better and healing your fracture the best way you can.</p>
						<p>This means that you cannot in any way try to speed the process up or even think of trying to exert your broken ankle to any stress.</p>
						<p>What you need to do is follow the advice of your therapists and doctors closely, for your best interest.</p>
						<p>Patience is the key.</p>

						<p>&nbsp;</p>
						<h2 id="finally" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>And Finally…</h2>
						<p>Having an injured ankle can be a difficult process and a difficult thing to adjust to.</p>
						<p>Whether it is a sprained or broken ankle, with the right advice, you can always come out better and stronger than you were before.</p>
						<p>Ultimately, there is no cure for either of the aforementioned injuries that can cause them to disappear in the blink of an eye.</p>
						<p>Both injuries need you to slow down and take it easy!</p>
						<p>Being patient and kind to yourself is crucial in situations like this.</p>
						<p>By the way, if you are a fitness enthusiast, <Link href="https://www.healthline.com/health/fitness-exercise/peroneal-tendonitis-stretches#prevention"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">don&apos;t come back to exercise before the injured ankle can heal properly</a></Link>, which can <Link href="/best-running-shoes-for-peroneal-tendonitis"><a className="text-decoration-none">make your peroneal tendon become inflamed</a></Link>.</p>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
