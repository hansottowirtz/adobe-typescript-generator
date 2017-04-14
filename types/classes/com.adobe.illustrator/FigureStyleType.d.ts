/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class FigureStyleType extends IllustratorEnumBase {
			/** Default figure style. */
			public static readonly DEFAULTFIGURESTYLE: FigureStyleType;
			public static readonly enumCache: CSEnumSharedCache;
			/** Proportional lining style. */
			public static readonly PROPORTIONAL: FigureStyleType;
			/** Proportional oldstyle. */
			public static readonly PROPORTIONALOLDSTYLE: FigureStyleType;
			/** Tabular lining style. */
			public static readonly TABULAR: FigureStyleType;
			/** Tabular oldstyle. */
			public static readonly TABULAROLDSTYLE: FigureStyleType;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}