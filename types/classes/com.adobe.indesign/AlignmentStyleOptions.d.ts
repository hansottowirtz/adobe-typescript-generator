/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class AlignmentStyleOptions extends Adobe.Csawlib.CSEnumBase {
			/** Center aligns cells. */
			public static readonly CENTER_ALIGN: Adobe.Indesign.AlignmentStyleOptions;
			/** Alias for CENTER_ALIGN. Center aligns cells. */
			public static readonly centerAlign: Adobe.Indesign.AlignmentStyleOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Left aligns cells. */
			public static readonly LEFT_ALIGN: Adobe.Indesign.AlignmentStyleOptions;
			/** Alias for LEFT_ALIGN. Left aligns cells. */
			public static readonly leftAlign: Adobe.Indesign.AlignmentStyleOptions;
			/** Right aligns cells. */
			public static readonly RIGHT_ALIGN: Adobe.Indesign.AlignmentStyleOptions;
			/** Alias for RIGHT_ALIGN. Right aligns cells. */
			public static readonly rightAlign: Adobe.Indesign.AlignmentStyleOptions;
			/**
			 * Alias for SPREADSHEET. Preserves the spreadsheet's 
			 * alignment.
			 */
			public static readonly spreadsheet: Adobe.Indesign.AlignmentStyleOptions;
			/** Preserves the spreadsheet's alignment. */
			public static readonly SPREADSHEET: Adobe.Indesign.AlignmentStyleOptions;
			/** Constructor */
			public constructor();
		}
	}
}