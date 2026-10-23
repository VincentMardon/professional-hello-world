[**PHW — Public Register of Technical Contracts**](../../../README.md)

***

[PHW — Public Register of Technical Contracts](../../../README.md) / features/doc/validation/validateDocumentCatalogue

# features/doc/validation/validateDocumentCatalogue

## Type Aliases

### CatalogueEntry

> **CatalogueEntry** = readonly \[`string`, [`DocumentDefinition`](../data/documents.md#documentdefinition)\]

Defined in: [features/doc/validation/validateDocumentCatalogue.ts:13](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/features/doc/validation/validateDocumentCatalogue.ts#L13)

A document identifier paired with its declaration for catalogue inspection.

#### Remarks

The identifier accepts any string so validation can inspect candidate
catalogues independently of the currently registered DocumentId union.

## Functions

### validateDocumentCatalogue()

> **validateDocumentCatalogue**(`entries`, `documentationRoot`): `Promise`\<`string`[]\>

Defined in: [features/doc/validation/validateDocumentCatalogue.ts:44](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/features/doc/validation/validateDocumentCatalogue.ts#L44)

Checks catalogue declarations against routing and source-file rules.

#### Parameters

##### entries

readonly [`CatalogueEntry`](#catalogueentry)[]

Typed document identifiers and declarations to inspect.

##### documentationRoot

`string`

Existing documentation directory to resolve.

#### Returns

`Promise`\<`string`[]\>

Collected diagnostics, or an empty array when all check pass.

#### Throws

When the documentation root cannot be resolved.

#### Remarks

Requires overview at the root, nonempty metadata, valid slug segments,
unique routes, and existing regular Markdown sources.

Source containment is checked both lexically and after resolving symlinks.
Individual source inspection failures become diagnostics.

This Node.js function reads filesystem metadata without changing files.
It expects typed declarations rather than arbitrary untrusted JSON.
It does not inspect Markdown contents, links, or factual accuracy.
