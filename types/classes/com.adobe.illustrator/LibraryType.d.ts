/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class LibraryType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly BRUSHES: Adobe.Illustrator.LibraryType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly GRAPHICSTYLES: Adobe.Illustrator.LibraryType;
			public static readonly ILLUSTRATORARTWORK: Adobe.Illustrator.LibraryType;
			public static readonly SWATCHES: Adobe.Illustrator.LibraryType;
			public static readonly SYMBOLS: Adobe.Illustrator.LibraryType;
			/** Constructor */
			public constructor();
		}
	}
}