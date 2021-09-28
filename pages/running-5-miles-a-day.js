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
	const postId = 31;
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
						<p>Hi, my name is Dominic, and I am a passionate runner. Let me tell you a story of how it all began for me.</p>
						<p>The main reason I started to run was to achieve my health and fitness goals. 
							But somewhere in between all that hard work, I figured out I enjoy running. So I decided it is time to step up my game and join a running club.
						</p>
						<p>Here I learned all the basics and improved as a runner significantly. The group motivation is to blame - when I had bad days, 
							I always found support in my team - they kept me moving forward.
						</p>
						<p>Soon I found out about an upcoming event - club&rsquo;s annual 5 miles race. I wanted to participate in that race, and I was determined to do anything I can to complete that race.</p>
						<p>The club had weekly-based preparation program, 
							so I decided to join them and hoped I would have enough time to progress to&nbsp;running 5 miles a day&nbsp;just in time for the race.
						</p>
						<p>Here&rsquo;s how it all went.</p>
						<ul>
							<li><Link href="#my-first-8-week-training-schedule"><a className="text-decoration-none">My First 8-Week Training Schedule</a></Link></li>
							<ul>
								<li><Link href="#week1"><a className="text-decoration-none">Week 1 - Getting introduced to the program, starting off slow & methodical</a></Link></li>	
								<li><Link href="#week2"><a className="text-decoration-none">Week 2 - Being bored with the gym, but felt good</a></Link></li>	
								<li><Link href="#week3"><a className="text-decoration-none">Week 3 - Facing my first injury</a></Link></li>	
								<li><Link href="#week4"><a className="text-decoration-none">Week 4 - Struggling with the program almost cost me all my previous efforts</a></Link></li>	
								<li><Link href="#week5"><a className="text-decoration-none">Week 5 - Introducing the right nutrition help me fuel up my performance</a></Link></li>	
								<li><Link href="#week6"><a className="text-decoration-none">Week 6 - Finally started to appreciate the gym sessions</a></Link></li>	
								<li><Link href="#week7"><a className="text-decoration-none">Week 7 - Overcoming challenges of the 7th week</a></Link></li>	
								<li><Link href="#week8"><a className="text-decoration-none">Week 8 - Finally reaching my goal and feeling amazing</a></Link></li>	
							</ul>
							<li><Link href="#race-day"><a className="text-decoration-none">Race Day</a></Link></li>
							<li>
								<Link href="#how-you-can-replicate-this-preparation-and-run-5-miles-a-day">
									<a className="text-decoration-none">How You Can Replicate This Preparation and Run 5 Miles a Day</a>
								</Link>
							</li>
							<li><Link href="#potential-risks-and-how-to-prevent-it"><a className="text-decoration-none">Potential Risks for Your Health and How to Prevent It</a></Link></li>
							<li><Link href="#conclusion"><a className="text-decoration-none">Conclusion</a></Link></li>
						</ul>


						<p>&nbsp;</p>
						<h2 id="my-first-8-week-training-schedule" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>My First 8-Week Training Schedule</h2>
						<p>This beginners&rsquo; schedule assumes that you can run at least a mile without stopping, and at a decent pace.</p>
						<p>You will approximately need eight weeks to reach 5 miles a day goal, but after this training program, you can smoothly go out and run a 5-mile race.</p>
						<p>Remember to start each run with a warm-up walk or slow 5 to 10 minutes jog - whatever suits you the most, and finish it up with a cool-down walk or slow jog too.</p>
						<div className="d-flex justify-content-center my-5 shadow rounded">
							<Image
								src="https://res.cloudinary.com/muru/image/upload/v1632814002/running-5-miles-a-day/running-5-miles-a-day-8-week-training-schedule_dekbko.png" 
								width="1462" 
								height="838"
								alt="Running 5 miles a day - 8-week training schedule" 
							/>
						</div>
						<h3 id="week1" className="mt-5">Week 1 - Getting introduced to the program, starting off slow & methodical</h3>
						<p>After I finished my first week, I had run in a total of 6 miles.</p>
						<p>I didn&apos;t particularly like the idea of going into the gym, but I&rsquo;ve learned that strength training plays a prominent role.</p>
						<p>The point is that you will perform better and have more strength, so I decided to embrace it.&nbsp;</p>
						<p>Cross-training sessions were easy because I decided to do something different in every workout so I don&apos;t get bored quickly.</p>
						<p>In the first week, I went swimming and rollerblading.</p>
						<p>I felt good; I was full of energy and relaxed.</p>
						<p>I slept great, and I was excited to continue my progress.</p>
						<p>Overall, the first week went great.&nbsp;</p>

						<h3 id="week2" className="mt-5">Week 2 - Being bored with the gym, but felt good</h3>
						<p>After finishing my second week, I had run in a total of 6.5 miles.</p>
						<p>The thought of going into the gym and doing all those boring exercises still bothered me.</p>
						<p>So here is the list of exercises I did in the gym two times a week:</p>
						<ul>
							<li><strong>Push-ups</strong>&nbsp;- 3 sets of 15 reps;</li>
							<li><strong>Bent-over row</strong>&nbsp;- 3 sets of 12 reps;</li>
							<li><strong>Reverse fly</strong>&nbsp;- 3 sets of 12 reps;</li>
							<li><strong>Plank</strong>&nbsp;- 45 to 60 seconds, repeat 3 times;</li>
							<li><strong>Leg raises</strong>&nbsp;- 3 sets of 10 reps;</li>
							<li><strong>Single side weighted sit up</strong>&nbsp;- 3 sets of 12 reps on each side;</li>
							<li><strong>Deadlift</strong>&nbsp;- 3 sets of 12 reps.</li>
							<li><strong>Lunge</strong>&nbsp;- 3 sets of 10 reps on each leg;</li>
							<li><strong>Single-leg bridge</strong>&nbsp;- 2 sets of 15 reps on each leg.</li>
						</ul>
						<p>I went to work on my bike and played basketball with my friends, so that was more than enough to cover my cross-training part.</p>
						<p>The second week went by so fast, but I started to like my new fitness routine.</p>

						<h3 id="week3" className="mt-5">Week 3 - Facing my first injury</h3>
						<p>At the end of my third week, I had run in a total of 7.5 miles.</p>
						<p>I confronted my first problem- blisters caused by my wrong choice of shoes.</p>
						<p>That&rsquo;s where I started to realize that the equipment we use affects our performance significantly, 
							so I had to put some emphasis on going through the available stuff out there.
						</p>
						<p>If you are serious in your intention to become a runner, you must invest in proper equipment.</p>
						<p>Here I will list all the essential gear:</p>
						<h4 className="mt-5">1. Running shoes</h4>
						<p>Find a store that specializes in running shoes and buy yourself adequately fitted shoes.</p>
						<p>I got blisters because I was wearing the same shoes for running and the gym.</p>
						<p>Your feet will swell, and shoes will become too tight, and that can lead to blisters and further injuries.</p>
						<p>Tips for choosing the right shoes:</p>
						<ul>
							<li>Your running shoes must be 1/2 a size larger than your regular shoes</li>
							&nbsp;
							<li>Never pick out the shoes just because you liked the color and they were stylish</li>
							&nbsp;
							<li>Always try different brands of shoes</li>
							&nbsp;
							<li>Good running shoes are crucial, so be prepared to spend some time and money on it, finding the right pair</li>
						</ul>
						<h4 className="mt-5">2. Supportive sports bra</h4>
						<p>For ladies, the next most important item to buy is a sports bra designed for running.</p>
						<p>The right bra will support and eliminate the bounce, which is crucial.</p>
						<p>Consider asking for help so your bra will fit you properly and it will not stretch out too much.</p>
						<h4 className="mt-5">3. Running clothes</h4>
						<p>Running is more comfortable if you are wearing moisture resistant clothes.</p>
						<p>If you love running when it&apos;s dark outside, make sure you are wearing some reflective outfit.</p>
						<p>Fabrics you should prefer when buying running outfits are nylon, wool, or polyester.</p>
						<p>During cold weather, these fabrics will keep you warm and dry, and on hot days, they will prevent sweating and chafing.</p>
						<p>Buy running clothes that you will wear only for running. You should apply this rule to all your equipment.</p>
						<h4 className="mt-5">4. Running socks</h4>
						<p>Invest in proper running socks made out of polyester, acrylic, and CoolMax, and you will prevent blisters.</p>
						<p>For winter time, choose socks made out of a blend of wool and CoolMax.</p>
						<p>Avoid wearing 100% cotton socks because the moisture won&apos;t get wicked away if your feet sweat or if you step in a puddle.</p>
						<h4 className="mt-5">5. Sports watch</h4>
						<p>You can download an app for your phone or buy a smartwatch depending on your budget. The point is to track your results - steps, speed, miles, heart rate, etc.</p>
						<p>If you prefer to keep track of minutes and not miles, then a timer or regular stopwatch works fine.</p>
						<h4 className="mt-5">6. Water bottle</h4>
						<p>It&apos;s essential to consume water to stay hydrated.</p>
						<p>A general rule for fluid consumption during your training is to drink 4 to 6 ounces of fluid every 20 minutes.</p>
						<p>I was still against the gym, but cross-trainings made me happy.</p>
						<p>I played some tennis and went hiking.</p>
						<p>Everything went smoothly, but that wasn&rsquo;t enough for me.</p>
						<p>I thought I don&rsquo;t run enough, so that Sunday after my long run, I decided to do something about that.</p>

						<h3 id="week4" className="mt-5">Week 4 - Struggling with the program almost cost me all my previous efforts</h3>
						<p>From this point of view, I can tell you that the fourth week was a disaster.</p>
						<p>I finished this week without energy, with sore muscles and low motivation. In three running days, I had run approximately 8 miles.</p>
						<p>Like I mentioned earlier I thought I don&apos;t run enough, 
							so I jogged on both days of my cross-training (that added additional 4 miles of running on my count) and skipped the rest day and went rollerblading instead.
						</p>
						<p>Sunday morning came, and I felt spent.</p>
						<p>I barely got out of my bed and forced myself to go out and run those 3.5 miles.</p>
						<p>In the middle of my run, I felt a significant lack of energy.</p>
						<p>I stopped running and continued walking before I was sure I could run again.</p>
						<p>Somehow I managed to finish it.</p>
						<p>On my way home, I talked with Jay, my good friend from the club, and he started questioning me about my eating habits. 
							Jay told me I must pay attention to my nutrition more, and never skip the rest day, or I will regress instead of progress.
						</p>
						<p>After I came home, I spent several hours researching about proper running nutrition, and developed a program for myself.</p>
						<p>My nutritionist friend from the club added a few tweaks but was quite impressed by it. Yay!</p>
						<p>Here&rsquo;s more about it:</p>
						<p>The right nutrition is essential if you want to fuel up your performance.</p>
						<p>Do not set yourself unreasonable targets for food consumption and analyze what you are eating. It is better to eat little and often.</p>
						<p>Avoid high-fat snacks such as crisps and chocolate, better choose a healthy dose of protein and carbohydrate.</p>
						<p>Fruits, especially bananas with nut butter, a handful of nuts, plain popcorn, natural yogurt are all excellent choices.</p>
						<p>Proper meals are where good runners nutrition counts.</p>
						<p>So for the main meals, choose brown rice, baked potato, sweet potato, beans, pasta, and quinoa.</p>
						<p>Avoid combination of food that is high in carbohydrates and high in fat.</p>
						<p>Don&apos;t spend your money on pills to supplement your diet when you can take all the vitamins and minerals from the food you eat.</p>
						<p>This nutrition guide will give you an overview of what you should eat before, during, and after a run.</p>
						<h4 className="mt-5">1. Before run</h4>
						<p>The food you will eat before your workout can have a positive influence on your performance.</p>
						<p>Avoid foods that are high in fat and fiber before your workout because they are harder to digest, and that can slow you down.</p>
						<p>I recommend you to grab a small, low-fiber, high-carb snack 30 to 60 minutes before.</p>
						<p>Your body needs approximately 30 to 60 grams of carbohydrates per hour for an intense workout.</p>
						<p>Never experiment with new foods before your workout, stick to those you know you will easily digest.</p>
						<p>If you had a larger meal, you should at least wait for three hours before you go out and run.</p>
						<p>Pre-run snacks:</p>
						<ul>
							<li>two bananas</li>
							<li>two slices of toast with jam</li>
							<li>75 grams of dried fruit of your choice</li>
							<li>two low-fiber granola bars</li>
						</ul>
						<p>Water is essential, so if you don&apos;t drink enough fluids before or during the running, your performance will suffer.</p>
						<h4 className="mt-5">2. During a run</h4>
						<p>Avoid dehydration and exhaustion on long running sessions because even minimal fluid loss will significantly decrease your endurance.</p>
						<p>Always come prepared - bring some energy bars or high-carb sports drinks.</p>
						<h4 className="mt-5">3. After run</h4>
						<p>After a demanding run fuel up your body and help it recover with some complex carbohydrates and proteins.</p>
						<p>Wait an hour after your run to eat and don&apos;t eat a large meal because that can upset your stomach and maybe even make you nauseous.</p>
						<p>Post-workout snacks:</p>
						<ul>
							<li>homemade mango and chia smoothie;</li>
							<li>oatmeal with milk and dried fruits;</li>
							<li>omelet with veggies and a slice of whole wheat bread.</li>
						</ul>

						<h3 id="week5" className="mt-5">Week 5 - Introducing the right nutrition help me fuel up my performance</h3>
						<p>At the end of the fifth week, I had run in a total of 8.5 miles.</p>
						<p>I start paying more attention to my strength training and on my diet.</p>
						<p>Yoga helps to improve flexibility, so that was an excellent choice for cross-training.</p>
						<p>This week I felt like I am back on the right track again.</p>

						<h3 id="week6" className="mt-5">Week 6 - Finally started to appreciate the gym sessions</h3>
						<p>In the sixth week, I noticed some changes.</p>
						<p>I start to feel the benefits of my gym sessions.</p>
						<p>I had more energy, thanks to my changed diet and nutritional habits.</p>
						<p>I played basketball and went swimming on my cross-training days.</p>
						<p>At the end of this week, I had run in a total of 9 miles, and I was generally happy with my overall progress.</p>

						<h3 id="week7" className="mt-5">Week 7 - Overcoming challenges of the 7th week</h3>
						<p>I was excited for that long run on Sunday morning because it was so close to my goal.</p>
						<p>I was eager to know how much I progressed and how would I feel afterwards.</p>
						<p>At the end of the seventh week, I had run in a total of 9.5 miles.</p>
						<p>I combined cycling and basketball for cross-training days.</p>

						<h3 id="week8" className="mt-5">Week 8 - Finally reaching my goal and feeling amazing</h3>
						<p>I felt so energized and hyped that last week of my program.</p>
						<p>I always wanted to run long distances but was never able to do that.</p>
						<p>After I finished my last week of this training program, I was able to run 5 miles a day.</p>
						<p>I got big congrats from everyone in the club, and entered the final preparation stage for the race.</p>
						<p>Five days of 5 miles per day, and 5 days of rest before the big day.</p>
						<p>The days passed so fast, and I completed every 5 miles with vigor.</p>


						<p>&nbsp;</p>
						<h2 id="race-day" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Race Day</h2>
						<p>After I finished my eight-week program, I was ready for my 5 miles race. I worked hard and came all this way, so I was eager to see how will I endure it.</p>
						<p>That morning before race sky was clear and the temperature was perfect for running, so I thought to myself, that is a great sign.</p>
						<p>The race started, and I felt like a dorkiest newbie runner ever.</p>
						<p>There were approximately 200 runners today, and all I could think was please God don&apos;t let me finish last.</p>
						<p>We were on our way, and the first mile went by so fast. I plodded on and found a steady rhythm; I tried to shake off my insecurities and began to enjoy my run.</p>
						<p>Around the third mile, a girl passed me by, and that motivated me to push harder the rest of the race.</p>
						<p>I finished my race, and when I took a look on my watch to see how much time did it take me, I was surprised.</p>
						<p>It took me 39 minutes 23 seconds to finish my race.&nbsp;</p>
						<p>I figured out that I can still improve my performance and that I need more intense program this time.</p>


						<p>&nbsp;</p>
						<h2 id="how-you-can-replicate-this-preparation-and-run-5-miles-a-day" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>
							How You Can Replicate This Preparation and Run 5 Miles a Day
						</h2>
						<p>When you are following a specific program, it is reasonable to want to reach the exact mileage that is suggested.</p>
						<p>But remember that you always need to listen to your body!</p>
						<p>Some things that work out for me do not necessarily need to work out for you.</p>
						<p>It&rsquo;s not like you are going to fail if you don&rsquo;t stick to the program in 100%.</p> 
						<p>You will maybe prolong the progress a little bit, but you will avoid the risk of getting injured.</p>


						<p>&nbsp;</p>
						<h2 id="potential-risks-and-how-to-prevent-it" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Potential Risks for Your Health and How to Prevent It</h2>
						<p>Of course, in some stage of your life, you will experience some running-related injury, but you can never be too cautious.</p>
						<p>If you don&apos;t allow your body to rest or you push yourself too hard or too fast, you will experience one of these injuries:</p>
						<ul>
							<li><Link href="/hot-spots-on-foot"><a className="text-decoration-none">Blisters</a></Link>&nbsp;
								will happen when your feet slide or rub the inside of the shoe so make sure you always buy a proper size
							</li>
							&nbsp;
							<li>Skin injuries like sunburns, cold sores, cuts, bruises it can all happen if you are wearing incorrect clothes</li>
							&nbsp;
							<li>Soft tissue injuries such as pulled muscle or&nbsp;<Link href="/how-to-heal-a-sprained-ankle-faster"><a className="text-decoration-none">ligament sprain</a></Link></li>
							&nbsp;
							<li><Link href="/difference-between-shin-splints-and-stress-fracture"><a className="text-decoration-none">Shin pain and inflammation</a></Link>&nbsp;
								in the muscles and&nbsp;<Link href="/peroneal-tendonitis-running"><a className="text-decoration-none">tendons</a></Link>
							</li>
						</ul>
						&nbsp;
						<p>You can prevent all of the above by always wearing proper shoes and clothes, avoid running when the weather conditions are bad, 
							applying sunscreen, and never pushing yourself over the boundaries of your comfort zone.
						</p>
						<p>Working on your running technique is very important as well.</p>
						<p>If you injure yourself stop running. Don&apos;t try to push yourself through the pain because that will only make things worse.</p>
						<p>Get proper medical attention immediately and do not go back to running until you are sure you completely healed.</p>
						<p>The key to preventing injuries and fully recovering after running is in nutrition.</p>
						<p>I made a big mistake and didn&apos;t take good care of what I am eating when I first started this program and ended up losing energy when I suppose to start gaining it.</p>


						<p>&nbsp;</p>
						<h2 id="conclusion" className="fw-bold text-center mb-4" style={{ fontSize: '2.5rem' }}>Conclusion</h2>
						<p>So that is how I completed my first ever 5 miles race. And I feel amazing that I was able to set a goal for myself and I crushed it! I even did better than I expected.</p>
						<p>Overall, training for a race gave me a discipline that carried over to my personal and professional life.</p>
						<p>I learned how everything I want to accomplish is doable if I distribute it in smaller tasks.</p>
						<p>Step by step and you will get to your goal - I guarantee you.</p>
						<p>Running for me, is a privilege, and I will, for sure run more races in the future just to show myself how much I can accomplish if I set my mind right.</p>
					</div> { /* col: end */ }
				</div> { /* row: end */ }
			</div> { /* container: end */ }
		</div>{ /* Article Content: end */ }
	</>)
}
