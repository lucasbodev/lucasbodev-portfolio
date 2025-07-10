'use client';

import React from "react";
import { FieldMetadata, getInputProps, getTextareaProps } from "@conform-to/react";
import styles from "@/components/form-field/form-field.module.css";

export interface FieldMetadataValue {
	id?: string;
	name: string;
}

interface CommonProps {
	meta: FieldMetadata<string | number>;
	label?: string;
	isPending?: boolean;
	as?: 'input' | 'textarea';
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

type FormFieldProps = CommonProps & (InputProps | TextareaProps);

const FormField = ({ meta, label, isPending = false, as = 'input', ...props }: FormFieldProps) => {
	const errorMessage = Array.isArray(meta.errors) ? meta.errors[0] : meta.errors;
	const baseClassName = `${styles.input} ${errorMessage ? styles.inputError : ""}`;

	return (
		<div className={styles.field}>
			{label && (
				<label htmlFor={meta.id} className={styles.label}>
					{label}
				</label>
			)}

			{as === 'textarea' ? (
				<textarea
					{...getTextareaProps(meta)}
					key={meta.key}
					defaultValue={meta.value ?? meta.initialValue}
					className={baseClassName}
					disabled={isPending}
					{...(props as TextareaProps)}
				/>
			) : (
				<input
					{...getInputProps(meta, { type: (props as InputProps).type as any })}
					key={meta.key}
					defaultValue={meta.value ?? meta.initialValue}
					className={baseClassName}
					disabled={isPending}
					{...(props as InputProps)}
				/>
			)}

			{errorMessage && <p className={styles.error}>{errorMessage}</p>}
		</div>
	);
};

export default FormField;