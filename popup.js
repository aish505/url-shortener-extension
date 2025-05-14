document.getElementById('shortenBtn').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const longUrl = tab.url;

  const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`);
  const shortUrl = await response.text();

  const output = document.getElementById('output');
  output.textContent = shortUrl;

  // Optional: Copy to clipboard
  navigator.clipboard.writeText(shortUrl);
});
