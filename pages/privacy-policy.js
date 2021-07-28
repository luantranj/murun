import Head from 'next/head';
import Link from 'next/link';


export default function PrivacyPolicy() {
	return (<>
		<Head>
			<title>Privacy Policy - Empower Your Run</title>
			<meta name="description" content="This privacy notice provides you with details of how I collect and process your personal data through your use of my site." />
		</Head>

		{ /* Intro */ }
		<div className="intro bg-primary py-5">
			<div className="container">
				<div className="row justify-content-center text-center">
					<div className="col-12 col-md-8">
						<h1 className="text-light">
							<div className="display-3 fw-bold">Privacy Policy</div>
						</h1>
					</div>
				</div>
			</div> { /* container: end */ }
		</div> { /* Intro: end */ }

		{ /* Main content */ }
		<div className="container-md fs-5 mt-5">
		<div className="row justify-content-center px-2">
		<div className="col-12 col-md-9">
			<p>If you require any more information or have any questions about the privacy policy, 
			please feel free to contact me through <Link href="https://www.twitter.com/0bdominic"><a className="text-decoration-none">Twitter</a></Link>.
			</p>
		
			<p>At <Link href="/"><a className="text-decoration-none">EmpowerYourRun</a></Link>, the privacy of the visitors is of extreme importance to me.</p> 
			<p>This privacy policy document outlines the types of personal information is received and collected by <Link href="/"><a className="text-decoration-none">EmpowerYourRun</a></Link> and how it is used.</p>

			<div style={{ height: '40px', clear: 'both' }}></div>

			<h2 className="fw-bold">Log Files</h2> 
			<div style={{ height: '15px', clear: 'both' }}></div>
			<p>Like many other websites, <Link href="/"><a className="text-decoration-none">EmpowerYourRun</a></Link> makes use of log files.</p>
			<p>The information inside the log files includes internet protocol ( IP ) addresses, type of browser,
			Internet Service Provider ( ISP ), date/time stamp, referring/exit pages, and number of clicks to analyze trends, 
			administer the site, track user’s movement around the site, and gather demographic information.</p> 
			<p>IP addresses, and other such information are not linked to any information that is personally identifiable.</p>
		
			<div style={{ height: '40px', clear: 'both' }}></div>

			<h2 className="fw-bold">Cookies and Web Beacons</h2>
			<div style={{ height: '15px', clear: 'both' }}></div>
			<p><Link href="/"><a className="text-decoration-none">EmpowerYourRun</a></Link> does use cookies to store information about visitors preferences, 
			record user-specific information on which pages the user access or visit, customize Web page content based on visitors browser type or other information that the visitor sends via their browser.</p>

			<div style={{ height: '40px', clear: 'both' }}></div>
		
			<h2 className="fw-bold">DoubleClick DART Cookie</h2>
			<div style={{ height: '15px', clear: 'both' }}></div>
			<ul className="d-grid gap-2">
				<li>Google, as a third party vendor, uses cookies to serve ads on <Link href="/"><a className="text-decoration-none">EmpowerYourRun</a></Link>;</li>
				<li>Google’s use of the DART cookie enables it to serve ads to users based on their visit to  
					<Link href="/"><a className="text-decoration-none"> EmpowerYourRun</a></Link> and other sites on the Internet;</li>
				<li>Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy at the following URL:    
				<Link href="http://www.google.com/privacy_ads.html"><a className="text-decoration-none"> http://www.google.com/privacy_ads.html</a></Link>.</li>
			</ul>
			<p>Some of my advertising partners may use cookies and web beacons on my site. My advertising partners include:</p>

			<ul className="d-grid gap-2">
				<li>Google Adsense</li>
				<li>Commission Junction</li>
				<li>Clickbank</li>
				<li>Amazon Associates</li>
			</ul>

			<p>These third-party ad servers or ad networks use technology to the advertisements and links that appear on 
			<Link href="/"><a className="text-decoration-none"> EmpowerYourRun</a></Link> send directly to your browsers.</p> 

			<p>They automatically receive your IP address when this occurs.</p> 
			<p>Other technologies ( such as cookies, JavaScript, or Web Beacons ) may also be used by the third-party ad networks to measure the effectiveness of their advertisements and / or 
			to personalize the advertising content that you see.</p>

			<p><Link href="/"><a className="text-decoration-none"> EmpowerYourRun</a></Link> has no access to or control over these cookies that are used by third-party advertisers.</p>

			<p>You should consult the respective privacy policies of these third-party ad servers for more detailed information on their practices as well as for instructions about how to opt-out of certain practices.</p>
			<p><Link href="/"><a className="text-decoration-none"> EmpowerYourRun</a></Link>’s privacy policy does not apply to, and I cannot control the activities of, such other advertisers or web sites.</p>

			<p>If you wish to disable cookies, you may do so through your individual browser options.</p>
			<p>More detailed information about cookie management with specific web browsers can be found at the browsers’ respective websites.</p>

		</div> { /* col: end */ }
	</div> { /* row: end */ }	
		</div> { /* Main content: end */ }

	</>)
}
