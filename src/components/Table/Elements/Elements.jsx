import css from "./../Table.module.css"
import { Element } from "./Element";

let Elements = (props) => {
    return <div className={css.table}>
        {props.elements.map(el => {
            if (el.category !== "lanthanide" && el.category !== "actinide") {
                return <Element el = {el} />;
            }
        })}
    </div>
};

export default Elements;