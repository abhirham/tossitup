import "./CategoryTitle.css";

export default ({category}) => {
    return (
        <div className="categoryHeaderContainer mx-auto px-3">
            <span className="fw-bolder categoryHeader">{category}</span>
        </div>
    )
}