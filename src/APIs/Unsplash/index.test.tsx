import { act, renderHook } from '@testing-library/react-hooks'
import { photoPagination, unsplash } from '.'

jest.mock('./Unsplash')

describe('Testing Photo Pagination hook', () => {
  test('Able to photos', async () => {
    await act(async () => {
      renderHook(() => {
        photoPagination()
      })
    })

    expect(unsplash.getMyPhoto).toBeCalledTimes(1)
  })
})
