/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class UpdateLinkOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Changes the visiblity settings to match the modified file.
			 * @type {Adobe.Indesign.UpdateLinkOptions}
			 * @readonly
			 */
			public static readonly APPLICATION_SETTINGS: Adobe.Indesign.UpdateLinkOptions;
			/**
			 * Alias for APPLICATION_SETTINGS. Changes the visiblity 
			 * settings to match the modified file.
			 * @type {Adobe.Indesign.UpdateLinkOptions}
			 * @readonly
			 */
			public static readonly applicationSettings: Adobe.Indesign.UpdateLinkOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Ignores the modified settings and maintains those specified 
			 * in the current document.
			 * @type {Adobe.Indesign.UpdateLinkOptions}
			 * @readonly
			 */
			public static readonly KEEP_OVERRIDES: Adobe.Indesign.UpdateLinkOptions;
			/**
			 * Alias for KEEP_OVERRIDES. Ignores the modified settings and 
			 * maintains those specified in the current document.
			 * @type {Adobe.Indesign.UpdateLinkOptions}
			 * @readonly
			 */
			public static readonly keepOverrides: Adobe.Indesign.UpdateLinkOptions;
			/**
			 * Alias for UNKNOWN. Unspecified update option.
			 * @type {Adobe.Indesign.UpdateLinkOptions}
			 * @readonly
			 */
			public static readonly unknown: Adobe.Indesign.UpdateLinkOptions;
			/**
			 * Unspecified update option.
			 * @type {Adobe.Indesign.UpdateLinkOptions}
			 * @readonly
			 */
			public static readonly UNKNOWN: Adobe.Indesign.UpdateLinkOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}