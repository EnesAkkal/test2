import "../../styles/AccountSettings.css";



function ChangePassword()  {
  return (
    <>
    <div className="changepassword">
      <h1 className="mainhead1"> Password Information</h1>
      <div className="form">
        <div className="form-group">
          <label htmlFor="old-password">
            Old Password <span>*</span>
          </label>
          <input type="text" name="password" id="password" />
        </div>

        <div className="form-group">
          <label htmlFor="new-password">
            New Password <span>*</span>
          </label>
          <input type="text" name="password" id="password" />
        </div>

        <div className="form-group">
          <label htmlFor="confirm-password">
            Confirm New Password <span>*</span>
          </label>
          <input type="text" name="password" id="password" />
        </div>
      </div>

      <button className="mainbutton1">Update</button>
    </div>
  </>
  )
}

export default ChangePassword