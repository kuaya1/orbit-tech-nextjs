import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Google Search Console Test Page - The Orbit Tech',
  description: 'Test page for verifying Google Search Console rendering capabilities',
  robots: 'noindex, nofollow', // Prevent this test page from being indexed
}

export default function TestGooglePage() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Google Search Console Test - The Orbit Tech</title>
        <meta name="description" content="This is a test page to verify Google Search Console can properly render our Next.js site." />
        <style>{`
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            margin: 0;
            padding: 20px;
            background: #000;
            color: #fff;
            line-height: 1.6;
          }
          .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px;
          }
          h1 {
            color: #3b82f6;
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }
          h2 {
            color: #60a5fa;
            font-size: 1.5rem;
            margin-top: 2rem;
          }
          p {
            margin-bottom: 1rem;
            font-size: 1.1rem;
          }
          .success {
            background: #065f46;
            border: 1px solid #10b981;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
          }
          .info {
            background: #1e3a8a;
            border: 1px solid #3b82f6;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
          }
          ul {
            margin: 1rem 0;
            padding-left: 2rem;
          }
          li {
            margin-bottom: 0.5rem;
          }
          .timestamp {
            color: #9ca3af;
            font-size: 0.9rem;
            margin-top: 2rem;
          }
        `}</style>
      </head>
      <body>
        <div className="container">
          <h1>🚀 Google Search Console Test Page</h1>
          
          <div className="success">
            <h2>✅ SUCCESS: Page Rendering Test</h2>
            <p>If you can see this content in Google Search Console&apos;s URL inspection tool, then our Next.js site is rendering properly for search engines!</p>
          </div>

          <div className="info">
            <h2>📋 Test Information</h2>
            <ul>
              <li><strong>Business:</strong> The Orbit Tech</li>
              <li><strong>Service:</strong> Professional Starlink Installation</li>
              <li><strong>Location:</strong> McLean, VA & DMV Area</li>
              <li><strong>Phone:</strong> (571) 999-6915</li>
              <li><strong>Website:</strong> orbit-tech-nextjs.vercel.app</li>
            </ul>
          </div>

          <h2>🔍 What This Test Validates</h2>
          <ul>
            <li>Next.js server-side rendering is working correctly</li>
            <li>Vercel deployment configuration is proper</li>
            <li>Google&apos;s crawler can access and render the site</li>
            <li>HTML content is available without JavaScript execution</li>
            <li>Meta tags and structured content are properly served</li>
          </ul>

          <h2>🎯 Next Steps</h2>
          <p>Once this test page renders successfully in Google Search Console:</p>
          <ul>
            <li>We can confirm the main site will also render properly</li>
            <li>Apply the same techniques to improve the homepage</li>
            <li>Request indexing for the main business pages</li>
            <li>Monitor search performance improvements</li>
          </ul>

          <div className="info">
            <h2>📞 Contact Information</h2>
            <p><strong>The Orbit Tech - Professional Starlink Installation</strong></p>
            <p>📍 Serving McLean, VA and the greater DMV area</p>
            <p>📞 Call: (571) 999-6915</p>
            <p>🌐 Professional satellite internet installation services</p>
          </div>

          <div className="timestamp">
            <p>Test page generated: {new Date().toISOString()}</p>
            <p>Next.js App Router | Server-Side Rendered</p>
          </div>
        </div>
      </body>
    </html>
  )
}