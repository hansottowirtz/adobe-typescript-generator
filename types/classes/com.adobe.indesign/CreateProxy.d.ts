/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class CreateProxy extends Adobe.Csawlib.CSEnumBase {
			/** Alias for ALWAYS. Always creates preview images. */
			public static readonly always: Adobe.Indesign.CreateProxy;
			/** Always creates preview images. */
			public static readonly ALWAYS: Adobe.Indesign.CreateProxy;
			/** Creates preview images as needed. */
			public static readonly AS_NEEDED: Adobe.Indesign.CreateProxy;
			/** Alias for AS_NEEDED. Creates preview images as needed. */
			public static readonly asNeeded: Adobe.Indesign.CreateProxy;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}