import { Link } from 'react-router-dom';
import classes from './NotFount.module.css';

const PageNotFound = () => {

    return(
        <div className = {classes.main}>
            <div className = {classes.fof}>
                    <h1>Error 404</h1>
                    <button className = {classes.homebtn}><Link to = '/home'>Back to Home</Link></button>
            </div>
        </div>
    )
};

export default PageNotFound;