import { asciiDonut } from '.'

test('Test Ascii Donut', () => {
  const { frame: frame1, a: a1, b: b1 } = asciiDonut(0, 0)
  const { frame: frame2, a: a2, b: b2 } = asciiDonut(a1, b1)

  expect(frame1.indexOf('@')).toBeGreaterThan(-1)
  expect(frame2.indexOf('@')).toBeGreaterThan(-1)
  expect(frame1.indexOf('@')).not.toEqual(frame2.indexOf('@'))

  expect(a1).toEqual(0.07)
  expect(b1).toEqual(0.03)

  expect(a2).toEqual(0.14)
  expect(b2).toEqual(0.06)
})
