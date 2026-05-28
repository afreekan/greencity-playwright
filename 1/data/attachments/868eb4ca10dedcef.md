# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> get started link
- Location: tests/example.spec.ts:10:5

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
  - <launched> pid=6614
  - [pid=6614][err]
  - [pid=6614][err] (process:6620): Gtk-WARNING **: 10:35:05.413: Failed to open display
  - [pid=6614] <gracefully close start>
  - [pid=6614] <kill>
  - [pid=6614] <will force kill>
  - [pid=6614] <process did exit: exitCode=1, signal=null>
  - [pid=6614] starting temporary directories cleanup
  - [pid=6614] finished temporary directories cleanup
  - [pid=6614] <gracefully close end>

```