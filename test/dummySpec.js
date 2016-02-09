
describe("Bowling", function() {
  it("returns 0 when all balls are 0", function() {
  	var allBalls = "00000000000000000000";
    expect(calculateScore(allBalls)).toBe(0);
  });
  it("returns 1 when all balls are 0 but the last is 1", function() {
  	var allBalls = "00000000000000000001";
    expect(calculateScore(allBalls)).toBe(1);
  });
  it("returns 1 when all balls are 0 but the first is 1", function() {
  	var allBalls = "10000000000000000000";
    expect(calculateScore(allBalls)).toBe(1);
  });
  it("returns 1 when all balls are 0 but the middle is 1", function() {
  	var allBalls = "00000000010000000000";
    expect(calculateScore(allBalls)).toBe(1);
  });
  it("returns 20 when all balls are 1 ", function() {
  	var allBalls = "11111111111111111111";
    expect(calculateScore(allBalls)).toBe(20);
  });
  it("returns 10 when all balls are 0 but the first is strike", function() {
  	var allBalls = "X000000000000000000";
    expect(calculateScore(allBalls)).toBe(10);
  });
  it("returns 12 when all balls are 0 but the first is strike and the second one is 1", function() {
  	var allBalls = "X100000000000000000";
    expect(calculateScore(allBalls)).toBe(12);
  });
    it("returns 14 when all balls are 0 but the first is strike and the second and the third are 1", function() {
  	var allBalls = "X110000000000000000";
    expect(calculateScore(allBalls)).toBe(14);
  });
     it("returns 10 when all balls are 0 but the first is strike and the second and the third are 1", function() {
  	var allBalls = "0000000000000000000X";
    expect(calculateScore(allBalls)).toBe(10);
  });
});

