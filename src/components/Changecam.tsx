// DeviceContext.tsx
import {
  createContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

interface CameraContextType {
  deviceId: string;
  setDeviceId: Dispatch<SetStateAction<string>>;
}

const CameraContext = createContext<CameraContextType | undefined>(undefined);

export function ChangeProvider({ children }: { children: ReactNode }) {
  const [deviceId, setDeviceId] = useState<string>("");

  return (
    <CameraContext.Provider value={{ deviceId, setDeviceId }}>
      {children}
    </CameraContext.Provider>
  );
}

export default CameraContext;
