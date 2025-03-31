import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";

export const FeatureFlagsContext = createContext(null);

const FeatureFlagGlobalState = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});

  const fetchFeatureFlags = async () => {
    setLoading(true);
    try {
      const response = await featureFlagsDataServiceCall();
      setEnabledFlags(response);
    } catch (error) {
      console.error("Error fetching feature flags:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return (
    <FeatureFlagsContext.Provider value={{ loading, enabledFlags }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
};

export default FeatureFlagGlobalState;
