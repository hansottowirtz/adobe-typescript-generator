/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class OutputFlattening extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly PRESERVEAPPEARANCE: Adobe.Illustrator.OutputFlattening;
			/** Discard transparency. */
			public static readonly PRESERVEPATHS: Adobe.Illustrator.OutputFlattening;
			/** Constructor */
			public constructor();
		}
	}
}