import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VideoCard } from "@/components/VideoCard";
import { videos } from "@/data/videos";

export function Creative() {
  return (
    <section id="creative" className="border-b border-border py-20 sm:py-28">
      <Container>
        <SectionHeading
          index="04"
          title="Video Editing & Multimedia"
          description="Beyond software, I enjoy creating visual content and telling stories through video."
        />

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {videos.map((video) => (
            <VideoCard key={video.href} video={video} />
          ))}
        </div>
      </Container>
    </section>
  );
}
