/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Trapping extends Adobe.Csawlib.CSEnumBase {
			/** Adobe in-RIP. */
			public static readonly ADOBE_INRIP: Adobe.Incopy.Trapping;
			/** Alias for ADOBE_INRIP. Adobe in-RIP. */
			public static readonly adobeInrip: Adobe.Incopy.Trapping;
			/** Application built-in. */
			public static readonly APPLICATION_BUILTIN: Adobe.Incopy.Trapping;
			/** Alias for APPLICATION_BUILTIN. Application built-in. */
			public static readonly applicationBuiltin: Adobe.Incopy.Trapping;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for OFF. No trapping. */
			public static readonly off: Adobe.Incopy.Trapping;
			/** No trapping. */
			public static readonly OFF: Adobe.Incopy.Trapping;
			/** Constructor */
			public constructor();
		}
	}
}