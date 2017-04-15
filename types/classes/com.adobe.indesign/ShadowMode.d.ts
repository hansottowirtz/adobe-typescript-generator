/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ShadowMode extends Adobe.Csawlib.CSEnumBase {
			/** Alias for DROP. Uses a standard blurred drop shadow. */
			public static readonly drop: Adobe.Indesign.ShadowMode;
			/** Uses a standard blurred drop shadow. */
			public static readonly DROP: Adobe.Indesign.ShadowMode;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for NONE. Does not use a shadow. */
			public static readonly none: Adobe.Indesign.ShadowMode;
			/** Does not use a shadow. */
			public static readonly NONE: Adobe.Indesign.ShadowMode;
			/** Constructor */
			public constructor();
		}
	}
}