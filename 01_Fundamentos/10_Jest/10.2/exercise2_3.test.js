const users = [
    { id: 1, name: 'Mark' },
    { id: 2, name: 'Paul' },
  ];
  
  const findUserById = (id) => new Promise((resolve, reject) => {
    const result = users.find((user) => user.id === id);
  
    if (result) {
      return resolve(result);
    }
  
    return reject(new Error(`User with ${id} not found.`));
  });
  
  const getUserName = (userId) => findUserById(userId).then((user) => user.name);

// describe('tests with promisses', () => {
//     it('should show the name when find the correct id', () => (
//         getUserName(1).then((result) => {
//             expect(result).toEqual('Mark');
//         })
//     ));

//     it('should exibe an error message when not find the id', () => (
//         getUserName(3).catch((error) => {
//             expect(error.message).toMatch('User with 3 not found.')
//         })
//     ));
// });

describe('tests with promisses using async/await', () => {
    it('should exibe an error message when not find the id', async () => {
        try {
            await getUserName(3);
        } catch (error) {
            expect(error).toEqual(new Error('User with 3 not found.'));
        }
    })
    
    it('should show the name when find the correct id', async () => {
        try {
            await getUserName(1).then((result) => {
                expect(result).toBe('Mark');
            })
        } catch (error) {
            expect(error).toEqual(new Error('User wiasdasdth 3 not found.'));
        }
    });
});