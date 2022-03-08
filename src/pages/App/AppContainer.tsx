import React, { useEffect, useState } from "react";
import AppPresenter from "./AppPresenter";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { actions } from "../../store/reducers/option.reducer";
import "../../styles/styles.css";

const AppContainer = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);

  useEffect(() => {
    const location = window.localStorage.getItem("location");
    if (location) {
      const { latitude, longitude } = JSON.parse(location);
      setLatitude(latitude);
      setLongitude(longitude);
    }
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      setIsLoading(false);
      dispatch(actions.location({ longitude, latitude }));
    }
  }, [longitude, latitude, dispatch]);

  function success(position: GeolocationPosition) {
    const { latitude, longitude } = position.coords;
    setLongitude(longitude);
    setLatitude(latitude);
    window.localStorage.setItem(
      "location",
      JSON.stringify({ latitude, longitude })
    );
  }

  function fail(error: unknown) {
    if (error instanceof Error) {
      alert(error.message);
    }
  }

  if ("geolocation" in navigator && !latitude) {
    navigator.geolocation.getCurrentPosition(success, fail);
  }

  return <AppPresenter isLoading={isLoading} />;
};

export default AppContainer;
