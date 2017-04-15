/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class UpdateLinkOptions extends Adobe.Csawlib.CSEnumBase {
			/** Changes the visiblity settings to match the modified file. */
			public static readonly APPLICATION_SETTINGS: Adobe.Indesign.UpdateLinkOptions;
			/**
			 * Alias for APPLICATION_SETTINGS. Changes the visiblity 
			 * settings to match the modified file.
			 */
			public static readonly applicationSettings: Adobe.Indesign.UpdateLinkOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Ignores the modified settings and maintains those specified 
			 * in the current document.
			 */
			public static readonly KEEP_OVERRIDES: Adobe.Indesign.UpdateLinkOptions;
			/**
			 * Alias for KEEP_OVERRIDES. Ignores the modified settings and 
			 * maintains those specified in the current document.
			 */
			public static readonly keepOverrides: Adobe.Indesign.UpdateLinkOptions;
			/** Alias for UNKNOWN. Unspecified update option. */
			public static readonly unknown: Adobe.Indesign.UpdateLinkOptions;
			/** Unspecified update option. */
			public static readonly UNKNOWN: Adobe.Indesign.UpdateLinkOptions;
			/** Constructor */
			public constructor();
		}
	}
}