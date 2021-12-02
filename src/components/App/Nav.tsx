import React from "react";

interface Props {
    users: string[];
    events: any;
}

function Nav(props: Props) {

    const onLogOut = () => {
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('opportunityId');
        props.events && props.events.leave();
        window.location.reload();
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">HOME</a>
            <div id="avatar-list" className="avatar-list float-end">
                {/*<button type="button" className="btn btn-secondary avatar" data-bs-toggle="tooltip" data-bs-placement="top"*/}

                {props.users && props.users.map(user => (
                    <button
                        key={user}
                        className="avatar"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title={user}>
                        {/** @ts-ignore **/}
                        {user.at(0) + user.at(-1)}
                    </button>
                ))}

            </div>
            <div className="collapse navbar-collapse float-end" id="navbarSupportedContent">
                <button className="btn btn-outline-success my-2 my-sm-0" onClick={onLogOut}>Log Out</button>
            </div>
        </nav>
    );
}

export default Nav;
