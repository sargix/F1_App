import React, { createContext, useState } from "react";

export const LoadingContext = createContext();

const LoadingProvider = ({ children }, props) => {
  const [isLoaded, setIsLoaded] = useState(true);

  return (
    <LoadingContext.Provider value={{ isLoaded, setIsLoaded }} {...props}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
