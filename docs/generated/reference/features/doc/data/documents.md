[**PHW — Public Register of Technical Contracts**](../../../README.md)

***

[PHW — Public Register of Technical Contracts](../../../README.md) / features/doc/data/documents

# features/doc/data/documents

## Type Aliases

### DocumentDefinition

> **DocumentDefinition** = `object`

Defined in: [features/doc/data/documents.ts:12](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/features/doc/data/documents.ts#L12)

Declares a selected Markdown source and its reader-facing identity.

#### Remarks

Source paths are relative to the documentation directory.
Slug segments identify the reader route beneath /doc.
An empty slug identifies the documentation reception.

Runtime constraints are checked by the catalogue validator.
This type alone does not establish file existence or route uniqueness.

#### Properties

##### description

> **description**: `string`

Defined in: [features/doc/data/documents.ts:18](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/features/doc/data/documents.ts#L18)

Description supplied to Next.js page metadata.

##### file

> **file**: `string`

Defined in: [features/doc/data/documents.ts:20](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/features/doc/data/documents.ts#L20)

Markdown source path relative to the documentation directory.

##### metadataTitle

> **metadataTitle**: `string`

Defined in: [features/doc/data/documents.ts:16](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/features/doc/data/documents.ts#L16)

Title supplied to Next.js page metadata.

##### slug

> **slug**: readonly `string`[]

Defined in: [features/doc/data/documents.ts:22](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/features/doc/data/documents.ts#L22)

Reader-route segments beneath /doc; empty for reception.

##### title

> **title**: `string`

Defined in: [features/doc/data/documents.ts:14](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/features/doc/data/documents.ts#L14)

Label used in documentation navigation.

***

### DocumentId

> **DocumentId** = keyof *typeof* [`documents`](#documents)

Defined in: [features/doc/data/documents.ts:188](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/features/doc/data/documents.ts#L188)

Internal identifiers derived from the maintained document catalogue.

## Variables

### documentEntries

> `const` **documentEntries**: \[`"overview"` \| `"architecture"` \| `"audioLifecycle"` \| `"operations"` \| `"frontendGuide"` \| `"documentationWorkshop"` \| `"trustBoundaries"` \| `"dependencies"` \| `"engineReference"` \| `"referenceOverview"` \| `"audioTestReference"` \| `"soundReference"` \| `"catalogueReference"` \| `"diagramViewportReference"` \| `"mermaidReference"` \| `"catalogueValidationReference"` \| `"linkExtractionReference"` \| `"destinationInspectionReference"` \| `"errorReference"` \| `"themeReference"`, [`DocumentDefinition`](#documentdefinition)\][]

Defined in: [features/doc/data/documents.ts:197](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/features/doc/data/documents.ts#L197)

Exposes catalogue entries in declaration order for routing and inspection.

#### Remarks

The assertion preserves the known key type lost by Object.entries.
It performs no runtime validation.

***

### documents

> `const` **documents**: `object`

Defined in: [features/doc/data/documents.ts:38](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/features/doc/data/documents.ts#L38)

Selects the documents published by the documentation reader.

#### Type Declaration

##### architecture

> `readonly` **architecture**: `object`

###### architecture.description

> `readonly` **description**: `"PHW architecture and responsibility boundaries."` = `"PHW architecture and responsibility boundaries."`

###### architecture.file

> `readonly` **file**: `"ARCHITECTURE.md"` = `"ARCHITECTURE.md"`

###### architecture.metadataTitle

> `readonly` **metadataTitle**: `"Architecture — Professional Hello World"` = `"Architecture — Professional Hello World"`

###### architecture.slug

> `readonly` **slug**: readonly \[`"architecture"`\]

###### architecture.title

> `readonly` **title**: `"Architecture"` = `"Architecture"`

##### audioLifecycle

> `readonly` **audioLifecycle**: `object`

###### audioLifecycle.description

> `readonly` **description**: `"Follow a sound from Play to browser output."` = `"Follow a sound from Play to browser output."`

###### audioLifecycle.file

> `readonly` **file**: `"AUDIO-LIFECYCLE.md"` = `"AUDIO-LIFECYCLE.md"`

###### audioLifecycle.metadataTitle

> `readonly` **metadataTitle**: `"Sound Lifecycle — Professional Hello World"` = `"Sound Lifecycle — Professional Hello World"`

###### audioLifecycle.slug

> `readonly` **slug**: readonly \[`"audio-lifecycle"`\]

###### audioLifecycle.title

> `readonly` **title**: `"Sound lifecycle"` = `"Sound lifecycle"`

##### audioTestReference

> `readonly` **audioTestReference**: `object`

###### audioTestReference.description

> `readonly` **description**: `"Audio settings, playback requests, and status handling."` = `"Audio settings, playback requests, and status handling."`

###### audioTestReference.file

> `readonly` **file**: `"generated/reference/features/audio-test/hooks/useAudioTest.md"` = `"generated/reference/features/audio-test/hooks/useAudioTest.md"`

###### audioTestReference.metadataTitle

> `readonly` **metadataTitle**: `"useAudioTest Reference — Professional Hello World"` = `"useAudioTest Reference — Professional Hello World"`

###### audioTestReference.slug

> `readonly` **slug**: readonly \[`"reference"`, `"use-audio-test"`\]

###### audioTestReference.title

> `readonly` **title**: `"Reference — useAudioTest"` = `"Reference — useAudioTest"`

##### catalogueReference

> `readonly` **catalogueReference**: `object`

###### catalogueReference.description

> `readonly` **description**: `"Document declarations, identities, and route helpers."` = `"Document declarations, identities, and route helpers."`

###### catalogueReference.file

> `readonly` **file**: `"generated/reference/features/doc/data/documents.md"` = `"generated/reference/features/doc/data/documents.md"`

###### catalogueReference.metadataTitle

> `readonly` **metadataTitle**: `"Catalogue Reference — Professional Hello World"` = `"Catalogue Reference — Professional Hello World"`

###### catalogueReference.slug

> `readonly` **slug**: readonly \[`"reference"`, `"catalogue"`\]

###### catalogueReference.title

> `readonly` **title**: `"Reference — catalogue"` = `"Reference — catalogue"`

##### catalogueValidationReference

> `readonly` **catalogueValidationReference**: `object`

###### catalogueValidationReference.description

> `readonly` **description**: `"Declaration rules, source containment, and diagnostics."` = `"Declaration rules, source containment, and diagnostics."`

###### catalogueValidationReference.file

> `readonly` **file**: `"generated/reference/features/doc/validation/validateDocumentCatalogue.md"` = `"generated/reference/features/doc/validation/validateDocumentCatalogue.md"`

###### catalogueValidationReference.metadataTitle

> `readonly` **metadataTitle**: `"Catalogue Validation Reference — Professional Hello World"` = `"Catalogue Validation Reference — Professional Hello World"`

###### catalogueValidationReference.slug

> `readonly` **slug**: readonly \[`"reference"`, `"catalogue-validation"`\]

###### catalogueValidationReference.title

> `readonly` **title**: `"Reference — catalogue validation"` = `"Reference — catalogue validation"`

##### dependencies

> `readonly` **dependencies**: `object`

###### dependencies.description

> `readonly` **description**: `"Understand borrowed machinery, package ownership, and maintenance."` = `"Understand borrowed machinery, package ownership, and maintenance."`

###### dependencies.file

> `readonly` **file**: `"DEPENDENCIES.md"` = `"DEPENDENCIES.md"`

###### dependencies.metadataTitle

> `readonly` **metadataTitle**: `"Dependencies — Professional Hello World"` = `"Dependencies — Professional Hello World"`

###### dependencies.slug

> `readonly` **slug**: readonly \[`"dependencies"`\]

###### dependencies.title

> `readonly` **title**: `"Dependencies"` = `"Dependencies"`

##### destinationInspectionReference

> `readonly` **destinationInspectionReference**: `object`

###### destinationInspectionReference.description

> `readonly` **description**: `"Local destination checks and deliberately skipped categories."` = `"Local destination checks and deliberately skipped categories."`

###### destinationInspectionReference.file

> `readonly` **file**: `"generated/reference/features/doc/validation/inspectDocumentDestination.md"` = `"generated/reference/features/doc/validation/inspectDocumentDestination.md"`

###### destinationInspectionReference.metadataTitle

> `readonly` **metadataTitle**: `"Destination Inspection Reference — Professional Hello World"` = `"Destination Inspection Reference — Professional Hello World"`

###### destinationInspectionReference.slug

> `readonly` **slug**: readonly \[`"reference"`, `"destination-inspection"`\]

###### destinationInspectionReference.title

> `readonly` **title**: `"Reference — destination inspection"` = `"Reference — destination inspection"`

##### diagramViewportReference

> `readonly` **diagramViewportReference**: `object`

###### diagramViewportReference.description

> `readonly` **description**: `"Zoom, width fitting, and native fullscreen contracts."` = `"Zoom, width fitting, and native fullscreen contracts."`

###### diagramViewportReference.file

> `readonly` **file**: `"generated/reference/features/doc/hooks/useDiagramViewport.md"` = `"generated/reference/features/doc/hooks/useDiagramViewport.md"`

###### diagramViewportReference.metadataTitle

> `readonly` **metadataTitle**: `"Diagram Viewport Reference — Professional Hello World"` = `"Diagram Viewport Reference — Professional Hello World"`

###### diagramViewportReference.slug

> `readonly` **slug**: readonly \[`"reference"`, `"diagram-viewport"`\]

###### diagramViewportReference.title

> `readonly` **title**: `"Reference — useDiagramViewport"` = `"Reference — useDiagramViewport"`

##### documentationWorkshop

> `readonly` **documentationWorkshop**: `object`

###### documentationWorkshop.description

> `readonly` **description**: `"Maintain authored guides, references, diagrams, and their evidence."` = `"Maintain authored guides, references, diagrams, and their evidence."`

###### documentationWorkshop.file

> `readonly` **file**: `"DOCUMENTATION-WORKSHOP.md"` = `"DOCUMENTATION-WORKSHOP.md"`

###### documentationWorkshop.metadataTitle

> `readonly` **metadataTitle**: `"Documentation Workshop — Professional Hello World"` = `"Documentation Workshop — Professional Hello World"`

###### documentationWorkshop.slug

> `readonly` **slug**: readonly \[`"workshop"`\]

###### documentationWorkshop.title

> `readonly` **title**: `"Documentation workshop"` = `"Documentation workshop"`

##### engineReference

> `readonly` **engineReference**: `object`

###### engineReference.description

> `readonly` **description**: `"Engine initialization, readiness, and cleanup contract."` = `"Engine initialization, readiness, and cleanup contract."`

###### engineReference.file

> `readonly` **file**: `"generated/reference/features/audio-test/hooks/useBeepEngine.md"` = `"generated/reference/features/audio-test/hooks/useBeepEngine.md"`

###### engineReference.metadataTitle

> `readonly` **metadataTitle**: `"useBeepEngine Reference — Professional Hello World"` = `"useBeepEngine Reference — Professional Hello World"`

###### engineReference.slug

> `readonly` **slug**: readonly \[`"reference"`, `"use-beep-engine"`\]

###### engineReference.title

> `readonly` **title**: `"Reference — useBeepEngine"` = `"Reference — useBeepEngine"`

##### errorReference

> `readonly` **errorReference**: `object`

###### errorReference.description

> `readonly` **description**: `"Conversion of thrown values into status text."` = `"Conversion of thrown values into status text."`

###### errorReference.file

> `readonly` **file**: `"generated/reference/shared/errors/errorMessage.md"` = `"generated/reference/shared/errors/errorMessage.md"`

###### errorReference.metadataTitle

> `readonly` **metadataTitle**: `"Error Message Reference — Professional Hello World"` = `"Error Message Reference — Professional Hello World"`

###### errorReference.slug

> `readonly` **slug**: readonly \[`"reference"`, `"error-message"`\]

###### errorReference.title

> `readonly` **title**: `"Reference — errorMessage"` = `"Reference — errorMessage"`

##### frontendGuide

> `readonly` **frontendGuide**: `object`

###### frontendGuide.description

> `readonly` **description**: `"Follow routes, components, hooks, and shared responsibilities."` = `"Follow routes, components, hooks, and shared responsibilities."`

###### frontendGuide.file

> `readonly` **file**: `"FRONTEND-GUIDE.md"` = `"FRONTEND-GUIDE.md"`

###### frontendGuide.metadataTitle

> `readonly` **metadataTitle**: `"Frontend Field Guide — Professional Hello World"` = `"Frontend Field Guide — Professional Hello World"`

###### frontendGuide.slug

> `readonly` **slug**: readonly \[`"frontend"`\]

###### frontendGuide.title

> `readonly` **title**: `"Frontend guide"` = `"Frontend guide"`

##### linkExtractionReference

> `readonly` **linkExtractionReference**: `object`

###### linkExtractionReference.description

> `readonly` **description**: `"Markdown link occurrences and extraction boundaries."` = `"Markdown link occurrences and extraction boundaries."`

###### linkExtractionReference.file

> `readonly` **file**: `"generated/reference/features/doc/validation/extractDocumentLinks.md"` = `"generated/reference/features/doc/validation/extractDocumentLinks.md"`

###### linkExtractionReference.metadataTitle

> `readonly` **metadataTitle**: `"Link Extraction Reference — Professional Hello World"` = `"Link Extraction Reference — Professional Hello World"`

###### linkExtractionReference.slug

> `readonly` **slug**: readonly \[`"reference"`, `"link-extraction"`\]

###### linkExtractionReference.title

> `readonly` **title**: `"Reference — link extraction"` = `"Reference — link extraction"`

##### mermaidReference

> `readonly` **mermaidReference**: `object`

###### mermaidReference.description

> `readonly` **description**: `"Queued diagram rendering, theme changes, and cleanup."` = `"Queued diagram rendering, theme changes, and cleanup."`

###### mermaidReference.file

> `readonly` **file**: `"generated/reference/features/doc/components/MermaidDiagram.md"` = `"generated/reference/features/doc/components/MermaidDiagram.md"`

###### mermaidReference.metadataTitle

> `readonly` **metadataTitle**: `"Mermaid Reference — Professional Hello World"` = `"Mermaid Reference — Professional Hello World"`

###### mermaidReference.slug

> `readonly` **slug**: readonly \[`"reference"`, `"mermaid"`\]

###### mermaidReference.title

> `readonly` **title**: `"Reference — MermaidDiagram"` = `"Reference — MermaidDiagram"`

##### operations

> `readonly` **operations**: `object`

###### operations.description

> `readonly` **description**: `"Run, inspect, diagnose, and publish PHW."` = `"Run, inspect, diagnose, and publish PHW."`

###### operations.file

> `readonly` **file**: `"OPERATIONS.md"` = `"OPERATIONS.md"`

###### operations.metadataTitle

> `readonly` **metadataTitle**: `"Operations — Professional Hello World"` = `"Operations — Professional Hello World"`

###### operations.slug

> `readonly` **slug**: readonly \[`"operations"`\]

###### operations.title

> `readonly` **title**: `"Operations"` = `"Operations"`

##### overview

> `readonly` **overview**: `object`

###### overview.description

> `readonly` **description**: `"Architecture, explanations, and technical ceremony."` = `"Architecture, explanations, and technical ceremony."`

###### overview.file

> `readonly` **file**: `"README.md"` = `"README.md"`

###### overview.metadataTitle

> `readonly` **metadataTitle**: `"Documentation — Professional Hello World"` = `"Documentation — Professional Hello World"`

###### overview.slug

> `readonly` **slug**: readonly \[\] = `[]`

###### overview.title

> `readonly` **title**: `"Reception"` = `"Reception"`

##### referenceOverview

> `readonly` **referenceOverview**: `object`

###### referenceOverview.description

> `readonly` **description**: `"Generated register of selected technical contracts."` = `"Generated register of selected technical contracts."`

###### referenceOverview.file

> `readonly` **file**: `"generated/reference/README.md"` = `"generated/reference/README.md"`

###### referenceOverview.metadataTitle

> `readonly` **metadataTitle**: `"Technical Reference — Professional Hello World"` = `"Technical Reference — Professional Hello World"`

###### referenceOverview.slug

> `readonly` **slug**: readonly \[`"reference"`\]

###### referenceOverview.title

> `readonly` **title**: `"Reference — index"` = `"Reference — index"`

##### soundReference

> `readonly` **soundReference**: `object`

###### soundReference.description

> `readonly` **description**: `"Playback identifiers offered by the audio panel."` = `"Playback identifiers offered by the audio panel."`

###### soundReference.file

> `readonly` **file**: `"generated/reference/features/audio-test/types/Sound.md"` = `"generated/reference/features/audio-test/types/Sound.md"`

###### soundReference.metadataTitle

> `readonly` **metadataTitle**: `"Sound Reference — Professional Hello World"` = `"Sound Reference — Professional Hello World"`

###### soundReference.slug

> `readonly` **slug**: readonly \[`"reference"`, `"sound"`\]

###### soundReference.title

> `readonly` **title**: `"Reference — Sound"` = `"Reference — Sound"`

##### themeReference

> `readonly` **themeReference**: `object`

###### themeReference.description

> `readonly` **description**: `"Provider scope, theme selection, and consumer requirements."` = `"Provider scope, theme selection, and consumer requirements."`

###### themeReference.file

> `readonly` **file**: `"generated/reference/shared/theme/ThemeProvider.md"` = `"generated/reference/shared/theme/ThemeProvider.md"`

###### themeReference.metadataTitle

> `readonly` **metadataTitle**: `"Theme Reference — Professional Hello World"` = `"Theme Reference — Professional Hello World"`

###### themeReference.slug

> `readonly` **slug**: readonly \[`"reference"`, `"theme"`\]

###### themeReference.title

> `readonly` **title**: `"Reference — theme"` = `"Reference — theme"`

##### trustBoundaries

> `readonly` **trustBoundaries**: `object`

###### trustBoundaries.description

> `readonly` **description**: `"Understand client-side access, public content, and verification limits."` = `"Understand client-side access, public content, and verification limits."`

###### trustBoundaries.file

> `readonly` **file**: `"TRUST-BOUNDARIES.md"` = `"TRUST-BOUNDARIES.md"`

###### trustBoundaries.metadataTitle

> `readonly` **metadataTitle**: `"Trust Boundaries — Professional Hello World"` = `"Trust Boundaries — Professional Hello World"`

###### trustBoundaries.slug

> `readonly` **slug**: readonly \[`"trust-boundaries"`\]

###### trustBoundaries.title

> `readonly` **title**: `"Trust Boundaries"` = `"Trust Boundaries"`

#### Remarks

Object keys are internal document identifiers. Source paths and public
slugs are separate declarations and need not match those identifiers.

Reader groups and reading order are declared separately in documentNavigation.
Adding a Markdown file to the repository does not register it here.

The const assertion preserves literal types; it does not freeze the
catalogue at runtime.

## Functions

### findDocument()

> **findDocument**(`slug`): \[`"overview"` \| `"architecture"` \| `"audioLifecycle"` \| `"operations"` \| `"frontendGuide"` \| `"documentationWorkshop"` \| `"trustBoundaries"` \| `"dependencies"` \| `"engineReference"` \| `"referenceOverview"` \| `"audioTestReference"` \| `"soundReference"` \| `"catalogueReference"` \| `"diagramViewportReference"` \| `"mermaidReference"` \| `"catalogueValidationReference"` \| `"linkExtractionReference"` \| `"destinationInspectionReference"` \| `"errorReference"` \| `"themeReference"`, [`DocumentDefinition`](#documentdefinition)\] \| `undefined`

Defined in: [features/doc/data/documents.ts:229](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/features/doc/data/documents.ts#L229)

Finds the first catalogue entry matching the supplied route segments.

#### Parameters

##### slug

readonly `string`[]

Reader-route segments excluding the /doc prefix.

#### Returns

\[`"overview"` \| `"architecture"` \| `"audioLifecycle"` \| `"operations"` \| `"frontendGuide"` \| `"documentationWorkshop"` \| `"trustBoundaries"` \| `"dependencies"` \| `"engineReference"` \| `"referenceOverview"` \| `"audioTestReference"` \| `"soundReference"` \| `"catalogueReference"` \| `"diagramViewportReference"` \| `"mermaidReference"` \| `"catalogueValidationReference"` \| `"linkExtractionReference"` \| `"destinationInspectionReference"` \| `"errorReference"` \| `"themeReference"`, [`DocumentDefinition`](#documentdefinition)\] \| `undefined`

The matching identifier and declaration, or undefined.

#### Remarks

Comparison is case-sensitive and uses slash-joined segments.
This helper does not decode, normalize, or validate its input.
Catalogue validation is responsible for rejecting duplicate routes.

***

### getDocumentRoute()

> **getDocumentRoute**(`document`): `string`

Defined in: [features/doc/data/documents.ts:212](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/features/doc/data/documents.ts#L212)

Builds a reader path from a validated document declaration.

#### Parameters

##### document

[`DocumentDefinition`](#documentdefinition)

A declaration whose slug satisfies catalogue rules.

#### Returns

`string`

A path beneath /doc, without the deployment base path.

#### Remarks

This helper joins segments without encoding or validating them.
Deployment-prefix handling belongs to the caller or routing framework.
