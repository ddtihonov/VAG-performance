import { useCallback, useState} from 'react'


export const FormValidation = () =>{

    const [values, setValues] = useState({})// данные name: phone:
    const [errors, setErrors] = useState({})
    const [isValid, setIsValid] = useState(false)

    const handleChange = useCallback((evt) => {
        const name = evt.target.name
        const value = evt.target.value
        const form = evt.target.closest("form")
        setValues({ ...values, [name]: value })
        setErrors({ ...errors, [name]: evt.target.validationMessage })
        // если колич. элементов формы минус 1 (т.е. button) === длине массива инпутов
        if ((form.elements.length - 1) === Object.keys(values).length) {
          // checkValidity возвр. true-false
            setIsValid(form.checkValidity())
        }
    },
        [errors, values]
    )

    const resetForm = useCallback((newErrors = {}, newIsValid = false, newData = '') => {
        setErrors(newErrors);
        setIsValid(newIsValid);
        setValues(newData);
        console.log('я тут')
    },
        // useCallback вернёт мемоиз-ю версию колбэка при изме одной из зависимостей
        [setErrors, setIsValid, setValues]
    )

    return { values, handleChange, resetForm, errors, isValid };
}