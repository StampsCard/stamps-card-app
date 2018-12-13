describe('sample test 101', () => {
  it('works as expected', () => {
    expect(1).toEqual(1);
  });

  it('handle ranges just fine', () => {
    const age = 200;
    expect(age).toBeGreaterThan(100);
  });

  it('makes a list of dog names', () => {
    const dogs = ['snickers', 'hugo'];
    expect(dogs).toEqual(dogs);
    expect(dogs).toContain('snickers');
  });

  //it.only -> to run only that test (fit() works as well)
  //it.skip -> to skip that test  (xip() works as well)
});
