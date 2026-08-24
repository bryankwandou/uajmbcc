// Instagram post archive for @uajm_bcc. Captions are transcribed verbatim from
// the real posts; images are stored locally under /public/ig so nothing depends
// on Instagram CDN URLs that expire. Motivational-quote posts ("kata motivasi")
// are intentionally excluded per the brief.
//
// Every entry must correspond to a real post. Do not invent captions or images.
// Populate `POSTS` from the account owner's own exported content.

export type IgPost = {
  id: string;
  image: string;
  caption: string;
  date: string;
  category?: "event" | "prestasi" | "kegiatan" | "pengumuman" | "dokumentasi";
  href?: string;
};

export const IG_HANDLE = "uajm_bcc";
export const IG_URL = "https://instagram.com/uajm_bcc";

export const POSTS: IgPost[] = [];
