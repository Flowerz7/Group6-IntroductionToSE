import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ReviewCard(props) {
  const { info } = props;
  const menteeID = info.menteeID;
  const [profile, setProfile] = useState({});

  useEffect(async () => {
    const givenProfile = await axios.get(
      `http://localhost:3000/profiles/${menteeID}`
    );

    if (givenProfile.data !== null) {
      setProfile(givenProfile.data);
    }
  }, []);

  return (
    <div className="review-card">
      <div className="overview-container">
        <div className="info-container">
          <img src={profile.imageUrl} alt="" />
          <ul className="info">
            <li>
              <strong>{profile.name}</strong>
            </li>
            <li>
              {[...Array(5)].map((star, index) => {
                const numOfStar = index + 1;

                return (
                  <label key={index}>
                    <input type="radio" value={numOfStar} />
                    <i
                      style={{
                        color: numOfStar <= info.rating ? "#F2CB05" : "#BFBFBF",
                      }}
                      className="fas fa-star"
                    ></i>
                  </label>
                );
              })}
            </li>
          </ul>
        </div>
        <div className="comment">
          <strong>Review: </strong>
          {info.comment}
        </div>
      </div>
    </div>
  );
}
