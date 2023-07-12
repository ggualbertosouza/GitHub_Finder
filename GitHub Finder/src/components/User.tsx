import { Link } from "react-router-dom";
import { UserProps } from "../types/user";
import classes from './User.module.css'

const User = ({
    avatar_url,
    login,
    location,
    followers,
    following
}: UserProps) => {
    return (
        <div className={classes.user}>
            <img src={avatar_url} alt={login} />
            <h2>{login}</h2>
            {location && (
                <p>
                <span>{location}</span>
            </p>
            )}
            <div className={classes.stats}>
                <div>
                    <p>Followers:</p>
                    <p className={classes.number}>{followers}</p>
                </div>
                
                <div>
                    <p>Following:</p>
                    <p className={classes.number}>{following}</p>
                </div>
            </div>
            <Link to={`/respos/${login}`}> Ver Melhores Projetos</Link>
        </div>
    )
}

export default User;