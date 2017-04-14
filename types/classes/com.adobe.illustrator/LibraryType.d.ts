/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class LibraryType extends IllustratorEnumBase {
			/** Illustrator brushes library. */
			public static readonly BRUSHES: LibraryType;
			public static readonly enumCache: CSEnumSharedCache;
			/** Illustrator graphic styles library. */
			public static readonly GRAPHICSTYLES: LibraryType;
			/** Illustrator artwork. */
			public static readonly ILLUSTRATORARTWORK: LibraryType;
			/** Illustrator swatches library. */
			public static readonly SWATCHES: LibraryType;
			/** Illustrator symbols library. */
			public static readonly SYMBOLS: LibraryType;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}