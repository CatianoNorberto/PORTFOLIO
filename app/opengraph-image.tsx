import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  const subtitle = "Full Stack Developer";
  const headline = "Produtos digitais escalaveis com foco em performance e impacto real.";
  const description =
    "React, React Native, Angular, Node.js e experiencias digitais para produtos financeiros e plataformas complexas.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "#07111f",
          backgroundImage:
            "radial-gradient(circle at top right, rgba(255, 140, 66, 0.16), transparent 30%), radial-gradient(circle at bottom left, rgba(86, 216, 255, 0.16), transparent 28%)",
          color: "#eef5ff",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(86, 216, 255, 0.14)",
              border: "1px solid rgba(86, 216, 255, 0.26)",
              fontSize: "28px",
              fontWeight: 700,
              color: "#56d8ff",
            }}
          >
            {siteConfig.initials}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <div style={{ fontSize: "28px", fontWeight: 700 }}>{siteConfig.name}</div>
            <div style={{ fontSize: "20px", color: "#98a7bc" }}>{subtitle}</div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "920px",
          }}
        >
          <div
            style={{
              fontSize: "22px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.28em",
              color: "#56d8ff",
            }}
          >
            Portfolio profissional
          </div>
          <div
            style={{
              fontSize: "68px",
              lineHeight: 1.08,
              fontWeight: 700,
            }}
          >
            {headline}
          </div>
          <div
            style={{
              fontSize: "24px",
              lineHeight: 1.5,
              color: "#98a7bc",
            }}
          >
            {description}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "18px",
          }}
        >
          {["Next.js", "TypeScript", "Tailwind CSS", "Node.js"].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px 20px",
                borderRadius: "999px",
                border: "1px solid rgba(148, 163, 184, 0.24)",
                background: "rgba(9, 20, 37, 0.78)",
                fontSize: "20px",
                color: "#eef5ff",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
