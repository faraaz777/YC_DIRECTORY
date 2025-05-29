import { client } from '@/sanity/lib/client';
import { STARTUPS_BY_AUTHOR_QUERY } from '@/sanity/lib/queries';
import React from 'react';
import Startupcards from './startupcards';

export default async function Userstartups({id}: {id:string}) {

const startups = await client.fetch(STARTUPS_BY_AUTHOR_QUERY,{id});


  return (

      <>
{
  startups.length > 0
    ? startups.map((startup: any) => (
        <Startupcards key={startup._id} post={startup} />
      ))
    : (
        <p className="text-14-normal text-center">No startups found</p>
      )
}

</>
)

}
