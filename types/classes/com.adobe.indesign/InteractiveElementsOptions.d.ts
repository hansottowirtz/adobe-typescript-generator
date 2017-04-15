/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class InteractiveElementsOptions extends Adobe.Csawlib.CSEnumBase {
			/** Draw interactive elements appearance only. */
			public static readonly APPEARANCE_ONLY: Adobe.Indesign.InteractiveElementsOptions;
			/**
			 * Alias for APPEARANCE_ONLY. Draw interactive elements 
			 * appearance only.
			 */
			public static readonly appearanceOnly: Adobe.Indesign.InteractiveElementsOptions;
			/** Do not include interactive elements. */
			public static readonly DO_NOT_INCLUDE: Adobe.Indesign.InteractiveElementsOptions;
			/**
			 * Alias for DO_NOT_INCLUDE. Do not include interactive 
			 * elements.
			 */
			public static readonly doNotInclude: Adobe.Indesign.InteractiveElementsOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}