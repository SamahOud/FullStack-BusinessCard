import { MenuItem } from '@mui/material'
import { string, func, object } from 'prop-types'

import NavBarLink from './NavBarLink'
import { makeFirstLetterCapital } from '../../../core/utils/algoMethod'

const MenuLink = ({ text, navigateTo, onClick, styles }) => {
    return (
        <NavBarLink to={navigateTo}>
            <MenuItem onClick={onClick} sx={{ ...styles }}>
                { makeFirstLetterCapital(text) }
            </MenuItem>
        </NavBarLink>
    )
}

MenuLink.propTypes = {
    text: string.isRequired,
    navigateTo: string.isRequired,
    onClick: func.isRequired,
    styles: object,
}

MenuLink.defaultProps = {
    styles: {}
}

export default MenuLink
