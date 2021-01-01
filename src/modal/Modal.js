import React, { useEffect, useState, useRef, useCallback } from 'react';
import '../App.css';

// This is just a generic Modal that is will display a specific set of text
// based on its properties
function Modal(props) {

    const [isVisible, setVisible] = useState(props.show);
    let prevPropsRef = useRef(props.show);

    // Returns & stores the actual function itself in a variable
    // We only create a new function when we need to but we don't need to here
    // as the referential equality never changes
    const ChangeVisibility = useCallback(() => {
        isVisible ? setVisible(false) : setVisible(true);
    }, [isVisible]);

    useEffect(() => {

        // When the user clicks the image on the parent component, it will change
        // the props, thus this will respond to that change
        if (prevPropsRef.current !== undefined && prevPropsRef.current !== props.show) {
            prevPropsRef.current = !prevPropsRef.current;
            ChangeVisibility();
        }
    }, [props.show, ChangeVisibility]);

    // If the modal is meant to be visible then display it & its contents
    if (isVisible) {
        return (
            <div>
                {props.info &&
                    <div className="moreinfo">
                    <span className="material-icons md-48" style={{fontSize: "40px", color:"#b82885"}} onClick={() => ChangeVisibility()}>
                    info
                    </span>
                </div>}

                <div className="modal" tabIndex="-1" role="dialog">
                  <div className="modal-dialog modal-lg" role="document">
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
            </div>
        );

    // If the modal is meant can be shown by clicking an information icon then
    // display the icon
    } else if (props.info) {
        return (
            <div className="moreinfo">
                <span className="material-icons md-48" style={{fontSize: "40px", color:"#b82885"}} onClick={() => ChangeVisibility()}>
                info
                </span>
            </div>
        );

    // Otherwise display nothing as the modal should not be visible
    } else {
        return null;
    }

};

export default Modal;
