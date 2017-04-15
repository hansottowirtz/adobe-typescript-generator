/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ChangebarLocations extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Change bars are in the left margin. */
			public static readonly LEFT_ALIGN: Adobe.Indesign.ChangebarLocations;
			/** Alias for LEFT_ALIGN. Change bars are in the left margin. */
			public static readonly leftAlign: Adobe.Indesign.ChangebarLocations;
			/** Change bars are in the right margin. */
			public static readonly RIGHT_ALIGN: Adobe.Indesign.ChangebarLocations;
			/** Alias for RIGHT_ALIGN. Change bars are in the right margin. */
			public static readonly rightAlign: Adobe.Indesign.ChangebarLocations;
			/** Constructor */
			public constructor();
		}
	}
}