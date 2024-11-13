import React from 'react';

import { TypeAnimation } from 'react-type-animation';

function App() {
  return (
    <div className="w-full h-full m-0">
      <header className="bg-dolomites bg-cover bg-[55%] h-screen">
        <div className="text-md md:text-2xl font-permanent-marker text-sky-950 fixed top-[15%] left-[8%] md:left-[20%]">
          <TypeAnimation
            sequence={[
              "Hi, I'm Liza.",
              1000,
              "Hi, I'm an artist.",
              1000,
              "Hi, I'm a software engineer.",
              1000,
              "Hi, I'm a scientist.",
              1000,
              "Hi, I'm an adventurist.",
              1000,
              "Hi, I'm Liza.",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            cursor={false}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
