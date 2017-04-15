/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Printer extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Prints to a PostScript file. */
			public static readonly POSTSCRIPT_FILE: Adobe.Incopy.Printer;
			/** Alias for POSTSCRIPT_FILE. Prints to a PostScript file. */
			public static readonly postscriptFile: Adobe.Incopy.Printer;
			/** Constructor */
			public constructor();
		}
	}
}