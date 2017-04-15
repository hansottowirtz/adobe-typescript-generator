/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class DocumentType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** EPS file format. */
			public static readonly EPS: Adobe.Illustrator.DocumentType;
			/** FXG file format. */
			public static readonly FXG: Adobe.Illustrator.DocumentType;
			/** Illustrator file format. */
			public static readonly ILLUSTRATOR: Adobe.Illustrator.DocumentType;
			/** Acrobat PDF file format. */
			public static readonly PDF: Adobe.Illustrator.DocumentType;
			/** Constructor */
			public constructor();
		}
	}
}