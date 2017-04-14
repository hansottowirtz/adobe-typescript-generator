/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class MonochromeCompression extends IllustratorEnumBase {
			/** CCITT Group 3 compression. */
			public static readonly CCIT3: MonochromeCompression;
			/** CCITT Group 4 compression. */
			public static readonly CCIT4: MonochromeCompression;
			public static readonly enumCache: CSEnumSharedCache;
			/** ZIP compression. */
			public static readonly MONOZIP: MonochromeCompression;
			/** Automatic compression. */
			public static readonly None: MonochromeCompression;
			/** RLE compression. */
			public static readonly RUNLENGTH: MonochromeCompression;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}