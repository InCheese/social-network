import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileStatus = (props) => {
  //локальный стейт компоненты
  const [localState, setLocalState] = React.useState({
    editMode: false,
    status: props.status,
  });
  const activateEditMode = () => {
    setLocalState({ ...localState, editMode: true });
  };

  const deactivateEditMode = () => {
    setLocalState({ ...localState, editMode: false });
    props.updateUserStatus(localState.status);
  };

  const onStatusChange = (event) => {
    setLocalState({ ...localState, status: event.currentTarget.value });
    console.log(event.currentTarget.value);
    props.changeUserStatus(localState.status);
  };

  return (
    <div className={styles.status}>
      {!localState.editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>{props.status}</span>
        </div>
      )}
      {localState.editMode && (
        <div>
          <input
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={localState.status}
            onChange={onStatusChange}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
