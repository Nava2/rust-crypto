initSidebarItems({"mod":[["aead",""],["aes",""],["aes_gcm",""],["aesni",""],["aessafe","The `aessafe` module implements the AES algorithm completely in software without using any table lookups or other timing dependant mechanisms. This module actually contains two seperate implementations - an implementation that works on a single block at a time and a second implementation that processes 8 blocks in parallel. Some block encryption modes really only work if you are processing a single blocks (CFB, OFB, and CBC encryption for example) while other modes are trivially parallelizable (CTR and CBC decryption). Processing more blocks at once allows for greater efficiency, especially when using wide registers, such as the XMM registers available in x86 processors."],["argon2","Machinery to compute the Argon2 password hashing algorithm. "],["bcrypt",""],["bcrypt_pbkdf",""],["blake2b",""],["blockmodes",""],["blowfish",""],["buffer",""],["chacha20",""],["chacha20poly1305",""],["curve25519",""],["digest",""],["ed25519",""],["fortuna","An implementation of the Fortuna CSPRNG"],["ghash",""],["hc128",""],["hkdf","This module implements the HMAC-based Extract-and-Expand Key Derivation Function as specified by  https://tools.ietf.org/html/rfc5869."],["hmac","This module implements the Hmac function - a Message Authentication Code using a Digest."],["mac","The mac module defines the Message Authentication Code (Mac) trait."],["md5",""],["pbkdf2","This module implements the PBKDF2 Key Derivation Function as specified by http://tools.ietf.org/html/rfc2898."],["poly1305",""],["rc4","An implementation of the RC4 (also sometimes called ARC4) stream cipher. THIS IMPLEMENTATION IS NOT A FIXED TIME IMPLEMENTATION."],["ripemd160","An implementation of the RIPEMD-160 cryptographic hash."],["salsa20",""],["scrypt","This module implements the Scrypt key derivation function as specified in [1]."],["sha1","An implementation of the SHA-1 cryptographic hash algorithm."],["sha2","An implementation of the SHA-2 cryptographic hash algorithms."],["sha3","An implementation of the SHA-3 cryptographic hash algorithms."],["sosemanuk",""],["symmetriccipher",""],["util",""],["whirlpool","An implementation of the Whirlpool cryptographic hash algorithm."]]});