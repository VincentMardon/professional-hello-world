[**PHW — Public Register of Technical Contracts**](../../../README.md)

***

[PHW — Public Register of Technical Contracts](../../../README.md) / features/audio-test/hooks/useAudioTest

# features/audio-test/hooks/useAudioTest

## Functions

### useAudioTest()

> **useAudioTest**(): `object`

Defined in: [features/audio-test/hooks/useAudioTest.ts:34](https://github.com/VincentMardon/professional-hello-world/blob/main/frontend/src/features/audio-test/hooks/useAudioTest.ts#L34)

Coordinates the audio panel's settings, readiness, and playback requests.

#### Returns

Readiness and status, selected sound and sample rate with their setters,
volume with its change handler, and the asynchronous playback command.

##### changeVolume

> **changeVolume**: (`value`) => `void`

Stores a percentage and forwards its normalized value to the ready engine.

###### Parameters

###### value

`number`

Expected volume percentage from 0 to 100.

###### Returns

`void`

###### Remarks

This handler does not clamp or validate its argument. The calling control
is responsible for providing a value in the expected range.
Before readiness, only local state changes; play reapplies the stored value.

##### isReady

> **isReady**: `boolean`

##### play

> **play**: () => `Promise`\<`void`\>

Requests the selected sound using this invocation's settings.

###### Returns

`Promise`\<`void`\>

A promise that settles after the request and its status handling.
Handled engine failures are reported through status rather than rethrown.

###### Remarks

Requests are not serialized. Concurrent calls may overlap, and their
completion order determines subsequent status updates.

##### sampleRate

> **sampleRate**: `SampleRate`

##### selectedSound

> **selectedSound**: [`Sound`](../types/Sound.md#sound)

##### setSampleRate

> **setSampleRate**: `Dispatch`\<`SetStateAction`\<`SampleRate`\>\>

##### setSelectedSound

> **setSelectedSound**: `Dispatch`\<`SetStateAction`\<[`Sound`](../types/Sound.md#sound)\>\>

##### status

> **status**: `string`

##### volume

> **volume**: `number`

#### Remarks

Each hook instance owns its selection and volume state. Defaults are
startupBeep, 48000 Hz, and 100 percent volume.

Readiness means that useBeepEngine has supplied a playback interface.
It does not confirm that audio output exists or has been heard.

Call play from a user interaction so the engine can request browser audio
access. A request made before initialization completes is ignored.

Playback uses the settings captured by that invocation. A successful
promise updates the status to "Started"; it does not report sound completion.
Playback errors are converted into status messages.

Volume changes update local state and, when available, the engine's shared
gain. They can therefore affect sounds that are already playing.

Settings are held in memory for this mounted instance and are not persisted.
This hook must be called from a React function component or another hook.
