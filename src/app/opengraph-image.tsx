import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  const title = "Himanshu Jain — Software Engineer";
  const subtitle = "Next.js • TypeScript • React Native • Web3";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background:
            "linear-gradient(135deg, #0b0b0b 0%, #111827 60%, #1f2937 100%)",
          color: "white",
          padding: "80px",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 32,
            opacity: 0.9,
            fontWeight: 500,
          }}
        >
          {subtitle}
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 24,
            opacity: 0.75,
          }}
        >
          himanshu.works
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
