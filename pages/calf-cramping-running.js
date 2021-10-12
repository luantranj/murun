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
	const postId = 14;
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
						<p>Running is a great way to feel better, get fit and even developing new relationships with other runners.</p>
						<p>But <Link href="/how-to-start-running-for-beginners"><a className="text-decoration-none">how to start running</a></Link> if you are an absolute beginner?</p>
						<p>Well, it doesn&rsquo;t have to be hard - all it takes is a willingness to move at your own pace and a comfortable pair of shoes.</p>
						<p>Almost any runner has experienced muscle cramps while running at one time or another, especially if you get muscle cramps after running in the summer or while running a marathon.</p>
						<p>I have heard countless stories from friends and clients about cramping up in the last few miles of a marathon and barely being able to walk.</p>
						<p>The most frustrating thing may be that muscle cramps can come out of nowhere and what causes them while running is somewhat unknown.</p>
						<p>According to <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3445088/"><a className="text-decoration-none" target="_blank" rel="noopener noreferrer">research</a></Link>, roughly 40 percent of runners may suffer from a leg cramps - whether in their hamstrings, quadriceps or more commonly in the calves, before crossing the finish line.</p>
						<p>Therefore, I am going to share with you some of the best prevention strategies and treatment to help you keep those muscle cramps at bay so you can stay pain-free and run your best for the long haul.</p>
						<p>But before I delve into the practical stuff, let me share with you what science has to say about muscle cramps while running.</p>
						{ /* kimjiwon */ }
						<ul>
							<li><Link href="#what-are-muscle-cramps"><a className="text-decoration-none">What Are Muscle Cramps?</a></Link></li>
							<li><Link href="#why-do-muscle-cramps-happen"><a className="text-decoration-none">Why do Muscle Cramps Happen?</a></Link></li>
							<li><Link href="#causes-of-leg-muscle-cramps"><a className="text-decoration-none">Causes of Leg Muscle Cramps</a></Link></li>
							<li><Link href="#prevention-and-treatment"><a className="text-decoration-none">Prevention and Treatment</a></Link></li>
							<li><Link href="#conclusion"><a className="text-decoration-none">Conclusion</a></Link></li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="what-are-muscle-cramps" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What Are Muscle Cramps?</h2>
						<p>Muscle cramps are involuntary contractions of muscles.</p>
						<p>Ideally, muscle fibers shorten and lengthen back up after contraction.</p>
						<p>But in the case of cramp, the <Link href="https://greatist.com/fitness/what-are-fast-and-slow-twitch-muscles"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">muscle fibers</a></Link> remain shortened which causes tension along with that painful sensation.</p>

						<p>&nbsp;</p>
						<h2 id="why-do-muscle-cramps-happen" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Why do Muscle Cramps Happen?</h2>
						<p>Well, they usually occur as a result of extended or repeated loading of a particular muscle group which is in a shortened position.</p>
						<p>The muscles that stay in the shortened position while one is running are the most susceptible to cramps.</p>
						<p>For runners, it is mainly the calves, are also known as the gastrocnemius-soleus muscle which gets hit the most with cramps.</p>
						<p>The only thing which can bring relief is lengthening the muscles to resolve the spasm.</p>
						<p>Cramps may occur during the run or after the run.</p>
						<p>In some cases, cramps can go off up to six hours after running, creeping in when you least expect them.</p>
						<p>Some runners experience these cramps at the night when they are sitting around or watching TV, doing no physical exercise.</p>
						<p>Talk about sneak attack&hellip;</p>
						<p>Muscle cramps vary in severity from one person to the next.</p>
						<p>The majority of them is mild, but some can be so painful that they shut down the muscle which causes immense pain when they seize up.</p>
						<p>Just like muscle cramps, <Link href="/essential-oils-for-plantar-fasciitis"><a className="text-decoration-none">plantar fasciitis</a></Link> is more common in runners.</p>
						<p>Plantar fasciitis represents inflammation of the connective tissue on the bottom of the foot which is called the plantar fascia.</p>
						<p>It causes stabbing pain which usually happens with your first steps in the morning.</p>
						<p>How long does the plantar fasciitis last?</p>
						<p>Well, it can be challenging to deal with, and you want it to go away ASAP.</p>
						<p>A mild case of <Link href="/how-long-does-plantar-fasciitis-last"><a className="text-decoration-none">plantar fasciitis can disappear on its own within two or three weeks</a></Link> if you properly care for your foot by <Link href="https://www.youtube.com/watch?v=-P8Qh4MuyVc"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">icing your foot</a></Link> to reduce swelling and by wearing supportive shoes.</p>
						<p>More serious pain can take up to six weeks to disappear, as that is how long your tissue needs to repair itself.</p>

						<p>&nbsp;</p>
						<h2 id="causes-of-leg-muscle-cramps" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Causes of Leg Muscle Cramps</h2>
						<p>Despite modern physiology science, the exact cause of cramps which are induced by running is not entirely understood.</p>
						<p>They are still a medical mystery.</p>
						<p>But that doesn&rsquo;t mean there are not theories which are trying to explain this condition.</p>
						<p>There are numerous possible causes:</p>

						<h3 className="mt-5">Dehydration</h3>
						<p>According to the popular belief, lack of fluid intake may sometimes lead to <Link href="https://www.medicinenet.com/muscle_spasms/article.htm"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">muscle spasms</a></Link> while running.</p>
						<p>Dehydration can shorten the blood volume flowing to muscles, which can severely impact the muscle.</p>
						<p>This theory is best-known, but with the least scientific evidence to back it up.</p>

						<h3 className="mt-5">Overuse</h3>
						<p>The primary cause of leg muscle cramps when running is overuse-running faster or farther than your muscles can handle, or when pushing yourself outside of your comfort zone, especially when you are running under hot weather conditions.</p>
						<p>If you have increased running mileage too quickly, or you had too many intense workouts in a row, then expect muscle cramps.</p>
						<p>If you have never suffered from muscle cramps during your career as a runner, then you are one of the few lucky ones(or you know how to keep them at bay).</p>

						<p>&nbsp;</p>
						<h2 id="prevention-and-treatment" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Prevention and Treatment</h2>
						<h3 className="mt-5">Warm up and cool down properly</h3>
						<p>The <Link href="https://www.youtube.com/watch?v=dB5W4LZf0JU"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">proper warmup</a></Link> is the backbone of cramp-free and efficient running.</p>
						<p>According to the limited science on this subject, muscle fatigue is one of the leading causes of muscle cramping.</p>
						<p>If you don&rsquo;t prepare yourself right for the run, the chances are that you are going to run into trouble - whether it is muscle spasms, premature fatigue, stomach cramps or even injury.</p>
						<p>One of the quickest ways to induce muscle fatigue while running is by skipping the warm-up.</p>
						<p>Before you break into your typical running pace, I suggest you invest in a 5 to 10-minute warmup.</p>
						<p>Start your run sessions by jogging at a slow pace for five minutes, while taking deep breaths and releasing any muscle tension that you feel in your body.</p>
						<p>By doing this, you get you get your cardiovascular system and your muscles ready for the running ahead.</p>
						<p>You can also perform some quick, <Link href="https://www.youtube.com/watch?v=ysFIBxlfWL0"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">ballistic stretches</a></Link> right before your workout, but never over-stretch a cold muscle, as it can lead to injury.</p>
						<p>Make sure also to pace yourself right.</p>
						<p>If you are pushing the pace beyond your fitness level, you are more likely to suffer from these painful spasms.</p>
						<p>So start your running at leisurely and comfortable pace.</p>
						<p>It is also crucial not to stop running on the spot.</p>
						<p>Instead, you should invest in a proper cool down by taking the time to reduce your running pace into an easy jog gradually.</p>
						<p>Then walk slowly for five minutes while breathing deeply before you do your post-run ritual, whether it is yoga, foam rolling, ice therapy or taking a shower.</p>

						<h3 className="mt-5">Hydration</h3>
						<p>The best way to prevent and treat muscle cramps is to consume water before a workout, during and after it.</p>
						<p>If the session is is longer than one hour, you should consider a fluid which contains either carbohydrates or a protein and carbohydrate blend.</p>
						<p>Weigh yourself before your workout and after it, and consume 20 ounces of fluid for every pound lost during a workout.</p>
						<p>Staying well hydrated before, during and after running is vital for pain-free running and maximum performance.</p>
						<p>So you should not just rehydrate to avoid cramps, you should rehydrate because that is what you are supposed to do when running.</p>
						<p>When dehydrated, your body can&rsquo;t cool itself, and it is also unable to transfer oxygen to the working muscles or process waste.</p>

						<h3 className="mt-5">Electrolyte replacement</h3>
						<p>Electrolytes help in proper muscle contraction and the transmission of muscle impulses, and they are lost through sweat.</p>
						<p>Sweat consists of water and vital minerals such as magnesium, sodium, and potassium, which need to be replaced in the body.</p>
						<p>Following a well-balanced diet can keep you electrolytes stores adequate, nevertheless, if you&rsquo;re running for an extended period, your diet will only get you so far.</p>
						<p>You will be sweating a lot, thus losing electrolytes left and right.</p>
						<p>Drinking beverages such as Accelerade and other sports drinks is a great way to rehydrate and replenish lost electrolytes during a workout session and after it.</p>
						<p>Energy supplements such as Hammer Gel, Gu, chomps, and chews also contain electrolytes.</p>
						<p>Salt tablets may also prove beneficial during a prolonged workout.</p>
						<p>And you can always replenish your lost sodium and potassium by eating a banana or a salty snack.</p>

						<h3 className="mt-5">Compression</h3>
						<p><Link href="https://www.youtube.com/watch?v=AZXjrmziUWM"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">The use of compression sock</a></Link> during a workout can aid in decreasing the risk of cramping.</p>
						<p>Compression reduces extraneous movements of the calf muscles, which lowers the total effort of muscle and helps to prevent fatigue.</p>
						<p>It also aids in increasing blood flow to the area which helps the muscle in a plentiful supply of oxygen.</p>

						<h3 className="mt-5">Arch support</h3>
						<p>An unsupported arch may cause the muscle of the calf to work harder than it should work, which can increase the risk of fatigue.</p>

						<h3 className="mt-5">Racing right</h3>
						<p>If you are racing, you need to pace yourself here.</p>
						<p>The muscle cramp can put a stop to your competitive spirit, so try not to get freaked out if many runners pass you in the first mile.</p>
						<p>Probably the best strategy for dealing with the muscle cramps on race day is to work out at the pace you plan to race, by doing plenty of progression workouts, race pace workouts, and fast finish runs.</p>
						<p>You may get some cramps, but you will get fitter and be better equipped to handle those issues in a race. In other words, you&rsquo;re better off cramping in training.</p>

						<h3 className="mt-5">Stretching</h3>
						<p>Gentle stretching of the muscle helps to decrease the cramp.</p>
						<p>Even after the cramp has subsided in the muscle, the muscle can remain tight and should be stretched.</p>

						<h3 className="mt-5">Massage</h3>
						<p><Link href="https://www.youtube.com/watch?v=g8XQDR6U6As"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">Gentle massage of the cramp</a></Link> can help to break the spasm and increase the blood flow to the area.</p>
						<p>Massage gets to the heart of the problem by addressing trigger points and relaxing tense muscles.</p>
						<p>Neuromuscular, <Link href="https://goodspaguide.co.uk/features/swedish-massage"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">Swedish</a></Link> and <Link href="https://www.myofascialrelease.com/about/definition.aspx"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">myofascial release</a></Link> techniques are particularly useful.</p>
						<p>Reciprocal inhibition is a technique commonly used in sports massage-it includes the application of resisted tension to the opposing muscle group.</p>
						<p>By activating the opposing muscle group, this technique forces the contracted muscle to relax.</p>
						<p>For example, a cramp in the anterior, lower leg can be relieved by applying resisted tension to the posterior, lower leg muscles.</p>
						<p>Once the cramp has subsided, the muscle may remain tight, and it should be massaged to help realign muscle tissue and restore its normal function.</p>

						<h3 className="mt-5">Heat/Ice</h3>
						<p>The application of ice at the onset of a calf cramp may help to reduce the pain and spasm.</p>
						<p>If tightness of muscles continues for days after the initial cramp, then the use of heat may help to relax the muscle by increasing blood flow to the area.</p>

						<h3 className="mt-5">Strength workouts</h3>
						<p>Finally, I recommend including more strength work into your training to increase your efficiency.</p>
						<p>That means your muscles will need to contract fewer muscle fibers to perform at the same level of pace/effort.</p>
						<p>Running after leg day can also be very good for your muscles under the right circumstances.</p>
						<p>It is not done to break any records or to push your body beyond its limits but to aid in the recovery of your muscles after the trauma they received.</p>
						<p>Keeping a relaxed pace at no more than 20 minutes promotes good circulation, speed up muscle recovery and reduce <Link href="https://www.painscience.com/articles/delayed-onset-muscle-soreness.php"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">DOMS</a></Link>.</p>
						<p>If your calf cramps continue after trying several methods, consult your healthcare professional to determine whether the cramps are the result of a medication side effect, vitamin deficiency or an underlying medical condition.</p>

						<h3 className="mt-5">Another consideration</h3>
						<p>In Traditional Chinese Medicine, those prone to recurrent muscle cramps may be experiencing an imbalance which is known as Liver Blood Deficiency (LBD).</p>
						<p>Other symptoms falling into an LBD include thirst, fatigue, dry eyes, headaches, insomnia and muscle spasms.</p>
						<p>If LBD is confirmed by a TCM practitioner, the acupressure on the critical points on the body can benefit the client.</p>
						<p>Through the sharing of information or the direct application of bodywork methods, massage therapists can aid in eliminating muscle cramps.</p>

						<p>&nbsp;</p>
						<h2 id="conclusion" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Conclusion</h2>
						<p>When you&rsquo;re out of shape, and then engage in prolonged, high-intensity exercise, you would put yourself at risk for developing cramping.</p>
						<p>The exact nature of running-related calf cramps remains challenging to understand.</p>
						<p>Despite what you might have been told as a kid, eating a banana probably won&rsquo;t help.</p>
						<p>The only things that help with cramps are slowing down, stretching and training.</p>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
