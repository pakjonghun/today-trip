import React from "react";
import { Helmet } from "react-helmet-async";

interface IHelmetForTitle {
  title: string;
}

const HelmetForTitle: React.FC<IHelmetForTitle> = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default HelmetForTitle;
