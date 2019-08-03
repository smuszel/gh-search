import React from 'react';
import { useSelector } from 'react-redux';
import { style } from '../style';

// save some space with simple helper
const userProperty = (user: UserDetailed, prop: keyof UserDetailed) => {
    return (
        <li>
            <label>{prop + ':'}</label>
            <span>{user[prop] || 'unknown'}</span>
        </li>
    );
};

export const Details = () => {
    const user = useSelector((state: State) => state.selectedUser);
    // TODO implement loader

    return (
        <div className={style.userDetails}>
            {user === null ? (
                <>
                    <img
                        src="https://cdn.worldvectorlogo.com/logos/github-octocat.svg"
                        alt="octocat"
                        className={style.octocat}
                    />
                    <span className={style.selectMessage}>
                        Select user to see the details
                    </span>
                </>
            ) : (
                <div className={style.userSummary}>
                    <img src={user.avatar_url} alt="user avatar" />
                    <h2 id="user-details-login">
                        <a
                            target="_blank"
                            rel="noreferrer noopener"
                            href={user.html_url}
                        >
                            {user.login}
                        </a>
                    </h2>
                    <hr />
                    <ul className={style.userProperties}>
                        {userProperty(user, 'name')}
                        {userProperty(user, 'email')}
                        {userProperty(user, 'company')}
                        {userProperty(user, 'location')}
                    </ul>
                </div>
            )}
        </div>
    );
};
