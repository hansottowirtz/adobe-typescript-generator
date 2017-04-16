/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ColorModel extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for PROCESS. Process color. */
			public static readonly process: Adobe.Incopy.ColorModel;
			/** Process color. */
			public static readonly PROCESS: Adobe.Incopy.ColorModel;
			/** Alias for REGISTRATION. Registration color. */
			public static readonly registration: Adobe.Incopy.ColorModel;
			/** Registration color. */
			public static readonly REGISTRATION: Adobe.Incopy.ColorModel;
			/** Constructor */
			public constructor();
		}
	}
}