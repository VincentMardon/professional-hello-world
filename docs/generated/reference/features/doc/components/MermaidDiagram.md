[**PHW — Public Register of Technical Contracts**](../../../README.md)

***

[PHW — Public Register of Technical Contracts](../../../README.md) / features/doc/components/MermaidDiagram

# features/doc/components/MermaidDiagram

## Functions

### MermaidDiagram()

> **MermaidDiagram**(`props`): `Element`

Defined in: [features/doc/components/MermaidDiagram.tsx:39](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/features/doc/components/MermaidDiagram.tsx#L39)

Renders Mermaid source with theme-aware SVG output and viewer controls.

#### Parameters

##### props

Component properties containing the Mermaid source.

###### source

`string`

#### Returns

`Element`

#### Remarks

Must be rendered beneath ThemeProvider in a React client tree.
Rendering is queued across instances and repeated when source or theme changes.
Mermaid is configured with strict security and loaded in the browser.

A usable SVG viewBox width supplies reference for CSS-driven zoom.
Rendering failures produce fallback text; the source remains available
in a disclosure element.

Effect cleanup prevents abandoned renders from replacing the current DOM.
It does not cancel Mermaid work that has already started.

Diagram explanations and accessible Mermaid labels belong in the authored
document and source. Rendering alone does not establish accessibility.
