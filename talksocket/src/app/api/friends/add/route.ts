import { addFriendValidator } from "@/lib/validations/add-friend";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email: emailToAdd } = addFriendValidator.parse(body.email);
  } catch (error) {
    return {
      status: 500,
      body: { message: "An unknown error occurred" },
    };
  }
}
