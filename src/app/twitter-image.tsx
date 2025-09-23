import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#0b0b0b",
          color: "white",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 800 }}>Himanshu Jain</div>
        <div style={{ fontSize: 28, marginTop: 8 }}>
          Software Engineer • Next.js • TypeScript
        </div>
        <div style={{ fontSize: 22, opacity: 0.8, marginTop: 24 }}>
          himanshu.works
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
