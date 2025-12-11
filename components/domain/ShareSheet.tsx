'use client'

import React from 'react'
import { BottomSheet } from '@/components/ui/BottomSheet'
import { Button } from '@/components/ui/Button'
import { IconButton } from '@/components/ui/IconButton'

export interface ShareSheetProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  url?: string
  onShare?: (method: 'native' | 'copy' | 'sms' | 'email') => void
}

export function ShareSheet({
  isOpen,
  onClose,
  title = 'Share Marker',
  url,
  onShare,
}: ShareSheetProps) {
  const handleNativeShare = async () => {
    if (navigator.share && url) {
      try {
        await navigator.share({
          title,
          url,
        })
        onShare?.('native')
      } catch (err) {
        // User cancelled or error
      }
    }
    onClose()
  }

  const handleCopy = async () => {
    if (url && navigator.clipboard) {
      await navigator.clipboard.writeText(url)
      onShare?.('copy')
    }
    onClose()
  }

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose} title={title}>
      <div className="flex flex-col gap-3">
        {navigator.share && (
          <Button
            variant="primary"
            fullWidth
            onClick={handleNativeShare}
            leftIcon={<span>📤</span>}
          >
            Share via...
          </Button>
        )}
        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="secondary"
            onClick={handleCopy}
            leftIcon={<span>📋</span>}
          >
            Copy Link
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              onShare?.('sms')
              onClose()
            }}
            leftIcon={<span>💬</span>}
          >
            SMS
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              onShare?.('email')
              onClose()
            }}
            leftIcon={<span>✉️</span>}
          >
            Email
          </Button>
        </div>
      </div>
    </BottomSheet>
  )
}
