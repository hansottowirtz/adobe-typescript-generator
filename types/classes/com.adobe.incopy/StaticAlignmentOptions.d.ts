/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class StaticAlignmentOptions extends Adobe.Csawlib.CSEnumBase {
			/** Center align the text. */
			public static readonly CENTER_ALIGN: Adobe.Incopy.StaticAlignmentOptions;
			/** Alias for CENTER_ALIGN. Center align the text. */
			public static readonly centerAlign: Adobe.Incopy.StaticAlignmentOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Left align the text. */
			public static readonly LEFT_ALIGN: Adobe.Incopy.StaticAlignmentOptions;
			/** Alias for LEFT_ALIGN. Left align the text. */
			public static readonly leftAlign: Adobe.Incopy.StaticAlignmentOptions;
			/** Right align the text. */
			public static readonly RIGHT_ALIGN: Adobe.Incopy.StaticAlignmentOptions;
			/** Alias for RIGHT_ALIGN. Right align the text. */
			public static readonly rightAlign: Adobe.Incopy.StaticAlignmentOptions;
			/** Constructor */
			public constructor();
		}
	}
}