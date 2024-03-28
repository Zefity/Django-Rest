import FooterContactsSection from "./FooterContactsSection";
import FooterHistorySection from "./FooterHistorySection";

export default function Footer() {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
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
