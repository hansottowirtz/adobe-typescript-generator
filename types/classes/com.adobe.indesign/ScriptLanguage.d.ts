/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ScriptLanguage extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for JAVASCRIPT. The JavaScript language. */
			public static readonly javascript: Adobe.Indesign.ScriptLanguage;
			/** The JavaScript language. */
			public static readonly JAVASCRIPT: Adobe.Indesign.ScriptLanguage;
			/** Alias for UNKNOWN. Language not specified. */
			public static readonly unknown: Adobe.Indesign.ScriptLanguage;
			/** Language not specified. */
			public static readonly UNKNOWN: Adobe.Indesign.ScriptLanguage;
			/** The VBScript language. */
			public static readonly VISUAL_BASIC: Adobe.Indesign.ScriptLanguage;
			/** Alias for VISUAL_BASIC. The VBScript language. */
			public static readonly visualBasic: Adobe.Indesign.ScriptLanguage;
			/** Constructor */
			public constructor();
		}
	}
}