import { useEffect } from "react";
import { foodImageMap, foodImageList } from "../constants";
import "./ImagePicker.css";

export default ({ activeCategory, onImageClick }) => {
    let current = foodImageMap[activeCategory];

    useEffect(() => {
        document.querySelector('.'+activeCategory).scrollIntoView({inline: "center", behavior: "smooth", block: 'nearest'});
        document.querySelector('.foodImage').classList.remove("active");
        document.querySelector('.'+activeCategory).classList.add("active");
    }, [activeCategory])

    return (
        <div className="d-flex flex-row justify-content-center align-items-center mt-5 mb-5 imagePicker">
            <button onClick={e => onImageClick(current.prev.key)} className="iconBtn me-3 ">
                <i className="fa-solid fa-angle-left"></i>
            </button>
            <div className="d-flex flex-row foodImageContainer">
                {foodImageList.map(({key, image}, idx) => <img key={key+idx} src={`/images/${image}`} className={`img-fluid foodImage mx-3 ${key.indexOf("_cloned") > -1 ? key : key+" centered"}`}></img>)}
            </div>
            <button onClick={e => onImageClick(current.next.key)} className="iconBtn ms-2  ">
                <i className="fa-solid fa-angle-right"></i>
            </button>
        </div>
    )
}