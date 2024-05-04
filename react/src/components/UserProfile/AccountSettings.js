import React from "react";
import "../../styles/AccountSettings.css";

const AccountSettings = () => {
  return (
    <>
      <div className="accountsettings">
        <h1 className="mainhead1">Personal Information</h1>
        <div className="form">
          <div className="form-group">
            <label htmlFor="name">
              Your Name <span>*</span>
            </label>
            <input type="text" name="name" id="name" />
          </div>

          <div className="form-group">
            <label htmlFor="surname">
              Your Surname <span>*</span>
            </label>
            <input type="text" name="surname" id="surname" />
          </div>

          <div className="form-group">
            <label htmlFor="Phone">
              Your Phone Number <span>*</span>
            </label>
            <input type="number" name="number" id="number" />
          </div>

          <div className="form-group">
            <label htmlFor="Location">
              Location <span>*</span>
            </label>
            <input type="Location" name="Location" id="Location" />
          </div>
        </div>

        <button className="mainbutton1">Save Changes</button>
      </div>
    </>
  );
};

export default AccountSettings;
