"use server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const createUsernameSchema = z.object({
  slug: z.string().min(1, "Slug do creator é obrigratória"),
  name: z.string().min(1, "O nome do creator é obrigratória"),
  message: z.string().min(5, "A mensagem precisa ter pelo meno 5 letras"),
  price: z.number().min(200, "Selecione um valor maior que R$ 2"),
  creatorId: z.string(),
});

type createPaymentSchema = z.infer<typeof createUsernameSchema>;

export async function createPayment(data: createPaymentSchema) {
  const schema = createUsernameSchema.safeParse(data);

  if (!schema.success) {
    return {
      data: null,
      error: schema.error.issues[0].message,
    };
  }

  try {
    console.log(data);
  } catch (err) {
    return {
      data: null,
      error: "Falha ao criar pagamento, tente mais tarde",
    };
  }
}
