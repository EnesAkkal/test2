import React from "react";
import "../../styles/AccountSettings.css";

function ChangeMail() {
  return (
    <>
      <div className="changemail">
        <h1 className="mainhead1"> Email Information</h1>
        <div className="form">
          <div className="form-group">
            <label htmlFor="old-Email">
              Old Email <span>*</span>
            </label>
            <input type="text" name="mail" id="mail" />
          </div>

          <div className="form-group">
            <label htmlFor="new-Email">
              New Email <span>*</span>
            </label>
            <input type="text" name="mail" id="mail" />
          </div>

          <div className="form-group">
            <label htmlFor="confirm-Email">
              Confirm New Email <span>*</span>
            </label>
            <input type="text" name="mail" id="mail" />
          </div>
        </div>

        <button className="mainbutton1">Update</button>
      </div>
    </>
  );
}

export default ChangeMail;
