import Button from '@mui/material/Button'

const OnClick = ({handleClick}) => {
    return (
        <Button onClick={(e) => handleClick(e)}>
            Click
        </Button>

    );
}
export default OnClick;