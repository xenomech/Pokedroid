import type { NextApiRequest, NextApiResponse } from "next";
import { SupabaseAdmin } from "@utils/supabase";

type Response = {
  message: string | number;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  if (req.method === "GET") {
    try {
      const { data, error } = await SupabaseAdmin.from("poke_card").select();
      if (error) throw error;
      if (data) {
        const downloads = data
          .map((item) => item.downloads)
          .reduce((a, b) => a + b, 0);
        return res.status(200).json({
          message: downloads || null,
        });
      }
    } catch (err) {
      return res.status(400).json({
        message: "error in request",
      });
    }
  }

  return res.status(400).json({
    message: "Unsupported Request",
  });
}
