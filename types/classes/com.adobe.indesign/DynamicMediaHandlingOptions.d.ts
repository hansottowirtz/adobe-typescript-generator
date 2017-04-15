/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class DynamicMediaHandlingOptions extends Adobe.Csawlib.CSEnumBase {
			/** Draw interactive elements appearance only. */
			public static readonly APPEARANCE_ONLY: Adobe.Indesign.DynamicMediaHandlingOptions;
			/**
			 * Alias for APPEARANCE_ONLY. Draw interactive elements 
			 * appearance only.
			 */
			public static readonly appearanceOnly: Adobe.Indesign.DynamicMediaHandlingOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Include all interactive elements. */
			public static readonly INCLUDE_ALL_MEDIA: Adobe.Indesign.DynamicMediaHandlingOptions;
			/**
			 * Alias for INCLUDE_ALL_MEDIA. Include all interactive 
			 * elements.
			 */
			public static readonly includeAllMedia: Adobe.Indesign.DynamicMediaHandlingOptions;
			/** Constructor */
			public constructor();
		}
	}
}