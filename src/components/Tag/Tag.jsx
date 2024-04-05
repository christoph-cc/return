import './Tag.scss'
export default function Tag({text, color}){
    return(
        <span className={`tag-pill tag-pill--${color}`}>
            {text}
        </span>
    )
}