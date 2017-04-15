/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** The monochrome compression type. */
		class MonochromeCompression extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** CCITT Group 3 compression. */
			public static readonly CCIT3: Adobe.Illustrator.MonochromeCompression;
			/** CCITT Group 4 compression. */
			public static readonly CCIT4: Adobe.Illustrator.MonochromeCompression;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** ZIP compression. */
			public static readonly MONOZIP: Adobe.Illustrator.MonochromeCompression;
			/** Automatic compression. */
			public static readonly None: Adobe.Illustrator.MonochromeCompression;
			/** RLE compression. */
			public static readonly RUNLENGTH: Adobe.Illustrator.MonochromeCompression;
			/** Constructor */
			public constructor();
		}
	}
}