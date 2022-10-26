import React, { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";

import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/PublicRoutes/routes";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {isLoading ? (
        <div className="min-h-screen flex justify-center items-center">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        </div>
      ) : (
        <RouterProvider router={routes} />
      )}
    </div>
  );
};

export default App;
