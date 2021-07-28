import Head from 'next/head';
import Link from 'next/link';

export default function About() {
	return (<>
		<Head>
			<title>About Dominic - Empower Your Run</title>
			<meta name="description" content="Welcome To Empower Your Run! Hey, there! My name is Dominic, and not too long ago, I discovered a new passion in life – running. It started as a way for me to reach my health and fitness goals, as it does for most people, but it quickly became much more than that." />
		</Head>

		{ /* Intro */ }
		<div className="intro bg-primary py-5">
			<div className="container">
				<div className="row justify-content-center text-center">
					<div className="col-12 col-md-8">
						<h1 className="text-light">
							<div className="display-3 fw-bold">About</div>
						</h1>
						<div style={{ height: '30px', clear: 'both' }}></div>
						<h2 className="display-5 fw-bold text-light">
						Dominic & Empower Your Run
						</h2>
					</div>
				</div>
			</div> { /* container: end */ }
		</div> { /* Intro: end */ }

		{ /* Main content */ }
		<div className="container-md fs-5 mt-5">
		<div className="row justify-content-center px-2">
		<div className="col-12 col-md-9">
			<h2 className="fw-bold">Welcome To Empower Your Run!</h2> 
			<div style={{ height: '15px', clear: 'both' }}></div>
			<p>Hey, there! My name is Dominic, and not too long ago, I discovered a new passion in life – running.</p>
			<p>It started as a way for me to reach my health and fitness goals, as it does for most people, but it quickly became much more than that.
			When I run, I feel alive and free.</p>
			<p>Now, running is a way of life.</p>
		
			<div style={{ height: '40px', clear: 'both' }}></div>

			<h2 className="fw-bold">Running – A Journey We’re Taking Together</h2>
			<div style={{ height: '15px', clear: 'both' }}></div>
			<p>See, we already have something in common – <strong>our love for running</strong>. It seems to me we’re already off to a good start!</p>
			<p>Running is more than just putting on shoes and heading outside – there are a lot of things you have to figure out before you hit the tracks. 
			The trouble is that there is a lot of contradictory advice going around.</p>
			<p>If you don’t know what you’re looking for, you’ll quickly get sucked into a world of misconceptions, misinformation – and running injuries.</p>
			<p>While I was searching for answers myself, I couldn’t help but wonder:</p>
			<p className="lead fw-bold"><em>How many runners out there are struggling, too, and what can I do to help?</em></p>
			<p>And with that question,<strong> Empower Your Run was born</strong>.</p>
			<p>What I’m trying to say is – <strong>I get it</strong>. I know how frustrating it is to have a ton of unanswered questions about running – and that’s what I aim to change.</p>

			<div style={{ height: '40px', clear: 'both' }}></div>
		
			<h2 className="fw-bold">What To Expect From Empower Your Run – And How To Get The Best Of It</h2>
			<div style={{ height: '15px', clear: 'both' }}></div>
			<p>As I said, I was a newbie runner once, too – we all have to start somewhere – and I know exactly what’s stopping you from reaching your peak performance.</p>

			<p>Moreover, I’m all about doing extensive research and speaking from personal experience – you can rely on every piece of information you find on here, including:</p>
			<ul className="d-grid gap-2">
				<li>Importance of "warm-ups" and "cooldowns"</li>
				<li>Improving speed and distance</li>
				<li>Marathon training</li>
				<li>Finding the right running equipment</li>
				<li>Debunking common myths and misconceptions about running</li>
			</ul>

			<p>Empower Your Run keeps growing day in and day out, and while I hope to make it a reliable source of knowledge and support for runners worldwide, it's still a one-person project.</p>

			<p>If you don't find the answers you were looking for right away, don't hesitate to send me suggestions and ideas on what you'd like to read next. We're here to learn from each other, after all.</p>

			<p>Lastly, it wouldn’t be what it is today if it weren’t for you and your support, so before you go about your day, know that I appreciate every single one of you.</p>

			<p>Running is a journey, and I’m glad it’s one we’re all taking together!</p>

			<div style={{ height: '40px', clear: 'both' }}></div>
		
			<h2 className="fw-bold">Want To Get In Touch?</h2> 
			<div style={{ height: '15px', clear: 'both' }}></div>

			<p>Whether you’re just now discovering the joys of running and feel like you’d benefit from having some guidance on your journey, 
			or you need some extra help with addressing common running problems and mistakes, I’m here for you!</p>

			<p>You can reach me through <Link href="https://www.twitter.com/0bdominic"><a className="text-decoration-none">Twitter</a></Link>  whenever you feel like it, and I'll be sure to follow-up soon!</p>
		</div> { /* col: end */ }
	</div> { /* row: end */ }	
		</div> { /* Main content: end */ }

	</>)
}
