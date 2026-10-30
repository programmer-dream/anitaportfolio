import Image from "next/image";

type Props = { src: string; alt: string; sizes: string; priority?: boolean; url?: string; className?: string };

/** A screenshot shown inside a minimal browser window. */
export default function BrowserFrame({ src, alt, sizes, priority, url, className = "" }: Props) {
  return (
    <div className={`frame ${className}`}>
      <div className="frame__bar">
        <i />
        <i />
        <i />
        {url && <span className="frame__url">{url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}</span>}
      </div>
      <div className="frame__img">
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} />
      </div>
    </div>
  );
}
