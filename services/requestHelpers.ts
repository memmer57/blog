import { API_URL } from "./servicesConfig"

export async function get<Res>(url: string): Promise<Res> {
  return (
    await fetch(API_URL + url, {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      //next: { revalidate: revalidate ?? 0 },
    })
  ).json() as Res
}

export async function post<Res>(
  url: string,
  body: any,
  cache?: "no-store" | "force-cache",
  revalidate?: number
): Promise<Res> {
  return (
    await fetch(API_URL + url, {
      method: "POST",
      //cache: cache ?? "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      next: { revalidate: revalidate ?? 0 },
    })
  ).json() as Res
}

export async function patch<Res>(
  url: string,
  body: any,
  cache?: "no-store" | "force-cache",
  revalidate?: number
): Promise<Res> {
  return (
    await fetch(API_URL + url, {
      method: "PATCH",
      //cache: cache ?? "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      next: { revalidate: revalidate ?? 0 },
    })
  ).json() as Res
}

export async function requestDelete<Res>(
  url: string,
  body: any,
  cache?: "no-store" | "force-cache",
  revalidate?: number
): Promise<Res> {
  return (
    await fetch(API_URL + url, {
      method: "DELETE",
      //cache: cache ?? "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      next: { revalidate: revalidate ?? 0 },
    })
  ).json() as Res
}
