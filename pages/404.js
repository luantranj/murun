import Link from 'next/link';
import BestArticles from '../components/BestArticles';

export default function NotFound() {

	return (
		<div className="not-found container-md fs-5 mt-5 pt-4">
			<div className="text-center">
				<h1 className="text-primary display-2 fw-bold">404</h1>
				<p>The page you are looking for doesn't exist.</p>
				<p>See the <Link href="/blog"><a className="text-decoration-none">blog</a></Link> for an overview of all articles.</p>
				<p>Or try one of these articles instead.</p>
			</div> { /* 404 Notification: end */ }

			<BestArticles />
		</div>
)
}
