import Wallet from './wallet'

export default function Web3Wallet(addressBuffer) {
  Wallet.call(this)
  this.addressBuffer = addressBuffer
  this.type = 'web3'
}

Web3Wallet._super = Wallet
Web3Wallet.prototype = Object.create(Wallet.prototype)

Web3Wallet.prototype.getAddress = function() {
  return this.addressBuffer
}

Web3Wallet.prototype.getPublicKey = function() {
  throw new Error('Web3Wallet - method not supported')
}

Web3Wallet.prototype.getPublicKeyString = function() {
  throw new Error('Web3Wallet - method not supported')
}

Web3Wallet.prototype.getPrivateKey = function() {
  throw new Error('Web3Wallet - method not supported')
}
