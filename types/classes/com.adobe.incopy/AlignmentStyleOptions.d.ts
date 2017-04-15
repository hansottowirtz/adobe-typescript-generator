/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class AlignmentStyleOptions extends Adobe.Csawlib.CSEnumBase {
			/** Center aligns cells. */
			public static readonly CENTER_ALIGN: Adobe.Incopy.AlignmentStyleOptions;
			/** Alias for CENTER_ALIGN. Center aligns cells. */
			public static readonly centerAlign: Adobe.Incopy.AlignmentStyleOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Left aligns cells. */
			public static readonly LEFT_ALIGN: Adobe.Incopy.AlignmentStyleOptions;
			/** Alias for LEFT_ALIGN. Left aligns cells. */
			public static readonly leftAlign: Adobe.Incopy.AlignmentStyleOptions;
			/** Right aligns cells. */
			public static readonly RIGHT_ALIGN: Adobe.Incopy.AlignmentStyleOptions;
			/** Alias for RIGHT_ALIGN. Right aligns cells. */
			public static readonly rightAlign: Adobe.Incopy.AlignmentStyleOptions;
			/**
			 * Alias for SPREADSHEET. Preserves the spreadsheet's 
			 * alignment.
			 */
			public static readonly spreadsheet: Adobe.Incopy.AlignmentStyleOptions;
			/** Preserves the spreadsheet's alignment. */
			public static readonly SPREADSHEET: Adobe.Incopy.AlignmentStyleOptions;
			/** Constructor */
			public constructor();
		}
	}
}