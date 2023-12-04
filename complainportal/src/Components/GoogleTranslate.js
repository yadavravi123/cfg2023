import React, { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    if (window.document.scrollingElement.hasAttribute("style")) {
      window.document.scrollingElement.setAttribute("style", "");
    }
  });

  return (
    <div id="google_translate_element"></div>
  );
};

export default GoogleTranslate;