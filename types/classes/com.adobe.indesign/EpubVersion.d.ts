/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class EpubVersion extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for EPUB2. EPUB 2.0.1. */
			public static readonly epub2: Adobe.Indesign.EpubVersion;
			/** EPUB 2.0.1. */
			public static readonly EPUB2: Adobe.Indesign.EpubVersion;
			/** Alias for EPUB3. EPUB 3.0. */
			public static readonly epub3: Adobe.Indesign.EpubVersion;
			/** EPUB 3.0. */
			public static readonly EPUB3: Adobe.Indesign.EpubVersion;
			/** EPUB 3.0 with Layout. */
			public static readonly EPUB3_WITH_LAYOUT: Adobe.Indesign.EpubVersion;
			/** Alias for EPUB3_WITH_LAYOUT. EPUB 3.0 with Layout. */
			public static readonly epub3WithLayout: Adobe.Indesign.EpubVersion;
			/** Constructor */
			public constructor();
		}
	}
}