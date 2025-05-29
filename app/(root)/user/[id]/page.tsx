import { auth } from "@/auth";
import { client } from "@/sanity/lib/client";
import { AUTHOR_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import Image from "next/image";
import Userstartups from "@/components/Userstartups";
import { Suspense } from "react";


export const  experimental_ppr = true 


export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const session = await auth();
  const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id });
  if (!user) return notFound();

  return (
    <>
      <section className="profile_container">
        <div className="profile_card">
          <div className="profile_title">
            <h3 className="text-24-black uppercase line-clamp-1 text-center">
              {user.name}
            </h3>
          </div>
          <Image
            src={user.image}
            alt={user.name}
            width={200}
            height={200}
            className="profile_image"
          ></Image>
          <p className="text-30-extrabold mt-7 text-center">@{user.username}</p>
          <p className="mt mt-1 text-center text-14-normal">{user?.bio}</p>
        </div>

        <div className="flex-1 flex-col gap-5 lg:mt-5">
          <p className="text-30-bold ">
            {session?.id === id ? "Your Profile" : "ALL"} Startups
          </p>

          <ul className="card_grid-sm">
            <Suspense fallback={<p className="text-14-normal text-center">Loading...</p>}>
            <Userstartups id={id}></Userstartups>
            </Suspense>
          </ul>
        </div>
      </section>
    </>
  );
}
