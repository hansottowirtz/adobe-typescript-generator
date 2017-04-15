/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PDFProfileSelector extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Uses the document's CMYK profile. */
			public static readonly USE_DOCUMENT: Adobe.Indesign.PDFProfileSelector;
			/** Uses the monitor's color profile. */
			public static readonly USE_MONITOR_PROFILE: Adobe.Indesign.PDFProfileSelector;
			/** Uses no profile. */
			public static readonly USE_NO_PROFILE: Adobe.Indesign.PDFProfileSelector;
			/** Alias for USE_DOCUMENT. Uses the document's CMYK profile. */
			public static readonly useDocument: Adobe.Indesign.PDFProfileSelector;
			/**
			 * Alias for USE_MONITOR_PROFILE. Uses the monitor's color 
			 * profile.
			 */
			public static readonly useMonitorProfile: Adobe.Indesign.PDFProfileSelector;
			/** Alias for USE_NO_PROFILE. Uses no profile. */
			public static readonly useNoProfile: Adobe.Indesign.PDFProfileSelector;
			/** Alias for WORKING. Uses the working CMYK profile. */
			public static readonly working: Adobe.Indesign.PDFProfileSelector;
			/** Uses the working CMYK profile. */
			public static readonly WORKING: Adobe.Indesign.PDFProfileSelector;
			/** Constructor */
			public constructor();
		}
	}
}