import Team from "../src/Team";

describe("Team", () => {
  let team;
  const character1 = { name: "Hero" };
  const character2 = { name: "Villain" };

  beforeEach(() => {
    team = new Team();
  });

  test("should add a character to the team", () => {
    team.add(character1);
    expect(team.toArray()).toContain(character1);
  });

  test("should not allow duplicate characters", () => {
    team.add(character1);
    expect(() => team.add(character1)).toThrow(
      "Character already exists in the team"
    );
  });

  test("should add multiple characters", () => {
    team.addAll(character1, character2);
    expect(team.toArray()).toEqual(
      expect.arrayContaining([character1, character2])
    );
  });

  test("toArray should return an array of characters", () => {
    team.add(character1);
    expect(team.toArray()).toEqual([character1]);
  });
});
