/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** The trapping type. */
		class TrappingType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Ignore opaque trapping type. */
			public static readonly IGNOREOPAQUE: Adobe.Illustrator.TrappingType;
			/** Normal trapping type. */
			public static readonly NORMALTRAPPING: Adobe.Illustrator.TrappingType;
			/** Opaque trapping type. */
			public static readonly OPAQUE: Adobe.Illustrator.TrappingType;
			/** Transparent trapping type. */
			public static readonly TRANSPARENT: Adobe.Illustrator.TrappingType;
			/** Constructor */
			public constructor();
		}
	}
}