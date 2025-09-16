import { useContext } from "react";
import CameraContext from "../components/Changecam";

export function useCamera() {
  const ctx = useContext(CameraContext);
  if (!ctx) throw new Error("useCamera must be used inside CameraProvider");
  return ctx;
}
