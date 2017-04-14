/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class CaseChangeType extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			/** Change to lower case. */
			public static readonly LOWERCASE: CaseChangeType;
			/** Change to sentence case. */
			public static readonly SENTENCECASE: CaseChangeType;
			/** Change to title case. */
			public static readonly TITLECASE: CaseChangeType;
			/** Change to upper case. */
			public static readonly UPPERCASE: CaseChangeType;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}