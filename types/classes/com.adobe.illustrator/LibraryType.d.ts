/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Illustrator library types. */
		class LibraryType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Illustrator brushes library. */
			public static readonly BRUSHES: Adobe.Illustrator.LibraryType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Illustrator graphic styles library. */
			public static readonly GRAPHICSTYLES: Adobe.Illustrator.LibraryType;
			/** Illustrator artwork. */
			public static readonly ILLUSTRATORARTWORK: Adobe.Illustrator.LibraryType;
			/** Illustrator swatches library. */
			public static readonly SWATCHES: Adobe.Illustrator.LibraryType;
			/** Illustrator symbols library. */
			public static readonly SYMBOLS: Adobe.Illustrator.LibraryType;
			/** Constructor */
			public constructor();
		}
	}
}