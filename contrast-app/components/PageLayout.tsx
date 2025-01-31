import type React from "react"

interface PageLayoutProps {
  children: React.ReactNode
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-purple-900/50 to-black" />

      {/* Animated Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animation: `twinkle ${Math.random() * 5 + 3}s linear infinite ${Math.random() * 5}s`,
              opacity: Math.random(),
            }}
          />
        ))}
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%239C92AC' fill-opacity='0.1'/%3E%3C/svg%3E")`,
          maskImage: "radial-gradient(circle at center, white, transparent 80%)",
        }}
      />

      {/* Purple Glow */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-500/30 rounded-full blur-2xl" />
      <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/30 rounded-full blur-2xl" />

      {/* Content */}
      <div className="relative min-h-screen">{children}</div>
    </div>
  )
}

export default PageLayout

