import React from 'react'
import WalletSupportItems from './WalletSupportItems'
import WalletSupportTitle from './WalletSupportTitle'

export default function WalletSupport() {
  return (
    <section className="container space-y-6">
        <WalletSupportTitle />
        <WalletSupportItems/>
    </section>
  )
}
