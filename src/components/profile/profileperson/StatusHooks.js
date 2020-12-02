import React, {useState} from 'react';

export const Status = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    const toggleEditMode = () => {
        setEditMode(!editMode)
        props.updateStatus(status)
    }
    const handleChange = (e) => {
        setStatus(e.target.value)
    }
    return (
        <div>
            {!editMode && (
                <div>
                    <h5 onClick={toggleEditMode}>{props.status}</h5>
                </div>
            )}
            {editMode && (
                <div>
                    <input
                        type="text"
                        autoFocus={true}
                        value={status}
                        onChange={handleChange}
                        onBlur={toggleEditMode}
                    />
                </div>
            )}
        </div>
    );
};

export default Status;
