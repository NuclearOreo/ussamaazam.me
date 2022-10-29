import { act, renderHook } from '@testing-library/react-hooks'
import { AxiosResponse } from 'axios'
import { UnsplashType } from './types'
import { photoPagination, unsplash } from '.'

jest.mock('./Unsplash')

const getControlledPromise = () => {
  let deferred

  const promise = new Promise<AxiosResponse<UnsplashType[]>>((resolve, reject) => {
    deferred = { resolve, reject }
  })

  return { deferred, promise }
}

describe('Testing Photo Pagination hook', () => {
  test('Able to photos', async () => {
    await act(async () => {
      renderHook(() => {
        photoPagination(0, 0)
      })
    })

    expect(unsplash.getMyPhoto).toBeCalledWith({ pageNumber: 0, perPage: 0 })
  })
  test('Test loading', async () => {
    const { deferred, promise } = getControlledPromise()

    unsplash.getMyPhoto = jest.fn(() => promise)

    const { result, waitForNextUpdate } = renderHook(photoPagination)

    expect(result.current.loading).toEqual(true)

    deferred.resolve()
    await waitForNextUpdate()

    expect(result.current.loading).toEqual(false)
  })
  test('Test Error', async () => {
    const { deferred, promise } = getControlledPromise()
    unsplash.getMyPhoto = jest.fn(() => promise)

    const { result, waitForNextUpdate } = renderHook(photoPagination)

    expect(result.current.loading).toEqual(true)
    expect(result.current.error).toEqual(false)

    deferred.reject()
    await waitForNextUpdate()

    expect(result.current.loading).toEqual(false)
    expect(result.current.error).toEqual(true)
  })
})
