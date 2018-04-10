import ethUtil from 'ethereumjs-util'

export default function Wallet(priv, pub) {
  if (priv) {
    this.privKey = priv.length == 32 ? priv : Buffer(priv, 'hex')
  }
  this.pubKey = pub
  this.type = 'default'
}

Wallet.prototype.getPublicKey = (() => {
  if (typeof this.pubKey == 'undefined') {
    return ethUtil.privateToPublic(this.privKey)
  } else {
    return this.pubKey
  }
})

Wallet.prototype.getPrivateKey = (() => {
  return this.privKey
})

Wallet.prototype.getPublicKeyString = (() => {
  if (typeof this.pubKey == 'undefined') {
    return '0x' + this.getPublicKey().toString('hex')
  } else {
    return "0x" + this.pubKey.toString('hex')
  }
})

Wallet.prototype.getAddress = function() {
    if (typeof this.pubKey == 'undefined') {
        return ethUtil.privateToAddress(this.privKey)
    } else {
        return ethUtil.publicToAddress(this.pubKey, true)
    }
}

Wallet.prototype.getAddressString = function() {
    return '0x' + this.getAddress().toString('hex')
}
