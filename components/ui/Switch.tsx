import { InputHTMLAttributes, useId } from 'react'

interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string
  size?: 'standard' | 'large'
}

export function Switch({ label, size = 'standard', className = '', id, ...props }: SwitchProps) {
  const switchId = id || useId()
  const sizeStyles = {
    standard: {
      container: 'w-11 h-6',
      circle: 'w-5 h-5',
      translate: 'translate-x-5',
    },
    large: {
      container: 'w-14 h-7',
      circle: 'w-6 h-6',
      translate: 'translate-x-7',
    },
  }

  const styles = sizeStyles[size]

  return (
    <div className="flex items-center gap-3">
      <label
        htmlFor={switchId}
        className="relative inline-flex items-center cursor-pointer"
      >
        <input
          type="checkbox"
          id={switchId}
          className="sr-only peer"
          {...props}
        />
        <div
          className={`
            ${styles.container}
            bg-[var(--color-slate-300)]
            peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[var(--color-reciprocity-400)] peer-focus:ring-opacity-20
            peer-checked:bg-[var(--color-reciprocity-600)]
            rounded-full
            transition-colors duration-200 ease-in-out
            peer-disabled:opacity-50 peer-disabled:cursor-not-allowed
          `}
        >
          <div
            className={`
              ${styles.circle}
              bg-white
              rounded-full
              shadow-soft
              transition-transform duration-200 ease-in-out
              peer-checked:${styles.translate}
              absolute top-0.5 left-0.5
            `}
          />
        </div>
      </label>
      {label && (
        <label
          htmlFor={switchId}
          className="text-body-small text-[var(--color-midnight)] cursor-pointer"
        >
          {label}
        </label>
      )}
    </div>
  )
}
