[**PHW — Public Register of Technical Contracts**](../../../README.md)

***

[PHW — Public Register of Technical Contracts](../../../README.md) / features/doc/validation/extractDocumentLinks

# features/doc/validation/extractDocumentLinks

## Type Aliases

### DocumentLink

> **DocumentLink** = `object`

Defined in: [features/doc/validation/extractDocumentLinks.ts:15](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/features/doc/validation/extractDocumentLinks.ts#L15)

One parsed Markdown link or image occurrence.

#### Remarks

Positions are one-based when available. Reference-style occurrences use
the reference's position and the definition's destination.
Repeated destinations remain separate occurrences.

#### Properties

##### column

> **column**: `number` \| `undefined`

Defined in: [features/doc/validation/extractDocumentLinks.ts:19](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/features/doc/validation/extractDocumentLinks.ts#L19)

##### destination

> **destination**: `string`

Defined in: [features/doc/validation/extractDocumentLinks.ts:17](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/features/doc/validation/extractDocumentLinks.ts#L17)

##### kind

> **kind**: `"link"` \| `"image"`

Defined in: [features/doc/validation/extractDocumentLinks.ts:16](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/features/doc/validation/extractDocumentLinks.ts#L16)

##### line

> **line**: `number` \| `undefined`

Defined in: [features/doc/validation/extractDocumentLinks.ts:18](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/features/doc/validation/extractDocumentLinks.ts#L18)

## Functions

### extractDocumentLinks()

> **extractDocumentLinks**(`source`): [`DocumentLink`](#documentlink)[]

Defined in: [features/doc/validation/extractDocumentLinks.ts:38](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/features/doc/validation/extractDocumentLinks.ts#L38)

Extracts link and image occurrences using CommonMark and GFM parsing.

#### Parameters

##### source

`string`

Markdown source text.

#### Returns

[`DocumentLink`](#documentlink)[]

Occurrences in syntax-tree traversal order, without deduplication.

#### Remarks

Defined references are resolved through Markdown identifier matching.
Inline and fenced code, raw HTML links, unused definitions, are undefined
reference-like text do not produce inspected destinations.

Extraction performs no filesystem or network access. It does not validate
destination existence, URL schemes, or heading fragments.
