import ErrorRepository from "../src/ErrorRepository";

describe("ErrorRepository", () => {
  let errorRepo;

  beforeEach(() => {
    errorRepo = new ErrorRepository();
  });

  test("should return error message for known error code", () => {
    expect(errorRepo.translate(404)).toBe("Not Found");
  });

  test('should return "Unknown error" for unknown error code', () => {
    expect(errorRepo.translate(999)).toBe("Unknown error");
  });
});
