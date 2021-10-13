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
	const postId = 26;
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
						<p>Most of us are never completely satisfied with how we look, but while some things can be easily corrected or altered some are quite difficult or even impossible to change.</p>
						<p>Height belongs to the second category, and although not completely unachievable growing taller is a process that requires a lot of effort and quite some time.</p>
						<p>Short people often feel insecure and lack of confidence.</p>
						<p>Therefore, a lot of research has been done as to discover what we can do in order to grow a few inches taller.</p>
						<p>In this process, the conclusion has been reached that running, besides other numerous benefits, can also help those trying to become taller.</p>
						<p>So, does running make you taller?</p>
						<p>Definitely YES!</p>
						<p>However, you will have to do much more than jog occasionally if you expect any significant results.</p>
						<p>Like all good things in life, getting taller will require you to dedicate to that goal seriously- and I will help you by letting you know what you need to do to make the process as smooth and easy as possible.</p>
						<p>So, make sure you stay tuned all the way to the end- together we can grow taller!</p>
						{ /* kimjiwon */ }
						<ul>
							<li><Link href="#the-benefits-of-running"><a className="text-decoration-none">The Benefits of Running</a></Link></li>
							<li><Link href="#how-does-running-make-you-taller"><a className="text-decoration-none">How Does Running Make You Taller?</a></Link></li>
							<li><Link href="#other-factors"><a className="text-decoration-none">Other Factors</a></Link></li>
							<li><Link href="#ideal-running-training"><a className="text-decoration-none">The Ideal Running Training that Can Make You Taller</a></Link></li>
							<li><Link href="#conclusion"><a className="text-decoration-none">Conclusion</a></Link></li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="the-benefits-of-running" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>The Benefits of Running</h2>
						<p>We all know that running is beneficial.</p>
						<p>Pediatricians encourage parents to allow their children to run as much as possible as that will enhance both their growth and mental development.</p>
						<p>Children seem to have a natural urge to run too.</p>
						<p>Unfortunately, we seem to forget how good running is for us once we grow older.</p>
						<p>If you too forgot, or have not heard about it (which is highly unlikely), running can help:</p>

						<h3 className="mt-5">Improve your mental health</h3>
						<p>It will reduce the anxiety level, relieve the stress, induce social interaction, better your sleep routine and provide you with a goal worth achieving.</p>
						<p>In fact, running lowers the risk of depression by incredible 16%!</p>

						<h3 className="mt-5">Reduce the risk of cardiovascular diseases</h3>
						<p>As it has been declared in a study recently published in the Journal of the American College of Cardiology, running reduces the risk of suffering (or even dying) from heart conditions.</p>

						<h3 className="mt-5">Increase your energy level and strength</h3>
						<p>Although you spend energy when running, in time you will feel more energized as well.</p>
						<p>Both your muscles and your bones will grow stronger, especially if you combine different running styles.</p>

						<h3 className="mt-5">Stay fit and good-looking</h3>
						<p>Running can help you lose weight and tone-up your body.</p>
						<p>Try <Link href="/running-with-ankle-weights"><a className="text-decoration-none">running with ankle weights</a></Link> for quicker results!</p>
						<p className="mt-5">And, finally:</p>

						<h3 className="mt-5">RUNNING CAN MAKE YOU TALLER!</h3>
						<p>As I have already mentioned before, you will have to give your best and push yourself to the limit if you want to gain height by running.</p>
						<p>It is best to consult a therapist or a fitness professional that will help you design a detailed running exercise plan that will push all the right buttons and help you achieve your goal.</p>
						<p>It is sure not going to be easy, especially if you are <Link href="/best-running-shoes-for-peroneal-tendonitis"><a className="text-decoration-none">running with peroneal tendonitis</a></Link>, <Link href="/best-running-shoes-for-mortons-neuroma"><a className="text-decoration-none">Morton&rsquo;s neuroma</a></Link>, or some other condition that is bound to slow you down and make the process more difficult to endure, but you can do everything you set your mind to, believe me!</p>
						<p>Just keep your mind focused on the final prize- increasing your height!</p>

						<p>&nbsp;</p>
						<h2 id="how-does-running-make-you-taller" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How Does Running Make You Taller?</h2>
						<p>Numerous thoroughly researched scientific papers claim that you can grow as much as 3 inches if you dedicate yourself to the proper running exercise on a regular basis.</p>
						<p>The question is, how does this positive result come about?</p>

						<h3 className="mt-5">1. HGH Hormone Boost</h3>
						<p>According to research published in the &ldquo;Journal of Metabolism and Endocrinology,&rdquo; running in bursts intensely and regularly will stimulate your pituitary gland to produce more HGH (human growth hormone) hormone which has an important role in your body&rsquo;s growth process.</p>
						<p>The HGH hormone will thicken your bones and cartilages and increase the density of your bones resulting in their growth and remodeling.</p>
						<p>The more of HGH hormone is released into your system, the taller you will grow!</p>

						<h3 className="mt-5">2. Repairing Microfractures in Your Bones</h3>
						<p>When you run intensely at long distances, you are likely to develop microfractures in the bones of your lower-leg area, especially in the lower ankle or shin area of your tibia.</p>
						<p>These microfractures become stretched, and once they are ossified and repaired, they bring about the positive change in your height.</p>
						<p>The process of healing these microfractures is quicker than the regular changes in your bones as it can happen every three weeks or so.</p>
						<p>This means that repairing micro fractures actually speeds up your growth by enhancing the length of your bones.</p>

						<h3 className="mt-5">3. Improving Your Posture</h3>
						<p>The physiological effects running has on your body, such as improving your posture can also help the process of gaining height.</p>
						<p>Running relaxes your shoulders and de-stresses your muscles but also makes you pull your chin up and your chest back, straighten your posture and stand tall.</p>
						<p>If you used to have a hunchback posture, the change would be even more evident.</p>
						<p>As a result of a proper posture you attain while sprinting, you will stretch your spine and gain up to two inches in height.</p>

						<h3 className="mt-5">4. Making Your Body Look Leaner</h3>
						<p>Running is a great sport for weight loss as it is bound to shape up your whole body in a reasonable amount of time.</p>
						<p>Leaner people tend to appear taller as well, so besides getting rid of the spinal curvature, looking sleeker will also contribute to you appearing taller.</p>

						<p>&nbsp;</p>
						<h2 id="other-factors" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Other Factors</h2>
						<p>There are other factors that influence the process of making you taller that are not directly linked to running such as:</p>

						<h3 className="mt-5">1. Additional exercises</h3>
						<p>Running is not the only form of exercise that can contribute to you gaining height; the following exercises can help as well:</p>
						<ul>
							<li className="mb-3">Cobra stretch</li>
							<li className="mb-3">Dryland swim</li>
							<li className="mb-3">Pelvic shift</li>
							<li className="mb-3">Hopping with one leg</li>
							<li className="mb-3">Pilates rollover</li>
						</ul>
						<h3 className="mt-5">2. Appropriate diet plan</h3>
						<p>Food can also help make you taller, especially when combined with the appropriate exercise routine such as running.</p>
						<p>You should take the appropriate amount of micro and macronutrients found the following food:</p>
						<ul>
							<li className="mb-3">Milk</li>
							<li className="mb-3">Cheese</li>
							<li className="mb-3">Fish</li>
							<li className="mb-3">Liver</li>
							<li className="mb-3">Potatoes</li>
							<li className="mb-3">Carrots</li>
							<li className="mb-3">Beans</li>
							<li className="mb-3">Green and yellow vegetables</li>
							<li className="mb-3">Apples</li>
							<li className="mb-3">Peanuts...</li>
						</ul>
						<h3 className="mt-5">3. Appropriate sleeping routine</h3>
						<p>If you sleep as much as you are supposed to, your pituitary gland will be able to function normally and release the optimal amount of growth hormone.</p>
						<p>The HGH hormone is mostly released while you sleep, so you should never deprive yourself of sleep.</p>
						<h3 className="mt-5">4. Avoiding growth repressors</h3>
						<p>There are some substances that inhibit your growth such as:</p>
						<ul>
							<li className="mb-3"><Link href="https://www.drugabuse.gov/drugs-abuse"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">Drugs</a></Link></li>
							<li className="mb-3">Alcohol</li>
							<li className="mb-3"><Link href="https://www.drugabuse.gov/publications/tobacco-nicotine-e-cigarettes/nicotine-addictive"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">Nicotine</a></Link></li>
							<li className="mb-3">Stressful and sedentary lifestyle can also have a negative impact on your height</li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="ideal-running-training" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>The Ideal Running Training that Can Make You Taller</h2>
						<p>Not every form of running will help make you taller.</p>
						<p>For best results, you should try sticking to short-running bursts as they can possibly increase the production of HGH hormone by whopping 530 percent.</p>
						<p>Sprinting is also good for your lungs and lowers high blood pressure.</p>
						<p><strong>The ideal running routine:</strong></p>
						<ol>
							<li className="mb-3">Start with low intensity running and make a 70 yards cycle</li>
							<li className="mb-3">Rest for two minutes (walking break)</li>
							<li className="mb-3">Repeat eight times but increase intensity level with each cycle</li>
							<li className="mb-3">Do this two times a day, five days a week, and reduce the frequency only when you achieve the results you desire</li>
						</ol>
						<p>This is a high-impact routine that will require your dedication and strong will.</p>
						<p>Put your heart and mind into it, and soon enough you will be able to feel the advantages of sprinting.</p>

						<p>&nbsp;</p>
						<h2 id="conclusion" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Conclusion</h2>
						<p>If you have read all the way through and paid attention to what you read, you now have the answer to the question &ldquo;does running make you taller?&rdquo; and it is YES!.</p>
						<p>It is an honest truth although many consider it to be a myth.</p>
						<p>If you have tried it and failed, it simply means that you have not tried hard enough.</p>
						<p>Try again, fail better!</p>
						<p>My advice to you is to stick to the proper running routine, mind what you eat and make sure you sleep enough.</p>
						<p>Push yourself to the limit, do not give up- studies have proven that you can permanently increase your height for up to three inches by running.</p>
						<p>Do share if you have some additional advice and positive (or negative) experience!</p>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
