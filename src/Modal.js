import React, { useEffect, useState } from 'react';
import './App.css';

// This is just a generic Modal that is will display a specific set of text
// based on its properties
function Modal(props) {

    const [isVisible, setVisible] = useState(true);

    function ChangeVisibility() {
        isVisible ? setVisible(false) : setVisible(true);
    }

    if (isVisible) {
        return (
            <div className="modal" tabIndex="-1" role="dialog">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" style={{color:"black"}}>
                        {props.title}
                        </h5>

                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => ChangeVisibility()}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body" style={{color:"black"}}>
                        {props.text}
                    </div>

                </div>
              </div>
            </div>
        );
    }

};

export default Modal;
