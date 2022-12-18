import type { NextApiRequest, NextApiResponse } from "next";
import { SupabaseAdmin } from "@utils/supabase";

type Response = {
  message: string;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  if (req.method === "POST") {
    try {
      await SupabaseAdmin.rpc("updatePokeCount", { name: req.query.pokemon });
      return res.status(200).json({
        message: `downloaded ${req.query.pokemon}`,
      });
    } catch (e) {
      return res.status(400).json({
        message: "error in request",
      });
    }
  }

  if (req.method === "GET") {
    try {
      const { data, error } = await SupabaseAdmin.from("poke_card")
        .select("downloads")
        .filter("pokemon", "eq", req.query.pokemon);
      if (error) throw error;
      if (data) {
        return res.status(200).json({
          message: data[0]?.downloads || 0,
        });
      }
    } catch (e) {
      return res.status(400).json({
        message: "error in request",
      });
    }
  }

  return res.status(400).json({
    message: "Unsupported Request",
  });
}
