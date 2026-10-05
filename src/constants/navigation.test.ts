import {
  isNavigationItemActive,
  supportsTransparentHeader,
} from "./navigation";

describe("navigation helpers", () => {
  it("marks nested transparent-header routes as active", () => {
    expect(supportsTransparentHeader("/about")).toBe(true);
    expect(supportsTransparentHeader("/about/team")).toBe(true);
    expect(supportsTransparentHeader("/news/weekly-update")).toBe(true);
    expect(supportsTransparentHeader("/admin")).toBe(false);
  });

  it("keeps nested route activation consistent with the router", () => {
    expect(isNavigationItemActive("/projects/ongoing", "/projects")).toBe(true);
    expect(isNavigationItemActive("/contact", "/contact")).toBe(true);
    expect(isNavigationItemActive("/", "/")).toBe(true);
  });
});
