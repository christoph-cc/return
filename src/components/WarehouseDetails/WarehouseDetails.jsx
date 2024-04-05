import '../WarehouseDetails/WarehouseDetails.scss';
import backIcon from '../../assets/icons/arrow_back-24px.svg';
import editIcon from '../../assets/icons/edit-24px-white.svg';
import Button from '../Button/Button.jsx';
import { NavLink } from 'react-router-dom';

export function WarehouseDetails() {
  return (
    <article className="wDetails">
      <section className="wDetails__header">
        <div className="wDetails__header--left">
          <NavLink to="/"><img src={backIcon} alt="back arrow" className="wDetails__back-icon" /></NavLink>
          <h1 className="wDetails__title">Add Title</h1>
        </div>
        <NavLink to="/warehouses/edit/:id"><figure className="wDetails__edit"><Button text="Edit" /></figure></NavLink>
        <NavLink to="/warehouses/edit/:id"><div className="wDetails__button--icon">
          <img src={editIcon} alt="edit" className="wDetails__edit-icon" />
          <button className="wDetails__edit--hidden"></button>
        </div></NavLink>
      </section>
      <section className="wDetails__body">
        <div className="wDetails__first">
          <h3 className="wDetails__label">WAREHOUSE ADDRESS:</h3>
          <div className="wDetails__address">
            <p className="wDetails__text">Add Street Address Here,</p>
            <p className="wDetails__text">Add State Address Here</p>
          </div>
        </div>
        <section className="wDetails__body--right">
          <div className="wDetails__second">
            <h3 className="wDetails__label">CONTACT NAME:</h3>
            <p className="wDetails__text">Add Name Here</p>
            <p className="wDetails__text">Add Their Title Here</p>
          </div>
          <div className="wDetails__third">
            <h3 className="wDetails__label">CONTACT INFORMATION:</h3>
            <p className="wDetails__text">Add Phone Num Here</p>
            <p className="wDetails__text">Add Email Here</p>
          </div>
        </section>
      </section>
    </article>
  );
}
