import Image from "next/image";
import { Play } from "lucide-react";
import { VideoCard as VideoCardType } from "@/data/videos";

export function VideoCard({ video }: { video: VideoCardType }) {
  const hasCover = Boolean(video.cover);

  return (
    <a
      href={video.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex aspect-[4/5] flex-col overflow-hidden rounded-xl border p-5 transition-transform hover:-translate-y-1 ${
        hasCover ? "border-white/10" : "border-border bg-card"
      }`}
    >
      {video.cover ? (
        <>
          <Image
            src={video.cover}
            alt=""
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, 25vw"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/50"
          />
        </>
      ) : (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(45,212,191,0.18),transparent_55%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:20px_20px] opacity-60"
          />
        </>
      )}

      <span
        className={`relative w-fit shrink-0 rounded-full border px-2.5 py-1 font-mono text-[10px] tracking-widest uppercase ${
          hasCover
            ? "border-white/15 text-white/60"
            : "border-border text-muted-foreground"
        }`}
      >
        {video.type}
      </span>

      <span
        className={`relative m-auto flex h-14 w-14 shrink-0 items-center justify-center rounded-full border backdrop-blur-sm transition-transform group-hover:scale-110 ${
          hasCover
            ? "border-white/20 bg-white/10 text-white"
            : "border-border bg-accent-soft text-accent"
        }`}
      >
        <Play size={20} fill="currentColor" className="ml-0.5" />
      </span>

      <div className="relative mt-auto">
        <p className={`text-xs ${hasCover ? "text-white/50" : "text-muted-foreground"}`}>
          {video.event}
        </p>
        <h3
          className={`mt-1 text-lg font-semibold ${hasCover ? "text-white" : "text-foreground"}`}
        >
          {video.title}
        </h3>
        {video.role && (
          <p className={`mt-1 text-xs ${hasCover ? "text-white/50" : "text-muted-foreground"}`}>
            {video.role}
          </p>
        )}
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent">
          Watch Video →
        </span>
      </div>
    </a>
  );
}
