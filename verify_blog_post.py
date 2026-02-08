from playwright.sync_api import sync_playwright

def run(playwright):
    print("Launching browser...")
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    print("Navigating to blog index...")
    page.goto("http://localhost:5173/blog")

    print("Waiting for post link...")
    page.wait_for_selector("text=The Art of Failing Forward")

    print("Taking screenshot of index...")
    page.screenshot(path="verification_index.png")

    print("Clicking post link...")
    page.click("text=The Art of Failing Forward")

    print("Waiting for post title...")
    page.wait_for_selector("h1:has-text('The Art of Failing Forward: Why I Build')")

    print("Taking screenshot of post...")
    page.screenshot(path="verification_post.png", full_page=True)

    browser.close()
    print("Done.")

with sync_playwright() as playwright:
    run(playwright)
