import Link from 'next/link';
import Image from 'next/image';

export default function ArticleCard(props) {

	const { category, catlink, title, slug, auimg, author, aulink, minread } = props;
	return (<>
		<div className="col-12 col-lg-6 article my-5">
			<h6><Link href={ "/category/" + catlink }><a className="text-decoration-none link-secondary">{ category }</a></Link></h6>
			<h2 className="fw-bold">
				<Link href={ "/" + slug}><a className="text-decoration-none">{ title }</a></Link>
			</h2>
			<div style={{ height: '15px', clear: 'both' }}></div>

			<div className="d-flex align-items-center justify-content-center">
				<span><Image src={ "/" + auimg } width="35" height="35" className="rounded-circle" /></span>
				<span className="ms-2" ><Link href={ "/" + aulink }><a className="text-decoration-none link-dark">{ author }</a></Link></span>
				<span className="ms-4" >♦ { minread } min read</span>
			</div> { /* article infor: end */ }
		</div> { /* article: end */ }
	</>)
}
