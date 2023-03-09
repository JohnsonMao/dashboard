import { useId } from 'react';
import {
    Formik,
    Form as FormikWrapper,
    Field,
    FormikConfig,
    FormikValues
} from 'formik';

import Button from '@mui/material/Button';

import { genericMemo } from '@/utils/generic';
import Input from './widgets/TextWidget';

function Form<T extends FormikValues>(props: FormikConfig<T>) {
    const id = useId();

    return (
        <Formik {...props}>
            <FormikWrapper>
                <Field as={Input} id={id} label="帳號" name="username" />
                <Field
                    as={Input}
                    id={id}
                    label="密碼"
                    name="password"
                    type="password"
                />
                <Field
                    as={Input}
                    id={id}
                    label="數字"
                    name="number"
                    type="number"
                />
                <Button type="submit">送出</Button>
            </FormikWrapper>
        </Formik>
    );
}

export default genericMemo(Form);
