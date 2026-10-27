import { primitiveColors } from "./primitiveColors.css";

/**
 * Assigns interface roles to the audio feature's primitive colors.
 *
 * @remarks
 * Consumers can refer to text, surfaces, actions, and feedback roles
 * without selecting a palette shade directly.
 *
 * These aliases are static. They do not switch with the shared theme
 * provider or establish contrast compliance by themselves.
 * Some decorative styles still use literal colors outside this mapping.
 */
export const semanticColors = {
  textPrimary: primitiveColors.ivory,

  backgroundPage: primitiveColors.ebony900,
  backgroundPrimary: primitiveColors.ebony800,
  backgroundSurface: primitiveColors.ebony700,
  backgroundElevated: primitiveColors.ebony600,

  actionPrimaryDark: primitiveColors.gold700,
  actionPrimary: primitiveColors.gold500,
  actionPrimaryLight: primitiveColors.gold300,

  successDark: primitiveColors.green700,
  success: primitiveColors.green500,
  successLight: primitiveColors.green300,

  dangerDark: primitiveColors.red700,
  danger: primitiveColors.red500,
  dangerLight: primitiveColors.red300,
};
