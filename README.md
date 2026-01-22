# Rail Fence Cipher v2 (ZigZag) — JavaScript / Node.js

A lightweight, dependency-free JavaScript implementation of the **Rail Fence (ZigZag) transposition cipher**, exposed as a simple and reusable module with `encrypt()` and `decrypt()` helpers.

> ⚠️ **Security notice:** The Rail Fence cipher is a classical encryption technique intended for learning, puzzles, and demonstrations. It is **not suitable for securing sensitive or production data**.

---

## Overview

This project provides a clean and easy-to-understand implementation of a well-known classical cipher. It focuses on clarity, simplicity, and reusability rather than cryptographic strength.

The module is designed to be:
- Easy to integrate into Node.js projects
- Readable and approachable for engineers and reviewers
- Useful for educational, demonstrative, and hackathon-style use cases

---

## Hackathon & Prototype Friendly

Although this cipher is not cryptographically secure, it is **ideal for hackathons and rapid prototypes**, where:

- Lightweight obfuscation is sufficient
- Developers want to avoid heavy crypto dependencies
- Puzzle mechanics, Easter eggs, or unlock flows are needed
- Tech-savvy audiences appreciate classical algorithms

For real-world security, modern cryptographic standards (e.g., AES-GCM via Node.js `crypto`) should always be used instead.

---

## How the Rail Fence Cipher Works

The Rail Fence cipher is a **transposition cipher**, meaning it rearranges characters without changing them.

The plaintext is written diagonally across a fixed number of “rails” in a zigzag pattern. Once written, the ciphertext is formed by reading each rail from top to bottom.

### Example (3 rails, message: `HELLO WORLD`)

```

H . . . O . . . L . .
. E . L . W . R . D .
. . L . . . O . . . .

````

Ciphertext (row-wise): `HOL ELWRD LO`  
(Spaces shown for illustration only)

---

## Installation

### Using npm

```bash
npm install rail-fence-v2
````

### Using yarn

```bash
yarn add rail-fence-v2
```

---

## Usage

### CommonJS (Node.js)

```js
const railfence = require("rail-fence-v2");

const encrypted = railfence.encrypt("Cipher Text");
console.log("Encrypted:", encrypted);

const decrypted = railfence.decrypt(encrypted);
console.log("Decrypted:", decrypted);
```

### ES Modules

```js
import railfence from "rail-fence-v2";

const encrypted = railfence.encrypt("Cipher Text");
const decrypted = railfence.decrypt(encrypted);

console.log({ encrypted, decrypted });
```

---

## API Reference

### `encrypt(plainText: string): string`

Encrypts a string using the Rail Fence zigzag pattern.

* **Input:** Plain text string
* **Output:** Encrypted string

```js
railfence.encrypt("HELLO WORLD");
```

---

### `decrypt(cipherText: string): string`

Decrypts a string produced by `encrypt()`.

* **Input:** Cipher text string
* **Output:** Original plain text

```js
const cipher = railfence.encrypt("HELLO WORLD");
railfence.decrypt(cipher); // "HELLO WORLD"
```

---

## Project Structure

* `encrypt.js` — Implements zigzag encryption logic
* `decrypt.js` — Reconstructs zigzag path for decryption
* `index.js` — Public module entry point
* `package.json` — npm package configuration

---

## Use Cases

* Learning classical cryptography concepts
* Algorithm and string-manipulation practice
* Hackathon demos and proof-of-concepts
* Puzzle games and CTF-style challenges
* Lightweight, non-secure text obfuscation

---

## Local Development

```bash
git clone https://github.com/manan-desai/rail-fence-v2.git
cd rail-fence-v2
npm install
```

Quick test example:

```js
const railfence = require("./index");

const input = "WE ARE DISCOVERED. FLEE AT ONCE";
const encrypted = railfence.encrypt(input);
const decrypted = railfence.decrypt(encrypted);

console.log({ input, encrypted, decrypted });
```

---

## References

* Rail Fence Cipher — Wikipedia
* Zigzag decryption approach discussion:
  [https://stackoverflow.com/questions/50864159/stuck-on-decryption-in-new-rail-fence-cipher-zig-zac-patten/50865838#50865838](https://stackoverflow.com/questions/50864159/stuck-on-decryption-in-new-rail-fence-cipher-zig-zac-patten/50865838#50865838)
