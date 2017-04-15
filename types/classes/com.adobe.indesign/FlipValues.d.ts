/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class FlipValues extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for FLIPPED. Flips the text across the path. */
			public static readonly flipped: Adobe.Indesign.FlipValues;
			/** Flips the text across the path. */
			public static readonly FLIPPED: Adobe.Indesign.FlipValues;
			/** No flip effect applied. */
			public static readonly NOT_FLIPPED: Adobe.Indesign.FlipValues;
			/** Alias for NOT_FLIPPED. No flip effect applied. */
			public static readonly notFlipped: Adobe.Indesign.FlipValues;
			/** Undefined flip effect. */
			public static readonly UNDEFINED_FLIP_VALUE: Adobe.Indesign.FlipValues;
			/** Alias for UNDEFINED_FLIP_VALUE. Undefined flip effect. */
			public static readonly undefinedFlipValue: Adobe.Indesign.FlipValues;
			/** Constructor */
			public constructor();
		}
	}
}