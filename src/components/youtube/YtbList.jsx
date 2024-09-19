import React from "react";
import YtbData from "../../data"
import YtbItem from "./YtbItem"

const YtbList = (props) => {
    return(
        <div className="ytb-list">
            {props.children}
            {
                YtbData.map((item, index) => {
                    const newClass = index === 1 ? "hello" : ""
                    return(
                        <YtbItem key={item.id}
                            ytbImage={item.image || item.avatar}
                            ytbAvatar={item.avatar}
                            ytbTitle={item.title}
                            ytbAuthor={item.author}
                            // ytbDemo={index === 1 ? "hello" : ""}
                            ytbDemo = {newClass}
                        ></YtbItem>
                    )
                })
            }
        </div>
    )    
}

export default YtbList;