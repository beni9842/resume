import '../css/nav.css'


function NavLink(props) {
    return (            
        <a className="nav-link" href={ props.path }> { props.text }</a>
    );
}

function Nav() {

    return (
        <nav className="nav nav-tabs">
            <NavLink path="/" text="Resume" />
            <NavLink path="/projects" text="Projects" />
        </nav>
    );
}

export default Nav;