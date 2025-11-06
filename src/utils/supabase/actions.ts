import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export async function login() {
  "use server";

  const supabase = await createClient();
  const header = await headers();
  const origin = header.get("origin");

  try {
    await supabase.auth.signOut();
  } catch (error) {
    // do nothing.
  }

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
      redirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    console.log(error);
    redirect("/auth/error");
  }

  console.log(data);
  redirect(data.url);
}

export async function logout() {
  "use server";

  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log(error);
    redirect("/auth/error");
  }

  redirect("/auth/login");
}
