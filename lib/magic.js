import { Magic } from "magic-sdk";
export const magicAdmin = new Magic(
  typeof window !== "undefined" && process.env.MAGIC_SERVER_KEY
);
// const createMagic = () => {
//   return (
//     typeof window !== "undefined" &&
//     new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_API_KEY)
//   );
// };
