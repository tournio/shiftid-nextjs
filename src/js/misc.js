import {useEffect, useState} from "react";

export const useClientReady = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);
  return ready;
}

export const REGISTER_URL = 'https://www.tourn.io/tournaments/shiftid-2025';
