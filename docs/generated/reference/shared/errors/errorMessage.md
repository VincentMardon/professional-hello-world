[**PHW — Public Register of Technical Contracts**](../../README.md)

***

[PHW — Public Register of Technical Contracts](../../README.md) / shared/errors/errorMessage

# shared/errors/errorMessage

## Functions

### errorMessage()

> **errorMessage**(`error`): `string`

Defined in: [shared/errors/errorMessage.ts:11](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/shared/errors/errorMessage.ts#L11)

Converts a thrown value into text suitable for a status message.

#### Parameters

##### error

`unknown`

an Error instance or another thrown value.

#### Returns

`string`

The Error message, or JavaScript's string conversion of the value.

#### Remarks

This helper does not log, translate, or sanitize the result.
String conversion of an arbitrary object can itself throw.
