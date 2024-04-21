import FooterContactsSection from "./FooterContactsSection";
import FooterHistorySection from "./FooterHistorySection";

export default function Footer() {
  return (
    <footer
      className="text-center text-lg-start  text-muted"
      id="footer"
      style={{
        background:
          "linear-gradient(180deg, #866537, #602e2e 1%, #eccbcb 100%)",
      }}
    >
      <FooterContactsSection />
      <FooterHistorySection />

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright:
        <a
          className="text-reset fw-bold"
          href="https://web.telegram.org/a/#-1001886956890"
        >
          Goal-Guade
        </a>
      </div>
    </footer>
  );
}
