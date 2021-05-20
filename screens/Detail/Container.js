import React, { useState } from "react";
import Presenter from "./Presenter";

const Container = () => {
  const [loading, setLoading] = useState(true);

  return <Presenter loading={loading} />;
};

export default Container;
