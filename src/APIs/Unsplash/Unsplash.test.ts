// @ts-nocheck
import Unsplash from './Unsplash'
import axios from 'axios'
import { vi } from 'vitest'

vi.mock('axios')

describe('Test for Unsplash Endpoints', () => {
  test('Testing Building Object', () => {
    axios.create = vi.fn()
    new Unsplash()
    expect(axios.create).toBeCalledWith({ baseURL: 'https://unsplash-api-dsoicsjfka-ue.a.run.app' })
  })
  test('Testing getMyPhoto', () => {
    const resolver = vi.fn()

    axios.create = vi.fn(() => {
      return { get: resolver }
    })

    const unsplash = new Unsplash()
    unsplash.getMyPhoto({})

    expect(resolver).toBeCalled()
  })
})
