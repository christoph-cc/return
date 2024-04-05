import { useState } from 'react'
import axios from "axios";
import { api_url } from '../../api.js'
import { Link } from "react-router-dom";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import Modal from "../Modal/Modal";

export default function WarehouseItems({ data, setData, column }) {
    const [showModal, setShowModal] = useState(false);
	const [toDeleteData, setToDeleteData] = useState(null);

	const handleDeleteModal = (name) => {
		setToDeleteData(name);
		setShowModal(true);
	}
    const handleDeleteAction = (id) => {
		async function deleteData() {
			try {
				// const result = await axios.delete(
				// 	`${api_url}/warehouses/${id}`
				// );
				const newData = data.filter((item) => {
					return item.id !== id;
				})
				setData(newData);
				setShowModal(false);
			} catch (error) {
				console.error(error)
			}
		}
		deleteData();
	}
	return (
		<>
			{data.map((warehouse) => {
				return (
					<article
						key={warehouse.id}
						className="table__row table__row--clickable"
					>
						<div
							className={`table__item table__item--${column.length}-col`}
						>
							<span className="table__header-name table__item-span">
								<h4>{column[0]}</h4>
							</span>
							<>
								<Link
									to={`/warehouses/${warehouse.id}`}
									className="table__item--clickable"
								>
									<h3>{warehouse.warehouse_name}</h3>
									<img src={chevronIcon} className="icon" />
								</Link>
							</>
						</div>
						<div
							className={`table__item table__item--${column.length}-col`}
						>
							<span className="table__header-name table__item-span">
								<h4>{column[1]}</h4>
							</span>
							<p className="p2">
								{warehouse.address}, {warehouse.city},{" "}
								{warehouse.country}
							</p>
						</div>
						<div
							className={`table__item table__item--${column.length}-col`}
						>
							<span className="table__header-name table__item-span">
								<h4>{column[2]}</h4>
							</span>
							<p className="p2">{warehouse.contact_name}</p>
						</div>
						<div
							className={`table__item table__item--${column.length}-col`}
						>
							<span className="table__header-name table__item-span">
								<h4>{column[3]}</h4>
							</span>
							<h4>
								<p className="p2">{warehouse.contact_phone}</p>
								<p className="p2">{warehouse.contact_email}</p>
							</h4>
						</div>
						<div
							className={`table__item table__item--fullwidth table__item--reverse table__item--${column.length}-col`}
						>
							<div className="table__item-group">
								<button
									onClick={() => handleDeleteModal(warehouse)}
									className="table__action-button"
								>
									<img
										src={deleteIcon}
										className="table__action-button--icons"
									/>
								</button>
								<Link
									to={`/warehouses/edit/${warehouse.id}`}
									className="table__action-button"
								>
									<img
										src={editIcon}
										className="table__action-button--icons"
									/>
								</Link>
							</div>
						</div>
					</article>
				);
			})}
            <Modal 
				isOpen={showModal} 
				setShowModal={setShowModal} 
				data={toDeleteData} 
				handleDelete={handleDeleteAction}
				type={'warehouse'}
			/>
		</>
	);
}
