/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class StaticAlignmentOptions extends Adobe.Csawlib.CSEnumBase {
			/** Center align the text. */
			public static readonly CENTER_ALIGN: Adobe.Indesign.StaticAlignmentOptions;
			/** Alias for CENTER_ALIGN. Center align the text. */
			public static readonly centerAlign: Adobe.Indesign.StaticAlignmentOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Left align the text. */
			public static readonly LEFT_ALIGN: Adobe.Indesign.StaticAlignmentOptions;
			/** Alias for LEFT_ALIGN. Left align the text. */
			public static readonly leftAlign: Adobe.Indesign.StaticAlignmentOptions;
			/** Right align the text. */
			public static readonly RIGHT_ALIGN: Adobe.Indesign.StaticAlignmentOptions;
			/** Alias for RIGHT_ALIGN. Right align the text. */
			public static readonly rightAlign: Adobe.Indesign.StaticAlignmentOptions;
			/** Constructor */
			public constructor();
		}
	}
}