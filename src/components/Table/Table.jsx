import "./Table.scss";
import sortIcon from "../../assets/icons/sort-24px.svg";

export default function Table({ column, children }) {
	
	return (
		<section className="tablelist">
			<article className="table">
				<article className="table__header">
					{column.map((item, index) => {
						if(item === 'Actions'){
							return (
								<div key={index} className={`table__item table__item--reverse table__item--${column.length}-col`}>
									<h4 className="table__header-name">{item}</h4>
								</div>
							)

						}else{
							return (
								<div key={index} className={`table__item table__item--${column.length}-col`}>
									<h4 className="table__header-name table__item--clickable">
										{item}
										<img src={sortIcon} className="icon-small" />
									</h4>
								</div>
							)
						}
					})}
				</article>
				<article className="table__body">
					{children}
				</article>
			</article>
		</section>
	);
}
