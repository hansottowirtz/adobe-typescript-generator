/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class UpdateLinkOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Changes the visiblity settings to match the modified file.
			 * @type {Adobe.Incopy.UpdateLinkOptions}
			 * @readonly
			 */
			public static readonly APPLICATION_SETTINGS: Adobe.Incopy.UpdateLinkOptions;
			/**
			 * Alias for APPLICATION_SETTINGS. Changes the visiblity 
			 * settings to match the modified file.
			 * @type {Adobe.Incopy.UpdateLinkOptions}
			 * @readonly
			 */
			public static readonly applicationSettings: Adobe.Incopy.UpdateLinkOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Ignores the modified settings and maintains those specified 
			 * in the current document.
			 * @type {Adobe.Incopy.UpdateLinkOptions}
			 * @readonly
			 */
			public static readonly KEEP_OVERRIDES: Adobe.Incopy.UpdateLinkOptions;
			/**
			 * Alias for KEEP_OVERRIDES. Ignores the modified settings and 
			 * maintains those specified in the current document.
			 * @type {Adobe.Incopy.UpdateLinkOptions}
			 * @readonly
			 */
			public static readonly keepOverrides: Adobe.Incopy.UpdateLinkOptions;
			/**
			 * Alias for UNKNOWN. Unspecified update option.
			 * @type {Adobe.Incopy.UpdateLinkOptions}
			 * @readonly
			 */
			public static readonly unknown: Adobe.Incopy.UpdateLinkOptions;
			/**
			 * Unspecified update option.
			 * @type {Adobe.Incopy.UpdateLinkOptions}
			 * @readonly
			 */
			public static readonly UNKNOWN: Adobe.Incopy.UpdateLinkOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}