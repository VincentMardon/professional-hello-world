[**PHW — Public Register of Technical Contracts**](../../../README.md)

***

[PHW — Public Register of Technical Contracts](../../../README.md) / features/doc/hooks/useDiagramViewport

# features/doc/hooks/useDiagramViewport

## Functions

### useDiagramViewport()

> **useDiagramViewport**(): `object`

Defined in: [features/doc/hooks/useDiagramViewport.ts:31](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/features/doc/hooks/useDiagramViewport.ts#L31)

Coordinates one diagram's zoom, width fitting, and native fullscreen state.

#### Returns

Element refs, effective zoom and fitting state, fullscreen state and error,
the reference-width setter, and commands for the viewer controls.

##### changeZoom

> **changeZoom**: (`value`) => `void`

Leaves fit mode and stores a manual zoom percentage.

###### Parameters

###### value

`number`

A finite percentage, constrained here to 1-300.

###### Returns

`void`

###### Remarks

Values are not rounded. Non-finite input is outside this command's contract.

##### containerRef

> **containerRef**: `RefObject`\<`HTMLElement` \| `null`\>

##### figureRef

> **figureRef**: `RefObject`\<`HTMLElement` \| `null`\>

##### fitToWidth

> **fitToWidth**: `boolean`

##### fitWidth

> **fitWidth**: () => `void`

Enables responsive width fitting and resets horizontal scroll.

###### Returns

`void`

###### Remarks

Fitting uses the latest measured viewport and SVG reference widths.
Until both measurements are positive, the effective zoom is 100 percent.

##### fullscreenError

> **fullscreenError**: `string`

##### isFullscreen

> **isFullscreen**: `boolean`

##### setNaturalWidth

> **setNaturalWidth**: `Dispatch`\<`SetStateAction`\<`number`\>\>

##### toggleFullscreen

> **toggleFullscreen**: () => `Promise`\<`void`\>

Requests fullscreen for this figure, or exits when it already owns it.

###### Returns

`Promise`\<`void`\>

A promise that settles after request handling.

###### Remarks

Invoke from a user interaction. The browser controls availability and
permission. Missing figures are ignored; unsupported or rejected requests
produce fullscreenError text rather than being rethrown.

##### zoom

> **zoom**: `number`

#### Remarks

Attach figureRef to the fullscreen figure and containerRef to its viewport.
After rendering an SVG, supply its reference width through setNaturalWidth.

Zoom is expressed as a percentage. This hook calculates values but does
not resize the SVG; the consuming component and its styles apply them.

Fit mode follows viewport measurements through ResizeObserver.
Manual zoom disables fitting. Fitted zoom is rounded down and constrained
to 1-300 percent, so extreme diagrams may still require scrolling.

Fullscreen state follows browser fullscreenchange events rather than
assuming that a request succeeded. Request failures become error text.

Cleanup disconnects the observer and removes the fullscreen listener.
It does not cancel an outstanding fullscreen request.

This hook requires a React client component and browser ResizeObserver.
