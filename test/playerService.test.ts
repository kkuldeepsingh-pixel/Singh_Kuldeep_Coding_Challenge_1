import { calculatePerformanceRating, getPlayerById } from "../src/services/playerService";

describe("Performance Rating Calculation", () => {

  test("calculates rating for normal player", () => {
    // Arrange
    const player = { id: 1, name: "Test", wins: 10, losses: 5, totalScore: 1500 };

    // Act
    const result = calculatePerformanceRating(player);

    // Assert
    expect(result.rating).toBeCloseTo( (10/15)*100 + (1500/15), 2 );
  });

  test("returns 0 rating for player with 0 games", () => {
    // Arrange
    const player = { id: 2, name: "Zero", wins: 0, losses: 0, totalScore: 0 };

    // Act
    const result = calculatePerformanceRating(player);

    // Assert
    expect(result.rating).toBe(0);
  });

});

describe("Player Lookup", () => {

  test("returns player when ID exists", () => {
    // Act
    const player = getPlayerById(1);

    // Assert
    expect(player).toBeDefined();
    expect(player?.name).toBe("ShadowStrike");
  });

  test("returns undefined for missing player", () => {
    // Act
    const player = getPlayerById(999);

    // Assert
    expect(player).toBeUndefined();
  });

});
