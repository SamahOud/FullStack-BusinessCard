import { AppBarComponent } from "./AppBarComponent"
// import ButtonComponent from "./ButtonComponent"
import CardComponent from "./CardComponent"
// import LayoutComponent from "./LayoutComponent"
import MuiBottomNavigation from "./MuiBottomNavigation"
import TypographyComponent from "./TypographyComponent"

const MuiSandbox = () => {
    return (
        <>
            <AppBarComponent />
            <TypographyComponent />
            <CardComponent />
            {/* <ButtonComponent></ButtonComponent> */}
            {/* <LayoutComponent></LayoutComponent> */}
            <MuiBottomNavigation />
        </>
    )
}

export default MuiSandbox