describe("Fibonacci", function() {

  it("donne10PremiersElementsFibo renvoie un tableau", function() {
    expect(donne10PremiersElementsFibo(0)).toBeInstanceOf(Array);
  });

  it("donne10PremiersElementsFibo(0) renvoie un tableau vide", function() {
    expect(donne10PremiersElementsFibo(0)).toEqual([]);
  });
});