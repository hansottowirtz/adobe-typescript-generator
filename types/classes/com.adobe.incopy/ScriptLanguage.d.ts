/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ScriptLanguage extends Adobe.Csawlib.CSEnumBase {
			/** The AppleScript language. */
			public static readonly APPLESCRIPT_LANGUAGE: Adobe.Incopy.ScriptLanguage;
			/** Alias for APPLESCRIPT_LANGUAGE. The AppleScript language. */
			public static readonly applescriptLanguage: Adobe.Incopy.ScriptLanguage;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for JAVASCRIPT. The JavaScript language. */
			public static readonly javascript: Adobe.Incopy.ScriptLanguage;
			/** The JavaScript language. */
			public static readonly JAVASCRIPT: Adobe.Incopy.ScriptLanguage;
			/** Alias for UNKNOWN. Language not specified. */
			public static readonly unknown: Adobe.Incopy.ScriptLanguage;
			/** Language not specified. */
			public static readonly UNKNOWN: Adobe.Incopy.ScriptLanguage;
			/** Constructor */
			public constructor();
		}
	}
}