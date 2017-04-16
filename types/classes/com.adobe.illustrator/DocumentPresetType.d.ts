/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class DocumentPresetType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly BasicCMYK: Adobe.Illustrator.DocumentPresetType;
			public static readonly BasicRGB: Adobe.Illustrator.DocumentPresetType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly Mobile: Adobe.Illustrator.DocumentPresetType;
			public static readonly Print: Adobe.Illustrator.DocumentPresetType;
			public static readonly Video: Adobe.Illustrator.DocumentPresetType;
			public static readonly Web: Adobe.Illustrator.DocumentPresetType;
			/** Constructor */
			public constructor();
		}
	}
}