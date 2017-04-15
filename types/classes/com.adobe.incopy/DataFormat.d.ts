/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class DataFormat extends Adobe.Csawlib.CSEnumBase {
			/** Alias for ASCII. Uses ASCII format. */
			public static readonly ascii: Adobe.Incopy.DataFormat;
			/** Uses ASCII format. */
			public static readonly ASCII: Adobe.Incopy.DataFormat;
			/** Alias for BINARY. Uses binary format. */
			public static readonly binary: Adobe.Incopy.DataFormat;
			/** Uses binary format. */
			public static readonly BINARY: Adobe.Incopy.DataFormat;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}