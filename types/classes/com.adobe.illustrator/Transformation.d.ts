/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** The transformation type. */
		class Transformation extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Transform relative to the object's bottom edge. */
			public static readonly BOTTOM: Adobe.Illustrator.Transformation;
			/** Transform relative to the object's bottom left corner. */
			public static readonly BOTTOMLEFT: Adobe.Illustrator.Transformation;
			/** Transform relative to the object's bottom right corner. */
			public static readonly BOTTOMRIGHT: Adobe.Illustrator.Transformation;
			/** Transform relative to the object's center. */
			public static readonly CENTER: Adobe.Illustrator.Transformation;
			/** Transform relative to the illustration's page origin. */
			public static readonly DOCUMENTORIGIN: Adobe.Illustrator.Transformation;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Transform relative to the object's left edge. */
			public static readonly LEFT: Adobe.Illustrator.Transformation;
			/** Transform relative to the object's right edge. */
			public static readonly RIGHT: Adobe.Illustrator.Transformation;
			/** Transform relative to the object's top edge. */
			public static readonly TOP: Adobe.Illustrator.Transformation;
			/** Transform relative to the object's top left corner. */
			public static readonly TOPLEFT: Adobe.Illustrator.Transformation;
			/** Transform relative to the object's top right corner. */
			public static readonly TOPRIGHT: Adobe.Illustrator.Transformation;
			/** Constructor */
			public constructor();
		}
	}
}