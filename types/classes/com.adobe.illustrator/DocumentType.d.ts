/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class DocumentType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly EPS: Adobe.Illustrator.DocumentType;
			public static readonly FXG: Adobe.Illustrator.DocumentType;
			public static readonly ILLUSTRATOR: Adobe.Illustrator.DocumentType;
			public static readonly PDF: Adobe.Illustrator.DocumentType;
			/** Constructor */
			public constructor();
		}
	}
}