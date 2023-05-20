import React from "react";
import "./Data.scss";
const Data = () => {
  return (
    <div className="Data">
      <div className="Data__background">
        <img src="/Images/redbackground.png" alt="red" />
      </div>
      <div className="Data__cardbox">
        <div className="Data__card1">
          <img src="/Images/red nonveg.png" alt="man" />
          <h2>What we really do?</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Recusandae, architecto placeat. Consequuntur fugiat sapiente rerum
            facere voluptatum neque suscipit eos.
          </p>
        </div>
        <div className="Data__card1">
        <img src="/Images/BoyEat.png" alt="man" />
          <h2>Our Vission</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Recusandae, architecto placeat. Consequuntur fugiat sapiente rerum
            facere voluptatum neque suscipit eos.
          </p>
        </div>
        <div className="Data__card1">
        <img src="/Images/meeting.png" alt="man" />
          <h2>History and Begining</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Recusandae, architecto placeat. Consequuntur fugiat sapiente rerum
            facere voluptatum neque suscipit eos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Data;
