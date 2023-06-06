import { foodImageMap, foodOrder, food } from "../constants";
import "./ImagePicker.css";

export default ({ activeCategory, onImageClick }) => {
    let current = foodImageMap[activeCategory];

    return (
        <div className="d-flex flex-row justify-content-center align-items-center mt-5 mb-5">
            <button onClick={e => onImageClick(current.prev.key)} className="iconBtn me-3">
                <i className="fa-solid fa-angle-left"></i>
            </button>
            {[current.prev.image, current.image, current.next.image].map((img, idx) => <img key={img} src={`/images/${img}`} className={`img-fluid foodImage mx-3 ${idx === 1 ? 'active' : ''}`}></img>)}
            <button onClick={e => onImageClick(current.next.key)} className="iconBtn ms-2">
                <i className="fa-solid fa-angle-right"></i>
            </button>
        </div>
    )
}