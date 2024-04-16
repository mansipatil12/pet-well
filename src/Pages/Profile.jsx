
import React from 'react';
import 'D:/pet-well/src/Pages/CSS/Profile.css';

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile">
                <h2>Profile</h2>
                <div className="pet-photo">
                    <img src="pet-photo.jpg" alt="Pet" />
                </div>
            </div>
            <div className="form">
                <h2>Pet Information</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="petName">Pet's Name:</label>
                        <input type="text" id="petName" name="petName" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="petCategory">Pet's Category:</label>
                        <select id="petCategory" name="petCategory">
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                            <option value="bird">Bird</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="petOwner">Pet Owner:</label>
                        <input type="text" id="petOwner" name="petOwner" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="petInfo">Pet Basic Information:</label>
                        <textarea id="petInfo" name="petInfo"></textarea>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;
