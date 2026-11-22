# Frontend Zoom Policy

## Product requirement

When explicitly required by the product owner, apply strict application-level prevention of accidental page zoom. This policy is a best-effort web implementation, not a guarantee that the application can disable every zoom mechanism on every browser or operating system.

## Possible application-level controls

Only after confirming the requirement and browser support:
- Set an appropriate viewport declaration, potentially including `user-scalable=no`, `maximum-scale=1` and `minimum-scale=1`.
- Prevent supported gesture-based pinch zoom within the application surface where browser behavior permits.
- Prevent double-tap zoom only where the target browser supports a safe, standards-compatible approach.
- Consider wheel/trackpad zoom interception only when it can be scoped narrowly and does not interfere with normal scrolling, form controls or assistive technology.
- Avoid broad global event suppression and avoid blocking keyboard shortcuts, browser chrome, OS magnification or assistive-technology controls.

## Accessibility and platform caveats

Disabling user zoom can harm users with low vision and may conflict with accessibility expectations. Browser, OS, user preferences, accessibility services and embedded webviews may override or ignore viewport/event restrictions. Do not promise absolute zoom blocking. Text enlargement, OS magnification and assistive technology must not be intentionally disabled.

If accessibility policy, law, platform review or user requirements conflict with zoom prevention, escalate for a product decision rather than silently weakening accessibility.

## Implementation guidance

- Scope handlers to the app document/surface and only to supported gestures.
- Preserve scrolling, text selection, inputs, maps/canvas controls and other legitimate gestures.
- Do not disable browser UI or attempt to defeat OS-level zoom.
- Document the exact viewport and event behavior, browser-specific branches and known limitations.
- Keep a project-level opt-out/feature flag if the requirement may vary by platform or deployment.

## Verification

Test supported real devices and browsers, not only desktop emulation:
- iOS Safari and Android Chrome where in scope.
- Pinch gestures, double tap, wheel/trackpad zoom and keyboard/browser controls.
- Normal scrolling, text selection, form focus and virtual keyboard.
- Text scaling, screen reader, OS magnification and accessibility settings.
- Orientation changes, safe areas and embedded webviews where applicable.

Record browser/OS versions, tested gestures, expected/actual results and any overrides. Report application-level prevention separately from browser/OS capabilities. Never claim zoom is blocked completely across all devices.
