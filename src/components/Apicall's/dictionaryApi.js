import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Assuming the data is fetched from an API or can be directly set here
    const fetchData = async () => {
      const jsonData = [
        {
          "word": "stone",
          "phonetic": "stone",
          "phonetics": [
            {
              "text": "/stone/",
              "audio": ""
            },
            {
              "text": "/stone/",
              "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/stone-uk.mp3",
              "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=77899690",
              "license": {
                "name": "BY-SA 4.0",
                "url": "https://creativecommons.org/licenses/by-sa/4.0"
              }
            },
            {
              "text": "/stone/",
              "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/stone-us.mp3",
              "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=1194273",
              "license": {
                "name": "BY-SA 3.0",
                "url": "https://creativecommons.org/licenses/by-sa/3.0"
              }
            }
          ]
        }
      ];
      setData(jsonData);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((wordData, index) => (
        <div key={index}>
          <h2>{wordData.word}</h2>
          {wordData.phonetics.map((phonetic, idx) => (
            phonetic.audio &&  (
              <div key={idx}>
                <p>{phonetic.text}</p>
                <audio controls>
                  <source src={phonetic.audio} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            )
          ))}
        </div>
      ))}
    </div>
  );
};

export default App;
