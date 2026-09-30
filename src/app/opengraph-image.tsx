import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ashikul Islam - System Architect";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#070709",
          padding: "60px 70px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "#ffffff",
          position: "relative",
          border: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        {/* Corner glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(247, 242, 235, 0.08) 0%, transparent 70%)",
          }}
        />

        {/* Top Tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "8px 18px",
            borderRadius: "999px",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            width: "fit-content",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#F7F2EB",
            }}
          />
          <span
            style={{
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "#F7F2EB",
              textTransform: "uppercase",
            }}
          >
            Ashikul Islam // System Architect
          </span>
        </div>

        {/* Center Main Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div
            style={{
              fontSize: "80px",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              color: "#ffffff",
              lineHeight: 1,
            }}
          >
            Ashikul Islam
          </div>

          <div
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "#F7F2EB",
              letterSpacing: "-0.01em",
            }}
          >
            System Architect &amp; Software Engineer
          </div>

          <div
            style={{
              fontSize: "20px",
              color: "#9CA3AF",
              maxWidth: "850px",
              lineHeight: 1.5,
              marginTop: "8px",
            }}
          >
            Architecting resilient distributed systems, scalable web
            applications, and high-performance cloud infrastructure.
          </div>
        </div>

        {/* Bottom Metadata Pills */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255, 255, 255, 0.10)",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", gap: "10px" }}>
            {[
              "Next.js 16",
              "React 19",
              "TypeScript",
              "PostgreSQL",
              "Docker",
              "Besu",
            ].map((tech) => (
              <div
                key={tech}
                style={{
                  padding: "6px 14px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  fontSize: "13px",
                  color: "#E5E7EB",
                  fontWeight: 600,
                }}
              >
                {tech}
              </div>
            ))}
          </div>

          <div
            style={{
              fontSize: "13px",
              color: "#6B7280",
              letterSpacing: "0.1em",
            }}
          >
            DHAKA, BD · UTC+06:00
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
