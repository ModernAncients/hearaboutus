'use client'

import React, { useState } from 'react'
import { MarkerCard } from './MarkerCard'
import { TextArea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'

export interface MarkerEditorProps {
  businessName: string
  initialMessage?: string
  onChangeMessage?: (value: string) => void
  onSave?: () => void
}

export function MarkerEditor({
  businessName,
  initialMessage = "I'd vouch for this brand.",
  onChangeMessage,
  onSave,
}: MarkerEditorProps) {
  const [message, setMessage] = useState(initialMessage)

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setMessage(e.target.value)
    onChangeMessage?.(e.target.value)
  }

  return (
    <div className="flex flex-col gap-4">
      <MarkerCard businessName={businessName} message={message} />
      <TextArea
        label="Your Marker message"
        value={message}
        onChange={handleChange}
        helperText="This is what your customers will send when they put in a good word."
        rows={3}
      />
      <Button onClick={onSave} fullWidth>
        Save Marker
      </Button>
    </div>
  )
}
