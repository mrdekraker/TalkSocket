import { authOptions } from "./../../../lib/auth";
// Any request is going to be handled by this file
import NextAuth from "next-auth/next";

export default NextAuth(authOptions);
