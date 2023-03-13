import { useId, memo } from 'react';
import {
    useForm,
    FormProvider,
    SubmitHandler,
    FieldValues,
    DefaultValues
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Schema } from 'yup';

import Button from '@mui/material/Button';

import TextWidget from './widgets/TextWidget';

interface WidgetProps {
    name: string;
    label?: string;
    type?: string;
}

type FormProps = {
    onSubmit: SubmitHandler<FieldValues>;
    schema: WidgetProps[];
    defaultValues: DefaultValues<FieldValues>;
    validationSchema?: Schema<FieldValues>;
};

function Form(props: FormProps) {
    const { schema, validationSchema, defaultValues, onSubmit } = props;

    const methods = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues
    });

    const id = useId();

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                {schema.map((widget) => (
                    <TextWidget
                        id={id}
                        key={widget.name}
                        {...widget}
                    />
                ))}
                <Button type="button" onClick={() => methods.reset()}>
                    重製
                </Button>
                <Button type="submit">送出</Button>
            </form>
        </FormProvider>
    );
}

export default memo(Form);
