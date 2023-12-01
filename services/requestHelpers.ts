import { API_URL } from "./servicesConfig"

export async function get<Res>(url: string): Promise<Res> {
  return (
    await fetch("https://blog-git-mrttnx-memmer57.vercel.app/api" + url, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    })
  ).json() as Res
}
