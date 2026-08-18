import { Container } from "@/components/ui/Container";
import { VideoCard } from "@/components/VideoCard";
import { videos } from "@/data/videos";

export function Creative() {
  return (
    <section
      id="creative"
      className="border-b border-border bg-[#0c0a09] py-20 sm:py-28"
    >
      <Container>
        <div className="mb-10 sm:mb-12">
          <div className="flex items-baseline gap-3 font-mono text-xs tracking-widest text-[#2dd4bf] uppercase">
            <span>04</span>
            <span className="h-px flex-1 bg-white/10" aria-hidden="true" />
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
            Video Editing &amp; Multimedia
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/60">
            Beyond software, I enjoy creating visual content and telling
            stories through video.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {videos.map((video) => (
            <VideoCard key={video.href} video={video} />
          ))}
        </div>
      </Container>
    </section>
  );
}
