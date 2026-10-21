**PHW — Registry of Callable Authorities**

***

# PHW — Registry of Callable Authorities

## Functions

### useBeepEngine()

> **useBeepEngine**(): `object`

Defined in: [useBeepEngine.ts:35](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/features/audio-test/hooks/useBeepEngine.ts#L35)

Initializes BeepEngine for a mounted audio panel and exposes its status.

#### Returns

`object`

The nullable engine, the current status message, and the React status setter.
Consumers may use the setter to report subsequent playback results.

##### engine

> **engine**: `BeepEngine` \| `null`

##### setStatus

> **setStatus**: `Dispatch`\<`SetStateAction`\<`string`\>\>

##### status

> **status**: `string`

#### Remarks

Initialization starts in an effect after mounting. The engine remains null
until the factory resolves. Initialization failures are converted into a
readable status message instead of being thrown from the hook.

Ready means that a playback interface is available. It does not mean that
an AudioContext has already been created or that sound has been heard.

Cleanup prevents a pending initialization result from updating an abandoned
hook instance. It does not cancel initialization or dispose of engine
resources.

This hook must be called from a React function component or another hook.

#### Example

```tsx
function EngineStart() {
  const { engine, status } = useBeepEngine();

  return <p data-ready={engine !== null}>{status}</p>
}
```
