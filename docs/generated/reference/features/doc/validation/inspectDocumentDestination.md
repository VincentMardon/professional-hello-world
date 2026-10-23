[**PHW — Public Register of Technical Contracts**](../../../README.md)

***

[PHW — Public Register of Technical Contracts](../../../README.md) / features/doc/validation/inspectDocumentDestination

# features/doc/validation/inspectDocumentDestination

## Type Aliases

### DestinationContext

> **DestinationContext** = `object`

Defined in: [features/doc/validation/inspectDocumentDestination.ts:14](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/features/doc/validation/inspectDocumentDestination.ts#L14)

Explicit filesystem and routing inputs for destination inspection.

#### Remarks

The caller supplies the selected documentation routes and permitted
application routes. Inspection does not discover Next.js routes.

#### Properties

##### applicationRoutes

> **applicationRoutes**: readonly `string`[]

Defined in: [features/doc/validation/inspectDocumentDestination.ts:24](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/features/doc/validation/inspectDocumentDestination.ts#L24)

Permitted non-documentation path without the deployment prefix.

##### documentRoutes

> **documentRoutes**: readonly `string`[]

Defined in: [features/doc/validation/inspectDocumentDestination.ts:22](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/features/doc/validation/inspectDocumentDestination.ts#L22)

Reader paths without the deployment prefix.

##### repositoryRoot

> **repositoryRoot**: `string`

Defined in: [features/doc/validation/inspectDocumentDestination.ts:16](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/features/doc/validation/inspectDocumentDestination.ts#L16)

Repository directory containing permitted filesystem destinations.

##### siteUrl

> **siteUrl**: `string`

Defined in: [features/doc/validation/inspectDocumentDestination.ts:20](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/features/doc/validation/inspectDocumentDestination.ts#L20)

Absolute deployed site URL, including its application base path.

##### sourcePath

> **sourcePath**: `string`

Defined in: [features/doc/validation/inspectDocumentDestination.ts:18](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/features/doc/validation/inspectDocumentDestination.ts#L18)

Absolute path of the referring Markdown source.

***

### DestinationInspection

> **DestinationInspection** = `object`

Defined in: [features/doc/validation/inspectDocumentDestination.ts:28](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/features/doc/validation/inspectDocumentDestination.ts#L28)

Classification and diagnostic information for one destination occurrence.

#### Properties

##### category

> **category**: `"file"` \| `"route"` \| `"external"` \| `"fragment"` \| `"scheme"`

Defined in: [features/doc/validation/inspectDocumentDestination.ts:32](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/features/doc/validation/inspectDocumentDestination.ts#L32)

Resolution category; this does not imply successful verification.

##### fragmentDeferred

> **fragmentDeferred**: `boolean`

Defined in: [features/doc/validation/inspectDocumentDestination.ts:36](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/features/doc/validation/inspectDocumentDestination.ts#L36)

Whether the original destination contains a deferred fragment marker.

##### message?

> `optional` **message?**: `string`

Defined in: [features/doc/validation/inspectDocumentDestination.ts:38](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/features/doc/validation/inspectDocumentDestination.ts#L38)

Additional diagnostic text, when supplied.

##### status

> **status**: `"checked"` \| `"skipped"` \| `"error"`

Defined in: [features/doc/validation/inspectDocumentDestination.ts:30](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/features/doc/validation/inspectDocumentDestination.ts#L30)

Whether the destination passed, was intentionally skipped, or failed.

##### target

> **target**: `string`

Defined in: [features/doc/validation/inspectDocumentDestination.ts:34](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/features/doc/validation/inspectDocumentDestination.ts#L34)

Resolved filesystem path, canonical route, or reported destination.

## Functions

### inspectDocumentDestination()

> **inspectDocumentDestination**(`link`, `context`): `Promise`\<[`DestinationInspection`](#destinationinspection)\>

Defined in: [features/doc/validation/inspectDocumentDestination.ts:78](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/features/doc/validation/inspectDocumentDestination.ts#L78)

Classifies and inspects one extracted Markdown destination.

#### Parameters

##### link

[`DocumentLink`](extractDocumentLinks.md#documentlink)

Link or image occurrence to inspect.

##### context

[`DestinationContext`](#destinationcontext)

Explicit repository, source, deployment, and route inputs.

#### Returns

`Promise`\<[`DestinationInspection`](#destinationinspection)\>

A checked, skipped, or error result for the destination.

#### Remarks

Relative destinations resolve from the referring source file.
Root-relative paths and matching absolute site URLs use local route rules.
Local images resolve beneath frontend/public.

Repository destinations receive lexical and real-path containment checks.
Links may target files or directories; images mus target files.
Route checks compare declarations rather than making HTTP requests.

External HTTP(S) and protocol-relative destinations are skipped.
Supported non-file schemes are skipped; unsupported schemes are errors.
Fragment existence is deferred even when the containing target passes.

Filesystem inspection is read-only. A passing result establishes neither
browser rendering nor external availability, image validity, or prose truth.
