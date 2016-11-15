describe('Function simpleAdd', function() {

	it('should be defined', function(){
        expect(window.simpleAdd).toBeDefined();
    });

    it('should add two numbers', function(){

        var x = simpleAdd(2, 4);

        expect(x).toEqual(6);
    });

    it('when a=15 return b+1', function(){

        var x = simpleAdd(15, 4);

        expect(x).toEqual(5);
    });

});