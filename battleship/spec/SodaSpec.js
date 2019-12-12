describe("Soda", () => {
  let pepsi;
  beforeEach(() => {
    pepsi = new Soda({brand: 'Pepsi', price: 0.65});
  });

  it("has a brand", () => {
    expect(pepsi.brand).toEqual('Pepsi');
  });

  it("has a price", () => {
    expect(pepsi.price).toEqual(0.65);
  });
});
