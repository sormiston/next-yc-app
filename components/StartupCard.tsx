import { StartupPost } from "@/types";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function StartupCard({ post }: { post: StartupPost }) {
  return (
    <div className="startup-card group">
      <div className="flex-between mb-5">
        <div className="inline-block bg-muted text-muted-foreground rounded-full p-[10px] group-hover:bg-background">
          {post._createdAt}
        </div>
        <div className="flex items-center">
          <Eye className="text-primary mr-1" />
          <span>{post.views}</span>
        </div>
      </div>
      <div className="flex-between">
        <div className="flex flex-col">
          <p>Steven Smith</p>
          <h3 className="text-2xl font-semibold">{post.title}</h3>
        </div>
        <Image
          src="https://avatars.githubusercontent.com/u/39159694?v=4"
          sizes="(min-width: 1024px) 44px, 40px"
          width={48}
          height={48}
          alt="Steven Smith's Avatar"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8og0AAbkA8QNU2M4AAAAASUVORK5CYII="
          className="w-10 h-10 lg:w-11 lg:h-11 rounded-full"
        />
      </div>
      <p className="leading-6 text-neutral font-normal tracking-normal mb-4">
        {post.description}
      </p>
      <div className="relative aspect-[276/164]">
        <Image
          src={post.image}
          alt={`card image for ${post.title}`}
          fill={true}
          sizes="(min-width: 640px) 50vw, (min-width: 1024px) 33vw, 100vw"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8og0AAbkA8QNU2M4AAAAASUVORK5CYII="
          className="rounded-lg"
        />
      </div>
      <div className="flex-between mt-4">
        <span className="inline-block">{post.category}</span>
        <Link
          href={`/startup/${post._id}`}
          className="inline-block bg-surface text-surface-foreground px-5 py-2 rounded-full"
        >
          Details
        </Link>
      </div>
    </div>
  );
}

export default StartupCard;
