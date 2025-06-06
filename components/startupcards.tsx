import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button"
import { Author, Startup } from "@/sanity.types";

export type StartupTypeCard = Omit<Startup,"author">& {author:Author}

export default function Startupcards({ post }: { post: StartupTypeCard }) {
  const {
    _createdAt,
    views,
    author,
    title,
    category,
    _id,
    image,
    description,
  } = post;

  return (
    
    <>
      <li className="startup-card group">
        <div className="flex-between">
          <p className="startup-card-date">{formatDate(_createdAt)}</p>
          <div className="flex gap-1.5">
            <EyeIcon className="size-6 text-primary" />{" "}
            <span className="texxt-16-medium">{views}</span>
          </div>
        </div>
        <div className="flex-between mt-4 gap-5">
          <div className="flex-1">
            <Link href={`/user/${author?._id}`}>
              <p>{author.name}</p>
            </Link>
            <Link href={`/startup/${_id}`}>
              <h3 className="text-26-semibold line-clamp-1">{title}</h3>
            </Link>
          </div>
          <Link href={`/user/${author?._id}`}>
            <Image
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
              alt="placehgolder"
              width={48}
              height={48}
              className="rounded-full"
            />
          </Link>
        </div>

        <Link href={`/startup/${_id}`}>
          <p className="startup-card-desc line-clamp-1">{description}</p>
          <img src={image} alt="placeholder" className="startup-card_img" />
        </Link>
        <div className="flex-between gap-3 mt-5">
          <Link href={`/?query=${category?.toLowerCase()}`}>
            <p className="text-16-medium">{category}</p>
          </Link>
          <Button className="startup-card_btn" >
            <Link href={`/startup/${_id}`}>Details</Link>
          </Button>
        </div>
      </li>
    </>
  );
}
