// @ts-nocheck
import Unsplash from './Unsplash'
import axios from 'axios'

jest.mock('axios')

describe('Test for Unsplash Endpoints', () => {
  test('Testing Building Object', () => {
    axios.create = jest.fn()
    new Unsplash()
    expect(axios.create).toBeCalledWith({ baseURL: 'https://unsplash-api-dsoicsjfka-uc.a.run.app' })
  })
  test('Testing getMyPhoto', () => {
    const resolver = jest.fn()

    axios.create = jest.fn(() => {
      return { get: resolver }
    })

    const unsplash = new Unsplash()
    unsplash.getMyPhoto({})

    expect(resolver).toBeCalled()
  })
})
