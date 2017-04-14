/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PrintFontDownloadMode extends IllustratorEnumBase {
			/** Download complete. */
			public static readonly DOWNLOADCOMPLETE: PrintFontDownloadMode;
			/** Download none. */
			public static readonly DOWNLOADNONE: PrintFontDownloadMode;
			/** Download subset. */
			public static readonly DOWNLOADSUBSET: PrintFontDownloadMode;
			public static readonly enumCache: CSEnumSharedCache;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}