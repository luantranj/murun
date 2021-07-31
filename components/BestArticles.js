import Image from 'next/image';
import Link from 'next/link';
import { GrStar } from "react-icons/gr";

export default function BestArticles() {
	return(<>
		{ /* Best Articles of The Blog */ }
		<div className="best-articles py-5 mt-5">
			<div className="container p-6">
				<div className="text-center">
					<h2 className="fw-bold">Best of Empower Your Run Blog</h2>
					<p className="fs-5">These few articles were handpicked from over 50 posts on my blog</p>
				</div>


				<div className="row justify-content-center justify-content-lg-between fs-5">
					<div className="col-10 col-md-4 col-lg-3">
						<div style={{ minHeight: '50px', clear: 'both'  }}></div>
						<h4 className="fw-bold">Running for Beginners</h4>
						<ul className="list-unstyled d-grid gap-4">
							<li className="position-relative">
								<span style={{ position: 'absolute', top: -4, left: -28  }}><GrStar size="1.2em" color="#FFCA2C" /></span>
								<Link href="/how-to-start-running-for-beginners">
									<a className="text-decoration-none">How To Start Running - A Complete Guide For Beginners</a>
								</Link>
							</li>
							<li><Link href="/does-couch-to-5k-work"><a className="text-decoration-none">Does Couch To 5k Work For You? Find the Ultimate Answer Here!</a></Link></li>
							<li><Link href="/running-3-times-a-week"><a className="text-decoration-none">How To Get The Most Benefits From Running Three Times A Week</a></Link></li>
						</ul>
					</div>

					<div className="col-10 col-md-4 col-lg-3">
						<div style={{ minHeight: '50px', clear: 'both'  }}></div>
						<h4 className="fw-bold">Arche of Foot</h4>
						<ul className="list-unstyled d-grid gap-4">
							<li className="position-relative">
								<span style={{ position: 'absolute', top: -4, left: -28  }}><GrStar size="1.2em" color="#FFCA2C" /></span>
								<Link href="/plantar-fasciitis-trigger-points">
									<a className="text-decoration-none">I Fixed My Plantar Fasciitis with a Trigger Point Therapy - Here's How You Can Do It Too</a>
								</Link>
							</li>
							<li className="position-relative">
								<span style={{ position: 'absolute', top: -4, left: -28  }}><GrStar size="1.2em" color="#FFCA2C" /></span>
								<Link href="/how-to-wrap-foot-for-plantar-fasciitis-with-ace-bandage">
									<a className="text-decoration-none">How to Wrap Foot for Plantar Fasciitis with Ace Bandage: DIY Instructions</a>
								</Link>
							</li>
							<li><Link href="/how-to-fix-high-arches"><a className="text-decoration-none">How to Fix High Arches - Your Guide to Pain Relief</a></Link></li>
							<li><Link href="/plantar-fibroma-massage"><a className="text-decoration-none">Plantar Fibroma - The Annoying Lump On The Arch Of The Foot That Can Limit Your Everyday Activities</a></Link></li>
						</ul>
					</div>

					<div className="col-10 col-md-4 col-lg-3">
						<div style={{ minHeight: '50px', clear: 'both'  }}></div>
						<h4 className="fw-bold">Ankle and Heel</h4>
						<ul className="list-unstyled d-grid gap-4">
							<li><Link href="/achilles-tendon-massage"><a className="text-decoration-none">Achilles Pain Relief: Try This Simple Achilles Tendon Massage</a></Link></li>
							<li className="position-relative">
								<span style={{ position: 'absolute', top: -4, left: -28  }}><GrStar size="1.2em" color="#FFCA2C" /></span>
								<Link href="/peroneal-tendonitis-running">
									<a className="text-decoration-none">Peroneal Tendonitis Running - The Best Ways To Manage It</a>
								</Link>
							</li>
							<li><Link href="/how-to-heal-a-bruised-heel"><a className="text-decoration-none">How to Heal a Bruised Heel - What You Need to Know and How to Do It!</a></Link></li>
							<li><Link href="/how-to-heal-a-sprained-ankle-faster"><a className="text-decoration-none">6 Tips that will Help You Heal a Sprained Ankle Faster!</a></Link></li>
						</ul>
					</div>

					<div className="w-100"></div>

					<div className="col-10 col-md-4 col-lg-3">
						<div style={{ minHeight: '50px', clear: 'both'  }}></div>
						<h4 className="fw-bold">Ball of Foot and Bunion</h4>
						<ul className="list-unstyled d-grid gap-4">
							<li><Link href="/dropped-metatarsal"><a className="text-decoration-none">What You Should Know About Dropped Metatarsal and How to Fix It</a></Link></li>
							<li><Link href="/mortons-neuroma-running"><a className="text-decoration-none">Morton's Neuroma in Running - What You Need To Know!</a></Link></li>
							<li><Link href="/how-to-prevent-bunions-from-getting-worse"><a className="text-decoration-none">6 Tips on How to Prevent Bunions from Getting Worse</a></Link></li>
						</ul>
					</div>

					<div className="col-10 col-md-4 col-lg-3">
						<div style={{ minHeight: '50px', clear: 'both'  }}></div>
						<h4 className="fw-bold">Toes</h4>
						<ul className="list-unstyled d-grid gap-4">
							<li className="position-relative">
								<span style={{ position: 'absolute', top: -4, left: -28  }}><GrStar size="1.2em" color="#FFCA2C" /></span>
								<Link href="/sprained-toe">
									<a className="text-decoration-none">Everything You Need to Know About a Sprained Toe and How to Heal It</a>
								</Link>
							</li>
							<li><Link href="/capsulitis-of-the-second-toe"><a className="text-decoration-none">Capsulitis Of The Second Toe - What It Is And What We Can Do To Treat It</a></Link></li>
						</ul>
					</div>

					<div className="col-10 col-md-4 col-lg-3">
						<div style={{ minHeight: '50px', clear: 'both'  }}></div>
						<h4 className="fw-bold">Other Problems</h4>
						<ul className="list-unstyled d-grid gap-4">
							<li className="position-relative">
								<span style={{ position: 'absolute', top: -4, left: -28  }}><GrStar size="1.2em" color="#FFCA2C" /></span>
								<Link href="/hot-spots-on-foot">
									<a className="text-decoration-none">You Have Hot Spots on Foot? Here's What You Should Know!</a>
								</Link>
							</li>
							<li><Link href="/difference-between-shin-splints-and-stress-fracture"><a className="text-decoration-none">How To Make A Difference Between Shin Splints And Stress Fractures</a></Link></li>
						</ul>
					</div>
		

				</div> { /* row: end */ }
			</div> { /* container: end */}
		</div> { /* Best Articles of The Blog: end */ }
	</>)
}
