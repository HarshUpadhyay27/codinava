import React, { useState } from "react";

const Headers = (props) => {
  const [value, setValue] = useState("");

  const inputEvent = (e) => {
    setValue(e.target.value);
    props.searchGif(value);
  };

  return (
    <nav>
      <h1>GIPHY</h1>
      <div className="nav-search">
        <input
          placeholder="Search Your GIF"
          type="text"
          value={value}
          onChange={inputEvent}
        />
        <button>
          <i className="fas fa-search"></i>
        </button>
      </div>
    </nav>
  );
};

export default Headers;
