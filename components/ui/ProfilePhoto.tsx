import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type ProfilePhotoProps = {
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export function ProfilePhoto({
  alt,
  className,
  imageClassName,
  priority = false,
  sizes = "(min-width: 1280px) 34rem, (min-width: 1024px) 40vw, 100vw",
}: ProfilePhotoProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2rem] border border-line/70 bg-surface shadow-[0_24px_60px_rgba(0,0,0,0.22)]",
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,140,66,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(86,216,255,0.14),transparent_28%)]" />
      <Image
        src={siteConfig.profileImage}
        alt={alt}
        width={712}
        height={626}
        priority={priority}
        sizes={sizes}
        className={cn("relative block h-auto w-full", imageClassName)}
      />
    </div>
  );
}
