import { useState, useEffect } from "react";

function useMediaQuery(mqString) {
  const [matches, setMatches] = useState(null);
  const [mqList, setMqList] = useState(null);

  useEffect(() => {
    setMqList(window.matchMedia(mqString));
  }, []);

  useEffect(() => {
    if (!mqList) return;
    setMatches(mqList.matches);
    mqList.addEventListener("change", e => {setMatches(e.matches); console.log("run")});
  }, [mqList]);

  return matches;
}

export default useMediaQuery;
