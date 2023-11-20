import { useState } from "react";

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

export default function App() {
  const [showStory, setShowStory] = useState("");
  const [customName, setCustomName] = useState("");
  const [ukus, setUkus] = useState("us"); // Assuming a default value for ukus

  const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
  const insertY = ["the soup kitchen", "Disneyland", "the White House"];
  const insertZ = [
    "spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away",
  ];

  function result() {
    let generatedStory =
      "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    generatedStory = generatedStory
      .replace(/:insertx:/g, xItem)
      .replace(/:inserty:/g, yItem)
      .replace(/:insertz:/g, zItem);

    if (customName !== "") {
      generatedStory = generatedStory.replace(/Bob/g, customName);
    }

    if (ukus === "uk") {
      const weight = Math.round(300 / 14) + " stone"; // Convert pounds to stone
      const temperature = Math.round((94 - 32) * (5 / 9)) + " centigrade"; // Convert Fahrenheit to Celsius
      generatedStory = generatedStory
        .replace("300 pounds", weight)
        .replace("94 fahrenheit", temperature);
    }

    setShowStory(generatedStory);
  }

  return (
    <>
      <div>
        <label htmlFor="customname">Enter custom name:</label>
        <input
          type="text"
          value={customName}
          onChange={(e) => setCustomName(e.target.value)}
          placeholder=""
        />
      </div>
      <div>
        <label htmlFor="us">US</label>
        <input
          type="radio"
          value="us"
          checked={ukus === "us"}
          onChange={() => setUkus("us")}
        />
        <label htmlFor="uk">UK</label>
        <input
          type="radio"
          value="uk"
          checked={ukus === "uk"}
          onChange={() => setUkus("uk")}
        />
      </div>
      <div>
        <button className="mybutton" onClick={result}>
          Generate random story
        </button>
      </div>
      {showStory && <p>{showStory}</p>}
    </>
  );
}
