import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Reqcamera } from "../components/Reqcamera";
import { useCamera } from "../ts/useContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Second = {
  value: number;
  name: string;
};

const second: Second[] = [
  { name: "3s", value: 3 },
  { name: "5s", value: 5 },
  { name: "10s", value: 10 },
];

export default function Booth() {
  const { videoRef, error, device } = Reqcamera();
  const [label, setLabel] = useState<string>("");
  const { setDeviceId } = useCamera();

  return (
    <>
      <div className="w-lvw h-max border-2 border-gray-500 grid gap-4 grid-cols-2 p-4">
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="w-full h-full border-2 col-span-2 md:col-span-1">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-max h-max object-cover"
          />
        </div>
        {/* options */}
        <div className="w-max h-full border">
          <Button variant={"outline"}>Capture</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Delay</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {second.map((sec) => (
                <DropdownMenuItem onClick={() => console.log(sec.value)}>
                  {sec.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {/* options */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">{label ? label : "Camera"}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {device.map((device) => (
                <DropdownMenuItem
                  onClick={() => {
                    setLabel(device.label);
                    setDeviceId(device.deviceId);
                  }}
                >
                  {device.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
}
