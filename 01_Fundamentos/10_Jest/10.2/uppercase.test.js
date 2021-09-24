const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

test('if the function works', (done) => {
    uppercase('oie', (result) => {
        try {
            expect(result).toBe('OIE');
            done();
        } catch (error) {
            done (error);
        }
    });
});