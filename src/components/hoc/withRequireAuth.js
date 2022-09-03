import { connect } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

function RequireAuth({ children, isAuth }) {
    const location = useLocation();
  
    return isAuth === true ? 
    ( children ) : ( <Navigate to="/login" replace state={{ path: location.pathname }} /> );
}

const mapToStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapToStateToProps,{})(RequireAuth);