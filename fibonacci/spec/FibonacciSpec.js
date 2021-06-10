describe("Fibonacci", function() {

  it("donne10PremiersElementsFibo renvoie un tableau", function() {
    expect(donne10PremiersElementsFibo(54)).toBeInstanceOf(Array);
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
});