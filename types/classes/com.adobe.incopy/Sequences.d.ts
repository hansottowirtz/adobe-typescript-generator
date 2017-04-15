/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Sequences extends Adobe.Csawlib.CSEnumBase {
			/** Alias for ALL. Prints all pages. */
			public static readonly all: Adobe.Incopy.Sequences;
			/** Prints all pages. */
			public static readonly ALL: Adobe.Incopy.Sequences;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for EVEN. Prints only even-numbered pages. */
			public static readonly even: Adobe.Incopy.Sequences;
			/** Prints only even-numbered pages. */
			public static readonly EVEN: Adobe.Incopy.Sequences;
			/** Alias for ODD. Prints only odd-numbered pages. */
			public static readonly odd: Adobe.Incopy.Sequences;
			/** Prints only odd-numbered pages. */
			public static readonly ODD: Adobe.Incopy.Sequences;
			/** Constructor */
			public constructor();
		}
	}
}