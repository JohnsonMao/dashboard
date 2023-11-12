import { ChangeEventHandler, InputHTMLAttributes, useId } from 'react'

type InputProps = {
  label?: string
  value?: string
  name?: string
  type?: InputHTMLAttributes<HTMLInputElement>['type'] | 'textarea'
  onChange?: ChangeEventHandler
  rows?: number
}

export default function Input({
  label,
  name,
  type,
  ...props
}: InputProps) {
  const id = useId()
  const inputId = `input-${name}-${id}`
  const InputComponent = type === 'textarea' ? 'textarea' : 'input'
  return (
    <div>
      {label && (
        <label htmlFor={inputId} className="block text-primary mb-3">
          {label}
        </label>
      )}
      <InputComponent
        id={inputId}
        type={type}
        className="w-full p-[10px] border border-[#C9F1EF] rounded focus:outline-none resize-none"
        name={name}
        {...props}
      />
    </div>
  )
}
