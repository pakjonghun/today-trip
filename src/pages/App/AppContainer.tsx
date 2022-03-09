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
    } else {
      if ("geolocation" in navigator && (!latitude || !longitude)) {
        navigator.geolocation.getCurrentPosition(success, fail);
      } else {
        setLongitude(127);
        setLatitude(37);
        setIsLoading(false);
      }
    }

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
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      setIsLoading(false);
      dispatch(actions.location({ longitude, latitude }));
    } else {
      setTimeout(() => {
        setLongitude(127);
        setLatitude(37);
        setIsLoading(false);
      }, 3000);
    }
  }, [longitude, latitude, dispatch]);

  return <AppPresenter isLoading={isLoading} />;
};

export default AppContainer;
