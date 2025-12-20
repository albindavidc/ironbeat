# GitHub Pages Setup Guide

To ensure your application is deployed and accessible via GitHub Pages, please follow these steps:

1.  **Navigate to Settings:**
    - Go to your repository on GitHub.
    - Click on the **Settings** tab at the top right.

2.  **Access Pages Settings:**
    - In the left sidebar, scroll down to the "Code and automation" section.
    - Click on **Pages**.

3.  **Configure Build and Deployment:**
    - Under "Build and deployment", verify the **Source** is set to **Deploy from a branch**.

4.  **Select the Branch:**
    - Under "Branch", click the dropdown menu (usually says "None" or "main").
    - Select **gh-pages**.
    - Ensure the folder is set to **/(root)**.
    - Click **Save**.

5.  **Verification:**
    - After saving, you should see a message at the top of the Pages settings page indicating the URL where your site is live (e.g., `https://<username>.github.io/<repo-name>/`).
    - Note: It might take a few minutes for the site to become available after the initial setup or a new deployment.

## Automatic Deployment

This repository is configured with a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys changes to the `gh-pages` branch whenever you push to the `main` branch.

**Note:** If you do not see the `gh-pages` branch in the dropdown, it means the initial deployment hasn't run yet. Push a change to `main` (like this one) to trigger the workflow, which will create the `gh-pages` branch for you. Then return to these settings to select it.
