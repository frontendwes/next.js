// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  // await res.unstable_revalidade("/"); quando acessar esta rota ele atualiza novamente o index
  return res.status(200).json({ name: "John Doe" });
}
