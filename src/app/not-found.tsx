import Link from "next/link";

export default function NotFound() {
  return (
    <section className="nf">
      <div className="bg-grid" aria-hidden />
      <div>
        <h1>
          4<span className="grad">0</span>4
        </h1>
        <p>This page doesn&apos;t exist — but your next website could.</p>
        <div className="actions actions--center">
          <Link href="/" className="btn btn--accent">
            Back to home
          </Link>
          <Link href="/work" className="btn btn--dark">
            View my work
          </Link>
        </div>
      </div>
    </section>
  );
}
