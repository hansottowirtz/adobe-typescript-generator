/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class MonoBitmapCompression extends Adobe.Csawlib.CSEnumBase {
			/** Alias for CCIT3. Uses CCITT Group 3 compression. */
			public static readonly ccit3: Adobe.Indesign.MonoBitmapCompression;
			/** Uses CCITT Group 3 compression. */
			public static readonly CCIT3: Adobe.Indesign.MonoBitmapCompression;
			/** Alias for CCIT4. Uses CCITT Group 4 compression. */
			public static readonly ccit4: Adobe.Indesign.MonoBitmapCompression;
			/** Uses CCITT Group 4 compression. */
			public static readonly CCIT4: Adobe.Indesign.MonoBitmapCompression;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for NONE. Uses no compression. */
			public static readonly none: Adobe.Indesign.MonoBitmapCompression;
			/** Uses no compression. */
			public static readonly NONE: Adobe.Indesign.MonoBitmapCompression;
			/** Uses Run Length compression. */
			public static readonly RUN_LENGTH: Adobe.Indesign.MonoBitmapCompression;
			/** Alias for RUN_LENGTH. Uses Run Length compression. */
			public static readonly runLength: Adobe.Indesign.MonoBitmapCompression;
			/** Alias for ZIP. Uses ZIP compression. */
			public static readonly zip: Adobe.Indesign.MonoBitmapCompression;
			/** Uses ZIP compression. */
			public static readonly ZIP: Adobe.Indesign.MonoBitmapCompression;
			/** Constructor */
			public constructor();
		}
	}
}