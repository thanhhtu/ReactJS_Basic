import React from "react";
import "./YtbStyle.css"

/*
inline style: 2 cặp ngoặc nhọn: 
- Ngoặc nhọn 1: curly braces nhúng cá biểu thức JS
- Ngoặc nhọn 2: tạo object 
*/
const  YtbItem = (props) => {
    return(
        // <div className="ytb-item">
        <div className={`ytb-item ${props.ytbDemo}`}>
            <div className="ytb-image"> 
                <img 
                    src={props.ytbImage} 
                    alt="youtube image" 
                    // style={{
                    //     objectFit: "cover",
                    //     height: "250px",
                    //     width: "250px"
                    // }}
                />
            </div>

            <div className="ytb-footer">
                <img className="ytb-avatar" src={props.ytbAvatar} alt="youtube avatar"/>
                <div className="ytb-info">
                    <div className="ytb-title">{props.ytbTitle}</div>
                    <div className="ytb-author">{props.ytbAuthor || "author's name"}</div>
                </div>
            </div>
        </div>
    )
}

export default YtbItem;