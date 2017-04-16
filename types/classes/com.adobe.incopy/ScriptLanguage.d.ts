/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ScriptLanguage extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for JAVASCRIPT. The JavaScript language. */
			public static readonly javascript: Adobe.Incopy.ScriptLanguage;
			/** The JavaScript language. */
			public static readonly JAVASCRIPT: Adobe.Incopy.ScriptLanguage;
			/** Alias for UNKNOWN. Language not specified. */
			public static readonly unknown: Adobe.Incopy.ScriptLanguage;
			/** Language not specified. */
			public static readonly UNKNOWN: Adobe.Incopy.ScriptLanguage;
			/** The VBScript language. */
			public static readonly VISUAL_BASIC: Adobe.Incopy.ScriptLanguage;
			/** Alias for VISUAL_BASIC. The VBScript language. */
			public static readonly visualBasic: Adobe.Incopy.ScriptLanguage;
			/** Constructor */
			public constructor();
		}
	}
}