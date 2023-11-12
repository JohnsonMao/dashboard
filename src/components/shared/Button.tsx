import cn from '../../utils/cn'

type ButtonProps = {
  className?: string
  children: React.ReactNode
}

export default function Button({ className, children }: ButtonProps) {
  return (
    <button
      className={cn(
        'px-8 py-2 bg-primary font-bold text-basic-white rounded-lg',
        className || ''
      )}
    >
      {children}
    </button>
  )
}
