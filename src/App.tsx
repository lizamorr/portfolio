import React from 'react';

import { TypeAnimation } from 'react-type-animation';

function App() {
  // const [showArt, setShowArt] = useState(false);
  // const [showGitHub, setShowGitHub] = useState(false);
  // const [showScientist, setShowScientist] = useState(false);

  // setTimeout(() => {
  //   setShowArt(true);
  // }, 3000);

  // setTimeout(() => {
  //   setShowGitHub(true);
  // }, 5600);

  // setTimeout(() => {
  //   setShowScientist(true);
  // }, 8000);

  return (
    <div className="w-full h-full m-0">
      <header className="bg-dolomites bg-cover bg-[55%] h-screen">
        <div className="text-md md:text-2xl font-permanent-marker text-sky-950 fixed top-[8%] left-[6%] md:left-[18%]">
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
        {/* {showArt && (
          <motion.div
            className="flex h-8 w-8 bg-yellow-700 border-[5px] border-white shadow-2xl rounded-full absolute top-[31%] left-[26%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        )}
        {showGitHub && (
          <motion.div
            className="flex h-8 w-8 bg-purple-900 border-[5px] border-white shadow-2xl rounded-full absolute top-[32%] left-[47%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        )}
        {showScientist && (
          <motion.div
            className="flex h-8 w-8 bg-green-900 border-[5px] border-white shadow-2xl rounded-full absolute top-[36%] left-[67%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        )} */}
      </header>
    </div>
  );
}

export default App;
