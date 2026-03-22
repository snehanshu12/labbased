# AgriYield AI - Odisha Crop Prediction

This project is ready to be deployed on Netlify.

## Deployment Steps

1.  **Push to GitHub/GitLab/Bitbucket**: Ensure your code is in a remote repository.
2.  **Connect to Netlify**:
    -   Log in to [Netlify](https://www.netlify.com/).
    -   Click "Add new site" > "Import an existing project".
    -   Select your repository.
3.  **Configure Build Settings**:
    -   **Build command**: `npm run build`
    -   **Publish directory**: `dist`
    -   (These are already configured in `netlify.toml`)
4.  **Set Environment Variables**:
    -   Go to "Site settings" > "Environment variables".
    -   Add `GEMINI_API_KEY` with your Google AI Studio API key.
5.  **Deploy**: Click "Deploy site".

## SPA Routing

The project includes a `netlify.toml` and `public/_redirects` file to handle client-side routing. This ensures that refreshing the page on a sub-route (if any are added in the future) works correctly.
