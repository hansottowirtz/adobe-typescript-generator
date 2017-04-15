/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class CaseChangeType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Change to lower case. */
			public static readonly LOWERCASE: Adobe.Illustrator.CaseChangeType;
			/** Change to sentence case. */
			public static readonly SENTENCECASE: Adobe.Illustrator.CaseChangeType;
			/** Change to title case. */
			public static readonly TITLECASE: Adobe.Illustrator.CaseChangeType;
			/** Change to upper case. */
			public static readonly UPPERCASE: Adobe.Illustrator.CaseChangeType;
			/** Constructor */
			public constructor();
		}
	}
}