describe("Fibonacci", function() {

  describe("donne10PremiersElementsFibo renvoie un tableau", function () {
    it("donne10PremiersElementsFibo renvoie un tableau", function() {
      expect(donne10PremiersElementsFibo(0)).toBeInstanceOf(Array);
    });

    it("donne10PremiersElementsFibo(0) renvoie un tableau vide", function() {
      expect(donne10PremiersElementsFibo(0)).toEqual([]);
    });

    it("renvoie un tableau vide en cas de nombre négatif", function() {
      expect(donne10PremiersElementsFibo(-2)).toEqual([]);
    });

    it("donne10PremiersElementsFibo(1) renvoie [0]", function() {
      // Définir ce dont on a besoin
      let resultatAttendu = [0]
      let nombreDElementDemande = 1

      // Executé l'action
      let resultat = donne10PremiersElementsFibo(nombreDElementDemande)

      // Vérifier le résultat
      expect(resultat).toEqual(resultatAttendu);
    });


    it("donne10PremiersElementsFibo(5)", function() {
      expect(donne10PremiersElementsFibo(5)).toEqual([0, 1, 1, 2, 3]);
    });
  })

  xdescribe("donne10PremiersElementsFiboRecur", function () {
  })
});
