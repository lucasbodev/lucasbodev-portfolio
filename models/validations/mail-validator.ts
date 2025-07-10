import { z } from "zod"
import { Validator } from "./validator";
import { Submission } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";

export const mailSchema = (t?: any) =>
    z.object({
        email: z.string({ message: "Requis" }).email({ message: "L'adresse mail est incorrecte" }),
        name: z.string({ message: "Requis" }),
        message: z.string({ message: "Requis" })
    });

export type MailFormData = z.infer<ReturnType<typeof mailSchema>>

export class MailValidator extends Validator<MailFormData> {

    constructor(t?: (key: string) => string) {
        super(t);
    }

    validate(data: FormData): Submission<MailFormData> {
        return parseWithZod(data, {
            schema: mailSchema(this.t)
        });
    }
}