/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** The PostScript levels available when saving EPS files. */
		class EPSPostScriptLevelEnum extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** PostScript Level 2. */
			public static readonly LEVEL2: Adobe.Illustrator.EPSPostScriptLevelEnum;
			/** PostScript Level 3. */
			public static readonly LEVEL3: Adobe.Illustrator.EPSPostScriptLevelEnum;
			/** Constructor */
			public constructor();
		}
	}
}