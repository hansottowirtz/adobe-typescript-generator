/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** The path point type: smooth/corner. */
		class PointType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Corner point. */
			public static readonly CORNER: Adobe.Illustrator.PointType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Smooth path point. */
			public static readonly SMOOTH: Adobe.Illustrator.PointType;
			/** Constructor */
			public constructor();
		}
	}
}