import { memo } from 'react';
import Button from '@mui/material/Button'
import { func, node } from 'prop-types';

const ButtonComp = ({ handleClick,name,value, children }) => {
    console.log(`rendering button for ${name}, version: ${value}`);

    return (
        <Button variant="outlined" color="primary" onClick={handleClick}>
            {children}
        </Button>
    )
};

ButtonComp.propTypes = {
    handleClick: func.isRequired,
    children: node.isRequired
}

export default memo(ButtonComp);