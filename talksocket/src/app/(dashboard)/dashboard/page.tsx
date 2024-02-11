import { getServerSession } from "next-auth";
import Button from "../../../components/ui/Button";
import { FC } from "react";
import { authOptions } from "@/lib/auth";

interface pageProps {}

const page = async ({}) => {
  const session = await getServerSession(authOptions);

  // return <pre></pre>;
  return (
    <div>
      <h1>this is the dashboard</h1>
    </div>
  );
};

export default page;
