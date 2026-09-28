switch (algorithm) {
  case 'caesar':
    result = caesarCipher(input, parseInt(keyInput, 10), action === 'decrypt');
    break;
  case 'vigenere':
    result = vigenereCipher(input, keyInput, action === 'decrypt');
    break;
  case 'transposition':
    result = transpositionCipher(input, keyInput, action === 'decrypt');
    break;
  case 'railfence':
    result = railFenceCipher(input, keyInput, action === 'decrypt');
    break;
  case 'otp':
    result = oneTimePad(input, keyInput, action === 'decrypt');
    break;
  case 'aes':
    result = (action === 'encrypt') 
      ? CryptoJS.AES.encrypt(input, keyInput).toString() 
      : CryptoJS.AES.decrypt(input, keyInput).toString(CryptoJS.enc.Utf8);
    break;
  case 'base64':
    result = (action === 'encrypt') 
      ? CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(input)) 
      : CryptoJS.enc.Base64.parse(input).toString(CryptoJS.enc.Utf8);
    break;
  case 'sha256':
    if (action === 'decrypt') throw new Error("SHA-256 cannot be decrypted.");
    result = CryptoJS.SHA256(input).toString();
    break;
}