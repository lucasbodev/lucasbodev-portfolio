"use client";

import React, { useActionState, useEffect } from "react";
import styles from "@/components/contact-form/contact-form.module.css";
import { sendMail } from "@/actions/mail-actions";
import Button from "../button/button.component";
import { FormProvider, useForm } from "@conform-to/react";
import FormField from "../form-field/form-field.component";
import { MailValidator } from "@/models/validations/mail-validator";
import toast from "react-hot-toast";
import Toast from "../toast/toast.component";
import { useTranslations } from "next-intl";

const ContactForm = () => {

    const t = useTranslations('ContactForm');

    const [lastResult, action, isPending] = useActionState(sendMail, undefined);

    const [form, fields] = useForm({
        lastResult,
        onValidate({ formData }) {
            return new MailValidator().validate(formData);
        },
        shouldValidate: "onBlur",
        shouldRevalidate: "onInput",
    })

    useEffect(() => {
        console.log("useEffect")
        if (!lastResult) return;
        console.log("lastResult", lastResult)
        if (lastResult.error) {
            toast.custom(<Toast message={`${t('contactError')}`} type="error" />);
        } else {
            toast.custom(<Toast message={`${t('contactSuccess')}`} type="success" />);
        }
    }, [lastResult])

    return (
        <FormProvider context={form.context}>
            <form
                id={form.id}
                onSubmit={form.onSubmit}
                className={`${styles.contactForm}`}
                action={action}>
                <div className={`${styles.inputs}`}>
                    <FormField meta={fields.name} placeholder={t('nameField')} disabled={isPending} />
                    <FormField meta={fields.email} placeholder={t('emailField')} disabled={isPending} />
                    <FormField meta={fields.message} as="textarea" rows={5} placeholder={t('messageField')} disabled={isPending} />
                </div>
                <Button type="submit" text={t('sendButton')} disabled={isPending} />
            </form>
        </FormProvider>
    );
}

export default ContactForm;