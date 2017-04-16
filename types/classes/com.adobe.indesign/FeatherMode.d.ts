/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class FeatherMode extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for NONE. Does not use feathering. */
			public static readonly none: Adobe.Indesign.FeatherMode;
			/** Does not use feathering. */
			public static readonly NONE: Adobe.Indesign.FeatherMode;
			/** Alias for STANDARD. Uses standard feathering. */
			public static readonly standard: Adobe.Indesign.FeatherMode;
			/** Uses standard feathering. */
			public static readonly STANDARD: Adobe.Indesign.FeatherMode;
			/** Constructor */
			public constructor();
		}
	}
}