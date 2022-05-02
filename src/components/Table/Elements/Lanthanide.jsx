import css from "./../Table.module.css"
import { Element } from "./Element";

let Lanthanide = (props) => {
    return <div className={css.table}>
        {props.elements.map(el => {
            if (el.category === "lanthanide") {
                return <Element el = {el} />;
            }
        })}
    </div>
};

export default Lanthanide;