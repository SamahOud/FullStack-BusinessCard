import { Link } from "react-router-dom"
import { string, node } from 'prop-types'

const NavBarLink = ({to, color, children}) => {
    return ( 
        <Link to={to} style={{color, textDecorationLine: 'none' }}>
            {children}
        </Link>
    )
}
 
NavBarLink.propTypes = {
    to: string.isRequired,
    color: string.isRequired,
    children: node.isRequired
}

NavBarLink.defaultProps = { 
    color: 'black'
}

export default NavBarLink
