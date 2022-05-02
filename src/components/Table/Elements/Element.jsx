import css from "./../Table.module.css"

export let Element = (props) => {
    return <div className={css.element} key={props.el.id}>
                    <div className={css.number}>{props.el.number}</div>
                    <div className={css.symbol}>{props.el.symbol}</div>
                </div>
}