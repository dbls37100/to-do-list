import React from 'react';
import './Item.css';
import './45magnum.mp3';

export default function Item({id, content, deleteItem}) {



    
    return(
        <div className="position">
        <div className="Item">
            <div className="fake--checkbox" id="id1"></div>
            <div className="decoration">
            <p className="Item_content">{content}</p>
            </div>
            <div className="fix-button">
            <button className="Item_button" id={id} onClick={event => {
                deleteItem(event)

                }
                }><i className="fas fa-trash-alt"></i></button>
            
            </div>
        </div>
        </div>
    )
}