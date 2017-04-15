/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ScriptLanguage extends Adobe.Csawlib.CSEnumBase {
			/** The AppleScript language. */
			public static readonly APPLESCRIPT_LANGUAGE: Adobe.Indesign.ScriptLanguage;
			/** Alias for APPLESCRIPT_LANGUAGE. The AppleScript language. */
			public static readonly applescriptLanguage: Adobe.Indesign.ScriptLanguage;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for JAVASCRIPT. The JavaScript language. */
			public static readonly javascript: Adobe.Indesign.ScriptLanguage;
			/** The JavaScript language. */
			public static readonly JAVASCRIPT: Adobe.Indesign.ScriptLanguage;
			/** Alias for UNKNOWN. Language not specified. */
			public static readonly unknown: Adobe.Indesign.ScriptLanguage;
			/** Language not specified. */
			public static readonly UNKNOWN: Adobe.Indesign.ScriptLanguage;
			/** Constructor */
			public constructor();
		}
	}
}