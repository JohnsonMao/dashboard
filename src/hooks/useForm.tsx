import { ChangeEvent, useState } from 'react';
import { FormControlProps, FormSelectProps } from 'react-bootstrap';

export default function useForm<T>(
    data: T
): [T, FormControlProps['onChange'] & FormSelectProps['onChange']] {
    const [values, setValues] = useState(data);

    return [
        values,
        (e) => {
            setValues({
                ...values,
                [e.target.name]: e.target.value
            });
        }
    ];
}
