/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class ElementPlacement extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly INSIDE: Adobe.Illustrator.ElementPlacement;
			public static readonly PLACEAFTER: Adobe.Illustrator.ElementPlacement;
			public static readonly PLACEATBEGINNING: Adobe.Illustrator.ElementPlacement;
			public static readonly PLACEATEND: Adobe.Illustrator.ElementPlacement;
			public static readonly PLACEBEFORE: Adobe.Illustrator.ElementPlacement;
			/** Constructor */
			public constructor();
		}
	}
}