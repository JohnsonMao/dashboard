import { useId, memo } from 'react';
import {
    useForm,
    SubmitHandler,
    FieldValues,
    DefaultValues
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from '@mui/material/Button';

import Input from './widgets/TextWidget';

type FormProps<S> = {
    onSubmit: SubmitHandler<FieldValues>;
    defaultValues?: DefaultValues<FieldValues>;
    validationSchema?: S;
};

function Form<S>(props: FormProps<S>) {
    const { validationSchema, defaultValues, onSubmit } = props;
    const id = useId();
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input id={id} label="帳號" {...register('username')} />
            <Input
                id={id}
                label="密碼"
                type="password"
                {...register('password')}
            />
            <Input id={id} label="數字" type="number" {...register('number')} />
            <Button type="submit">送出</Button>
        </form>
    );
}

export default memo(Form);
