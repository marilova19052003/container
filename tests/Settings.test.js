import Settings from "../src/Settings";

describe("Settings", () => {
  let settings;

  beforeEach(() => {
    settings = new Settings();
  });

  test("should return default settings", () => {
    expect(settings.settings.get("theme")).toBe("dark");
    expect(settings.settings.get("music")).toBe("trance");
    expect(settings.settings.get("difficulty")).toBe("easy");
  });

  test("should allow user to set custom settings", () => {
    settings.setSetting("theme", "light");
    expect(settings.settings.get("theme")).toBe("light");
  });

  test("should combine default and user settings", () => {
    settings.setSetting("music", "pop");
    expect(settings.settings.get("music")).toBe("pop");
    expect(settings.settings.get("difficulty")).toBe("easy"); // remains default
  });
});
