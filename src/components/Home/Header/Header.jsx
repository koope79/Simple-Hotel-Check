import { connect } from 'react-redux';
import { logOut } from "../../../redux/Auth-reducer";
import s from "./Header.module.css";

const Header = ({ logOut }) => {
  return (
    <div className={s.header}>
      <div className={s.header__title}>
        <span>Simple Hotel Check</span>
      </div>
      <div className={s.header__button} onClick={logOut}>
        <span>Выйти</span>
        <div className={s.header__button_icon}>
          <img src={"img/exit.png"} alt={"..."} />
        </div>
      </div>
    </div>
  );
};

const mapToStateToProps = (state) => ({ isAuth: state.auth.isAuth });

export default connect(mapToStateToProps, { logOut })(Header);
