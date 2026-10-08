import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import OfficeRealScout from "./OfficeRealScout";

describe("OfficeRealScout", () => {
  it("renders the office listings widget, the CTA phone, and the MLS disclaimer", () => {
    const html = renderToStaticMarkup(<OfficeRealScout />);
    expect(html).toContain("realscout-office-listings");
    expect(html).toContain('agent-encoded-id="QWdlbnQtMjI1MDUw"');
    expect(html).toContain("(702) 222-1964");
    expect(html).toContain("Greater Las Vegas Association");
    expect(html).toContain("Office listings");
  });
});
