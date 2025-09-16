import { Reqcamera } from "../components/Reqcamera";

export default function Booth() {
  const { videoRef, error } = Reqcamera();

  return (
    <>
      <div className="w-lvw h-lvh border-2 border-gray-500">
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="w-2/4 h-2/4 border-2 ">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
