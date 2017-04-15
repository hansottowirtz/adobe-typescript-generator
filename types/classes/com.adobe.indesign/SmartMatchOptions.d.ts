/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class SmartMatchOptions extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Match only the style name while finding styles in target. */
			public static readonly MATCH_STYLE_NAME: Adobe.Indesign.SmartMatchOptions;
			/**
			 * Match the full path of style while finding styles in target.
			 */
			public static readonly MATCH_STYLE_PATH: Adobe.Indesign.SmartMatchOptions;
			/**
			 * Alias for MATCH_STYLE_NAME. Match only the style name while 
			 * finding styles in target.
			 */
			public static readonly matchStyleName: Adobe.Indesign.SmartMatchOptions;
			/**
			 * Alias for MATCH_STYLE_PATH. Match the full path of style 
			 * while finding styles in target.
			 */
			public static readonly matchStylePath: Adobe.Indesign.SmartMatchOptions;
			/** Constructor */
			public constructor();
		}
	}
}