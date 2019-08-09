import { User } from '../../src/models/user'

describe('user test', () => {

  test('should be create a User with id and name', () => {
    const id = 12345
    const name = 'mcaligares'
    const user = new User(id, name)
    expect(user.id).toBe(id)
    expect(user.name).toBe(name)
    expect(user.email).toBeUndefined()
    expect(user.address).toBeUndefined()
  })

})