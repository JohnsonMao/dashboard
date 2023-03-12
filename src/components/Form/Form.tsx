import { useId, memo } from 'react';
import {
    useForm,
    SubmitHandler,
    FieldValues,
    DefaultValues,
    Path
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object } from 'yup';

import Button from '@mui/material/Button';

import Input from './widgets/TextWidget';

interface WidgetProps {
    label?: string;
    type?: string;
}

type FormProps = {
    onSubmit: SubmitHandler<FieldValues>;
    schema: Record<Path<FieldValues>, WidgetProps>;
    validationSchema?: ReturnType<typeof object>;
    defaultValues?: DefaultValues<FieldValues>;
};

const objectKeys: <K extends string>(o: Record<K, unknown>) => K[] = Object.keys;

function Form(props: FormProps) {
    const { schema, validationSchema, defaultValues, onSubmit } = props;
    const { handleSubmit, reset, control } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues
    });
    const id = useId();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {objectKeys(schema).map((key) => (
                <Input
                    id={id}
                    key={key}
                    name={key}
                    control={control}
                    {...schema[key]}
                />
            ))}
            <Button type="button" onClick={() => reset()}>
                重製
            </Button>
            <Button type="submit">送出</Button>
        </form>
    );
}

export default memo(Form);
