import Link from 'next/link';
import Image from 'next/image';
import { Navbar, Nav } from 'react-bootstrap';

import { FaTwitter, FaRocketchat, FaGithub } from 'react-icons/fa';


export default function Layout({ children }) {
	return (<>
		<Navbar bg="primary" expand="md" className="container-fluid align-middle px-md-5" collapseOnSelect>
			<Navbar.Brand className="text-white fw-bold">
				<h2 className="fw-bold"><a href="/" className="text-decoration-none text-light">EMPOWER YOUR RUN</a></h2>
			</Navbar.Brand>

			<Navbar.Toggle  className="me-1" variant="success"/>

			<Navbar.Collapse className="justify-content-end fs-5">
				<Nav>
					<Nav.Link href="/" className="mx-4 text-light">Home</Nav.Link>
					<Nav.Link href="/about" className="mx-4 text-light">About</Nav.Link>
					<Nav.Link href="/blog" className="mx-4 text-light">Blog</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>

		
		<div className="page-content" style={ { minHeight: '100vh' } } >
			{ children }
		</div>


		<footer className="container-fluid bg-primary">
			<div className="container mt-5 p-5 text-light">
				<div className="row justify-content-center fs-5">
					<div className="col-md-3">
						<h4>Connect</h4>
						<div className="mt-3">
						<ul className="list-inline">
							<li className="list-inline-item"><Link href="https://www.twitter.com/IAmDominicT"><a className="text-decoration-none" target="_blank"><FaTwitter size="1.4em" color="#fff" /></a></Link></li>
							<li className="list-inline-item"><Link href="https://9awlmhhepcj.typeform.com/c/Y0iCQpBF"><a className="text-decoration-none mx-3" target="_blank"><FaRocketchat size="1.4em" color="#fff" /></a></Link></li>
							<li className="list-inline-item"><Link href="https://www.github.com/iamdominict"><a className="text-decoration-none" target="_blank"><FaGithub size="1.4em" color="#fff" /></a></Link></li>


						</ul>
						</div>
						<div style={{ height: '30px', clear: 'both' }}></div>
					</div>

					<div className="col-md-3">
						<h4>Learn</h4>
						<ul className="list-unstyled d-grid gap-2">
							<li><Link href="/training"><a className="link-light text-decoration-none">Training</a></Link></li>
							<li><Link href="/injuries"><a className="link-light text-decoration-none">Injuries</a></Link></li>
							<li><Link href="/running-equipment"><a className="link-light text-decoration-none">Equipment</a></Link></li>
							<li><Link href="/frequently-asked-questions"><a className="link-light text-decoration-none">FAQs</a></Link></li>
						</ul>
						<div style={{ height: '30px', clear: 'both' }}></div>
					</div>

					<div className="col-md-3">
						<h4>Navigate</h4>
						<ul className="list-unstyled d-grid gap-2">
							<li><Link href="/"><a className="link-light text-decoration-none">Home</a></Link></li>
							<li><Link href="/about"><a className="link-light text-decoration-none">About</a></Link></li>
							<li><Link href="/blog"><a className="link-light text-decoration-none">Blog</a></Link></li>
						</ul>
						<div style={{ height: '30px', clear: 'both' }}></div>
					</div>


					<div className="col-md-2">
						<h4>Terms of Service</h4>
						<ul className="list-unstyled d-grid gap-2">
							<li><Link href="/privacy-policy"><a className="link-light text-decoration-none">Privacy Policy</a></Link></li>
							<li><Link href="/disclaimer"><a className="link-light text-decoration-none">Disclaimer</a></Link></li>
						</ul>
						<div style={{ height: '30px', clear: 'both' }}></div>
					</div>

					<div className="w-100 mt-4"></div>

					<div className="col text-center">
						© { new Date().getFullYear() } Empower Your Run LLC.
					</div>

				</div>{ /* end: row */ }
		
			</div>{ /* end: container*/ }
		</footer>

	</>);
}
