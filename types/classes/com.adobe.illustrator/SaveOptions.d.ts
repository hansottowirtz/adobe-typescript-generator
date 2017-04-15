/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class SaveOptions extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Do not save changes. */
			public static readonly DONOTSAVECHANGES: Adobe.Illustrator.SaveOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Ask the user whether to save. */
			public static readonly PROMPTTOSAVECHANGES: Adobe.Illustrator.SaveOptions;
			/** Save changes. */
			public static readonly SAVECHANGES: Adobe.Illustrator.SaveOptions;
			/** Constructor */
			public constructor();
		}
	}
}