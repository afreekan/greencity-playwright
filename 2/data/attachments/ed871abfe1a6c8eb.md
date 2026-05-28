# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> has title
- Location: tests/example.spec.ts:3:5

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
  - <launched> pid=6597
  - [pid=6597][err]
  - [pid=6597][err] (process:6603): Gtk-WARNING **: 11:34:45.207: Failed to open display
  - [pid=6597] <gracefully close start>
  - [pid=6597] <kill>
  - [pid=6597] <will force kill>
  - [pid=6597] <process did exit: exitCode=1, signal=null>
  - [pid=6597] starting temporary directories cleanup
  - [pid=6597] finished temporary directories cleanup
  - [pid=6597] <gracefully close end>

```