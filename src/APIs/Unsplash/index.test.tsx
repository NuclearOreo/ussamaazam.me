import { act, renderHook } from '@testing-library/react-hooks'
import { AxiosResponse } from 'axios'
import { UnsplashType } from './types'
import { photoPagination, unsplash } from '.'
import { vi } from 'vitest'

vi.mock('./Unsplash')

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

    unsplash.getMyPhoto = vi.fn(() => promise)

    const { result, waitForNextUpdate } = renderHook(photoPagination)

    expect(result.current.loading).toEqual(true)

    deferred.resolve()
    await waitForNextUpdate()

    expect(result.current.loading).toEqual(false)
  })
  test('Test Error', async () => {
    const { deferred, promise } = getControlledPromise()
    unsplash.getMyPhoto = vi.fn(() => promise)

    const { result, waitForNextUpdate } = renderHook(photoPagination)

    expect(result.current.loading).toEqual(true)
    expect(result.current.error).toEqual(false)

    deferred.reject()
    await waitForNextUpdate()

    expect(result.current.loading).toEqual(false)
    expect(result.current.error).toEqual(true)
  })
  test('Test Receiving Data', async () => {
    const { deferred, promise } = getControlledPromise()
    unsplash.getMyPhoto = vi.fn(() => promise)

    const { result, waitForNextUpdate } = renderHook(photoPagination)

    expect(result.current.loading).toEqual(true)
    expect(result.current.images).toEqual([])

    deferred.resolve({ data: ['Testing'] })
    await waitForNextUpdate()

    expect(result.current.loading).toEqual(false)
    expect(result.current.images).toEqual(['Testing'])
  })
  test('Test End of Page', async () => {
    const { deferred, promise } = getControlledPromise()
    unsplash.getMyPhoto = vi.fn(() => promise)

    const { result, waitForNextUpdate } = renderHook(photoPagination)

    expect(result.current.loading).toEqual(true)
    expect(result.current.endOfPage).toEqual(false)
    expect(result.current.images).toEqual([])

    deferred.resolve({ data: [] })
    await waitForNextUpdate()

    expect(result.current.loading).toEqual(false)
    expect(result.current.endOfPage).toEqual(true)
    expect(result.current.images).toEqual([])
  })
})
