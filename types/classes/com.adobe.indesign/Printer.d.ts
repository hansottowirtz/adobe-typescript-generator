/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Printer extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Prints to a PostScript file. */
			public static readonly POSTSCRIPT_FILE: Adobe.Indesign.Printer;
			/** Alias for POSTSCRIPT_FILE. Prints to a PostScript file. */
			public static readonly postscriptFile: Adobe.Indesign.Printer;
			/** Constructor */
			public constructor();
		}
	}
}