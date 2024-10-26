export { auth as middleware } from "@/authConfig";

export const config = {
  matcher: ["/((?!api|_next|static|_next/image|favicon.ico|.*\\.png$).*)"],
};
