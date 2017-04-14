/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class EPSPostScriptLevelEnum extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** PostScript Level 2. */
			public static readonly LEVEL2: Adobe.Illustrator.EPSPostScriptLevelEnum;
			/** PostScript Level 3. */
			public static readonly LEVEL3: Adobe.Illustrator.EPSPostScriptLevelEnum;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}