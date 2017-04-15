/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class FlipValues extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for FLIPPED. Flips the text across the path. */
			public static readonly flipped: Adobe.Incopy.FlipValues;
			/** Flips the text across the path. */
			public static readonly FLIPPED: Adobe.Incopy.FlipValues;
			/** No flip effect applied. */
			public static readonly NOT_FLIPPED: Adobe.Incopy.FlipValues;
			/** Alias for NOT_FLIPPED. No flip effect applied. */
			public static readonly notFlipped: Adobe.Incopy.FlipValues;
			/** Undefined flip effect. */
			public static readonly UNDEFINED_FLIP_VALUE: Adobe.Incopy.FlipValues;
			/** Alias for UNDEFINED_FLIP_VALUE. Undefined flip effect. */
			public static readonly undefinedFlipValue: Adobe.Incopy.FlipValues;
			/** Constructor */
			public constructor();
		}
	}
}