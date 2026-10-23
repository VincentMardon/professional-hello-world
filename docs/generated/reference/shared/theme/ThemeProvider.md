[**PHW — Public Register of Technical Contracts**](../../README.md)

***

[PHW — Public Register of Technical Contracts](../../README.md) / shared/theme/ThemeProvider

# shared/theme/ThemeProvider

## Type Aliases

### Theme

> **Theme** = `"light"` \| `"dark"`

Defined in: [shared/theme/ThemeProvider.tsx:8](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/shared/theme/ThemeProvider.tsx#L8)

These names supported by the shared provider.

***

### ThemeContextValue

> **ThemeContextValue** = `object`

Defined in: [shared/theme/ThemeProvider.tsx:11](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/shared/theme/ThemeProvider.tsx#L11)

Theme selection and command exposed to provider consumers.

#### Properties

##### theme

> **theme**: [`Theme`](#theme)

Defined in: [shared/theme/ThemeProvider.tsx:13](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/shared/theme/ThemeProvider.tsx#L13)

Current selection within the nearest provider.

##### toggleTheme

> **toggleTheme**: () => `void`

Defined in: [shared/theme/ThemeProvider.tsx:15](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/shared/theme/ThemeProvider.tsx#L15)

Switches between light and dark without persisting the selection.

###### Returns

`void`

## Functions

### ThemeProvider()

> **ThemeProvider**(`props`): `Element`

Defined in: [shared/theme/ThemeProvider.tsx:32](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/shared/theme/ThemeProvider.tsx#L32)

Provides light/dark selection and applies its theme class to a wrapper.

#### Parameters

##### props

Children rendered within this provider's themed scope.

###### children

`ReactNode`

#### Returns

`Element`

#### Remarks

Each provider starts in dark mode and owns independent in-memory state.
Selection survives child updates while the provider remains mounted.
It is not persisted across reloads or synchronized with system preferences.

Theme styles apply within the wrapper rather than directly to document.body.

***

### useTheme()

> **useTheme**(): [`ThemeContextValue`](#themecontextvalue)

Defined in: [shared/theme/ThemeProvider.tsx:57](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/shared/theme/ThemeProvider.tsx#L57)

Reads the nearest theme provider's selection and toggle command.

#### Returns

[`ThemeContextValue`](#themecontextvalue)

The current theme and a command that switches light and dark.

#### Throws

An Error when called outside ThemeProvider.

#### Remarks

Must be called from a React function component or another hook.
