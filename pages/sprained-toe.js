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
	const postId = 38;
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
						<p>As a physically active person, you might think of yourself as someone who is used to feeling pain.</p>
						<p>Pain means progress; it means that you are on the right track, right?</p>
						<p>Be that as it may, what happens when the pain stops translating into progress?</p>
						<p>What happens when pain actually signifies that something is wrong?</p>
						<p>If you engage in athletic activities on a day to day basis, then you are no stranger to sprained toes.</p>
						<p>Even if it is a common sports injury, a sprained toe can also befall just about anyone.</p>
						<p>A common injury such as this one is doesn&rsquo;t favor one group of physically active people over another - basically, everyone is prone to it.</p>
						<p>With this being said, people ranging from professional athletes or fitness enthusiasts are just as susceptible to suffering from a sprained toe as the next average person.</p>
						<p>You might consider a sprained toe to be something unimportant and even minor, but essentially it is quite a serious matter.</p>
						<p>A sprained toe can put both a substantial dent in a professional athlete&rsquo;s career, and it can also basically prove itself as a cause of numerous yet serious setbacks in everyone&rsquo;s daily routines, no matter if they pertain to physical activities or simply walking.</p>
						<p>If you want to learn how to deal with a sprained toe properly, and of course, to find out how to maximize your efforts in taking care of it, please continue reading this article.</p>
						{ /* kimjiwon */ }
						<ul>
							<li><Link href="#healing-period"><a className="text-decoration-none">Healing Period - How Long Does It Typically Take to Heal a Sprained Toe?</a></Link></li>
							<li><Link href="#sprained-toe-what-is-it-and-how-to-address-it-properly"><a className="text-decoration-none">Sprained Toe - What Is It, and How to Address It Properly?</a></Link></li>
							<li><Link href="#symptoms"><a className="text-decoration-none">Sprained Toe Symptoms</a></Link></li>
							<li><Link href="#tips-on-healing"><a className="text-decoration-none">Your Sprained Toe and You - Tips on Healing</a></Link></li>
							<li><Link href="#wrap-your-sprained-toe"><a className="text-decoration-none">How To Properly Wrap Your Sprained Toe</a></Link></li>
							<li><Link href="#conclusion"><a className="text-decoration-none">Conclusion</a></Link></li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="healing-period" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Healing Period - How Long Does It Typically Take to Heal a Sprained Toe?</h2>
						<p>Before we get to the bottom of mending and alleviating the problem, I want to address something first.</p>
						<p>People get impatient and restless when they suffer an injury that could cause them to become glued to their beds, so I wanted to make sure that you know how long the recovery would last if you were to suffer from a sprained toe.</p>
						<p>The simplest answer is two to six weeks, depending on the severity of your injury.</p>
						<p>Typically, sprains are classified into three groups, ranging from mild, moderate, and severe.</p>
						<p>Each group has its own specific recovery time:</p>
						<div className="alert alert-primary">
							<h3>Grade I</h3>
							<p>A mild sprain can heal over the time period that ranges from as little as a week.</p>
							<p>Although the recovery may last full two weeks, this is the least problematic of the three groups.</p>
							<p>The ligament remains more or less intact, with minimal tears, and the joint remains fully stable.</p>

							<h3 className="mt-5">Grade II</h3>
							<p>Then we have a moderate sprain, which takes more time to heal, up to four or five weeks.</p>
							<p>Moderate sprains engulf partial tearing of the ligament with the joint moderately unstable.</p>

							<h3 className="mt-5">Grade III</h3>
							<p>The most serious of the three is the severe sprain, which takes the most time to heal.</p>
							<p>The full healing period lasts six weeks, and it is caused by tearing of the ligament, which in turn manifests in the entire loss of joint functioning.</p>
						</div>
	
						<p>So, as you can see, the healing time differs considerably and depends on the severity of your injury.</p>
						<p>Taking that into consideration, your healing process may take as little as a week if you have a Grade I sprain, or as much as six weeks, which is how long a Grade III sprain would take to heal.</p>
						<p>However, no matter how long your healing process takes, what you need to keep in mind at all times while suffering from a sprained toe is that it will not just disappear in a bat of an eye, and that, like any other injury, it will take some time to heal.</p>
						<p>It is always better to allow your sprained toe the time it needs to heal than it is to force it.</p>
						<p>But, with a little help from my tips, patience, and luck, your sprained toe injury will heal properly.</p>

						<p>&nbsp;</p>
						<h2 id="sprained-toe-what-is-it-and-how-to-address-it-properly" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Sprained Toe - What Is It, and How to Address It Properly?</h2>
						<p>For those of you that are not sure if you sprained your toe, or simply want to firmly confirm that you have, I will briefly explain what falls under the category of this injury and list its most common causes.</p>

						<h3 className="mt-5">What is a Sprained Toe?</h3>
						<p>As I have already mentioned, a sprained toe is one of the most common foot injuries, and it can affect people from any age group or any profession &ndash; from professional athletes to people who have no ties to sports whatsoever.</p>
						<p>A sprain, or the tear of a ligament (which is the tissue that links bones together to form joints), is the damage that follows the twisting, overstretching, overexerting or injuring.</p>
						<p>If you have a sprained toe, it means that you have torn a ligament in your toe.</p>
						<p>So, how does this happen, anyway?</p>
						<p>You can sprain your toe in numerous ways, and none of those is fun.</p>
						<p>The most mundane situation that results in a sprained toe is stubbing your foot &ndash; it is both awkward and painful.</p>
						<p>Other ways to injure your toe include, most notably &ndash; during sports.</p>
						<p>If you play football or soccer extensively, then you are no stranger to this injury.</p>
						<p>Kicking the ball, tackling, or simply maneuvering it can result in this rather painful injury.</p>
						<p>Competitive dancing that includes extreme and repetitive pressure exerted and endured on the tips of toes can also lead to a sprained toe.</p>
						<p>Basically, the opportunities to injure yourself in this way are limitless.</p>
						<p>We often tend to forget that our legs are responsible for carrying our entire weight, and by exerting pressure and stress to our toes, along with inappropriate or even worse, uncomfortable footwear, we make ourselves even more prone to suffering this injury.</p>
						<p>While you&rsquo;re here, you should check out the <Link href="/best-running-shoes-for-metatarsalgia"><a className="text-decoration-none">best running shoes for metatarsal</a></Link>!</p>

						<h3 className="mt-5">How to Diagnose a Sprained Toe</h3>
						<p>The best way to diagnose a sprained toe is to go to your doctor!</p>
						<p>Whatever you do, it is important not to set diagnosis for yourself, even if you are in possession of some medical education.</p>
						<p>There are many reasons why you shouldn&rsquo;t diagnose yourself, the most important one being that a sprained toe and a broken toe have many similar symptoms but crucially different healing processes.</p>
						<p>I&rsquo;m going to tell you what to expect once you go to the doctor with a (possibly) sprained toe:</p>
						<p>First and foremost, your doctor will ask you about the cause of the problem &ndash; how it happened and when it happened.</p>
						<p>Then, the doctor will ask you to describe what you feel and if there are any specific movements that particularly worsen your state or heighten the pain that you feel.</p>
						<p>Make sure that you share all the details that are at your disposal with your doctor.</p>
						<p>This will help her or him with your diagnosis.</p>
						<p>In addition to a conversation with you, your doctor will then ask you to move your toe, or ask you to move it yourself.</p>
						<p>Don&rsquo;t be afraid &ndash; this will help the doctor establish the severity of your injury, and also determine whether or not your joint is functioning and stable.</p>
						<p>The final steps of setting up a diagnosis are imaging tests, like an X-ray and an MRI.</p>
						<p>The X-ray will help your doctor exclude any broken bones, and an MRI will help your doctor determine the severity of the tear that your ligament suffered.</p>
						<p>After your doctor has collected all of the information that I listed above, she or he will classify the sprain into the most suitable sprain grade.</p>
						<p>As I already mentioned, based on the level of severity, you will get your &ldquo;level&rdquo;.</p>
						<p>In the best case, you get diagnosed with level I (if your ligament suffered minor or minimal tearing; therefore, your sprain is considered mild).</p>
						<p>Level II is another more beneficial outcome (if your ligament suffered some partial tearing, and your joint is moderately unstable, which in turn classifies your sprain as moderate).</p>
						<p>Or, you get the level III (if your ligament suffered a severe tearing, which resulted in complete joint instability, so your sprain is considered severe).</p>
						<p>But don&rsquo;t worry, with your doctor&rsquo;s advice (and my tips I want to present to you), you&rsquo;ll be back to running and your other physical activities in no time!</p>

						<h3 className="mt-5">Common Causes of a Sprained Toe</h3>
						<p>A sprained toe is most commonly caused by factors and situations that I have accumulated and listed below:</p>
						<ul>
							<li className="mb-3">Stubbing your toe</li>
							<li className="mb-3">Any sports that demand frequent stress on the feet, like jumping</li>
							<li className="mb-3">Ballet dancing</li>
							<li className="mb-3">Gymnastics</li>
							<li className="mb-3">Kicking can result in twisting of your toes</li>
							<li className="mb-3">Competitive dancing</li>
							<li className="mb-3">Tripping and falling down while running or walking</li>
							<li className="mb-3">Having your toe caught in something</li>
							<li className="mb-3">Martial arts</li>
						</ul>
						<p>A sprained toe is considered to be one of the most common injuries.</p>
						<p>However, athletes and people who frequently engage in sports that require kicking, running, and dancers are more prone to it.</p>

						<p>&nbsp;</p>
						<h2 id="symptoms" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Sprained Toe Symptoms</h2>
						<p>Sprained toe symptoms can vary, depending on which grade they fall into.</p>
						<ul>
							<li className="mb-3">Pain, often in the area surrounding the injured toe</li>
							<li className="mb-3">Pain and difficulty when moving your toe</li>
							<li className="mb-3">Swelling</li>
							<li className="mb-3">Bruising</li>
							<li className="mb-3">Tenderness</li>
							<li className="mb-3">Swelling</li>
							<li className="mb-3">Stiffness</li>
							<li className="mb-3">Throbbing</li>
							<li className="mb-3">Joint instability</li>
						</ul>
						<p>The degree of pain, swelling, bruising, and joint instability is conditioned by the severity and the grade of the sprain.</p>

						<p>&nbsp;</p>
						<h2 id="tips-on-healing" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Your Sprained Toe and You - Tips on Healing</h2>
						<p>Once we have covered all of the bases, I can move on to the healing process.</p>
						<p>I have selected some tips and techniques that will ameliorate the sprain and the entire healing process for you.</p>
						<p>Taking into consideration that your sprained toe might need up to six weeks to heal, you are probably wondering whether there is something you can do to help and ease the entire process.</p>
						<p>However, while these tips will surely be useful to you, I must tell you - don&rsquo;t expect your sprained toe to heal overnight miraculously.</p>
						<p>Therefore, here is a bonus tip before we start: Be patient and mindful of your process.</p>
						<p>As someone who has suffered from a sprained toe for a couple of times, I can vouch that these tips will ease your recovery, even if it is for a little. Here&rsquo;s a list of top five tips and techniques to ease your healing:</p>
						<h3 className="mt-5">First and Foremost - Rest</h3>
						<p>If you are a physically active person, taking it easy (even if it is only six weeks) might seem like a problem to you.</p>
						<p>Yes, you&rsquo;ve sprained your toe, but resting is not the end of the world.</p>
						<p>I know that this solution is simple enough to say, but a lot harder to implement in an athletically stimulated lifestyle.</p>
						<p>If you are used to pain equals progress mentality, now it is time to take a step back from that.</p>
						<p>Pain means that something is wrong, and it goes without saying that you should try to take it easy on yourself.</p>
						<p>Bear in mind that this does not mean that you should stop all movement altogether - no.</p>
						<p>It means that you should be mindful and try not to overexert yourself.</p>
						<h3 className="mt-5">Ice - Your Number One Assistant</h3>
						<p>Ice packs in all forms will go a long way.</p>
						<p>No matter if it&rsquo;s a pack of frozen fruit or vegetables or a regular ice pack, it will greatly lower your pain and swelling.</p>
						<p>This also should not be overdone, as this method will neither make your sprained toe heal overnight nor cure you altogether at once.</p>
						<p>Apply ice to your sprained toe for no longer than 15 minutes, several times a day.</p>
						<p>Another seasoned tip is not to put ice directly on your injury, in order to avoid skin burns.</p>
						<p>Always wrap it in a cloth, and then you are free to apply it.</p>
						<h3 className="mt-5">Compression</h3>
						<p>Wrap an elastic bandage around your sprained toe in order to ameliorate your healing process.</p>
						<p>This, too, should be done in a conscious way - the wrap should not be too tight as you do not want to cut off the blood flow, so make sure that it feels comfortable.</p>
						<p>This should be done to increase the support and stability of your foot, not to injure you even more.</p>
						<h3 className="mt-5">Take it One Step Up - Elevation</h3>
						<p>Pillows, footrests, blankets on top of blankets, anything that can help you prop up your foot.</p>
						<p>This is the one thing that you can do whenever it is possible, and it is both an uncomplicated and effective way to relieve pain and swelling.</p>
						<h3 className="mt-5">Finally, Pain Relievers</h3>
						<p>Nonsteroidal anti-inflammatory drugs such as aspirin and ibuprofen can go a long way in pain relief.</p>
						<p>These can be extremely helpful, especially if your sprain falls under the grade III sprain, a.k.a. If you sprain is a severe one.</p>
						<p>Nonsteroidal anti-inflammatory drugs can both relieve pain and reduce swelling.</p>
						<p>It should go without saying that you should not mix nonsteroidal anti-inflammatory drugs, but that you should only take one kind of them.</p>

						<p>&nbsp;</p>
						<h2 id="wrap-your-sprained-toe" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How To Properly Wrap Your Sprained Toe</h2>
						<div className="youtube-video-container my-5">
							<iframe 
								className="shadow rounded"
								width="560" 
								height="315" 
								src="https://www.youtube.com/embed/_SEfvHf2n2w?controls=0" 
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen>
							</iframe>
						</div>
						<p>If you suffered a severe toe sprain, you should consider a taping technique in order to increase foot stability, the so-called &ldquo;buddy-taping&rdquo; technique.</p>
						<p>This technique is fairly easy to implement once you have a sprained toe.</p>
						<p>It&rsquo;s called &ldquo;buddy-taping&rdquo; because your sprained toe needs a &ldquo;buddy&rdquo; to recover and regain stability.</p>
						<p>The most important thing is to identify the best support system.</p>
						<p>Ideally, you should try to tape two toes together, and for this technique to work, you will need the following: <strong>Gauze or cotton</strong> and <strong>Tape</strong>.</p>
						<p>You&rsquo;ll need either gauze or cotton in order to put them between the two toes and their sides.</p>
						<p>Blisters and skin sores can be annoying enough, but in combination with the painful enough sprained toe, they can be a nightmare.</p>
						<p>A piece of gauze or cotton between the &ldquo;buddies&rdquo; (and their sides) can go a long way.</p>
						<p>You should use as little tape as possible, and you should definitely not tape them tightly together.</p>
						<p>Taping them tightly and closely together can increase swelling and pain, which we want to avoid.</p>
						<p>Once your toe can rely on &ldquo;buddy tape&rdquo; system, it is safe to move around (this does not mean that you should, in any way, exert stress on your toe), you can bathe or shower with it and replace the gauze (or cotton) and tape afterward.</p>
						<p>Keep in mind that you should also wear appropriate footwear - nothing too tight, so consider wearing something open-toed, such as flip-flops or slides.</p>

						<p>&nbsp;</p>
						<h2 id="conclusion" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Conclusion</h2>
						<p>Having a sprained toe can be painful, irritating, and it can restrict certain activities from your life for a certain period of time.</p>
						<p>Experiencing any kind of pain is never easy, but there are things to be done in order to ease the entire process.</p>
						<p>As a physically active person myself, I understand how challenging bedrest can be, but there isn&rsquo;t anything that can cure your injury overnight.</p>
						<p>Instead of worrying about your sprain, you should take a step back and realize that it is not permanent.</p>
						<p>It is a condition that will most likely last up to six weeks, and if you follow my tips and techniques, your healing process can be made much easier.</p>
						<p>Be patient and kind to yourself while you heal, take the time necessary to recuperate in order to maximize your stability after recovery.</p>
						<p>Sprained toes are more common than you might think, especially among people who are active.</p>
						<p>If you found this article helpful, share it with fellow runners and athletes in case they need some help &ndash; support goes a long way.</p>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
