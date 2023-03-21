/* eslint-disable react/jsx-props-no-spreading */
import { memo } from 'react';
import {
    useForm,
    UseFormProps,
    UseFormReturn,
    FormProvider,
    FieldValues,
    DefaultValues,
    SubmitHandler,
    SubmitErrorHandler
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Schema } from 'zod';

import Button from '@mui/material/Button';

import TextWidget from './widgets/TextWidget';

interface WidgetProps {
    name: string;
    label?: string;
    type?: string;
}
type FormProps<T extends FieldValues = FieldValues> = {
    onSuccess?: SubmitHandler<T>;
    onError?: SubmitErrorHandler<T>;
    uiSchema?: WidgetProps[];
    validationSchema?: Schema<T>;
    defaultValues: DefaultValues<T>;
    formContext?: UseFormReturn<T>;
    formProps?: React.FormHTMLAttributes<HTMLFormElement>;
    handleSubmit?: React.FormEventHandler<HTMLFormElement>;
    children?: React.ReactNode;
} & UseFormProps<T>;

function FormProviderWithoutContext<T extends FieldValues>({
    onSuccess,
    onError,
    uiSchema,
    validationSchema,
    defaultValues,
    formProps,
    children,
    ...useFormProps
}: FormProps<T>) {
    const methods = useForm<T>({
        resolver: validationSchema && zodResolver(validationSchema),
        defaultValues,
        ...useFormProps
    });

    const { handleSubmit } = methods;

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={onSuccess && handleSubmit(onSuccess, onError)}
                noValidate
                {...formProps}
            >
                {children ??
                    uiSchema?.map((widget) => (
                        <TextWidget key={widget.name} {...widget} />
                    ))}
                <Button type="button" onClick={() => methods.reset()}>
                    重製
                </Button>
                <Button type="submit">送出</Button>
            </form>
        </FormProvider>
    );
}

function Form<T extends FieldValues>({
    onSuccess,
    onError,
    uiSchema,
    validationSchema,
    defaultValues,
    formContext,
    formProps,
    handleSubmit,
    children,
    ...useFormProps
}: FormProps<T>) {
    if (!formContext) {
        return (
            <FormProviderWithoutContext
                {...{
                    onSuccess,
                    onError,
                    formProps,
                    children,
                    uiSchema,
                    validationSchema,
                    defaultValues,
                    ...useFormProps
                }}
            />
        );
    }

    return (
        <FormProvider {...formContext}>
            <form
                noValidate
                {...formProps}
                onSubmit={
                    handleSubmit ||
                    (onSuccess && formContext.handleSubmit(onSuccess, onError))
                }
            >
                {children ??
                    uiSchema?.map((widget) => (
                        <TextWidget key={widget.name} {...widget} />
                    ))}
            </form>
        </FormProvider>
    );
}

const genericMemo: <T>(component: T) => T = memo;

export default genericMemo(Form);
