import Actinide from "./Elements/Actinide"
import Elements from "./Elements/Elements"
import Lanthanide from "./Elements/Lanthanide"

let Table = (props) => {
    return (<>
        <Elements elements={props.elements} />
        <Lanthanide elements={props.elements} />
        <Actinide elements={props.elements} />
    </>
    )
}

export default Table;