/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Sequences extends Adobe.Csawlib.CSEnumBase {
			/** Alias for ALL. Prints all pages. */
			public static readonly all: Adobe.Indesign.Sequences;
			/** Prints all pages. */
			public static readonly ALL: Adobe.Indesign.Sequences;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for EVEN. Prints only even-numbered pages. */
			public static readonly even: Adobe.Indesign.Sequences;
			/** Prints only even-numbered pages. */
			public static readonly EVEN: Adobe.Indesign.Sequences;
			/** Alias for ODD. Prints only odd-numbered pages. */
			public static readonly odd: Adobe.Indesign.Sequences;
			/** Prints only odd-numbered pages. */
			public static readonly ODD: Adobe.Indesign.Sequences;
			/** Constructor */
			public constructor();
		}
	}
}