// out path is localhost:3000/api/demo/background , this POST req on this route will prompt gemini ai

import { inngest } from "@/inngest/client";

export async function POST() {
  await inngest.send({
    name: "demo/generate",
    data: {},
  });

  return Response.json({ statis: "started" });
}
