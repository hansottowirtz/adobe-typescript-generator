/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** The ink type. */
		class InkType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Black color ink. */
			public static readonly BLACKINK: Adobe.Illustrator.InkType;
			/** Custom color ink. */
			public static readonly CUSTOMINK: Adobe.Illustrator.InkType;
			/** Cyan color ink. */
			public static readonly CYANINK: Adobe.Illustrator.InkType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Magenta color ink. */
			public static readonly MAGENTAINK: Adobe.Illustrator.InkType;
			/** Yellow color ink. */
			public static readonly YELLOWINK: Adobe.Illustrator.InkType;
			/** Constructor */
			public constructor();
		}
	}
}