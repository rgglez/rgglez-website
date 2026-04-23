import Giscus, { type Theme } from "@giscus/react";
import { GISCUS } from "@/constants";
import { useEffect, useState } from "react";

interface CommentsProps {
  lightTheme?: Theme;
  darkTheme?: Theme;
}

export default function Comments({
  lightTheme = "light",
  darkTheme = "dark",
}: CommentsProps) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setTheme(
      document.documentElement.dataset.theme ??
        (window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light")
    );
    setMounted(true);

    const observer = new MutationObserver(() => {
      const newTheme = document.documentElement.dataset.theme;
      if (newTheme) setTheme(newTheme);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  if (!mounted) return <div className="mt-8" />;

  return (
    <div className="mt-8">
      <Giscus {...GISCUS} theme={theme === "light" ? lightTheme : darkTheme} />
    </div>
  );
}
