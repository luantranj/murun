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
	const postId = 13;
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
						<p>Do you feel tightness in your calves after a long walk or run?</p>
						<p>Well, that can be due to trigger points in your calf muscles or due to a buildup of tension.</p>
						<p>Tightness in your calves can either be a result of how you run or of what you do in your daily life.</p>
						<p>The calf muscle is a name that is given to a group of muscles of the back part of the lower leg - gastrocnemius and soleus muscles.</p>
						<p>They connect ankle bones to shin bones, via the Achilles tendon.</p>
						<p>Because of their unique anatomy and way they act on your ankle and knee joints, calf muscles are powerful and can perform an incredible amount of work.</p>
						<p>The job of calf muscle is to point the foot downwards and also to provide propulsion when you load up the front of your foot during walking and running.</p>
						<p>The good news is that there are several ways to treat tight calf muscles and help you get back to normal function as soon as possible.</p>
						<p>But first, let&rsquo;s find out the causes of muscle tightness.</p>
						{ /* kimjiwon */ }
						<ul>
							<li><Link href="#why-do-muscles-tighten-up"><a className="text-decoration-none">Why do Muscles Tighten Up?</a></Link></li>
							<li><Link href="#tight-calves-from-running-technique"><a className="text-decoration-none">Tight Calves from Running Technique</a></Link></li>
							<li><Link href="#preventing-tight-calves"><a className="text-decoration-none">Preventing Tight Calves</a></Link></li>
							<li><Link href="#tight-calves-treatment"><a className="text-decoration-none">Tight Calves Treatment</a></Link></li>
							<li><Link href="#conclusion"><a className="text-decoration-none">Conclusion</a></Link></li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="why-do-muscles-tighten-up" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Why do Muscles Tighten Up?</h2>
						<p>Are you experiencing muscle tightness after a workout?</p>
						<p>Tight muscles can limit movement and are also very frustrating and painful.</p>
						<p>And what&rsquo;s worst of all, they can make it hard to stick to your exercise program.</p>
						<p>Knowing how to prevent and manage tight muscles will help keep you exercising.</p>
						<p>There are some reasons why muscles tighten up.</p>
						<p>There are three times when muscle tightness can occur- during periods of prolonged inactivity, during or after exercise.</p>
						<p><strong>So, let&rsquo;s find out what causes muscle tightness!</strong></p>
						<p>For example, during long days and weeks working at a desk (periods of prolonged inactivity) some muscles may get tight as a result of their restricted movement.</p>
						<p>When you sit at a desk for long periods of time, your hips are in a bent position.</p>
						<p>That puts the hip flexors ( muscles on the front of the hip ) in a shortened position and the glutes (muscles on the back of the hip) in a lengthened position.</p>
						<p>In addition to that, as you sit at a desk reaching forward to work on a computer your pectoralis (chest muscles) will be in shortened position, while your rhomboids (upper back muscles) will be in a lengthened position.</p>
						<p>Over time, that can result in muscle imbalances with the lengthened muscles becoming weak and shortened muscles are becoming tight.</p>
						<p>Another time when muscles tighten up is during exercise - a muscle cramp, for example.</p>
						<p>Muscle cramps are unpleasant and often painful sensations which are caused by a variety of factors such as muscle fatigue, low potassium or low sodium.</p>
						<p>Muscle cramps can also happen even when you are not exercising.</p>
						<p>When your muscles contract, the muscle fibers shorten, increasing tension in the muscle.</p>
						<p>When muscle contraction is completed, the muscle fibers decrease stress and lengthen.</p>
						<p>During a muscle cramp, however, the muscle fibers remain shortened, and they are unable to lengthen due to fatigue or improper nutrition and hydration.</p>
						<p>Forcibly stretching the muscle when it&rsquo;s in such contracted and tight form can tear the muscle fibers and lead to injury.</p>
						<p>You should allow the <Link href="https://www.medicinenet.com/muscle_spasms/article.htm"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">muscle spasm</a></Link> to relax and recover before you attempt to stretch out the cramp.</p>
						<p>To prevent these from occurring again in the future, make sure to be fed appropriately, adequately hydrated and not overly fatigued when exercising.</p>
						<p>Muscles can also tighten up following exercise, and that is felt as muscle soreness.</p>
						<p><Link href="https://www.painscience.com/articles/delayed-onset-muscle-soreness.php"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">DOMS</a></Link> or delayed onset muscle soreness can be felt as stiffness and pain in the muscles for 24 to 72 hours after exercising.</p>
						<p>The tightness and soreness felt is a result of small ruptures within the muscle.</p>
						<p>One can prevent it by gradually increasing the intensity of a new exercise program.</p>
						<p>The soreness will usually disappear within 72 hours onset, increased blood flow to the sore area, either by massage or by moderate intensity exercise may help alleviate soreness.</p>
						<p>Proper nutrition, exercise, and stretching strategies can help prevent and correct muscle tightness.</p>
						<p>Adequate choice of exercises, proper posture and stretches will prevent tightness due to decreased range of motion.</p>
						<p>Appropriate exercise progression and static stretches will help prevent DOMS and maintain range of motion.</p>

						<p>&nbsp;</p>
						<h2 id="tight-calves-from-running-technique" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Tight Calves from Running Technique</h2>
						<p>If you have ruled out your daily footwear as a cause of your tight calves, then it is probably due to your running technique.</p>
						<p>When you put calf muscles in a position where they have to work too hard to push you forward and up in late stance, they get fatigued, sore and tighten up.</p>
						<p>Let&rsquo;s explain how this works.</p>
						<p>When you move out of midstance through late stance to the toe off your body weight is gradually lifting off your foot.</p>
						<p>That is accomplished by the coordinated motion of your whole body spiraling away from that foot.</p>
						<p>If you keep your torso-pelvis through shoulders reasonably square, your body weight does not move off your foot in the same way, so you end up having to push with your feet, working your calves.</p>
						<p>It feels like pushing a refrigerator.</p>
						<p>Every single runner who is complaining of chronically sore and tight calves has had a torso which is not moving enough.</p>
						<p>It is all about the core action, and core action is how to get your body weight in the right place at the right time.</p>
						<p>If the weight is in the wrong place, nothing else can work right and try to fix anything else is like rearranging chairs on the Titanic.</p>
						<p>However, if your weight is in the right place, the things will pretty much go right all by themselves.</p>
						<p>If you have tight, stiff, and sore calves and don&rsquo;t feel your waist or pelvis, or upper body move much when you run, allowing it to move more will help.</p>

						<p>&nbsp;</p>
						<h2 id="preventing-tight-calves" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Preventing Tight Calves</h2>
						<p>Stretching regularly can be your best bet for keeping your calf muscles pain-free and loose.</p>
						<p>Here is a list of some other things you can do to prevent muscle tightness:</p>

						<h3 className="mt-5">Check out your shoes</h3>
						<p>When is the last time you bought new ones?</p>
						<p>When old sneakers wear down, they provide less support for joints and muscles.</p>

						<h3 className="mt-5">Strengthening and stretching exercises</h3>
						<p>You should make sure that you are stretching your calves and strengthening them.</p>
						<p>You can do simple exercises like heel raises and toe raises.</p>
						<p>Yoga is also beneficial for runners who are experiencing tightness.</p>

						<h3 className="mt-5">Warm up before stretching and other exercises</h3>
						<p>A jog or even slow walk for a few minutes should be enough to get the blood flowing.</p>

						<h3 className="mt-5">Engage in the massage therapy or physical therapy</h3>
						<p>If you participate in endurance sports which aggravate your calves, regular care by a professional can keep you running strong.</p>

						<h3 className="mt-5">Wear compression sleeves</h3>
						<p>Compression sleeves are inexpensive sock-like devices which are worn over lower legs.</p>
						<p>They help promote better blood flow to your muscles and also temporarily relieve pain during motion.</p>
						<p>You can purchase them at athletic supply shops.</p>

						<h3 className="mt-5">Stay hydrated</h3>
						<p>You should drink plenty of water throughout the day.</p>
						<p>Eat a well-balanced diet which includes sources of potassium, calcium, and magnesium.</p>

						<h3 className="mt-5">Work on your overall fitness</h3>
						<p>Some cramping may be due to muscle inactivity or atrophy. This is especially true for people over age 40.</p>

						<p>&nbsp;</p>
						<h2 id="tight-calves-treatment" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Tight Calves Treatment</h2>
						<h3 className="mt-5">FOAM ROLLING</h3>
						<p>Foam rollers have become increasingly popular in recent times, and many athletes use them for treatment of trigger points and relief of tight muscles.</p>
						<p>That is achieved by rolling the tight muscle over the roller, and the effects are similar to a deep tissue massage.</p>
						<p>Foam roller, when used correctly, can release tightness and tension between the <Link href="https://ashleyblackguru.com/what-is-fascia/"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">fascia</a></Link> and muscles.</p>
						<p>Repetitive movement patterns typically cause this tightness or tension - so obviously running, but also other repetitive sports or actions, such as resistance training.</p>
						<p>Foam rolling can help improve range of movement and flexibility and decrease the risk of injury.</p>
						<p>The point of foam rolling is to use your body weight - if an area hurts, you should support some of your weight elsewhere, using your arms.</p>
						<p>As the muscle relaxes, you can add more &ldquo;weight.&rdquo;</p>
						<p>In other words, work to your pain threshold.</p>

						<h3 className="mt-5">MASSAGE</h3>
						<p>It has been used for decades to treat tight muscles, including calves.</p>
						<p>Massage improves circulation, as it promotes the return of venous blood to the heart.</p>
						<p>Other circulation benefits of calf massage include enhanced blood flow to the calves themselves &ndash; which benefit from the flushing of harmful metabolic byproducts and the delivery of nutrients - and a lowering of blood pressure.</p>
						<p>It also reduces scar tissue after a calf muscle injury.</p>
						<p>If a tear occurs, it is common for you to experience swelling, inflammation, and pain in the area where your injury occurred.</p>
						<p>If the injury is left untreated, your body puts down scar tissue to heal your wound.</p>
						<p>That results in impingement of your nerves and blood vessels and restricted muscle range of motion, and it may manifest as lower extremity dysfunction or pain.</p>
						<p>A skilled massage therapist can manually reduce your scar tissue adhesions to restore mobility to your restricted body segment or muscle and to help decrease your pain, using various techniques.</p>

						<h3 className="mt-5">STRETCHING</h3>
						<p>To effectively stretch gastrocnemius and soleus exercises should be done with the knee bent as well as straight.</p>
						<p>To stretch the gastrocnemius muscle, the back leg needs to be kept straight - stand with the leg you want to stretch at the back and hands on the wall at shoulder height.</p>
						<p>Lean forward after you bend the front knee while keeping the back knee straight and pushing the heel down into the floor.</p>
						<p>When you feel the stretch hold for 20 seconds.</p>
						<p>If the stretch eases, you should lean further forwards until you can feel it again.</p>
						<p>But try not to push too far in the early stages. Perform three repetitions and repeat that 3 to 5 times a day.</p>
						<p>To stretch the soleus which is a deeper muscle, the knee of the leg to be stretched must be bent.</p>
						<p>That is because the soleus attaches below the knee and bending the knee allows the gastrocnemius muscle to relax which leaves the soleus on the stretch.</p>
						<p>Lean against the wall with a leg you intend to stretch at the back.</p>
						<p>Bend the knee while keeping the heel in contact with the ground until you feel the stretch.</p>
						<p>Hold that position for 15 to 20 seconds and repeat three times.</p>
						<p>If you cannot feel the stretch, another method is to place the ball of your foot against the wall and bend your front knee until you feel the stretch.</p>
						<p>If you have particularly flexible calf muscles, it may be better to stretch using a step.</p>
						<p>Lower your heel off the step dropping down until you feel the stretch.</p>
						<p>Hold for 15 to 20 seconds for three reps and repeat 3 to 5 times a day.</p>

						<h3 className="mt-5">R.I.C.E METHOD</h3>
						<p>Rest, ice, compression, and elevation (RICE) are excellent for instant treatment of muscle issues in the first 72 hours after you notice pain and tightness.</p>
						<p>This method helps reducing damage in the muscles.</p>
						<p>You should try using an ice pack for 20 minutes every two hours while resting and elevating the leg.</p>
						<p>A compression bandage can help keep swelling and bleeding under control.</p>
						<p>Elevating the area can reduce further swelling.</p>

						<p>&nbsp;</p>
						<h2 id="conclusion" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Conclusion</h2>
						<p>Do not ignore tight calf muscles.</p>
						<p>They are likely telling you something.</p>
						<p>You may need to make an appointment with doctor to rule out more serious conditions like DVT, or to slow down for a while.</p>
						<p>After some stretching and rest, you should be back on your feet in no time.</p>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
