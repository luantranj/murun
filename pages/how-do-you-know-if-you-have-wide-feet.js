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
	const postId = 36;
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
						<p>Most of us go through our lives without ever stopping to take a good look at our feet and ask ourselves where do they stand in the grand hierarchy of foot sizes.</p>
						<p>As you can guess, that is a big mistake, and its consequences only tend to grow bigger if you are an avid runner as I am.</p>
						<p>The real issue here is that we usually try to describe our feet through the so-called shoe size, which is:</p>
						<ol>
							<li className="mb-3">a pretty arbitrary number that leaves too many details out, and</li>
							<li className="mb-3">focuses primarily on the length of the feet rather than their width</li>
						</ol>
						<p>That is not that big of a problem if you have narrow feet that can easily slip into any pair of shoes.</p>
						<p>The folks with the feet that are a bit wider are not nearly as lucky.</p>
						<p>But, how do you recognize if you have wide feet, what does that mean for your health and running performance, and is there anything you can do to mitigate this problem?</p>
						<p>Let us try to find out.</p>
						{ /* kimjiwon */ }
						<ul>
							<li><Link href="#reasons"><a className="text-decoration-none">The Reasons Why Your Feet can be Wide</a></Link></li>
							<li><Link href="#two-ways-to-recognize-your-feet-are-slightly-wider"><a className="text-decoration-none">Two Ways to Recognize Your Feet are Slightly Wider</a></Link></li>
							<li><Link href="#what-do-wider-feet-mean-if-you-are-a-runner"><a className="text-decoration-none">What do Wider Feet Mean if You Are a Runner?</a></Link></li>
							<li><Link href="#how-to-choose-comfortable-footwear"><a className="text-decoration-none">How to Choose Comfortable Footwear</a></Link></li>
							<li><Link href="#conclusion"><a className="text-decoration-none">Conclusion</a></Link></li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="reasons" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>The Reasons Why Your Feet can be Wide</h2>
						<p>But, before we start going more in depth about how to recognize wide feet, let us first take a quick look at some of the most common reasons why some feet are wider than others.</p>
						<p>This small body feature can highlight some issues you should definitely try to address.</p>

						<h3 className="mt-5">It&rsquo;s just the Way You&rsquo;re Born</h3>
						<p>Yeah, there is a thing called physical diversity.</p>
						<p>Because of it, some people are taller than others, some have wider feet.</p>
						<p>And all these things are perfectly fine.</p>
						<p>We all have to make outfit choices according to our physical predispositions.</p>
						<p>Why would feet be any different?</p>

						<h3 className="mt-5">You Have Flat Feet</h3>
						<p>Now, this situation is a bit more worrying.</p>
						<p>To put it simply, flat feet cause arches to fall.</p>
						<p>As a result, your toes have a natural tendency to spread to create more balance.</p>
						<p>If it turns out that this is the reason behind your shoes feel tight, no need to worry.</p>
						<p>Depending on the cause, this condition can be remedied or at least relieved <Link href="/flat-feet-exercises"><a className="text-decoration-none">with a couple of easy exercises</a></Link>.</p>

						<h3 className="mt-5">Weight Issues</h3>
						<p>When you are packing weight, your body is essentially looking for creative ways to redistribute this weight and balance itself out.</p>
						<p>The oversized feet are the natural outcome of this problem.</p>
						<p>Now, out of all the causes I&rsquo;m covering on this list, this one is the easiest to solve.</p>
						<p><Link href="/flat-feet-exercises"><a className="text-decoration-none">Here</a></Link>, you can check out a couple of intuitive ways to include exercise in your daily life, even if you are not the idlest person in the world.</p>

						<h3 className="mt-5">Bunions</h3>
						<p>The width of the feet is largely determined by the size of the feet bones.</p>
						<p>There should be no surprise then that different bone deformities like bunions can affect the size of your feet.</p>
						<p>Unfortunately, this issue can be remedied only by surgery, but you can do a lot to <Link href="/best-running-shoes-for-bunions"><a className="text-decoration-none">prevent progression with comfortable footwear</a></Link>.</p>
						<p>Either way &ndash; if you are experiencing this kind of problem, be sure to consult the physician for the advice.</p>

						<h3 className="mt-5">Tight Footwear</h3>
						<p>When your feet are squeezed in uncomfortable shoes, their natural response is to swell and make the shoes even tighter.</p>
						<p>As counterintuitive as this body reaction is, there is a possibility that your problem can be solved by simply changing the shoes.</p>

						<p>&nbsp;</p>
						<h2 id="two-ways-to-recognize-your-feet-are-slightly-wider" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Two Ways to Recognize Your Feet are Slightly Wider</h2>
						<p>And now that we&rsquo;ve covered the main factors affecting the shoe size let us take a look at a couple of ways to know for sure if your feet are wider than average or not.</p>
						<p>I say a couple because the things pretty much boil down to two main methods.</p>

						<h3 className="mt-5">Method Number 1: Visual Clues</h3>
						<p>The first method is the simple visual inspection.</p>
						<p>If your feet are slightly wider than average, your regular-sized footwear will end up tight in places.</p>
						<p>As a result, your feet will do their best to alarm you with some less than pleasant visual clues:</p>

						<h4 className="mt-3">Corns and calluses</h4>
						<p>If you are unfamiliar with the terms, corns are hard patches that often develop on the foot skin exposed to irritation.</p>
						<p>Similarly, calluses appear as a direct result of continuous friction between your shoes and your feet.</p>
						<p>As unpleasant as these conditions are, they do point out not only that you have wider feet but also the places are that end up the most irritated.</p>

						<h4 className="mt-3">Developing bunions</h4>
						<p>I&rsquo;ve already mentioned bunions, and what to say &ndash; they are a pretty nasty physical condition that can&rsquo;t truly be rooted out.</p>
						<p>As a consolation, bunions often develop as a result of wearing tight shoes, so you can, at least, slow down or completely stop their development.</p>

						<h4 className="mt-3">Hammertoes</h4>
						<p>When your feet are compressed into a pair of tight shoes, they try to find the most comfortable way to fill in this limited space.</p>
						<p>Since your toes are the most flexible part of the feet, they are often raised or curled to make more space.</p>
						<p>If something like this continues, however, some of your toes will end up permanently curled, and you are going to develop the condition called &quot;hammertoes.&quot;</p>
						<p>Fortunately, this issue can be corrected with practice and toe straighteners.</p>

						<h4 className="mt-3">Frequent blisters</h4>
						<p>Much like corns and calluses, blisters are a direct pointer that your footwear may be tight in places.</p>
						<p>They are, however, far more deceiving.</p>
						<p>Namely, the blisters often appear after you buy new shoes that haven&rsquo;t yet been trampled.</p>
						<p>Once you give them a couple of long runs, they slowly stop appearing.</p>
						<p>That doesn&rsquo;t mean the shoes are suitable for your foot size.</p>
						<p>It means only that you&apos;ll have to wait for some other, far more dangerous indicator, to be entirely sure.</p>
						<p>Don&apos;t allow this to happen.</p>
						<p>If you experience frequent blisters upon buying new footwear, use the second method I&apos;ll cover in just a minute to be sure.</p>

						<h4 className="mt-3">Toe discoloration</h4>
						<p>Toe discoloration is not that different from blisters.</p>
						<p>There are far, far worse ways to find out that something may be wrong with your new shoes.</p>
						<p>So, what&rsquo;s all the fuss about?</p>
						<p>Well, as I already mentioned, when you try to squeeze your feet into tight shoes, their natural reaction is to curl the toes to make more space.</p>
						<p>Before this situation blows up into fully developed hammertoes, you first experience slight discoloration that is the result of your toes rubbing against the inside surface of the shoes.</p>

						<h3 className="mt-5">Method Number 2: Using Charts</h3>
						<p>Compared to the previous method, we can call this a bit more &ldquo;scientific.&rdquo;</p>
						<p>The good news is that, if you have any suspicions about your feet size, or you even start noticing early signs of the conditions I&rsquo;ve just covered above, there is nothing that stops you to check where your feet sit on the size chart.</p>
						<p>But, before we come to the charts, we first need to find a way to determine just how wide your feet actually are.</p>
						<p>So, let us go through some simple steps that will come to this all-important number.</p>

						<h4 className="mt-3">Step 1: Assemble the tools</h4>
						<p>Measuring your feet doesn&rsquo;t require some expensive equipment or measuring tools.</p>
						<p>But you will need a couple of items without which this simple task would be impossible.</p>
						<p>So, before you do anything else, be sure you have a pen or a pencil, a tape measure (if you don&apos;t have one you can get away with large enough of a ruler), and a piece of paper.</p>

						<h4 className="mt-3">Step 2: Wait for the evening</h4>
						<p>Why you might ask?</p>
						<p>Well, over the course of a day, your feet are exposed to constant strain to which they respond by swelling.</p>
						<p>Because of that, measuring your feet early in the morning can give you a false impression about the actual dimensions of the feet.</p>
						<p>Sure, you will get your ready-made size.</p>
						<p>But, as soon as you spend a couple of hours out of bed, these measures will fly directly through the window.</p>

						<h4 className="mt-3">Step 3: Make the optimal conditions</h4>
						<p>Essentially, the accuracy of the measuring can be largely helped by two things.</p>
						<p>First, you will need to find a flat, solid surface you can stand on.</p>
						<p>Keep in mind; your feet should stand firmly on the ground, so elevated surfaces are out of the question.</p>
						<p>Second, put on the socks you are usually wearing with the shoes.</p>
						<p>Otherwise, your future shoes may end up too narrow.</p>

						<h4 className="mt-3">Step 4: Outline and take measurements</h4>
						<p>Ok, we have finally checked all the small boxes.</p>
						<p>All you need to do now is to take the pen and draw the outline around the feet.</p>
						<p>When you are done, use to tape to measure the distance between your longest toe and your heel (the length of the foot), and between two widest part of feet (the width).</p>
						<div className="youtube-video-container my-5">
							<iframe 
								className="shadow rounded"
								width="560" 
								height="315" 
								src="https://www.youtube.com/embed/XeHoatJ8-os?controls=0" 
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen>
							</iframe>
						</div>
						<h4 className="mt-3">The Shoe Sizing Charts</h4>
						<p>Now that you have the measures of your feet (be sure to measure them both), it is finally the time to see where they sit on the shoe sizing chart.</p>
						<p><strong>For Women</strong></p>
						<div className="d-flex justify-content-center mb-5 shadow rounded">
							<Image
								src="https://res.cloudinary.com/muru/image/upload/v1634266085/how-do-you-know-if-you-have-wide-feet/Shoe-Sizing-Chart-Women_u9sukv.png" 
								width="1184" 
								height="962"
								alt="Shoe Sizing Chart for Women" 
							/>
						</div>
						<p><strong>For Men</strong></p>
						<div className="d-flex justify-content-center mb-5 shadow rounded">
							<Image
								src="https://res.cloudinary.com/muru/image/upload/v1634266116/how-do-you-know-if-you-have-wide-feet/Shoe-Sizing-Chart-Men_yc6zdp.png" 
								width="1188" 
								height="1168"
								alt="Shoe Sizing Chart for Men" 
							/>
						</div>

						<p>&nbsp;</p>
						<h2 id="what-do-wider-feet-mean-if-you-are-a-runner" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>What do Wider Feet Mean if You Are a Runner?</h2>
						<p>So, there you have it.</p>
						<p>If your feet belong to the last column, they are definitely slightly above the average, at least width-wise.</p>
						<p>Now, if you are a passionate runner, this fact probably raises some questions?</p>
						<p>Does this body feature have an effect on your running performance, and if so, what you can do to improve your technique?</p>
						<p>Well, I did my homework, and I have a couple of things to share with you.</p>
						<p>The good news is that a <Link href="https://well.blogs.nytimes.com/2015/11/06/ask-well-does-foot-size-affect-running/"><a className="text-decoration-none" target="_blank" rel="nofollow noopener noreferrer">2004 overview</a></Link> of the factors that influence running economy, says the real-world decline in the efficiency of the runners with oversized feet is so small it can be categorized as negligible.</p>
						<p>On the sourer note, all the problems that you experience while you are wearing inappropriate footwear are now, due to increased strain and intensity, becoming exacerbated.</p>
						<p>So, the combination of harsh surfaces and improper shoes can damage your performance long-term, albeit indirectly.</p>

						<p>&nbsp;</p>
						<h2 id="how-to-choose-comfortable-footwear" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>How to Choose Comfortable Footwear</h2>
						<p>In one of my previous articles, I covered how <Link href="/does-running-make-you-taller"><a className="text-decoration-none">running can actually make you taller</a></Link>.</p>
						<p>Unfortunately, when it comes to the feet size, methods like this are of little help.</p>
						<p>As a matter of fact, besides the precautionary measures I&apos;ve covered when I talked about the reasons why your feet might be oversized (e.g., losing weight), the only way to make them slimmer is by unpleasant, and often painful surgery.</p>
						<p>But, with the things as they are, you can at least make your footwear as comfortable as possible and prevent future complications.</p>
						<p>Here are a couple of quick tips that will help you to find the best running shoes as possible:</p>
						<ul>
							<li className="mb-3">Try the shoes in the evening when your feet are already swelled</li>
							<li className="mb-3">Never try the shoes without your favorite socks</li>
							<li className="mb-3">Prioritize the width &ndash; the excessive length is a far lesser problem that can be addressed with various inserts</li>
							<li className="mb-3">Always try out both shoes &ndash; if you have measured both your feet you can easily see they are not the same size</li>
							<li className="mb-3">Give the shoes a good test (wiggling included)</li>
						</ul>

						<p>&nbsp;</p>
						<h2 id="conclusion" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Conclusion</h2>
						<p>We are finally at the end, which is the perfect opportunity for me to sum up the things we&apos;ve talked about.</p>
						<p>Bodies come in different shapes and sizes.</p>
						<p>Feet are no different.</p>
						<p>So, even if you notice your feet are slightly wider than usual and you are simply born with them, that&apos;s perfectly fine.</p>
						<p>As long as you wear comfortable shoes, you won&apos;t experience any problems, and your running performance will be top-notch.</p>
						<p>If, on the other hand, your feet have increased in width as a result of some medical condition or excessive weight, you should do your best to eliminate the causes of these issues.</p>
						<p>If you don&rsquo;t, the problems are only going to get worse further down the road.</p>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
