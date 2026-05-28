# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: eco-news.spec.ts >> Create Eco News >> TC-10: Verify editing own news
- Location: tests/eco-news.spec.ts:160:9

# Error details

```
Error: browserType.launch: Target page, context or browser has been closed
Browser logs:

╔════════════════════════════════════════════════════════════════════════════════════════════════╗
║ Looks like you launched a headed browser without having a XServer running.                     ║
║ Set either 'headless: true' or use 'xvfb-run <your-playwright-app>' before running Playwright. ║
║                                                                                                ║
║ <3 Playwright Team                                                                             ║
╚════════════════════════════════════════════════════════════════════════════════════════════════╝
Call log:
  - <launching> /home/runner/.cache/ms-playwright/webkit-2272/pw_run.sh --inspector-pipe --no-startup-window
  - <launched> pid=6566
  - [pid=6566][err]
  - [pid=6566][err] (process:6572): Gtk-WARNING **: 10:35:04.083: Failed to open display
  - [pid=6566] <gracefully close start>
  - [pid=6566] <kill>
  - [pid=6566] <will force kill>
  - [pid=6566] <process did exit: exitCode=1, signal=null>
  - [pid=6566] starting temporary directories cleanup
  - [pid=6566] finished temporary directories cleanup
  - [pid=6566] <gracefully close end>

```