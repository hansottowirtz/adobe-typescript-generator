/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class DocumentType extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			/** EPS file format. */
			public static readonly EPS: DocumentType;
			/** FXG file format. */
			public static readonly FXG: DocumentType;
			/** Illustrator file format. */
			public static readonly ILLUSTRATOR: DocumentType;
			/** Acrobat PDF file format. */
			public static readonly PDF: DocumentType;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}