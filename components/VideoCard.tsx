import { Play } from "lucide-react";
import { VideoCard as VideoCardType } from "@/data/videos";

export function VideoCard({ video }: { video: VideoCardType }) {
  return (
    <a
      href={video.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex aspect-[4/5] flex-col overflow-hidden rounded-xl border border-white/10 bg-[#151312] p-5 transition-transform hover:-translate-y-1"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(45,212,191,0.18),transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:20px_20px] opacity-40"
      />

      <span className="relative w-fit shrink-0 rounded-full border border-white/15 px-2.5 py-1 font-mono text-[10px] tracking-widest text-white/60 uppercase">
        {video.type}
      </span>

      <span className="relative m-auto flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-transform group-hover:scale-110">
        <Play size={20} fill="currentColor" className="ml-0.5" />
      </span>

      <div className="relative mt-auto">
        <p className="text-xs text-white/50">{video.event}</p>
        <h3 className="mt-1 text-lg font-semibold text-white">
          {video.title}
        </h3>
        {video.role && (
          <p className="mt-1 text-xs text-white/50">{video.role}</p>
        )}
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#2dd4bf]">
          Watch Video →
        </span>
      </div>
    </a>
  );
}
