from playwright.sync_api import sync_playwright

def run(playwright):
    print("Launching browser...")
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    print("Navigating to blog post...")
    page.goto("http://localhost:5173/blog/the-art-of-failing-forward")

    print("Waiting for Tatiland link...")
    # The link should have the correct href and text
    link = page.locator("a[href='https://tatiland.store']")
    link.wait_for()

    print("Verifying link attributes...")
    assert link.get_attribute("target") == "_blank"
    assert link.get_attribute("rel") == "noopener noreferrer"

    # Check if the text is 'Tatiland:'
    # The anchor contains "Tatiland:" and has the class 'text-emerald-300' and 'font-semibold' and 'hover:underline'
    assert "Tatiland:" in link.inner_text()

    print("Taking screenshot...")
    # Scroll to the link to make sure it's visible in the screenshot
    link.scroll_into_view_if_needed()
    page.screenshot(path="verification_tatiland_link.png")

    browser.close()
    print("Done.")

with sync_playwright() as playwright:
    run(playwright)
