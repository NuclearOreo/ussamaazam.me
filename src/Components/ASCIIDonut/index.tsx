// tslint:disable: no-bitwise

const asciiDonut = (
  A: number,
  B: number
): {
  frame: string
  a: number
  b: number
} => {
  const b = []
  const z = []

  A += 0.07
  B += 0.03

  const [cA, sA, cB, sB] = [Math.cos(A), Math.sin(A), Math.cos(B), Math.sin(B)]

  for (let k = 0; k < 1760; k++) {
    b[k] = k % 80 === 79 ? '\n' : ' '
    z[k] = 0
  }
  for (let j = 0; j < 6.28; j += 0.07) {
    // j <=> theta
    const ct = Math.cos(j)
    const st = Math.sin(j)
    for (let i = 0; i < 6.28; i += 0.02) {
      // i <=> phi
      const sp = Math.sin(i)
      const cp = Math.cos(i)
      const h = ct + 2 // R1 + R2*cos(theta)
      const D = 1 / (sp * h * sA + st * cA + 5) // this is 1/z
      const t = sp * h * cA - st * sA // this is a clever factoring of some of the terms in x' and y'

      const x = 0 | (40 + 30 * D * (cp * h * cB - t * sB))
      const y = 0 | (12 + 15 * D * (cp * h * sB + t * cB))
      const o = x + 80 * y
      const N = 0 | (8 * ((st * sA - sp * ct * cA) * cB - sp * ct * sA - st * cA - cp * ct * sB))
      if (y < 22 && y >= 0 && x >= 0 && x < 79 && D > z[o]) {
        z[o] = D
        b[o] = '.,-~:;=!*#$@'[N > 0 ? N : 0]
      }
    }
  }
  return { frame: b.join(''), a: A, b: B }
}

export default asciiDonut
