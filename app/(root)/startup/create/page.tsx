import StartupForm from "@/components/startupform";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
export default async function componentName() {
  const session = await auth()
if(!session) redirect("/")

  return (


    <>
    
    <section className="pink_container !min-h-[230px]">
      <h1 className="heading">
        Submit your startup
      </h1>
    </section>
    <StartupForm/>
    </>
  );
}
