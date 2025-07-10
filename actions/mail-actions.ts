"use server";

import { MailValidator } from '@/models/validations/mail-validator';
import { ErrorResponse, Resend } from 'resend';


export const sendMail = async (prevState: any, formData: FormData) => {
    let submission = new MailValidator().validate(formData);

    if (submission.status !== 'success') return submission.reply();

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'lucasbodet.dev@gmail.com',
            subject: `Message de ${submission.value.name} (${submission.value.email})`,
            html: `<p>${submission.value.message}</p>`
        });
        return { error: undefined};
    } catch (e) {
        const error = e as ErrorResponse;
        return submission.reply({ formErrors: [`${error.name}: ${error.message}`] })
    }

};