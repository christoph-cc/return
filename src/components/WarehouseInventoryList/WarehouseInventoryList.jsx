import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import { api_url } from '../../api.js'
import { Link } from "react-router-dom";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import Modal from "../Modal/Modal.jsx";
import Table from '../Table/Table';
import Tag from '../Tag/Tag.jsx';

export default function WarehouseInventoryList(){
    const { id } = useParams();
    const [data, setData] = useState([])
    const tableColumn = [
        "Inventory Item", 
        "Category", 
        "Status", 
        "Quantity",
        "Actions"
    ]

  //   useEffect(() => {
	// 	async function fetchData() {
	// 		const result = await axios.get(
	// 			`${api_url}/warehouses/${id}/inventories`
	// 		);
	// 		setData(result.data);
	// 	}
	// 	fetchData();
	// }, []);

    
    return(
        <>
            <Table column={tableColumn} />
            <InventoryList data={data} setData={setData} column={tableColumn} />
        </>
    )
}


export function InventoryList({ data, setData, column }) {
    const [showModal, setShowModal] = useState(false);
	const [toDeleteData, setToDeleteData] = useState(null);

	const handleDeleteModal = (name) => {
		setToDeleteData(name);
		setShowModal(true);
	}
    const handleDeleteAction = (id) => {
		async function deleteData() {
			try {
				const result = await axios.delete(
					`${api_url}/inventories/${id}`
				);
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
			{data.map((inventory) => {
				return (
					<article
						key={inventory.id}
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
									to={`/inventory/${inventory.id}`}
									className="table__item--clickable"
								>
									<h3>{inventory.item_name}</h3>
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
								{inventory.category}
							</p>
						</div>
						<div
							className={`table__item table__item--${column.length}-col`}
						>
							<span className="table__header-name table__item-span">
								<h4>{column[2]}</h4>
							</span>
							{inventory.status === 'In Stock' &&
								<p className="p2">
									<Tag text={inventory.status} color='green' />
								</p>
							}
							{inventory.status === 'Out of Stock' &&
								<p className="p2">
									<Tag text={inventory.status} color='red' />
								</p>
							}
						</div>
						<div
							className={`table__item table__item--${column.length}-col`}
						>
							<span className="table__header-name table__item-span">
								<h4>{column[3]}</h4>
							</span>
							<h4>
								<p className="p2">{inventory.quantity}</p>
							</h4>
						</div>
						<div
							className={`table__item table__item--fullwidth table__item--reverse table__item--${column.length}-col`}
						>
							<div className="table__item-group">
								<button
									onClick={() => handleDeleteModal(inventory)}
									className="table__action-button"
								>
									<img
										src={deleteIcon}
										className="table__action-button--icons"
									/>
								</button>
								<Link
									to={`/inventory/edit/${inventory.id}`}
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
			/>
		</>
	);
}
