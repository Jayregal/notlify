import React, { useState } from "react";
import "./App.css";
import Start from "./Start";
import "./my-sass.scss";

function App() {
  const [noButtonClickCount, setNoButtonClickCount] = useState(0);
  const [showNoButton, setShowNoButton] = useState(true);
  const [buttonText, setButtonText] = useState("No");
  const [showStartPage, setShowStartPage] = useState(true);
  const [showMainApp, setShowMainApp] = useState(false);
  const [showYes, setShowYes] = useState(false);

  const handleNoButtonClick = () => {
    setNoButtonClickCount(noButtonClickCount + 1);

    const noButton = document.getElementById("noButton");
    if (noButton) {
      const currentPadding = parseInt(
        window.getComputedStyle(noButton).padding,
        10
      );
      const currentFontSize = parseInt(
        window.getComputedStyle(noButton).fontSize,
        10
      );

      noButton.style.padding = currentPadding - 1.5 + "px";
      noButton.style.fontSize = currentFontSize - 1 + "px";

      if (noButtonClickCount + 1 === 15) {
        // If clicked 9 times, hide the "No" button
        setShowNoButton(false);
      }

      setButtonText("NO");
    }
  };

  const handleBackButtonClick = () => {
    setNoButtonClickCount(0);

    // Show the "No" button again
    setShowNoButton(true);
    setButtonText("No");
    const noButton = document.getElementById("noButton");
    if (noButton) {
      noButton.style.padding = "10px";
      noButton.style.fontSize = "10px";
    }
  };

  const handleOpenClick = () => {
    setShowStartPage(false);
    setShowMainApp(true);
  };

  return (
    <div className="App pixelify-sans-1">
      <header className="App-header">
        {showStartPage && <Start onOpenClick={handleOpenClick} />}
        {showMainApp && (
          <>
            {showYes ? (
              <>
                <div class="frame">
                  <div class="heart"></div>
                </div>
                <div className="pixelify-sans-1">
                  <br />
                  Alright! You've unlocked your Valentine
                </div>
              </>
            ) : (
              <div>
                <h1>Will you be my Valentine?</h1>
                <div>{showNoButton && <span>(I dare you to say no)</span>}</div>
                <div>
                  <button
                    className="pixelify-sans-1"
                    onClick={() => setShowYes(true)}
                  >
                    Yes
                  </button>
                  {showNoButton && (
                    <button
                      id="noButton"
                      onClick={handleNoButtonClick}
                      className="pixelify-sans-1"
                    >
                      {buttonText}
                    </button>
                  )}
                </div>
                <div
                  className="back-icon pixelify-sans-1"
                  onClick={handleBackButtonClick}
                >
                  <i className="material-icons">arrow_back</i>
                </div>
              </div>
            )}
          </>
        )}
      </header>
    </div>
  );
}

export default App;
