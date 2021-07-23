import Link from 'next/link';
import Image from 'next/image';
import { Navbar, Nav } from 'react-bootstrap';

export default function Layout({ children }) {
	return (<>
		<Navbar bg="primary" expand="md" className="container-fluid align-middle px-md-5" collapseOnSelect>
			<Navbar.Brand className="text-white fw-bold">
				EMPOWER YOUR RUN
			</Navbar.Brand>

			<Navbar.Toggle  className="me-1" variant="success"/>

			<Navbar.Collapse className="justify-content-end">
				<Nav>
					<Nav.Link href="/" className="mx-4 text-light">Home</Nav.Link>
					<Nav.Link href="/about" className="mx-4 text-light">About</Nav.Link>
					<Nav.Link href="/learn" className="mx-4 text-light">Blog</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>

		
		<div className="page-content">
			{ children }
		</div>


		<footer className="container-fluid bg-primary">
			<div className="container mt-5 p-5 text-light">
				<div className="row justify-content-center">
					<div className="col-md-3">
						<h5>Connect</h5>
						<div className="mt-3">
							<Link href="/"><a className="mx-2"><Image src="/twitter.png" width="32" height="32" alt="Twitter" /></a></Link>
							<Link href="/"><a className="mx-2"><Image src="/instagram.png" width="32" height="32" alt="Instagram" /></a></Link>
							<Link href="/"><a className="mx-2"><Image src="/youtube.png" width="32" height="32" alt="Youtube" /></a></Link>
						</div>
					</div>

					<div className="col-md-3">
						<h5>Learn</h5>
						<ul className="list-unstyled">
							<li><Link href="/"><a className="link-light text-decoration-none">Training</a></Link></li>
							<li><Link href="/"><a className="link-light text-decoration-none">Preventing Injuries</a></Link></li>
							<li><Link href="/"><a className="link-light text-decoration-none">Gadgets</a></Link></li>
						</ul>
					</div>

					<div className="col-md-3">
						<h5>Navigate</h5>
						<ul className="list-unstyled">
							<li><Link href="/"><a className="link-light text-decoration-none">Home</a></Link></li>
							<li><Link href="/"><a className="link-light text-decoration-none">About</a></Link></li>
							<li><Link href="/"><a className="link-light text-decoration-none">Blog</a></Link></li>
						</ul>
					</div>


					<div className="col-md-2">
						<h5>Terms of Service</h5>
						<ul className="list-unstyled">
							<li><Link href="/"><a className="link-light text-decoration-none">Privacy Policy</a></Link></li>
							<li><Link href="/"><a className="link-light text-decoration-none">Disclaimer</a></Link></li>
						</ul>
					</div>

					<div className="w-100 mt-4"></div>

					<div className="col text-center">
						© 2021 Empower Your Run LLC.
					</div>

				</div>{ /* end: row */ }
		
			</div>{ /* end: container*/ }
		</footer>

	</>);
}
