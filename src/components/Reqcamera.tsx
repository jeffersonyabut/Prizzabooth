import { useEffect, useRef, useState } from "react";
import { useCamera } from "@/ts/useContext";

export function Reqcamera() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [device, setDevice] = useState<MediaDeviceInfo[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { deviceId } = useCamera();

  useEffect(() => {
    const startCamera = async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const cameras = devices.filter(
          (device) => device.kind === "videoinput"
        );
        setDevice(cameras);

        if (cameras.length === 0) {
          setError("No cameras found");
          return;
        }

        // if (cameras.length < 0) {
        //   console.log("greater");
        //   const selectedDeviceId = cameras[0].deviceId;
        //   const mediaStream = await navigator.mediaDevices.getUserMedia({
        //     video: { deviceId: { exact: selectedDeviceId } },
        //     audio: false,
        //   });

        //   streamRef.current = mediaStream;

        //   if (videoRef.current) {
        //     videoRef.current.srcObject = mediaStream;
        //   }
        // }

        const selectedDeviceId = deviceId || cameras[0].deviceId;

        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: { deviceId: { exact: selectedDeviceId } },
          audio: false,
        });

        streamRef.current = mediaStream;

        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }

        // streamRef.current = mediaStream;
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
        console.log(err);
      }
    };

    startCamera();

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, [deviceId]); //

  return { videoRef, error, device };
}
