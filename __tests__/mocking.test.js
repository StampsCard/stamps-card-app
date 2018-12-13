function Person(name, foods) {
    this.name = name;
    this.foods = foods;
  }
  
Person.prototype.fetchFavFoods = () => {
    return new Promise((resolve, reject) => {
        //Simulate an API
        setTimeout(() => resolve(this.foods), 2000);
    });
};

describe('mocking learning', () => {
    it('mocking a reg function', () => {
        const fetchDogs = jest.fn();
        fetchDogs('snickers');
        expect(fetchDogs).toHaveBeenCalled();
        expect(fetchDogs).toHaveBeenCalledWith('snickers');
        fetchDogs('hugo');
        expect(fetchDogs).toHaveBeenCalledTimes(2);
    });

    it('can create a person', async() => {
        const me = new Person('Wes', ['pizza', 'burgs']);
        expect(me.name).toEqual('Wes');
        //mock the favfoods function
        me.fetchFavFoods = jest.fn().mockResolvedValue(['sushi', 'pizza']);
        const foods = await me.fetchFavFoods();
        expect(foods).toContain('pizza');
    });
});
