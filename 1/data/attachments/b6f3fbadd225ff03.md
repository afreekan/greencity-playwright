# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: eco-news.spec.ts >> Create Eco News >> TC-05: Validate Main Text field limits
- Location: tests/eco-news.spec.ts:79:9

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
  - <launched> pid=6442
  - [pid=6442][err]
  - [pid=6442][err] (process:6448): Gtk-WARNING **: 10:35:00.589: Failed to open display
  - [pid=6442] <gracefully close start>
  - [pid=6442] <kill>
  - [pid=6442] <will force kill>
  - [pid=6442] <process did exit: exitCode=1, signal=null>
  - [pid=6442] starting temporary directories cleanup
  - [pid=6442] finished temporary directories cleanup
  - [pid=6442] <gracefully close end>

```