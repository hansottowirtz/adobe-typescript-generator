/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class InteractivePDFInteractiveElementsOptions extends Adobe.Csawlib.CSEnumBase {
			/** Draw interactive elements appearance only. */
			public static readonly APPEARANCE_ONLY: Adobe.Indesign.InteractivePDFInteractiveElementsOptions;
			/**
			 * Alias for APPEARANCE_ONLY. Draw interactive elements 
			 * appearance only.
			 */
			public static readonly appearanceOnly: Adobe.Indesign.InteractivePDFInteractiveElementsOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Include all interactive elements. */
			public static readonly INCLUDE_ALL_MEDIA: Adobe.Indesign.InteractivePDFInteractiveElementsOptions;
			/**
			 * Alias for INCLUDE_ALL_MEDIA. Include all interactive 
			 * elements.
			 */
			public static readonly includeAllMedia: Adobe.Indesign.InteractivePDFInteractiveElementsOptions;
			/** Constructor */
			public constructor();
		}
	}
}