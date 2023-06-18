import "./CategoryTitle.css";

const CategoryTitle = ({category}) => {
    return (
        <div className="categoryHeaderContainer mx-auto px-3 text-center">
            <span className="fw-bolder categoryHeader">{category}</span>
        </div>
    )
}

export default CategoryTitle;