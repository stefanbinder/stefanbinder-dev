from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        try:
            page.goto("http://localhost:5173/blog/the-rag-wall")
            # Wait for the title to be visible
            page.wait_for_selector("h1")

            # Check if title matches
            title = page.locator("h1").inner_text()
            print(f"Title found: {title}")

            # Take a screenshot of the full page
            page.screenshot(path="verification/blog_post.png", full_page=True)
            print("Screenshot saved to verification/blog_post.png")
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
